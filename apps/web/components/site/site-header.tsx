import { Logo } from "@repo/ui/components/brand/logo";
import { ButtonLink } from "@repo/ui/components/ui/button";
import { nav, whatsappQuote } from "@/lib/site";

/** En-tête collant. Le menu mobile utilise <details> : aucun JavaScript nécessaire. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" aria-label="The Nexcom, retour en haut" className="text-[17px]">
          <Logo markClassName="size-8" />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] text-body hover:text-ink">
              {item.label}
            </a>
          ))}
          <ButtonLink href={whatsappQuote} target="_blank" rel="noopener" className="min-h-11 px-4">
            Parler d'un projet
          </ButtonLink>
        </nav>

        <details className="group relative md:hidden">
          <summary
            aria-label="Ouvrir le menu"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-ink/15 [&::-webkit-details-marker]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
            </svg>
          </summary>
          <nav
            aria-label="Navigation mobile"
            className="absolute right-0 top-14 flex w-64 flex-col rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/10"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-[15px] hover:bg-paper">
                {item.label}
              </a>
            ))}
            <ButtonLink href={whatsappQuote} target="_blank" rel="noopener" className="mt-2">
              Parler d'un projet
            </ButtonLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
