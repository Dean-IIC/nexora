import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/features/cta-band";
import { PageShell } from "@/components/features/section-heading";
import { FocusAreas, JudgingAndStack, ProblemStatements } from "@/components/features/track-details";
import { TrackHero } from "@/components/features/track-hero";
import { getTrack, tracks } from "@/lib/data/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const track = getTrack((await params).slug);
  if (!track) return {};
  return { title: `Track ${track.number}: ${track.name}`, description: track.description };
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const track = getTrack((await params).slug);
  if (!track) notFound();
  const other = tracks.find((t) => t.slug !== track.slug);

  return (
    <>
      <TrackHero track={track} />
      <PageShell className="space-y-20">
        <FocusAreas track={track} />
        <ProblemStatements track={track} />
        <JudgingAndStack track={track} />
        {other && (
          <Link
            href={`/tracks/${other.slug}`}
            className="group flex items-center justify-between rounded-2xl border bg-card p-6 backdrop-blur transition-colors hover:border-primary/50"
          >
            <span>
              <span className="block font-mono text-xs text-muted-foreground">Other track</span>
              <span className="text-xl font-semibold">Track {other.number} — {other.name}</span>
            </span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        )}
      </PageShell>
      <CtaBand />
    </>
  );
}
