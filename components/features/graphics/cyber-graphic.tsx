import { cn } from "@/lib/utils";

const blips = [
  { x: 120, y: 130, threat: true },
  { x: 285, y: 150, threat: false },
  { x: 290, y: 280, threat: true },
  { x: 110, y: 270, threat: false },
  { x: 200, y: 88, threat: false },
];

const binary = ["01101110", "10010111", "00111010", "11000101", "01011100", "10100011"];

/** Radar sweep around a shield — Cyber Security track illustration. */
export function CyberGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-labelledby="cyber-graphic-title" className={cn("h-auto w-full", className)}>
      <title id="cyber-graphic-title">A radar sweep detecting threats around a protective shield</title>
      <defs>
        <linearGradient id="cg-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" className="[stop-color:var(--cyber)]" stopOpacity="0" />
          <stop offset="100%" className="[stop-color:var(--cyber)]" stopOpacity="0.45" />
        </linearGradient>
        <clipPath id="cg-clip">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
      </defs>

      {/* Binary rain on the edges */}
      {binary.map((b, i) => (
        <text key={b} x={i < 3 ? 14 : 372} y={60 + (i % 3) * 110} className="fill-cyber/30 font-mono text-[11px] animate-pulse" style={{ writingMode: "vertical-rl", animationDelay: `${i * 0.4}s` }}>
          {b}
        </text>
      ))}

      {[150, 110, 70].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" className="stroke-cyber/30" strokeWidth="1.5" />
      ))}
      <line x1="50" y1="200" x2="350" y2="200" className="stroke-cyber/20" />
      <line x1="200" y1="50" x2="200" y2="350" className="stroke-cyber/20" />

      <g clipPath="url(#cg-clip)">
        <g className="origin-[200px_200px] animate-[spin_4s_linear_infinite]">
          <path d="M200 200 L350 200 A150 150 0 0 0 306 94 Z" fill="url(#cg-sweep)" />
          <line x1="200" y1="200" x2="350" y2="200" className="stroke-cyber" strokeWidth="2" />
        </g>
      </g>

      {blips.map((b, i) => (
        <g key={`${b.x}-${b.y}`}>
          <circle cx={b.x} cy={b.y} r="10" className={cn("origin-svg-center animate-pulse-ring", b.threat ? "fill-destructive/50" : "fill-cyber/40")} style={{ animationDelay: `${i * 0.5}s` }} />
          <circle cx={b.x} cy={b.y} r="4" className={b.threat ? "fill-destructive" : "fill-cyber"} />
        </g>
      ))}

      {/* Shield with check mark */}
      <path d="M200 150 L238 165 V194 C238 220 222 238 200 248 C178 238 162 220 162 194 V165 Z" className="fill-background stroke-cyber" strokeWidth="3" strokeLinejoin="round" />
      <path d="M184 198 L196 210 L218 186" fill="none" className="stroke-cyber" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="384" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">THREAT SURFACE: MONITORED</text>
    </svg>
  );
}
