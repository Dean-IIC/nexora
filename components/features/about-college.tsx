import { Building2, GraduationCap } from "lucide-react";

import { college } from "@/lib/data/people";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";

export function AboutCollege() {
  return (
    <section id="about-college" aria-labelledby="about-college-title" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative isolate overflow-hidden rounded-3xl border bg-card p-8 backdrop-blur-xl sm:p-10">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div aria-hidden className="absolute -right-16 -bottom-16 -z-10 size-64 rounded-full bg-cyber/20 blur-3xl" />
          <div aria-hidden className="absolute -top-16 -left-16 -z-10 size-56 rounded-full bg-iot/20 blur-3xl" />
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-iot to-cyber text-white dark:text-background">
              <GraduationCap className="size-7" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Host institution</p>
              <p className="text-xl font-semibold">{college.name}</p>
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {college.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border bg-background/60 p-4">
                <dt className="text-xs text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="size-4 text-primary" aria-hidden /> {college.city} · in association with {siteConfig.association}
          </p>
        </div>
        <div className="space-y-6">
          <SectionHeading eyebrow="About the college" align="left" title={<span id="about-college-title">{college.name}</span>} />
          <p className="text-lg text-pretty text-muted-foreground">{college.summary}</p>
          <p className="text-lg text-pretty text-muted-foreground">{college.detail}</p>
        </div>
      </div>
    </section>
  );
}
