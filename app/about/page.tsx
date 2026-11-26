import type { Metadata } from "next";
import { Cpu, Lightbulb, ShieldCheck, Users } from "lucide-react";

import { AboutCollege } from "@/components/features/about-college";
import { Ceremonies } from "@/components/features/ceremonies";
import { CtaBand } from "@/components/features/cta-band";
import { HeroGraphic } from "@/components/features/graphics/hero-graphic";
import { HodSpotlight } from "@/components/features/hod-spotlight";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { MeetTheTeam } from "@/components/features/team-sections";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { departments } from "@/lib/data/people";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.host}, the AIML and ECE departments, our leaders and organising team.`,
};

const pillars = [
  { Icon: Cpu, title: "Edge-first thinking", text: "Billions of devices now compute at the edge. We want builders who can make them smarter, faster and leaner." },
  { Icon: ShieldCheck, title: "Security by design", text: "Every connected device is an attack surface. Defence must be engineered in, not bolted on." },
  { Icon: Users, title: "Industry × academia", text: "Mentors and judges from IEEE CASS, C-DAC and DEFSEC work side by side with student teams." },
  { Icon: Lightbulb, title: "Real problems", text: "Problem statements come from real deployments — grids, farms, factories and SOCs." },
];

/** About page order: Nexora 2.0 → HKBK → AIML dept → ECE dept → leaders → organisers → ceremonies. */
export default function AboutPage() {
  const aiml = departments.find((d) => d.id === "aiml");
  const ece = departments.find((d) => d.id === "ece");

  return (
    <>
      <PageShell className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading as="h1" eyebrow="About Nexora 2.0" align="left" title="Where silicon meets security" />
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">{siteConfig.name}</strong> is organised by{" "}
              <strong className="text-foreground">{siteConfig.host}</strong> in association with{" "}
              <strong className="text-foreground">{siteConfig.association}</strong>. It is the second edition of Nexora — a 24-hour
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
      <AboutCollege />
      {aiml && <HodSpotlight department={aiml} eyebrow="About the department" />}
      {ece && <HodSpotlight department={ece} eyebrow="About the department" reverse />}
      <MeetTheTeam />
      <Ceremonies />
      <CtaBand />
    </>
  );
}
