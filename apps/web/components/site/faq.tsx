import { faq } from "@/lib/content";

/** FAQ en <details> natifs : lisible sans JavaScript et par les moteurs de recherche. */
export function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="c faq-grille">
        <div>
          <p className="ey">Questions</p>
          <h2 className="titre-sec">
            Ce qu&apos;on nous demande <em className="s">souvent.</em>
          </h2>
        </div>
        <div>
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </span>
              </summary>
              <p>{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
