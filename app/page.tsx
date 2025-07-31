// app/page.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Hero           from "@/components/Hero";
import TrendingItems  from "@/components/TrendingItems";
import Signature      from "@/components/signature";
import Premium        from "@/components/premium";
import Season         from "@/components/season";
import Limited        from "@/components/limited";
import Gallery        from "@/components/gallery";

export default function Page() {
  // Create refs for any section you want parallax’d
  const heroRef      = useRef<HTMLDivElement>(null);
  const trendingRef  = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  // Hook scroll progress tied to that ref’s viewport appearance
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: trendingProgress } = useScroll({
    target: trendingRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: signatureProgress } = useScroll({
    target: signatureRef,
    offset: ["start end", "end start"],
  });

  // Map progress [0→1] to translateY
  const heroY      = useTransform(heroProgress,      [0, 1], ["0px", "-80px"]);
  const trendingY  = useTransform(trendingProgress,  [0, 1], ["0px", "-40px"]);
  const signatureY = useTransform(signatureProgress, [0, 1], ["0px", "-30px"]);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <motion.div ref={heroRef} style={{ y: heroY }}>
        <Hero />
      </motion.div>

      {/* TRENDING */}
      <motion.div ref={trendingRef} style={{ y: trendingY }}>
        <TrendingItems />
      </motion.div>

      {/* SIGNATURE */}
      <motion.div ref={signatureRef} style={{ y: signatureY }}>
        <Signature />
      </motion.div>

      {/* THE REST WITHOUT PARALLAX */}
      <Premium />
      <Season />
      <Limited />
      <Gallery />
    </main>
  );
}
