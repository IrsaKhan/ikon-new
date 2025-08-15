'use client';

import { useState, useEffect } from 'react';
import { Archivo_Narrow, Tenor_Sans } from 'next/font/google';
import Link from 'next/link';

const archivoNarrow = Archivo_Narrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState('');

  const handleSend = async () => {
    if (!email.trim()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setEmail('');
        setTimeout(() => setSent(false), 3000);
      } else {
        console.error('Error joining community:', data);
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle country change
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value;
    setCountry(val);
    try {
      localStorage.setItem('ikon_country', val);
    } catch {}
  };

  // Auto detect country from localStorage or IP
  useEffect(() => {
    const saved = localStorage.getItem('ikon_country');
    if (saved) {
      setCountry(saved);
      return;
    }

    (async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data && data.country_code) {
          setCountry(data.country_code);
          localStorage.setItem('ikon_country', data.country_code);
        }
      } catch (err) {
        console.error('Country detection failed:', err);
      }
    })();
  }, []);

  // Full ISO country list
  const countries = [
    { code: 'AF', name: 'Afghanistan' },
      { code: 'AX', name: 'Åland Islands' },
      { code: 'AL', name: 'Albania' },
      { code: 'DZ', name: 'Algeria' },
      { code: 'AS', name: 'American Samoa' },
      { code: 'AD', name: 'Andorra' },
      { code: 'AO', name: 'Angola' },
      { code: 'AI', name: 'Anguilla' },
      { code: 'AQ', name: 'Antarctica' },
      { code: 'AG', name: 'Antigua and Barbuda' },
      { code: 'AR', name: 'Argentina' },
      { code: 'AM', name: 'Armenia' },
      { code: 'AW', name: 'Aruba' },
      { code: 'AU', name: 'Australia' },
      { code: 'AT', name: 'Austria' },
      { code: 'AZ', name: 'Azerbaijan' },
      { code: 'BS', name: 'Bahamas' },
      { code: 'BH', name: 'Bahrain' },
      { code: 'BD', name: 'Bangladesh' },
      { code: 'BB', name: 'Barbados' },
      { code: 'BY', name: 'Belarus' },
      { code: 'BE', name: 'Belgium' },
      { code: 'BZ', name: 'Belize' },
      { code: 'BJ', name: 'Benin' },
      { code: 'BM', name: 'Bermuda' },
      { code: 'BT', name: 'Bhutan' },
      { code: 'BO', name: 'Bolivia' },
      { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
      { code: 'BA', name: 'Bosnia and Herzegovina' },
      { code: 'BW', name: 'Botswana' },
      { code: 'BV', name: 'Bouvet Island' },
      { code: 'BR', name: 'Brazil' },
      { code: 'IO', name: 'British Indian Ocean Territory' },
      { code: 'BN', name: 'Brunei Darussalam' },
      { code: 'BG', name: 'Bulgaria' },
      { code: 'BF', name: 'Burkina Faso' },
      { code: 'BI', name: 'Burundi' },
      { code: 'CV', name: 'Cabo Verde' },
      { code: 'KH', name: 'Cambodia' },
      { code: 'CM', name: 'Cameroon' },
      { code: 'CA', name: 'Canada' },
      { code: 'KY', name: 'Cayman Islands' },
      { code: 'CF', name: 'Central African Republic' },
      { code: 'TD', name: 'Chad' },
      { code: 'CL', name: 'Chile' },
      { code: 'CN', name: 'China' },
      { code: 'CX', name: 'Christmas Island' },
      { code: 'CC', name: 'Cocos (Keeling) Islands' },
      { code: 'CO', name: 'Colombia' },
      { code: 'KM', name: 'Comoros' },
      { code: 'CG', name: 'Congo' },
      { code: 'CD', name: 'Congo, Democratic Republic of the' },
      { code: 'CK', name: 'Cook Islands' },
      { code: 'CR', name: 'Costa Rica' },
      { code: 'CI', name: "Côte d'Ivoire" },
      { code: 'HR', name: 'Croatia' },
      { code: 'CU', name: 'Cuba' },
      { code: 'CW', name: 'Curaçao' },
      { code: 'CY', name: 'Cyprus' },
      { code: 'CZ', name: 'Czechia' },
      { code: 'DK', name: 'Denmark' },
      { code: 'DJ', name: 'Djibouti' },
      { code: 'DM', name: 'Dominica' },
      { code: 'DO', name: 'Dominican Republic' },
      { code: 'EC', name: 'Ecuador' },
      { code: 'EG', name: 'Egypt' },
      { code: 'SV', name: 'El Salvador' },
      { code: 'GQ', name: 'Equatorial Guinea' },
      { code: 'ER', name: 'Eritrea' },
      { code: 'EE', name: 'Estonia' },
      { code: 'SZ', name: 'Eswatini' },
      { code: 'ET', name: 'Ethiopia' },
      { code: 'FK', name: 'Falkland Islands' },
      { code: 'FO', name: 'Faroe Islands' },
      { code: 'FJ', name: 'Fiji' },
      { code: 'FI', name: 'Finland' },
      { code: 'FR', name: 'France' },
      { code: 'GF', name: 'French Guiana' },
      { code: 'PF', name: 'French Polynesia' },
      { code: 'TF', name: 'French Southern Territories' },
      { code: 'GA', name: 'Gabon' },
      { code: 'GM', name: 'Gambia' },
      { code: 'GE', name: 'Georgia' },
      { code: 'DE', name: 'Germany' },
      { code: 'GH', name: 'Ghana' },
      { code: 'GI', name: 'Gibraltar' },
      { code: 'GR', name: 'Greece' },
      { code: 'GL', name: 'Greenland' },
      { code: 'GD', name: 'Grenada' },
      { code: 'GP', name: 'Guadeloupe' },
      { code: 'GU', name: 'Guam' },
      { code: 'GT', name: 'Guatemala' },
      { code: 'GG', name: 'Guernsey' },
      { code: 'GN', name: 'Guinea' },
      { code: 'GW', name: 'Guinea-Bissau' },
      { code: 'GY', name: 'Guyana' },
      { code: 'HT', name: 'Haiti' },
      { code: 'HM', name: 'Heard Island and McDonald Islands' },
      { code: 'VA', name: 'Holy See' },
      { code: 'HN', name: 'Honduras' },
      { code: 'HK', name: 'Hong Kong' },
      { code: 'HU', name: 'Hungary' },
      { code: 'IS', name: 'Iceland' },
      { code: 'IN', name: 'India' },
      { code: 'ID', name: 'Indonesia' },
      { code: 'IR', name: 'Iran' },
      { code: 'IQ', name: 'Iraq' },
      { code: 'IM', name: 'Isle of Man' },
      { code: 'IL', name: 'Israel' },
      { code: 'IT', name: 'Italy' },
      { code: 'JM', name: 'Jamaica' },
      { code: 'JP', name: 'Japan' },
      { code: 'JE', name: 'Jersey' },
      { code: 'JO', name: 'Jordan' },
      { code: 'KZ', name: 'Kazakhstan' },
      { code: 'KE', name: 'Kenya' },
      { code: 'KI', name: 'Kiribati' },
      { code: 'KP', name: "Korea, Democratic People's Republic of" },
      { code: 'KR', name: 'Korea, Republic of' },
      { code: 'KW', name: 'Kuwait' },
      { code: 'KG', name: 'Kyrgyzstan' },
      { code: 'LA', name: "Lao People's Democratic Republic" },
      { code: 'LV', name: 'Latvia' },
      { code: 'LB', name: 'Lebanon' },
      { code: 'LS', name: 'Lesotho' },
      { code: 'LR', name: 'Liberia' },
      { code: 'LY', name: 'Libya' },
      { code: 'LI', name: 'Liechtenstein' },
      { code: 'LT', name: 'Lithuania' },
      { code: 'LU', name: 'Luxembourg' },
      { code: 'MO', name: 'Macao' },
      { code: 'MG', name: 'Madagascar' },
      { code: 'MW', name: 'Malawi' },
      { code: 'MY', name: 'Malaysia' },
      { code: 'MV', name: 'Maldives' },
      { code: 'ML', name: 'Mali' },
      { code: 'MT', name: 'Malta' },
      { code: 'MH', name: 'Marshall Islands' },
      { code: 'MQ', name: 'Martinique' },
      { code: 'MR', name: 'Mauritania' },
      { code: 'MU', name: 'Mauritius' },
      { code: 'YT', name: 'Mayotte' },
      { code: 'MX', name: 'Mexico' },
      { code: 'FM', name: 'Micronesia' },
      { code: 'MD', name: 'Moldova' },
      { code: 'MC', name: 'Monaco' },
      { code: 'MN', name: 'Mongolia' },
      { code: 'ME', name: 'Montenegro' },
      { code: 'MS', name: 'Montserrat' },
      { code: 'MA', name: 'Morocco' },
      { code: 'MZ', name: 'Mozambique' },
      { code: 'MM', name: 'Myanmar' },
      { code: 'NA', name: 'Namibia' },
      { code: 'NR', name: 'Nauru' },
      { code: 'NP', name: 'Nepal' },
      { code: 'NL', name: 'Netherlands' },
      { code: 'NC', name: 'New Caledonia' },
      { code: 'NZ', name: 'New Zealand' },
      { code: 'NI', name: 'Nicaragua' },
      { code: 'NE', name: 'Niger' },
      { code: 'NG', name: 'Nigeria' },
      { code: 'NU', name: 'Niue' },
      { code: 'NF', name: 'Norfolk Island' },
      { code: 'MK', name: 'North Macedonia' },
      { code: 'MP', name: 'Northern Mariana Islands' },
      { code: 'NO', name: 'Norway' },
      { code: 'OM', name: 'Oman' },
      { code: 'PK', name: 'Pakistan' },
      { code: 'PW', name: 'Palau' },
      { code: 'PS', name: 'Palestine, State of' },
      { code: 'PA', name: 'Panama' },
      { code: 'PG', name: 'Papua New Guinea' },
      { code: 'PY', name: 'Paraguay' },
      { code: 'PE', name: 'Peru' },
      { code: 'PH', name: 'Philippines' },
      { code: 'PN', name: 'Pitcairn' },
      { code: 'PL', name: 'Poland' },
      { code: 'PT', name: 'Portugal' },
      { code: 'PR', name: 'Puerto Rico' },
      { code: 'QA', name: 'Qatar' },
      { code: 'RE', name: 'Réunion' },
      { code: 'RO', name: 'Romania' },
      { code: 'RU', name: 'Russian Federation' },
      { code: 'RW', name: 'Rwanda' },
      { code: 'BL', name: 'Saint Barthélemy' },
      { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
      { code: 'KN', name: 'Saint Kitts and Nevis' },
      { code: 'LC', name: 'Saint Lucia' },
      { code: 'MF', name: 'Saint Martin (French part)' },
      { code: 'PM', name: 'Saint Pierre and Miquelon' },
      { code: 'VC', name: 'Saint Vincent and the Grenadines' },
      { code: 'WS', name: 'Samoa' },
      { code: 'SM', name: 'San Marino' },
      { code: 'ST', name: 'Sao Tome and Principe' },
      { code: 'SA', name: 'Saudi Arabia' },
      { code: 'SN', name: 'Senegal' },
      { code: 'RS', name: 'Serbia' },
      { code: 'SC', name: 'Seychelles' },
      { code: 'SL', name: 'Sierra Leone' },
      { code: 'SG', name: 'Singapore' },
      { code: 'SX', name: 'Sint Maarten (Dutch part)' },
      { code: 'SK', name: 'Slovakia' },
      { code: 'SI', name: 'Slovenia' },
      { code: 'SB', name: 'Solomon Islands' },
      { code: 'SO', name: 'Somalia' },
      { code: 'ZA', name: 'South Africa' },
      { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
      { code: 'SS', name: 'South Sudan' },
      { code: 'ES', name: 'Spain' },
      { code: 'LK', name: 'Sri Lanka' },
      { code: 'SD', name: 'Sudan' },
      { code: 'SR', name: 'Suriname' },
      { code: 'SJ', name: 'Svalbard and Jan Mayen' },
      { code: 'SE', name: 'Sweden' },
      { code: 'CH', name: 'Switzerland' },
      { code: 'SY', name: 'Syrian Arab Republic' },
      { code: 'TW', name: 'Taiwan, Province of China' },
      { code: 'TJ', name: 'Tajikistan' },
      { code: 'TZ', name: 'Tanzania' },
      { code: 'TH', name: 'Thailand' },
      { code: 'TL', name: 'Timor-Leste' },
      { code: 'TG', name: 'Togo' },
      { code: 'TK', name: 'Tokelau' },
      { code: 'TO', name: 'Tonga' },
      { code: 'TT', name: 'Trinidad and Tobago' },
      { code: 'TN', name: 'Tunisia' },
      { code: 'TR', name: 'Türkiye' },
      { code: 'TM', name: 'Turkmenistan' },
      { code: 'TC', name: 'Turks and Caicos Islands' },
      { code: 'TV', name: 'Tuvalu' },
      { code: 'UG', name: 'Uganda' },
      { code: 'UA', name: 'Ukraine' },
      { code: 'AE', name: 'United Arab Emirates' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'US', name: 'United States' },
      { code: 'UM', name: 'United States Minor Outlying Islands' },
      { code: 'UY', name: 'Uruguay' },
      { code: 'UZ', name: 'Uzbekistan' },
      { code: 'VU', name: 'Vanuatu' },
      { code: 'VE', name: 'Venezuela' },
      { code: 'VN', name: 'Viet Nam' },
      { code: 'VG', name: 'Virgin Islands, British' },
      { code: 'VI', name: 'Virgin Islands, U.S.' },
      { code: 'WF', name: 'Wallis and Futuna' },
      { code: 'EH', name: 'Western Sahara' },
      { code: 'YE', name: 'Yemen' },
      { code: 'ZM', name: 'Zambia' },
      { code: 'ZW', name: 'Zimbabwe' },
  ];

  return (
    <footer className="bg-[#F7F2EE] md:px-[100px] px-[16px] pt-[80px] pb-[40px]">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Join Us */}
        <div className="flex-1 max-w-xs">
          <h3 className={`${tenorSans.className} text-[32px] text-[#676A5E] uppercase mb-4`}>
            Join Us
          </h3>
          <p className={`${archivoNarrow.className} text-[16px] text-[#676A5E] mb-6`}>
            Unlock exclusive drops, founder edits, and stories worth saving.
          </p>
          <input
            type="email"
            placeholder="email id here"
            className="w-full bg-transparent border-b border-[#676A5E] pb-2 text-[#676A5E] focus:outline-none mb-6"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            onClick={handleSend}
            disabled={!email.trim() || sent || loading}
            className={`px-6 py-3 rounded-full text-sm transition 
              ${sent ? 'bg-[#676A5E] text-white' : 'bg-black text-white hover:opacity-90'}`}
          >
            {loading
              ? 'Sending...'
              : sent
              ? 'Sent ✓'
              : 'Send Message →'}
          </button>
        </div>

        {/* Logo & Contact */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className={`${tenorSans.className} text-[48px] text-black mb-6`}>IKON</h1>
          <address className={`${archivoNarrow.className} not-italic text-[#676A5E] space-y-2 mb-6`}>
            <div>No: 58 A, East Madison Street, Baltimore, MD USA 4508</div>
            <div>Phone : +(1) 000 123 456 789</div>
            <div>Mail : ikonidentity@gmail.com</div>
          </address>
        </div>

        {/* Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigate */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4 font-bold`}>
              Navigate
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/about" className="hover:underline">Our Story</Link></li>
              <li><Link href="/#signature-product" className="hover:underline">Signature Page</Link></li>
              <li><Link href="/shop" className="hover:underline">The Mini Kit</Link></li>
              <li><Link href="/about#founder" className="hover:underline">Founder Notes</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4 font-bold`}>
              Social
            </h4>
            <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
              <li><a href="https://instagram.com/ikon_identity" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://tiktok.com/@ikon.identity" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a></li>
              {/* <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li> */}
            </ul>
          </div>

            {/* Official */}
            <div>
              <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4 font-bold`}>
                Official
              </h4>
              <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
                <li><span className="hover:underline cursor-default">Privacy</span></li>
                <li><span className="hover:underline cursor-default">Terms</span></li>
                <li><span className="hover:underline cursor-default">Accessibility</span></li>
                <li><span className="hover:underline cursor-default">Contact</span></li>
                <li><span className="hover:underline cursor-default">FAQ</span></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className={`${archivoNarrow.className} text-sm text-[#676A5E] uppercase mb-4 font-bold`}>
                Support
              </h4>
              <ul className={`space-y-2 ${archivoNarrow.className} text-[#676A5E]`}>
                <li>We’re here Mon–Fri, 10AM–6PM (IST).</li>
                <li><span className="hover:underline cursor-default">Drop us a note anytime</span></li>
                <li><span className="hover:underline cursor-default">Shipping &amp; Returns</span></li>
                <li><span className="hover:underline cursor-default">Subscriptions</span></li>
              </ul>
            </div>
        </div>
      </div>
    
      {/* Divider & Bottom Bar */}
      <div className="mt-12 border-t border-[#676A5E]"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <p className={`${archivoNarrow.className} text-sm text-[#676A5E]`}>
          © IKON 2025 — Designed for Every Signature.
        </p>
        <div className="flex items-center">
          <label htmlFor="country" className="hidden sm:block mr-2 text-sm text-[#676A5E]">
            Country/Region:
          </label>
          <select
            id="country"
            className="bg-transparent border border-[#676A5E] rounded px-2 py-1 text-sm text-[#676A5E] focus:outline-none"
            value={country}
            onChange={handleCountryChange}
          >
            {countries.map(c => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}
