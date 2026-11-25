import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/features/contact-form";
import { PageShell, SectionHeading } from "@/components/features/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the Nexora 2.0 organising team." };

export default function ContactPage() {
  const channels = [
    { Icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { Icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Venue", value: siteConfig.venue },
  ];

  return (
    <PageShell className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div className="space-y-8">
        <SectionHeading as="h1" eyebrow="Contact" align="left" title="Talk to the organisers" description="Questions about tracks, sponsorship or logistics? We usually reply within 48 hours." />
        <ul className="space-y-3">
          {channels.map(({ Icon, label, value, href }) => (
            <li key={label} className="flex items-center gap-3 rounded-lg border bg-card p-4 backdrop-blur">
              <Icon className="size-5 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">{label}</span>
              {href ? (
                <a href={href} className="ml-auto text-sm font-medium hover:text-primary">{value}</a>
              ) : (
                <span className="ml-auto text-sm font-medium">{value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Card className="p-6 sm:p-8">
        <ContactForm />
      </Card>
    </PageShell>
  );
}
