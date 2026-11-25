import { Award, Medal, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { prizes } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const podium = [
  { Icon: Trophy, style: "border-amber-400/50 bg-gradient-to-b from-amber-400/15 to-transparent md:-translate-y-4", icon: "text-amber-500" },
  { Icon: Medal, style: "border-slate-400/50 bg-gradient-to-b from-slate-400/15 to-transparent", icon: "text-slate-400" },
  { Icon: Medal, style: "border-orange-700/40 bg-gradient-to-b from-orange-700/15 to-transparent", icon: "text-orange-600" },
];

export function GrandPrizes() {
  // Display order: runner-up, winner, 2nd runner-up for a podium layout on desktop.
  const order = [1, 0, 2];
  return (
    <ul className="grid items-end gap-4 md:grid-cols-3">
      {order.map((idx) => {
        const p = prizes.grand[idx];
        const s = podium[idx];
        return (
          <li key={p.place} className={cn("rounded-2xl border p-8 text-center backdrop-blur", s.style, idx === 0 && "order-first md:order-none")}>
            <s.Icon className={cn("mx-auto size-10", s.icon)} aria-hidden />
            <h3 className="mt-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">{p.place}</h3>
            <p className="mt-1 text-4xl font-semibold">{p.amount}</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {p.perks.map((perk) => <li key={perk}>{perk}</li>)}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export function TrackPrizes() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {prizes.perTrack.map((p) => {
        const iot = p.track === "edge-iot";
        return (
          <Card key={p.title} className={cn("flex-row items-center justify-between", iot ? "border-iot/30" : "border-cyber/30")}>
            <div className="space-y-2">
              <Badge variant={iot ? "iot" : "cyber"}>{iot ? "Track 01" : "Track 02"}</Badge>
              <CardTitle>{p.title}</CardTitle>
            </div>
            <p className={cn("font-mono text-2xl font-semibold", iot ? "text-iot" : "text-cyber")}>{p.amount}</p>
          </Card>
        );
      })}
    </div>
  );
}

export function SpecialPrizes() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {prizes.special.map((p) => (
        <li key={p.title}>
          <Card className="h-full items-start">
            <Award className="size-6 text-primary" aria-hidden />
            <CardTitle className="text-base">{p.title}</CardTitle>
            <CardDescription className="font-mono text-lg text-foreground">{p.amount}</CardDescription>
          </Card>
        </li>
      ))}
    </ul>
  );
}
