'use client';

import Image from 'next/image';
import { Archivo_Narrow } from 'next/font/google';
import { useState } from 'react';

const archivo = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const products = [
  {
    name: 'Matcha Crème',
    price: '$20.00',
    image: '/Rectangle 208.png',
    hoverImage: '/Rectangle 45197.png',
  },
  {
    name: 'New York Cheesecake',
    price: '$34.00',
    image: '/Rectangle 209.png',
    hoverImage: '/image 57 (2).png',
  },
  {
    name: 'Chocolate Gelato',
    price: '$28.00',
    image: '/Rectangle 42356.png',
    hoverImage: '/Rectangle 45200.png',
  },
  {
    name: 'Cherry Sorbet',
    price: '$20.00',
    image: '/Rectangle 42357.png',
    hoverImage: '/image 50 (2).png',
  },
  {
    name: 'Peach Meringue Pie',
    price: '$24.00',
    image: '/Rectangle 42358.png',
    hoverImage: '/Rectangle 9.png',
  },
  {
    name: 'Mango Glacé',
    price: '$20.00',
    image: '/Rectangle 42359.png',
    hoverImage: '/image 52 (1).png',
  },
];

export default function ShopLayout() {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(60);

  return (
    <section className="px-[100px] py-[80px] flex gap-[50px]">
      {/* LEFT SIDEBAR */}
      <aside className="w-[404px] flex-shrink-0 space-y-8">
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
          <p className={`${archivo.className} text-xs text-[#676A5E] uppercase tracking-[0.2em] mb-2`}>
            Filter By Price
          </p>
          <input
            type="range"
            min={29}
            max={60}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#AABF9B]"
          />
          <p className="text-[12px] text-[#AABF9B] mt-1">
            Price: ${minPrice} – ${maxPrice}
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

      {/* Ad Image - Keep as per your given dimensions */}
      <div className="relative w-[404px] h-[603px] rounded-lg overflow-hidden">
        <Image
          src="/Rectangle 45289.png"
          alt="Ad Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center bg-black/20">
          <p className="text-[#676A5E] text-[32px] font-semibold leading-[40px] mb-75">
            ENHANCE <br /> YOUR <br /> DIGITAL <br /> PRESENCE
          </p>
        <button
          className="bg-black text-white text-xs px-4 py-1 rounded-full hover:bg-opacity-90 transition w-fit
                    sm:text-sm sm:px-6 sm:py-2
                    md:text-base md:px-7 md:py-2.5
                    text-center max-w-full"
        >
          Shop Now →
        </button>

        </div>
      </div>

      </aside>

      {/* RIGHT PRODUCT GRID */}
      <div className="flex-1 pr-[50px]">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-[#676A5E]">Showing 1–6 of 6 results</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-16">
          {products.map((p, i) => (
            <div key={i} className="relative group">
              <div className="relative w-[560px] h-[503px] overflow-hidden rounded-lg">
                {/* Default image */}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover image */}
                <Image
                  src={p.hoverImage}
                  alt={`${p.name} hover`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="mt-6">
                <p className="text-[#676A5E] text-[16px]">{p.name}</p>
                <p className="text-sm text-[#676A5E]">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
