'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [dragLimit, setDragLimit] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TICardProps | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  useEffect(() => {
    const updateDragLimit = () => {
      if (!containerRef.current || !scrollRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = scrollRef.current.scrollWidth;
      const maxDrag = scrollWidth - containerWidth;
      setDragLimit(maxDrag > 0 ? maxDrag : 0);
    };

    updateDragLimit();
    window.addEventListener('resize', updateDragLimit);
    return () => window.removeEventListener('resize', updateDragLimit);
  }, []);

  const handleJoinWaitlistClick = (item: TICardProps) => {
    setSelectedItem(item);
    setShowWaitlist(true);
  };

  const submitWaitlist = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!selectedItem) {
      alert('No product selected.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          product_id: selectedItem.title,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setNotification({ type: 'success', message: '✅ You have joined the waitlist!' });
      } else {
        setNotification({ type: 'error', message: `❌ There was a problem: ${data.error || 'Please try again.'}` });
      }
    } catch (err) {
      console.error(err);
      setNotification({ type: 'error', message: '❌ Network error — please try again.' });
    } finally {
      setLoading(false);
      setShowWaitlist(false);
      setEmail('');
    }
  };

  // Auto-dismiss notification after 3 seconds
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <>
      <div
        id="trending-items"
        className="w-full px-[16px] md:px-[60px] py-[24px] md:py-[120px] md:flex gap-[60px] relative"
      >
        {/* Left Column */}
        <div className="flex-shrink-0 w-[320px]">
          <h1 className="text-4xl md:text-[32px] text-[#676A5E] leading-tight uppercase">
            Trending <br /> Items
          </h1>
          <p className="mt-6 text-[16px] md:text-lg text-[#676A5E] leading-relaxed">
            Limited flavors designed to help you show up beautifully. Loved by
            creatives, coaches and founders.
          </p>
          <button
            onClick={() => router.push('/shop')}
            className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition mb-6"
          >
            All Products
          </button>
        </div>

        {/* Right Column */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
          onMouseEnter={() => !isTouchDevice && setShowCursor(true)}
          onMouseLeave={() => !isTouchDevice && setShowCursor(false)}
          onTouchStart={(e) => {
            setShowCursor(true);
            handleTouchMove(e);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setShowCursor(false)}
        >
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
              transition={{ duration: 0.2 }}
            >
              <div className="w-[80px] h-[80px] rounded-full bg-white/40 backdrop-blur-sm text-[10px] text-[#676A5E] flex items-center justify-center font-medium uppercase tracking-wide">
                Swipe
              </div>
            </motion.div>
          )}

          <motion.div
            ref={scrollRef}
            className="flex gap-[60px] pr-[60px] cursor-grab active:cursor-grabbing select-none"
            drag="x"
            dragConstraints={{ left: -dragLimit, right: 0 }}
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
                <TICard {...item} onJoinWaitlist={() => handleJoinWaitlistClick(item)} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

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
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
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
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button
                  onClick={submitWaitlist}
                  className="mt-4 w-full bg-[#676A5E] text-white py-2 rounded-md hover:opacity-90 transition"
                  disabled={loading}
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
                <button
                  onClick={() => setShowWaitlist(false)}
                  className="mt-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md text-white z-50 ${
              notification.type === 'success' ? 'bg-[#676A5E]' : 'bg-red-600'
            } shadow-lg`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TrendingItems;
