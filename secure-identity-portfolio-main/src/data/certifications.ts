export type CertificationStatus = 'obtained' | 'in-progress' | 'future';

export interface Certification {
  id: string;
  title: string;
  status: CertificationStatus;
  year: string;
  badge: string; // placeholder path
  description: {
    fr: string;
    en: string;
  };
  tags: string[];
  details: {
    fr: string[];
    en: string[];
  };
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cisco-intro',
    title: 'Cisco Introduction to Cybersecurity',
    status: 'obtained',
    year: '2022',
    badge: '/placeholder.svg',
    description: {
      fr: 'Introduction aux concepts clés de la cybersécurité, menaces et mesures défensives fondamentales.',
      en: 'Introduction to key cybersecurity concepts, threats and foundational defensive measures.',
    },
    tags: ['Cybersecurity', 'Awareness', 'Cisco'],
    details: {
      fr: [
        'Aperçu des menaces actuelles',
        'Principes fondamentaux de défense',
        'Sensibilisation aux enjeux de sécurité',
      ],
      en: [
        'Overview of current threats',
        'Foundational defence principles',
        'Raising awareness of security issues',
      ],
    },
    link: '#',
  },
  {
    id: 'cisco-essentials',
    title: 'Cisco Cybersecurity Essentials',
    status: 'obtained',
    year: '2023',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification couvrant les fondamentaux de la cybersécurité, l\'architecture réseau et la protection des systèmes.',
      en: 'Certification covering cybersecurity fundamentals, network architecture and system protection.',
    },
    tags: ['Networking', 'Security', 'Fundamentals'],
    details: {
      fr: [
        'Architecture réseau et principes de sécurité',
        'Sécurité des systèmes d\'exploitation',
        'Gestion des menaces',
      ],
      en: [
        'Network architecture and security principles',
        'Operating system security',
        'Threat management',
      ],
    },
    link: '#',
  },
  {
    id: 'toeic',
    title: 'TOEIC – Test of English for International Communication',
    status: 'obtained',
    year: '2024',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification internationale validant le niveau d\'anglais (Listening & Reading).',
      en: 'International certification validating English proficiency (Listening & Reading).',
    },
    tags: ['English', 'Listening', 'Reading', 'ESL'],
    details: {
      fr: [
        'Listening: 490 / 495',
        'Reading: 445 / 495',
        'Total: 935 / 990',
      ],
      en: [
        'Listening: 490 / 495',
        'Reading: 445 / 495',
        'Total: 935 / 990',
      ],
    },
    link: '#',
  },
  {
    id: 'az-900',
    title: 'Microsoft AZ-900 — Azure Fundamentals',
    status: 'in-progress',
    year: '2025',
    badge: '/placeholder.svg',
    description: {
      fr: 'Fondamentaux Azure : concepts cloud, sécurité et conformité.',
      en: 'Azure fundamentals: cloud concepts, security and compliance.',
    },
    tags: ['Azure', 'Cloud', 'Fundamentals'],
    details: {
      fr: [
        'Concepts fondamentaux du cloud computing',
        'Sécurité et conformité dans Azure',
        'Services Azure principaux',
      ],
      en: [
        'Core cloud computing concepts',
        'Security and compliance in Azure',
        'Core Azure services',
      ],
    },
  },
  {
    id: 'az-800',
    title: 'Microsoft AZ-800 — Windows Server Hybrid Core',
    status: 'in-progress',
    year: '2025',
    badge: '/placeholder.svg',
    description: {
      fr: 'Administration hybride Windows Server, Active Directory et gestion des identités.',
      en: 'Hybrid Windows Server administration, Active Directory and identity management.',
    },
    tags: ['Active Directory', 'Windows Server', 'Hybrid Cloud'],
    details: {
      fr: [
        'Gestion des identités et des accès',
        'Services Windows Server hybrides',
        'Sécurité et monitoring',
      ],
      en: [
        'Identity and access management',
        'Hybrid Windows Server services',
        'Security and monitoring',
      ],
    },
  },
  {
    id: 'sc-900',
    title: 'Microsoft SC-900 — Security, Compliance & Identity',
    status: 'in-progress',
    year: '2025',
    badge: '/placeholder.svg',
    description: {
      fr: 'Concepts fondamentaux de sécurité, conformité et identité Microsoft.',
      en: 'Fundamental Microsoft security, compliance and identity concepts.',
    },
    tags: ['Security', 'Compliance', 'Identity'],
    details: {
      fr: [
        'Concepts de sécurité et conformité',
        'Gestion des identités Microsoft',
        'Principes Zero Trust',
      ],
      en: [
        'Security and compliance concepts',
        'Managing identities in Microsoft',
        'Zero Trust principles',
      ],
    },
  },
  {
    id: 'sal1',
    title: 'SOC Analyst Level 1 (SAL1)',
    status: 'future',
    year: '2025',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification orientée Blue Team validant les compétences fondamentales d\'analyste SOC.',
      en: 'Blue Team oriented certification validating foundational SOC analyst skills.',
    },
    tags: ['SOC', 'Blue Team', 'Logs', 'Detection'],
    details: {
      fr: [
        'Analyse et investigation des alertes',
        'Gestion et corrélation des logs',
        'Introduction aux outils SIEM',
        'Fondamentaux du threat hunting',
      ],
      en: [
        'Alert analysis and investigation',
        'Log management and correlation',
        'Introduction to SIEM tools',
        'Threat hunting fundamentals',
      ],
    },
  },
  {
    id: 'aws-clf',
    title: 'AWS Certified Cloud Practitioner (CLF-C01)',
    status: 'future',
    year: '2025',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification d\'entrée validant la compréhension des concepts et services cloud AWS.',
      en: 'Entry-level certification validating understanding of AWS cloud concepts and services.',
    },
    tags: ['AWS', 'Cloud', 'Fundamentals'],
    details: {
      fr: [
        'Concepts fondamentaux du cloud AWS',
        'Architecture et sécurité',
        'Services principaux (EC2, S3, IAM)',
        'Facturation et support',
      ],
      en: [
        'Core AWS cloud concepts',
        'Architecture and security',
        'Core services (EC2, S3, IAM)',
        'Billing and support',
      ],
    },
  },
  {
    id: 'security-plus',
    title: 'CompTIA Security+',
    status: 'future',
    year: '2026',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification cybersécurité globale couvrant menaces, attaques et défenses.',
      en: 'Global cybersecurity certification covering threats, attacks and defences.',
    },
    tags: ['Security', 'Network', 'Threats'],
    details: {
      fr: [
        'Cryptographie et sécurité réseau',
        'Gestion des menaces',
        'Analyse et réponse aux incidents',
      ],
      en: [
        'Cryptography and network security',
        'Threat management',
        'Incident analysis and response',
      ],
    },
  },
  {
    id: 'network-plus',
    title: 'CompTIA Network+',
    status: 'future',
    year: '2026',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification fondamentaux réseau : routing, switching et sécurité de base.',
      en: 'Networking fundamentals certification: routing, switching and baseline security.',
    },
    tags: ['Networking', 'TCP/IP', 'Routing', 'Switching'],
    details: {
      fr: [
        'Protocoles et topologies réseau',
        'IPv4 / IPv6, TCP/UDP',
        'Sécurité réseau de base',
        'Dépannage réseau',
      ],
      en: [
        'Network protocols and topologies',
        'IPv4 / IPv6, TCP/UDP',
        'Baseline network security',
        'Network troubleshooting',
      ],
    },
  },
  {
    id: 'ccna',
    title: 'Cisco CCNA — Cisco Certified Network Associate',
    status: 'future',
    year: '2026',
    badge: '/placeholder.svg',
    description: {
      fr: 'Certification mondialement reconnue validant les compétences réseau fondamentales.',
      en: 'World-renowned certification validating core networking skills.',
    },
    tags: ['Cisco', 'Networking', 'Routing', 'Switching'],
    details: {
      fr: [
        'Architectures et modèles réseau',
        'Routing et switching',
        'Sécurité réseau de base',
        'Services IP',
      ],
      en: [
        'Network architectures and models',
        'Routing and switching',
        'Baseline network security',
        'IP services',
      ],
    },
  },
  {
    id: 'sc-200',
    title: 'Microsoft SC-200 — Security Operations Analyst',
    status: 'future',
    year: '2026',
    badge: '/placeholder.svg',
    description: {
      fr: 'Spécialisation en détection, investigation et réponse aux incidents avec Microsoft Sentinel & Defender.',
      en: 'Specialisation in detection, investigation and incident response with Microsoft Sentinel & Defender.',
    },
    tags: ['SOC', 'Sentinel', 'Incident Response'],
    details: {
      fr: [
        'Configuration de Microsoft Sentinel',
        'Analyse et corrélation des logs',
        'Réponse aux incidents avancée',
      ],
      en: [
        'Configuring Microsoft Sentinel',
        'Log analysis and correlation',
        'Advanced incident response',
      ],
    },
  },
];

export function getCertificationsByStatus(status: CertificationStatus): Certification[] {
  return certifications.filter(c => c.status === status);
}

export function getCertificationCounts(): Record<CertificationStatus | 'all', number> {
  return {
    obtained: certifications.filter(c => c.status === 'obtained').length,
    'in-progress': certifications.filter(c => c.status === 'in-progress').length,
    future: certifications.filter(c => c.status === 'future').length,
    all: certifications.length,
  };
}
