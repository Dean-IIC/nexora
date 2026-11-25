import { cn } from "@/lib/utils";

type Node = { x: number; y: number; path: string; color: "iot" | "cyber"; glyph: "chip" | "wifi" | "lock" | "eye" | "bolt" | "key" };

// Orthogonal circuit traces from the central SoC to edge devices (left) and security sensors (right).
const nodes: Node[] = [
  { x: 90, y: 130, path: "M250 270 H170 V130 H112", color: "iot", glyph: "wifi" },
  { x: 70, y: 300, path: "M240 300 H92", color: "iot", glyph: "chip" },
  { x: 90, y: 470, path: "M250 330 H170 V470 H112", color: "iot", glyph: "bolt" },
  { x: 510, y: 130, path: "M350 270 H430 V130 H488", color: "cyber", glyph: "lock" },
  { x: 530, y: 300, path: "M360 300 H508", color: "cyber", glyph: "eye" },
  { x: 510, y: 470, path: "M350 330 H430 V470 H488", color: "cyber", glyph: "key" },
];

const glyphs: Record<Node["glyph"], string> = {
  wifi: "M-9 -2 a13 13 0 0 1 18 0 M-5 2 a7 7 0 0 1 10 0 M0 6 h0.1",
  chip: "M-7 -7 h14 v14 h-14 z M-3 -3 h6 v6 h-6 z M-7 -3 h-3 M-7 3 h-3 M7 -3 h3 M7 3 h3",
  bolt: "M2 -9 L-5 1 H0 L-2 9 L5 -1 H0 Z",
  lock: "M-7 -1 h14 v9 h-14 z M-4 -1 v-4 a4 4 0 0 1 8 0 v4",
  eye: "M-10 0 Q0 -9 10 0 Q0 9 -10 0 Z M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
  key: "M-8 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M0 0 H9 M6 0 v4 M9 0 v3",
};

const stroke = { iot: "stroke-iot", cyber: "stroke-cyber" } as const;
const fill = { iot: "fill-iot", cyber: "fill-cyber" } as const;

export function HeroGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-labelledby="hero-graphic-title"
      className={cn("h-auto w-full", className)}
    >
      <title id="hero-graphic-title">
        A secure edge chip linking IoT devices on the left to cyber-security sensors on the right
      </title>
      <defs>
        <linearGradient id="hg-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" className="[stop-color:var(--iot)]" />
          <stop offset="100%" className="[stop-color:var(--cyber)]" />
        </linearGradient>
        <radialGradient id="hg-glow">
          <stop offset="0%" className="[stop-color:var(--cyber)]" stopOpacity="0.45" />
          <stop offset="100%" className="[stop-color:var(--cyber)]" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="300" cy="300" r="230" fill="url(#hg-glow)" />
      <g className="origin-svg-center animate-spin-slow">
        <circle cx="300" cy="300" r="250" fill="none" className="stroke-foreground/15" strokeDasharray="2 10" strokeWidth="2" />
        <circle cx="300" cy="300" r="205" fill="none" className="stroke-cyber/30" strokeDasharray="60 30 10 30" strokeWidth="1.5" />
      </g>

      {nodes.map((n) => (
        <g key={n.path}>
          <path d={n.path} fill="none" className={cn(stroke[n.color], "opacity-25")} strokeWidth="3" />
          <path d={n.path} fill="none" className={cn(stroke[n.color], "animate-flow")} strokeWidth="3" strokeDasharray="6 14" strokeLinecap="round" />
          <circle cx={n.x} cy={n.y} r="22" className={cn(fill[n.color], "origin-svg-center animate-pulse-ring opacity-40")} />
          <circle cx={n.x} cy={n.y} r="22" className={cn(stroke[n.color], "fill-background")} strokeWidth="2.5" />
          <path d={glyphs[n.glyph]} transform={`translate(${n.x} ${n.y})`} fill="none" className={stroke[n.color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}

      {/* SoC package with pins */}
      <g>
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} className="stroke-foreground/40" strokeWidth="3" strokeLinecap="round">
            <line x1={256 + i * 22} y1="232" x2={256 + i * 22} y2="244" />
            <line x1={256 + i * 22} y1="356" x2={256 + i * 22} y2="368" />
          </g>
        ))}
        <rect x="240" y="244" width="120" height="112" rx="18" className="fill-background stroke-foreground/30" strokeWidth="2" />
        <rect x="248" y="252" width="104" height="96" rx="12" fill="url(#hg-core)" opacity="0.18" />
        {/* Shield + keyhole */}
        <path d="M300 266 L330 278 V300 C330 320 317 333 300 340 C283 333 270 320 270 300 V278 Z" fill="url(#hg-core)" />
        <circle cx="300" cy="297" r="6" className="fill-background" />
        <path d="M297 300 h6 l2 16 h-10 z" className="fill-background" />
      </g>
    </svg>
  );
}
