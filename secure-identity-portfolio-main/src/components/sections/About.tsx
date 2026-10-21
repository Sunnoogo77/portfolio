import { useLanguage } from '@/contexts/LanguageContext';
import { useRepli } from '@/hooks/useRepli';
import { Section } from '@/components/layout/Section';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';

/**
 * La presentation se reduit a son premier paragraphe ; les deux suivants se
 * deplient a la demande. Sur telephone le bloc s'ouvre replie, sur grand ecran
 * deja deplie : c'est le defilement qui coute, et il ne coute pas la meme
 * chose des deux cotes.
 *
 * Le bloc langues reste dans la colonne de notes, toujours visible : deux
 * lignes ne meritent pas un bouton.
 */
export function About() {
  const { t } = useLanguage();
  const suite = useRepli();

  return (
    <Section id="about">
      <h2>{t('about.title')}</h2>

      <div className="grille-notes mt-8">
        <div>
          <h3 className="donnee uppercase text-muted-foreground">
            {t('languages.title')}
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>{t('languages.fr')}</li>
            <li>{t('languages.en')}</li>
          </ul>
        </div>

        <div className="mesure">
          <p>{t('about.p1')}</p>

          <Depliable id={suite.id} ouvert={suite.ouvert}>
            <div className="space-y-4 pt-4">
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </Depliable>

          <BoutonDeplier
            cible={suite.id}
            ouvert={suite.ouvert}
            onBascule={suite.basculer}
            libelle={t('about.more')}
            libelleFermer={t('deplier.replier')}
            className="mt-4"
          />
        </div>
      </div>
    </Section>
  );
}
