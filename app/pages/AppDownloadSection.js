import Image from 'next/image';

export default function AppDownloadSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              Mobile App
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Download Our App &ndash; <br />
              Your Personal <span className="text-yellow-200">Astrology Guide</span> Anytime, Anywhere!
            </h2>

            <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
              Unlock the power of Vedic astrology at your fingertips! With the Horoscope Vale app, you can:
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-3 mb-8 max-w-md">
              {[
                'Get daily personalized horoscope readings',
                'Chat with verified astrologers 24/7',
                'Generate free Kundli & compatibility reports',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Image src="/images/appstore.svg" alt="Download on App Store" width={160} height={55} className="h-12" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Image src="/images/playstore.svg" alt="Get it on Google Play" width={160} height={55} className="h-12" />
              </a>
            </div>

            {/* Download stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">1M+</span>
                <span className="text-white/60 text-sm leading-tight">Active<br/>Users</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">4.8</span>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fde047" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span className="text-white/60 text-[10px]">App Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-yellow-300/10 rounded-full blur-3xl scale-75" />
              <Image
                src="/images/iphone-1.png"
                alt="Mobile App Preview"
                height={450}
                width={500}
                className="relative z-10 max-h-[360px] md:max-h-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
