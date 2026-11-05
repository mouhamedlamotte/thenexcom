import { LogoMark } from "@repo/ui/components/brand/logo";
import { pillars } from "@/lib/content";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <section id="agence" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-7">
          <SectionLabel index="01">Qui sommes-nous</SectionLabel>
          <h2 className="font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl">
            Une équipe technique au service des entreprises sénégalaises.
          </h2>
          <p className="text-lg leading-relaxed text-body">
            The Nexcom est une entreprise de services informatiques basée à Dakar. Nous accompagnons
            commerces, PME et porteurs de projets de l'idée à la mise en ligne, puis dans la durée.
          </p>
          <p className="text-lg leading-relaxed text-body">
            Nous éditons aussi nos propres logiciels, utilisés chaque jour par des professionnels : c'est
            notre meilleure preuve de savoir-faire.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 rounded-[28px] bg-cobalt p-8 text-paper sm:p-10">
          <LogoMark tone="bare" className="size-20 text-paper" />
          <dl className="flex flex-col">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col gap-1.5 border-t border-cobalt-soft py-5 last:pb-0">
                <dt className="font-display text-2xl font-bold">{p.title}</dt>
                <dd className="text-[17px] leading-relaxed text-mist">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
