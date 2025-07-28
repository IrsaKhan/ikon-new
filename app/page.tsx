"use client";

import Hero from "@/components/Hero";
import TrendingItems from "@/components/TrendingItems";
import Signature from "@/components/signature"; 
import Premium from "@/components/premium";
import Season from "@/components/season";// ← Added

const page = () => {
  return (
    <div>
      <Hero />
      <TrendingItems />
      <Signature />
      <Premium />
      <Season /> {/* ← Now visible on the page */}
    </div>
  );
};

export default page;
