
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    title: "Unlock the Secrets of Your Future - Consult India's Best Astrologers Online!",
    description: "Get personalized predictions and guidance from certified astrologers. Discover what the stars have in store for you.",
  },
  {
    title: "Astrological Insights at Your Fingertips",
    description: "Our expert astrologers are available 24/7 to guide you through life's challenges and opportunities.",
  },
  {
    title: "Discover Your Zodiac Compatibility",
    description: "Learn how your zodiac signs align with your partner, career, and life path through expert consultations.",
  },
];

export default function AstrologySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  function startAutoPlay() {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  }

  function stopAutoPlay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  }

  function goTo(index) {
    setCurrentIndex(index);
    startAutoPlay();
  }

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <section
      className="relative text-white py-12 sm:py-20 overflow-hidden"
      style={{ backgroundImage: "url('/images/heroBannerBg.png')" }}
    >
      <div className="container mx-auto px-4 z-10 relative py-4 sm:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-2 sm:px-8 md:px-12">
          {/* Sliding Text Section */}
          <div className="space-y-8 overflow-hidden">
            <div className="relative">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 space-y-4 pr-4"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-xl text-purple-100">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#460190] px-5 py-3 sm:p-4 rounded-2xl text-base sm:text-lg cursor-pointer hover:bg-gray-100 transition-colors">
                Get Consultation
              </button>
              <button className="border border-white text-white px-5 py-3 sm:p-4 text-base sm:text-lg rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                Chat with Astrologer
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <Image
                src="/images/sign.png"
                alt="Zodiac Wheel"
                width={522}
                height={522}
                className="animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={goPrev}
        className="cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 active:scale-90 transition-all duration-200 shadow-md z-20"
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 active:scale-90 transition-all duration-200 shadow-md z-20"
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-7 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
