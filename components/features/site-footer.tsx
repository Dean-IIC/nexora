import Link from "next/link";
import { Briefcase, Camera, GitBranch, Mail } from "lucide-react";

import { mainNav, siteConfig } from "@/lib/site-config";
import { logos } from "@/lib/data/logos";
import { tracks } from "@/lib/data/tracks";
import { BrandLogo } from "./brand-logo";
import { Logo } from "./logo";

export function SiteFooter() {
  const socials = [
    { href: siteConfig.socials.instagram, label: "Instagram", Icon: Camera },
    { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: Briefcase },
    { href: siteConfig.socials.github, label: "GitHub", Icon: GitBranch },
    { href: `mailto:${siteConfig.contact.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <div className="flex flex-wrap items-center gap-4">
            <BrandLogo logo={logos.hkbk} alt="HKBK Group of Institutions" className="h-9" />
            <BrandLogo logo={logos.ieeeBangalore} alt="IEEE Bangalore Section" className="h-11" />
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            <strong className="text-foreground">{siteConfig.officialLine}.</strong>
            <br />
            {siteConfig.dateLabel} · {siteConfig.venue}. With IEEE CASS, C-DAC and DEFSEC.
          </p>
          <ul className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-md border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">Explore</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {mainNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-muted-foreground hover:text-foreground">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">Tracks</h2>
          <ul className="space-y-2 text-sm">
            {tracks.map((t) => (
              <li key={t.slug}>
                <Link href={`/tracks/${t.slug}`} className="text-muted-foreground hover:text-foreground">
                  Track {t.number} — {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/register" className="font-medium text-primary hover:underline">Register now →</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2026 {siteConfig.name}. Built for builders and defenders.
      </p>
    </footer>
  );
}
