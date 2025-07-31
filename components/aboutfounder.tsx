// components/AboutFounder.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans, Pinyon_Script } from 'next/font/google';
import { motion, useScroll, useTransform } from 'framer-motion';

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
const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutFounder() {
  // now correctly typed as HTMLDivElement
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="px-[60px] py-[80px] w-full flex flex-col md:flex-row items-start justify-between gap-[20px]">
      {/* Left Image with scroll-zoom */}
      <motion.div
        ref={ref}
        style={{ scale }}
        className="flex-1 relative left-[10px]"
      >
        <div className="w-full max-w-[720px] h-[720px] rounded-[20px] overflow-hidden">
          <Image
            src="/Group 144043.png"
            alt="Founder at work"
            width={850}
            height={677}
            className="w-full h-auto object-cover rounded-[20px]"
          />
        </div>
      </motion.div>

      {/* Right Text */}
      <div className="flex-1 max-w-[750px]">
        <h2
          className={`${tenor.className} text-[32px] text-[#676A5E] uppercase tracking-[0.2em] mb-6`}
        >
          A Note From the Founder
        </h2>

        <p className={`${archivo.className} text-[16px] text-[#676A5E] leading-relaxed mb-2`}>
          IKON started from a simple idea that building your digital identity shouldn’t feel complicated or overwhelming.
        </p>
        <p className={`${archivo.className} text-[16px] text-[#676A5E] leading-relaxed mb-2`}>
          Whether you’re applying for a job, pitching to a client, or simply sharing what you do, you’re asked for a portfolio. And yet, creating one often means jumping between platforms, learning design tools, and spending hours trying to make it look just right. I built IKON to make that easier.
        </p>
        <p className={`${archivo.className} text-[16px] text-[#676A5E] leading-relaxed mb-2`}>
          A ready-to-use, beautifully designed product that feels as personal as it is professional. No design skills needed. No tech stress. Just a portfolio that finally reflects you clearly, confidently, and effortlessly.
        </p>
        <p className={`${archivo.className} text-[16px] text-[#676A5E] leading-relaxed mb-6`}>
          IKON is dedicated to creating thoughtful digital products that remove the complexity, without compromising on beauty so you can show up exactly as you are.
        </p>
        <p className={`${archivo.className} text-[16px] text-[#676A5E] leading-relaxed mb-10`}>
          Thank you for being here I’m so excited for you to experience what we’re building.
        </p>

        {/* Centered signature */}
        <div className="flex justify-center">
          <p className={`${pinyon.className} text-[24px] text-[#000000]`}>
            Irsa Khan
          </p>
        </div>
      </div>
    </section>
  );
}
