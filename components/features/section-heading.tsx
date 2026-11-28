import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "mx-auto items-center text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <Tag className={cn("font-semibold tracking-tight text-balance", Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl")}>
        {title}
      </Tag>
      {description && <p className="text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24", className)}>{children}</div>;
}
