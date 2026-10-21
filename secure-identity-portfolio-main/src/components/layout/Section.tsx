import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Enveloppe commune des sections : un filet d'un pixel en separateur, jamais
 * une bande pleine largeur, le rythme vertical fluide et le conteneur unique.
 *
 * C'est aussi le seul endroit ou une animation est declenchee, pour qu'il
 * n'en existe qu'une dans toute la page.
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
  return (
    <section id={id} className={cn('section filet', className)}>
      <div className="conteneur">{children}</div>
    </section>
  );
}
