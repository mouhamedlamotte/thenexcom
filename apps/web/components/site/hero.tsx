import { ButtonLink } from "@repo/ui/components/ui/button";
import { SectionLabel } from "./section-label";

/** Butée de cote : petit trait perpendiculaire. */
function Butee({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <span className="w-4 border-t-2 border-current" />
  ) : (
    <span className="h-4 border-l-2 border-current" />
  );
}

/**
 * 01 · Le titre qui se mesure. Les cotes affichent la largeur, la hauteur et la taille réelles
 * du titre, mesurées en direct par SceneDriver (valeurs par défaut : écran de 1440 px).
 */
export function Hero() {
  return (
    <section id="accueil" data-scene className="relative flex flex-col pt-10 pb-20 sm:min-h-[860px]">
      <SectionLabel>Module 00 · Accueil · Agence de développement à Dakar</SectionLabel>

      <div className="relative mt-16 self-start sm:pr-11">
        {/* Cote horizontale, en corail : la mesure qui compte. */}
        <div
          aria-hidden
          className="mb-3.5 flex items-center gap-2.5 text-[12px] font-bold tracking-[0.16em] text-corail"
        >
          <Butee />
          <span className="grow border-t-2 border-current" />
          <span>
            <span data-mesure="largeur">1120</span> PX
          </span>
          <span className="grow border-t-2 border-current" />
          <Butee />
        </div>

        <h1
          id="hero-titre"
          className="font-display text-[clamp(64px,15.5vw,260px)] leading-[0.82] font-normal tracking-[-0.045em] whitespace-nowrap outline-[1.5px] outline-offset-[10px] outline-ligne outline-dashed"
        >
          Du code
          <br />
          <em className="text-corail">sur mesure.</em>
        </h1>

        {/* Cote verticale, en ardoise. */}
        <div
          aria-hidden
          className="absolute top-[30px] right-0 bottom-0 hidden w-5 flex-col items-center text-ardoise sm:flex"
        >
          <Butee vertical />
          <span className="grow border-l-2 border-current" />
          <span className="py-2 text-[11px] font-bold tracking-[0.16em] [writing-mode:vertical-rl]">
            <span data-mesure="hauteur">430</span> PX
          </span>
          <span className="grow border-l-2 border-current" />
          <Butee vertical />
        </div>

        <p className="mt-[22px] flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] font-bold tracking-[0.16em] text-ardoise uppercase">
          <span>
            Instrument Serif · <span data-mesure="taille">223</span> px
          </span>
          <span>Ajusté à ton écran</span>
          <span className="text-menthe">Template : aucun</span>
        </p>
      </div>

      <p className="mt-[18px] origin-left -rotate-3 font-note text-[clamp(26px,2.4vw,32px)] leading-none text-beurre">
        redimensionne ta fenêtre : tout se réajuste, comme ton futur site
      </p>

      <div className="mt-auto flex flex-wrap items-end gap-x-16 gap-y-8 pt-14">
        <p className="max-w-[680px] flex-[999_1_520px] text-[clamp(20px,1.8vw,26px)] leading-[1.5] text-[#C9CFEA]">
          Sites, apps et SaaS pour les entreprises d'ici et d'ailleurs. Construits pour ton activité, pas
          copiés d'un template, avec Orange Money et Wave déjà branchés.
        </p>
        <div className="flex flex-[1_1_320px] flex-wrap justify-end gap-3 max-sm:justify-start">
          <ButtonLink href="#contact" size="lg">
            Démarrer un projet
          </ButtonLink>
          <ButtonLink href="#realisations" variant="pointille" size="lg">
            Voir les réalisations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
