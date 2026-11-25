"use server";

import { createClient, SupabaseNotConfiguredError } from "@/lib/supabase/server";
import { contactSchema, type FormState } from "@/lib/validations";

export async function sendContactMessage(_prev: FormState, formData: FormData): Promise<FormState> {
  if (formData.get("company")) return { status: "success", message: "Message sent." };

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    if (error) {
      console.error("[sendContactMessage] insert failed:", error.code, error.message);
      return { status: "error", message: "We couldn't send your message. Please try again shortly." };
    }
    return { status: "success", message: "Thanks! The organising team will reply within 48 hours." };
  } catch (err) {
    if (err instanceof SupabaseNotConfiguredError) {
      return { status: "error", message: "The contact form is not configured yet. Please email us instead." };
    }
    console.error("[sendContactMessage] unexpected error:", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
