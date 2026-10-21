import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import type { Tier } from '@/data/types';
import { useApparition } from '@/hooks/useApparition';
import { CarteProjet } from '@/components/sections/projet';
import { cn } from '@/lib/utils';

type Filtre = Tier | 'all';

const FILTRES: Array<{ valeur: Filtre; cle: string }> = [
  { valeur: 'all', cle: 'projects.filter.all' },
  { valeur: 'featured', cle: 'projects.filter.featured' },
  { valeur: 'delivered', cle: 'projects.filter.delivered' },
  { valeur: 'planned', cle: 'projects.filter.planned' },
];

/**
 * Galerie de tous les projets, a l'adresse `#/projets`.
 *
 * Le routage se fait par ancre et non par chemin : GitHub Pages ne sait pas
 * servir une route profonde sans `404.html`, et une adresse comme
 * `/portfolio/projets` renverrait une vraie page introuvable. L'ancre ne
 * quitte jamais `index.html`, donc aucune configuration serveur n'est
 * necessaire et aucune page introuvable n'est possible.
 *
 * Chaque projet y recoit son visuel, son statut et sa pile. Les filtres
 * reprennent les trois niveaux des donnees, plus « tous ».
 */
export function Galerie() {
  const { t } = useLanguage();
  const [filtre, setFiltre] = useState<Filtre>('all');
  const entree = useApparition<HTMLDivElement>();

  const visibles =
    filtre === 'all' ? projects : projects.filter((p) => p.tier === filtre);

  return (
    <main className="section pt-[clamp(5.5rem,8vw,7rem)]">
      <div
        ref={entree.ref}
        className={cn(
          'conteneur apparition',
          entree.visible && 'apparition-visible'
        )}
      >
        <a href="#/" className="lien inline-flex items-center gap-1.5 text-sm">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          {t('projects.gallery.back')}
        </a>

        <h1 className="mt-5">{t('projects.gallery.title')}</h1>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="donnee mr-1 text-muted-foreground">
            {t('projects.filter')}
          </span>
          {FILTRES.map(({ valeur, cle }) => (
            <button
              key={valeur}
              type="button"
              onClick={() => setFiltre(valeur)}
              aria-pressed={filtre === valeur}
              className={filtre === valeur ? 'filtre filtre-actif' : 'filtre'}
            >
              {t(cle)}
            </button>
          ))}
        </div>

        {visibles.length === 0 ? (
          <p className="mt-10 text-muted-foreground">{t('projects.noProjects')}</p>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visibles.map((project) => (
              <CarteProjet key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
