import { cn } from "@repo/ui/lib/cn";

/** Étiquette numérotée « 02 · QUI SOMMES-NOUS », signature de la DA. */
export function SectionLabel({
  index,
  children,
  tone = "light",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-cobalt border-cobalt" : "text-cobalt-soft border-cobalt-soft";
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[13px] tracking-[0.2em] uppercase", color)}>
      <span className="rounded-md border-[1.5px] px-2 py-0.5 tracking-normal">{index}</span>
      <span>{children}</span>
    </div>
  );
}
