import type { Metadata } from "next";
import { CalendarClock, Users, Wallet } from "lucide-react";

import { RegisterForm } from "@/components/features/register-form";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Card } from "@/components/ui/card";
import type { TrackSlug } from "@/lib/data/tracks";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Register", description: "Register your team for Nexora 2.0." };

const isTrack = (v: unknown): v is TrackSlug => v === "edge-iot" || v === "cyber-security";

export default async function RegisterPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { track } = await searchParams;
  const closed = Date.now() > new Date(siteConfig.registrationDeadline).getTime();

  const facts = [
    { Icon: Users, label: "Team size", value: `${siteConfig.teamSize.min}–${siteConfig.teamSize.max} members` },
    { Icon: CalendarClock, label: "Deadline", value: siteConfig.registrationDeadlineLabel },
    { Icon: Wallet, label: "Fee", value: "Free" },
  ];

  return (
    <PageShell className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
      <div className="space-y-8">
        <SectionHeading as="h1" eyebrow="Register" align="left" title="Claim your spot" description="One form per team, filled in by the team lead. Shortlisted teams are notified by email." />
        <ul className="space-y-3">
          {facts.map(({ Icon, label, value }) => (
            <li key={label} className="flex items-center gap-3 rounded-lg border bg-card p-4 backdrop-blur">
              <Icon className="size-5 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="ml-auto text-sm font-medium">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <Card className="p-6 sm:p-8">
        {closed ? (
          <p role="status" className="text-center text-muted-foreground">Registrations are closed. See you at the event!</p>
        ) : (
          <RegisterForm defaultTrack={isTrack(track) ? track : undefined} />
        )}
      </Card>
    </PageShell>
  );
}
