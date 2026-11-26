import { Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Department } from "@/lib/data/people";
import { cn } from "@/lib/utils";
import { Avatar } from "./person-card";

/** "About the HOD" section for one department. `reverse` flips the layout on desktop. */
export function HodSpotlight({
  department: d,
  reverse = false,
  eyebrow = "About the HOD",
}: {
  department: Department;
  reverse?: boolean;
  eyebrow?: string;
}) {
  const isIoT = d.accent === "iot";
  const titleId = `hod-${d.id}-title`;

  return (
    <section id={`hod-${d.id}`} aria-labelledby={titleId} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6">
      <div className={cn("relative isolate grid items-center gap-10 overflow-hidden rounded-3xl border bg-card p-8 backdrop-blur-xl sm:p-12 lg:grid-cols-[auto_1fr]", reverse && "lg:grid-cols-[1fr_auto]")}>
        <div aria-hidden className={cn("absolute -top-24 -z-10 size-80 rounded-full blur-3xl", reverse ? "-right-20" : "-left-20", isIoT ? "bg-iot/20" : "bg-cyber/20")} />

        <div className={cn("flex flex-col items-center gap-4 text-center lg:w-64", reverse && "lg:order-2")}>
          <Avatar person={d.hod} size="lg" />
          <div>
            <p className="font-semibold">{d.hod.name ?? d.hod.role}</p>
            {d.hod.name && <p className="text-sm text-muted-foreground">{d.hod.role}</p>}
          </div>
          <Badge variant={d.accent}>Dept. of {d.short}</Badge>
        </div>

        <div className="space-y-5">
          <p className={cn("font-mono text-xs tracking-[0.25em] uppercase", isIoT ? "text-iot" : "text-cyber")}>
            <span aria-hidden>{"// "}</span>{eyebrow} · {d.short}
          </p>
          <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{d.name}</h2>
          {d.hod.bio && (
            <blockquote className="relative border-l-2 border-primary/50 pl-5 text-lg text-foreground/90 italic">
              <Quote aria-hidden className="absolute -top-1 -left-3 size-5 bg-card text-primary" />
              {d.hod.bio}
            </blockquote>
          )}
          <p className="text-pretty text-muted-foreground">{d.about}</p>
          <ul className="flex flex-wrap gap-2">
            {d.focus.map((f) => (
              <li key={f} className="rounded-md border bg-background/50 px-2.5 py-1 text-xs">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
