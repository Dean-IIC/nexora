import { facultyOrganisers, leaders, studentOrganisers, volunteers, type Person } from "@/lib/data/people";
import { PersonCard } from "./person-card";
import { SectionHeading } from "./section-heading";

function PeopleGroup({
  id,
  eyebrow,
  title,
  description,
  people,
  cols,
  itemClassName,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  people: Person[];
  /** Grid column classes, or a flex layout when `itemClassName` sets item widths. */
  cols: string;
  itemClassName?: string;
}) {
  return (
    <div className="space-y-8">
      <SectionHeading as="h2" eyebrow={eyebrow} title={<span id={id}>{title}</span>} description={description} />
      <ul aria-labelledby={id} className={itemClassName ? cols : `grid grid-cols-2 gap-4 ${cols}`}>
        {people.map((p) => (
          <li key={`${p.role}-${p.name ?? ""}-${p.org ?? ""}`} className={itemClassName}>
            <PersonCard person={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "Our leaders" — the HKBK leadership grid. */
export function OurLeaders({ id = "leaders" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby="leaders-title" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <PeopleGroup
        id="leaders-title"
        eyebrow="Meet the team"
        title="Our leaders"
        description="The leaders of HKBK who make Nexora 2.0 possible."
        people={leaders}
        cols="sm:grid-cols-3 lg:grid-cols-5"
      />
    </section>
  );
}

/** Faculty organisers, student organisers and (optionally) volunteers. */
export function Organisers({ showVolunteers = false }: { showVolunteers?: boolean }) {
  return (
    <section id="organisers" aria-label="Organising team" className="mx-auto max-w-7xl scroll-mt-24 space-y-20 px-4 py-24 sm:px-6">
      <PeopleGroup
        id="faculty-title"
        eyebrow="Organising team"
        title="Faculty organisers"
        people={facultyOrganisers}
        cols="sm:grid-cols-3 lg:grid-cols-5"
      />
      <PeopleGroup
        id="students-title"
        eyebrow="Student team"
        title="Student organisers"
        description="The students running Nexora 2.0 on the ground — reach out to them with any questions on the day."
        people={studentOrganisers}
        cols="sm:grid-cols-3 lg:grid-cols-5"
      />
      {showVolunteers && volunteers.length > 0 && (
        <PeopleGroup
          id="volunteers-title"
          eyebrow="Volunteers"
          title="Our volunteers"
          description="The volunteers who keep Nexora 2.0 running smoothly."
          people={volunteers}
          cols="flex flex-wrap justify-center gap-4"
          itemClassName="w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] lg:w-[calc((100%-5rem)/6)]"
        />
      )}
    </section>
  );
}

/** Leaders followed by the organising team (used on the home page). */
export function MeetTheTeam() {
  return (
    <div id="team">
      <OurLeaders id="our-leaders" />
      <Organisers />
    </div>
  );
}
