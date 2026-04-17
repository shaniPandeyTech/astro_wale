import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaGlobe, FaStar, FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AstrologerProfile = () => {
  return (
    <>
      {/* Profile Header */}
      <section className="py-10 bg-[#FFF7F1]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="relative flex-shrink-0">
              <Image
                src="/images/aboutHoroscope1.png"
                alt="Acharya Bharati Mishra"
                width={280}
                height={300}
                className="w-full sm:w-72 h-64 sm:h-80 rounded-2xl object-cover border-4 border-white shadow-lg"
              />
              <span className="absolute top-3 left-0 bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[11px] font-bold px-3 py-1 rounded-r-full shadow-sm">
                Top Rated
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center flex-wrap gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Acharya Bharati Mishra</h2>
                  <FaCheckCircle className="text-green-500" />
                  <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    <FaStar className="text-[10px]" /> 4.5
                  </span>
                </div>

                <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 text-sm rounded-xl font-medium">
                  7 Years of Experience
                </span>

                <p className="text-gray-500">Vedic Astrologer, Numerology</p>

                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <FaGlobe className="text-orange-400" />
                  <span>English, Hindi</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-medium text-sm cursor-pointer hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-sm shadow-orange-200">
                  <FaMessage className="text-xs" /> Chat - ₹25/Min
                </button>
                <button className="flex items-center gap-2 bg-white text-orange-500 border border-orange-200 px-6 py-3 rounded-xl font-medium text-sm cursor-pointer hover:bg-orange-50 active:scale-95 transition-all duration-200">
                  <FaPhone className="text-xs" /> Call - ₹25/Min
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Stats */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* About + Experience */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">About me</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  I specialize in Astrology, offering detailed insights into individuals&apos; lives through Vedic Astrology practices. My services include comprehensive analyses of Birth Charts, exploring planetary positions and their influences on various aspects of life. I provide precise predictions and guidance on career, relationships, health, and more. Additionally, I conduct remedial measures to mitigate Doshas like Kaal Sarp, Pitra, Guru Chandal, etc., present in clients&apos; charts, offering solutions through gemstone recommendations, rituals, or mantras.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Experience & Qualification</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  With years of experience, I hold a master&apos;s degree in Astrology and Vedic Sciences, along with certifications in advanced astrological studies. I&apos;ve assisted numerous individuals globally, guiding them through challenging times and empowering them with astrological knowledge. My expertise lies in decoding intricate planetary configurations, facilitating in-depth consultations, and crafting personalized solutions.
                </p>
              </div>
            </div>

            {/* Client Stats */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Client Served</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                    <FaMessage />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Total Minutes of Chats</p>
                    <p className="text-sm text-gray-500">10k Mins</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Total Minutes of Calls</p>
                    <p className="text-sm text-gray-500">14k Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
              <div>
                <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-3 shadow-sm">
                  Reviews
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Client <span className="text-orange-500">Reviews</span></h3>
              </div>
              <a href="#" className="group inline-flex items-center gap-1 text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors cursor-pointer self-start sm:self-auto">
                View All
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><polyline points="9 6 15 12 9 18" /></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group bg-[#FFF7F1] rounded-2xl p-6 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200">
                  <div className="flex gap-0.5 mb-3">
                    {Array(5).fill().map((_, idx) => (
                      <svg key={idx} width="14" height="14" viewBox="0 0 24 24" fill="#f97316" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    &ldquo;Horoscope Vale&apos;s astrological insights have been truly enlightening. Their predictions and remedies are accurate and deeply rooted in Vedic wisdom!&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-orange-100">
                    <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-bold text-xs">S</div>
                    <p className="text-sm font-semibold text-gray-800">Suman Rajpoot, New Delhi</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AstrologerProfile;
