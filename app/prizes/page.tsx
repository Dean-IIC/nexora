import type { Metadata } from "next";

import { CtaBand } from "@/components/features/cta-band";
import { Certificates, PrizePool, WinnerPositions } from "@/components/features/prize-sections";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { prizes } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Prizes",
  description: `${prizes.poolShort} total prize pool, winner's certificates and certificates of participation.`,
};

export default function PrizesPage() {
  return (
    <>
      <PageShell className="space-y-20">
        <SectionHeading
          as="h1"
          eyebrow="Prizes"
          title="Prizes & recognition"
          description="Winners are announced and awarded at the valedictory ceremony on 12 December."
        />
        <PrizePool />
        <section aria-labelledby="positions" className="space-y-10">
          <SectionHeading eyebrow="Winners" title={<span id="positions">Top three teams</span>} />
          <WinnerPositions />
        </section>
        <section aria-labelledby="certs" className="space-y-8">
          <SectionHeading eyebrow="Certificates" title={<span id="certs">Everyone takes something home</span>} />
          <Certificates />
        </section>
      </PageShell>
      <CtaBand />
    </>
  );
}
