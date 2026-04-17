'use client';
import Image from "next/image";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';

const sampleAstrologers = [
  { name: 'Pandit Rajesh', designation: 'Vedic Astrologer', rating: '4.9', experience: '15', language: 'Hindi, English', price: '\u20B920/min', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Acharya Sunita', designation: 'Tarot Reader', rating: '4.8', experience: '12', language: 'Hindi, Marathi', price: '\u20B925/min', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Guru Vikram', designation: 'Numerologist', rating: '4.7', experience: '20', language: 'Hindi, English', price: '\u20B930/min', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Jyotish Meera', designation: 'Palmist', rating: '4.9', experience: '10', language: 'Hindi, Gujarati', price: '\u20B915/min', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Pandit Arjun', designation: 'Vastu Expert', rating: '4.6', experience: '18', language: 'Hindi, English', price: '\u20B935/min', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Acharya Priya', designation: 'Vedic Astrologer', rating: '4.8', experience: '8', language: 'Hindi, Bengali', price: '\u20B922/min', image: 'https://randomuser.me/api/portraits/women/28.jpg' },
  { name: 'Guru Shankar', designation: 'KP Astrologer', rating: '4.9', experience: '25', language: 'Hindi, Tamil', price: '\u20B940/min', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Jyotish Kavita', designation: 'Tarot Reader', rating: '4.7', experience: '6', language: 'Hindi, English', price: '\u20B918/min', image: 'https://randomuser.me/api/portraits/women/50.jpg' },
];

export default function Astrologers(props) {
  const [astrologer, setAstrologer] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    fetch('https://api.indiandetectiveservices.com/public/api/v1/astrologers')
      .then(res => res.json())
      .then(resData => {
        if (resData.success === 1 && Array.isArray(resData.data) && resData.data.length > 0) {
          setAstrologer(resData.data);
        } else {
          setAstrologer(sampleAstrologers);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching astrologers:', err);
        setAstrologer(sampleAstrologers);
        setLoading(false);
      });
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, [astrologer]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="astrologers" className={`${props.heading ? "pt-12 sm:pt-20" : ""} py-12 sm:py-20 bg-gray-50`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-orange-50 px-4 py-1.5 rounded-full mb-4">
              Expert Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              Chat with <span className="text-orange-500">Astrologer</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Connect with India&apos;s top certified astrologers for personalized guidance.
            </p>
          </div>

          {/* Filter Controls */}
          {props.showFilter === true && (
            <div className="flex items-center space-x-3">
              <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 bg-white hover:border-orange-300 hover:text-orange-500 transition-colors cursor-pointer">
                <FaFilter className="text-xs" /> Filter
              </button>
              <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 bg-white hover:border-orange-300 hover:text-orange-500 transition-colors cursor-pointer">
                <Image src="/images/sort.svg" width={16} height={16} alt="sort" /> Sort by
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Astrologer"
                  className="border border-gray-200 rounded-xl px-4 py-2.5 pl-9 text-sm w-56 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              </div>
            </div>
          )}
        </div>

        {/* Scroll Buttons + Cards */}
        <div className="relative group/section">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-50 hover:border-orange-200 active:scale-90 transition-all duration-200 opacity-0 group-hover/section:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-50 hover:border-orange-200 active:scale-90 transition-all duration-200 opacity-0 group-hover/section:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          )}

          {/* Left/Right fade edges */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-[1] pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-[1] pointer-events-none" />
          )}

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="min-w-[260px] h-[380px] rounded-2xl bg-white animate-pulse" />
                ))
              : astrologer.map((item, index) => (
                  <div
                    key={index}
                    className="group relative min-w-[220px] max-w-[220px] sm:min-w-[260px] sm:max-w-[260px] bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200 flex-shrink-0"
                  >
                    {/* Badge */}
                    {index % 4 === 0 && (
                      <div className="absolute top-4 left-0 z-10 bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[11px] font-bold px-3 py-1 rounded-r-full shadow-sm">
                        Top Rated
                      </div>
                    )}

                    {/* Image */}
                    <a href="/astrologer-profile" className="block relative overflow-hidden rounded-xl mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Online dot */}
                      <span className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm" />
                    </a>

                    {/* Rating + Experience */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        {item.rating}
                      </span>
                      <span className="text-[11px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                        {item.experience} Yrs Exp
                      </span>
                    </div>

                    {/* Name + Designation */}
                    <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">{item.designation}</p>

                    {/* Language */}
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <img src="/images/leng.svg" className="w-3.5 h-3.5 mr-1 opacity-60" alt="Languages" />
                      {item.language}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{item.price}</p>
                      <button className="bg-orange-500 text-white text-sm font-medium px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-sm shadow-orange-200">
                        Chat Now
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
