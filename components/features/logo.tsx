import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" className="[stop-color:var(--iot)]" />
          <stop offset="100%" className="[stop-color:var(--cyber)]" />
        </linearGradient>
      </defs>
      <path d="M16 2 L28 8.5 V23.5 L16 30 L4 23.5 V8.5 Z" fill="none" stroke="url(#logo-g)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M11 22 V10 L21 22 V10" fill="none" stroke="url(#logo-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-md font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
      <LogoMark />
      <span className="text-lg">
        Nexora <span className="bg-gradient-to-r from-iot to-cyber bg-clip-text text-transparent">2.0</span>
      </span>
    </Link>
  );
}
