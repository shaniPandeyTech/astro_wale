
'use client';
import { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    title: "Unlock the Secrets of Your Future - Consult India's Best Astrologers Online!",
    description: "Get personalized predictions and guidance from certified astrologers. Discover what the stars have in store for you.",
    image: "/images/sign.png",
    bg: "/images/heroBannerBg.jpg ",
  },
  {
    title: "Astrological Insights at Your Fingertips",
    description: "Our expert astrologers are available 24/7 to guide you through life's challenges and opportunities.",
    image: "/images/sign.png",
    bg: "/images/heroBannerBg.jpg ",
  },
  {
    title: "Discover Your Zodiac Compatibility",
    description: "Learn how your zodiac signs align with your partner, career, and life path through expert consultations.",
    image: "/images/sign.png",
    bg: "/images/heroBannerBg.jpg ",
  },
];

export default function AstrologySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative text-white py-20"  style={{ backgroundImage: "url('/images/heroBannerBg.png')" }}>
    <div className="container mx-auto px-4 z-10 relative py-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-8 transition-all duration-500 ease-in-out">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-[40px] font-bold leading-tight">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xl text-purple-100">
              {slides[currentIndex].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#460190] p-4 rounded-2xl text-lg">
              Get Consultation
            </button>
            <button className="border border-white text-white p-4 text-lg rounded-2xl">
              Chat with Astrologer
            </button>
          </div>

          {/* Navigation Buttons */}
         
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          <Image
            src="/images/sign.png"
            alt="Zodiac Wheel"
           width={522}
           height={522}
            className=" animate-spin-slow"
          />
        </div>
      </div>
      </div>
    </div>

    <div className="flex justify-center gap-4 mt-6">
            <button onClick={prevSlide} className="absolute  items-center justify-center top-1/2 left-0 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
            ❮
            </button>
            <button onClick={nextSlide} className="absolute  items-center justify-center top-1/2 right-0 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
            ❯
            </button>
          </div>
    </section>
  );
}