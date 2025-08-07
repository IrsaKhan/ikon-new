'use client';

import Link from 'next/link';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';

const archivo = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const tenor = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactHero() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left / Breadcrumb */}
      <div className="flex-1 bg-[#F7F2EE] px-[100px] py-[120px]">
        <nav className={`${archivo.className} text-[14px] text-[#676A5E]`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Contact Us</span>
        </nav>
      </div>

      {/* Right / Page Title */}
        <div className="flex-1 bg-[#B2BA98] px-[100px] py-[120px] flex items-center justify-start">
        <h1
          className={`${tenor.className} text-[32px] uppercase tracking-[0.2em] text-[#676A5E]`}
        >
          Contact Us
        </h1>
      </div>
    </section>
  );
}
