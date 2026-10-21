import type { Certification } from './types';

type CertStatus = Certification['status'];

/**
 * Rebatie entierement depuis le CV : six certifications obtenues, quatre en
 * preparation, quatre en feuille de route.
 *
 * Les cinq certifications affichees sans source (SOC Analyst Level 1, AWS
 * Cloud Practitioner, CompTIA Security+, CompTIA Network+, Cisco CCNA) ont ete
 * retirees, ainsi qu'AZ-800, absente du CV.
 *
 * Les trois PDF presents dans public/assets/certificats sont rattaches. Les
 * deux certificats Cisco portent leur date d'obtention reelle, lue sur le
 * certificat lui-meme : 31 mars 2024 et 30 avril 2024.
 */
export const certifications: Certification[] = [
  // ----------------------------- Obtenues -----------------------------
  {
    id: 'sap-e2e-business-suite',
    title:
      'SAP Certified — Implementation Consultant, End-to-End Business Processes for SAP Business Suite',
    issuer: 'SAP',
    status: 'obtained',
    obtainedOn: '2026-04',
    description: {
      fr: "Certification SAP de consultant en implémentation, portant sur les processus de bout en bout de SAP Business Suite.",
      en: 'SAP certification for implementation consultants, covering end-to-end business processes for SAP Business Suite.',
    },
    tags: ['SAP', 'Business Suite'],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'sap-build-developer',
    title: 'SAP Certified — SAP Build Developer',
    issuer: 'SAP',
    status: 'obtained',
    obtainedOn: '2026-04',
    description: {
      fr: 'Certification SAP de développeur SAP Build.',
      en: 'SAP certification for SAP Build developers.',
    },
    tags: ['SAP', 'SAP Build'],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco NetAcad',
    status: 'obtained',
    obtainedOn: '2026',
    description: {
      fr: 'Parcours Cisco Networking Academy consacré aux fondamentaux des réseaux.',
      en: 'Cisco Networking Academy course covering networking fundamentals.',
    },
    tags: ['Networking', 'Cisco'],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'cisco-essentials',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco NetAcad',
    status: 'obtained',
    obtainedOn: '2024-04',
    description: {
      fr: "Certification couvrant les fondamentaux de la cybersécurité, l'architecture réseau et la protection des systèmes.",
      en: 'Certification covering cybersecurity fundamentals, network architecture and system protection.',
    },
    tags: ['Networking', 'Security', 'Fundamentals'],
    badge: '/img/certifications/cisco-essentials.png',
    evidence: {
      kind: 'certificate',
      visibility: 'public',
      url: '/assets/certificats/cisco-essentials.pdf',
    },
  },
  {
    id: 'cisco-intro',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco NetAcad',
    status: 'obtained',
    obtainedOn: '2024-03',
    description: {
      fr: 'Introduction aux concepts clés de la cybersécurité, menaces et mesures défensives fondamentales.',
      en: 'Introduction to key cybersecurity concepts, threats and foundational defensive measures.',
    },
    tags: ['Cybersecurity', 'Awareness', 'Cisco'],
    badge: '/img/certifications/cisco-intro.png',
    evidence: {
      kind: 'certificate',
      visibility: 'public',
      url: '/assets/certificats/cisco-intro.pdf',
    },
  },
  {
    id: 'toeic',
    title: 'TOEIC, 935 sur 990',
    issuer: 'ETS',
    status: 'obtained',
    obtainedOn: '2024',
    description: {
      fr: "Certification internationale validant le niveau d'anglais. Listening 490 sur 495, Reading 445 sur 495, total 935 sur 990.",
      en: 'International certification validating English proficiency. Listening 490 out of 495, Reading 445 out of 495, total 935 out of 990.',
    },
    tags: ['English', 'Listening', 'Reading'],
    badge: '/img/certifications/toeic.png',
    evidence: {
      kind: 'certificate',
      visibility: 'public',
      url: '/assets/certificats/toeic-2024.pdf',
    },
  },

  // --------------------------- En préparation ---------------------------
  {
    id: 'az-104',
    title: 'Microsoft AZ-104 — Azure Administrator Associate',
    issuer: 'Microsoft',
    status: 'in-progress',
    targetOn: null,
    description: {
      fr: "Certification Microsoft d'administrateur Azure.",
      en: 'Microsoft certification for Azure administrators.',
    },
    tags: ['Azure', 'Administration'],
  },
  {
    id: 'sc-500',
    title: 'Microsoft SC-500 — Cloud and AI Security Engineer Associate',
    issuer: 'Microsoft',
    status: 'in-progress',
    targetOn: null,
    description: {
      fr: "Certification Microsoft d'ingénieur sécurité du cloud et de l'intelligence artificielle.",
      en: 'Microsoft certification for cloud and AI security engineers.',
    },
    tags: ['Azure', 'Security'],
  },
  {
    id: 'az-900',
    title: 'Microsoft AZ-900 — Azure Fundamentals',
    issuer: 'Microsoft',
    status: 'in-progress',
    targetOn: null,
    description: {
      fr: 'Fondamentaux Azure : concepts cloud, sécurité et conformité.',
      en: 'Azure fundamentals: cloud concepts, security and compliance.',
    },
    tags: ['Azure', 'Cloud', 'Fundamentals'],
    badge: '/img/certifications/az-900.png',
  },
  {
    id: 'sc-900',
    title: 'Microsoft SC-900 — Security, Compliance & Identity',
    issuer: 'Microsoft',
    status: 'in-progress',
    targetOn: null,
    description: {
      fr: 'Concepts fondamentaux de sécurité, conformité et identité Microsoft.',
      en: 'Fundamental Microsoft security, compliance and identity concepts.',
    },
    tags: ['Security', 'Compliance', 'Identity'],
    badge: '/img/certifications/sc-900.png',
  },

  // --------------------------- Feuille de route ---------------------------
  {
    id: 'sc-300',
    title: 'Microsoft SC-300 — Identity and Access Administrator',
    issuer: 'Microsoft',
    status: 'planned',
    targetOn: null,
    description: {
      fr: "Certification Microsoft d'administrateur des identités et des accès.",
      en: 'Microsoft certification for identity and access administrators.',
    },
    tags: ['Identity', 'Access'],
  },
  {
    id: 'sc-200',
    title: 'Microsoft SC-200 — Security Operations Analyst',
    issuer: 'Microsoft',
    status: 'planned',
    targetOn: null,
    description: {
      fr: "Spécialisation en détection, investigation et réponse aux incidents avec Microsoft Sentinel & Defender.",
      en: 'Specialisation in detection, investigation and incident response with Microsoft Sentinel & Defender.',
    },
    tags: ['SOC', 'Sentinel', 'Incident Response'],
    badge: '/img/certifications/sc-200.png',
  },
  {
    id: 'sc-100',
    title: 'Microsoft SC-100 — Cybersecurity Architect',
    issuer: 'Microsoft',
    status: 'planned',
    targetOn: null,
    description: {
      fr: "Certification Microsoft d'architecte cybersécurité.",
      en: 'Microsoft certification for cybersecurity architects.',
    },
    tags: ['Architecture', 'Security'],
  },
  {
    id: 'az-802',
    title: 'Microsoft AZ-802 — Windows Server Administrator',
    issuer: 'Microsoft',
    status: 'planned',
    targetOn: null,
    description: {
      fr: "Certification Microsoft d'administration de Windows Server.",
      en: 'Microsoft certification for Windows Server administration.',
    },
    tags: ['Windows Server', 'Administration'],
  },
];

export function getCertificationsByStatus(status: CertStatus): Certification[] {
  return certifications.filter((c) => c.status === status);
}

export function getCertificationCounts(): Record<CertStatus | 'all', number> {
  return {
    obtained: getCertificationsByStatus('obtained').length,
    'in-progress': getCertificationsByStatus('in-progress').length,
    planned: getCertificationsByStatus('planned').length,
    all: certifications.length,
  };
}

/** Date affichee : obtention pour une certification obtenue, echeance sinon. */
export function certificationDate(cert: Certification): string | null {
  return cert.status === 'obtained' ? cert.obtainedOn : cert.targetOn;
}
