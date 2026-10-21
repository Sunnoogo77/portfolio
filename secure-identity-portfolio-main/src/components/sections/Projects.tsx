import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectsByTier } from '@/data/projects';
import { formatPeriod } from '@/data/timeline';
import { publicUrl, texte, type Evidence, type Project } from '@/data/types';
import { Section } from '@/components/layout/Section';
import { classeStatut, libelleStatut } from './statut';
import { cn } from '@/lib/utils';

/**
 * Trois niveaux d'affichage, deja portes par le champ `tier` des donnees :
 * `featured` en pleine largeur avec colonne de notes, `delivered` en grille,
 * `planned` en liste sobre et compacte, sans carte et sans lien.
 *
 * Les quatre boutons de filtre ont disparu : la hierarchie est maintenant
 * dans la mise en page, et les trente-trois projets se lisent d'un seul
 * parcours.
 */

/**
 * Point non negociable : une balise de lien n'est produite que si
 * `publicUrl` retourne une adresse. Sinon, un libelle non cliquable en texte
 * adouci. Aucun lien mort ne peut apparaitre.
 */
function Preuve({ evidence }: { evidence: Evidence }) {
  const { t } = useLanguage();
  const url = publicUrl(evidence);

  if (!url) {
    return (
      <span className="text-sm text-muted-foreground">
        {t(`projects.evidence.${evidence.visibility}`)}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="lien inline-flex items-center gap-1.5 text-sm"
    >
      {t('projects.viewProject')}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

function Etiquettes({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {stack.map((outil) => (
        <li key={outil} className="etiquette donnee">
          {outil}
        </li>
      ))}
    </ul>
  );
}

function Statut({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  return (
    <span className={cn('statut donnee', classeStatut[project.status])}>
      {libelleStatut(project.status, language, t)}
    </span>
  );
}

/** Niveau 1 : pleine largeur, colonne de notes. */
function ProjetEnAvant({ project }: { project: Project }) {
  const { language } = useLanguage();
  const periode = formatPeriod(project.period, language);

  return (
    <article className="grille-notes border-t border-border pt-6">
      <div className="donnee space-y-2 text-muted-foreground">
        {periode && <p>{periode}</p>}
        <p>
          <Statut project={project} />
        </p>
        {project.role && <p>{project.role[language]}</p>}
      </div>

      <div>
        <h3>{texte(project.title, language)}</h3>
        {project.context && (
          <p className="mt-1 text-sm text-muted-foreground">
            {project.context[language]}
          </p>
        )}

        <p className="mesure mt-3">{project.summary[language]}</p>

        {project.outcomes.length > 0 && (
          <ul className="mesure mt-4 space-y-1">
            {project.outcomes.map((outcome) => (
              <li key={outcome.unit.fr} className="text-sm">
                <span className="donnee text-foreground">{outcome.value}</span>{' '}
                <span className="text-muted-foreground">
                  {outcome.unit[language]}
                  {outcome.qualifier ? `, ${outcome.qualifier[language]}` : ''}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Etiquettes stack={project.stack} />

        <div className="mt-4">
          <Preuve evidence={project.evidence} />
        </div>
      </div>
    </article>
  );
}

/** Niveau 2 : grille des travaux realises. */
function ProjetRealise({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <article className="carte flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0">{texte(project.title, language)}</h3>
        <Statut project={project} />
      </div>

      <p className="mt-3 flex-1 text-sm text-muted-foreground">
        {project.summary[language]}
      </p>

      <Etiquettes stack={project.stack} />

      <div className="mt-4">
        <Preuve evidence={project.evidence} />
      </div>
    </article>
  );
}

export function Projects() {
  const { language, t } = useLanguage();
  const enAvant = getProjectsByTier('featured');
  const realises = getProjectsByTier('delivered');
  const prepares = getProjectsByTier('planned');

  return (
    <Section id="projects">
      <h2>{t('projects.title')}</h2>

      <div className="mt-8 space-y-10">
        {enAvant.map((project) => (
          <ProjetEnAvant key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {realises.map((project) => (
          <ProjetRealise key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <h3>{t('projects.planned.title')}</h3>
        <p className="mesure mt-2 text-sm text-muted-foreground">
          {t('projects.planned.intro')}
        </p>
        <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 xl:grid-cols-3">
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
