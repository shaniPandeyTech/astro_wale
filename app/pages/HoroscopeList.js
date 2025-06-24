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

const HoroscopeList = () => {
  return (
    <section className="py-12 px-4 md:px-16 text-center">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <h2 className="text-3xl font-bold">Free Daily Horoscopes</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded">
          Get Your Free Kundli →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {horoscopes.map((item) => (
          <div key={item.name} className="flex flex-col items-center text-center">
            <div className="w-28 h-28  rounded-full flex items-center justify-center mb-2">
              <img src={item.icon} alt={item.name} className="w-28 h-28" />
            </div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-12 bg-orange-100 px-6 py-8 rounded-xl grid grid-cols-2 sm:grid-cols-4 text-center gap-4">
        <div>
          <p className="text-2xl font-bold text-orange-600">50,341+</p>
          <p className="text-sm">Verified Astrologers</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">2.1+ Billion</p>
          <p className="text-sm">Minutes of Consultations</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">92+ Million</p>
          <p className="text-sm">Happy Customers</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">4.9/5</p>
          <p className="text-sm">Average Customer Rating</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HoroscopeList;