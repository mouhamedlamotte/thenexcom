import { etapes } from "@/lib/content";
import { SectionLabel } from "./section-label";

/** 05 · Méthode : le « 15 » qui compte, puis une maquette qui se dessine trait par trait. */
export function Methode() {
  return (
    <section
      id="methode"
      data-scene
      className="relative border-t-[1.5px] border-dashed border-ligne pt-[110px] pb-[90px]"
    >
      <SectionLabel>05 · Comment ça se passe</SectionLabel>

      <div className="mt-2.5 flex flex-wrap items-end gap-x-10">
        <span
          aria-hidden
          data-count="15"
          className="font-display text-[clamp(220px,34vw,560px)] leading-[0.78] tracking-[-0.06em] text-corail tabular-nums"
        >
          15
        </span>
        <div className="flex flex-[1_1_320px] flex-col gap-[18px] pb-[5%]">
          <h2 className="font-display text-[clamp(64px,7vw,120px)] leading-[0.86] tracking-[-0.04em]">
            <span className="sr-only">15 </span>
            minutes
            <br />
            pour commencer.
          </h2>
          <p className="max-w-[440px] text-[19px] leading-[1.5] text-[#C9CFEA]">
            Un premier appel gratuit. Tu racontes, je pose les bonnes questions. C'est moi qui décroche, pas
            un robot.
          </p>
        </div>
      </div>

      <div className="relative mt-16">
        <svg
          role="img"
          aria-label="Une maquette de site qui se dessine au fil du défilement"
          viewBox="0 0 1200 420"
          className="block w-full"
        >
          <g fill="none" className="stroke-craie" strokeWidth="3">
            <rect className="trace mv" pathLength={1000} x="2" y="2" width="1196" height="416" />
            <path className="trace mv" pathLength={1000} d="M2 58 H1198" />
            <rect className="trace mv" pathLength={1000} x="56" y="100" width="500" height="56" />
            <rect className="trace mv" pathLength={1000} x="56" y="174" width="360" height="22" />
            <rect className="trace mv" pathLength={1000} x="56" y="222" width="190" height="52" rx="26" />
            <rect className="trace mv" pathLength={1000} x="660" y="100" width="480" height="230" />
            <rect className="trace mv" pathLength={1000} x="56" y="350" width="340" height="44" />
            <rect className="trace mv" pathLength={1000} x="430" y="350" width="340" height="44" />
            <rect className="trace mv" pathLength={1000} x="800" y="350" width="340" height="44" />
          </g>
          <g className="apparait-fin mv fill-craie">
            <circle cx="30" cy="30" r="8" />
            <circle cx="56" cy="30" r="8" />
            <circle cx="82" cy="30" r="8" />
          </g>
        </svg>
        <p
          aria-hidden
          className="apparait-fin mv absolute top-[53%] max-sm:hidden left-[22.5%] -translate-y-1/2 -rotate-[4deg] font-note text-[clamp(22px,2.6vw,40px)] leading-none whitespace-nowrap text-beurre"
        >
          ← le bouton qui fait vendre
        </p>
      </div>

      <ol className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 border-t-2 border-ligne pt-6">
        {etapes.map((e, i) => (
          <li key={e.titre} className="flex flex-col gap-1.5">
            <span className="text-[12px] font-bold tracking-[0.16em] text-corail uppercase">
              {String(i + 1).padStart(2, "0")} · {e.quand}
            </span>
            <span className="font-display text-[34px] leading-none">{e.titre}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
