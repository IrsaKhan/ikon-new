// gallery.tsx (formerly Season.tsx)
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({ weight: '400', subsets: ['latin'], display: 'swap' });
const tenorSans    = Tenor_Sans   ({ weight: '400', subsets: ['latin'], display: 'swap' });

const flavors = [
  { id: 1, page: '/Rectangle 45209.png', flavor: '/Rectangle 45214 (1).png' },
  { id: 2, page: '/Rectangle 45210.png', flavor: '/Rectangle 45215.png'      },
  { id: 3, page: '/Rectangle 45211.png', flavor: '/Rectangle 45216.png'      },
  { id: 4, page: '/Rectangle 45212 (1).png', flavor: '/Rectangle 45217 (1).png' },
  { id: 5, page: '/Rectangle 45213.png', flavor: '/Rectangle 45218.png'      },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos]     = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -475, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  475, behavior: 'smooth' });

  return (
    <section
      className="relative w-full px-[100px] py-[120px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <h2 className={`${tenorSans.className} text-[#676A5E] text-[20px] tracking-[0.2em] mb-20`}>
        IKON SUMMER
      </h2>

      {/* <-- attach ref here */}
      <div
        ref={scrollRef}
        className="flex gap-[40px] overflow-x-scroll pr-[120px] pb-4 no-scrollbar min-w-full relative"
      >
        {flavors.map((flavor, index) => (
          <div
            key={flavor.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative min-w-[364px] h-[664px] rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              src={flavor.page}
              alt="Page Preview"
              fill
              className={`object-cover transition-opacity duration-700 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <Image
              src={flavor.flavor}
              alt="Flavor"
              fill
              className={`object-cover transition-opacity duration-700 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &gt;
      </button>

      {/* Swipe Cursor */}
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
}
