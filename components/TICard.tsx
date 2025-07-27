'use client';

import Image from 'next/image';
import { Archivo_Narrow } from 'next/font/google';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export type TICardProps = {
  title: string;
  rating: number; // 0–5
  reviews: number;
  img: string;
  hoverImg: string;
};

const TICard = ({ title, rating, reviews, img, hoverImg }: TICardProps) => {
  const [hovered, setHovered] = useState(false);

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < count ? (
        <Star key={i} size={12} fill="#FFD17C" stroke="#FFD17C" />
      ) : (
        <Star key={i} size={12} stroke="#B2BA98" fill="#B2BA98" />
      )
    );
  };

  return (
    <div
      className="group w-fit relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
<div className="relative w-[270px] h-[355px] overflow-hidden rounded-[10px]">
  <AnimatePresence>
    <motion.div
      key={hovered ? 'hover' : 'default'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0"
    >
      <Image
        src={hovered ? hoverImg : img}
        alt="Product"
        fill
        className="object-cover"
        draggable={false}
      />
    </motion.div>
  </AnimatePresence>

  {/* Waitlist Button */}
  <AnimatePresence>
    {hovered && (
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#D9D9D9]/80 text-black text-xs w-[200px] flex items-center justify-center py-2 rounded-full backdrop-blur-sm"
      >
        Join Waitlist
      </motion.button>
    )}
  </AnimatePresence>
</div>

      <div className="mt-3 cursor-default">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[3px]">{renderStars(rating)}</div>
            <p className={`${archivoNarrow.className} text-[14px] text-[#676A5E]`}>
              ({reviews})
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Heart size={14} />
            <ShoppingCart size={14} />
          </div>
        </div>

        <p
          className={`${archivoNarrow.className} mt-2 text-[18px] text-[#676A5E] max-w-[245px] leading-snug`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default TICard;
