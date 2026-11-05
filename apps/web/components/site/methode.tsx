import { steps } from "@/lib/content";
import { SectionLabel } from "./section-label";

export function Methode() {
  return (
    <section id="methode" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-6">
          <SectionLabel index="04" tone="dark">
            Notre méthode
          </SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl">
            Un projet clair, du premier échange à la maintenance.
          </h2>
        </div>

        <ol className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3 border-t-[3px] border-cobalt pt-6">
              <span className="font-display text-5xl leading-none font-extrabold text-cobalt-soft">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <p className="text-[16px] leading-relaxed text-fog">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
