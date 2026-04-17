export default function FreeKundliForm() {
  return (
    <section className="py-12 sm:py-20 bg-[#FFF7F1]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full shadow-sm">
              Free Kundli
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              Generate Your Free <span className="text-orange-500">Janam Kundli</span> Instantly with Horoscope Wale
            </h1>

            <p className="text-gray-500 leading-relaxed max-w-xl">
              Today is an exciting day full of fresh prospects and opportunities. It is time to accept change and venture into unexplored territory. Your unique ideas and active attitude will be greatly appreciated by your coworkers and superiors.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Why Get Your Kundli from Horoscope Wale?</h2>
              <ul className="space-y-3">
                {[
                  { title: 'Accurate Vedic Calculations', desc: 'Powered by trusted Panchang and astrology systems' },
                  { title: 'Hindi & English Kundli', desc: 'Choose your preferred language' },
                  { title: 'Free For Life', desc: 'No subscription, no upselling' },
                  { title: '100% Privacy Guaranteed', desc: 'Your details are secure' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2">
            <form className="bg-white p-5 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Enter Your Birth Details</h3>
              <p className="text-sm text-gray-400 mb-6 pb-5 border-b border-gray-100">Generate your personalized Kundli report instantly.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                  <input type="text" name="name" placeholder="Enter your full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Gender</label>
                  <select name="gender" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all cursor-pointer">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Date of Birth</label>
                  <input type="date" name="dob" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Birth Time</label>
                  <div className="flex gap-3">
                    <select className="w-1/3 border border-gray-200 rounded-xl px-3 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all cursor-pointer">
                      {Array.from({ length: 12 }, (_, i) => <option key={i}>{String(i + 1).padStart(2, '0')}</option>)}
                    </select>
                    <select className="w-1/3 border border-gray-200 rounded-xl px-3 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all cursor-pointer">
                      {Array.from({ length: 60 }, (_, i) => <option key={i}>{String(i).padStart(2, '0')}</option>)}
                    </select>
                    <select className="w-1/3 border border-gray-200 rounded-xl px-3 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all cursor-pointer">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Place of Birth</label>
                  <input type="text" name="place" placeholder="Enter city" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all" />
                </div>

                <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-base cursor-pointer hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
                  Generate Free Kundli
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
