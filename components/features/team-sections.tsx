import { GraduationCap, Users } from "lucide-react";

import {
  facultyCoordinators,
  facultyOrganisers,
  leaders,
  studentOrganisers,
  volunteers,
  type Person,
} from "@/lib/data/people";
import { cn } from "@/lib/utils";
import { PersonCard } from "./person-card";
import { SectionHeading } from "./section-heading";

/** Card widths for centred, wrapping rows (an incomplete last row stays centred). */
const widths = {
  five: "w-[calc(50%-0.375rem)] sm:w-[calc((100%-1.5rem)/3)] lg:w-[calc((100%-3rem)/5)]",
  six: "w-[calc(50%-0.375rem)] sm:w-[calc((100%-2.25rem)/4)] lg:w-[calc((100%-3.75rem)/6)]",
} as const;

function PeopleGrid({ people, perRow, size, labelledBy }: { people: Person[]; perRow: keyof typeof widths; size: "md" | "lg"; labelledBy: string }) {
  return (
    <ul aria-labelledby={labelledBy} className="flex flex-wrap justify-center gap-3">
      {people.map((p) => (
        <li key={`${p.role}-${p.name ?? ""}-${p.org ?? ""}`} className={widths[perRow]}>
          <PersonCard person={p} size={size} />
        </li>
      ))}
    </ul>
  );
}

/** A titled group inside a team panel, with a member count. */
function SubGroup({ id, title, people, perRow = "six" }: { id: string; title: string; people: Person[]; perRow?: keyof typeof widths }) {
  if (people.length === 0) return null;
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <h3 id={id} className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
        <span className="rounded-full border px-2 py-0.5 font-mono text-xs text-muted-foreground">{people.length}</span>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      <PeopleGrid people={people} perRow={perRow} size="md" labelledBy={id} />
    </div>
  );
}

/** Framed panel grouping related teams (faculty or students). */
function TeamPanel({
  id,
  icon: Icon,
  eyebrow,
  title,
  description,
  accent,
  children,
}: {
  id: string;
  icon: typeof Users;
  eyebrow: string;
  title: string;
  description: string;
  accent: "iot" | "cyber";
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden rounded-3xl border bg-card/40 p-5 backdrop-blur-xl sm:p-10">
      <div aria-hidden className={cn("absolute -top-32 -right-24 -z-10 size-96 rounded-full blur-3xl", accent === "iot" ? "bg-iot/10" : "bg-cyber/10")} />
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className={cn("grid size-12 shrink-0 place-items-center rounded-2xl border", accent === "iot" ? "border-iot/30 bg-iot-soft text-iot" : "border-cyber/30 bg-cyber-soft text-cyber")}>
          <Icon className="size-6" aria-hidden />
        </span>
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
          <h2 id={id} className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

/** "Our leaders" — the HKBK leadership grid. */
export function OurLeaders({ id = "leaders" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby="leaders-title" className="mx-auto max-w-7xl scroll-mt-24 space-y-8 px-4 py-24 sm:px-6">
      <SectionHeading title={<span id="leaders-title">Our leaders</span>} description="The leaders of HKBK who make Nexora 2.0 possible." />
      <PeopleGrid people={leaders} perRow="five" size="lg" labelledBy="leaders-title" />
    </section>
  );
}

/** Faculty and student teams, each in its own panel. */
export function Organisers({ showVolunteers = false }: { showVolunteers?: boolean }) {
  return (
    <section id="organisers" aria-label="Organising team" className="mx-auto max-w-7xl scroll-mt-24 space-y-10 px-4 py-24 sm:px-6">
      <TeamPanel
        id="faculty-team-title"
        icon={GraduationCap}
        eyebrow="Organising team"
        title="Faculty"
        description="The faculty members planning and guiding Nexora 2.0."
        accent="iot"
      >
        <SubGroup id="faculty-organisers-title" title="Faculty organisers" people={facultyOrganisers} />
        <SubGroup id="faculty-coordinators-title" title="Faculty co-ordinators" people={facultyCoordinators} />
      </TeamPanel>
      <TeamPanel
        id="student-team-title"
        icon={Users}
        eyebrow="Organising team"
        title="Students"
        description="The students running Nexora 2.0 on the ground — reach out to them with any questions on the day."
        accent="cyber"
      >
        <SubGroup id="students-title" title="Student organisers" people={studentOrganisers} perRow="five" />
        {showVolunteers && <SubGroup id="volunteers-title" title="Student volunteers" people={volunteers} />}
      </TeamPanel>
    </section>
  );
}
