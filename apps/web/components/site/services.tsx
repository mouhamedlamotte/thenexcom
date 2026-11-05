import { services } from "@/lib/content";
import { SectionLabel } from "./section-label";
import { ServiceIcon } from "./service-icon";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-6">
          <SectionLabel index="02">Nos services</SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl">
            De l'idée à la mise en ligne, et après.
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const dark = i === services.length - 1;
            return (
              <li
                key={s.title}
                className={
                  dark
                    ? "flex flex-col gap-3 rounded-[20px] bg-ink p-7 text-paper"
                    : "flex flex-col gap-3 rounded-[20px] border border-line bg-white p-7"
                }
              >
                <ServiceIcon
                  name={s.icon}
                  className={dark ? "size-10 text-cobalt-soft" : "size-10 text-cobalt"}
                />
                <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.01em]">{s.title}</h3>
                <p
                  className={
                    dark ? "text-[16px] leading-relaxed text-fog" : "text-[16px] leading-relaxed text-body"
                  }
                >
                  {s.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
