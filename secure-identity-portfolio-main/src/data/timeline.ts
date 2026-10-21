import type { Lang, Period, TimelineEntry } from './types';

/**
 * Neuf entrees, de la plus recente a la plus ancienne.
 *
 * `isCurrent` a disparu : « en cours » se derive de `period.end === 'ongoing'`
 * par la fonction `isCurrent` de types.ts. Les emoji ont disparu eux aussi,
 * au profit des vraies images de drapeaux et des vrais logos servis depuis
 * `public/img/`.
 *
 * Un logo ou un drapeau dont le fichier n'existe pas dans le depot reste
 * absent : rien n'est invente.
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: 'hec-paris',
    kind: 'training',
    period: { start: '2026-09', end: 'ongoing' },
    organisation: 'HEC Paris',
    role: {
      fr: 'International Certificate in Corporate Finance',
      en: 'International Certificate in Corporate Finance',
    },
    location: { fr: 'À distance', en: 'Remote' },
    logo: '/img/logos/hec.png',
    summary: {
      fr: 'Programme en ligne. Certificat visé en avril 2027.',
      en: 'Online programme. Certificate targeted for April 2027.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'sorbonne-paris-nord',
    kind: 'education',
    period: { start: '2026-09', end: '2027' },
    organisation: 'Université Sorbonne Paris Nord',
    role: {
      fr: 'Diplôme Étudiant-Entrepreneur',
      en: 'Student-Entrepreneur Diploma',
    },
    location: { fr: 'Paris', en: 'Paris' },
    logo: '/img/logos/uspn.png',
    flag: '/img/flags/fr.svg',
    summary: {
      fr: 'Inscription en cours de finalisation.',
      en: 'Registration being finalised.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'impulsera',
    kind: 'venture',
    period: { start: '2025-10', end: 'ongoing' },
    organisation: 'Impulsera',
    role: {
      fr: 'Fondateur et responsable technique',
      en: 'Founder and technical lead',
    },
    location: { fr: 'Paris', en: 'Paris' },
    logo: '/img/logos/impulsera.svg',
    flag: '/img/flags/fr.svg',
    summary: {
      fr: "Startup née de mon projet de fin d'études, incubée à l'EFREI.",
      en: 'Startup born out of my final-year project, incubated at EFREI.',
    },
    highlights: { fr: [], en: [] },
    evidence: {
      kind: 'website',
      visibility: 'public',
      url: 'https://impulsera.fr',
    },
  },
  {
    id: 'soleil-resources',
    kind: 'experience',
    period: { start: '2026-06', end: '2026-07' },
    organisation: 'Soleil Resources',
    via: 'Mission réalisée depuis SAFIR Consulting',
    role: { fr: 'Consultant sécurité', en: 'Security consultant' },
    location: {
      fr: 'Ouagadougou, Burkina Faso',
      en: 'Ouagadougou, Burkina Faso',
    },
    flag: '/img/flags/bf.svg',
    logo: '/img/logos/safir.png',
    summary: {
      fr: "Mission chez un opérateur minier : supervision Wazuh, règles de détection et durcissement de l'annuaire.",
      en: 'Assignment at a mining operator: Wazuh monitoring, detection rules and directory hardening.',
    },
    highlights: {
      fr: [
        "Déploiement d'une plateforme Wazuh tout-en-un sur une machine dédiée, réunissant serveur, indexeur et tableau de bord, après une étude comparative et un dimensionnement initial sur trois machines. Montée de la version 4.12 à la 4.14.6, dans un réseau virtuel d'administration isolé.",
        "Dix-sept règles de détection écrites, dont treize validées par test réel sur les contrôleurs de domaine. Collecte Sysmon, PowerShell et journaux Windows, surveillance d'intégrité sur quatre chemins et cinq clés de registre, alerte par courriel authentifié avec seuil de gravité. Les règles non testées ont été signalées comme telles, et la documentation d'exploitation remise à l'équipe.",
        "Durcissement de l'annuaire avec l'équipe interne : signature LDAP et liaison de canal, NTLM restreint par exceptions, SMBv1 désactivé, protection du processus d'authentification, LAPS, extinction de LLMNR et de PowerShell v2. Audit des certificats et de l'autorité interne, remédiation du Kerberoasting.",
        'En parallèle, accompagnement des équipes métier au démarrage en production de SAP S/4HANA Cloud.',
      ],
      en: [
        'Deployed an all-in-one Wazuh platform on a dedicated host, bringing together the server, the indexer and the dashboard, after a comparative study and an initial sizing across three machines. Upgraded from version 4.12 to 4.14.6, inside an isolated management virtual network.',
        'Seventeen detection rules written, thirteen of them validated by live testing on the domain controllers. Sysmon, PowerShell and Windows event log collection, integrity monitoring on four paths and five registry keys, authenticated email alerting with a severity threshold. The untested rules were flagged as such, and the operating documentation was handed over to the team.',
        'Directory hardening with the internal team: LDAP signing and channel binding, NTLM restricted through exceptions, SMBv1 disabled, protection of the authentication process, LAPS, LLMNR and PowerShell v2 switched off. Audit of the certificates and of the internal certificate authority, Kerberoasting remediation.',
        'In parallel, supported the business teams through the SAP S/4HANA Cloud go-live.',
      ],
    },
    outcomes: [
      {
        value: 17,
        unit: {
          fr: 'règles de détection écrites',
          en: 'detection rules written',
        },
      },
      {
        value: 13,
        unit: {
          fr: 'règles validées par test réel',
          en: 'rules validated by live testing',
        },
        qualifier: {
          fr: 'sur les contrôleurs de domaine',
          en: 'on the domain controllers',
        },
      },
    ],
  },
  {
    id: 'sap-young-professionals',
    kind: 'training',
    period: { start: '2026-03', end: '2026-06' },
    organisation: 'SAP, Digital Skills Center EMEA',
    role: {
      fr: 'SAP Young Professionals Program',
      en: 'SAP Young Professionals Program',
    },
    location: { fr: 'À distance', en: 'Remote' },
    logo: '/img/logos/sap.png',
    summary: {
      fr: 'Programme sélectif, quatre mois à temps plein.',
      en: 'Selective programme, four months full time.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'efrei',
    kind: 'education',
    period: { start: '2023', end: '2026' },
    organisation: 'EFREI Paris',
    role: {
      fr: "Diplôme d'ingénieur, systèmes, réseaux, cloud et cybersécurité",
      en: "Diplôme d'ingénieur in systems, networks, cloud and cybersecurity",
    },
    location: { fr: 'Villejuif, France', en: 'Villejuif, France' },
    flag: '/img/flags/fr.svg',
    logo: '/img/logos/efrei.png',
    summary: {
      fr: 'Cursus achevé, jury de délibération en novembre 2026. Bachelor of Engineering Science obtenu.',
      en: 'Course completed, board of examiners in November 2026. Bachelor of Engineering Science awarded.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'ecobank',
    kind: 'experience',
    period: { start: '2024-12', end: '2025-03' },
    organisation: 'Ecobank Ghana PLC, entité eProcess',
    role: { fr: 'Stagiaire cybersécurité', en: 'Cybersecurity intern' },
    location: { fr: 'Accra, Ghana', en: 'Accra, Ghana' },
    flag: '/img/flags/gh.svg',
    logo: '/img/logos/ecobank1.png',
    summary: {
      fr: 'Environnement Microsoft 365 et Azure.',
      en: 'Microsoft 365 and Azure environment.',
    },
    highlights: {
      fr: [
        'Sécurité du poste de travail sous Intune et Defender : conformité des équipements, authentification multifacteur, gestion des correctifs, retrait des logiciels non autorisés, suivi du score de sécurité Azure.',
        "Centre opérationnel de sécurité : surveillance et corrélation de journaux sous Microsoft Sentinel, analyse d'incidents de premier niveau, rédaction des comptes rendus.",
        "Gouvernance en environnement bancaire : contribution aux politiques de conformité et aux procédures d'admission d'un serveur en production, alignées sur ISO 27001 et PCI-DSS. Introduction au DevSecOps et à l'OWASP Top 10, maquettage réseau sous GNS3, segmentation par VLAN.",
      ],
      en: [
        'Endpoint security with Intune and Defender: device compliance, multi-factor authentication, patch management, removal of unauthorised software, monitoring of the Azure secure score.',
        'Security operations centre: log monitoring and correlation in Microsoft Sentinel, first-line incident analysis, writing up the reports.',
        'Governance in a banking environment: contributed to the compliance policies and to the procedure for admitting a server into production, aligned with ISO 27001 and PCI-DSS. Introduction to DevSecOps and to the OWASP Top 10, network prototyping in GNS3, VLAN segmentation.',
      ],
    },
  },
  {
    id: 'staffordshire',
    kind: 'exchange',
    period: { start: '2024-01', end: '2024-05' },
    organisation: 'University of Staffordshire',
    role: {
      fr: "Semestre d'échange, informatique",
      en: 'Exchange semester, computer science',
    },
    location: {
      fr: 'Stoke-on-Trent, Royaume-Uni',
      en: 'Stoke-on-Trent, United Kingdom',
    },
    flag: '/img/flags/gb.svg',
    logo: '/img/logos/Staffordshire_University_Logo.svg.png',
    summary: {
      fr: "Semestre en Angleterre : cours en anglais, vie étudiante, projet web encadré, exposition culturelle et basketball.",
      en: 'Semester in England (Stoke-on-Trent): courses in English, student life, mentored web project, cultural exposure and basketball.',
    },
    highlights: {
      fr: [
        'Projet web en équipe avec encadrement académique proche.',
        'Progrès significatifs en anglais technique et académique.',
      ],
      en: [
        'Team web project with close academic mentoring.',
        'Significant progress in technical and academic English.',
      ],
    },
  },
  {
    id: 'inphb',
    kind: 'education',
    period: { start: '2021', end: '2023' },
    organisation: 'INP-HB',
    role: {
      fr: 'Classes préparatoires MPSI puis MP*',
      en: 'MPSI then MP* preparatory classes',
    },
    location: {
      fr: "Yamoussoukro, Côte d'Ivoire",
      en: "Yamoussoukro, Côte d'Ivoire",
    },
    flag: '/img/flags/ci.svg',
    logo: '/img/logos/inphb.png',
    summary: {
      fr: 'Deux années intensives en mathématiques, physique et informatique avec préparation rigoureuse aux concours nationaux.',
      en: 'Two intensive years in mathematics, physics and computer science with rigorous preparation for national competitive exams.',
    },
    highlights: {
      fr: [
        "MPSI (Mathématiques, Physique et Sciences de l'Ingénieur).",
        'MP* (Mathématiques, Physique & Informatique avancées) — filière sélective.',
      ],
      en: [
        'MPSI (Mathematics, Physics and Engineering Sciences).',
        'MP* (Advanced Mathematics, Physics & Computer Science) — selective track.',
      ],
    },
  },
];

/** Libelles de periode. 'ongoing' est le seul cas traduit. */
export function formatPeriod(period: Period, lang: Lang): string {
  const ongoing = lang === 'fr' ? 'en cours' : 'ongoing';
  const start = period.start ?? '';
  if (period.end === 'ongoing') return `${start} → ${ongoing}`;
  if (!period.end) return start;
  if (period.end === start) return start;
  return `${start} → ${period.end}`;
}
