"use client";

import { useState } from "react";
import { Coffee, Flag, Gavel, Mic, Terminal } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ScheduleDay, ScheduleItem, ScheduleTrack } from "@/lib/data/schedule";
import { cn } from "@/lib/utils";

const kindIcon = { ceremony: Flag, hack: Terminal, talk: Mic, break: Coffee, judging: Gavel } as const;

const filters: { value: ScheduleTrack; label: string }[] = [
  { value: "all", label: "Both tracks" },
  { value: "edge-iot", label: "Edge IoT" },
  { value: "cyber-security", label: "Cyber Security" },
];

function TrackTag({ track }: { track: ScheduleItem["track"] }) {
  if (track === "all") return null;
  const iot = track === "edge-iot";
  return (
    <span className={cn("rounded-full border px-2 py-0.5 font-mono text-[10px]", iot ? "border-iot/30 bg-iot-soft text-iot" : "border-cyber/30 bg-cyber-soft text-cyber")}>
      {iot ? "EDGE IoT" : "CYBER"}
    </span>
  );
}

export function ScheduleView({ days }: { days: ScheduleDay[] }) {
  const [filter, setFilter] = useState<ScheduleTrack>("all");

  return (
    <Tabs defaultValue={days[0]?.id} className="w-full">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <TabsList aria-label="Event day">
          {days.map((d) => (
            <TabsTrigger key={d.id} value={d.id}>
              {d.label} <span className="hidden text-muted-foreground sm:inline">· {d.date}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div role="group" aria-label="Filter by track" className="flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                filter === f.value ? "border-primary bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {days.map((d) => {
        const items = d.items.filter((i) => filter === "all" || i.track === "all" || i.track === filter);
        return (
          <TabsContent key={d.id} value={d.id}>
            <ol className="relative space-y-3 border-l border-border pl-6">
              {items.map((item) => {
                const Icon = kindIcon[item.kind];
                return (
                  <li key={`${item.time}-${item.title}`} className="relative">
                    <span aria-hidden className="absolute top-4 -left-[33px] grid size-4 place-items-center rounded-full border-2 border-primary bg-background" />
                    <div className="flex flex-col gap-2 rounded-xl border bg-card p-4 backdrop-blur sm:flex-row sm:items-center sm:gap-6">
                      <time className="w-14 shrink-0 font-mono text-sm font-semibold text-primary">{item.time}</time>
                      <div className="flex flex-1 items-start gap-3">
                        <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                        <div>
                          <p className="flex flex-wrap items-center gap-2 font-medium">
                            {item.title} <TrackTag track={item.track} />
                          </p>
                          {item.detail && <p className="text-sm text-muted-foreground">{item.detail}</p>}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
