import { z } from "zod";

import { tracks } from "@/lib/data/tracks";

const problemIds = tracks.flatMap((t) => t.problems.map((p) => p.id));

export const registrationSchema = z
  .object({
    teamName: z.string().trim().min(2, "Team name is too short").max(60),
    leaderName: z.string().trim().min(2, "Enter the team lead's full name").max(80),
    leaderEmail: z.string().trim().toLowerCase().email("Enter a valid email address"),
    leaderPhone: z
      .string()
      .trim()
      .regex(/^\+?[0-9 ]{10,15}$/, "Enter a valid phone number (10–15 digits)"),
    institution: z.string().trim().min(2, "Enter your institution").max(120),
    track: z.enum(["edge-iot", "cyber-security"], { message: "Choose a track" }),
    teamSize: z.coerce.number().int().min(2, "Teams need at least 2 members").max(4, "Teams can have at most 4 members"),
    members: z.array(z.string().trim().max(80)).max(3),
    problemStatement: z.string().refine((v) => problemIds.includes(v), "Choose a problem statement"),
    ideaAbstract: z.string().trim().min(50, "Abstract must be at least 50 characters").max(1500),
    githubUrl: z
      .string()
      .trim()
      .url("Enter a full URL starting with https://")
      .startsWith("https://", "Use an https:// link")
      .optional()
      .or(z.literal("").transform(() => undefined)),
    agreedToRules: z.literal("on", { message: "You must accept the rules and code of conduct" }),
  })
  .superRefine((data, ctx) => {
    const prefix = data.track === "edge-iot" ? "IOT-" : "CYB-";
    if (!data.problemStatement.startsWith(prefix)) {
      ctx.addIssue({ code: "custom", path: ["problemStatement"], message: "This problem statement belongs to the other track" });
    }
    const filled = data.members.filter(Boolean).length;
    if (filled !== data.teamSize - 1) {
      ctx.addIssue({ code: "custom", path: ["members"], message: `Add ${data.teamSize - 1} teammate name(s) for a team of ${data.teamSize}` });
    }
  });

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialFormState: FormState = { status: "idle" };
