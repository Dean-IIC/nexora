import { CalendarDays, Clock, Mic, Sparkles, Trophy } from "lucide-react";

import { ceremonies, type Ceremony } from "@/lib/data/people";
import { cn } from "@/lib/utils";
import { Avatar } from "./person-card";
import { SectionHeading } from "./section-heading";

const style = {
  iot: { border: "hover:border-iot/50", text: "text-iot", glow: "bg-iot/15" },
  cyber: { border: "hover:border-cyber/50", text: "text-cyber", glow: "bg-cyber/15" },
  primary: { border: "hover:border-primary/50", text: "text-primary", glow: "bg-primary/15" },
} as const;

const icon = { inauguration: Mic, valedictory: Trophy } as Record<string, typeof Sparkles>;

function CeremonyCard({ c }: { c: Ceremony }) {
  const s = style[c.accent];
  const Icon = icon[c.id] ?? Sparkles;
  const guestNamed = Boolean(c.chiefGuest?.name);

  return (
    <article className={cn("relative isolate flex flex-col gap-5 overflow-hidden rounded-2xl border bg-card p-6 backdrop-blur-xl transition-colors sm:p-8", s.border)}>
      <div aria-hidden className={cn("absolute -top-20 -right-20 -z-10 size-56 rounded-full blur-3xl", s.glow)} />
      <div className="flex items-center gap-3">
        <Icon className={cn("size-6", s.text)} aria-hidden />
        <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
      </div>
      <dl className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <dt><CalendarDays className="size-4 text-muted-foreground" aria-label="Date" /></dt>
          <dd className="font-medium">{c.date}</dd>
        </div>
        {c.sessions ? (
          c.sessions.map((sess) => (
            <div key={sess.label} className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <dt className="flex items-center gap-2">
                <Clock className="size-4 text-muted-foreground" aria-hidden />
                <span className="font-medium">{sess.label}</span>
              </dt>
              <dd className={cn("font-mono font-medium", s.text)}>{sess.time}</dd>
            </div>
          ))
        ) : (
          <div className="flex items-center gap-2">
            <dt><Clock className="size-4 text-muted-foreground" aria-label="Time" /></dt>
            <dd className={cn("font-mono font-medium", s.text)}>{c.time}</dd>
          </div>
        )}
      </dl>
      <p className="text-sm text-muted-foreground">{c.description}</p>
      {c.chiefGuest && (
        <div className="mt-auto flex items-center gap-4 rounded-xl border bg-background/60 p-4">
          <Avatar person={c.chiefGuest} size="md" />
          <div>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{c.sessions ? "Chief Guest & Speaker" : "Chief Guest"}</p>
            <p className="font-semibold">{guestNamed ? c.chiefGuest.name : "To be announced"}</p>
            {guestNamed && <p className="text-sm text-foreground/90">{c.chiefGuest.role}</p>}
            {guestNamed && c.chiefGuest.org && <p className="text-xs text-muted-foreground">{c.chiefGuest.org}</p>}
          </div>
        </div>
      )}
    </article>
  );
}

export function Ceremonies() {
  return (
    <section id="ceremonies" aria-labelledby="ceremonies-title" className="mx-auto max-w-7xl scroll-mt-24 space-y-12 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Ceremonies & chief guests"
        title={<span id="ceremonies-title">Inauguration to valedictory</span>}
        description="Nexora 2.0 opens on 11 December with the inauguration and a 2-hour pre-hackathon talk by our chief guest, and closes with the valedictory on 12 December."
      />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {ceremonies.map((c) => <CeremonyCard key={c.id} c={c} />)}
      </div>
    </section>
  );
}
