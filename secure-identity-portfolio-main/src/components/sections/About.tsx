import { useLanguage } from '@/contexts/LanguageContext';
import { Section } from '@/components/layout/Section';

/**
 * Trois paragraphes dans la colonne large, le bloc langues dans la colonne de
 * notes. Disparus : les deux cartes au flou pose sur un fond opaque, le
 * text-justify qui produisait des rivieres blanches des 360 pixels, et
 * l'icone qui repetait le mot « Langues » place a cote d'elle.
 */
export function About() {
  const { t } = useLanguage();

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

        <div className="mesure space-y-4">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </div>
    </Section>
  );
}
