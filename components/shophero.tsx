'use client';

import Link from 'next/link';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';

const archivoNarrow = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutHero() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left / Breadcrumb */}
      <div className="flex-1 bg-[#F7F2EE] px-6 sm:px-12 md:px-[100px] py-8 sm:py-12 md:py-[120px]">
        <nav className={`${archivoNarrow.className} text-xs sm:text-sm text-[#676A5E]`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Shop</span>
        </nav>
      </div>

      {/* Right / Page Title */}
      <div className="flex-1 bg-[#B2BA98] px-6 sm:px-12 md:px-[100px] py-8 sm:py-12 md:py-[120px] flex items-center justify-start">
        <h1
          className={`${tenorSans.className} text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.2em] text-[#676A5E]`}
        >
          Shop
        </h1>
      </div>
    </section>
  );
}
