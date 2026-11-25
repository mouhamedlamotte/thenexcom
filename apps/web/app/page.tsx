import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Studio } from "@/components/site/studio";
import { Expertises } from "@/components/site/expertises";
import { Realisations } from "@/components/site/realisations";
import { Methode } from "@/components/site/methode";
import { Derriere } from "@/components/site/derriere";
import { Faq } from "@/components/site/faq";
import { Final } from "@/components/site/final";
import { SiteFooter } from "@/components/site/site-footer";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Studio />
        <Expertises />
        <Realisations />
        <Methode />
        <Derriere />
        <Faq />
        <Final />
      </main>
      <SiteFooter />
    </>
  );
}
