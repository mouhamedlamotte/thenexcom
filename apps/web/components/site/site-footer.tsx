import { Logo } from "@repo/ui/components/brand/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <a href="#top" aria-label="The Nexcom, retour en haut" className="text-[20px]">
            <Logo markClassName="size-10" />
          </a>
          <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-[15px] text-fog hover:text-paper">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 text-[14px] text-ash md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · Solutions informatiques · {site.city}
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>{" "}
            ·{" "}
            <a href={site.phoneHref} className="hover:text-paper">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
