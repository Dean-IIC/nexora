"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    done: ms === 0,
    parts: [
      { label: "Days", value: Math.floor(ms / 86_400_000) },
      { label: "Hours", value: Math.floor(ms / 3_600_000) % 24 },
      { label: "Mins", value: Math.floor(ms / 60_000) % 60 },
      { label: "Secs", value: Math.floor(ms / 1000) % 60 },
    ],
  };
}

export function Countdown({ target, doneLabel = "We're live!" }: { target: string; doneLabel?: string }) {
  const targetMs = new Date(target).getTime();
  // Render nothing time-dependent on the server to avoid hydration mismatch.
  const [state, setState] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    if (Number.isNaN(targetMs)) return;
    setState(diff(targetMs));
    const id = setInterval(() => setState(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (state?.done) {
    return <p className="font-mono text-lg font-semibold text-primary">{doneLabel}</p>;
  }

  return (
    <div role="timer" aria-label="Time until the hackathon starts" className="flex gap-2 sm:gap-3">
      {(state?.parts ?? diff(Number.NaN).parts.map((p) => ({ ...p, value: -1 }))).map((p) => (
        <div key={p.label} className="flex min-w-16 flex-col items-center rounded-lg border bg-card/60 px-3 py-2 backdrop-blur sm:min-w-20">
          <span className="font-mono text-2xl font-semibold tabular-nums sm:text-3xl">
            {p.value < 0 ? "--" : String(p.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{p.label}</span>
        </div>
      ))}
    </div>
  );
}
