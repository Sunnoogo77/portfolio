import { useId, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { timelineEntries, formatPeriod } from '@/data/timeline';
import { publicUrl, type TimelineEntry } from '@/data/types';
import { getAssetPath } from '@/lib/assets';
import { Section } from '@/components/layout/Section';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';

/**
 * Colonne de notes a gauche, en police monospace : periode, lieu, drapeau.
 * Le corps occupe la colonne large. En dessous de 768 pixels, la colonne de
 * notes passe au-dessus du corps.
 *
 * Chaque entree ne montre d'abord que sa periode, son organisation, son role
 * et une phrase. Les points cles se deplient a la demande, pour toutes les
 * entrees et plus seulement pour Ecobank : le bloc deplie porte un
 * identifiant, le bouton porte `aria-expanded` et `aria-controls`, et le
 * contenu replie n'est ni dans le document ni atteignable au clavier.
 */
function Entree({ entry }: { entry: TimelineEntry }) {
  const { language, t } = useLanguage();
  const [ouvert, setOuvert] = useState(false);
  const idDetails = useId();

  const periode = formatPeriod(entry.period, language);
  const points = entry.highlights[language];
  const resultats = entry.outcomes ?? [];
  const aDesDetails = points.length > 0 || resultats.length > 0;
  const url = publicUrl(entry.evidence);

  return (
    <article className="grille-notes border-t border-border pt-6">
      <div className="donnee space-y-2 text-muted-foreground">
        {periode && <p>{periode}</p>}
        <p>{entry.location[language]}</p>
        {/* Les cinq drapeaux n'ont pas les memes proportions, 3:2 pour quatre
            d'entre eux et 2:1 pour le Royaume-Uni : la hauteur est fixee et la
            largeur suit, sans deformation. */}
        {entry.flag && (
          <img
            src={getAssetPath(entry.flag)}
            alt=""
            width={24}
            height={16}
            loading="lazy"
            className="h-4 w-auto rounded-sm border border-border"
          />
        )}
      </div>

      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3>{entry.organisation}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.role[language]}
            </p>
            {entry.via && (
              <p className="mt-1 text-sm text-muted-foreground">{entry.via}</p>
            )}
          </div>
          {/* Plaque neutre provisoire : cinq de ces logos portent une encre
              sombre sur fond transparent. Le traitement fichier par fichier
              arrive au lot 5. */}
          {entry.logo && (
            <span className="shrink-0 rounded-[var(--radius)] border border-border bg-[hsl(var(--sur-accent))] p-1.5">
              <img
                src={getAssetPath(entry.logo)}
                alt={entry.organisation}
                width={88}
                height={28}
                loading="lazy"
                className="h-7 w-[5.5rem] object-contain"
              />
            </span>
          )}
        </div>

        <p className="mesure mt-3">{entry.summary[language]}</p>

        {url && (
          <p className="mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="lien donnee"
            >
              {url.replace(/^https?:\/\//, '')}
            </a>
          </p>
        )}

        {aDesDetails && (
          <>
            <Depliable id={idDetails} ouvert={ouvert}>
              <div className="mt-4 border-t border-border pt-4">
                {points.length > 0 && (
                  <>
                    <h4 className="donnee uppercase text-muted-foreground">
                      {t('timeline.highlights')}
                    </h4>
                    <ul className="mesure mt-2 space-y-3">
                      {points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {resultats.length > 0 && (
                  <ul className="mesure mt-4 space-y-1">
                    {resultats.map((outcome) => (
                      <li key={outcome.unit.fr} className="text-sm">
                        <span className="donnee text-foreground">
                          {outcome.value}
                        </span>{' '}
                        <span className="text-muted-foreground">
                          {outcome.unit[language]}
                          {outcome.qualifier
                            ? `, ${outcome.qualifier[language]}`
                            : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Depliable>

            <BoutonDeplier
              cible={idDetails}
              ouvert={ouvert}
              onBascule={() => setOuvert((o) => !o)}
              libelle={t('timeline.learnMore')}
              libelleFermer={t('deplier.replier')}
              className="mt-4"
            />
          </>
        )}
      </div>
    </article>
  );
}

export function Timeline() {
  const { t } = useLanguage();

  return (
    <Section id="timeline">
      <h2>{t('timeline.title')}</h2>

      <div className="mt-8 space-y-8">
        {timelineEntries.map((entry) => (
          <Entree key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
