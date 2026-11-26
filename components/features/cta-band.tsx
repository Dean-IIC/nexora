import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-3xl border bg-card px-6 py-14 text-center backdrop-blur-xl sm:px-12">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-iot/20 via-transparent to-cyber/25" />
        <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">$ ./register --team</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Ready to secure the edge?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Registration closes {siteConfig.registrationDeadlineLabel}. Registration fee {siteConfig.fee} — meals, mentors and hardware lab included.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient" size="lg">
            <Link href="/register">Register now <ArrowRight /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">Read the FAQ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
