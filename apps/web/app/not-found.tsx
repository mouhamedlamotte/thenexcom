import { Logo } from "@repo/ui/components/brand/logo";
import { ButtonLink } from "@repo/ui/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 text-center">
      <Logo className="h-[30px]" />
      <h1 className="font-display text-[clamp(64px,10vw,140px)] leading-[0.9] tracking-[-0.04em]">
        Page <em className="text-corail">introuvable.</em>
      </h1>
      <p className="max-w-md text-[18px] text-ardoise">
        Cette page n'existe pas, ou plus. Rien de cassé chez toi.
      </p>
      <ButtonLink href="/" size="lg">
        Retour à l'accueil
      </ButtonLink>
    </main>
  );
}
