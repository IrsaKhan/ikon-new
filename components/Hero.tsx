// components/Hero.tsx
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-[#D8DCCB] to-[#CDD4E0] md:flex items-center justify-center gap-[180px] relative">
      {/* Left Text Content */}
      <div className="w-[60%] h-[80%] bg-white rounded-bl-[450px] absolute right-0 top-0 z-0"/>
      <div className="w-[30%] md:h-[20%] h-[10%] bg-[#E2E2E2] rounded-tr-[150px] absolute left-0 bottom-0 z-0"/>

      <motion.div
        className="max-w-xl text-left relative z-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo (Optional here if you want top left) */}
        {/* <h2 className="text-lg font-semibold tracking-widest uppercase text-neutral-400 mb-4">IKON</h2> */}

        <h1 className="text-4xl md:text-[40px] text-[#676A5E] uppercase leading-tight">
          A portfolio so good, <br /> it belongs in your bag.
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#676A5E] leading-relaxed">
          Thoughtfully designed, fully launched pages — built to carry your story in style. Choose a flavor, tell us who you are, and we handle the rest.
        </p>
        
        <div className="flex gap-[24px]">
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
            Shop Now
            </button>
            <button className="mt-8 px-6 py-3 bg-transparent border border-black text-black rounded-full hover:opacity-90 transition">
            Explore
            </button>
        </div>
      </motion.div>

      <div className="z-1 flex items-center gap-10">
        <Image className="" width={475} height={674} alt="hero img" src='/hero-img-1.png' />
        <Image className="mt-[230px] " width={376} height={357} alt="hero img" src='/hero-img-2.png' />
      </div>

    </section>
  );
};

export default Hero;
