import Link from "next/link";

import { partners } from "@/lib/data/content";

export function PartnerStrip() {
  return (
    <section aria-labelledby="partners-strip" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 id="partners-strip" className="mb-8 text-center font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        In collaboration with
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {partners.map((p) => (
          <li key={p.name}>
            <Link
              href="/partners"
              className="flex h-full flex-col items-center gap-1 rounded-xl border bg-card px-6 py-8 text-center backdrop-blur transition-colors hover:border-primary/50"
            >
              <span className="text-2xl font-semibold tracking-tight">{p.name}</span>
              <span className="text-xs text-muted-foreground">{p.role}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
