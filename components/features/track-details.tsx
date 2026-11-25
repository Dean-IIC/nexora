import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Track } from "@/lib/data/tracks";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

const diffStyle = {
  Intermediate: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  Advanced: "border-amber-500/30 text-amber-600 dark:text-amber-400",
  Expert: "border-rose-500/30 text-rose-600 dark:text-rose-400",
} as const;

export function FocusAreas({ track }: { track: Track }) {
  return (
    <section aria-labelledby="focus" className="space-y-8">
      <SectionHeading eyebrow="Focus areas" title={<span id="focus">What you can build</span>} align="left" />
      <div className="grid gap-4 sm:grid-cols-2">
        {track.focusAreas.map((f, i) => (
          <Card key={f.title} className="gap-2">
            <span className={cn("font-mono text-xs", track.accent === "iot" ? "text-iot" : "text-cyber")}>0{i + 1}</span>
            <CardTitle>{f.title}</CardTitle>
            <CardDescription>{f.text}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ProblemStatements({ track }: { track: Track }) {
  return (
    <section id="problems" aria-labelledby="problems-title" className="scroll-mt-24 space-y-8">
      <SectionHeading
        eyebrow="Problem statements"
        title={<span id="problems-title">Pick your challenge</span>}
        description="Choose one statement when you register. Full briefs and datasets are released at the opening ceremony."
        align="left"
      />
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {track.problems.map((p) => (
          <li key={p.id}>
            <Card className="h-full transition-colors hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={track.accent}>{p.id}</Badge>
                  <Badge variant="outline" className={diffStyle[p.difficulty]}>{p.difficulty}</Badge>
                </div>
                <CardTitle className="mt-2">{p.title}</CardTitle>
              </CardHeader>
              <CardDescription>{p.summary}</CardDescription>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function JudgingAndStack({ track }: { track: Track }) {
  const bar = track.accent === "iot" ? "bg-iot" : "bg-cyber";
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <CardTitle>Judging criteria</CardTitle>
        <ul className="space-y-4">
          {track.judging.map((j) => (
            <li key={j.criterion}>
              <div className="mb-1.5 flex justify-between gap-2 text-sm">
                <span>{j.criterion}</span>
                <span className="font-mono text-muted-foreground">{j.weight}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted" role="presentation">
                <div className={cn("h-full rounded-full", bar)} style={{ width: `${j.weight * 3}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <CardTitle>Suggested stack</CardTitle>
        <CardDescription>Use anything you like — these are well supported by mentors.</CardDescription>
        <ul className="flex flex-wrap gap-2">
          {track.stack.map((s) => (
            <li key={s} className="rounded-md border bg-background/50 px-2.5 py-1 font-mono text-xs">{s}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <CardTitle>Submission checklist</CardTitle>
        <ul className="space-y-3 text-sm">
          {track.deliverables.map((d) => (
            <li key={d} className="flex gap-2">
              <CheckCircle2 className={cn("mt-0.5 size-4 shrink-0", track.accent === "iot" ? "text-iot" : "text-cyber")} aria-hidden />
              {d}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
