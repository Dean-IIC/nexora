import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-6xl font-semibold bg-gradient-to-r from-iot to-cyber bg-clip-text text-transparent">404</p>
      <h1 className="text-2xl font-semibold">Packet lost in transit</h1>
      <p className="text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button asChild><Link href="/">Back to base</Link></Button>
    </div>
  );
}
