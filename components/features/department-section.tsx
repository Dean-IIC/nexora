import { BrainCircuit, Cpu } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Department } from "@/lib/data/people";
import { cn } from "@/lib/utils";

const icons = { aiml: BrainCircuit, ece: Cpu } as const;

/** "About the department" section. `reverse` flips the layout on desktop. */
export function DepartmentSection({ department: d, reverse = false }: { department: Department; reverse?: boolean }) {
  const isIoT = d.accent === "iot";
  const titleId = `dept-${d.id}-title`;
  const Icon = icons[d.id];

  return (
    <section id={`dept-${d.id}`} aria-labelledby={titleId} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6">
      <div
        className={cn(
          "relative isolate grid items-center gap-10 overflow-hidden rounded-3xl border bg-card p-8 backdrop-blur-xl sm:p-12 lg:grid-cols-[auto_1fr]",
          reverse && "lg:grid-cols-[1fr_auto]",
        )}
      >
        <div aria-hidden className={cn("absolute -top-24 -z-10 size-80 rounded-full blur-3xl", reverse ? "-right-20" : "-left-20", isIoT ? "bg-iot/20" : "bg-cyber/20")} />

        <div className={cn("flex flex-col items-center gap-4 lg:w-56", reverse && "lg:order-2")}>
          <span
            aria-hidden
            className={cn(
              "grid size-28 place-items-center rounded-3xl border",
              isIoT ? "border-iot/30 bg-iot-soft text-iot" : "border-cyber/30 bg-cyber-soft text-cyber",
            )}
          >
            <Icon className="size-14" strokeWidth={1.5} />
          </span>
          <Badge variant={d.accent}>Dept. of {d.short}</Badge>
        </div>

        <div className="space-y-5">
          <p className={cn("font-mono text-xs tracking-[0.25em] uppercase", isIoT ? "text-iot" : "text-cyber")}>
            About the department · {d.short}
          </p>
          <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{d.name}</h2>
          <p className="text-pretty text-muted-foreground">{d.about}</p>
          <ul className="flex flex-wrap gap-2">
            {d.focus.map((f) => (
              <li key={f} className="rounded-md border bg-background/50 px-2.5 py-1 text-xs">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
