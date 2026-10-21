import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { socialLinks, contactInfo } from '@/data/social';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

/**
 * Disparus : les cartes au flou pose sur un fond opaque, la lueur du bouton
 * d'envoi, les pastilles d'icones, et l'icone de courriel qui repetait le mot
 * « Contact » place a cote d'elle.
 */
export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoiEnCours(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${contactInfo.formspreeId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error('Failed to send');

      toast({ title: t('contact.form.success'), description: '' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({ title: t('contact.form.error'), description: '' });
    } finally {
      setEnvoiEnCours(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact">
      <h2>{t('contact.title')}</h2>
      <p className="mesure mt-3 text-muted-foreground">{t('contact.subtitle')}</p>

      <div className="grille-notes mt-8">
        <ul className="space-y-3">
          {socialLinks.map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lien text-sm"
              >
                {social.name}
              </a>
              <p className="donnee text-muted-foreground">{social.username}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">{t('contact.form.name')}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">{t('contact.form.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">{t('contact.form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="resize-y"
            />
          </div>

          <Button type="submit" disabled={envoiEnCours}>
            {envoiEnCours ? t('contact.form.sending') : t('contact.form.send')}
          </Button>
        </form>
      </div>
    </Section>
  );
}
