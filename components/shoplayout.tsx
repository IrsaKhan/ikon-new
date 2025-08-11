'use client';

import Image from 'next/image';
import { Archivo_Narrow } from 'next/font/google';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const archivo = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const products = [
  {
    title: 'Matcha Crème',
    price: '$20.00',
    img: '/Rectangle 208.png',
    hoverImg: '/Rectangle 45197.png',
  },
  {
    title: 'New York Cheesecake',
    price: '$34.00',
    img: '/Rectangle 209.png',
    hoverImg: '/image 57 (2).png',
  },
  {
    title: 'Chocolate Gelato',
    price: '$28.00',
    img: '/Rectangle 42356.png',
    hoverImg: '/Rectangle 45200.png',
  },
  {
    title: 'Cherry Sorbet',
    price: '$20.00',
    img: '/Rectangle 42357.png',
    hoverImg: '/image 50 (2).png',
  },
  {
    title: 'Peach Meringue Pie',
    price: '$24.00',
    img: '/Rectangle 42358.png',
    hoverImg: '/Rectangle 9.png',
  },
  {
    title: 'Mango Glacé',
    price: '$20.00',
    img: '/Rectangle 42359.png',
    hoverImg: '/image 52 (1).png',
  },
];

export default function ShopLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof products[0] | null>(null);
  const [email, setEmail] = useState('');
  const [priceFilter, setPriceFilter] = useState(60);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (i: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  const handleJoinWaitlistClick = (item: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedItem(item);
    setShowWaitlist(true);
  };

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-[100px] py-10 lg:py-[80px] flex flex-col lg:flex-row gap-10 lg:gap-[50px]">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[404px] flex-shrink-0 space-y-8">
          {/* Results + Clear */}
          <div className="flex justify-between items-center">
            <p className={`${archivo.className} text-xs text-[#676A5E]`}>6 Results</p>
            <button className="px-4 py-1 bg-[#AABF9B] text-white text-xs rounded-full hover:opacity-90 transition">
              Clear Filter
            </button>
          </div>

          <hr className="border-[#DCDCDC]" />

          {/* Availability */}
          <div>
            <h4 className="uppercase text-sm mb-4 text-[#676A5E]">Availability</h4>
            <label className="flex items-center gap-2 text-[#676A5E]">
              <input type="checkbox" className="accent-[#AABF9B]" /> In Stock
            </label>
          </div>

          {/* Filter by Price */}
          <div>
            <p
              className={`${archivo.className} text-xs text-[#676A5E] uppercase tracking-[0.2em] mb-2`}
            >
              Filter By Price
            </p>
            <input
              type="range"
              min={20}
              max={60}
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
              className="w-full accent-[#AABF9B]"
            />
            <p className="text-[12px] text-[#AABF9B] mt-1">
              Price: $20 – ${priceFilter}
            </p>
            <button className="mt-2 px-4 py-1 bg-[#AABF9B] text-white text-xs rounded-full hover:opacity-90 transition">
              Filter
            </button>
          </div>

          {/* Product Type */}
          <div>
            <h4 className="uppercase text-sm mb-4 text-[#676A5E]">Product Type</h4>
            <ul className="space-y-2 text-[#676A5E]">
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#AABF9B]" /> Signature Page
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#AABF9B]" /> Mini Kit
                </label>
              </li>
            </ul>
          </div>

          {/* Ad Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[603px] rounded-lg overflow-hidden">
            <Image
              src="/Rectangle 45289.png"
              alt="Ad Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center bg-black/20">
              <p className="text-[#676A5E] text-2xl sm:text-[20px] font-light leading-tight sm:leading-[20px] mb-68">
                ENHANCE <br /> YOUR <br /> DIGITAL <br /> PRESENCE
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT PRODUCT GRID */}
        <div className="flex-1 lg:pr-[50px]">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-[#676A5E]">Showing 1–6 of 6 results</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-2 lg:gap-y-16">
            {products.map((p, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  className="relative group cursor-pointer"
                  onClick={() => handleClick(i)}
                >
                  <div className="relative w-full aspect-[560/503] overflow-hidden rounded-lg">
                    {/* Default image */}
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        isMobile
                          ? isActive
                            ? 'opacity-0'
                            : 'opacity-100'
                          : 'group-hover:opacity-0'
                      }`}
                    />
                    {/* Hover image */}
                    <Image
                      src={p.hoverImg}
                      alt={`${p.title} hover`}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        isMobile
                          ? isActive
                            ? 'opacity-100'
                            : 'opacity-0'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />

                    {/* Join Waitlist button */}
                    <div
                      onClick={(e) => handleJoinWaitlistClick(p, e)}
                      className={`absolute bottom-0 w-full text-center py-3 text-sm transform transition-transform duration-300 bg-white/80 backdrop-blur-md text-black font-medium cursor-pointer ${
                        isMobile
                          ? isActive
                            ? 'translate-y-0'
                            : 'translate-y-full'
                          : 'translate-y-full group-hover:translate-y-0'
                      }`}
                    >
                      Join Waitlist
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[#676A5E] text-[16px]">{p.title}</p>
                    <p className="text-sm text-[#676A5E]">{p.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlist && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Top Image */}
              <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
                <Image
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Message */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-medium text-[#676A5E]">
                  Welcome to the IKON Waitlist
                </h2>
                <p className="mt-2 text-[#676A5E] text-sm">
                  You’re one step away from securing your spot for{' '}
                  <span className="font-semibold">{selectedItem.title}</span>.
                  Join now and be the first to taste our limited edition
                  creation.
                </p>

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-4 w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#676A5E]"
                />

                {/* Join Waitlist Button */}
                <button
                  onClick={() => {
                    console.log('Joining waitlist for', selectedItem.title, 'with:', email);
                    setShowWaitlist(false);
                    setEmail('');
                  }}
                  className="mt-4 w-full bg-[#676A5E] text-white rounded-full py-2 text-sm hover:opacity-90"
                >
                  Join Waitlist
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setShowWaitlist(false)}
                  className="mt-4 text-xs text-gray-500 hover:underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
