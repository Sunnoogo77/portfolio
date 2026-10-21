import { useEffect, useId, useState } from 'react';
import { useGrandEcran } from './useGrandEcran';

export interface Repli {
  ouvert: boolean;
  basculer: () => void;
  /** Identifiant du bloc commande, a passer au Depliable et au bouton. */
  id: string;
}

/**
 * Etat d'un bloc replie dont l'ouverture par defaut depend de la taille de
 * l'ecran : replie sur telephone, ou trop d'informations a la fois obligent a
 * beaucoup defiler pour atteindre le bas de la page, deplie sur grand ecran,
 * ou le defilement coute moins.
 *
 * Des que le visiteur a touche le bouton, son choix l'emporte : un changement
 * de taille de fenetre ne vient plus refermer sous ses yeux ce qu'il vient
 * d'ouvrir.
 */
export function useRepli(): Repli {
  const grandEcran = useGrandEcran();
  const id = useId();
  const [choisi, setChoisi] = useState(false);
  const [ouvert, setOuvert] = useState(grandEcran);

  useEffect(() => {
    if (!choisi) setOuvert(grandEcran);
  }, [grandEcran, choisi]);

  return {
    ouvert,
    id,
    basculer: () => {
      setChoisi(true);
      setOuvert((o) => !o);
    },
  };
}
