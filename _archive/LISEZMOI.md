# Archive

Ce dossier conserve l'ancien site, qui n'est plus servi. Rien n'y a été
supprimé : tout a été déplacé par `git mv`, l'historique de chaque fichier
est donc intact et consultable avec `git log --follow`.

**Date d'archivage : 21 octobre 2026.**

## Contenu

### `site-statique-2025/`

L'ancien portfolio, écrit à la main en HTML, CSS et JavaScript, dans l'état
où il se trouvait avant la refonte.

| Élément | Nature |
| --- | --- |
| `index.html`, `index-fr.html` | les deux versions linguistiques, chacune d'environ 93 ko, la traduction étant dupliquée dans deux fichiers entiers |
| `css/styles.css`, `js/main.js` | la mise en forme et les comportements |
| `img/` | photo, logos d'établissement, drapeaux, images de certifications, famille de favicons dans `img/logos/head/` |
| `assets/` | les CV en PDF et le calendrier d'alternance |
| `docs/` | les certificats en PDF et des notes de travail |
| `parcourhtml`, `lesson.md`, `test.txt` | brouillons et notes de travail de l'époque |

### `publications-linkedin.md`

Les URL des cinq publications LinkedIn que l'ancien `index.html` intégrait
en `iframe`. La refonte ne reprend pas cette section ; les adresses ont été
relevées avant l'archivage pour ne pas les perdre.

## Pourquoi ce site n'est plus servi

Il a été remplacé par l'application React de `secure-identity-portfolio-main/`,
seule publiée aujourd'hui sur GitHub Pages. Trois raisons :

1. **Le contenu était dupliqué.** Chaque ajout devait être écrit deux fois,
   dans `index.html` et dans `index-fr.html`, avec le risque que les deux
   versions divergent. L'application ne garde qu'une source par rubrique,
   dans `src/data/`, avec ses deux variantes de langue côte à côte.
2. **Rien n'était vérifié avant publication.** Il n'y avait ni analyse
   statique, ni tests, ni contrôle de types. La chaîne d'intégration actuelle
   passe le lint et les tests avant toute mise en ligne.
3. **Deux sites se disputaient la même adresse.** Un `index.html` à la racine
   du dépôt à côté d'une application qui publie son propre `index.html`
   prêtait durablement à confusion sur ce qui était réellement servi.

## Ce qui en a été repris

Avant l'archivage, quatre choses ont été recopiées dans l'application :

- les logos d'établissement `efrei.png`, `inphb.png`, `ecobank1.png` et
  `Staffordshire_University_Logo.svg.png`, vers
  `secure-identity-portfolio-main/public/img/logos/`
- la famille complète de favicons et `site.webmanifest`, depuis
  `img/logos/head/`, vers `secure-identity-portfolio-main/public/` ; ils
  remplacent le `favicon.ico` de 20 ko généré automatiquement
- les trois certificats en PDF de `docs/certifs/`, vers
  `secure-identity-portfolio-main/public/assets/certificats/`
- les URL des publications LinkedIn, vers `publications-linkedin.md`

Ces copies n'ont pas vidé l'archive : les originaux sont toujours à leur
place dans `site-statique-2025/`.

## Si le besoin se présente de le relire

Les fichiers sont autonomes et s'ouvrent directement dans un navigateur,
sans construction préalable :

```sh
open _archive/site-statique-2025/index.html
```

Les chemins qu'ils contiennent sont relatifs au dossier, ils restent donc
valides après le déplacement.
