'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ContactBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // triggers while scrolling into and out of view
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]); // zoom out effect

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="relative w-full h-[690px]"
      >
        <Image
          src="/Map.png" // your banner image file
          alt="Contact banner"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
