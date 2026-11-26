import Image from "next/image";
import { UserRound } from "lucide-react";

import type { Person } from "@/lib/data/people";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .replace(/^(Prof|Dr|Mr|Ms|Mrs)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function Avatar({ person, size = "md", className }: { person: Person; size?: "sm" | "md" | "lg"; className?: string }) {
  const dims = { sm: "size-12 text-sm", md: "size-20 text-xl", lg: "size-28 text-3xl" }[size];
  const px = { sm: 48, md: 80, lg: 112 }[size];

  return (
    <div className={cn("relative shrink-0 rounded-full bg-gradient-to-br from-iot to-cyber p-[2px]", dims, className)}>
      <div className="grid size-full place-items-center overflow-hidden rounded-full bg-background font-semibold">
        {person.photo ? (
          <Image src={person.photo} alt={person.name ?? person.role} width={px} height={px} className="size-full object-cover" />
        ) : person.name ? (
          <span aria-hidden className="bg-gradient-to-br from-iot to-cyber bg-clip-text text-transparent">{initials(person.name)}</span>
        ) : (
          <UserRound aria-hidden className="size-1/2 text-muted-foreground" />
        )}
      </div>
    </div>
  );
}

/** Profile card. When no name is set, the role becomes the heading. */
export function PersonCard({ person, className }: { person: Person; className?: string }) {
  return (
    <div className={cn("flex h-full flex-col items-center gap-3 rounded-xl border bg-card p-5 text-center backdrop-blur transition-colors hover:border-primary/40", className)}>
      <Avatar person={person} size="lg" />
      <div className="space-y-1">
        <h3 className="leading-tight font-semibold">{person.name ?? person.role}</h3>
        {person.name && <p className="text-sm text-primary">{person.role}</p>}
        {person.org && <p className="text-xs text-muted-foreground">{person.org}</p>}
      </div>
    </div>
  );
}
