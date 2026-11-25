"use client";

import { useEffect, useRef } from "react";
import type * as Three from "three";

/*
 * Le décor du héros, en deux couches :
 *  - une toile 2D : fond indigo, grille en perspective qui avance vers le x, reflet corail au sol, grain ;
 *  - une toile WebGL (three.js, chargé à la demande) : les deux chevrons du logo extrudés en 3D.
 * Le « next » : toutes les 7 s (ou au clic, ou en visant le x), le chevron de droite se retourne,
 * « >< » devient « >> », fonce vers l'avant avec une traînée, la grille accélère, puis il revient en x.
 * Le x est calé sur la grille de la page : bord droit = bord droit du contenu, centré sur le texte.
 * prefers-reduced-motion : le x est posé, rien ne bouge seul. Sans WebGL : la grille seule.
 */

const POLY = [
  [220, 220],
  [343.2, 220],
  [516.8, 500],
  [343.2, 780],
  [220, 780],
  [393.6, 500],
] as const;

const borne = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lisse = (a: number, b: number, k: number) => a + (b - a) * k;
const sortieExpo = (x: number) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
const sortieCube = (x: number) => 1 - Math.pow(1 - x, 3);
const dansSortie = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
/** Forme du « dash » : part vite vers l'avant, puis revient en souplesse. */
const course = (d: number) => {
  d = borne(d);
  return d < 0.32 ? sortieCube(d / 0.32) : 1 - dansSortie((d - 0.32) / 0.68);
};

