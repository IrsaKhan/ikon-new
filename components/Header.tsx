'use client';

import { useState } from 'react';
import { Playfair_Display, Archivo_Narrow, Tenor_Sans } from 'next/font/google';
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [userPopupOpen, setUserPopupOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleJoin = () => {
    alert(`Thank you for joining, ${email}!`);
    setEmail('');
    setUserPopupOpen(false);
  };

  // Close popups when menu closes (optional but good UX)
  const handleMenuClose = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setUserPopupOpen(false);
  };

  return (
    <>
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
        <div className="hidden md:flex items-center gap-[25px] relative">
          <button
            aria-label="Toggle Search"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setUserPopupOpen(false);
            }}
            className="focus:outline-none"
          >
            <Image width={16} height={16} src="/icons/search.svg" alt="Search icon" />
          </button>

          <Link href="/shop" aria-label="Shop">
            <Image width={16} height={16} src="/icons/shop.svg" alt="Shop icon" />
          </Link>

          <button
            aria-label="User Join Popup"
            onClick={() => {
              setUserPopupOpen((prev) => !prev);
              setSearchOpen(false);
            }}
            className="focus:outline-none"
          >
            <Image width={12} height={16} src="/icons/user.svg" alt="User icon" />
          </button>

          {/* Desktop Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[40px] right-[70px] w-[220px] bg-white border border-[#676A5E] rounded-md px-4 py-2 z-50"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className={`${archivoNarrow.className} text-[#676A5E] w-full text-sm px-2 py-1 outline-none`}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop User Popup */}
          <AnimatePresence>
            {userPopupOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[40px] right-0 w-[280px] bg-white rounded-lg shadow-lg p-6 z-50 border border-[#676A5E]"
              >
                <button
                  aria-label="Close join popup"
                  onClick={() => setUserPopupOpen(false)}
                  className="absolute top-3 right-3 text-[#676A5E] hover:text-[#51543f] focus:outline-none"
                >
                  <X size={20} />
                </button>

                <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden mb-4 relative">
                  <Image
                    src="/Group 144075.png"
                    alt="Join Us"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className={`${playfairDisplay.className} text-[#676A5E] text-center text-lg mb-4`}>
                  Join the IKON community for exclusive offers and updates!
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleJoin();
                  }}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${archivoNarrow.className} border border-[#676A5E] rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#676A5E]`}
                  />
                  <button
                    type="submit"
                    className="bg-[#676A5E] text-white rounded-md py-2 hover:bg-[#51543f] transition"
                  >
                    Join
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#676A5E] z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white/70 backdrop-blur-lg z-50 px-6 py-8 flex flex-col gap-6"
          >
            <nav className={`${archivoNarrow.className} text-[#676A5E] text-lg flex flex-col gap-6`}>
              <Link href="/" onClick={handleMenuClose}>Home</Link>
              <Link href="/about" onClick={handleMenuClose}>About</Link>
              <Link href="/shop" onClick={handleMenuClose}>Shop</Link>
              <Link href="/contact" onClick={handleMenuClose}>Contact Us</Link>
            </nav>

            {/* Icons inside mobile menu */}
            <div className="flex gap-4 mt-6">
              {/* Search Icon */}
              <button
                aria-label="Toggle Search"
                onClick={() => {
                  setSearchOpen((prev) => !prev);
                  setUserPopupOpen(false);
                }}
                className="focus:outline-none"
              >
                <Image width={18} height={18} src="/icons/search.svg" alt="Search icon" />
              </button>

              {/* Shop Icon */}
              <Link href="/shop" onClick={handleMenuClose} aria-label="Shop">
                <Image width={18} height={18} src="/icons/shop.svg" alt="Shop icon" />
              </Link>

              {/* User Icon */}
              <button
                aria-label="User Join Popup"
                onClick={() => {
                  setUserPopupOpen((prev) => !prev);
                  setSearchOpen(false);
                }}
                className="focus:outline-none"
              >
                <Image width={14} height={18} src="/icons/user.svg" alt="User icon" />
              </button>
            </div>

            {/* Search Bar inside mobile menu */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className={`${archivoNarrow.className} text-[#676A5E] w-full text-sm px-4 py-2 outline-none border border-[#676A5E] rounded-md`}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* User Popup inside mobile menu */}
            <AnimatePresence>
              {userPopupOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 bg-white rounded-lg shadow-md p-4 border border-[#676A5E] relative"
                >
                  <button
                    aria-label="Close join popup"
                    onClick={() => setUserPopupOpen(false)}
                    className="absolute top-3 right-3 text-[#676A5E] hover:text-[#51543f] focus:outline-none"
                  >
                    <X size={20} />
                  </button>

                  <div className="w-full h-32 bg-gray-100 rounded-md overflow-hidden mb-4 relative">
                    <Image
                      src="/Group 144075.png"
                      alt="Join Us"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className={`${playfairDisplay.className} text-[#676A5E] text-center text-base mb-4`}>
                    Join the IKON community for exclusive offers and updates!
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleJoin();
                    }}
                    className="flex flex-col gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${archivoNarrow.className} border border-[#676A5E] rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#676A5E]`}
                    />
                    <button
                      type="submit"
                      className="bg-[#676A5E] text-white rounded-md py-2 hover:bg-[#51543f] transition"
                    >
                      Join
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
