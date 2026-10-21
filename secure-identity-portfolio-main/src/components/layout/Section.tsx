import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Enveloppe commune des sections : un filet d'un pixel en separateur, jamais
 * une bande pleine largeur, le rythme vertical fluide et le conteneur unique.
 *
 * C'est le seul endroit de la page ou une animation est declenchee : une
 * apparition en opacite de deux cents millisecondes, au moment ou la section
 * entre reellement dans le champ. Les treize animations precedentes se
 * jouaient au montage du composant, donc les cartes du bas avaient fini
 * d'apparaitre avant d'etre vues. Aucun delai en cascade, aucune boucle, et
 * l'observation s'arrete des que la section est apparue.
 *
 * Si l'observation n'est pas disponible, la section est visible d'emblee :
 * aucun contenu ne peut rester invisible.
 */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        if (entrees.some((entree) => entree.isIntersecting)) {
          setVisible(true);
          observateur.disconnect();
        }
      },
      { threshold: 0.02 }
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'section filet apparition',
        visible && 'apparition-visible',
        className
      )}
    >
      <div className="conteneur">{children}</div>
    </section>
  );
}
