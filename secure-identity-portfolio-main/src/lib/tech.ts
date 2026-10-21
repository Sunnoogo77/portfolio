import correspondances from '@/data/tech-icons.json';

/**
 * Correspondance entre le nom affiche d'une technologie et son icone.
 *
 * Les trente et une icones de `public/img/tech/` viennent de Simple Icons,
 * versees au domaine public sous CC0, sauf `wazuh.png` qui provient du dossier
 * de logos du CV. Elles sont monochromes : le rendu les pose en masque et les
 * remplit de la couleur courante, ce qui les rend lisibles sur les deux themes
 * sans jamais dependre de la couleur du fichier.
 *
 * Une technologie absente de la table n'a pas d'icone. Elle s'affiche alors en
 * texte seul, et surtout pas en trou : c'est l'appelant qui en decide, jamais
 * ce module.
 */
const TABLE = correspondances as Record<string, string>;

export function iconeTech(nom: string): string | null {
  return TABLE[nom] ?? null;
}

/**
 * Icones a composer pour illustrer une pile, sans doublon.
 *
 * Plusieurs technologies partagent un meme fichier, « Azure », « Azure
 * Policy », « Key Vault » et « Log Analytics » par exemple : afficher quatre
 * fois le meme logo ne dirait rien de plus. L'ordre de la pile est conserve,
 * parce qu'il est celui que le proprietaire a ecrit.
 */
export function iconesDeLaPile(stack: string[], maximum = 4): string[] {
  const vues = new Set<string>();
  const retenues: string[] = [];
  for (const nom of stack) {
    const chemin = iconeTech(nom);
    if (!chemin || vues.has(chemin)) continue;
    vues.add(chemin);
    retenues.push(chemin);
    if (retenues.length === maximum) break;
  }
  return retenues;
}
