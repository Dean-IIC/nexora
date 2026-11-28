import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { logos } from "@/lib/data/logos";
import { siteConfig } from "@/lib/site-config";
import { BrandLogo } from "./brand-logo";
import { Countdown } from "./countdown";
import { GridBackground } from "./graphics/grid-background";
import { HeroGraphic } from "./graphics/hero-graphic";

export function Hero() {
  const facts = [
    { Icon: CalendarDays, text: siteConfig.dateLabel },
    { Icon: MapPin, text: siteConfig.venue },
    { Icon: Users, text: `Teams of ${siteConfig.teamSize.min}–${siteConfig.teamSize.max}` },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <GridBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div className="flex flex-col gap-6">
          <Badge className="font-mono">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
            Registrations open · 24-hour hackathon
          </Badge>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <BrandLogo logo={logos.hkbk} alt={siteConfig.host} className="h-11" />
            <span className="text-sm text-muted-foreground">in association with</span>
            <BrandLogo logo={logos.ieeeBangalore} alt={siteConfig.association} className="h-10" />
          </div>
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Nexora{" "}
            <span className="bg-gradient-to-r from-iot via-primary to-cyber bg-clip-text text-transparent">2.0</span>
            <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              {siteConfig.tagline}
            </span>
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            A national hackathon on <strong className="text-foreground">{siteConfig.theme}</strong> — two tracks,
            one mission: build intelligent devices and the defences that keep them safe.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {facts.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="size-4 text-primary" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href="/register">
                Register your team <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/tracks">Explore tracks</Link>
            </Button>
          </div>
          <div className="pt-2">
            <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">Nexora 2.0 starts in</p>
            <Countdown target={siteConfig.startsAt} />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg animate-float">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
