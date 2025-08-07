'use client';

import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import { FaRegEdit, FaClock, FaHeadset } from 'react-icons/fa';

const archivo = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const tenor = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactFeatures() {
  const features = [
    {
      icon: <FaRegEdit size={32} className="text-[#676A5E]" />,
      title: 'Effortless Customization',
      desc: 'Tailor your pages without touching a single line of code.',
    },
    {
      icon: <FaClock size={32} className="text-[#676A5E]" />,
      title: '48 Hours Delivery',
      desc: 'Get your website delivered and live within 48 hours.',
    },
    {
      icon: <FaHeadset size={32} className="text-[#676A5E]" />,
      title: 'Support 24/7',
      desc: 'Round-the-clock support for all your website needs.',
    },
  ];

  return (
    <section className="w-full px-[100px] py-[80px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-4">{item.icon}</div>
            <h3
              className={`${tenor.className} text-[18px] text-[#676A5E] uppercase tracking-[0.1em] mb-2`}
            >
              {item.title}
            </h3>
            <p
              className={`${archivo.className} text-[14px] text-[#676A5E] max-w-[280px]`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
