import s from "./portfolio.module.css";

/** Classes du module : `cl("btn btn-cor")` → les noms isolés correspondants. Les valeurs vides sont ignorées. */
export function cl(...noms: (string | false | null | undefined)[]) {
  return noms
    .filter(Boolean)
    .flatMap((n) => (n as string).split(" "))
    .map((n) => s[n] ?? n)
    .join(" ");
}

/** Les deux chevrons du x de nexcom. */
export function Chevrons({ className }: { className?: string }) {
  return (
    <svg viewBox="220 220 560 560" aria-hidden className={className}>
      <polygon points="220,220 343.2,220 516.8,500 343.2,780 220,780 393.6,500" fill="#F2604A" />
      <polygon points="780,220 656.8,220 483.2,500 656.8,780 780,780 606.4,500" fill="#F2604A" />
    </svg>
  );
}
