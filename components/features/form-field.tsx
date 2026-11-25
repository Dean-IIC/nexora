import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/** Label + control + error/hint wiring with proper aria-describedby. */
export function FormField({
  id,
  label,
  hint,
  errors,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  errors?: string[];
  required?: boolean;
  className?: string;
  children: (props: { id: string; "aria-invalid"?: boolean; "aria-describedby"?: string }) => React.ReactNode;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [errors?.length ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>
        {label}
        {required && <span aria-hidden className="text-destructive">*</span>}
      </Label>
      {children({ id, "aria-invalid": errors?.length ? true : undefined, "aria-describedby": describedBy })}
      {hint && !errors?.length && <p id={hintId} className="text-xs text-muted-foreground">{hint}</p>}
      {errors?.length ? <p id={errorId} className="text-xs text-destructive">{errors[0]}</p> : null}
    </div>
  );
}

export function FormStatus({ status, message }: { status: "idle" | "success" | "error"; message?: string }) {
  if (status === "idle" || !message) return null;
  return (
    <p
      role={status === "error" ? "alert" : "status"}
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        status === "success" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-destructive/40 bg-destructive/10 text-destructive",
      )}
    >
      {message}
    </p>
  );
}

/** Hidden spam trap; bots fill it, humans never see it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
