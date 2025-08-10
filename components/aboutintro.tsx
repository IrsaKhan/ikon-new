'use client';

import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

const Signature = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section className="px-6 sm:px-12 md:px-[100px] py-[80px] md:py-[120px] w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-[40px]">
      {/* Left Content */}
      <div className="flex-[1.4] max-w-full md:max-w-[840px] translate-y-[-10px] md:translate-y-[-20px]">
        <p className={`${archivoNarrow.className} text-xs sm:text-sm text-[#676A5E] uppercase mb-2`}>
          Signature Product
        </p>

        <h2 className={`${tenorSans.className} text-2xl sm:text-[28px] md:text-[32px] leading-snug text-[#676A5E] mb-6`}>
          REWRITING THE RULES OF DIGITAL <br /> IDENTITY
        </h2>

        <p className={`${archivoNarrow.className} text-sm sm:text-[16px] text-[#676A5E]`}>
          IKON is where refined visuals meet real impact.
        </p>
        <p className={`${archivoNarrow.className} text-sm sm:text-[16px] text-[#676A5E]`}>
          Crafted to feel like a designer essential, your <strong>IKON Signature Page</strong> is where presence meets precision.
        </p>
        <p className={`${archivoNarrow.className} text-sm sm:text-[16px] text-[#676A5E] mb-8 sm:mb-10`}>
          Tailored aesthetics, smooth performance, and story-led layout — this is how digital should feel.
        </p>

        {/* Included With Every Order Heading */}
        <p className={`${archivoNarrow.className} text-[12px] sm:text-[14px] text-[#676A5E] uppercase mb-6`}>
          Included With Every Order:
        </p>

        {/* Icons Section - wrap on mobile */}
        <div className="flex flex-wrap gap-6 mb-10 max-w-full md:max-w-[820px]">
          {[
            {
              icon: '/Group (1).png',
              title: <strong>Expertly Designed Layouts</strong>,
              desc: 'Personalized to your chosen vibe',
            },
            {
              icon: '/Vector.png',
              title: <strong>Fully Developed Page</strong>,
              desc: 'Launched & live, no coding needed',
            },
            {
              icon: '/Group.png',
              title: <strong>Effortless Editing</strong>,
              desc: 'Simple, intuitive, future-ready',
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-3 max-w-[240px] flex-1 min-w-[150px]"
            >
              <div className="w-16 h-16 min-w-[60px] rounded-full border border-[#E5E8DC] flex items-center justify-center">
                <Image src={icon} width={20} height={20} alt="Icon" />
              </div>
              <div className="leading-snug">
                <p className={`${archivoNarrow.className} text-[12px] sm:text-[14px] text-[#676A5E]`}>
                  {title}
                </p>
                <p className="text-xs sm:text-sm text-[#676A5E] mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button + Customers */}
        <div className="flex items-center justify-start w-full max-w-full md:max-w-[800px]">
          <button className="px-5 py-2.5 bg-black text-white rounded-full hover:opacity-90 transition text-xs sm:text-sm">
            More Details →
          </button>
        </div>
      </div>

      {/* Right Image with scroll effect */}
      <div className="flex-[1.2] flex justify-center md:justify-end w-full max-w-full md:max-w-[707px]">
        <motion.div
          ref={imageRef}
          style={{ scale }}
          className="w-full h-auto max-h-[400px] md:max-h-[650px] rounded-[40px] overflow-hidden"
        >
          <Image
            src="/image 119.png"
            alt="Signature Page"
            width={980}
            height={900}
            className="w-full h-auto object-cover rounded-[20px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Signature;
