import { engagements, etapes } from "@/lib/content";

const Suivant = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4l5 5-5 5M10 4l5 5-5 5" />
  </svg>
);

/** La méthode : quatre étapes sur une ligne reliée par des « >> », puis les engagements. */
export function Methode() {
  return (
    <section id="methode" className="methode">
      <div className="c">
        <div className="tete-sec">
          <div>
            <p className="ey">La méthode</p>
            <h2 className="titre-sec">
              De l&apos;idée à la mise en ligne, <em className="s">sans surprise.</em>
            </h2>
          </div>
          <p className="intro">Quatre étapes, toujours dans cet ordre. Tu sais à chaque moment où on en est.</p>
        </div>
        <ol className="etapes">
          {etapes.map((e, i) => (
            <li key={e.titre}>
              <div className="rail">
                <span className="pt" />
                <span className="tr" />
                {i < etapes.length - 1 && <Suivant />}
              </div>
              <span className="quand">{e.quand}</span>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </li>
          ))}
        </ol>
        <div className="engagements">
          {engagements.map((e) => (
            <div key={e.titre}>
              <b>{e.titre}</b>
              <span>{e.texte}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
