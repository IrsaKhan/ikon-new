'use client';

import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    website: '', // honeypot
  });
  const [sent, setSent] = useState(false);

  // Validation: all except phone required
  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSent(true);

    // Send formData to backend
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
        website: formData.website, // honeypot
      }),
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setSent(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        website: '',
      });
    }, 3000);
  };

  return (
    <section className="w-full px-6 py-10 sm:px-8 sm:py-16 lg:px-[100px] lg:py-[80px] flex flex-col lg:flex-row gap-10 lg:gap-[80px]">
      {/* Left - Studio Info */}
      <div className="flex-1">
        <h3
          className={`${tenor.className} text-lg sm:text-[20px] uppercase tracking-widest text-[#676A5E] mb-6`}
        >
          Contact Us
        </h3>
        <h2
          className={`${tenor.className} text-xl sm:text-[28px] uppercase tracking-widest text-[#676A5E] mb-10`}
        >
          Visit Our Studio
        </h2>

        <div className="space-y-6 text-[#B2BA98]">
          <div>
            <p className="font-semibold">Islamabad Head Office</p>
          </div>

          <div>
            <p className="uppercase text-xs sm:text-sm">Chat to us</p>
            <p className={`${archivo.className} text-xs sm:text-sm`}>
              info@ikonstudio.com
            </p>
          </div>

          <div>
            <p className="uppercase text-xs sm:text-sm">Visit our office branch</p>
            <p className={`${archivo.className} text-xs sm:text-sm`}>
              58 A, East Madison Street, Baltimore, MD USA 4508
            </p>
          </div>

          <div>
            <p className="uppercase text-xs sm:text-sm">Call us</p>
            <p className={`${archivo.className} text-xs sm:text-sm`}>
              +1 000 123 456 789 / +92 300 123 4567
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1">
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-[#ccc] p-3 rounded-md w-full"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-[#ccc] p-3 rounded-md w-full"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="email"
              name="email"
              placeholder="Mail Address"
              className="border border-[#ccc] p-3 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone #"
              className="border border-[#ccc] p-3 rounded-md w-full"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="border border-[#ccc] p-3 rounded-md w-full"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Honeypot hidden field */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={sent || !isFormValid}
            className={`px-6 py-3 rounded-full text-white transition ${
              sent ? 'bg-[#676A5E] cursor-default' : 'bg-black hover:opacity-90'
            }`}
          >
            {sent ? 'Sent ✓' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
