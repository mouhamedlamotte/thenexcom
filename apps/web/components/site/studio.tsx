import { faits } from "@/lib/content";

/** Le studio : une phrase, puis trois faits vrais. */
export function Studio() {
  return (
    <section id="studio" className="studio">
      <div className="c">
        <div className="studio-grille">
          <div>
            <p className="ey">Le studio</p>
            <h2 className="titre-sec">
              On construit des outils que les entreprises d&apos;ici utilisent <em className="s">tous les jours.</em>
            </h2>
          </div>
          <p className="studio-txt">
            Pas des sites qui dorment. Des caisses de salon, des loyers suivis, des paiements Wave qui tombent au bon
            endroit. On conçoit, on code, on met en ligne, et on reste joignable après.
          </p>
        </div>
        <div className="faits">
          {faits.map((f) => (
            <div key={f.valeur}>
              <b>{f.valeur}</b>
              <span>{f.texte}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
