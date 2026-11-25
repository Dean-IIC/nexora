import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Track } from "@/lib/data/tracks";
import { cn } from "@/lib/utils";
import { CyberGraphic } from "./graphics/cyber-graphic";
import { IoTGraphic } from "./graphics/iot-graphic";

export function TrackHero({ track }: { track: Track }) {
  const isIoT = track.accent === "iot";
  const Graphic = isIoT ? IoTGraphic : CyberGraphic;

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div aria-hidden className={cn("absolute -top-32 left-1/3 -z-10 size-[36rem] rounded-full blur-3xl", isIoT ? "bg-iot/20" : "bg-cyber/20")} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <Link href="/tracks" className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden /> All tracks
          </Link>
          <Badge variant={track.accent}>Track {track.number} · Lead: {track.leadPartner}</Badge>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{track.name}</h1>
          <p className={cn("text-xl font-medium", isIoT ? "text-iot" : "text-cyber")}>{track.tagline}</p>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">{track.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href={`/register?track=${track.slug}`}>
                Register for {track.short} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#problems">View problem statements</a>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <Graphic />
        </div>
      </div>
    </section>
  );
}
