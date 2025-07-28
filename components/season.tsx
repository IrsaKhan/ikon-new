'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({ weight: '400', subsets: ['latin'], display: 'swap' });
const tenorSans = Tenor_Sans({ weight: '400', subsets: ['latin'], display: 'swap' });

const flavors = [
  {
    id: 1,
    page: '/Rectangle 45201.png',
    flavor: '/Rectangle 45197.png',
  },
  {
    id: 2,
    page: '/Rectangle 45202 (2).png',
    flavor: '/Rectangle 45198.png',
  },
  {
    id: 3,
    page: '/Rectangle 45203.png',
    flavor: '/Rectangle 45199.png',
  },
  {
    id: 4,
    page: '/Rectangle 45204.png',
    flavor: '/Rectangle 45200.png',
  },
];

const Season = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="relative w-full px-[100px] py-[120px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Title */}
      <h2 className={`${tenorSans.className} text-[#676A5E] text-[20px] tracking-[0.2em] mb-20`}>
        FLAVORS OF SUMMER
      </h2>

      {/* Horizontal Scroll Container */}
      <div
        id="flavor-scroll"
        className="flex gap-[40px] overflow-x-scroll pr-[120px] pb-4 no-scrollbar min-w-full relative"
      >
        {flavors.map((flavor, index) => (
          <div
            key={flavor.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative min-w-[435px] h-[764px] rounded-[20px] overflow-hidden cursor-pointer"
          >
            {/* Page Image */}
            <Image
              src={flavor.page}
              alt="Page Preview"
              fill
              className={`object-cover transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Flavor Image */}
            <Image
              src={flavor.flavor}
              alt="Flavor"
              fill
              className={`object-cover transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))}
      </div>

      {/* Scroll Left Button */}
      <button
        onClick={() => {
          const container = document.getElementById('flavor-scroll');
          container?.scrollBy({ left: -475, behavior: 'smooth' });
        }}
        className="absolute top-1/2 left-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &lt;
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => {
          const container = document.getElementById('flavor-scroll');
          container?.scrollBy({ left: 475, behavior: 'smooth' });
        }}
        className="absolute top-1/2 right-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &gt;
      </button>

      {/* Custom Swipe Cursor */}
      {hoveredIndex !== null && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{ top: cursorPos.y - 40, left: cursorPos.x - 40 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[80px] h-[80px] bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-[#676A5E] text-sm font-medium">
            Swipe
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Season;
