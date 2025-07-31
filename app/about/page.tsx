// app/about/page.tsx
// 'use client';

import AboutHero from '@/components/abouthero';
import AboutIntro from '@/components/aboutintro';
import AboutFounder from '@/components/aboutfounder';
import AboutPurpose from  '@/components/aboutpurpose';
import AboutProducts from '@/components/aboutproducts';
export const metadata = {
  title: 'About Us — IKON',
  description: 'Learn more about IKON’s philosophy & story',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutFounder /> 
      <AboutPurpose />
      <AboutProducts />
      {/* …and so on */}
    </>
  );
}
