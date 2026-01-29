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
    
    // Hero
    'hero.title': 'Portfolio Cybersécurité',
    'hero.subtitle': 'Étudiant en dernière année à l\'EFREI Paris (Cybersécurité & Cloud), orienté Blue Team et sécurité des environnements hybrides.',
    'hero.badge': 'Objectif : Stage de fin d\'études — à partir de mars 2026',
    'hero.downloadCV': 'Télécharger le CV',
    'hero.cta.projects': 'Explorer les projets',
    'hero.cta.timeline': 'Parcours académique',
    'hero.cta.certifications': 'Licences & Certifications',
    'hero.cta.contact': 'Me contacter',
    
    // About
    'about.title': 'À propos',
    'about.expand': 'Voir plus',
    'about.collapse': 'Réduire',
    'about.p1': 'Étudiant ingénieur en dernière année à l\'EFREI Paris, spécialisé en Cybersécurité & Cloud, je me prépare à devenir ingénieur sécurité cloud et systèmes d\'information capable de concevoir, sécuriser et défendre des environnements hybrides complexes.',
    'about.p2': 'Passionné par la technologie et la rigueur de la Blue Team, je m\'intéresse particulièrement à la sécurité des infrastructures cloud (Azure), à l\'intégration DevSecOps et au déploiement d\'architectures résilientes. Je développe progressivement une expertise en monitoring (SIEM/EDR), gestion des identités (IAM, Entra ID, PKI) et automatisation de la sécurité avec des outils cloud et open-source.',
    'about.p3': 'Mon parcours académique et professionnel est international : originaire du Burkina Faso, j\'ai étudié en Côte d\'Ivoire, en France et en Angleterre, et j\'ai effectué un stage en cybersécurité bancaire au Ghana. Ces expériences m\'ont apporté une vision globale des enjeux de sécurité numérique, une maîtrise du français et de l\'anglais, et une forte adaptabilité à des environnements variés.',
    'about.p4': 'Curieux et proactif, je développe mes compétences à travers des projets pratiques : infrastructure Active Directory & PKI, SIEM (Wazuh, Sentinel), HIDS/EDR, chiffrement et authentification multi-facteurs, et déploiements sécurisés sur Azure via DevOps et Kubernetes. Mon objectif est de combiner défense, cloud et automatisation pour construire des solutions fiables et intelligentes.',
    'about.p5': 'Au-delà du domaine technique, je m\'épanouis à travers le basketball (esprit d\'équipe, réactivité) et le piano (discipline, créativité), deux activités qui renforcent ma persévérance et ma concentration.',
    'about.p6': 'Mon ambition est de devenir un expert en cybersécurité cloud à la croisée de la défense des systèmes et de l\'ingénierie cloud, contribuant à la sécurité, à la résilience et à l\'innovation des infrastructures numériques.',
    
    // Objectives
    'objectives.title': 'Objectifs 2025–2026',
    'objectives.internship.title': 'Stage de fin d\'études',
    'objectives.internship.desc': 'Objectif principal : compléter le stage de fin d\'études à partir de mars 2026, conformément à mon programme.',
    'objectives.consolidation.title': 'Renforcer les fondamentaux',
    'objectives.consolidation.desc': 'Approfondir le réseau, Active Directory, Linux/Bash, scripting (Python), SIEM/EDR et investigations (logs/malware/forensics). Automatiser la détection et réponse (SOAR) et construire des pipelines CI/CD pour les règles SIEM.',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.siem': 'SIEM & Monitoring',
    'skills.network': 'Réseau & Firewall',
    'skills.cloud': 'Cloud & IAM',
    'skills.dev': 'Développement Sécurisé',
    
    // Projects
    'projects.title': 'Projets',
    'projects.filter': 'Filtrer :',
    'projects.filter.past': 'Passés',
    'projects.filter.current': 'En cours',
    'projects.filter.future': 'À venir',
    'projects.filter.all': 'Tous',
    'projects.viewProject': 'Voir le projet →',
    'projects.noProjects': 'Aucun projet pour ce filtre.',
    'projects.showMore': 'Voir plus',
    'projects.showLess': 'Voir moins',
    
    // Timeline
    'timeline.title': 'Parcours académique',
    'timeline.learnMore': 'En savoir plus →',
    
    // Certifications
    'certifications.title': 'Licences & Certifications',
    'certifications.filter.obtained': 'Obtenues',
    'certifications.filter.inProgress': 'En cours',
    'certifications.filter.future': 'Objectifs',
    'certifications.filter.all': 'Toutes',
    'certifications.learnMore': 'En savoir plus →',
    'certifications.viewCert': 'Voir le certificat →',
    'certifications.details': 'Détails',
    'certifications.noCerts': 'Aucune certification pour ce filtre.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour toute opportunité ou question.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    
    // Theme
    'theme.light': 'Activer le mode clair',
    'theme.dark': 'Activer le mode sombre',
    
    // Status labels
    'status.past': 'Passé',
    'status.current': 'En cours',
    'status.future': 'À venir',
    'status.obtained': 'Obtenue',
    'status.inProgress': 'En cours',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.timeline': 'Journey',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Cybersecurity Portfolio',
    'hero.subtitle': 'Final-year engineering student at EFREI Paris (Cybersecurity & Cloud), focused on Blue Team and securing hybrid environments.',
    'hero.badge': 'Objective: Final-year internship — from March 2026',
    'hero.downloadCV': 'Download CV',
    'hero.cta.projects': 'Explore projects',
    'hero.cta.timeline': 'Academic journey',
    'hero.cta.certifications': 'Licenses & Certifications',
    'hero.cta.contact': 'Contact me',
    
    // About
    'about.title': 'About',
    'about.expand': 'See more',
    'about.collapse': 'Collapse',
    'about.p1': 'Final-year engineering student at EFREI Paris, specialising in Cybersecurity & Cloud, preparing to become a cloud and information systems security engineer able to design, secure and defend complex hybrid environments.',
    'about.p2': 'Driven by technology and the rigour of the Blue Team, I am particularly interested in cloud infrastructure security (Azure), DevSecOps integration and deploying resilient architectures. I am building solid expertise across monitoring (SIEM/EDR), identity management (IAM, Entra ID, PKI) and security automation using cloud and open-source tooling.',
    'about.p3': 'My academic and professional path is international: originally from Burkina Faso, I studied in Côte d\'Ivoire, France and England, and completed a banking cybersecurity internship in Ghana. These experiences gave me a global view of digital security challenges, fluency in French and English, and strong adaptability to diverse environments.',
    'about.p4': 'Curious and proactive, I develop my skills through hands-on projects: Active Directory & PKI infrastructure, SIEM (Wazuh, Sentinel), HIDS/EDR, encryption and multi-factor authentication, and secure deployments on Azure via DevOps and Kubernetes. My goal is to combine defence, cloud and automation to build reliable, intelligent solutions.',
    'about.p5': 'Beyond the technical field, I thrive through basketball (team spirit, responsiveness) and piano (discipline, creativity), two activities that strengthen my perseverance and focus.',
    'about.p6': 'My ambition is to become a cloud cybersecurity expert at the crossroads of systems defence and cloud engineering, contributing to the security, resilience and innovation of digital infrastructures.',
    
    // Objectives
    'objectives.title': 'Goals 2025–2026',
    'objectives.internship.title': 'Final-year internship',
    'objectives.internship.desc': 'Primary objective: complete the final-year internship starting March 2026, in line with my programme.',
    'objectives.consolidation.title': 'Strengthen the fundamentals',
    'objectives.consolidation.desc': 'Deepen networking, Active Directory, Linux/Bash, scripting (Python), SIEM/EDR and investigations (logs/malware/forensics). Automate detection & response (SOAR) and build CI/CD pipelines for SIEM rules.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.siem': 'SIEM & Monitoring',
    'skills.network': 'Network & Firewall',
    'skills.cloud': 'Cloud & IAM',
    'skills.dev': 'Secure Development',
    
    // Projects
    'projects.title': 'Projects',
    'projects.filter': 'Filter:',
    'projects.filter.past': 'Past',
    'projects.filter.current': 'Current',
    'projects.filter.future': 'Future',
    'projects.filter.all': 'All',
    'projects.viewProject': 'View project →',
    'projects.noProjects': 'No projects for this filter.',
    'projects.showMore': 'Show more',
    'projects.showLess': 'Show less',
    
    // Timeline
    'timeline.title': 'Academic Journey',
    'timeline.learnMore': 'Learn more →',
    
    // Certifications
    'certifications.title': 'Licenses & Certifications',
    'certifications.filter.obtained': 'Obtained',
    'certifications.filter.inProgress': 'In Progress',
    'certifications.filter.future': 'Objectives',
    'certifications.filter.all': 'All',
    'certifications.learnMore': 'Learn more →',
    'certifications.viewCert': 'View certificate →',
    'certifications.details': 'Details',
    'certifications.noCerts': 'No certifications for this filter.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Feel free to reach out for any opportunity or question.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Theme
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    
    // Status labels
    'status.past': 'Past',
    'status.current': 'Current',
    'status.future': 'Future',
    'status.obtained': 'Obtained',
    'status.inProgress': 'In Progress',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem('portfolio-language') as Language | null;
    if (stored && (stored === 'fr' || stored === 'en')) {
      setLanguageState(stored);
      return;
    }

    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      setLanguageState('fr');
    } else {
      setLanguageState('en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
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
