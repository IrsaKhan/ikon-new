'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({ weight: '400', subsets: ['latin'], display: 'swap' });
const tenorSans = Tenor_Sans({ weight: '400', subsets: ['latin'], display: 'swap' });

const Limited = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section
      className="w-full bg-white md:px-[100px] px-[16px] py-6 md:py-[120px] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">
        {/* Left: Sorbet & Cards */}
        <div className="relative w-full max-w-[750px] h-[560px]">
          <Image
            src="/Rectangle 45198.png"
            alt="Sorbet Background"
            fill
            className="object-cover rounded-[20px] rounded-br-[150px]"
          />
          <div className="absolute bottom-[60px] left-0 right-0 flex justify-center gap-[16px] z-30">
            {[
              { src: '/image 67.png', z: 10 },
              { src: '/image 68.png', z: 20 },
              { src: '/image 69.png', z: 10 },
            ].map((card, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onTouchStart={(e) => handleTouchStart(index, e)}
                onTouchEnd={handleTouchEnd}
                animate={{
                  y: hoveredIndex === index ? -20 : 0,
                  scale: hoveredIndex === index ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: card.z }}
              >
                <Image
                  src={card.src}
                  alt={`Card ${index + 1}`}
                  width={150}
                  height={365}
                  className="rounded-[12px] shadow-lg object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[720px] text-[#676A5E]">
          <h2 className={`${tenorSans.className} text-[32px] text-[#BD0F2F] tracking-[0.3em] mb-2 uppercase`}>
            Cherry Sorbet
          </h2>
          <p className="uppercase tracking-[0.2em] mb-6 text-[#676A5E] text-[20px]">
            Sweet Deal. Sharp Impression. Limited Edition.
          </p>

          <div className="mb-6">
            <p className="text-[#B2BA98] text-[20px] font-bold mb-1">This Week’s Exclusive Flavor Offer</p>
            <p className={`${archivoNarrow.className} text-sm`}>
              <strong>40% OFF</strong><br />
              Your Signature Page at its boldest — rich tones, bold energy, and limited-time pricing.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-[#B2BA98] text-[20px] font-bold mb-1">What’s Included in the Cherry Sorbet Experience</p>
            <p className={`${archivoNarrow.className} text-[16px]`}>
              Fully Designed & Developed One-Page Website<br />
              Optimized for Mobile + Desktop<br />
              Custom Visual Styling (Inspired by Cherry Sorbet)<br />
              Ready to Launch — No Extra Work Needed
            </p>
          </div>

          <button className="px-6 py-3 bg-[#BD0F2F] text-white text-sm rounded-full hover:opacity-90 transition">
            Shop This Flavor →
          </button>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="mt-[80px] w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-[#B2BA98] text-[20px] tracking-[0.3em] uppercase flex gap-10 font-medium">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>
              Limited Edition&nbsp;
              <span className="text-[#BD0F2F]">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      {hoveredIndex !== null && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{ top: cursorPos.y - 40, left: cursorPos.x - 40 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[80px] h-[80px] bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-[#BD0F2F] text-sm font-medium">
            Swipe
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Limited;
