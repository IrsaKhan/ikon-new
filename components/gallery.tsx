'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({ weight: '400', subsets: ['latin'], display: 'swap' });
const tenorSans = Tenor_Sans({ weight: '400', subsets: ['latin'], display: 'swap' });

const flavors = [
  { id: 1, page: '/Rectangle 45209.png', flavor: '/Rectangle 45214 (1).png' },
  { id: 2, page: '/Rectangle 45210.png', flavor: '/Rectangle 45215.png' },
  { id: 3, page: '/Rectangle 45211.png', flavor: '/Rectangle 45216.png' },
  { id: 4, page: '/Rectangle 45212 (1).png', flavor: '/Rectangle 45217 (1).png' },
  { id: 5, page: '/Rectangle 45213.png', flavor: '/Rectangle 45218.png' },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMobile) {
      const touch = e.touches[0];
      setCursorPos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    if (isMobile) {
      setHoveredIndex(index);
      const touch = e.touches[0];
      setCursorPos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setHoveredIndex(null);
    }
  };

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  return (
    <section
      className="relative w-full md:px-[100px] px-[16px] py-6 md:py-[120px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <h2 className={`${tenorSans.className} text-[#676A5E] text-[20px] tracking-[0.2em] mb-20`}>
        IKON SUMMER
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-[20px] overflow-x-scroll pb-4 no-scrollbar min-w-full relative snap-x snap-mandatory"
      >
        {flavors.map((flavor, index) => (
          <div
            key={flavor.id}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            onTouchStart={(e) => handleTouchStart(index, e)}
            onTouchEnd={handleTouchEnd}
            className="
              relative
              min-w-[240px] h-[380px]   /* small screen size */
              sm:min-w-[300px] sm:h-[480px]  /* tablet */
              md:min-w-[364px] md:h-[664px]  /* desktop */
              rounded-[20px] overflow-hidden cursor-pointer snap-center
              flex-shrink-0
            "
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

      {/* Arrows only on desktop */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute top-1/2 left-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &lt;
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute top-1/2 right-[60px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/60 backdrop-blur-md items-center justify-center text-[#676A5E] text-[24px] z-10"
      >
        &gt;
      </button>

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
