"use server";

import { createClient, SupabaseNotConfiguredError } from "@/lib/supabase/server";
import { registrationSchema, type FormState } from "@/lib/validations";

export async function registerTeam(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("company")) return { status: "success", message: "Registration received." };

  const parsed = registrationSchema.safeParse({
    teamName: formData.get("teamName"),
    leaderName: formData.get("leaderName"),
    leaderEmail: formData.get("leaderEmail"),
    leaderPhone: formData.get("leaderPhone"),
    institution: formData.get("institution"),
    track: formData.get("track"),
    teamSize: formData.get("teamSize"),
    members: formData.getAll("members").map(String),
    problemStatement: formData.get("problemStatement"),
    ideaAbstract: formData.get("ideaAbstract"),
    githubUrl: formData.get("githubUrl") ?? "",
    agreedToRules: formData.get("agreedToRules"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const d = parsed.data;

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("registrations").insert({
      team_name: d.teamName,
      leader_name: d.leaderName,
      leader_email: d.leaderEmail,
      leader_phone: d.leaderPhone,
      institution: d.institution,
      track: d.track,
      team_size: d.teamSize,
      members: d.members.filter(Boolean),
      problem_statement: d.problemStatement,
      idea_abstract: d.ideaAbstract,
      github_url: d.githubUrl ?? null,
      agreed_to_rules: true,
    });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "error",
          message: "A team with this name or team-lead email is already registered.",
        };
      }
      console.error("[registerTeam] insert failed:", error.code, error.message);
      return { status: "error", message: "We couldn't save your registration. Please try again shortly." };
    }

    return {
      status: "success",
      message: `Team "${d.teamName}" is registered for the ${d.track === "edge-iot" ? "Edge IoT" : "Cyber Security"} track. Watch ${d.leaderEmail} for shortlisting updates.`,
    };
  } catch (err) {
    if (err instanceof SupabaseNotConfiguredError) {
      return { status: "error", message: "Registrations are not open yet — the database is not configured." };
    }
    console.error("[registerTeam] unexpected error:", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
