import type { AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ink" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-paper hover:bg-cobalt-deep",
  ink: "bg-ink text-paper hover:bg-body",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  "outline-light": "border border-paper/25 text-paper hover:border-paper hover:bg-paper/10",
};

/** Lien stylé en bouton (le site n'a que des liens d'action : e-mail, WhatsApp, ancres). */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
