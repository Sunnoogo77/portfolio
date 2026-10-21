import { getAssetPath } from '@/lib/assets';
import { iconesDeLaPile } from '@/lib/tech';
import { visuelDeProjet } from '@/lib/visuels';
import { cn } from '@/lib/utils';

/**
 * Visuel d'un projet.
 *
 * Trois cas, dans cet ordre :
 *
 * 1. le projet a une image propre : elle est servie telle quelle ;
 * 2. sinon, son visuel est compose a partir des icones de sa pile technique.
 *    Elles sont posees en masque et remplies de la couleur courante, ce qui
 *    les rend lisibles sur les deux themes sans dependre de la couleur du
 *    fichier, toutes etant monochromes ;
 * 3. si aucune technologie de la pile n'a d'icone, les premiers noms de la
 *    pile sont ecrits en toutes lettres. Jamais un cadre vide.
 *
 * Le visuel est decoratif : la pile est de toute facon listee en texte juste
 * en dessous, donc il est masque aux lecteurs d'ecran.
 */
export function VisuelProjet({
  id,
  stack,
  format = 'carte',
  className,
}: {
  id: string;
  stack: string[];
  /** 'banniere' pour un projet mis en avant, 'carte' pour la grille. */
  format?: 'banniere' | 'carte';
  className?: string;
}) {
  const image = visuelDeProjet(id);
  const icones = iconesDeLaPile(stack, format === 'banniere' ? 5 : 4);

  const cadre = cn(
    'visuel',
    format === 'banniere' ? 'visuel-banniere' : 'visuel-carte',
    className
  );

  if (image) {
    return (
      <img
        src={getAssetPath(image)}
        alt=""
        loading="lazy"
        className={cn(cadre, 'object-cover')}
      />
    );
  }

  if (icones.length === 0) {
    const mots = stack.slice(0, 3);
    return (
      <div className={cadre} aria-hidden="true">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4">
          {mots.map((mot) => (
            <li
              key={mot}
              className="donnee uppercase tracking-[0.12em] text-muted-foreground"
            >
              {mot}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cadre} aria-hidden="true">
      <ul className="flex items-center justify-center gap-[clamp(1rem,3.5vw,2.25rem)] px-4">
        {icones.map((chemin) => (
          <li key={chemin}>
            <span
              className="icone-tech"
              style={{
                WebkitMaskImage: `url("${getAssetPath(chemin)}")`,
                maskImage: `url("${getAssetPath(chemin)}")`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
