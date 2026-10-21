import type { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { skillRows, skillsIntro, usedInLabel } from '@/data/skills';
import type { SkillRow } from '@/data/types';
import { useRepli } from '@/hooks/useRepli';
import { Section } from '@/components/layout/Section';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';

/**
 * Tableau a trois colonnes : domaine, outils, et ou cela a servi.
 *
 * Le domaine est l'en-tete de sa ligne, il n'y a donc pas d'en-tete de
 * colonne : aucune traduction n'existe pour « Domaine » et « Outils », et ce
 * n'est pas a la mise en page d'en inventer.
 *
 * En dessous de 1024 pixels, chaque ligne devient un bloc : trois colonnes ne
 * tiennent pas sans ecraser la premiere, mesure faite a 768 pixels.
 *
 * Sur telephone, seules les deux premieres lignes sont donnees et le reste se
 * deplie : la section entiere faisait defiler plus de deux ecrans pleins. Sur
 * grand ecran elle s'ouvre deja depliee.
 */
const VISIBLES_SUR_TELEPHONE = 2;

function Ligne({ row }: { row: SkillRow }) {
  const { language, t } = useLanguage();

  return (
    <tr className="block border-t border-border py-5 lg:table-row lg:py-0">
      <th
        scope="row"
        className="block pr-6 align-baseline text-base font-semibold lg:table-cell lg:w-[22%] lg:py-5"
      >
        {row.domain[language]}
      </th>
      <td className="block pt-2 align-baseline lg:table-cell lg:w-[40%] lg:py-5 lg:pr-6 lg:pt-5">
        <ul className="flex flex-wrap gap-1.5">
          {row.tools.map((tool) => (
            <li key={tool} className="etiquette donnee">
              {tool}
            </li>
          ))}
        </ul>
      </td>
      <td className="block pt-2 align-baseline text-sm text-muted-foreground lg:table-cell lg:py-5 lg:pt-5">
        <span className="lg:hidden">{t('skills.usedIn')} </span>
        {row.usedIn.map((id) => usedInLabel(id, language)).join(' · ')}
      </td>
    </tr>
  );
}

/** Un tableau complet, pour que le bloc deplie reste du HTML valide : une
 *  suite de `tr` ne peut pas vivre hors d'un `table`. */
function Tableau({ children }: { children: ReactNode }) {
  return (
    <table className="w-full border-collapse text-left lg:table-fixed">
      <tbody className="block lg:table-row-group">{children}</tbody>
    </table>
  );
}

export function Skills() {
  const { language, t } = useLanguage();
  const reste = useRepli();

  const debut = skillRows.slice(0, VISIBLES_SUR_TELEPHONE);
  const suite = skillRows.slice(VISIBLES_SUR_TELEPHONE);

  return (
    <Section id="skills">
      <h2>{t('skills.title')}</h2>
      <p className="mesure mt-3 text-muted-foreground">{skillsIntro[language]}</p>

      <div className="mt-8">
        <Tableau>
          {debut.map((row) => (
            <Ligne key={row.domain.fr} row={row} />
          ))}
        </Tableau>
      </div>

      {/* Le second tableau est fige en largeur sur grand ecran, pour que ses
          colonnes tombent exactement sur celles du premier. */}
      <Depliable id={reste.id} ouvert={reste.ouvert}>
        <Tableau>
          {suite.map((row) => (
            <Ligne key={row.domain.fr} row={row} />
          ))}
        </Tableau>
      </Depliable>

      {suite.length > 0 && (
        <BoutonDeplier
          cible={reste.id}
          ouvert={reste.ouvert}
          onBascule={reste.basculer}
          libelle={t('skills.more')}
          libelleFermer={t('deplier.replier')}
          className="mt-5"
        />
      )}
    </Section>
  );
}
