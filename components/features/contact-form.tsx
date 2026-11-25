"use client";

import { startTransition, useActionState } from "react";
import { Loader2, Send } from "lucide-react";

import { sendContactMessage } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { initialFormState } from "@/lib/validations";
import { FormField, FormStatus, Honeypot } from "./form-field";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialFormState);
  const errors = state.fieldErrors;

  return (
    <form
      onSubmit={(e) => {
        // Submit via transition so React does not reset the fields when validation fails.
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => formAction(data));
      }}
      className="relative grid gap-5 sm:grid-cols-2"
    >
      <Honeypot />
      <div className="sm:col-span-2"><FormStatus status={state.status} message={state.message} /></div>
      <FormField id="name" label="Name" required errors={errors?.name}>
        {(p) => <Input {...p} name="name" required maxLength={80} autoComplete="name" />}
      </FormField>
      <FormField id="email" label="Email" required errors={errors?.email}>
        {(p) => <Input {...p} name="email" type="email" required autoComplete="email" />}
      </FormField>
      <FormField id="subject" label="Subject" required errors={errors?.subject} className="sm:col-span-2">
        {(p) => <Input {...p} name="subject" required maxLength={120} />}
      </FormField>
      <FormField id="message" label="Message" required errors={errors?.message} className="sm:col-span-2">
        {(p) => <Textarea {...p} name="message" rows={6} required minLength={10} maxLength={2000} />}
      </FormField>
      <Button type="submit" disabled={pending} className="sm:col-span-2 sm:w-fit">
        {pending ? <Loader2 className="animate-spin" aria-hidden /> : <Send aria-hidden />}
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
