import Image from "next/image";
import { site } from "@/lib/site";

/** Qui est derrière : le personnage de la DA (fond noir posé en mode « écran ») et le fondateur. */
export function Derriere() {
  return (
    <section id="equipe" className="derriere">
      <div className="c">
        <div className="derriere-grille">
          <figure>
            <Image
              src="/img/personnage.webp"
              alt="Illustration de Mouhamed Lamotte, fondateur de nexcom, avec des annotations de construction sur ses vêtements"
              width={900}
              height={1125}
              sizes="(min-width: 820px) 440px, 90vw"
            />
          </figure>
          <div className="derriere-texte">
            <p className="ey">Qui est derrière</p>
            <h2 className="titre-sec">
              Un développeur qui décroche, <em className="s">pas un standard.</em>
            </h2>
            <p className="txt">
              nexcom, c&apos;est {site.legal.owner}, développeur à Dakar. C&apos;est lui qui prend ton premier appel,
              dessine ton produit et le code, comme Salonify et NexImmo.
            </p>
            <div className="sign">
              <b>{site.legal.owner}</b>
              <span>Fondateur · développeur</span>
              <a className="lien-p" href={site.github} target="_blank" rel="noopener">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
