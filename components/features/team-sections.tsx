import { facultyOrganisers, leaders, studentOrganisers, type Person } from "@/lib/data/people";
import { PersonCard } from "./person-card";
import { SectionHeading } from "./section-heading";

function PeopleGroup({ id, eyebrow, title, description, people, cols }: { id: string; eyebrow: string; title: string; description?: string; people: Person[]; cols: string }) {
  return (
    <div className="space-y-8">
      <SectionHeading as="h2" eyebrow={eyebrow} title={<span id={id}>{title}</span>} description={description} />
      <ul aria-labelledby={id} className={`grid grid-cols-2 gap-4 ${cols}`}>
        {people.map((p) => (
          <li key={`${p.role}-${p.name ?? ""}-${p.org ?? ""}`}>
            <PersonCard person={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Meet the team: leadership, faculty organising team and student organisers. */
export function MeetTheTeam() {
  return (
    <section id="team" aria-label="Meet the team" className="mx-auto max-w-7xl scroll-mt-24 space-y-20 px-4 py-24 sm:px-6">
      <PeopleGroup
        id="leaders-title"
        eyebrow="Meet the team"
        title="Our leaders"
        description="The leaders of HKBK who make Nexora 2.0 possible."
        people={leaders}
        cols="sm:grid-cols-3 lg:grid-cols-5"
      />
      <PeopleGroup
        id="faculty-title"
        eyebrow="Organising team"
        title="Faculty organisers"
        people={facultyOrganisers}
        cols="sm:grid-cols-3 lg:mx-auto lg:max-w-4xl"
      />
      <PeopleGroup
        id="students-title"
        eyebrow="Student team"
        title="Student organisers"
        description="The students running Nexora 2.0 on the ground — reach out to them with any questions on the day."
        people={studentOrganisers}
        cols="sm:grid-cols-4 lg:mx-auto lg:max-w-5xl"
      />
    </section>
  );
}
