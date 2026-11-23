import { cn } from "@repo/ui/lib/cn";

/** Étiquette de section « 02 · POURQUOI NEXCOM » : Hanken, majuscules, 0.16em, ardoise. */
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[12px] leading-[1.4] font-bold tracking-[0.16em] text-ardoise uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
