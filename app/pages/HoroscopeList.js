import React from 'react';

const horoscopes = [
  { name: 'Aries', date: '21 Mar - 20 Apr', icon: '/images/aries.svg' },
  { name: 'Taurus', date: '21 Apr - 21 May', icon: '/images/taurus.svg' },
  { name: 'Gemini', date: '22 May - 21 Jun', icon: '/images/gemini.svg' },
  { name: 'Cancer', date: '22 Jun - 22 Jul', icon: '/images/cancer.svg' },
  { name: 'Leo', date: '23 Jun - 23 Aug', icon: '/images/leo.svg' },
  { name: 'Virgo', date: '24 Aug - 22 Sep', icon: '/images/virgo.svg' },
  { name: 'Libra', date: '23 Sep - 23 Oct', icon: '/images/libra.svg' },
  { name: 'Scorpio', date: '24 Oct - 22 Nov', icon: '/images/scorpio.svg' },
  { name: 'Sagittarius', date: '23 Nov - 21 Dec', icon: '/images/sagittarius.svg' },
  { name: 'Capricorn', date: '22 Dec - 20 Jan', icon: '/images/capricorn.svg' },
  { name: 'Aquarius', date: '21 Jan - 18 Feb', icon: '/images/aquarius.svg' },
  { name: 'Pisces', date: '19 Feb - 20 Mar', icon: '/images/pisces.svg' },
];

const stats = [
  { value: '50,341+', label: 'Verified Astrologers' },
  { value: '2.1+ Billion', label: 'Minutes of Consultations' },
  { value: '92+ Million', label: 'Happy Customers' },
  { value: '4.9/5', label: 'Average Customer Rating' },
];

const HoroscopeList = () => {
  return (
    <section className="py-20 bg-[#FFF7F1]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Daily Predictions
            </span>
            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              Free Daily <span className="text-orange-500">Horoscopes</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Select your zodiac sign and discover what the stars reveal for you today.
            </p>
          </div>
          <a
            href="/free-kundli"
            className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-200 shadow-sm shadow-orange-200 active:scale-95 self-start md:self-auto"
          >
            Get Your Free Kundli
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {horoscopes.map((item) => (
            <a
              key={item.name}
              href={`/daily-horoscope/${item.name.toLowerCase()}`}
              className="group flex flex-col items-center text-center px-4 py-5 rounded-2xl bg-white border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200"
            >
              <div className="w-20 h-20 rounded-xl bg-orange-50 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-orange-100">
                <img src={item.icon} alt={item.name} className="w-14 h-14 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{item.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-orange-400 bg-orange-50 px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Read More
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
              </span>
            </a>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-14 bg-white px-6 py-10 rounded-2xl grid grid-cols-2 sm:grid-cols-4 text-center gap-6 border border-orange-100">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoroscopeList;
