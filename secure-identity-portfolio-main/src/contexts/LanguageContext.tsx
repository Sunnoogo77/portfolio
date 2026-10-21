import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.timeline': 'Parcours',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.toggleMenu': 'Ouvrir ou fermer le menu',
    
    // Hero
    'hero.title': 'Portfolio Cybersécurité',
    'hero.subtitle': 'Ingénieur sécurité et cloud, orienté sécurité Azure. Diplôme d\'ingénieur EFREI Paris en systèmes, réseaux, cloud et cybersécurité, cursus achevé en 2026, jury de délibération en novembre.',
    'hero.downloadCV': 'Télécharger le CV, en français',
    'hero.cv.cdi': 'CV — CDI ou CDD',
    'hero.cv.alternance': 'CV — alternance, septembre 2027',
    'availability.updatedOn': 'À jour au',
    'hero.cta.projects': 'Explorer les projets',
    'hero.cta.timeline': 'Parcours',
    'hero.cta.certifications': 'Licences & Certifications',
    'hero.cta.contact': 'Me contacter',
    
    // About
    'about.title': 'À propos',
    'about.p1': "Ingénieur sécurité et cloud, je suis diplômé de l'EFREI Paris en systèmes, réseaux, cloud et cybersécurité, cursus achevé en 2026 et jury de délibération en novembre. Je dirige aujourd'hui Impulsera, startup née de mon projet de fin d'études et incubée à l'EFREI, dont j'assure la responsabilité technique.",
    'about.p2': "En 2026, à Ouagadougou, j'ai mis en place un centre opérationnel de sécurité chez l'opérateur minier Soleil Resources, de l'étude au transfert à l'équipe interne : dix-sept règles de détection écrites, dont treize validées par test réel. Auparavant, chez Ecobank Ghana, j'ai travaillé la sécurité du poste de travail sous Intune et Defender et la surveillance de journaux sous Microsoft Sentinel.",
    'about.p3': "Mon parcours est international : classes préparatoires MPSI puis MP* à l'INP-HB en Côte d'Ivoire, semestre d'échange à l'University of Staffordshire au Royaume-Uni, stage en cybersécurité bancaire à Accra et mission de 2026 à Ouagadougou. Je m'oriente vers la sécurité du cloud Azure, que je prépare par les certifications AZ-104 et SC-500.",

    // Langues
    'languages.title': 'Langues',
    'languages.fr': 'Français — langue maternelle',
    'languages.en': 'Anglais — C1, TOEIC 935 sur 990',

    // Skills
    'skills.title': 'Compétences',
    'skills.usedIn': 'Mis en œuvre sur :',
    
    // Projects
    'projects.title': 'Projets',
    'projects.filter': 'Filtrer :',
    'projects.filter.featured': 'Mis en avant',
    'projects.filter.delivered': 'Réalisés',
    'projects.filter.planned': 'En préparation',
    'projects.filter.all': 'Tous',
    'projects.status.delivered': 'Livré',
    'projects.status.in-progress': 'En cours',
    'projects.status.planned': 'En préparation',
    'projects.evidence.private': 'dépôt privé',
    'projects.evidence.none': 'projet en préparation',
    'projects.planned.title': 'Projets en préparation',
    'projects.planned.intro': "Aucun travail n'est engagé sur ces projets à ce jour.",
    'projects.viewProject': 'Voir le projet',
    'projects.noProjects': 'Aucun projet pour ce filtre.',
    'projects.showMore': 'Voir plus',
    'projects.showLess': 'Voir moins',
    
    // Timeline
    'timeline.title': 'Parcours',
    'timeline.learnMore': 'En savoir plus',
    'timeline.highlights': 'Points clés',
    
    // Certifications
    'certifications.title': 'Licences & Certifications',
    'certifications.filter.obtained': 'Obtenues',
    'certifications.filter.inProgress': 'En préparation',
    'certifications.filter.planned': 'Feuille de route',
    'certifications.filter.all': 'Toutes',
    'certifications.status.obtained': 'Obtenue',
    'certifications.status.in-progress': 'En préparation',
    'certifications.status.planned': 'Feuille de route',
    'certifications.viewCert': 'Voir le certificat',
    'certifications.noCerts': 'Aucune certification pour ce filtre.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Pour un CDI ou un CDD en cybersécurité, ou une alternance à partir de septembre 2027.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.github': 'Profil GitHub',
    'footer.linkedin': 'Profil LinkedIn',
    
    // Theme
    'theme.light': 'Activer le mode clair',
    'theme.dark': 'Activer le mode sombre',
    
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.timeline': 'Journey',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.toggleMenu': 'Open or close the menu',
    
    // Hero
    'hero.title': 'Cybersecurity Portfolio',
    'hero.subtitle': 'Security and cloud engineer, focused on Azure security. Diplôme d\'ingénieur from EFREI Paris in systems, networks, cloud and cybersecurity, the French five-year engineering degree awarded at master\'s level, course completed in 2026, degree subject to the November board of examiners.',
    'hero.downloadCV': 'Download CV, French',
    // Les deux CV sont en francais et il n'en existe aucune version anglaise :
    // le libelle anglais le dit, au lieu de laisser le visiteur le decouvrir
    // apres le telechargement.
    'hero.cv.cdi': 'CV in French — permanent or fixed-term',
    'hero.cv.alternance': 'CV in French — apprenticeship, September 2027',
    'availability.updatedOn': 'Updated on',
    'hero.cta.projects': 'Explore projects',
    'hero.cta.timeline': 'Journey',
    'hero.cta.certifications': 'Licenses & Certifications',
    'hero.cta.contact': 'Contact me',
    
    // About
    'about.title': 'About',
    'about.p1': "A security and cloud engineer, I hold the Diplôme d'ingénieur from EFREI Paris in systems, networks, cloud and cybersecurity, course completed in 2026 with the board of examiners sitting in November. I now run Impulsera, a startup born out of my final-year project and incubated at EFREI, where I am the technical lead.",
    'about.p2': "In 2026, in Ouagadougou, I built a security operations centre at the mining operator Soleil Resources, from the initial study through to handover to the internal team: seventeen detection rules written, thirteen of them validated by live testing. Before that, at Ecobank Ghana, I worked on endpoint security with Intune and Defender and on log monitoring in Microsoft Sentinel.",
    'about.p3': "My path is international: MPSI then MP* preparatory classes at INP-HB in Côte d'Ivoire, an exchange semester at the University of Staffordshire in the United Kingdom, a banking cybersecurity internship in Accra and the 2026 assignment in Ouagadougou. I am moving towards Azure cloud security, which I am preparing through the AZ-104 and SC-500 certifications.",

    // Languages
    'languages.title': 'Languages',
    'languages.fr': 'French — native speaker',
    'languages.en': 'English — C1, TOEIC 935 out of 990',

    // Skills
    'skills.title': 'Skills',
    'skills.usedIn': 'Put to work on:',
    
    // Projects
    'projects.title': 'Projects',
    'projects.filter': 'Filter:',
    'projects.filter.featured': 'Featured',
    'projects.filter.delivered': 'Delivered',
    'projects.filter.planned': 'In preparation',
    'projects.filter.all': 'All',
    'projects.status.delivered': 'Delivered',
    'projects.status.in-progress': 'In progress',
    'projects.status.planned': 'In preparation',
    'projects.evidence.private': 'private repository',
    'projects.evidence.none': 'project in preparation',
    'projects.planned.title': 'Projects in preparation',
    'projects.planned.intro': 'No work has been started on these projects to date.',
    'projects.viewProject': 'View project',
    'projects.noProjects': 'No projects for this filter.',
    'projects.showMore': 'Show more',
    'projects.showLess': 'Show less',
    
    // Timeline
    'timeline.title': 'Journey',
    'timeline.learnMore': 'Learn more',
    'timeline.highlights': 'Highlights',
    
    // Certifications
    'certifications.title': 'Licenses & Certifications',
    'certifications.filter.obtained': 'Obtained',
    'certifications.filter.inProgress': 'In preparation',
    'certifications.filter.planned': 'Roadmap',
    'certifications.filter.all': 'All',
    'certifications.status.obtained': 'Obtained',
    'certifications.status.in-progress': 'In preparation',
    'certifications.status.planned': 'Roadmap',
    'certifications.viewCert': 'View certificate',
    'certifications.noCerts': 'No certifications for this filter.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'For a permanent or fixed-term cybersecurity role, or an apprenticeship from September 2027.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.github': 'GitHub profile',
    'footer.linkedin': 'LinkedIn profile',
    
    // Theme
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Langue par defaut : celle du navigateur, puis le choix memorise du visiteur.
 *
 * La detection avait deja lieu, mais apres le premier rendu : la page
 * s'affichait brievement en anglais avant de basculer. Elle est desormais
 * faite au premier rendu.
 */
function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem('portfolio-language');
    if (stored === 'fr' || stored === 'en') return stored;
  } catch {
    // Stockage indisponible : on retombe sur la langue du navigateur.
  }
  const browserLang =
    typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
  return browserLang.startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  // Tient l'attribut lang du document aligne sur la langue affichee.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio-language', lang);
    } catch {
      // Le choix ne sera pas memorise, l'affichage reste correct.
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
