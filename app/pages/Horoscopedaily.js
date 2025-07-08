"use client"
import Image from "next/image";
import React from "react";
import { FaArrowAltCircleRight, FaArrowRight, FaHome, faArrowRight } from "react-icons/fa";
import Breadcrumb from "./breadcrumb";
import { useEffect, useState } from 'react';
const Horoscopedaily = () => {
  const [horoscopes, setHoroscopes] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeSign = "Aries"; // You can make this dynamic later

  useEffect(() => {
    fetch('https://api.indiandetectiveservices.com/public/api/v1/reviews')
      .then(res => res.json())
      .then(resData => {
        if (resData.success === 1 && Array.isArray(resData.data)) {
          setHoroscopes(resData.data); // ✅ store only data array
        } else {
          console.error('API call successful but data missing');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reviews:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
<Breadcrumb page={"Daily Horoscope"} />


    <section className="bg-[#FFF3EA]">
         <div className="container mx-auto  text-black py-6 ">
      <h2 className="text-3xl font-bold mb-1">Today’s Horoscope</h2>
      <p className="text-gray-600 mb-6">Discover what the stars have in store for you today!</p>
</div>
    </section>
    <div className="container mx-auto bg-white text-black pt-8 pb-20">
    

      {/* Zodiac Icons */}
      <div className="flex space-x-4 overflow-x-auto py-8 border-b mb-6">
        {horoscopes.map((sign) => (
          <div key={sign} className={`flex flex-col items-center cursor-pointer ${sign === activeSign ? "text-orange-500" : "text-gray-500"}`}>
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                <Image src={sign.icon} width={90} height={90} alt={sign.name}  />
            </div>
            <span className="text-xs">{sign.name}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 mt-4">
        {["Today's Horoscope", "Tomorrow's Horoscope", "Weekly Horoscope", "Monthly Horoscope", "Yearly 2025 Horoscope"].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm border ${
              index === 0 ? "bg-orange-100 text-orange-600 border-orange-400" : "border-gray-300 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Horoscope Details */}
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <p>
            Today is an exciting day full of fresh prospects and opportunities. It is time to accept change and venture into unexplored territory. Your
            unique ideas and active attitude will be greatly appreciated by your coworkers and superiors.
          </p>

          <div className="bg-orange-100 text-orange-700 p-3 rounded-lg text-sm font-semibold">
            › Tip for the day: Spend some time with loved ones to recharge emotionally.
          </div>

          <div>
            <h4 className="font-semibold mb-1">Career & Finance</h4>
            <p className="text-gray-700">
              New opportunities could emerge unexpectedly — be ready to grab them! However, don’t rush decisions, especially if they involve long-term
              commitments. A minor gain in finances is possible.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Love & Relationships</h4>
            <p className="text-gray-700">
              You’ll feel more connected with your partner today. If single, someone from your past might reach out — think twice before reigniting old
              flames.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Health & Wellness</h4>
            <p className="text-gray-700">
              Energy levels are high, but avoid overexertion. Light meditation or evening walks can help maintain balance.
            </p>
          </div>
        </div>

        {/* Lucky Items */}
        <div className="md:w-1/3 bg-white space-y-4">
          <h3 className="text-xl font-semibold">Lucky items for you</h3>

          <div className="bg-yellow-100 p-3 rounded">
            <p className="text-sm">Aries Lucky Color For Today</p>
            <p className="font-bold">Purple , Orange</p>
          </div>

          <div className="bg-red-100 p-3 rounded">
            <p className="text-sm">Aries Lucky Number For Today</p>
            <p className="font-bold">8, 36</p>
          </div>

          <div className="bg-blue-100 p-3 rounded">
            <p className="text-sm">Aries Lucky Alphabets</p>
            <p className="font-bold">A, B</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Horoscopedaily;
