import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Realisations } from "@/components/site/realisations";
import { Methode } from "@/components/site/methode";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Realisations />
        <Methode />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
