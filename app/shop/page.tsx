import ShopHero from '@/components/shophero';
import ShopLayout from '@/components/shoplayout';

export const metadata = {
  title: 'Shop — IKON',
  description: 'Browse our product collection',
};

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ShopLayout /> 
    </main>
  );
}
