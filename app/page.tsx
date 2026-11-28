import { AboutCollege } from "@/components/features/about-college";
import { Ceremonies } from "@/components/features/ceremonies";
import { CtaBand } from "@/components/features/cta-band";
import { Hero } from "@/components/features/hero";
import { DepartmentSection } from "@/components/features/department-section";
import { Milestones } from "@/components/features/milestones";
import { PartnerStrip } from "@/components/features/partner-strip";
import { SectionHeading } from "@/components/features/section-heading";
import { StatsStrip } from "@/components/features/stats-strip";
import { Organisers, OurLeaders } from "@/components/features/team-sections";
import { TrackCard } from "@/components/features/track-card";
import { departments } from "@/lib/data/people";
import { tracks } from "@/lib/data/tracks";

export default function HomePage() {
  const aiml = departments.find((d) => d.id === "aiml");
  const ece = departments.find((d) => d.id === "ece");

  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutCollege />
      <OurLeaders id="team" />
      {aiml && <DepartmentSection department={aiml} />}
      {ece && <DepartmentSection department={ece} reverse />}
      <Ceremonies />
      <section aria-labelledby="tracks-heading" className="mx-auto max-w-7xl space-y-12 px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Two tracks"
          title={<span id="tracks-heading">Build the device. Defend the device.</span>}
          description="Every team competes in one track. Each track has its own problem statements, mentors and judges."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {tracks.map((t) => <TrackCard key={t.slug} track={t} />)}
        </div>
      </section>
      <section aria-labelledby="timeline-heading" className="mx-auto max-w-7xl space-y-12 px-4 pb-8 sm:px-6">
        <SectionHeading eyebrow="Timeline" title={<span id="timeline-heading">Key dates</span>} />
        <Milestones />
      </section>
      <Organisers />
      <PartnerStrip />
      <CtaBand />
    </>
  );
}
