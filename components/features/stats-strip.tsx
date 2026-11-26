const stats = [
  { value: "24", unit: "hrs", label: "Non-stop building" },
  { value: "2", unit: "tracks", label: "Edge IoT & Cyber Security" },
  { value: "12", unit: "problems", label: "Curated by partners" },
  { value: "₹75K", unit: "", label: "Total prize pool" },
];

export function StatsStrip() {
  return (
    <section aria-label="Event at a glance" className="border-y border-border/60 bg-card/40 backdrop-blur">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 text-center">
            <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="order-1 font-mono text-3xl font-semibold sm:text-4xl">
              {s.value}
              {s.unit && <span className="ml-1 text-base text-muted-foreground">{s.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
