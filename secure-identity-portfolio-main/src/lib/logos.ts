/**
 * Traitement d'affichage des logos d'etablissement, fichier par fichier.
 *
 * Les logos sont des fichiers etrangers au systeme de design : ils arrivent
 * avec leur propre encre et leur propre fond, et aucune regle unique ne peut
 * les rendre tous lisibles sur les deux themes. La version precedente les
 * posait donc tous sur la meme plaque blanche de 88 par 28 pixels, dans les
 * deux themes. C'etait un pansement, et il se voyait.
 *
 * Chaque fichier a ete ouvert et rendu sur les deux fonds avant d'etre classe
 * ici. Trois cas, et rien d'autre :
 *
 * - `variante-sombre` : il existe un second fichier dessine pour le fond
 *   sombre. Les deux sont servis, et c'est le CSS qui choisit selon le theme,
 *   sans JavaScript et donc sans clignotement au chargement.
 * - `encre-sombre` : encre sombre sur fond transparent. Illisible sur le
 *   theme sombre, parfait sur le theme clair. Le theme sombre l'inverse et le
 *   desature, ce qui donne une marque blanche nette.
 * - `tel-quel` : lisible sur les deux fonds sans rien lui faire. C'est le cas
 *   des logos deja colores et de ceux qui portent leur propre fond opaque.
 *
 * Un logo absent n'est pas un trou : le composant ne rend rien du tout. Soleil
 * Resources et le programme SAP Young Professionals n'ont pas de fichier dans
 * le depot, et aucun cadre vide ne vient le signaler.
 */
export type TraitementLogo = 'variante-sombre' | 'encre-sombre' | 'tel-quel';

const TRAITEMENTS: Record<string, TraitementLogo> = {
  '/img/logos/impulsera.svg': 'variante-sombre',
  '/img/logos/ecobank1.png': 'encre-sombre',
  '/img/logos/efrei.png': 'encre-sombre',
  '/img/logos/hec.png': 'encre-sombre',
  '/img/logos/uspn.png': 'encre-sombre',
  // Fond blanc opaque dans le fichier lui-meme : l'inverser le fait fondre
  // dans le theme sombre au lieu d'y poser un rectangle blanc.
  '/img/logos/Staffordshire_University_Logo.svg.png': 'encre-sombre',
  '/img/logos/inphb.png': 'tel-quel',
  '/img/logos/safir.png': 'tel-quel',
  '/img/logos/sap.png': 'tel-quel',
};

/** Variante dessinee pour le fond sombre, quand elle existe dans le depot. */
const VARIANTES_SOMBRES: Record<string, string> = {
  '/img/logos/impulsera.svg': '/img/logos/impulsera-sur-sombre.svg',
};

/** Un fichier inconnu est servi tel quel : jamais de traitement devine. */
export function traitementLogo(chemin: string): TraitementLogo {
  return TRAITEMENTS[chemin] ?? 'tel-quel';
}

export function varianteSombre(chemin: string): string | null {
  return VARIANTES_SOMBRES[chemin] ?? null;
}
