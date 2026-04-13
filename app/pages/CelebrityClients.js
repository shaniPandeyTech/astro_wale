'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const CelebrityClients = () => {
  const [testimonials, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    fetch('https://api.indiandetectiveservices.com/public/api/v1/reviews')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success === 1 && Array.isArray(resData.data)) {
          setTestimonialsData(resData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching reviews:', err);
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
  }, [testimonials]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FFF7F1]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Video Reviews
            </span>
            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              What Our Customers Say About <br />
              <span className="text-orange-500">Horoscope Vale</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Watch real stories from our happy clients who transformed their lives.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 ${
                canScrollLeft
                  ? 'bg-white border-orange-200 text-orange-500 hover:bg-orange-50 hover:border-orange-400 shadow-sm'
                  : 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 ${
                canScrollRight
                  ? 'bg-orange-500 border-orange-500 text-white hover:bg-orange-600 shadow-sm shadow-orange-200'
                  : 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF7F1] to-transparent z-[1] pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF7F1] to-transparent z-[1] pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto py-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="min-w-[280px] h-[420px] rounded-2xl bg-white animate-pulse flex-shrink-0" />
                ))
              : testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="group min-w-[280px] max-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden bg-white border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative overflow-hidden cursor-pointer">
                      <Image
                        src={item.youtube_lik}
                        alt={item.name}
                        width={345}
                        height={455}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ea580c" stroke="none">
                            <polygon points="6 3 20 12 6 21 6 3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                        &ldquo;{item.comment.length > 90 ? `${item.comment.slice(0, 90)}...` : item.comment}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                        <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityClients;
