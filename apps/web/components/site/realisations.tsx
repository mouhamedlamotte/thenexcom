import Image from "next/image";
import { projets } from "@/lib/content";
import { SectionLabel } from "./section-label";

/** 04 · Réalisations : déjà en ligne. */
export function Realisations() {
  const { salonify, nexpay } = projets;
  return (
    <section
      id="realisations"
      data-scene
      className="relative border-t-[1.5px] border-dashed border-ligne pt-[110px] pb-[90px]"
    >
      <div className="flex items-center justify-between">
        <SectionLabel>04 · Réalisations</SectionLabel>
        <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.16em] text-menthe">
          <span aria-hidden className="en-ligne size-2.5 rounded-full bg-menthe" />
          EN LIGNE
        </p>
      </div>
      <h2 className="mt-4 font-display text-[clamp(72px,21vw,360px)] leading-[0.8] tracking-[-0.06em]">
        Déjà en <em className="text-corail">ligne.</em>
      </h2>

      <article className="mt-14 flex flex-wrap items-center gap-10">
        <div className="relative min-w-0 flex-[999_1_560px]">
          <div
            aria-hidden
            className="mb-2.5 flex items-center gap-2.5 text-[11px] font-bold tracking-[0.16em] text-ardoise"
          >
            <span className="h-3.5 border-l-[1.5px] border-current" />
            <span className="grow border-t-[1.5px] border-current" />
            <span>{salonify.capture.largeur} PX</span>
            <span className="grow border-t-[1.5px] border-current" />
            <span className="h-3.5 border-l-[1.5px] border-current" />
          </div>
          <div className="capture mv relative aspect-[16/10] overflow-hidden border-[3px] border-craie bg-nuit-relief">
            <Image
              src={salonify.capture.src}
              alt="Tableau de bord web de Salonify : chiffre d'affaires, caisse et équipe"
              fill
              sizes="(min-width: 1400px) 820px, (min-width: 900px) 60vw, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="flex flex-[1_1_320px] flex-col gap-4">
          <p className="text-[12px] font-bold tracking-[0.16em] text-ardoise uppercase">{salonify.module}</p>
          <h3 className="font-display text-[76px] leading-[0.9]">{salonify.nom}</h3>
          <p className="text-[18px] leading-[1.55] text-[#C9CFEA]">{salonify.texte}</p>
          <a
            href={salonify.lien}
            target="_blank"
            rel="noopener"
            className="text-[16px] font-bold text-corail hover:text-craie"
          >
            {salonify.lienTexte} →
          </a>
        </div>
      </article>

      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[18px]">
        <article className="flex min-h-[240px] flex-col gap-3 bg-nuit-relief p-[30px]">
          <p className="text-[12px] font-bold tracking-[0.16em] text-ardoise uppercase">{nexpay.module}</p>
          <h3 className="font-display text-[56px] leading-[0.9]">{nexpay.nom}</h3>
          <p className="text-[16px] leading-[1.55] text-[#C9CFEA]">{nexpay.texte}</p>
          <a
            href={nexpay.lien}
            target="_blank"
            rel="noopener"
            className="mt-auto text-[15px] font-bold text-corail hover:text-craie"
          >
            {nexpay.lienTexte} →
          </a>
        </article>
        <a
          href="#contact"
          className="flex min-h-[240px] flex-col gap-3 border-[3px] border-dashed border-ardoise p-[30px] text-craie hover:border-craie"
        >
          <p className="text-[12px] font-bold tracking-[0.16em] text-ardoise uppercase">
            Module 03 · En attente
          </p>
          <p className="font-display text-[56px] leading-[0.9]">
            Ton projet<span className="text-corail"> ?</span>
          </p>
          <p className="text-[16px] leading-[1.55] text-[#C9CFEA]">
            Ce cadre est vide. Il attend quelque chose de construit pour toi.
          </p>
        </a>
      </div>
    </section>
  );
}
