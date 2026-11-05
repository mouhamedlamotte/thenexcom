import { ButtonLink } from "@repo/ui/components/ui/button";
import { quoteMailto, site, whatsappQuote } from "@/lib/site";
import { SectionLabel } from "./section-label";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <SectionLabel index="05">Contact</SectionLabel>
          <h2 className="font-display text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-6xl">
            Parlons de votre projet.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-body">
            Un site, une application, un logiciel ou des paiements à intégrer{" "}? Écrivez-nous{" "}: nous
            revenons vers vous avec un premier avis et, si le projet s'y prête, un devis.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={whatsappQuote} target="_blank" rel="noopener">
              Écrire sur WhatsApp
            </ButtonLink>
            <ButtonLink href={quoteMailto} variant="outline">
              Demander un devis par e-mail
            </ButtonLink>
          </div>
        </div>

        <dl className="grid gap-6 rounded-[28px] bg-ink p-8 text-paper sm:grid-cols-2 lg:grid-cols-1 sm:p-10">
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.2em] text-ash uppercase">E-mail</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="text-lg font-medium hover:text-cobalt-soft">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.2em] text-ash uppercase">
              Téléphone · WhatsApp
            </dt>
            <dd>
              <a href={site.phoneHref} className="text-lg font-medium hover:text-cobalt-soft">
                {site.phone}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.2em] text-ash uppercase">Où</dt>
            <dd className="text-lg font-medium">{site.city}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.2em] text-ash uppercase">Paiements acceptés</dt>
            <dd className="text-lg font-medium">Wave · Orange Money · Carte</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
