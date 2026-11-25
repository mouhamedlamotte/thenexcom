import { Logo } from "@repo/ui/components/brand/logo";
import { expertises } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="pied">
      <div className="c">
        <div className="pied-cols">
          <div>
            <Logo className="text-[#EEF1F8]" />
            <p style={{ margin: "16px 0 0", lineHeight: 1.6, maxWidth: "30ch" }}>
              Agence de développement à Dakar. Sites, apps, logiciels de gestion et paiement mobile.
            </p>
          </div>
          <div>
            <b>Expertises</b>
            {expertises.map((e) => (
              <a key={e.id} href="#expertises">
                {e.nom}
              </a>
            ))}
          </div>
          <div>
            <b>Produits</b>
            <a href="https://salonify.sn" target="_blank" rel="noopener">
              Salonify
            </a>
            <a href="#realisations">NexImmo</a>
            <a href="https://github.com/mouhamedlamotte/nexpay" target="_blank" rel="noopener">
              Nexpay
            </a>
          </div>
          <div>
            <b>Contact</b>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.city}</span>
            <a href={site.github} target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
        <div className="pied-bas">
          <span>
            {site.legal.name} · {site.legal.form} · RCCM {site.legal.rccm} · NINEA {site.legal.ninea}
          </span>
          <span>© {new Date().getFullYear()} · {site.city}</span>
        </div>
      </div>
    </footer>
  );
}
