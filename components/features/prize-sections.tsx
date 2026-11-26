import { Award, FileBadge, Medal, Trophy } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { prizes } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function PrizePool() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border bg-card px-6 py-14 text-center backdrop-blur-xl">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-iot/20 via-transparent to-cyber/25" />
      <Trophy className="mx-auto size-12 text-amber-500" aria-hidden />
      <p className="mt-4 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">Total prize pool</p>
      <p className="mt-2 bg-gradient-to-r from-iot via-primary to-cyber bg-clip-text text-6xl font-semibold text-transparent sm:text-7xl">
        {prizes.pool}
      </p>
    </div>
  );
}

const podium = [
  { Icon: Trophy, style: "border-amber-400/50 bg-gradient-to-b from-amber-400/15 to-transparent md:-translate-y-4", icon: "text-amber-500" },
  { Icon: Medal, style: "border-slate-400/50 bg-gradient-to-b from-slate-400/15 to-transparent", icon: "text-slate-400" },
  { Icon: Medal, style: "border-orange-700/40 bg-gradient-to-b from-orange-700/15 to-transparent", icon: "text-orange-600" },
];

export function WinnerPositions() {
  // Display order: runner-up, winner, 2nd runner-up for a podium layout on desktop.
  const order = [1, 0, 2];
  return (
    <ul className="grid items-end gap-4 md:grid-cols-3">
      {order.map((idx) => {
        const place = prizes.positions[idx];
        const s = podium[idx];
        return (
          <li key={place} className={cn("rounded-2xl border p-8 text-center backdrop-blur", s.style, idx === 0 && "order-first md:order-none")}>
            <s.Icon className={cn("mx-auto size-10", s.icon)} aria-hidden />
            <h3 className="mt-4 text-2xl font-semibold">{place}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Share of the prize pool + winner&apos;s certificate</p>
          </li>
        );
      })}
    </ul>
  );
}

export function Certificates() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {prizes.certificates.map((c, i) => {
        const Icon = i === 0 ? Award : FileBadge;
        return (
          <li key={c.title}>
            <Card className="h-full flex-row items-center gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10">
                <Icon className="size-6 text-primary" aria-hidden />
              </span>
              <div className="space-y-1">
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.text}</CardDescription>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
