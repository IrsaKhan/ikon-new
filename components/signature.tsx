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
    offset: ['start end', 'end start'], // when image enters and exits viewport
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section className="px-[100px] py-[120px] w-full flex flex-col md:flex-row items-start justify-between gap-[40px]">
      
      {/* Left Content */}
      <div className="flex-[1.4] max-w-[840px] translate-y-[-20px]">
        <p className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-2`}>
          Signature Product
        </p>

        <h2 className={`${tenorSans.className} text-[32px] leading-[1.3] text-[#676A5E] mb-6`}>
          OWN THE MAGIC OF A PAGE THAT <br /> SPEAKS FOR YOU
        </h2>

        <p className={`${archivoNarrow.className} text-[16px] text-[#676A5E]`}>
          Not just a portfolio — a personal statement.
        </p>
        <p className={`${archivoNarrow.className} text-[16px] text-[#676A5E]`}>
          Crafted to feel like a designer essential, your <strong>IKON Signature Page</strong> is where presence meets precision.
        </p>
        <p className={`${archivoNarrow.className} text-[16px] text-[#676A5E] mb-10`}>
          Tailored aesthetics, smooth performance, and story-led layout — this is how digital should feel.
        </p>

        {/* Included With Every Order Heading */}
        <p className={`${archivoNarrow.className} text-[14px] text-[#676A5E] uppercase mb-6`}>
          Included With Every Order:
        </p>

        {/* Icons Section - horizontal */}
        <div className="flex flex-row justify-between mb-10 w-full max-w-[820px]">
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
              className="flex items-start gap-4 max-w-[240px]"
            >
              <div className="w-20 h-20 min-w-[75px] rounded-full border border-[#E5E8DC] flex items-center justify-center">
                <Image src={icon} width={20} height={20} alt="Icon" />
              </div>
              <div className="leading-snug">
                <p className={`${archivoNarrow.className} text-[14px] text-[#676A5E]`}>
                  {title}
                </p>
                <p className="text-sm text-[#676A5E] mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button + Customers */}
        <div className="flex items-center justify-between w-full max-w-[800px]">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition text-sm">
            More Details →
          </button>
          <div className="flex items-center gap-4">
            {/* 3 Layered Circles */}
            <div className="flex items-center -space-x-2">
              <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9]"></div>
              <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9]"></div>
              <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div>
              <p className={`${tenorSans.className} text-[#676A5E] tracking-[0.2em] text-[24px]`}>
                32K HAPPY CUSTOMERS
              </p>
              <p className={`${archivoNarrow.className} text-sm text-[#676A5E]`}>
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image with scroll effect */}
      <div className="flex-[1.2] flex justify-end">
        <motion.div
          ref={imageRef}
          style={{ scale }}
          className="w-full max-w-[700px] rounded-[40px] overflow-hidden"
        >
          <Image
            src="/AdobeStock_274994869.png"
            alt="Signature Page"
            width={980}
            height={900}
            className="w-full h-auto object-cover rounded-[40px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Signature;
