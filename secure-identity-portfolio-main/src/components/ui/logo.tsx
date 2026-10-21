import { getAssetPath } from '@/lib/assets';
import { traitementLogo, varianteSombre } from '@/lib/logos';
import { cn } from '@/lib/utils';

/**
 * Logo d'etablissement, sans plaque.
 *
 * La plaque blanche de 88 par 28 pixels posee dans les deux themes a disparu.
 * Le traitement est decide fichier par fichier dans src/lib/logos.ts, apres
 * avoir rendu chacun sur les deux fonds : variante dessinee pour le sombre,
 * inversion de l'encre, ou rien du tout.
 *
 * La variante sombre est choisie par le CSS et non par le JavaScript : les
 * deux fichiers sont dans le document, un seul est affiche selon la classe de
 * theme. Rien a lire, rien a attendre, donc aucun clignotement au chargement.
 * Le cout est un second fichier telecharge, un SVG de huit kilooctets, pour un
 * seul logo de la page.
 *
 * Une entree sans fichier de logo ne rend rien : ni trou, ni cadre vide.
 * Soleil Resources et le programme SAP Young Professionals sont dans ce cas.
 */
export function Logo({
  chemin,
  nom,
  className,
}: {
  chemin?: string;
  nom: string;
  className?: string;
}) {
  if (!chemin) return null;

  const traitement = traitementLogo(chemin);
  const sombre = varianteSombre(chemin);
  const classes = cn('logo', className);

  if (traitement === 'variante-sombre' && sombre) {
    return (
      <span className="logo-cadre">
        <img
          src={getAssetPath(chemin)}
          alt={nom}
          height={40}
          loading="lazy"
          className={cn(classes, 'logo-clair')}
        />
        <img
          src={getAssetPath(sombre)}
          alt=""
          aria-hidden="true"
          height={40}
          loading="lazy"
          className={cn(classes, 'logo-sombre')}
        />
      </span>
    );
  }

  return (
    <span className="logo-cadre">
      <img
        src={getAssetPath(chemin)}
        alt={nom}
        height={40}
        loading="lazy"
        className={cn(classes, traitement === 'encre-sombre' && 'logo-encre')}
      />
    </span>
  );
}
