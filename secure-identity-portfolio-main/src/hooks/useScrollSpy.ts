import { useState, useEffect } from 'react';

/**
 * Section active dans la navigation.
 *
 * Deux defauts corriges :
 * - la derniere section restait sans surlignage quand elle etait plus courte
 *   que la fenetre, puisque son haut ne franchissait jamais la ligne de
 *   reference : « Certifications » demeurait surlignee jusqu'au pied de page.
 *   Des que la page atteint son bas, c'est la derniere section qui est
 *   active ;
 * - au-dessus de la premiere section, la premiere entree etait surlignee
 *   alors que le visiteur lisait le bandeau d'accueil. Aucune entree ne l'est
 *   desormais.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const compute = () => {
      const present = sectionIds.filter((id) => document.getElementById(id));
      if (present.length === 0) {
        setActiveSection('');
        return;
      }

      const racine = document.documentElement;
      const auBas =
        window.scrollY + window.innerHeight >= racine.scrollHeight - 2;
      if (auBas) {
        setActiveSection(present[present.length - 1]);
        return;
      }

      const ligne = window.scrollY + offset;
      let courante = '';
      for (const id of present) {
        const haut =
          document.getElementById(id)!.getBoundingClientRect().top +
          window.scrollY;
        if (haut <= ligne) courante = id;
      }
      setActiveSection(courante);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
