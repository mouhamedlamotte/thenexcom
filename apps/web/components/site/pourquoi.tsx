import { diff } from "@/lib/content";
import { SectionLabel } from "./section-label";

/** 02 · Pourquoi nexcom : un diff de code, avant → après. Les paires s'allument au défilement. */
export function Pourquoi() {
  return (
    <section
      id="pourquoi"
      data-scene
      className="relative border-t-[1.5px] border-dashed border-ligne pt-[110px] pb-[90px]"
    >
      <SectionLabel>02 · Pourquoi nexcom</SectionLabel>
      <h2 className="titre-section mt-5 mb-14">
        Ce qui change
        <br />
        <em className="text-corail">avec nous.</em>
      </h2>

      <div className="border-[1.5px] border-ligne bg-[#0F1438]">
        <div className="flex flex-wrap justify-between gap-2.5 border-b-[1.5px] border-ligne px-6 py-4 text-[12px] font-bold tracking-[0.14em]">
          <span>TON-PROJET / AVANT → APRÈS</span>
          <span className="text-ardoise">
            {diff.length} SUPPRESSIONS · <span className="text-menthe">{diff.length} AJOUTS</span>
          </span>
        </div>

        <ol className="flex flex-col gap-0.5 py-2">
          {diff.map((paire, i) => (
            <li
              key={paire.apres}
              className="diff-paire mv flex flex-col gap-0.5"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="grid grid-cols-[32px_24px_1fr] items-baseline bg-[#1A1238] px-4 py-3.5 sm:grid-cols-[48px_28px_1fr] sm:px-6">
                <span aria-hidden className="text-[13px] text-[#5C6399]">
                  {i * 2 + 1}
                </span>
                <span aria-hidden className="text-[22px] font-bold text-corail">
                  −
                </span>
                <del className="text-[clamp(18px,1.8vw,24px)] leading-[1.4] text-ardoise decoration-corail">
                  <span className="sr-only">Avant : </span>
                  {paire.avant}
                </del>
              </div>
              <div className="grid grid-cols-[32px_24px_1fr] items-baseline bg-[#11253A] px-4 py-3.5 sm:grid-cols-[48px_28px_1fr] sm:px-6">
                <span aria-hidden className="text-[13px] text-[#5C6399]">
                  {i * 2 + 2}
                </span>
                <span aria-hidden className="text-[22px] font-bold text-menthe">
                  +
                </span>
                <ins className="font-display text-[clamp(26px,2.6vw,38px)] leading-[1.15] text-craie no-underline">
                  <span className="sr-only">Avec nexcom : </span>
                  {paire.apres}
                </ins>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-[18px] flex justify-end">
        <span className="inline-block -rotate-3 font-note text-[32px] leading-none text-beurre">
          on fusionne ?
        </span>
      </p>
    </section>
  );
}
