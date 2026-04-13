'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Suman Rajpoot",
    location: "New Delhi",
    text: "Horoscope Vale's astrological insights have been truly enlightening. Their predictions and remedies are accurate and deeply rooted in Vedic wisdom!"
  },
  {
    id: 2,
    name: "Priya Sen",
    location: "Kolkata",
    text: "I never believed in astrology, but the daily horoscope and live consultations changed my perspective. The astrologers here truly understand Vedic astrology."
  },
  {
    id: 3,
    name: "Aman Singh",
    location: "Hyderabad",
    text: "I was struggling with my career decisions, but after consulting an astrologer at Horoscope Vale, I got the clarity I needed. Their predictions were spot on!"
  },
  {
    id: 4,
    name: "Neha Malhotra",
    location: "Pune",
    text: "Horoscope Vale's remedies actually work! The yantra I purchased brought so much peace and positivity into my life."
  },
  {
    id: 5,
    name: "Rohit Sharma",
    location: "Mumbai",
    text: "The astrologers at Horoscope Vale are incredibly knowledgeable. Their personalized consultations helped me navigate a difficult phase in my career."
  },
  {
    id: 6,
    name: "Anjali Verma",
    location: "Jaipur",
    text: "I have been using Horoscope Vale for over a year now. The daily predictions are surprisingly accurate and the remedies have truly helped my family."
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < testimonials.length - 1;

  const goPrev = () => {
    if (canGoLeft) setActiveIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (canGoRight) setActiveIndex((prev) => prev + 1);
  };

  // Offset: spacer takes slot 0, so card[activeIndex] lands in the centre (slot 2 of 3)
  const cardWidth = 100 / 3;
  const translateX = `-${activeIndex * cardWidth}%`;

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              What Our Customers Say About <br className="hidden sm:block" />
              <span className="text-orange-500">Horoscope Vale</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Real stories from real people who found clarity through our astrologers.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={goPrev}
              disabled={!canGoLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 ${
                canGoLeft
                  ? 'bg-white border-orange-200 text-orange-500 hover:bg-orange-50 hover:border-orange-400 shadow-sm'
                  : 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={goNext}
              disabled={!canGoRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 ${
                canGoRight
                  ? 'bg-orange-500 border-orange-500 text-white hover:bg-orange-600 shadow-sm shadow-orange-200'
                  : 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
        </div>

        {/* 3-Card Carousel */}
        <div className="overflow-hidden py-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {/* Left spacer so first card can be centred */}
            <div className="flex-shrink-0 hidden sm:block" style={{ width: `${100 / 3}%` }} />

            {testimonials.map((item, index) => {
              const isCentre = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: typeof window !== 'undefined' && window.innerWidth < 640 ? '85%' : `${100 / 3}%` }}
                >
                  <div
                    className={`rounded-2xl p-6 border-2 transition-all duration-700 ease-in-out origin-center ${
                      isCentre
                        ? 'scale-[1.07] bg-white border-orange-400 shadow-2xl shadow-orange-200/70 z-10 relative'
                        : 'scale-[0.93] bg-[#FFF7F1] border-transparent opacity-50 blur-[0.5px]'
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${
                      isCentre ? 'bg-orange-500' : 'bg-orange-100'
                    }`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`transition-colors duration-500 ${isCentre ? 'text-white' : 'text-orange-500'}`}>
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <p className={`leading-relaxed mb-6 text-[15px] transition-colors duration-500 ${isCentre ? 'text-gray-700' : 'text-gray-500'}`}>
                      {item.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-orange-100">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${
                        isCentre ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-600'
                      }`}>
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Right spacer so last card can be centred */}
            <div className="flex-shrink-0 hidden sm:block" style={{ width: `${100 / 3}%` }} />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? 'w-7 h-2.5 bg-orange-500'
                  : 'w-2.5 h-2.5 bg-orange-200 hover:bg-orange-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
