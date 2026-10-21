# CM 1 - 09/04/2025

<aside>
💡

Rappel : 

10.3.0.0 : On peux y mettre 2^8 adresse réseaux 

Adresse broadcast : 10.3.0.0 et 10.3.255.255

</aside>

### **Table de Routage et Protocoles**

Une table de routage peut être attribuée automatiquement grâce à divers protocoles :

- **RIP** : Utilisé principalement dans des environnements scolaires pour sa simplicité.
- **OSPF** : Un protocole plus avancé, souvent utilisé dans les réseaux d'entreprise.
- **ISIS** et **EIGRP** : Protocoles propriétaires de Cisco, utilisés dans les grandes entreprises pour leur efficacité et leur évolutivité.
- **BGP** : Le protocole qui permet la communication entre différents réseaux sur Internet.

Ces protocoles utilisent des algorithmes comme celui de Bellman-Ford pour déterminer le chemin le plus court entre les réseaux.

### **BGP - Border Gateway Protocol**

Internet est constitué de systèmes autonomes (AS) qui communiquent entre eux grâce au protocole BGP. Cependant, BGP ne dispose pas de mécanismes de sécurité intégrés, ce qui signifie que n'importe qui peut s'attribuer des AS.

### **Protocole NAT**

Le protocole NAT (Network Address Translation) permet à plusieurs appareils d'un réseau local de partager une seule adresse IP publique pour communiquer avec Internet. Avec 2^32 adresses IPv4 disponibles, le NAT est essentiel pour gérer la pénurie d'adresses.

- **IPv6** : Propose 2^128 adresses pour résoudre ce problème, mais tous les protocoles ne le supportent pas encore.

### **Firewalls**

Il existe deux types principaux de firewalls :

- **Stateful** : Analyse les paquets et l'état des connexions, offrant une sécurité accrue grâce à la compréhension du contexte.
- **Stateless** : Filtre les paquets individuellement sans tenir compte du contexte, moins sécurisé mais plus simple à configurer.

### **Types de DMZ (Zone démilitarisée)**

La DMZ sert de zone tampon entre le réseau privé et l'extérieur.

- **DMZ Pendulaire** : La DMZ est en parallèle du réseau interne, offrant flexibilité mais nécessitant une configuration précise.
- **DMZ en coupure** : La DMZ est en série entre Internet et le réseau interne, offrant un contrôle maximal mais pouvant créer un goulot d'étranglement.

<aside>
💡

Pour le projet Mettre en place plusieurs sous-réseau par MDZ

</aside>

### **Routage Asymétrique**

Le routage asymétrique se produit lorsque les paquets empruntent des chemins différents à l'aller et au retour, en raison de changements dans la table de routage et du traitement indépendant des paquets.

### **VLAN et Switches**

Les VLAN (Virtual Local Area Network) permettent de segmenter logiquement un réseau physique en plusieurs réseaux virtuels distincts.

- **Switches de niveau 2** : Gèrent uniquement la commutation basée sur les adresses MAC et les VLAN.
- **Switches de niveau 3** : Combinent les fonctionnalités de commutation et de routage, permettant le routage inter-VLAN.

Avantages des VLAN :

- Isolation du trafic pour une meilleure sécurité
- Réduction des domaines de broadcast
- Flexibilité dans l'organisation du réseau sans changement physique
- Optimisation des performances réseau

Les VLAN sont identifiés par des tags (802.1Q) qui permettent aux switches de diriger le trafic vers le bon réseau virtuel. Un port trunk peut transporter plusieurs VLAN, tandis qu'un port access est dédié à un seul VLAN.

## DNS

Le DNS (Domain Name System) est un système fondamental d'Internet qui agit comme un annuaire téléphonique du web. Voici ses principales fonctions :

- Il traduit les noms de domaine (comme [www.exemple.com](http://www.exemple.com)) en adresses IP (comme 192.168.1.1)
- Il permet aux utilisateurs d'accéder aux sites web en utilisant des noms faciles à retenir plutôt que des séries de chiffres
- Il gère également d'autres types d'enregistrements comme les serveurs de messagerie (MX) ou les alias de noms (CNAME)

Le DNS fonctionne de manière hiérarchique, avec différents niveaux de serveurs DNS qui collaborent pour résoudre les requêtes des utilisateurs.

Les root server connaisse l’emplacement des serveur responsables des (.com, .fr,.xxx,…)

Puis, ces même serveur vont connaitre e nom de domaine souhaité

**Serveur DNS récursif :**
C'est le serveur qui reçoit les requêtes des clients et se charge de trouver la réponse complète. Il va effectuer toutes les étapes nécessaires (interroger les serveurs root, puis les serveurs de domaine de premier niveau, etc.) jusqu'à obtenir l'adresse IP recherchée.

**Serveur DNS autoritaire :**
C'est un serveur qui détient les informations officielles et définitives pour un domaine particulier. Il est la source faisant autorité pour les enregistrements DNS d'une zone spécifique et répond directement aux requêtes concernant les domaines dont il a la charge.

Architecture Master-Slave