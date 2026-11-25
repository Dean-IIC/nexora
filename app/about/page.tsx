import type { Metadata } from "next";
import { Cpu, Lightbulb, ShieldCheck, Users } from "lucide-react";

import { CtaBand } from "@/components/features/cta-band";
import { HeroGraphic } from "@/components/features/graphics/hero-graphic";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About", description: `What ${siteConfig.name} is and why it exists.` };

const pillars = [
  { Icon: Cpu, title: "Edge-first thinking", text: "Billions of devices now compute at the edge. We want builders who can make them smarter, faster and leaner." },
  { Icon: ShieldCheck, title: "Security by design", text: "Every connected device is an attack surface. Defence must be engineered in, not bolted on." },
  { Icon: Users, title: "Industry × academia", text: "Mentors and judges from IEEE CASS, C-DAC and DEFSEC work side by side with student teams." },
  { Icon: Lightbulb, title: "Real problems", text: "Problem statements come from real deployments — grids, farms, factories and SOCs." },
];

export default function AboutPage() {
  return (
    <>
      <PageShell className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading as="h1" eyebrow="About" align="left" title="Where silicon meets security" />
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">{siteConfig.name}</strong> is the second edition of Nexora — a 24-hour
              hackathon themed on <strong className="text-foreground">{siteConfig.theme}</strong>, held on {siteConfig.dateLabel}.
            </p>
            <p>
              The first edition proved that students can ship serious prototypes in a day. For 2.0 we split the event into
              two focused tracks — <span className="text-iot">Edge IoT</span> and <span className="text-cyber">Cyber Security</span> —
              so every team gets specialist mentors, sharper problem statements and track-specific judging.
            </p>
            <p>The two tracks share one stage: the most connected device is only as good as its weakest defence.</p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md"><HeroGraphic /></div>
      </PageShell>
      <PageShell className="space-y-12 pt-0 sm:pt-0">
        <SectionHeading eyebrow="Why Nexora" title="What makes 2.0 different" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, text }) => (
            <Card key={title}>
              <Icon className="size-7 text-primary" aria-hidden />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{text}</CardDescription>
            </Card>
          ))}
        </div>
      </PageShell>
      <CtaBand />
    </>
  );
}
