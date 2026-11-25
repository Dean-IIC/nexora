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
        title="24 hours, minute by minute"
        description="All times are IST. Track-specific sessions are tagged — filter to see just your track."
      />
      <ScheduleView days={schedule} />
      <section aria-labelledby="road" className="space-y-10 pt-8">
        <SectionHeading eyebrow="Road to Nexora" title={<span id="road">Before the event</span>} />
        <Milestones />
      </section>
    </PageShell>
  );
}
