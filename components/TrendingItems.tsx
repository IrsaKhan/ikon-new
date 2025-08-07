'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TICard, { TICardProps } from './TICard';

const items: TICardProps[] = [
  {
    title: 'IKON / Signature Page – Matcha Crème',
    rating: 5,
    reviews: 48,
    img: '/card-ine-img-5.png',
    hoverImg: '/card-sec-img-1.png',
  },
  {
    title: 'IKON / Signature Page – Cherry Sorbet',
    rating: 4,
    reviews: 35,
    img: '/card-ine-img-4.png',
    hoverImg: '/image 50 (2).png',
  },
  {
    title: 'IKON / Signature Page – Peach Meringue Pie',
    rating: 5,
    reviews: 64,
    img: '/card-ine-img-3.png',
    hoverImg: '/Rectangle 9.png',
  },
  {
    title: 'IKON / Signature Page – New York Cheesecake',
    rating: 5,
    reviews: 52,
    img: '/card-ine-img-1.png',
    hoverImg: '/image 57 (2).png',
  },
    {
    title: 'IKON / Signature Page – Chocolate Gelato',
    rating: 5,
    reviews: 52,
    img: '/card-ine-img-2.png',
    hoverImg: '/Rectangle 11.png',
  },
    {
    title: 'IKON / Signature Page – Mango Glacé',
    rating: 5,
    reviews: 52,
    img: '/Group 144033 (1).png',
    hoverImg: '/image 52 (1).png',
  },
  
];

const TrendingItems = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full px-[16px] md:px-[60px] py-[24px] md:py-[120px] md:flex gap-[60px] relative">
      {/* Left Column */}
      <div className="flex-shrink-0 w-[320px]">
        <h1 className="text-4xl md:text-[32px] text-[#676A5E] leading-tight uppercase">
          Trending <br /> Items
        </h1>
        <p className="mt-6 text-[16px] md:text-lg text-[#676A5E] leading-relaxed">
          Limited flavors designed to help you show up beautifully. Loved by creatives, coaches and founders.
        </p>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition mb-6 md:mb-0">
          All Products
        </button>
      </div>

      {/* Right Column */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {/* Custom Cursor */}
        {showCursor && (
          <motion.div
            className="absolute z-20 pointer-events-none"
            style={{
              top: mousePos.y - 40,
              left: mousePos.x - 40,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-[80px] h-[80px] rounded-full bg-white/40 backdrop-blur-sm text-[10px] text-[#676A5E] flex items-center justify-center font-medium uppercase tracking-wide">
              Swipe
            </div>
          </motion.div>
        )}

        <motion.div
          className="flex gap-[60px] pr-[60px] cursor-grab active:cursor-grabbing select-none"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragStart={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
              e.preventDefault();
            }
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} onDragStart={(e) => e.preventDefault()}>
              <TICard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrendingItems;
