

# 🛡️ Plan de création du Portfolio Cybersécurité - Sunnoogo Caleb Tapsoba

## Vision globale
Un portfolio professionnel sobre et premium positionné **Blue Team / Cloud Security**, avec une navigation fluide, un système multilingue intelligent FR/EN sans rechargement, et un mode sombre par défaut.

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation sticky avec scroll spy
│   │   ├── Footer.tsx          # Footer avec copyright
│   │   └── ThemeToggle.tsx     # Switch dark/light mode
│   ├── sections/
│   │   ├── Hero.tsx            # Section d'accueil avec photo et CTA
│   │   ├── About.tsx           # Section À propos / Objectifs
│   │   ├── Skills.tsx          # Compétences catégorisées
│   │   ├── Projects.tsx        # Projets avec filtres améliorés
│   │   ├── Timeline.tsx        # Parcours académique/professionnel
│   │   ├── Certifications.tsx  # Certifications avec badges et filtres
│   │   ├── Publications.tsx    # Posts LinkedIn embedded
│   │   └── Contact.tsx         # Formulaire + réseaux sociaux
│   └── ui/                     # Composants réutilisables (existants)
├── contexts/
│   └── LanguageContext.tsx     # Contexte pour la gestion FR/EN
├── data/
│   ├── projects.ts             # Données des projets (JSON typé)
│   ├── certifications.ts       # Données des certifications
│   ├── timeline.ts             # Données du parcours
│   └── translations.ts         # Traductions FR/EN complètes
├── hooks/
│   └── useScrollSpy.ts         # Hook pour scroll spy navigation
└── pages/
    └── Index.tsx               # Page principale du portfolio
```

---

## 🎨 Sections du portfolio

### 1. Header & Navigation
- Navigation sticky avec fond semi-transparent au scroll
- Scroll spy qui surligne la section active
- Switch de langue FR/EN (détection auto + choix manuel)
- Toggle dark/light mode
- Logo/nom cliquable pour retour en haut

### 2. Hero Section
- Photo de profil avec effet glow subtil
- Nom : **Sunnoogo** — Portfolio Cybersécurité
- Tagline : Étudiant dernière année EFREI Paris (Cybersécurité & Cloud)
- Badge animé : "Objectif Stage de fin d'études — Mars 2026"
- Boutons CTA : Explorer les projets / Parcours / Certifications / Contact
- Bouton téléchargement CV (FR et EN selon langue)

### 3. À propos
- Vue compacte avec informations clés
- Vue étendue avec objectifs détaillés
- Domaines de compétence : SOC Analyst, Blue Team, Cloud Security, IAM/AD, GRC
- Animation fade-in au scroll

### 4. Compétences (nouvelle section)
- Catégories : SIEM & Monitoring, Réseau & Firewall, Cloud & IAM, Développement Sécurisé
- Badges avec icônes pour chaque technologie
- Grid responsive avec hover effects subtils

### 5. Projets
- **Filtres améliorés** avec compteurs : Passés (12) | En cours (2) | Futurs (18) | Tous
- Cartes avec :
  - Titre et badge de statut coloré
  - Description concise
  - Tags technologiques avec badges visuels
  - Lien GitHub avec icône
- Animation d'apparition au scroll
- Maximum 6 projets affichés avec "Voir plus"

### 6. Timeline - Parcours
- Timeline verticale interactive avec points lumineux
- Étapes : INP-HB → Staffordshire → EFREI → Ecobank
- Logos des institutions + drapeaux des pays
- Sections dépliables pour les détails
- Highlight de l'expérience la plus récente

### 7. Certifications
- **Filtres avec badges** : Obtenues ✓ | En cours 🔄 | Objectifs 🎯 | Toutes
- Cartes avec :
  - Badge/logo de la certification
  - Titre et organisme
  - Période et statut visuel
  - Tags de compétences
  - Détails dépliables
- Liens vers les certificats (si disponibles)

### 8. Publications LinkedIn
- Grid de posts LinkedIn embedded
- Liens vers les publications originales

### 9. Contact
- Formulaire de contact (Formspree intégré)
- Liens sociaux avec icônes animées :
  - GitHub (@Sunnoogo77)
  - LinkedIn (sunnoogo-caleb-tapsoba)
  - X (@SunnoogoCal)
  - Instagram (@sunnoogo_caleb)

### 10. Footer
- Copyright dynamique avec année
- Liens rapides

---

## 🌍 Système multilingue

### Détection automatique
1. Vérifie la langue du navigateur (`navigator.language`)
2. Si FR → affiche le contenu français
3. Sinon → affiche le contenu anglais (par défaut)
4. Mémorise le choix de l'utilisateur en localStorage

### Fichier de traductions structuré
```typescript
// Exemple de structure
translations = {
  fr: {
    hero: { title: "Portfolio Cybersécurité", cta: "Explorer les projets" },
    projects: { title: "Projets", filter: { past: "Passés", current: "En cours", future: "Futurs" } },
    // ...
  },
  en: {
    hero: { title: "Cybersecurity Portfolio", cta: "Explore projects" },
    projects: { title: "Projects", filter: { past: "Past", current: "Current", future: "Future" } },
    // ...
  }
}
```

---

## 🌗 Dark/Light Mode

- **Dark par défaut** (respecte la préférence système)
- Persistance en localStorage
- Palette de couleurs :
  - Dark : fond slate-950, texte slate-100, accent cyan-500
  - Light : fond slate-50, texte slate-900, accent cyan-700
- Transition fluide entre les modes

---

## ✨ Animations & Interactions

- **Scroll animations** : éléments qui apparaissent avec fade-in/slide-up
- **Hover effects** : cartes avec élévation subtile et bordure accent
- **Scroll spy** : navigation qui suit la section visible
- **Smooth scroll** : navigation fluide entre sections
- **Transitions** : tous les changements d'état sont animés (0.2-0.3s)

---

## 📱 Responsive Design

- **Mobile** (< 640px) : navigation hamburger, colonnes empilées, typographie adaptée
- **Tablette** (640-1024px) : grille 2 colonnes, navigation visible
- **Desktop** (> 1024px) : grille 3-4 colonnes, mise en page complète

---

## ♿ Accessibilité

- Contrastes conformes WCAG AA
- Navigation au clavier complète
- Attributs aria-label sur tous les éléments interactifs
- Focus visible sur tous les éléments focusables
- Structure de titres sémantique (h1 → h2 → h3)

---

## 📦 Livrables techniques

1. **Code React/TypeScript** avec composants modulaires
2. **Système de gestion des données** centralisé (projets, certifs, traductions)
3. **README documenté** expliquant :
   - Comment modifier le contenu (ajouter un projet, une certification)
   - Comment gérer les langues
   - Comment personnaliser le thème
4. **Placeholders** pour les images à remplacer ultérieurement

---

## 🚀 Résultat attendu

Un portfolio **prêt à déployer**, professionnel et crédible pour des recruteurs SOC / Blue Team / Cloud Security, avec :
- Design sobre et premium
- Expérience utilisateur fluide
- Code maintenable et extensible
- Contenu 100% fidèle à vos fichiers HTML source

