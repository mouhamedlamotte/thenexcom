import { Logo } from "@repo/ui/components/brand/logo";
import { ButtonLink } from "@repo/ui/components/ui/button";
import { sections } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-5 py-7">
      <a href="#accueil" aria-label="nexcom, retour en haut" className="text-craie">
        <Logo title="nexcom" />
      </a>
      <nav aria-label="Navigation principale" className="hidden gap-[30px] text-[15px] font-medium md:flex">
        {sections
          .filter((s) => s.header)
          .map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-craie hover:text-corail">
              {s.header}
            </a>
          ))}
      </nav>
      <ButtonLink href="#contact">Démarrer un projet</ButtonLink>
    </header>
  );
}
