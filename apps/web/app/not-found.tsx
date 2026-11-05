import { Logo } from "@repo/ui/components/brand/logo";
import { ButtonLink } from "@repo/ui/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 bg-ink px-4 text-center text-paper">
      <Logo className="text-[20px]" markClassName="size-10" />
      <h1 className="font-display text-5xl font-extrabold tracking-[-0.03em]">Page introuvable.</h1>
      <p className="max-w-md text-lg text-fog">Cette page n'existe pas ou a été déplacée.</p>
      <ButtonLink href="/">Retour à l'accueil</ButtonLink>
    </main>
  );
}
