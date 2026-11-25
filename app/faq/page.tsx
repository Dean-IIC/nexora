import type { Metadata } from "next";
import Link from "next/link";

import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data/content";

export const metadata: Metadata = { title: "FAQ", description: "Answers to common questions about Nexora 2.0." };

export default function FaqPage() {
  return (
    <PageShell className="space-y-12">
      <SectionHeading as="h1" eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card px-6 backdrop-blur">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q-${i}`}>
              <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <p className="text-center text-muted-foreground">
        Still have questions? <Link href="/contact" className="text-primary hover:underline">Get in touch</Link>.
      </p>
    </PageShell>
  );
}
