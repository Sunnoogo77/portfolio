import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectsByTier } from '@/data/projects';
import { texte, type Project } from '@/data/types';
import { useRepli } from '@/hooks/useRepli';
import { Section } from '@/components/layout/Section';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';
import { ProjetEnAvant, CarteProjet } from './projet';

/**
 * Trois niveaux, et un seul d'entre eux occupe la premiere vue.
 *
 * - les projets mis en avant, en grand, chacun avec son visuel ;
 * - les travaux realises, qui se deplient sur place ;
 * - les projets en preparation, tout en bas, en liste sobre et sans lien.
 *
 * Les projets en preparation occupaient la premiere vue de la section ; ils
 * sont maintenant les derniers, et un projet mis en avant qui n'est encore
 * qu'envisage passe derriere ceux qui sont reellement livres ou en cours. Rien
 * n'est change dans les donnees : c'est un ordre d'affichage, pas un fait.
 */

/**
 * Un travail en cours passe devant un travail acheve, qui passe devant un
 * travail suspendu, qui passe devant un travail seulement decide. C'est le
 * seul critere, et il ne touche a aucune donnee.
 */
const RANG: Record<Project['status'], number> = {
  'in-progress': 0,
  delivered: 1,
  obtained: 1,
  paused: 2,
  planned: 3,
};

function parAvancement(a: Project, b: Project): number {
  return RANG[a.status] - RANG[b.status];
}

export function Projects() {
  const { language, t } = useLanguage();
  const realises = useRepli();

  const enAvant = [...getProjectsByTier('featured')].sort(parAvancement);
  const livres = getProjectsByTier('delivered');
  const prepares = getProjectsByTier('planned');

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2>{t('projects.title')}</h2>
        <a href="#/projets" className="lien inline-flex items-center gap-1.5 text-sm">
          {t('projects.gallery.link')}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-8 space-y-10">
        {enAvant.map((project) => (
          <ProjetEnAvant key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-6">
        <h3>{t('projects.delivered.title')}</h3>

        <Depliable id={realises.id} ouvert={realises.ouvert}>
          <div className="grid gap-4 pt-5 sm:grid-cols-2 xl:grid-cols-3">
            {livres.map((project) => (
              <CarteProjet key={project.id} project={project} />
            ))}
          </div>
        </Depliable>

        <BoutonDeplier
          cible={realises.id}
          ouvert={realises.ouvert}
          onBascule={realises.basculer}
          libelle={t('projects.delivered.more')}
          libelleFermer={t('deplier.replier')}
          className="mt-4"
        />
      </div>

      <div className="mt-14 border-t border-border pt-6">
        <h3 className="donnee uppercase text-muted-foreground">
          {t('projects.planned.title')}
        </h3>
        <p className="mesure mt-2 text-sm text-muted-foreground">
          {t('projects.planned.intro')}
        </p>
        <ul className="liste-prevus mt-4">
          {prepares.map((project) => (
            <li key={project.id} className="text-sm text-muted-foreground">
              {texte(project.title, language)}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
