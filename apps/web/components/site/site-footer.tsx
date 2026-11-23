import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t-[1.5px] border-dashed border-ligne pt-7 pb-10 text-[13px] text-ardoise">
      <div className="flex flex-wrap justify-between gap-4">
        <p>THE NEXCOM · agence de développement · {site.city}</p>
        <p className="flex flex-wrap gap-5">
          <a href={site.phoneHref} className="text-craie hover:text-corail">
            {site.phone}
          </a>
          <a href={site.github} target="_blank" rel="noopener" className="text-craie hover:text-corail">
            GitHub
          </a>
        </p>
      </div>
      <p>
        {site.legal.form} · {site.legal.owner} · RCCM {site.legal.rccm} · NINEA {site.legal.ninea}
      </p>
    </footer>
  );
}
