import type { Config } from "tailwindcss";

/**
 * Le conteneur de Tailwind est abandonne : son reglage `container.screens`
 * fixe a `2xl: 1400px` supprimait toute largeur maximale en dessous de
 * 1536 pixels, ce qui affichait le site en pleine largeur sur un portable de
 * 1440 pixels et faisait sauter la mise en page de 1503 a 1400 pixels d'un
 * coup. La classe `.conteneur` de src/index.css le remplace.
 *
 * Les couleurs ne sont declarees qu'une fois : les jetons de
 * docs/SPEC-DESIGN.md sont la seule source, les noms anglais hérités de
 * shadcn/ui pointent dessus. L'echelle `brand-50` a `brand-900` et les seize
 * jetons de barre laterale ont disparu, plus rien ne les consommait.
 */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      screens: {
        // La navigation tient en clair des 900 pixels : elle ne basculait en
        // menu hamburger qu'a 1024, alors que la place existait.
        tablette: "900px",
      },
      colors: {
        fond: "hsl(var(--fond))",
        background: "hsl(var(--fond))",
        foreground: "hsl(var(--texte))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
        },
        card: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--texte))",
        },
        popover: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--texte))",
        },
        muted: {
          DEFAULT: "hsl(var(--surface-2))",
          foreground: "hsl(var(--texte-doux))",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface-2))",
          foreground: "hsl(var(--texte))",
        },
        border: "hsl(var(--bord))",
        input: "hsl(var(--bord))",
        ring: "hsl(var(--accent))",
        // Fond de bouton et texte sur ce fond.
        primary: {
          DEFAULT: "hsl(var(--accent-fond))",
          foreground: "hsl(var(--sur-accent))",
        },
        // Accent de texte : liens et etat actif. Distinct du fond de bouton,
        // parce qu'une seule valeur ne peut pas servir les deux themes.
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--sur-accent))",
        },
        statut: {
          livre: "hsl(var(--statut-livre))",
          encours: "hsl(var(--statut-encours))",
          prevu: "hsl(var(--statut-prevu))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
