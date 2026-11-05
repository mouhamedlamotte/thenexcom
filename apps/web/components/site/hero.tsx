import Image from "next/image";
import { ButtonLink } from "@repo/ui/components/ui/button";
import { quoteMailto } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-7">
          <p className="font-mono text-[13px] tracking-[0.25em] text-cobalt-soft uppercase">
            Solutions informatiques · Dakar
          </p>
          <h1 className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-[68px]">
            Des solutions numériques qui tournent pour de vrai.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-fog">
            The Nexcom conçoit, développe et héberge des sites, applications et logiciels pour les entreprises
            du Sénégal, et édite ses propres solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={quoteMailto}>Demander un devis</ButtonLink>
            <ButtonLink href="#realisations" variant="outline-light">
              Voir nos réalisations
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-square">
            <Image
              src="/img/salon-tresses.webp"
              alt="Coiffeuse dans un salon de Dakar qui utilise un logiciel développé par The Nexcom"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <Image
            src="/img/ecran-caisse.webp"
            alt="Écran Caisse du jour de l'application Salonify Pro"
            width={560}
            height={1223}
            className="absolute -bottom-6 -left-4 w-[38%] rounded-[22px] border-4 border-paper shadow-2xl shadow-black/40 sm:-left-10"
          />
        </div>
      </div>
    </section>
  );
}
