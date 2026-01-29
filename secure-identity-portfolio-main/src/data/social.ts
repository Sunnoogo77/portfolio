export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Sunnoogo77',
    icon: 'Github',
    username: '@Sunnoogo77',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sunnoogo-caleb-tapsoba/',
    icon: 'Linkedin',
    username: 'sunnoogo-caleb-tapsoba',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com/SunnoogoCal',
    icon: 'Twitter',
    username: '@SunnoogoCal',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/sunnoogo_caleb/',
    icon: 'Instagram',
    username: '@sunnoogo_caleb',
  },
];

export const contactInfo = {
  formspreeId: 'xyzepnab', // Extracted from the original HTML
};
