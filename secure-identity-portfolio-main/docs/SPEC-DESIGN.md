# Système de design — portfolio Sunnoogo Caleb Tapsoba

Version du 21 octobre 2026. Ce document fait autorité. En cas de doute entre ce
document et le code existant, c'est ce document qui gagne.

## 1. Intention

Le portfolio s'adresse à des recruteurs en cybersécurité, à des cabinets de
conseil et à des ESN, pour un CDI ou un CDD immédiat et pour une alternance à
partir de septembre 2027. Il doit inspirer le professionnalisme et le sérieux.

Registre visé : éditorial et institutionnel. Pas le registre néon du terminal,
pas le registre du tableau de bord. La page doit se lire comme un document bien
composé, pas comme une interface.

## 2. Ce qui est interdit, sans exception

Ces éléments sont la signature des sites fabriqués automatiquement. Ils sont
tous présents aujourd'hui, et aucun ne doit survivre.

- Toute lueur. Les classes `glow`, `glow-sm`, l'animation `pulse-glow`, les
  ombres colorées au survol des cartes.
- Tout dégradé de fond, y compris le dégradé du bandeau d'accueil.
- Le motif de grille du bandeau d'accueil.
- `backdrop-blur` appliqué sur un fond opaque, c'est-à-dire partout ici.
- Les pastilles qui clignotent, `animate-pulse` et `animate-ping`.
- Les cascades d'apparition : `animate-fade-in-up` enchaînées par des délais
  croissants, et les `style={{ animationDelay: index * N }}`.
- Les emoji, y compris les drapeaux. Les vrais logos et de vraies images de
  drapeaux existent dans le dépôt, ce sont eux qu'il faut servir.
- Les flèches `→` écrites en dur dans les libellés quand une icône de direction
  est déjà affichée à côté.
- Les ombres portées sur les cartes.
- Les formules creuses. Toute phrase qui pourrait figurer sur le portfolio de
  quelqu'un d'autre sans changer un mot doit être supprimée ou remplacée par un
  fait.

## 3. Couleurs

Jetons en HSL brut, à la manière actuelle, pour rester compatible avec Tailwind.
Tous les ratios ci-dessous ont été calculés selon WCAG 2.1 et sont vérifiés :
**les deux thèmes passent AA sur la totalité des textes.**

### Thème sombre, thème par défaut

```
--fond            222 24% 8%
--surface         222 20% 11%
--surface-2       222 18% 15%
--bord            220 14% 22%
--texte           213 18% 94%     16,24 sur fond
--texte-doux      215 14% 68%      8,07 sur fond
--accent          218 60% 68%      7,07 sur fond      texte, liens, état actif
--accent-fond     220 68% 46%      6,20 avec texte blanc    fonds de bouton
--sur-accent        0  0% 100%
--statut-livre    152 42% 56%      8,26 sur fond
--statut-encours   38 78% 62%      9,79 sur fond
--statut-prevu    220 10% 58%      5,84 sur fond
```

### Thème clair

```
--fond            214 20% 97%
--surface           0  0% 100%
--surface-2       214 24% 93%
--bord            214 20% 85%
--texte           222 30% 12%     16,07 sur fond
--texte-doux      218 14% 38%      6,20 sur fond
--accent          220 60% 38%      7,39 sur fond
--accent-fond     220 68% 42%      7,08 avec texte blanc
--sur-accent        0  0% 100%
--statut-livre    152 54% 26%      6,44 sur fond
--statut-encours   32 84% 30%      5,91 sur fond
--statut-prevu    218 10% 40%      5,64 sur fond
```

**Règle qui explique l'échec actuel :** une couleur d'accent ne peut pas servir
la même valeur dans les deux thèmes. L'accent de texte et l'accent de fond de
bouton sont deux jetons distincts. Le cyan unique employé aujourd'hui descend à
1,69 contre 4,5 requis sur le thème clair, sur huit éléments.

Le cyan disparaît entièrement. L'échelle `brand-50` à `brand-900` n'est utilisée
nulle part, elle est supprimée. Les seize jetons de barre latérale sont
supprimés avec le composant mort qui les consommait.

