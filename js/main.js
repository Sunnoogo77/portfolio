document.addEventListener('DOMContentLoaded', () => {
    
    // --- Gestion du thème clair/sombre ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Définir le thème par défaut sur "sombre"
    body.classList.add('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');

    themeToggleBtn.addEventListener('click', () => {
        // Basculer la classe 'light' sur le body
        body.classList.toggle('light');

        // Changer l'icône du bouton en fonction du thème
        if (body.classList.contains('light')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // --- Script pour la section "À propos" (details) ---
    const details = document.getElementById('aboutDetails');
    const section = document.getElementById('about');

    details.addEventListener('toggle', () => {
        if (details.open) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // --- Script pour la section "Parcours académique" (boutons en savoir plus) ---
    window.toggleDetails = function(id) {
        const detailsElement = document.getElementById(id);
        detailsElement.classList.toggle('hidden');
        
        const button = detailsElement.nextElementSibling;
        if (detailsElement.classList.contains('hidden')) {
            button.textContent = 'En savoir plus →';
        } else {
            button.textContent = 'Réduire ↑';
        }
    }

    // --- Script pour les projets (affichage dynamique) ---
    const projects = [

            {
                title: "WebHawk",
                status: "past",
                tags: ["Python","Scanner","Web","Docker","Education","Blue Team"],
                desc: "Scanner éducatif de vulnérabilités web (SQLi, XSS, LFI, IDOR, CSRF, SSRF, RCE), rapports JSON, modes CLI/Interactif, conteneurisé.",
                link: "https://github.com/Sunnoogo77/WebHawk"
            },
            {
                title: "HIDS (Host-Based IDS)",
                status: "past",
                tags: ["PowerShell","Windows","HIDS","Blue Team"],
                desc: "Détection sur hôte en PowerShell : surveille activités et patterns suspects, configuration & artefacts Blue Team.",
                link: "https://github.com/Sunnoogo77/HIDS"
            },
            {
                title: "ASTSU – Advanced Security Testing & Scanning Utility",
                status: "past",
                tags: ["Python","Réseau","Scanner","Docker"],
                desc: "Scan ports TCP/UDP, fingerprint OS, mode furtif, découverte d’hôtes. Image Docker & alias CLI faciles.",
                link: "https://github.com/Sunnoogo77/ASTSU"
            },
            {
                title: "VaultRoom",
                status: "past",
                tags: ["Flask","Python","TLS","Chat","Web"],
                desc: "Plateforme de communication sécurisée : auth, discussions privées, TLS/SSL, archi prête pour Socket.IO.",
                link: "https://github.com/Sunnoogo77/VaultRoom"
            },
            {
                title: "MFA – Multi-Factor Authentication",
                status: "past",
                tags: ["Node.js","Express","React","2FA","Passport","Speakeasy"],
                desc: "Système d’authentification multi-facteurs (password + TOTP). Backend Express/Passport, frontend React.",
                link: "https://github.com/Sunnoogo77/MFA"
            },
            {
                title: "Packet Sniffing (Scapy + Supabase)",
                status: "past",
                tags: ["Python","Scapy","Supabase","PostgreSQL","Réseau","Monitoring"],
                desc: "Capture et analyse de paquets en temps réel, stockage cloud Supabase, schémas SQL et API prévus.",
                link: "https://github.com/Sunnoogo77/Packet_Sniffing"
            },
            {
                title: "Mini Cryptographie Web",
                status: "past",
                tags: ["Python","Flask","React","Crypto","Web"],
                desc: "Chiffrement/déchiffrement de textes et fichiers, démo de force brute, backend Flask + frontend React.",
                link: "https://github.com/Sunnoogo77/file-text-encryptor"
            },
            {
                title: "Password Cracking (outil + rapport)",
                status: "past",
                tags: ["Python","PyQt5","Passwords","Education"],
                desc: "Outil de craquage (brute force, dictionnaire, masque, hybride) avec GUI PyQt5 et rapport de sensibilisation.",
                link: "https://github.com/Sunnoogo77/Password-Cracking"
            },
            {
                title: "Cybersécurité vs Sécurité de l’Information",
                status: "past",
                tags: ["Education","Infosec","Rédaction"],
                desc: "Comparatif pédagogique avec ressources & supports pour publication LinkedIn.",
                link: "https://github.com/Sunnoogo77/Cybersecurity_Infosec"
            },
            {
                title: "Wazuh x Sysmon – Lab Blue Team",
                status: "future",
                tags: ["Wazuh","Sysmon","Windows","Blue Team","Lab"],
                desc: "Guide de mise en place Sysmon + scénarios de simulation (ransomware behaviors) pour générer des alertes dans Wazuh.",
                link: "https://github.com/Sunnoogo77/test-for-wazuh"
            },
            {
                title: "Architecture réseau sécurisée multisite pour campus",
                status: "past",
                tags: ["réseau", "vlan", "firewall", "blue team", "vpn", "segmentation"],
                desc: "Architecture réseau pour une école multisite, avec segmentation, DMZ, VPN IPSec et supervision, selon les bonnes pratiques Blue Team",
                link: "https://github.com/Sunnoogo77/secure-network-architecture-campus"
            },
            {
                title: "Durcissement Debian pour héberger Moodle",
                status: "past",
                tags: ["Debian", "Hardening", "UFW", "PAM", "Lynis", "Blue Team"],
                desc: "Durcissement d’un serveur Debian pour Moodle : MAJ auto, UFW/ICMP, services, permissions, SUID/SGID, /tmp en tmpfs, sysctl, PAM et audits",
                link: "https://github.com/Sunnoogo77/debian-hardening-moodle"
            },
            {
                title: "HIDS-Web",
                status: "current",
                tags: ["FastAPI", "Docker", "SQLite", "JWT", "Blue Team", "HIDS"],
                desc: "Plateforme locale de surveillance des postes : suit fichiers, dossiers et IP, déclenche des alertes et propose des rapports pour aider à détecter et maîtriser les incidents",
                link: "https://github.com/Sunnoogo77/HIDS2.0"
            },
            {
                title: "Environnement cloud sécurisé sur AWS (SecureCloudLab)",
                status: "future",
                tags: ["AWS", "VPC", "Cloud Security", "IAM", "Blue Team", "Monitoring"],
                desc: "Conception d’un système cloud privé et sécurisé sur AWS avec réseau cloisonné, bastion, contrôle IAM, journalisation CloudTrail, monitoring CloudWatch et segmentation fine des services.",
                link: "https://github.com/Sunnoogo77/securecloudlab-aws"
            },
            {
                title: "Infrastructure PKI, IAM et gestion IT intégrée",
                status: "future",
                tags: ["PKI", "Keycloak", "GLPI", "LDAP", "Authentification", "Blue Team"],
                desc: "Mise en place d’une infrastructure PKI complète (CA Root/Sub), intégrée à Active Directory, avec authentification forte via certificats, IAM avec Keycloak, et gestion IT via GLPI connecté à LDAP.",
                link: "https://github.com/Sunnoogo77/pki-iac-infra-secure"
            },
            {
                title: "Infrastructure Active Directory d'entreprise",
                status: "current",
                tags: ["Active Directory", "Windows Server", "GPO", "Sécurité AD", "Blue Team"],
                desc: "Déploiement complet d’une infrastructure Active Directory réaliste avec gestion des utilisateurs, GPO, délégation RBAC, FGPP, audit, réplication et interconnexion cloud hybride.",
                link: "https://github.com/Sunnoogo77/enterprise-ad-lab"
            },
            {
                title: "Surveillance des accès aux secrets AWS",
                status: "future",
                tags: ["AWS", "CloudTrail", "Secrets Manager", "CloudWatch", "Monitoring", "Blue Team"],
                desc: "Mise en place d’un système de monitoring en temps réel des accès aux secrets AWS, avec CloudTrail, CloudWatch, SNS, et notifications d’alerte en cas d’accès sensible.",
                link: "https://github.com/Sunnoogo77/aws-secret-access-monitoring"
            },
            {
                title: "Sécurisation d’Azure Active Directory (AER)",
                status: "future",
                tags: ["Azure", "Active Directory", "IAM", "Hybrid Cloud", "Blue Team", "Microsoft Entra"],
                desc: "Déploiement et configuration d’un environnement Azure Active Directory sécurisé avec gestion hybride, MFA, groupes, unités d’administration et connecteur Entra ID.",
                link: "https://github.com/Sunnoogo77/azure-aer-ad-hybrid-security"
            },
            {
                title: "Déploiement d’un Simulateur de Phishing pour formation interne",
                status: "future",
                tags: ["Phishing", "Cyber Awareness", "Social Engineering", "Blue Team", "Docker", "Security Training"],
                desc: "Mise en place d’un simulateur de campagnes de phishing interne pour sensibiliser les utilisateurs, analyser les clics, et renforcer les réflexes de cybersécurité dans l’entreprise.",
                link: "https://github.com/Sunnoogo77/phishing-awareness-simulator"
            },
            {
                title: "Déploiement sécurisé d’un système de ticketing IT",
                status: "future",
                tags: ["GLPI", "ITSM", "Ticketing", "Helpdesk", "Infrastructure", "Blue Team"],
                desc: "Installation et sécurisation complète de GLPI pour la gestion des incidents et des demandes IT, avec authentification, gestion des droits, sauvegardes et intégration possible à un annuaire LDAP.",
                link: "https://github.com/Sunnoogo77/glpi-secure-ticketing"
            },
            {
                title: "Déploiement d’un SIEM avec Splunk pour la détection d'incidents",
                status: "future",
                tags: ["Splunk", "SIEM", "Log Analysis", "Security Monitoring", "Blue Team", "SOC"],
                desc: "Installation de Splunk dans un lab sécurisé, collecte de logs systèmes et réseau, détection d’incidents via des alertes, tableaux de bord, et cas d’usage Blue Team typiques.",
                link: "https://github.com/Sunnoogo77/splunk-blue-team-lab"
            },

        ];

    const projectsGrid = document.getElementById('projectsGrid');
    const filterSelect = document.getElementById('filter');

    const renderProjects = (filter) => {
        projectsGrid.innerHTML = '';
        const filteredProjects = projects.filter(project => project.category === filter);

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('article');
            projectCard.classList.add('rounded-2xl', 'border', 'border-slate-700/70', 'bg-slate-900/50', 'p-6', 'transition', 'hover:border-brand-500', 'hover:shadow-lg', 'hover:shadow-brand-500/10');
            
            projectCard.innerHTML = `
                <div class="flex items-start justify-between gap-4">
                    <h3 class="text-lg font-bold text-white">${project.title}</h3>
                    <span class="text-sm font-light text-slate-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mt-2 shrink-0">${project.category === 'past' ? 'Passé' : project.category === 'current' ? 'En cours' : 'À venir'}</span>
                </div>
                <p class="mt-4 text-slate-300 text-sm">${project.description}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="mt-4 inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors">
                    Voir sur GitHub <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                </a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    };

    filterSelect.addEventListener('change', (event) => {
        renderProjects(event.target.value);
    });

    // Afficher les projets "passés" par défaut au chargement
    renderProjects('past');
});

const themeToggle = document.getElementById('theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');
const root = document.documentElement;

// Check for user's preferred theme on page load
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    root.classList.add('dark');
    themeIconLight.classList.remove('hidden');
    themeIconDark.classList.add('hidden');
} else {
    root.classList.remove('dark');
    themeIconLight.classList.add('hidden');
    themeIconDark.classList.remove('hidden');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isCurrentlyDark = root.classList.contains('dark');
    localStorage.setItem('darkMode', isCurrentlyDark);

    themeIconLight.classList.toggle('hidden', !isCurrentlyDark);
    themeIconDark.classList.toggle('hidden', isCurrentlyDark);
});

