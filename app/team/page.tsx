import type { Metadata } from "next";

import { Ceremonies } from "@/components/features/ceremonies";
import { HodSpotlight } from "@/components/features/hod-spotlight";
import { MeetTheTeam } from "@/components/features/team-sections";
import { departments } from "@/lib/data/people";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Team",
  description: `Leadership, chief guests, faculty and student organisers of ${siteConfig.name} at ${siteConfig.host}.`,
};

export default function TeamPage() {
  return (
    <>
      <h1 className="sr-only">The Nexora 2.0 team</h1>
      <MeetTheTeam />
      {departments.map((d, i) => <HodSpotlight key={d.id} department={d} reverse={i % 2 === 1} />)}
      <Ceremonies />
    </>
  );
}
