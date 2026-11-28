import type { Metadata } from "next";

import { Milestones } from "@/components/features/milestones";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { ScheduleView } from "@/components/features/schedule-view";
import { schedule } from "@/lib/data/schedule";

export const metadata: Metadata = { title: "Schedule", description: "Hour-by-hour schedule for 11–12 December 2026." };

export default function SchedulePage() {
  return (
    <PageShell className="space-y-16">
      <SectionHeading
        as="h1"
        eyebrow="Schedule"
        title="Two days, hour by hour"
        description="All times are IST."
      />
      <ScheduleView days={schedule} />
      <section aria-labelledby="road" className="space-y-10 pt-8">
        <SectionHeading eyebrow="Road to Nexora" title={<span id="road">Before the event</span>} />
        <Milestones />
      </section>
    </PageShell>
  );
}
