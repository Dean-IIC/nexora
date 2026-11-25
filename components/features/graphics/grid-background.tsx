import { cn } from "@/lib/utils";

/** Decorative circuit-grid backdrop with soft track-coloured glows. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute -top-40 -left-32 size-[32rem] rounded-full bg-iot/20 blur-3xl" />
      <div className="absolute -top-20 -right-32 size-[30rem] rounded-full bg-cyber/20 blur-3xl" />
    </div>
  );
}
