import { SiteHeader } from "@/components/site/site-header";
import { Rail } from "@/components/site/rail";
import { SceneDriver } from "@/components/site/scene-driver";
import { Hero } from "@/components/site/hero";
import { Pourquoi } from "@/components/site/pourquoi";
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
    <div className="relative overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Rail />
      <SceneDriver />
      {/* Marge gauche du rail (80 + 40 = 120 px) sur un conteneur à part : pas de conflit avec sm:px-10. */}
      <div className="mx-auto max-w-[1400px] min-[900px]:pl-20">
        <div className="px-4 sm:px-10">
          <SiteHeader />
          <main>
            <Hero />
            <Pourquoi />
            <Services />
            <Realisations />
            <Methode />
            <Contact />
          </main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
