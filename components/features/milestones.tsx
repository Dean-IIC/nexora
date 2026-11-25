import { milestones } from "@/lib/data/schedule";

export function Milestones() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
      <div aria-hidden className="absolute top-3 left-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-iot to-cyber md:top-3 md:left-0 md:h-px md:w-full md:bg-gradient-to-r" />
      {milestones.map((m, i) => (
        <li key={m.title} className="relative pl-10 md:pt-10 md:pl-0">
          <span
            aria-hidden
            className="absolute top-0 left-0 grid size-6 place-items-center rounded-full border-2 border-primary bg-background font-mono text-[10px] font-semibold"
          >
            {i + 1}
          </span>
          <p className="font-mono text-xs text-primary">{m.date}</p>
          <h3 className="mt-1 font-semibold">{m.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
        </li>
      ))}
    </ol>
  );
}
