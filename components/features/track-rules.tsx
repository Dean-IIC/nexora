import { Cpu, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { trackRules } from "@/lib/data/content";
import { cn } from "@/lib/utils";

/** Two track-specific rule sections: Edge IoT and Cyber Security. */
export function TrackRules() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {trackRules.map((t) => {
        const iot = t.track === "edge-iot";
        const Icon = iot ? Cpu : ShieldCheck;
        return (
          <section
            key={t.track}
            id={`rules-${t.track}`}
            aria-labelledby={`rules-${t.track}-title`}
            className={cn(
              "relative isolate scroll-mt-24 overflow-hidden rounded-2xl border bg-card p-6 backdrop-blur-xl sm:p-8",
              iot ? "border-iot/30" : "border-cyber/30",
            )}
          >
            <div aria-hidden className={cn("absolute -top-20 -right-20 -z-10 size-56 rounded-full blur-3xl", iot ? "bg-iot/15" : "bg-cyber/15")} />
            <div className="flex items-center gap-3">
              <Icon className={cn("size-7", iot ? "text-iot" : "text-cyber")} aria-hidden />
              <h2 id={`rules-${t.track}-title`} className="text-2xl font-semibold tracking-tight">{t.title}</h2>
            </div>
            <Badge variant={iot ? "iot" : "cyber"} className="mt-3">{iot ? "Track 01" : "Track 02"}</Badge>
            <div className="mt-6 space-y-6">
              {t.sections.map((sec) => (
                <div key={sec.title}>
                  <h3 className="font-semibold">{sec.title}</h3>
                  <ul className={cn("mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground", iot ? "marker:text-iot" : "marker:text-cyber")}>
                    {sec.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
