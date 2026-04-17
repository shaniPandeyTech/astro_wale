import Image from 'next/image';
import React from 'react';

export default function LovePredictionBanner() {
  return (
    <section
      className="relative py-12 sm:py-20 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/loverbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              Love Horoscope
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Curious About Your <span className="text-orange-300">Love Life?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Your stars hold the key to your romantic journey. Get your personalized love horoscope now.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-white text-orange-500 font-semibold px-7 py-3.5 rounded-xl shadow-lg cursor-pointer hover:bg-orange-50 active:scale-95 transition-all duration-200"
            >
              Check Love Prediction
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="hidden md:block">
            <Image
              src="/images/LoveImage.png"
              alt="Love Horoscope"
              width={500}
              height={400}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
