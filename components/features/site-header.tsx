import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks className="flex items-center gap-1" />
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <Link href="/register">Register</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
