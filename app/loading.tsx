export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-14">
          <span className="absolute inset-0 rounded-full border-2 border-iot/30" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyber" />
        </div>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Establishing secure link…</p>
      </div>
    </div>
  );
}
