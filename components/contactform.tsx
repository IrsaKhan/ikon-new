'use client';

import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';

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

export default function ContactForm() {
  return (
    <section className="w-full px-[100px] py-[80px] flex flex-col lg:flex-row gap-[80px]">
      {/* Left - Studio Info */}
      <div className="flex-1">
        <h3
          className={`${tenor.className} text-[20px] uppercase tracking-[0.2em] text-[#676A5E] mb-6`}
        >
          Contact Us
        </h3>
        <h2
          className={`${tenor.className} text-[28px] uppercase tracking-[0.2em] text-[#676A5E] mb-10`}
        >
          Visit Our Studio
        </h2>

        <div className="space-y-6 text-[#B2BA98]">
          <div>
            <p className="font-semibold">Islamabad Head Office</p>
          </div>

          <div>
            <p className="uppercase text-sm">Chat to us</p>
            <p className={`${archivo.className} text-sm`}>info@ikonstudio.com</p>
          </div>

          <div>
            <p className="uppercase text-sm">Visit our office branch</p>
            <p className={`${archivo.className} text-sm`}>
              58 A, East Madison Street, Baltimore, MD USA 4508
            </p>
          </div>

          <div>
            <p className="uppercase text-sm">Call us</p>
            <p className={`${archivo.className} text-sm`}>
              +1 000 123 456 789 / +92 300 123 4567
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#ccc] p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#ccc] p-3 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Mail Address"
              className="border border-[#ccc] p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone #"
              className="border border-[#ccc] p-3 rounded-md w-full"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="border border-[#ccc] p-3 rounded-md w-full"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
