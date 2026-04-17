"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../pages/breadcrumb";
import { useRouter } from "next/navigation";

const Horoscopedaily = ({ activeSign = "aries" }) => {
  const [horoscopes, setHoroscopes] = useState([]);
  const [activeTab, setActiveTab] = useState("daily");
  const [horoscopeContent, setHoroscopeContent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.indiandetectiveservices.com/public/api/v1/zodiac-signs")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success === 1 && Array.isArray(resData.data)) {
          setHoroscopes(resData.data);
        }
      })
      .catch((err) => console.error("Error loading signs:", err));
  }, []);

  useEffect(() => {
    setHoroscopeContent(null);
    fetch(`https://api.indiandetectiveservices.com/public/api/v1/horoscope/${activeSign}/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setHoroscopeContent(data.data);
        } else {
          setHoroscopeContent(null);
        }
      })
      .catch((err) => {
        console.error("Error loading horoscope:", err);
      });
  }, [activeSign, activeTab]);

  const tabs = ["daily", "tomorrow", "weekly", "monthly", "yearly"];

  return (
    <>
      <Breadcrumb page="Daily Horoscope" />

      {/* Hero Header */}
      <section className="bg-[#FFF7F1] py-10">
        <div className="container mx-auto px-4">
          <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Horoscope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
            Today&apos;s <span className="text-orange-500 capitalize">{activeSign}</span> Horoscope
          </h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Discover what the stars have in store for you today!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">

          {/* Zodiac Sign Selector */}
          <div
            className="flex gap-3 overflow-x-auto pb-6 mb-8 border-b border-gray-100"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {horoscopes.map((sign) => {
              const isActive = sign.name.toLowerCase() === activeSign;
              return (
                <div
                  key={sign.id}
                  onClick={() => router.push(`/daily-horoscope/${sign.name.toLowerCase()}`)}
                  className={`flex flex-col items-center cursor-pointer flex-shrink-0 p-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-50 border-2 border-orange-300 shadow-sm'
                      : 'border-2 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-2 transition-colors duration-300 ${
                    isActive ? 'bg-orange-100' : 'bg-gray-50'
                  }`}>
                    <Image src={sign.icon} width={48} height={48} alt={sign.name} className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isActive ? 'text-orange-600' : 'text-gray-500'
                  }`}>
                    {sign.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white shadow-sm shadow-orange-200'
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-orange-200 hover:text-orange-500'
                }`}
              >
                {tab}&apos;s Horoscope
              </button>
            ))}
          </div>

          {/* Horoscope Content + Lucky Items */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Content */}
            <div className="flex-1">
              <div className="bg-[#FFF7F1] rounded-2xl p-4 sm:p-6 md:p-8 border border-orange-100">
                {horoscopeContent?.content ? (
                  <div
                    className="prose prose-gray max-w-none text-gray-600 leading-relaxed [&>p]:mb-4 [&>h3]:text-gray-900 [&>h3]:font-bold [&>h3]:mb-2 [&>h4]:text-gray-800 [&>h4]:font-semibold [&>h4]:mb-2"
                    dangerouslySetInnerHTML={{ __html: horoscopeContent.content }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <p className="text-gray-500">No horoscope available for this period.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Lucky Items Sidebar */}
            <div className="md:w-80 flex-shrink-0 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lucky Items for You</h3>

              {horoscopeContent ? (
                <>
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#d97706" stroke="none"><circle cx="12" cy="12" r="10"/></svg>
                      </span>
                      <p className="text-sm text-gray-500 capitalize">Lucky Color for {activeTab}</p>
                    </div>
                    <p className={`font-bold text-lg ${horoscopeContent.lucky_color ? 'text-gray-900' : 'text-gray-400'}`}>
                      {horoscopeContent.lucky_color || "Not available"}
                    </p>
                  </div>

                  <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-sm">
                        #
                      </span>
                      <p className="text-sm text-gray-500 capitalize">Lucky Number for {activeTab}</p>
                    </div>
                    <p className={`font-bold text-lg ${horoscopeContent.lucky_number ? 'text-gray-900' : 'text-gray-400'}`}>
                      {horoscopeContent.lucky_number || "Not available"}
                    </p>
                  </div>

                  <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500 font-bold text-sm">
                        A
                      </span>
                      <p className="text-sm text-gray-500 capitalize">Lucky Alphabets</p>
                    </div>
                    <p className={`font-bold text-lg ${horoscopeContent.lucky_alphabet ? 'text-gray-900' : 'text-gray-400'}`}>
                      {horoscopeContent.lucky_alphabet || "Not available"}
                    </p>
                  </div>
                </>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm">Lucky items not available for this sign.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Horoscopedaily;
