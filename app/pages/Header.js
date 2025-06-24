'use client';

import { useState } from 'react';
import { FaChevronDown, FaUser, FaStore, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-orange-500 text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 relative z-10">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="text-sm space-x-4 hidden md:flex">
          <a href="/free-kundli">Free Kundli</a>
          <a href="#">Kundli Matching</a>
          {/* <a href="#">Horoscopes</a> */}

          <a href="/daily-horoscope" className='inline-flex whitespace-nowrap items-center'><span> Horoscopes </span>  <FaChevronDown className="text-xs mt-0.5" /></a>

          {/* Desktop Dropdown */}
          <div className="relative group">
            {/* <button className="flex items-center space-x-1">
              <span><a herf="/daily-horoscope">Horoscopes</a></span>
              <FaChevronDown className="text-xs mt-0.5" />
            </button> */}
            {/* <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 z-50 invisible group-hover:visible">
              <a href="#" className="block px-4 py-2 hover:bg-orange-100">Daily Horoscope</a>
              <a href="#" className="block px-4 py-2 hover:bg-orange-100">Weekly Horoscope</a>
              <a href="#" className="block px-4 py-2 hover:bg-orange-100">Monthly Horoscope</a>
            </div> */}
          </div>
        </div>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center space-x-4 whitespace-nowrap cursor-pointer">
          <span className="text-sm inline-flex items-center gap-x-2"><span>English</span>  <FaChevronDown className="text-xs mt-0.5" /></span>
         
        </div>
      </div>
      </div>

      {/* Logo and Links */}
      <div className="bg-white text-black px-4 py-2 flex flex-col md:flex-row justify-between items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-2 md:mb- justify-between">
          <a href="/">
          <img src="/images/logo.svg" alt="Logo" className="h-15 mr-2" />
          </a>
        

        <nav className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex items-center space-y-2 md:space-y-0 md:space-x-6`}>
          <a href="/chat-with-astrologer" className="block md:inline hover:text-orange-600 whitespace-nowrap"><span className=' inline-block w-2 h-2 bg-orange-600 rounded-full mr-2'></span>Chat with Astrologer</a>
          <a href="#" className="block md:inline hover:text-orange-600 whitespace-nowrap">Call with Astrologer</a>
          <a href="#" className="block md:inline hover:text-orange-600 whitespace-nowrap">Book a Pooja</a>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center space-x-1"
            >
              <span>Horoscopes</span>
              <FaChevronDown className="text-xs" />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 space-y-1 pl-4 text-sm">
                <a href="#">Daily Horoscope</a>
                <a href="#">Weekly Horoscope</a>
                <a href="#">Monthly Horoscope</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center text-orange-600">
            <FaStore className="mr-1" /> Our Store
          </a>
          <button className="flex items-center bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
            <FaUser className="mr-2" /> Log In
          </button>
        </nav>
        </div>
      </div>
      </div>
    </header>
  );
}
