import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPeriod } from '@/data/timeline';
import { publicUrl, texte, type Evidence, type Project } from '@/data/types';
import { VisuelProjet } from '@/components/ui/visuel-projet';
import { classeStatut, libelleStatut } from './statut';
import { cn } from '@/lib/utils';

/**
 * Les trois rendus d'un projet, partages par la page d'accueil et par la
 * galerie, pour qu'un projet se presente de la meme facon aux deux endroits.
 */

/**
 * Point non negociable : une balise de lien n'est produite que si `publicUrl`
 * retourne une adresse. Sinon, un libelle non cliquable en texte adouci. Aucun
 * lien mort ne peut apparaitre.
 */
export function Preuve({ evidence }: { evidence: Evidence }) {
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

export function Etiquettes({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {stack.map((outil) => (
        <li key={outil} className="etiquette donnee">
          {outil}
        </li>
      ))}
    </ul>
  );
}

export function Statut({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  return (
    <span className={cn('statut donnee', classeStatut[project.status])}>
      {libelleStatut(project.status, language, t)}
    </span>
  );
}

function Resultats({ project }: { project: Project }) {
  const { language } = useLanguage();
  if (project.outcomes.length === 0) return null;

  return (
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
  );
}

/** Niveau 1 : pleine largeur, colonne de notes, visuel en banniere. */
export function ProjetEnAvant({ project }: { project: Project }) {
  const { language } = useLanguage();
  const periode = formatPeriod(project.period, language);

  return (
    <article className="projet-avant grille-notes">
      <div className="donnee space-y-2 text-muted-foreground">
        {periode && <p>{periode}</p>}
        <p>
          <Statut project={project} />
        </p>
        {project.role && <p>{project.role[language]}</p>}
      </div>

      <div className="min-w-0">
        <VisuelProjet
          id={project.id}
          stack={project.stack}
          format="banniere"
          className="mb-5"
        />

        <h3>{texte(project.title, language)}</h3>
        {project.context && (
          <p className="mt-1 text-sm text-muted-foreground">
            {project.context[language]}
          </p>
        )}

        <p className="mesure mt-3">{project.summary[language]}</p>
        <Resultats project={project} />
        <Etiquettes stack={project.stack} className="mt-4" />

        <div className="mt-4">
          <Preuve evidence={project.evidence} />
        </div>
      </div>
    </article>
  );
}

/** Niveau 2 : carte de grille, visuel compris. */
export function CarteProjet({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <article className="carte flex flex-col overflow-hidden">
      <VisuelProjet
        id={project.id}
        stack={project.stack}
        className="rounded-none border-0 border-b"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0">{texte(project.title, language)}</h3>
          <Statut project={project} />
        </div>

        <p className="mt-3 flex-1 text-sm text-muted-foreground">
          {project.summary[language]}
        </p>

        <Etiquettes stack={project.stack} className="mt-4" />

        <div className="mt-4">
          <Preuve evidence={project.evidence} />
        </div>
      </div>
    </article>
  );
}
