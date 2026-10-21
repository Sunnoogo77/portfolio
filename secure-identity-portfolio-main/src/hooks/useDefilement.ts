import { useEffect, useRef, useState } from 'react';

export interface EtatDefilement {
  /** Vrai des que la page a quitte le haut : la barre peut se retracter. */
  compacte: boolean;
  /** Vrai quand on descend franchement : la barre s'efface. */
  cachee: boolean;
}

/** En dessous de ce seuil, la barre reste toujours deployee et visible. */
const SEUIL_COMPACT = 72;
/** La barre ne s'efface pas avant d'avoir laisse passer le bandeau d'accueil. */
const SEUIL_CACHE = 180;
/** Un micro-defilement ne doit pas faire clignoter la barre. */
const HYSTERESE = 8;

/**
 * Position et sens du defilement, pour l'ile flottante.
 *
 * `actif` a false fige l'etat a « deployee et visible » : c'est le cas sous
 * `prefers-reduced-motion`, ou la barre ne doit plus bouger du tout.
 */
export function useDefilement(actif: boolean): EtatDefilement {
  const [etat, setEtat] = useState<EtatDefilement>({
    compacte: false,
    cachee: false,
  });
  const dernier = useRef(0);

  useEffect(() => {
    if (!actif) {
      setEtat({ compacte: false, cachee: false });
      return;
    }

    dernier.current = window.scrollY;
    let premier = true;

    const calculer = () => {
      const y = window.scrollY;
      const delta = y - dernier.current;
      // Au premier appel il n'y a pas encore de sens de defilement : seule la
      // position compte, sans quoi une page ouverte deja defilee garderait une
      // barre deployee par-dessus le contenu.
      if (!premier && Math.abs(delta) < HYSTERESE) return;
      dernier.current = y;
      premier = false;

      setEtat({
        compacte: y > SEUIL_COMPACT,
        cachee: delta > 0 && y > SEUIL_CACHE,
      });
    };

    calculer();
    window.addEventListener('scroll', calculer, { passive: true });
    return () => window.removeEventListener('scroll', calculer);
  }, [actif]);

  return etat;
}