export function HeroScene() {
  const fondRef = useRef<HTMLCanvasElement>(null);
  const xRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const indiceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fond = fondRef.current;
    const canvasX = xRef.current;
    const grain = grainRef.current;
    const indice = indiceRef.current;
    const heros = fond?.closest("section");
    const fx = fond?.getContext("2d");
    if (!fond || !canvasX || !grain || !indice || !heros || !fx) return;

    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let arrete = false;

    /* ---------- Grain (une tuile de bruit, générée une fois) ---------- */
    {
      const g = document.createElement("canvas");
      g.width = g.height = 160;
      const gx = g.getContext("2d");
      if (gx) {
        const im = gx.createImageData(160, 160);
        for (let i = 0; i < im.data.length; i += 4) {
          const v = Math.random() * 255;
          im.data[i] = im.data[i + 1] = im.data[i + 2] = v;
          im.data[i + 3] = 255;
        }
        gx.putImageData(im, 0, 0);
        grain.style.backgroundImage = `url(${g.toDataURL()})`;
      }
    }

    /* ---------- Fond : grille en perspective ---------- */
    let fw = 0;
    let fh = 0;
    let avance = 0;
    let elan = 0;
    const pos = { x: 0, y: 0, r: 160, dx: 0 };

    const tailleFond = () => {
      const r = heros.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      fw = r.width;
      fh = r.height;
      fond.width = Math.round(fw * dpr);
      fond.height = Math.round(fh * dpr);
      fx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const halo = (x: number, y: number, rad: number, c: string, a: number) => {
      const g = fx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(${c},${a})`);
      g.addColorStop(1, `rgba(${c},0)`);
      fx.fillStyle = g;
      fx.fillRect(0, 0, fw, fh);
    };
    const dessinerFond = (dt: number) => {
      if (!reduit) {
        avance = (avance + dt * (0.00011 + elan * 0.0016)) % 1;
        elan *= 0.955;
      }
      fx.fillStyle = "#121A4A";
      fx.fillRect(0, 0, fw, fh);
      halo(pos.x, pos.y, Math.max(fw, fh) * 0.5, "70,92,210", 0.38);
      const hor = Math.min(fh * 0.9, pos.y + pos.r * 1.05);
      const vx = pos.x;
      fx.lineWidth = 1;
      for (let i = -26; i <= 26; i++) {
        const xb = vx + i * fw * 0.06;
        const g = fx.createLinearGradient(0, hor, 0, fh);
        g.addColorStop(0, "rgba(170,182,235,0)");
        g.addColorStop(1, "rgba(170,182,235,.2)");
        fx.strokeStyle = g;
        fx.beginPath();
        fx.moveTo(vx, hor);
        fx.lineTo(xb * 3 - vx * 2, fh + 200);
        fx.stroke();
      }
      for (let k = 0; k < 14; k++) {
        const z = (k + 1 - avance) / 14;
        const y = hor + (fh - hor) * Math.pow(z, 2.2);
        fx.strokeStyle = `rgba(170,182,235,${0.03 + 0.18 * z})`;
        fx.beginPath();
        fx.moveTo(0, y);
        fx.lineTo(fw, y);
        fx.stroke();
      }
      fx.save();
      fx.filter = "blur(18px)";
      fx.fillStyle = `rgba(242,96,74,${0.26 + Math.min(0.25, elan * 0.2)})`;
      fx.beginPath();
      fx.ellipse(pos.x + pos.dx, hor, pos.r * 1.05, pos.r * 0.12, 0, 0, Math.PI * 2);
      fx.fill();
      fx.restore();
      const v = fx.createRadialGradient(fw * 0.5, fh * 0.45, Math.min(fw, fh) * 0.35, fw * 0.5, fh * 0.5, Math.max(fw, fh) * 0.8);
      v.addColorStop(0, "rgba(6,9,32,0)");
      v.addColorStop(1, "rgba(6,9,32,.55)");
      fx.fillStyle = v;
      fx.fillRect(0, 0, fw, fh);
    };

    /* ---------- Position du x, calée sur le texte ---------- */
    const etat = { x: 0, y: 0, e: 0.6 };
    let monde = 0.01;
    const bloc = heros.querySelector<HTMLElement>(".heros-contenu");
    const ligne2 = heros.querySelectorAll<HTMLElement>("#heros-titre .ligne > span")[1];
    const sous = heros.querySelector<HTMLElement>("#heros-sous");
    const actions = heros.querySelector<HTMLElement>("#heros-actions");
    const placer = () => {
      if (!bloc || !ligne2 || !sous || !actions) return;
      const r = heros.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      monde = (2 * Math.tan((15 * Math.PI) / 180) * 14) / h; /* unités 3D par pixel au plan z = 0 */
      const cs = getComputedStyle(bloc);
      const droite = bloc.getBoundingClientRect().right - parseFloat(cs.paddingRight) - r.left;
      const l2 = ligne2.getBoundingClientRect();
      const so = sous.getBoundingClientRect();
      const ac = actions.getBoundingClientRect();
      const finTexte = Math.max(l2.right, so.right, ac.right) - r.left;
      const haut = l2.top - r.top;
      const bas = ac.bottom - r.top;
      if (w > 900) {
        const place = droite - finTexte - 64;
        etat.e = Math.max(0.42, Math.min(0.95, (place * monde) / 4.3));
        etat.x = (droite - w / 2) * monde - 2.15 * etat.e;
        etat.y = -((haut + bas) / 2 - h / 2) * monde;
      } else {
        /* téléphone : petit x centré sous les boutons */
        etat.e = 0.34;
        etat.x = 0;
        const centre = bas + 48 + (2.15 * etat.e) / monde;
        etat.y = -(centre - h / 2) * monde;
      }
      pos.x = w / 2 + etat.x / monde;
      pos.y = h / 2 - etat.y / monde;
      pos.r = (2.15 * etat.e) / monde;
      indice.style.left = `${pos.x}px`;
      indice.style.top = `${pos.y + pos.r * 1.18}px`;
    };

    /* ---------- La 3D (chargée à la demande) ---------- */
    type Scene3D = {
      THREE: typeof Three;
      renderer: Three.WebGLRenderer;
      scene: Three.Scene;
      camera: Three.PerspectiveCamera;
      logo: Three.Group;
      cg: Three.Mesh;
      cd: Three.Mesh;
      cle: Three.DirectionalLight;
      suiveuse: Three.PointLight;
      fantomes: { groupe: Three.Group; a: Three.Mesh; b: Three.Mesh; m: Three.MeshPhysicalMaterial }[];
      reposG: number;
      reposD: number;
    };
    let s3: Scene3D | null = null;

    const taille = () => {
      tailleFond();
      if (s3) {
        const r = heros.getBoundingClientRect();
        s3.renderer.setSize(r.width, r.height, false);
        s3.camera.aspect = r.width / r.height;
        s3.camera.updateProjectionMatrix();
      }
      placer();
    };

    const monter3D = async () => {
      let THREE: typeof Three;
      try {
        THREE = await import("three");
      } catch {
        return;
      }
      if (arrete) return;
      let renderer: Three.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas: canvasX, antialias: true, alpha: true });
      } catch {
        canvasX.style.display = "none";
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.NoToneMapping;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(0, 0, 14);

      /* studio : des boîtes à lumière pour les reflets du vernis */
      const pmrem = new THREE.PMREMGenerator(renderer);
      const studio = new THREE.Scene();
      studio.background = new THREE.Color(0x121a4a).convertSRGBToLinear();
      const boites: [number, number, number, number, number, number, number][] = [
        [9, 2.2, -3, 6, 4, 0xffffff, 1.5],
        [2, 8, 7, 0.5, 2, 0xf2604a, 0.7],
        [3, 7, 6, 0, -5, 0xa9b8ff, 1.1],
        [10, 1.2, 0, -6, 1, 0x1f2a6b, 1.1],
        [3, 1, -4, 4, -5, 0xffe7a3, 0.6],
      ];
      for (const [w, h, x, y, z, c, f] of boites) {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, h),
          new THREE.MeshBasicMaterial({ color: new THREE.Color(c).convertSRGBToLinear().multiplyScalar(f), side: THREE.DoubleSide }),
        );
        m.position.set(x, y, z);
        m.lookAt(0, 0, 0);
        studio.add(m);
      }
      scene.environment = pmrem.fromScene(studio, 0.03).texture;
      const cle = new THREE.DirectionalLight(0xfff1ea, 0.8);
      cle.position.set(-3, 5, 6);
      scene.add(cle);
      const contre = new THREE.DirectionalLight(0xa9b8ff, 0.65);
      contre.position.set(5, 1, -6);
      scene.add(contre);
      scene.add(new THREE.AmbientLight(0xf2604a, 0.16));
      const suiveuse = new THREE.PointLight(0xffe7d9, 0.45, 22, 2);
      suiveuse.position.set(0, 0, 5);
      scene.add(suiveuse);

      /* les chevrons, repris tels quels du logo : 560 unités → 4 unités 3D */
      const S = 1 / 140;
      const matiere = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xf2604a).convertSRGBToLinear(),
        emissive: new THREE.Color(0xf2604a).convertSRGBToLinear().multiplyScalar(0.14),
        roughness: 0.3,
        metalness: 0,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        envMapIntensity: 0.7,
      });
      const geometrie = (miroir: boolean) => {
        const pts = POLY.map(([px, py]) => {
          const x = (px - 500) * S;
          return [miroir ? -x : x, -(py - 500) * S] as const;
        });
        const cx = pts.reduce((acc, p) => acc + p[0], 0) / pts.length;
        const f = new THREE.Shape();
        pts.forEach((p, i) => (i ? f.lineTo(p[0] - cx, p[1]) : f.moveTo(p[0] - cx, p[1])));
        f.closePath();
        const geo = new THREE.ExtrudeGeometry(f, {
          depth: 0.6,
          bevelEnabled: true,
          bevelThickness: 0.08,
          bevelSize: 0.06,
          bevelSegments: 8,
          curveSegments: 1,
        });
        geo.translate(0, 0, -0.3);
        return { geo, cx };
      };
      const gG = geometrie(false);
      const gD = geometrie(true);
      const cg = new THREE.Mesh(gG.geo, matiere);
      const cd = new THREE.Mesh(gD.geo, matiere);
      const logo = new THREE.Group();
      logo.add(cg, cd);
      scene.add(logo);
      /* traînée : trois copies translucides qui suivent le x quand il fonce */
      const fantomes: Scene3D["fantomes"] = [];
      for (let k = 1; k <= 3; k++) {
        const m = matiere.clone();
        m.transparent = true;
        m.opacity = 0;
        m.depthWrite = false;
        const groupe = new THREE.Group();
        const a = new THREE.Mesh(gG.geo, m);
        const b = new THREE.Mesh(gD.geo, m);
        groupe.add(a, b);
        groupe.visible = false;
        scene.add(groupe);
        fantomes.push({ groupe, a, b, m });
      }
      s3 = { THREE, renderer, scene, camera, logo, cg, cd, cle, suiveuse, fantomes, reposG: gG.cx, reposD: gD.cx };
      taille();
    };

    /* ---------- Le « next » : états et interactions ---------- */
    const souris = { x: 0, y: 0, cx: 0, cy: 0 };
    let vise = false;
    let u = 0;
    let cibleU = 0;
    let dashT = -1;
    let auto = 2.4;
    let claqueT = 0.78;
    let dejaRetourne = false;
    const debut = performance.now() + 250;
    const temps = () => (performance.now() - debut) / 1000;
    const DUREE = 1.25;
    const AMPL = 1.5;
    const lancer = (t: number) => {
      if (dashT >= 0 || reduit) return;
      cibleU = 1;
      dashT = t + (u > 0.85 ? 0 : 0.55);
    };

    const surMouvement = (e: PointerEvent) => {
      souris.cx = (e.clientX / window.innerWidth) * 2 - 1;
      souris.cy = -((e.clientY / window.innerHeight) * 2 - 1);
      const r = heros.getBoundingClientRect();
      const dx = e.clientX - r.left - pos.x;
      const dy = e.clientY - r.top - pos.y;
      const cible = e.target instanceof Element ? e.target.closest("a,button,h1,p") : null;
      const v = !!s3 && e.pointerType === "mouse" && !cible && Math.hypot(dx, dy) < pos.r * 1.15;
      if (v !== vise) {
        vise = v;
        heros.classList.toggle("vise", vise);
      }
    };
    const surClic = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest("a,button")) return;
      const r = heros.getBoundingClientRect();
      if (Math.hypot(e.clientX - r.left - pos.x, e.clientY - r.top - pos.y) < pos.r * 1.2) lancer(temps());
    };

    let raf = 0;
    let avant = 0;
    let visible = true;
    const image = (now: number) => {
      raf = 0;
      if (!visible || document.hidden || arrete) return;
      const t = temps();
      const dt = avant ? Math.min(64, now - avant) : 16;
      avant = now;

      if (s3) {
        const { logo, cg, cd, cle, suiveuse, fantomes, renderer, scene, camera } = s3;
        souris.x = lisse(souris.x, souris.cx, reduit ? 1 : 0.06);
        souris.y = lisse(souris.y, souris.cy, reduit ? 1 : 0.06);
        if (!reduit && !vise && t > auto && dashT < 0) {
          lancer(t);
          auto = t + 7;
        }
        if (vise && dashT < 0) cibleU = 1;
        let d = dashT >= 0 ? (t - dashT) / DUREE : -1;
        if (d >= 1) {
          dashT = -1;
          d = -1;
        }
        if (!vise && dashT < 0) cibleU = 0;
        const uAvant = u;
        u = reduit ? 0 : lisse(u, cibleU, 0.11);
        if (uAvant > 0.5 && u <= 0.5 && dejaRetourne) claqueT = t;
        if (u > 0.9) dejaRetourne = true;

        const a = reduit ? 1 : sortieExpo(borne(t / 1.2));
        const kc = borne((t - claqueT) / 0.5);
        let rebond = 0;
        let flash = 0;
        if (!reduit && kc > 0 && kc < 1) {
          rebond = Math.sin(kc * Math.PI) * (1 - kc) * 0.08;
          flash = Math.sin(kc * Math.PI);
        }
        const c = d >= 0 ? course(d) : 0;
        const vitesse = d >= 0 && d < 0.32 ? 1 - d / 0.32 : 0;
        if (d >= 0 && d < 0.05) elan = Math.max(elan, 1.6);

        cg.position.x = s3.reposG - (1 - a) * 9 - 0.25 * u;
        cd.position.x = s3.reposD + (1 - a) * 9 - 0.5 * u;
        cg.position.z = cd.position.z = (1 - a) * 3;
        cg.rotation.y = -(1 - a) * 2.6;
        cd.rotation.y = (1 - a) * 2.6 + Math.PI * u;

        const dx = AMPL * c * etat.e;
        logo.position.set(etat.x + dx, etat.y + (reduit ? 0 : Math.sin(t * 0.9) * 0.06 * etat.e), 0);
        logo.rotation.y = lisse(logo.rotation.y, -0.3 + souris.x * 0.35, 0.07);
        logo.rotation.x = lisse(logo.rotation.x, -souris.y * 0.2, 0.07);
        const e = etat.e * (1 + rebond);
        logo.scale.set(e * (1 + vitesse * 0.14), e * (1 - vitesse * 0.05), e);

        fantomes.forEach((f, i) => {
          const k = i + 1;
          const dk = d - k * 0.05;
          const on = d >= 0 && d < 0.62 && dk > 0;
          f.groupe.visible = on;
          if (!on) return;
          f.a.position.copy(cg.position);
          f.b.position.copy(cd.position);
          f.a.rotation.copy(cg.rotation);
          f.b.rotation.copy(cd.rotation);
          f.groupe.position.set(etat.x + AMPL * course(dk) * etat.e, logo.position.y, -0.2 * k);
          f.groupe.rotation.copy(logo.rotation);
          f.groupe.scale.set(e, e, e);
          f.m.opacity = (0.34 / k) * (1 - d / 0.62);
        });

        suiveuse.position.set(souris.x * 6, souris.y * 3.5, 5);
        suiveuse.intensity = 0.45 + flash * 0.9 + vitesse * 0.4;
        cle.intensity = 0.8 + flash * 0.5;
        pos.dx = dx / monde;
        renderer.render(scene, camera);
      }
      dessinerFond(dt);
      raf = requestAnimationFrame(image);
    };
    const relancer = () => {
      if (!raf) raf = requestAnimationFrame(image);
    };

    const obs = new IntersectionObserver(([entree]) => {
      visible = !!entree?.isIntersecting;
      if (visible) relancer();
    });
    obs.observe(heros);
    window.addEventListener("resize", taille);
    window.addEventListener("pointermove", surMouvement, { passive: true });
    heros.addEventListener("click", surClic);
    document.addEventListener("visibilitychange", relancer);
    document.fonts?.ready.then(taille);
    const recalage = window.setTimeout(taille, 1500); /* une fois l'entrée du titre terminée */
    taille();
    relancer();
    void monter3D().then(relancer);

    return () => {
      arrete = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(recalage);
      obs.disconnect();
      window.removeEventListener("resize", taille);
      window.removeEventListener("pointermove", surMouvement);
      heros.removeEventListener("click", surClic);
      document.removeEventListener("visibilitychange", relancer);
      s3?.renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={fondRef} className="heros-fond" aria-hidden />
      <div ref={grainRef} className="heros-grain" aria-hidden />
      <canvas ref={xRef} className="heros-x" aria-hidden />
      <span ref={indiceRef} className="heros-indice" aria-hidden>
        Clique : next
      </span>
    </>
  );
}
