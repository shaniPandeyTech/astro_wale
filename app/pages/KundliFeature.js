export default function KundliFeatures() {
  const features = [
    { title: 'Janam Kundli Chart (Birth Chart)', desc: 'A complete Vedic astrology chart with 12 houses, planets, signs, and lagnas.' },
    { title: 'Planetary Positions & Houses', desc: 'Detailed placements of Moon, Sun, Mars, and other celestial bodies with their effects.' },
    { title: 'Doshas & Yogas', desc: 'Info on Mangal Dosha, Kaal Sarp Dosha, Raj Yoga, Gaj Kesari Yoga & more.' },
    { title: 'Life Predictions', desc: 'Insights into your career, love life, marriage, finances, and health.' },
    { title: 'Favourable Gemstones & Remedies', desc: 'Astrological guidance to reduce negative planetary impacts.' },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-2xl overflow-hidden bg-orange-50 p-4">
              <img
                src="/images/kundlireport.jpg"
                alt="Janam Kundli Book"
                className="w-full max-w-lg object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2">
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Kundli Report
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug mb-6 sm:mb-8">
              What Will You Get in Your <span className="text-orange-500">Free Kundli</span> Report?
            </h2>

            <ul className="space-y-5">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
