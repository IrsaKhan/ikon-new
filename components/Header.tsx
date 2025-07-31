'use client';

import { useState } from 'react';
import { Playfair_Display, Archivo_Narrow , Tenor_Sans} from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const archivoNarrow = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[24px] md:px-[66px] py-[23px] flex justify-between items-center bg-white/70 backdrop-blur-md">
      <h1 className={`${tenorSans.className} text-[28px] md:text-[32px]`}>IKON</h1>

      {/* Desktop Menu */}
      <nav
        className={`${archivoNarrow.className} hidden md:flex text-[#676A5E] items-center gap-[70px]`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-[25px]">
        <Image width={16} height={16} src="/icons/search.svg" alt="" />
        <Image width={16} height={16} src="/icons/shop.svg" alt="" />
        <Image width={12} height={16} src="/icons/user.svg" alt="" />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-[#676A5E] z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-40 px-6 py-8 flex flex-col gap-6"
          >
            <nav className={`${archivoNarrow.className} text-[#676A5E] text-lg flex flex-col gap-6`}>
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </nav>
            <div className="flex gap-4 mt-6">
              <Image width={18} height={18} src="/icons/search.svg" alt="" />
              <Image width={18} height={18} src="/icons/shop.svg" alt="" />
              <Image width={14} height={18} src="/icons/user.svg" alt="" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
