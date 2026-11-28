import {
  facultyCoordinators,
  facultyOrganisers,
  leaders,
  studentOrganisers,
  volunteers,
  type Person,
} from "@/lib/data/people";
import { PersonCard } from "./person-card";
import { SectionHeading } from "./section-heading";

/** Card widths for a centred, wrapping row layout (last row stays centred). */
const widths = {
  five: "w-[calc(50%-0.5rem)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]",
  six: "w-[calc(50%-0.5rem)] sm:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-5rem)/6)]",
} as const;

function PeopleGroup({
  id,
  eyebrow,
  title,
  description,
  people,
  perRow = "five",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  people: Person[];
  perRow?: keyof typeof widths;
}) {
  if (people.length === 0) return null;
  return (
    <div className="space-y-8">
      <SectionHeading as="h2" eyebrow={eyebrow} title={<span id={id}>{title}</span>} description={description} />
      <ul aria-labelledby={id} className="flex flex-wrap justify-center gap-4">
        {people.map((p) => (
          <li key={`${p.role}-${p.name ?? ""}-${p.org ?? ""}`} className={widths[perRow]}>
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
        title="Our leaders"
        description="The leaders of HKBK who make Nexora 2.0 possible."
        people={leaders}
      />
    </section>
  );
}

/** Faculty organisers and co-ordinators, student organisers and (optionally) student volunteers. */
export function Organisers({ showVolunteers = false }: { showVolunteers?: boolean }) {
  return (
    <section id="organisers" aria-label="Organising team" className="mx-auto max-w-7xl scroll-mt-24 space-y-20 px-4 py-24 sm:px-6">
      <PeopleGroup id="faculty-organisers-title" eyebrow="Faculty" title="Faculty organisers" people={facultyOrganisers} />
      <PeopleGroup id="faculty-coordinators-title" eyebrow="Faculty" title="Faculty co-ordinators" people={facultyCoordinators} />
      <PeopleGroup
        id="students-title"
        eyebrow="Students"
        title="Student organisers"
        description="The students running Nexora 2.0 on the ground — reach out to them with any questions on the day."
        people={studentOrganisers}
      />
      {showVolunteers && (
        <PeopleGroup
          id="volunteers-title"
          eyebrow="Students"
          title="Student volunteers"
          description="The volunteers who keep Nexora 2.0 running smoothly."
          people={volunteers}
          perRow="six"
        />
      )}
    </section>
  );
}
