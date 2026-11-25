import type { Metadata } from "next";

import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { TrackCard } from "@/components/features/track-card";
import { tracks } from "@/lib/data/tracks";

export const metadata: Metadata = { title: "Tracks", description: "Track 01 Edge IoT and Track 02 Cyber Security." };

export default function TracksPage() {
  return (
    <PageShell className="space-y-12">
      <SectionHeading
        as="h1"
        eyebrow="Tracks"
        title="Choose your battlefield"
        description="Two independent tracks with their own problem statements, mentors, judges and prizes. Pick one when you register."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {tracks.map((t) => <TrackCard key={t.slug} track={t} />)}
      </div>
    </PageShell>
  );
}
