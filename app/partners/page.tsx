import type { Metadata } from "next";
import Link from "next/link";

import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { partners } from "@/lib/data/content";
import { getTrack } from "@/lib/data/tracks";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Partners", description: "Nexora 2.0 is organised in collaboration with IEEE CASS, C-DAC and DEFSEC." };

export default function PartnersPage() {
  return (
    <PageShell className="space-y-16">
      <SectionHeading
        as="h1"
        eyebrow="Partners"
        title="Built with the best"
        description="Our collaborators design problem statements, mentor teams and sit on the jury."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {partners.map((p) => (
          <Card key={p.name} className="gap-5">
            <div className="grid h-28 place-items-center rounded-lg border bg-gradient-to-br from-iot/10 to-cyber/10">
              <span className="text-3xl font-semibold tracking-tight">{p.name}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tracks.map((slug) => {
                const t = getTrack(slug);
                return t ? <Badge key={slug} variant={t.accent}>{t.name}</Badge> : null;
              })}
            </div>
            <CardTitle className="text-base">{p.role}</CardTitle>
            <CardDescription>{p.description}</CardDescription>
          </Card>
        ))}
      </div>
      <Card className="items-center text-center">
        <CardTitle>Become a sponsor</CardTitle>
        <CardDescription className="max-w-lg">
          Support the next generation of edge and security engineers. Sponsorship decks are available on request.
        </CardDescription>
        <Link href="/contact" className="font-medium text-primary hover:underline">Contact us →</Link>
        <span className="sr-only">or email {siteConfig.contact.email}</span>
      </Card>
    </PageShell>
  );
}
