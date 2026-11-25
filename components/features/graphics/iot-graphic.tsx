import { cn } from "@/lib/utils";

const devices = [
  { x: 80, y: 90, label: "TEMP", d: "M0 -12 v16 M-4 4 a4 4 0 1 0 8 0 M-4 4 V-12 a4 4 0 0 1 8 0 V4" },
  { x: 320, y: 80, label: "CAM", d: "M-12 -7 h18 v14 h-18 z M6 -3 l8 -4 v14 l-8 -4" },
  { x: 60, y: 260, label: "GPS", d: "M0 10 C-10 -2 -9 -12 0 -12 C9 -12 10 -2 0 10 Z M-3 -4 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0" },
  { x: 340, y: 250, label: "MOTOR", d: "M-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 M0 -9 V-14 M0 9 V14 M-9 0 H-14 M9 0 H14" },
  { x: 200, y: 320, label: "LoRa", d: "M-10 -4 a14 14 0 0 1 20 0 M-6 0 a8 8 0 0 1 12 0 M0 5 v8" },
];

/** Edge gateway with a sensor mesh — Edge IoT track illustration. */
export function IoTGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-labelledby="iot-graphic-title" className={cn("h-auto w-full", className)}>
      <title id="iot-graphic-title">An edge gateway connected to a mesh of IoT sensors</title>
      {/* Mesh links between neighbouring devices */}
      {devices.map((a, i) => {
        const b = devices[(i + 2) % devices.length];
        return <line key={`m-${a.label}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-iot/20" strokeWidth="1.5" strokeDasharray="3 6" />;
      })}
      {devices.map((dev) => (
        <g key={dev.label}>
          <line x1="200" y1="190" x2={dev.x} y2={dev.y} className="stroke-iot/25" strokeWidth="2.5" />
          <line x1="200" y1="190" x2={dev.x} y2={dev.y} className="stroke-iot animate-flow" strokeWidth="2.5" strokeDasharray="4 12" strokeLinecap="round" />
          <circle cx={dev.x} cy={dev.y} r="26" className="fill-iot/30 origin-svg-center animate-pulse-ring" />
          <circle cx={dev.x} cy={dev.y} r="26" className="fill-background stroke-iot" strokeWidth="2" />
          <path d={dev.d} transform={`translate(${dev.x} ${dev.y})`} fill="none" className="stroke-iot" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x={dev.x} y={dev.y + 44} textAnchor="middle" className="fill-muted-foreground font-mono text-[11px]">{dev.label}</text>
        </g>
      ))}
      {/* Broadcast arcs */}
      {[54, 74, 94].map((r, i) => (
        <path key={r} d={`M${200 - r} 150 A${r} ${r} 0 0 1 ${200 + r} 150`} fill="none" className="stroke-iot animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} strokeOpacity={0.6 - i * 0.15} strokeWidth="2" />
      ))}
      {/* Gateway */}
      <rect x="150" y="160" width="100" height="62" rx="12" className="fill-background stroke-iot" strokeWidth="2.5" />
      <rect x="162" y="172" width="76" height="10" rx="3" className="fill-iot/20" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={170 + i * 18} cy="204" r="4" className={cn("fill-iot", i % 2 ? "animate-blink" : "")} />
      ))}
      <line x1="200" y1="160" x2="200" y2="138" className="stroke-iot" strokeWidth="3" strokeLinecap="round" />
      <text x="200" y="248" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">EDGE NODE</text>
    </svg>
  );
}
