import type { ReactNode } from 'react';
import { useApparition } from '@/hooks/useApparition';
import { cn } from '@/lib/utils';

/**
 * Enveloppe commune des sections : un filet d'un pixel en separateur, jamais
 * une bande pleine largeur, le rythme vertical fluide et le conteneur unique.
 *
 * L'apparition est portee par useApparition : deux cents millisecondes
 * d'opacite et six pixels de translation, au moment ou la section entre
 * reellement dans le champ. Aucun delai, aucune cascade, aucune boucle, et
 * tout s'arrete sous prefers-reduced-motion.
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
  const { ref, visible } = useApparition<HTMLElement>();

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
