// components/Footer.tsx
'use client';

import { useState } from 'react';
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

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#F7F2EE] px-[100px] pt-[80px] pb-[40px]">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Join Us */}
        <div className="flex-1 max-w-xs">
          <h3 className={`${tenorSans.className} text-[32px] text-[#676A5E] uppercase mb-4`}>
            Join Us
          </h3>
          <p className={`${archivoNarrow.className} text-[16px] text-[#676A5E] mb-6`}>
            Unlock exclusive drops, founder edits, and stories worth saving.
          </p>
          <input
            type="email"
            placeholder="email id here"
            className="w-full bg-transparent border-b border-[#676A5E] pb-2 text-[#676A5E] focus:outline-none mb-6"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90 transition">
            Send Message →
          </button>
        </div>

        {/* Logo & Contact */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className={`${tenorSans.className} text-[48px] text-black mb-6`}>IKON</h1>
          <address className={`${archivoNarrow.className} not-italic text-[#676A5E] space-y-2 mb-6`}>
            <div>No: 58 A, East Madison Street, Baltimore, MD USA 4508</div>
            <div>Phone : +(1) 000 123 456 789</div>
            <div>Mail : info@example.com</div>
          </address>
        </div>

        {/* Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigate */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4`}>
              Navigate
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Signature Page</a></li>
              <li><a href="#" className="hover:underline">The Mini Kit</a></li>
              <li><a href="#" className="hover:underline">Founder Notes</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4`}>
              Social
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">TikTok</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>

          {/* Official */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4`}>
              Official
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4`}>
              Support
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li>We’re here Mon–Fri, 10AM–6PM (IST).</li>
              <li><a href="#" className="hover:underline">Drop us a note anytime</a></li>
              <li><a href="#" className="hover:underline">Shipping &amp; Returns</a></li>
              <li><a href="#" className="hover:underline">Subscriptions</a></li>
              <li><a href="#" className="hover:underline">Subscription</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Bar */}
      <div className="mt-12 border-t border-[#676A5E]"></div>

      <div className="flex justify-between items-center mt-6">
        <p className={`${archivoNarrow.className} text-sm text-[#676A5E]`}>
          © IKON 2025 — Designed for Every Signature.
        </p>
        <p className={`${archivoNarrow.className} text-sm text-[#676A5E]`}>
          Country/Region
        </p>
      </div>
    </footer>
  );
}
