// components/Hero.tsx
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-[#D8DCCB] to-[#CDD4E0] flex flex-col md:flex-row items-center justify-center md:gap-[180px] relative overflow-hidden px-[16px] md:px-12 py-6 pt-[50px] md:pt-[200px] md:py-[100px]">
      
      {/* Decorative Background Boxes */}
      <div className="w-[80%] h-[50%] md:w-[60%] md:h-[80%] bg-white rounded-bl-[300px] absolute right-0 top-0 z-0" />
      <div className="w-[40%] h-[20%] md:w-[30%] md:h-[20%] bg-[#E2E2E2] rounded-tr-[150px] absolute left-0 bottom-0 z-0" />

      {/* Left Text Content */}
      <motion.div
        className="w-full md:max-w-xl text-left relative z-10 pt-24 md:pt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl text-[#676A5E] uppercase leading-tight">
          A portfolio so good, <br /> it belongs in your bag.
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#676A5E] leading-relaxed">
          Thoughtfully designed, fully launched pages — built to carry your story in style. Choose a flavor, tell us who you are, and we handle the rest.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-transparent border border-black text-black rounded-full hover:opacity-90 transition">
            Explore
          </button>
        </div>
      </motion.div>

      {/* Right Side Images */}
      <div className="relative z-10 mt-10 md:mt-0 flex items-center justify-center gap-4 md:gap-10">
        <Image
          className="w-screen md:w-[475px] h-full"
          width={475}
          height={674}
          alt="hero img 1"
          src="/hero-img-1.png"
        />
        <Image
          className="w-32 sm:w-48 md:w-[376px] h-auto mt-10 hidden md:block"
          width={376}
          height={357}
          alt="hero img 2"
          src="/hero-img-2.png"
        />
      </div>
    </section>
  );
};

export default Hero;
