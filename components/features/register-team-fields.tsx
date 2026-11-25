"use client";

import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { tracks, type TrackSlug } from "@/lib/data/tracks";
import { FormField } from "./form-field";

type Errors = Record<string, string[] | undefined> | undefined;

export function TrackFields({
  track,
  onTrackChange,
  errors,
}: {
  track: TrackSlug | "";
  onTrackChange: (t: TrackSlug | "") => void;
  errors: Errors;
}) {
  const problems = tracks.find((t) => t.slug === track)?.problems ?? [];

  return (
    <>
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm font-medium">
          Track <span aria-hidden className="text-destructive">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {tracks.map((t) => (
            <label
              key={t.slug}
              className="flex cursor-pointer items-center gap-3 rounded-lg border bg-background/50 p-4 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50"
            >
              <input
                type="radio"
                name="track"
                value={t.slug}
                checked={track === t.slug}
                onChange={() => onTrackChange(t.slug)}
                className="size-4 accent-[var(--primary)]"
                required
              />
              <span>
                <span className="block font-medium">Track {t.number} — {t.name}</span>
                <span className="text-xs text-muted-foreground">{t.tagline}</span>
              </span>
            </label>
          ))}
        </div>
        {errors?.track?.[0] && <p className="mt-2 text-xs text-destructive">{errors.track[0]}</p>}
      </fieldset>

      <FormField id="problemStatement" label="Problem statement" required errors={errors?.problemStatement} className="sm:col-span-2">
        {(p) => (
          <NativeSelect {...p} name="problemStatement" required disabled={!track} defaultValue="" key={track}>
            <option value="" disabled>{track ? "Choose a problem statement" : "Select a track first"}</option>
            {problems.map((ps) => (
              <option key={ps.id} value={ps.id}>{ps.id} — {ps.title}</option>
            ))}
          </NativeSelect>
        )}
      </FormField>

      <FormField id="ideaAbstract" label="Idea abstract" required hint="50–1500 characters. What will you build and why?" errors={errors?.ideaAbstract} className="sm:col-span-2">
        {(p) => <Textarea {...p} name="ideaAbstract" rows={5} minLength={50} maxLength={1500} required />}
      </FormField>

      <FormField id="githubUrl" label="GitHub / portfolio link" hint="Optional" errors={errors?.githubUrl} className="sm:col-span-2">
        {(p) => <Input {...p} name="githubUrl" type="url" placeholder="https://github.com/your-team" />}
      </FormField>
    </>
  );
}

export function MemberFields({ teamSize, onTeamSizeChange, errors }: { teamSize: number; onTeamSizeChange: (n: number) => void; errors: Errors }) {
  return (
    <>
      <FormField id="teamSize" label="Team size" required errors={errors?.teamSize}>
        {(p) => (
          <NativeSelect {...p} name="teamSize" value={teamSize} onChange={(e) => onTeamSizeChange(Number(e.target.value))}>
            {[2, 3, 4].map((n) => <option key={n} value={n}>{n} members</option>)}
          </NativeSelect>
        )}
      </FormField>
      <div className="hidden sm:block" />
      {Array.from({ length: teamSize - 1 }).map((_, i) => (
        <FormField key={i} id={`member-${i}`} label={`Teammate ${i + 1} name`} required errors={i === 0 ? errors?.members : undefined}>
          {(p) => <Input {...p} name="members" autoComplete="off" maxLength={80} required />}
        </FormField>
      ))}
    </>
  );
}
