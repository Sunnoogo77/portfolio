export interface SkillCategory {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'siem',
    title: {
      fr: 'SIEM & Monitoring',
      en: 'SIEM & Monitoring',
    },
    icon: 'Shield',
    skills: [
      'Wazuh',
      'Microsoft Sentinel',
      'Splunk',
      'ELK Stack',
      'Prometheus',
      'Grafana',
      'Suricata',
      'Sysmon',
    ],
  },
  {
    id: 'network',
    title: {
      fr: 'Réseau & Firewall',
      en: 'Network & Firewall',
    },
    icon: 'Network',
    skills: [
      'TCP/IP',
      'VLAN',
      'VPN (IPSec, OpenVPN)',
      'pfSense',
      'Wireshark',
      'Scapy',
      'DMZ',
      'NAT/PAT',
    ],
  },
  {
    id: 'cloud',
    title: {
      fr: 'Cloud & IAM',
      en: 'Cloud & IAM',
    },
    icon: 'Cloud',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Active Directory',
      'Entra ID',
      'Keycloak',
      'IAM',
      'PKI',
      'MFA',
    ],
  },
  {
    id: 'dev',
    title: {
      fr: 'Développement Sécurisé',
      en: 'Secure Development',
    },
    icon: 'Code',
    skills: [
      'Python',
      'PowerShell',
      'Bash',
      'Node.js',
      'Docker',
      'Terraform',
      'CI/CD',
      'SAST/DAST',
    ],
  },
  {
    id: 'systems',
    title: {
      fr: 'Systèmes & Hardening',
      en: 'Systems & Hardening',
    },
    icon: 'Server',
    skills: [
      'Windows Server',
      'Linux (Debian, Ubuntu)',
      'GPO',
      'Lynis',
      'CIS Benchmarks',
      'PAM',
      'FGPP',
    ],
  },
  {
    id: 'investigation',
    title: {
      fr: 'Investigation & Réponse',
      en: 'Investigation & Response',
    },
    icon: 'Search',
    skills: [
      'Log Analysis',
      'Threat Hunting',
      'Incident Response',
      'Forensics',
      'MITRE ATT&CK',
      'SOAR',
    ],
  },
];
