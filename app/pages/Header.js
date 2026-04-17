'use client';

import { useState, useEffect } from 'react';
import { FaChevronDown, FaUser, FaStore, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/10' : ''}`}>
      {/* Top Bar */}
      <div className="bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="hidden md:flex items-center gap-1">
              <a href="/free-kundli" className="px-3 py-1 rounded-full hover:bg-white/15 transition-colors cursor-pointer">
                Free Kundli
              </a>
              <a href="#" className="px-3 py-1 rounded-full hover:bg-white/15 transition-colors cursor-pointer">
                Kundli Matching
              </a>
              <div className="relative group">
                <a href="/daily-horoscope" className="px-3 py-1 rounded-full hover:bg-white/15 transition-colors cursor-pointer inline-flex items-center gap-1.5">
                  Horoscopes
                  <FaChevronDown className="text-[10px] transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="bg-white text-gray-700 rounded-xl shadow-xl border border-gray-100 py-2 w-48 overflow-hidden">
                    <a href="/daily-horoscope" className="block px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">Daily Horoscope</a>
                    <a href="#" className="block px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">Weekly Horoscope</a>
                    <a href="#" className="block px-4 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">Monthly Horoscope</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-1 rounded-full hover:bg-white/15 transition-colors cursor-pointer text-sm">
                  English
                  <FaChevronDown className="text-[10px]" />
                </button>
              </div>
              <a href="tel:+919999999999" className="hidden md:flex items-center gap-1.5 text-sm">
                <FaPhoneAlt className="text-[10px]" />
                +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white text-gray-800 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src="/images/logo.svg" alt="Horoscope Vale" className="h-10" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="/chat-with-astrologer" className="relative px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Chat with Astrologer
              </a>
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                Call with Astrologer
              </a>
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                Book a Pooja
              </a>
              <a href="#" className="px-4 py-2 rounded-lg text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer flex items-center gap-1.5">
                <FaStore className="text-xs" />
                Our Store
              </a>
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-sm shadow-orange-200">
                <FaUser className="text-xs" />
                Log In
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 space-y-1">
          <a href="/chat-with-astrologer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Chat with Astrologer
          </a>
          <a href="#" className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium">
            Call with Astrologer
          </a>
          <a href="#" className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium">
            Book a Pooja
          </a>
          <a href="/free-kundli" className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium">
            Free Kundli
          </a>

          {/* Mobile Horoscope Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm font-medium cursor-pointer"
            >
              Horoscopes
              <FaChevronDown className={`text-[10px] transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 pl-4 border-l-2 border-orange-200 space-y-1 py-1">
                <a href="/daily-horoscope" className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors">Daily Horoscope</a>
                <a href="#" className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors">Weekly Horoscope</a>
                <a href="#" className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors">Monthly Horoscope</a>
              </div>
            </div>
          </div>

          <a href="#" className="flex items-center gap-2 px-4 py-3 rounded-xl text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium">
            <FaStore className="text-xs" />
            Our Store
          </a>

          <div className="pt-2 px-4">
            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl text-sm font-medium cursor-pointer hover:bg-orange-600 transition-colors shadow-sm shadow-orange-200">
              <FaUser className="text-xs" />
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
