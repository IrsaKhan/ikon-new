// components/Purpose.tsx
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
      <div className="text-center mb-16">
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
      <div className="relative flex items-start justify-between">
        {/* Left Item */}
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <div className="w-[270px] h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_1002921869.png"
              alt="Tech Simplification"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <p
            className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}
          >
            Tech Simplification
          </p>
        </div>

        {/* Center Item */}
        <div className="flex flex-col items-center text-center">
          <div className="w-[270px] h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_985183535.png"
              alt="Smart Formats"
              width={240}
              height={260}
              className="object-cover"
            />
          </div>
          <p
            className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}
          >
            Smart Formats
          </p>
        </div>

        {/* Right Item */}
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <div className="w-[270px] h-[355.56px] rounded-lg overflow-hidden mb-4">
            <Image
              src="/AdobeStock_1002909179.png"
              alt="Live-Ready Formats"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <p
            className={`${archivo.className} text-[14px] text-[#676A5E] uppercase`}
          >
            Live-Ready Formats
          </p>
        </div>

        {/* SVG arrows */}
        <svg
          className="absolute left-0 right-0 top-0 w-[2000px] h-[150px] pointer-events-none"
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
          {/* Left → Center (stops at ~45%) */}
          <path
            d="M8.5,80 C30,40 35,40 35.8,40"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />

          {/* Center → Right */}
          <path
            d="M48.2,60 C60,80 70,80 73,75"
            className="arrow-path"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* Centered Call-to-Action */}
      <div className="mt-20 text-center">
        <h3
          className={`${tenor.className} text-[24px] text-[#676A5E] uppercase tracking-[0.1em] mb-6`}
        >
          Design-Led Products, Built for the Way You Work
        </h3>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
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
