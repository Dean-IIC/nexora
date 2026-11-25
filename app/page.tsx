import { CtaBand } from "@/components/features/cta-band";
import { Hero } from "@/components/features/hero";
import { Milestones } from "@/components/features/milestones";
import { PartnerStrip } from "@/components/features/partner-strip";
import { SectionHeading } from "@/components/features/section-heading";
import { StatsStrip } from "@/components/features/stats-strip";
import { TrackCard } from "@/components/features/track-card";
import { tracks } from "@/lib/data/tracks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <section aria-labelledby="tracks-heading" className="mx-auto max-w-7xl space-y-12 px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Two tracks"
          title={<span id="tracks-heading">Build the device. Defend the device.</span>}
          description="Every team competes in one track. Each track has its own problem statements, mentors, judges and prizes."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {tracks.map((t) => <TrackCard key={t.slug} track={t} />)}
        </div>
      </section>
      <section aria-labelledby="timeline-heading" className="mx-auto max-w-7xl space-y-12 px-4 pb-8 sm:px-6">
        <SectionHeading eyebrow="Timeline" title={<span id="timeline-heading">Key dates</span>} />
        <Milestones />
      </section>
      <PartnerStrip />
      <CtaBand />
    </>
  );
}