## 4. Typographie

Aujourd'hui aucune police n'est téléchargée : `Inter` est déclaré mais jamais
servi, et le site tombe sur la police système du visiteur. C'est la première
cause du rendu générique.

Deux familles, **hébergées localement en woff2 dans `public/fonts/`**, jamais
par un service tiers. Trois fichiers au total, préchargés dans le `head`.

- **Titres et texte : Inter**, graisses 400 et 600, sous-ensemble latin et
  latin étendu. Avec `font-feature-settings: "cv05" 1, "ss03" 1` pour obtenir
  le `l` à empattement et le `a` à étage, qui distinguent nettement du rendu
  Inter par défaut que tout le monde sert.
- **Données techniques : JetBrains Mono**, graisse 400. Réservée aux périodes,
  aux années, aux versions, aux noms de dépôt et aux chiffres de résultat.
  C'est elle qui donne le caractère d'ingénieur sans recourir à un effet.

Échelle fluide, par `clamp`, de 360 à 1400 pixels de large. L'échelle actuelle
est figée par paliers : le titre principal garde le même corps de 390 à 760
pixels.

```
h1       clamp(2.0rem, 1.25rem + 2.9vw, 3.5rem)   graisse 600, interligne 1.08
h2       clamp(1.5rem, 1.2rem + 1.1vw, 2.0rem)    graisse 600, interligne 1.15
h3       clamp(1.05rem, 1.0rem + 0.3vw, 1.2rem)   graisse 600
corps    clamp(0.95rem, 0.92rem + 0.2vw, 1.05rem) graisse 400, interligne 1.65
donnée   0.8125rem  JetBrains Mono, interlettrage 0.02em
```

Mesure de lecture bridée à **68 caractères** sur tout bloc de texte suivi.
Interdiction de `text-justify` : six paragraphes le portent aujourd'hui, sans
césure, ce qui produit des rivières blanches dès 360 pixels. Alignement à
gauche, et `hyphens: auto` avec `lang` correctement posé.

## 5. Mise en page

Grille éditoriale à colonnes asymétriques, pas une pile de bandes identiques.

```
conteneur     width: min(100% - 2 * marge, 72rem)
marge         clamp(1rem, 4vw, 3rem)
```

**Corriger la cassure mesurée à 1536 pixels.** La configuration actuelle fixe
`container.screens` à `2xl: 1400px`, ce qui supprime toute largeur maximale en
dessous de 1536 pixels : sur un portable de 1440 pixels, le site s'affiche en
pleine largeur avec seize pixels de marge. La règle ci-dessus remplace le
conteneur Tailwind, qui est abandonné.

Rythme vertical fluide au lieu des sept `py-20` identiques :
`padding-block: clamp(3rem, 6vw, 6rem)`.

Séparateurs : un filet d'un pixel en `--bord`, jamais une bande pleine largeur
à chaque section.

**Les sections de parcours et de projets adoptent la colonne de notes.** Une
colonne étroite à gauche, en police monospace, porte la période, le lieu et la
référence. Le corps occupe la colonne large. En dessous de 768 pixels, la
colonne de notes passe au-dessus du corps. C'est ce dispositif qui distingue la
page d'un gabarit, et il ne coûte aucun effet.

Grilles : ajouter le palier `xl` manquant. Aujourd'hui aucune grille ne dépasse
trois colonnes, ce qui donne des cartes de 450 pixels presque vides sur grand
écran.

## 6. Composants

**Cartes.** Bordure d'un pixel en `--bord`, rayon de 6 pixels, fond `--surface`,
**aucune ombre, aucun flou**. Au survol, seule la couleur de la bordure change.
Les neuf cartes de la page partagent aujourd'hui exactement la même recette, ce
qui supprime toute hiérarchie : les projets mis en avant reçoivent désormais un
traitement distinct, en pleine largeur avec colonne de notes, tandis que les
autres restent en grille.

**Boutons.** Un seul rayon, 6 pixels, aligné sur les cartes. Aujourd'hui quatre
rayons différents cohabitent sans règle. Le bandeau d'accueil passe de quatre
boutons de grande taille à un bouton principal et un lien secondaire.

