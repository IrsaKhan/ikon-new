
import ContactHero from '@/components/contacthero';
import ContactBanner from '@/components/contactbanner';
import ContactForm from '@/components/contactform';
import ContactFeatures from '@/components/contactfeatures';

export const metadata = {
  title: 'Contact Us — IKON',
  description: 'Get in touch with IKON studio',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactBanner />
      <ContactForm />
      <ContactFeatures />
    </main>
  );
}
