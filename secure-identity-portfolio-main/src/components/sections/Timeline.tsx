import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { timelineEntries, formatPeriod } from '@/data/timeline';
import { publicUrl } from '@/data/types';
import { getAssetPath } from '@/lib/assets';
import { Section } from '@/components/layout/Section';

/**
 * Colonne de notes a gauche, en police monospace : periode, lieu, drapeau.
 * Le corps occupe la colonne large. En dessous de 768 pixels, la colonne de
 * notes passe au-dessus du corps.
 *
 * Disparus : le filet central et ses pastilles, l'animation infinie et le
 * halo qui clignotaient sur l'entree en cours, les cartes au flou, et les
 * delais en cascade de cent millisecondes par entree.
 *
 * Les vrais logos et les vraies images de drapeaux sont servis. Une entree
 * qui n'en a pas s'affiche sans cadre vide.
 */
export function Timeline() {
  const { language, t } = useLanguage();
  const [ouvert, setOuvert] = useState<string | null>(null);

  return (
    <Section id="timeline">
      <h2>{t('timeline.title')}</h2>

      <div className="mt-8 space-y-8">
        {timelineEntries.map((entry) => {
          const periode = formatPeriod(entry.period, language);
          const estOuvert = ouvert === entry.id;
          const points = entry.highlights[language];
          const resultats = entry.outcomes ?? [];
          const aDesDetails = points.length > 0 || resultats.length > 0;
          const url = publicUrl(entry.evidence);

          return (
            <article
              key={entry.id}
              className="grille-notes border-t border-border pt-6"
            >
              <div className="donnee space-y-2 text-muted-foreground">
                {periode && <p>{periode}</p>}
                <p>{entry.location[language]}</p>
                {/* Les cinq drapeaux n'ont pas les memes proportions, 3:2
                    pour quatre d'entre eux et 2:1 pour le Royaume-Uni : la
                    hauteur est fixee et la largeur suit, sans deformation. */}
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
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.via}
                      </p>
                    )}
                  </div>
                  {/* Les logos sont des fichiers etrangers au systeme : cinq
                      d'entre eux portent une encre sombre sur fond
                      transparent et deviennent illisibles sur le theme
                      sombre, un autre porte deja son propre fond blanc. Ils
                      sont donc tous poses sur la meme plaque neutre, dans
                      les deux themes. */}
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

                {aDesDetails && estOuvert && (
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
                )}

                {aDesDetails && (
                  <button
                    type="button"
                    onClick={() => setOuvert(estOuvert ? null : entry.id)}
                    aria-expanded={estOuvert}
                    className="lien mt-4 inline-flex items-center gap-1 text-sm"
                  >
                    {estOuvert ? t('projects.showLess') : t('timeline.learnMore')}
                    {estOuvert ? (
                      <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
