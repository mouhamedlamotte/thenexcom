import { Logo } from "@repo/ui/components/brand/logo";
import { nav } from "@/lib/site";

/** Menu : une capsule indigo détachée, fixe, exactement de la largeur du contenu. */
export function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-barre">
        <a href="#accueil" aria-label="nexcom, retour en haut" className="flex">
          <Logo />
        </a>
        <nav aria-label="Navigation principale" className="nav-liens">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} aria-current={i === 0 ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-cor" href="#contact" style={{ minHeight: 44, padding: "0 18px", fontSize: 14 }}>
          Démarrer un projet
        </a>
      </div>
    </header>
  );
}
