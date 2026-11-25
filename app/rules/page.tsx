import type { Metadata } from "next";

import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Card, CardTitle } from "@/components/ui/card";
import { rules } from "@/lib/data/content";

export const metadata: Metadata = { title: "Rules & Code of Conduct", description: "Eligibility, building rules, security conduct and judging." };

export default function RulesPage() {
  return (
    <PageShell className="space-y-12">
      <SectionHeading
        as="h1"
        eyebrow="Rules"
        title="Rules & code of conduct"
        description="Read these before registering. Breaking them can lead to disqualification."
      />
      <div className="mx-auto grid max-w-4xl gap-4">
        {rules.map((section, i) => (
          <Card key={section.title} className="sm:flex-row sm:gap-8">
            <div className="flex items-baseline gap-3 sm:w-56 sm:shrink-0 sm:flex-col sm:gap-1">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <CardTitle>{section.title}</CardTitle>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-primary">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
