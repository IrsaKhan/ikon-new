'use client';

import { useState } from 'react';
import Image from 'next/image';
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

export default function Purpose() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`w-full bg-[#F7F2EE] px-[100px] py-[120px] relative ${
        hovered ? 'arrow-hovered' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Intro Heading */}
      <div className="text-center mb-16 px-4 md:px-0">
        <p
          className={`${archivo.className} text-sm text-[#676A5E] uppercase tracking-[0.2em] mb-2`}
        >
          Crafted with Purpose
        </p>
        <p
          className={`${archivo.className} text-[14px] text-[#676A5E] max-w-[640px] mx-auto`}
        >
          Every IKON product is built with thoughtful design principles and backed by
          user-centered intention so you can show up with clarity, confidence, and ease.
        </p>
      </div>

      {/* Main Row */}
      <div
        className="relative flex items-start justify-between md:flex-row md:gap-0 flex-col gap-12"
      >
        {/* Left Item */}
        <div className="flex flex-col items-center text-center max-w-[320px] mx-auto md:mx-0 w-full sm:w-[320px]">
          <div className="w-full h-[200px] md:h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_1002921869.png"
              alt="Tech Simplification"
              width={320}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
          <p className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}>
            Tech Simplification
          </p>
        </div>

        {/* Center Item */}
        <div className="flex flex-col items-center text-center max-w-[320px] mx-auto w-full sm:w-[320px]">
          <div className="w-full h-[200px] md:h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_985183535.png"
              alt="Smart Formats"
              width={320}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
          <p className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}>
            Smart Formats
          </p>
        </div>

        {/* Right Item */}
        <div className="flex flex-col items-center text-center max-w-[320px] mx-auto md:mx-0 w-full sm:w-[320px]">
          <div className="w-full h-[200px] md:h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_1002909179.png"
              alt="Live-Ready Formats"
              width={320}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
          <p className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}>
            Live-Ready Formats
          </p>
        </div>

        {/* SVG arrows - visible only on md+ */}
        <svg
          className="hidden md:block absolute left-0 right-0 top-0 w-[2000px] h-[150px] pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="0"
              markerHeight="0"
              refX="7"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L2,3 L0,6" fill="#676A5E" />
            </marker>
          </defs>

          {/* Left → Center */}
          <path
            d="M16.2,60 C30,40 35,40 33.6,39.5"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />

          {/* Center → Right */}
          <path
            d="M51,60 C60,80 70,80 69,80"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* Centered Call-to-Action */}
      <div className="mt-20 text-center px-4 sm:px-6 md:px-0 max-w-sm mx-auto">
        <h3
          className={`${tenor.className} text-[18px] sm:text-[20px] text-[#676A5E] uppercase tracking-[0.1em] mb-6 leading-tight`}
        >
          Design-Led Products,<br /> Built for the Way You Work
        </h3>
        <button className="px-5 py-2 sm:px-6 sm:py-2.5 bg-black text-white rounded-full hover:opacity-90 transition w-[20] max-w-xs mx-auto text-xs sm:text-sm">
          Discover More →
        </button>
      </div>

      {/* Inline styles for the arrow animation */}
      <style jsx>{`
        .arrow-path {
          stroke: #676a5e;
          stroke-width: 1;
          fill: none;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          transition: stroke-dashoffset 0.6s ease-out;
        }
        .arrow-hovered .arrow-path {
          stroke-dashoffset: 0;
        }
      `}</style>
    </section>
  );
}
