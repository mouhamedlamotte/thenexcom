import { HeroScene } from "./hero-scene";

/**
 * Héros : le titre, le sous-titre collé dessous, les actions. À droite, le x du logo en 3D posé sur
 * une grille en perspective (HeroScene) : il se retourne en « >> » et fonce, c'est le « next ».
 * L'entrée du texte est en CSS (globals.css), le x et la grille en JavaScript.
 */
export function Hero() {
  return (
    <section id="accueil" className="heros">
      <HeroScene />
      <div className="c heros-contenu">
        <h1 className="titre" id="heros-titre">
          <span className="ligne">
            <span>
              On construit le <em className="s">next</em>
            </span>
          </span>
          <span className="ligne">
            <span style={{ "--k": 1 } as React.CSSProperties}>de ton entreprise.</span>
          </span>
        </h1>
        <p className="sous apparait" id="heros-sous" style={{ "--d": "780ms" } as React.CSSProperties}>
          Sites, apps et logiciels sur mesure, avec Wave et Orange Money intégrés. Conçus à Dakar pour faire tourner
          ton activité.
        </p>
        <div className="actions apparait" id="heros-actions" style={{ "--d": "920ms" } as React.CSSProperties}>
          <a className="btn btn-cor" href="#contact">
            Démarrer un projet
          </a>
          <a className="btn btn-verre" href="#expertises">
            Nos expertises
          </a>
        </div>
      </div>
    </section>
  );
}
