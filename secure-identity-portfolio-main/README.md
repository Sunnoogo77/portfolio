# Portfolio Sunnoogo Caleb Tapsoba

Portfolio personnel en cybersécurité et cloud, publié sur GitHub Pages à
l'adresse <https://sunnoogo77.github.io/portfolio/>.

Il s'agit d'une page unique bilingue (français et anglais), sans routeur et
sans service distant : tout est construit à la compilation et servi en
fichiers statiques.

## Pile technique

- **Vite 5** pour la compilation et le serveur de développement
- **React 18** et **TypeScript** pour l'interface
- **Tailwind CSS 3** pour la mise en forme
- Trois primitives **Radix UI** seulement (label, slot, toast), enveloppées
  dans `src/components/ui/`
- **Vitest** pour les tests, **ESLint** pour l'analyse statique

## Lancer le projet en local

Node.js 20 et npm sont requis.

```sh
cd secure-identity-portfolio-main
npm ci
npm run dev
```

Le serveur de développement écoute sur <http://localhost:8080>.

## Scripts disponibles

| Commande         | Effet                                                  |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Serveur de développement avec rechargement à chaud     |
| `npm run build`  | Construction de production dans `dist/`                |
| `npm run preview`| Sert localement le contenu de `dist/`                  |
| `npm run lint`   | Analyse statique ESLint                                |
| `npm run test`   | Tests Vitest en une passe                              |
| `npm run test:watch` | Tests Vitest en continu                            |

Le contrôle de types se fait avec `npx tsc --noEmit`.

## Déploiement

Le déploiement est automatique. À chaque poussée sur la branche `main`, le
workflow `.github/workflows/deploy.yml` installe les dépendances avec
`npm ci`, exécute l'analyse statique et les tests, construit le site puis
publie le dossier `secure-identity-portfolio-main/dist` sur GitHub Pages.

Le site étant servi depuis un sous-chemin, `vite.config.ts` fixe
`base: "/portfolio/"` en production. Tout chemin de ressource écrit à la main
doit donc passer par l'utilitaire `getAssetPath()` de `src/lib/assets.ts`,
sans quoi il se cassera en production.

## Où vit le contenu éditorial

Aucun texte n'est écrit en dur dans les composants. Pour modifier le contenu,
il faut toucher à deux endroits et à eux seuls.

- `src/data/` contient les données structurées, un fichier par rubrique :
  - `projects.ts` — les projets
  - `timeline.ts` — le parcours
  - `certifications.ts` — les certifications
  - `skills.ts` — les compétences
  - `social.ts` — les liens vers les réseaux
- `src/contexts/LanguageContext.tsx` contient les chaînes d'interface
  traduites (titres de section, libellés de boutons, formulaire de contact).

Chaque entrée de `src/data/` porte ses deux variantes `fr` et `en` : une
rubrique ajoutée dans une langue doit l'être dans l'autre.

Les ressources binaires (photo, logos, images de certifications, CV en PDF,
certificats) vivent dans `public/` et sont recopiées telles quelles dans
`dist/` à la construction.

## Organisation du dépôt

```
secure-identity-portfolio-main/   l'application servie aujourd'hui
_archive/site-statique-2025/      l'ancien site HTML statique, conservé mais plus servi
.github/workflows/deploy.yml      la chaîne de construction et de publication
```
