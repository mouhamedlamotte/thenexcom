import { cn } from "../../lib/cn";

/**
 * Le « N » tracé d'un trait ; son extrémité se détache en un point (la connexion).
 * `tone="cobalt"` : carré cobalt + trait papier (usage par défaut).
 * `tone="bare"` : trait seul, couleur héritée (`currentColor`), pour poser sur un aplat cobalt.
 */
export function LogoMark({
  className,
  tone = "cobalt",
  title,
}: {
  className?: string;
  tone?: "cobalt" | "bare";
  title?: string;
}) {
  const stroke = tone === "cobalt" ? "#F4F2EC" : "currentColor";
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {tone === "cobalt" && <rect width="100" height="100" rx="24" fill="#2346E8" />}
      <path
        d="M31 70 V31 L69 70 V52"
        fill="none"
        stroke={stroke}
        strokeWidth={tone === "cobalt" ? 11 : 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="69" cy="33" r={tone === "cobalt" ? 7.5 : 7} fill={stroke} />
    </svg>
  );
}

/** Logo complet : pictogramme + « the » en mono discret + « nexcom » en display. */
export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-9", markClassName)} />
      <span className="inline-flex items-baseline gap-1.5 leading-none">
        <span className="font-mono text-[0.8em] opacity-60">the</span>
        <span className="font-display text-[1.6em] font-extrabold tracking-[-0.03em]">nexcom</span>
      </span>
      <span className="sr-only">The Nexcom</span>
    </span>
  );
}
