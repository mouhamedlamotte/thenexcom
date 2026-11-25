import type { Metadata } from "next";
import Link from "next/link";
import { PfAnim } from "@/components/portfolio/pf-anim";
import { PfAutres } from "@/components/portfolio/pf-autres";
import { PfHeros } from "@/components/portfolio/pf-heros";
import { PfMenu } from "@/components/portfolio/pf-menu";
import { PfParcours } from "@/components/portfolio/pf-parcours";
import { PfProjets } from "@/components/portfolio/pf-projets";
import { cl } from "@/components/portfolio/outils";
import { portfolio, stack } from "@/lib/portfolio";
import { site } from "@/lib/site";

const description =
  "Mouhamed Lamotte, développeur à Dakar et fondateur de The Nexcom. Salonify, NexImmo, Nexpay, et le reste de mes projets.";

export const metadata: Metadata = {
  title: { absolute: "Mouhamed Lamotte — développeur à Dakar" },
  description,
  alternates: { canonical: portfolio.chemin },
  openGraph: {
    type: "profile",
    title: "Mouhamed Lamotte — développeur à Dakar",
    description,
    url: portfolio.chemin,
  },
};

/**
 * Portfolio de Mouhamed Lamotte, servi sur /@mouhamedlamotte (réécriture dans next.config.ts). Prototype validé le 25/11/2026 (héros « Nom », décor « Plan ») :
 * claude.ai/artifact/XrinjDX435ng3NYtju4m5x. Styles isolés dans components/portfolio/portfolio.module.css,
 * textes et données dans lib/portfolio.ts.
 */
export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.nom,
    alternateName: portfolio.pseudo,
    jobTitle: "Développeur, fondateur de The Nexcom",
    url: `${site.url}${portfolio.chemin}`,
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    sameAs: portfolio.reseaux.map((r) => r.href),
  };

  return (
    <div id="pf" className={cl("pf")}>
      <PfAnim cible="pf" />
      <PfMenu />
      <main>
        <PfHeros />

        <section className={cl("phrase")} data-titre="Accueil">
          <div className={cl("c phrase-grille")}>
            <p className={cl("d")}>
              Je construis des outils qu&apos;on utilise <em>pour de vrai.</em>
            </p>
            <div className={cl("phrase-txt")}>
              <p>
                J&apos;aime ce qui se passe derrière l&apos;écran : les API, les bases de données, les pipelines. Et ce qui
                se passe devant : un outil assez simple pour qu&apos;on n&apos;ait plus besoin du cahier.
              </p>
              <p>
                Formé à Sonatel Academy, passé par la data chez Sonatel et Jolof Mobility, aujourd&apos;hui à mon compte
                avec The Nexcom.
              </p>
            </div>
          </div>
        </section>

        <PfProjets />
        <PfAutres />

        <section id="stack" className={cl("stack")} data-titre="Stack">
          <div className={cl("c")}>
            <h2 className={cl("d titre-sec")}>
              Du pixel <em>au serveur.</em>
            </h2>
            <div className={cl("colonnes")}>
              {stack.map((col) => (
                <div key={col.titre}>
                  <h3>{col.titre}</h3>
                  <p>
                    {col.outils.map((o, i) => (
                      <span key={o}>
                        {i > 0 && <br />}
                        {o}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PfParcours />

        <section id="contact" className={cl("contact")} data-titre="Contact">
          <div className={cl("c contact-grille")}>
            <div>
              <h2 className={cl("d")}>
                Un projet ? <em>Ça passe par nexcom.</em>
              </h2>
              <div className={cl("actions")}>
                <Link className={cl("btn btn-cor")} href="/">
                  Aller sur nexcom
                </Link>
                <a className={cl("btn btn-verre")} href={`mailto:${portfolio.email}`}>
                  M&apos;écrire
                </a>
              </div>
            </div>
            <div className={cl("reseaux")}>
              {portfolio.reseaux.map((r) => (
                <a key={r.nom} href={r.href} target="_blank" rel="noopener">
                  <span>{r.nom}</span>
                  <span>{r.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className={cl("pied")}>
        <div className={cl("c")}>
          <span>
            {portfolio.nom} · {portfolio.pseudo}
          </span>
          <Link href="/">The Nexcom · Dakar</Link>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