**Liens.** Soulignement avec `text-underline-offset: 0.2em`, couleur `--accent`.
Un lien se reconnaît sans survol.

**Focus clavier.** `outline: 2px solid var(--accent); outline-offset: 2px` sur
tout élément interactif, y compris le bouton du logo qui ne reçoit aujourd'hui
que le contour natif d'un pixel.

**Statuts.** Trois couleurs seulement, celles définies plus haut, en texte sur
fond transparent avec un filet, jamais en pastille pleine.

## 7. Mouvement

Une seule animation autorisée dans toute la page : une apparition en opacité de
200 millisecondes, déclenchée par `IntersectionObserver` quand l'élément entre
réellement dans le champ. Aujourd'hui les treize animations se jouent au montage
du composant, donc les cartes du bas ont fini d'apparaître avant d'être vues.

Aucun délai en cascade. Aucune animation infinie.

Garde obligatoire, absente aujourd'hui :

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 8. Images et icônes

Les quatre logos d'établissement et les drapeaux en SVG existent dans le dépôt
et ne sont pas servis : le champ `logo` de la frise est renseigné puis jamais
lu, et l'affichage montre un emoji à la place. Servir les vrais fichiers.

Icônes : conserver `lucide-react`, qui est correctement élagué, mais supprimer
les icônes qui ne font que répéter le mot à côté d'elles. Le bouclier devant
« SIEM », le nuage devant « Cloud » et la cible devant « Objectifs » n'ajoutent
rien.

Toute image porte `width`, `height` et `loading="lazy"` hors du premier écran.
Les badges de certification pèsent 416 kilooctets pour un rendu à 48 pixels :
les recompresser.

## 9. Ce qui doit se voir au premier écran

Cinq faits, pas davantage, et sans occuper toute la hauteur de la fenêtre :

1. le nom
2. l'intitulé : ingénieur sécurité et cloud, orienté sécurité Azure
3. le diplôme et son état réel
4. la disponibilité : CDI ou CDD maintenant, alternance à partir de
   septembre 2027
5. le lien de téléchargement du CV, avec sa date de mise à jour visible

Le bandeau d'accueil occupe aujourd'hui un plein écran pour afficher ces cinq
informations, entourées de quatre couches décoratives. Il doit tenir en deux
tiers de hauteur au maximum, sans `min-h-screen`.

## 10. Amendements du 21 octobre 2026, deuxieme passe

La premiere passe a produit une page juste mais plate. Le proprietaire demande
de la hierarchie et du mouvement, sans revenir sur la sobriete. Les interdits
du point 2 restent entiers : aucune lueur, aucun degrade, aucune ombre portee,
aucune animation infinie, aucune cascade de delais.

Trois points du document sont amendes, et seulement ces trois.

**a. Le flou de la barre du haut.** Le point 2 interdit `backdrop-blur` « sur
un fond opaque, c'est-a-dire partout ici ». La barre devient une ile flottante
posee au-dessus du contenu : il y a desormais reellement quelque chose derriere
elle, et le flou y est autorise, a cet endroit et nulle part ailleurs. Le fond
reste translucide a 0,88, valeur calculee et non choisie : dans le pire des cas
composes, le texte de l'ile reste au-dessus de 4,5 dans les deux themes.

**b. L'apparition des blocs.** Le point 7 n'autorisait qu'une variation
d'opacite. L'apparition conserve ses deux cents millisecondes, sans delai et
sans cascade, mais s'accompagne d'une translation de six pixels. C'est un
deplacement, pas un effet, et il s'arrete entierement sous
`prefers-reduced-motion`.

**c. Les dependances des dossiers deplies.** Le point 7 parlait d'une seule
animation. S'y ajoute l'ouverture des blocs replies, en hauteur, sur deux cent
vingt millisecondes. Elle est declenchee par le visiteur, jamais par la page.

Le point 8 est precise, non amende : les logos d'etablissement ne sont plus
poses sur une plaque blanche. Le traitement est decide fichier par fichier dans
`src/lib/logos.ts`, et chacun est verifie sur les deux themes.
