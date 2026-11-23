import type { AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "plein" | "pointille";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  /* Corail plein, texte nuit (5,8:1). */
  plein: "bg-corail text-nuit font-bold",
  /* Contour en pointillé : un élément « en cours », la marque du plan. */
  pointille: "border-2 border-dashed border-ardoise text-craie font-semibold hover:border-craie",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-[22px] text-[15px]",
  lg: "min-h-14 px-7 text-[17px]",
  xl: "min-h-16 px-8 text-[18px]",
};

/** Lien en forme de pilule (le site n'a que des liens d'action : WhatsApp, e-mail, ancres). */
export function ButtonLink({
  variant = "plein",
  size = "md",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
