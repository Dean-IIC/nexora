"use client";

import { startTransition, useActionState, useState } from "react";
import Link from "next/link";
import { Loader2, ShieldCheck } from "lucide-react";

import { registerTeam } from "@/actions/register";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { TrackSlug } from "@/lib/data/tracks";
import { initialFormState } from "@/lib/validations";
import { FormField, FormStatus, Honeypot } from "./form-field";
import { MemberFields, TrackFields } from "./register-team-fields";

export function RegisterForm({ defaultTrack }: { defaultTrack?: TrackSlug }) {
  const [state, formAction, pending] = useActionState(registerTeam, initialFormState);
  const [track, setTrack] = useState<TrackSlug | "">(defaultTrack ?? "");
  const [teamSize, setTeamSize] = useState(4);
  const errors = state.fieldErrors;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-10 text-center">
        <ShieldCheck className="size-12 text-emerald-500" aria-hidden />
        <h2 className="text-2xl font-semibold">You&apos;re in the queue!</h2>
        <p role="status" className="max-w-md text-muted-foreground">{state.message}</p>
        <Button asChild variant="outline"><Link href="/tracks">Explore your track</Link></Button>
      </div>
    );
  }

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

      <FormField id="teamName" label="Team name" required errors={errors?.teamName}>
        {(p) => <Input {...p} name="teamName" maxLength={60} required autoComplete="off" />}
      </FormField>
      <FormField id="institution" label="Institution" required errors={errors?.institution}>
        {(p) => <Input {...p} name="institution" maxLength={120} required autoComplete="organization" />}
      </FormField>
      <FormField id="leaderName" label="Team lead name" required errors={errors?.leaderName}>
        {(p) => <Input {...p} name="leaderName" maxLength={80} required autoComplete="name" />}
      </FormField>
      <FormField id="leaderEmail" label="Team lead email" required errors={errors?.leaderEmail}>
        {(p) => <Input {...p} name="leaderEmail" type="email" required autoComplete="email" />}
      </FormField>
      <FormField id="leaderPhone" label="Team lead phone" required hint="Include country code, e.g. +91 98765 43210" errors={errors?.leaderPhone}>
        {(p) => <Input {...p} name="leaderPhone" type="tel" required autoComplete="tel" pattern="\+?[0-9 ]{10,15}" />}
      </FormField>
      <div className="hidden sm:block" />

      <MemberFields teamSize={teamSize} onTeamSizeChange={setTeamSize} errors={errors} />
      <TrackFields track={track} onTrackChange={setTrack} errors={errors} />

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="agreedToRules" required className="mt-0.5 size-4 accent-[var(--primary)]" aria-describedby="agree-error" />
          <span>
            I have read and agree to the <Link href="/rules" className="text-primary underline-offset-4 hover:underline">rules and code of conduct</Link>, including the responsible-security policy.
          </span>
        </label>
        {errors?.agreedToRules?.[0] && <p id="agree-error" className="mt-2 text-xs text-destructive">{errors.agreedToRules[0]}</p>}
      </div>

      <Button type="submit" variant="gradient" size="lg" disabled={pending} className="sm:col-span-2">
        {pending ? <><Loader2 className="animate-spin" aria-hidden /> Submitting…</> : "Submit registration"}
      </Button>
    </form>
  );
}
