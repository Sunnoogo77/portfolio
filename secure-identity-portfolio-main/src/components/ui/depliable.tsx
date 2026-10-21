import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Duree de l'ouverture, alignee sur la valeur de .depliable dans index.css. */
const DUREE = 240;

/**
 * Bloc replie, ouvert a la demande.
 *
 * Trois exigences tenues en meme temps :
 *
 * - l'ouverture se fait en hauteur, en douceur, jamais par un saut. La
 *   technique est la grille a une ligne qui passe de `0fr` a `1fr` : aucune
 *   hauteur n'est mesuree en JavaScript, donc aucun calcul ne peut se tromper
 *   quand le contenu change de taille ;
 * - le contenu replie n'est pas atteignable au clavier. Il n'est tout
 *   simplement pas dans le document : il y entre a l'ouverture et en sort
 *   apres la fermeture. L'enveloppe, elle, reste toujours presente, parce
 *   qu'elle est la cible du `aria-controls` du bouton ;
 * - sous `prefers-reduced-motion`, la regle globale de index.css ramene la
 *   transition a 0,01 ms : l'ouverture devient instantanee.
 */
export function Depliable({
  id,
  ouvert,
  className,
  children,
}: {
  id: string;
  ouvert: boolean;
  className?: string;
  children: ReactNode;
}) {
  // Le contenu est monte avant d'etre deploye, sinon il n'y a rien a animer.
  const [monte, setMonte] = useState(ouvert);
  const [deploye, setDeploye] = useState(ouvert);

  useEffect(() => {
    if (ouvert) {
      setMonte(true);
      const image = requestAnimationFrame(() => setDeploye(true));
      return () => cancelAnimationFrame(image);
    }
    setDeploye(false);
    const minuterie = setTimeout(() => setMonte(false), DUREE);
    return () => clearTimeout(minuterie);
  }, [ouvert]);

  return (
    <div
      id={id}
      // Le bloc est atteignable au clavier une fois ouvert : le bouton y
      // envoie le focus, et la tabulation continue ensuite dans son contenu.
      tabIndex={ouvert ? -1 : undefined}
      className={cn('depliable', deploye && 'depliable-ouvert', className)}
      aria-hidden={ouvert ? undefined : true}
    >
      <div className="depliable-contenu">{monte ? children : null}</div>
    </div>
  );
}

/**
 * Bouton qui commande un `Depliable`. Il porte toujours `aria-expanded` et
 * `aria-controls` : c'est ce couple qui fait annoncer l'etat du bloc, et son
 * absence est la premiere facon de rendre un depliage inutilisable au clavier.
 *
 * Le bloc commande precede le bouton dans le document, parce que le bouton se
 * lit sous le contenu qu'il prolonge. La tabulation vers l'avant passerait
 * donc a cote de ce qui vient de s'ouvrir. A l'ouverture au clavier, et
 * seulement au clavier, le focus est donc pose sur le bloc : la tabulation
 * entre ensuite naturellement dans son contenu. A la souris, rien ne bouge,
 * un deplacement de focus non demande etant lui-meme une gene.
 */
export function BoutonDeplier({
  cible,
  ouvert,
  onBascule,
  libelle,
  libelleFermer,
  className,
}: {
  cible: string;
  ouvert: boolean;
  onBascule: () => void;
  libelle: string;
  libelleFermer: string;
  className?: string;
}) {
  const surClic = (e: MouseEvent<HTMLButtonElement>) => {
    // `detail` vaut zero quand l'activation vient d'Entree ou d'Espace.
    const auClavier = e.detail === 0;
    onBascule();
    if (!ouvert && auClavier) {
      requestAnimationFrame(() => {
        document.getElementById(cible)?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <button
      type="button"
      onClick={surClic}
      aria-expanded={ouvert}
      aria-controls={cible}
      className={cn('bouton-deplier', className)}
    >
      {ouvert ? libelleFermer : libelle}
      <ChevronDown
        className={cn('h-3.5 w-3.5 chevron', ouvert && 'chevron-ouvert')}
        aria-hidden="true"
      />
    </button>
  );
}
