import Image from "next/image";
import { nexpayFeatures, salonifyFeatures, salonifySteps, stack } from "@/lib/content";
import { SectionLabel } from "./section-label";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-ink px-3 py-1.5 font-mono text-[12px] tracking-[0.15em] text-paper uppercase">
      {children}
    </span>
  );
}

export function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-6">
          <SectionLabel index="03">Nos réalisations</SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl">
            Des produits en service, pas des maquettes.
          </h2>
        </div>

        {/* Salonify */}
        <article className="flex flex-col gap-8 rounded-[28px] border border-line bg-white p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-4xl font-extrabold tracking-[-0.03em]">Salonify</h3>
                <Tag>SaaS · web + mobile</Tag>
              </div>
              <p className="text-lg leading-relaxed text-body">
                Les salons de coiffure tenaient leur caisse et leur équipe dans un cahier. Salonify met la
                gestion du salon dans une application mobile et un tableau de bord web : chaque prestation
                saisie, la caisse à jour, les parts de l'équipe prêtes.
              </p>
              <ul className="flex flex-col border-t border-line">
                {salonifyFeatures.map((f) => (
                  <li key={f} className="border-b border-line py-3 text-[16px]">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[12px] tracking-[0.12em] text-slate uppercase">
                Édité et exploité par The Nexcom · captures réelles, données de démonstration
              </p>
            </div>

            <ol className="grid grid-cols-3 gap-3 sm:gap-5">
              {salonifySteps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-3">
                  <div className="flex flex-col items-start gap-2 sm:flex-row">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-cobalt font-display text-sm font-extrabold text-cobalt">
                      {i + 1}
                    </span>
                    <span className="text-[13px] leading-snug font-semibold sm:text-[15px]">{s.title}</span>
                  </div>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={560}
                    height={1223}
                    sizes="(min-width: 1024px) 200px, 30vw"
                    className="w-full rounded-[18px] border-[3px] border-ink"
                  />
                </li>
              ))}
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-[20px] bg-cobalt p-4 sm:p-8">
            <Image
              src="/img/dashboard.webp"
              alt="Tableau de bord web de Salonify : chiffre d'affaires, caisse et équipe"
              width={1400}
              height={788}
              sizes="(min-width: 1152px) 1050px, 100vw"
              className="w-full rounded-xl border-4 border-ink"
            />
          </div>
        </article>

        {/* NexPay + outils */}
        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="flex flex-col gap-6 rounded-[28px] bg-cobalt p-6 text-paper sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-4xl font-extrabold tracking-[-0.03em]">NexPay</h3>
              <span className="rounded-md bg-paper/15 px-3 py-1.5 font-mono text-[12px] tracking-[0.15em] uppercase">
                Open source
              </span>
            </div>
            <p className="text-lg leading-relaxed text-mist">
              Chaque moyen de paiement mobile a sa propre intégration. NexPay les réunit derrière une seule
              API : Wave, Orange Money, et d'autres opérateurs à venir.
            </p>

            <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
              <div className="flex flex-col gap-2">
                {["Wave", "Orange Money", "Autres opérateurs"].map((o) => (
                  <span key={o} className="rounded-xl bg-paper px-4 py-3 text-center font-semibold text-ink">
                    {o}
                  </span>
                ))}
              </div>
              <Arrow />
              <div className="rounded-2xl border-2 border-paper/40 bg-cobalt-deep px-4 py-6 text-center">
                <p className="font-display text-3xl font-extrabold">NexPay</p>
                <p className="mt-1 text-[13px] text-mist">Une seule API</p>
              </div>
              <Arrow />
              <span className="rounded-xl bg-ink px-4 py-3 text-center font-semibold">Votre application</span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {nexpayFeatures.map((f) => (
                <li key={f} className="rounded-full bg-paper/12 px-3 py-1.5 text-[14px] text-mist">
                  {f}
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col gap-5 rounded-[28px] border border-line bg-white p-6 sm:p-10">
            <p className="font-mono text-[12px] tracking-[0.2em] text-slate uppercase">Nos outils</p>
            <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em]">
              Une pile moderne, maîtrisée de bout en bout.
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1.5 text-[14px]">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 40 24" className="mx-auto h-6 w-10 rotate-90 text-paper sm:rotate-0" aria-hidden>
      <path
        d="M2 12h32M27 5l8 7-8 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
