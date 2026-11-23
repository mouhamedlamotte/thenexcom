import { ButtonLink } from "@repo/ui/components/ui/button";
import { site, whatsappQuote } from "@/lib/site";
import { SectionLabel } from "./section-label";

const CHEVRON_GAUCHE = "0,0 20,0 53,50 20,100 0,100 33,50";
const CHEVRON_DROIT = "100,0 80,0 47,50 80,100 100,100 67,50";

/** 06 · Contact : les deux chevrons du logo arrivent chacun d'un côté et forment le x. */
export function Contact() {
  return (
    <section
      id="contact"
      data-scene
      className="relative flex flex-col justify-center sm:min-h-[860px] overflow-hidden border-t-[1.5px] border-dashed border-ligne pt-[100px] pb-10"
    >
      <SectionLabel>06 · Ton tour</SectionLabel>

      <div aria-hidden className="relative mx-auto my-10 size-[clamp(160px,28vw,280px)]">
        <svg viewBox="0 0 100 100" className="chevron-gauche mv absolute inset-0 size-full">
          <polygon points={CHEVRON_GAUCHE} className="fill-corail" />
        </svg>
        <svg viewBox="0 0 100 100" className="chevron-droit mv absolute inset-0 size-full">
          <polygon points={CHEVRON_DROIT} className="fill-corail" />
        </svg>
      </div>

      <h2 className="titre-section text-center">
        Et toi, c'est quoi
        <br />
        ton <em className="text-corail">next ?</em>
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href={whatsappQuote} target="_blank" rel="noopener" size="xl">
          Envoyer un message
        </ButtonLink>
        <ButtonLink href={`mailto:${site.email}`} variant="pointille" size="xl">
          {site.email}
        </ButtonLink>
      </div>
    </section>
  );
}
