'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';

const archivoNarrow = Archivo_Narrow({ weight: '400', subsets: ['latin'], display: 'swap' });
const tenorSans = Tenor_Sans({ weight: '400', subsets: ['latin'], display: 'swap' });

const Premium = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full md:px-[100px] px-[16px] py-6 md:py-[120px] flex flex-col md:flex-row items-center justify-between gap-[40px] bg-[#F9F5F3]">
      
      {/* Image Container */}
      <div
        className="relative w-full max-w-[874px] h-[706px] rounded-[20px] overflow-hidden transition-all duration-700"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Laptop Image */}
        <Image
          src="/Rectangle 45206.png"
          alt="Laptop"
          fill
          className={`object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Cake Image */}
        <Image
          src="/Rectangle 45205 (1).png"
          alt="Cake"
          fill
          className={`object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Overlay Text */}
        {hovered && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white transition-opacity duration-700">
            <h3 className="text-[24px] tracking-widest uppercase mb-1">New York Cheesecake</h3>
            <p className="text-[16px] tracking-[0.2em]">Classic. Intentional. Effortlessly Iconic.</p>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="max-w-[560px] text-[#676A5E]">
        <h2 className={`${tenorSans.className} text-[32px] leading-[1.6] mb-10`}>
          ONE SLICE AND THEY’LL <br />
          REMEMBER THE WHOLE THING.
        </h2>

        <p className={`${archivoNarrow.className} text-[16px] mb-6`}>
          This Signature Page was designed with the same attention to detail that makes New York Cheesecake a timeless favorite — smooth layers, balanced richness, and a finish that leaves a mark.
        </p>

        <p className={`${archivoNarrow.className} text-[16px] mb-6`}>
          Every section, scroll, and spacing choice is considered. The palette is crisp, the layout indulgently minimal. It’s made for those who appreciate quiet confidence — not loud designs.
        </p>

        <p className={`${archivoNarrow.className} text-[16px] mb-12`}>
          Whether you’re an artist, founder, consultant or someone in-between, this page doesn’t just say “I’m here” — it says I know exactly what I’m doing.
        </p>

        <div className="flex justify-start">
          <button className="px-6 py-2 bg-black text-white text-sm rounded-full hover:opacity-90 transition">
            See More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Premium;
