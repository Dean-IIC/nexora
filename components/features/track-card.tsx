import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Track } from "@/lib/data/tracks";
import { cn } from "@/lib/utils";
import { CyberGraphic } from "./graphics/cyber-graphic";
import { IoTGraphic } from "./graphics/iot-graphic";

const accent = {
  iot: { ring: "hover:border-iot/60 hover:shadow-iot/20", text: "text-iot", glow: "bg-iot/15" },
  cyber: { ring: "hover:border-cyber/60 hover:shadow-cyber/20", text: "text-cyber", glow: "bg-cyber/15" },
} as const;

export function TrackCard({ track }: { track: Track }) {
  const a = accent[track.accent];
  const Graphic = track.accent === "iot" ? IoTGraphic : CyberGraphic;

  return (
    <Link
      href={`/tracks/${track.slug}`}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-2xl border bg-card p-6 backdrop-blur-xl transition-all duration-300 outline-none hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:p-8",
        a.ring,
      )}
    >
      <div aria-hidden className={cn("absolute -top-24 -right-24 -z-10 size-64 rounded-full blur-3xl", a.glow)} />
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Badge variant={track.accent}>Track {track.number}</Badge>
          <h3 className="text-3xl font-semibold tracking-tight">{track.name}</h3>
          <p className={cn("font-medium", a.text)}>{track.tagline}</p>
        </div>
        <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" aria-hidden />
      </div>
      <div className="mx-auto my-6 w-full max-w-72">
        <Graphic />
      </div>
      <p className="text-sm text-muted-foreground">{track.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {track.focusAreas.map((f) => (
          <li key={f.title} className="rounded-md border bg-background/50 px-2.5 py-1 text-xs">{f.title}</li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Lead collaborator: <span className="text-foreground">{track.leadPartner}</span> · {track.problems.length} problem statements
      </p>
    </Link>
  );
}
