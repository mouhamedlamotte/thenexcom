import { sections } from "@/lib/site";

/** Rail de navigation fixe, à gauche. La section visible passe en corail (piloté par SceneDriver). */
export function Rail() {
  return (
    <nav
      aria-label="Sections"
      className="fixed top-1/2 left-5 z-10 hidden -translate-y-1/2 flex-col items-start min-[900px]:flex"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-rail={s.id}
          className="group flex items-center gap-2 py-[7px] text-ardoise hover:text-craie aria-[current=true]:text-corail"
        >
          <span className="w-3 border-t-2 border-current transition-[width] duration-300 group-aria-[current=true]:w-7 motion-reduce:transition-none" />
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
