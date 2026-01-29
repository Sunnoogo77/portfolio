export interface TimelineEntry {
  id: string;
  period: string;
  title: {
    fr: string;
    en: string;
  };
  subtitle: {
    fr: string;
    en: string;
  };
  location: string;
  flag: string; // country code or emoji
  logo: string; // placeholder path
  description: {
    fr: string;
    en: string;
  };
  highlights: {
    fr: string[];
    en: string[];
  };
  isCurrent?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'inphb',
    period: '2021–2023',
    title: {
      fr: 'INP-HB (MPSI → MP*) — Classes préparatoires',
      en: 'INP-HB (MPSI → MP*) — Preparatory classes',
    },
    subtitle: {
      fr: 'Discipline & persévérance',
      en: 'Discipline & perseverance',
    },
    location: 'Yamoussoukro, Côte d\'Ivoire',
    flag: '🇨🇮',
    logo: '/placeholder.svg',
    description: {
      fr: 'Deux années intensives en mathématiques, physique et informatique avec préparation rigoureuse aux concours nationaux.',
      en: 'Two intensive years in mathematics, physics and computer science with rigorous preparation for national competitive exams.',
    },
    highlights: {
      fr: [
        'MPSI (Mathématiques, Physique et Sciences de l\'Ingénieur).',
        'MP* (Mathématiques, Physique & Informatique avancées) — filière sélective.',
        'Rigueur académique, esprit analytique et persévérance.',
      ],
      en: [
        'MPSI (Mathematics, Physics and Engineering Sciences).',
        'MP* (Advanced Mathematics, Physics & Computer Science) — selective track.',
        'Academic rigour, analytical mindset and perseverance.',
      ],
    },
  },
  {
    id: 'staffordshire',
    period: 'Jan–Mai 2024',
    title: {
      fr: 'Staffordshire University (UK) — Semestre d\'échange',
      en: 'Staffordshire University (UK) — Exchange semester',
    },
    subtitle: {
      fr: 'Immersion linguistique',
      en: 'Language immersion',
    },
    location: 'Stoke-on-Trent, England',
    flag: '🇬🇧',
    logo: '/placeholder.svg',
    description: {
      fr: 'Semestre en Angleterre : cours en anglais, vie étudiante, projet web encadré, exposition culturelle et basketball.',
      en: 'Semester in England (Stoke-on-Trent): courses in English, student life, mentored web project, cultural exposure and basketball.',
    },
    highlights: {
      fr: [
        'Progrès significatifs en anglais technique et académique.',
        'Projet web en équipe avec encadrement académique proche.',
        'Expérience multiculturelle enrichissante.',
      ],
      en: [
        'Significant progress in technical and academic English.',
        'Team web project with close academic mentoring.',
        'Enriching multicultural experience.',
      ],
    },
  },
  {
    id: 'efrei',
    period: '2023–Présent',
    title: {
      fr: 'EFREI Paris — Ingénierie',
      en: 'EFREI Paris — Engineering',
    },
    subtitle: {
      fr: 'Spécialisation Cyber & Cloud',
      en: 'Cyber & Cloud specialisation',
    },
    location: 'Villejuif, France',
    flag: '🇫🇷',
    logo: '/placeholder.svg',
    description: {
      fr: 'Programme d\'ingénierie informatique suivi d\'une spécialisation Cybersécurité & Cloud au niveau master.',
      en: 'Computer engineering programme followed by a Cybersecurity & Cloud specialisation at master level.',
    },
    highlights: {
      fr: [
        'Spécialisation Cybersécurité & Cloud.',
        'Projets concrets en gestion AD, PKI, DevSecOps et SIEM.',
        'Développement d\'une expertise Blue Team et Cloud Security.',
      ],
      en: [
        'Cybersecurity & Cloud specialisation.',
        'Hands-on projects in AD management, PKI, DevSecOps and SIEM.',
        'Building Blue Team and Cloud Security expertise.',
      ],
    },
    isCurrent: true,
  },
  {
    id: 'ecobank',
    period: 'Déc 2024–Mars 2025',
    title: {
      fr: 'Ecobank — Stage Cybersécurité Bancaire',
      en: 'Ecobank — Banking Cybersecurity Internship',
    },
    subtitle: {
      fr: 'Expérience professionnelle',
      en: 'Professional experience',
    },
    location: 'Accra, Ghana',
    flag: '🇬🇭',
    logo: '/placeholder.svg',
    description: {
      fr: 'Stage en cybersécurité dans le secteur bancaire : audit, conformité, gestion des accès et sensibilisation.',
      en: 'Cybersecurity internship in the banking sector: audit, compliance, access management and awareness.',
    },
    highlights: {
      fr: [
        'Audit de sécurité et analyse de conformité.',
        'Gestion des accès et revue des privilèges.',
        'Sensibilisation à la sécurité des employés.',
        'Exposition à un environnement international.',
      ],
      en: [
        'Security audit and compliance analysis.',
        'Access management and privilege review.',
        'Employee security awareness training.',
        'Exposure to an international environment.',
      ],
    },
    isCurrent: true,
  },
];
