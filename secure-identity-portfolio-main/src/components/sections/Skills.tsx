import { useLanguage } from '@/contexts/LanguageContext';
import { skillRows, skillsIntro, usedInLabel } from '@/data/skills';
import { Section } from '@/components/layout/Section';

/**
 * Tableau a trois colonnes du point 10 de docs/SPEC-CONTENU.md : domaine,
 * outils, et ou cela a servi. Le mur de quarante-cinq etiquettes sans niveau,
 * sans date et sans contexte a disparu.
 *
 * Le domaine est l'en-tete de sa ligne, il n'y a donc pas d'en-tete de
 * colonne : aucune traduction n'existe pour « Domaine » et « Outils », et ce
 * n'est pas a la mise en page d'en inventer.
 *
 * En dessous de 768 pixels, chaque ligne devient un bloc : trois colonnes ne
 * tiennent pas dans 360 pixels sans debordement horizontal.
 */
export function Skills() {
  const { language, t } = useLanguage();

  return (
    <Section id="skills">
      <h2>{t('skills.title')}</h2>
      <p className="mesure mt-3 text-muted-foreground">{skillsIntro[language]}</p>

      <table className="mt-8 w-full border-collapse text-left">
        <tbody className="block md:table-row-group">
          {skillRows.map((row) => (
            <tr
              key={row.domain.fr}
              className="block border-t border-border py-5 md:table-row md:py-0"
            >
              <th
                scope="row"
                className="block pr-6 align-baseline text-base font-semibold md:table-cell md:w-[22%] md:py-5"
              >
                {row.domain[language]}
              </th>
              <td className="block pt-2 align-baseline md:table-cell md:w-[40%] md:py-5 md:pr-6 md:pt-5">
                <ul className="flex flex-wrap gap-1.5">
                  {row.tools.map((tool) => (
                    <li key={tool} className="etiquette donnee">
                      {tool}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="block pt-2 align-baseline text-sm text-muted-foreground md:table-cell md:py-5 md:pt-5">
                <span className="md:hidden">{t('skills.usedIn')} </span>
                {row.usedIn.map((id) => usedInLabel(id, language)).join(' · ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
