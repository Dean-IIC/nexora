import type { Metadata } from "next";

import { CtaBand } from "@/components/features/cta-band";
import { GrandPrizes, SpecialPrizes, TrackPrizes } from "@/components/features/prize-sections";
import { PageShell, SectionHeading } from "@/components/features/section-heading";

export const metadata: Metadata = { title: "Prizes", description: "₹1.5 lakh+ in prizes across grand, track and special categories." };

export default function PrizesPage() {
  return (
    <>
      <PageShell className="space-y-20">
        <SectionHeading
          as="h1"
          eyebrow="Prizes"
          title="₹1.5 lakh+ prize pool"
          description="Grand prizes are judged across both tracks at the finale. Track prizes and special awards are judged separately."
        />
        <GrandPrizes />
        <section aria-labelledby="track-prizes" className="space-y-8">
          <SectionHeading eyebrow="Per track" title={<span id="track-prizes">Track champions</span>} align="left" />
          <TrackPrizes />
        </section>
        <section aria-labelledby="special" className="space-y-8">
          <SectionHeading eyebrow="Special awards" title={<span id="special">More ways to win</span>} align="left" />
          <SpecialPrizes />
        </section>
        <p className="text-center text-sm text-muted-foreground">
          Every participant receives a certificate of participation and event swag.
        </p>
      </PageShell>
      <CtaBand />
    </>
  );
}
