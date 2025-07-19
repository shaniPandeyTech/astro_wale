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
  // Load zodiac signs
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
            <div
              key={sign.id}
              onClick={() => router.push(`/daily-horoscope/${sign.name.toLowerCase()}`)}
              className={`flex flex-col items-center cursor-pointer ${sign.name.toLowerCase() === activeSign ? "text-orange-500" : "text-gray-500"
                }`}
            >
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                <Image src={sign.icon} width={90} height={90} alt={sign.name} />
              </div>
              <span className="text-xs">{sign.name}</span>
            </div>
          ))}
        </div>


        {/* Tabs */}
        <div className="flex space-x-3 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-4 py-2 rounded-full text-sm border ${activeTab === tab
                ? "bg-orange-100 text-orange-600 border-orange-400"
                : "border-gray-300 text-gray-600"
                }`}
            >
              {tab}'s Horoscope
            </button>
          ))}
        </div>

        {/* Horoscope Details */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {horoscopeContent?.content ? (
              <div dangerouslySetInnerHTML={{ __html: horoscopeContent.content }} />
            ) : (
              <p>No horoscope available</p>
            )}
            {/* {horoscopeContent.content} */}
            {/* <p>
              Today is an exciting day full of fresh prospects and opportunities. It is time to accept change and venture into unexplored territory. Your
              unique ideas and active attitude will be greatly appreciated by your coworkers and superiors.
            </p> */}

            {/* <div className="bg-orange-100 text-orange-700 p-3 rounded-lg text-sm font-semibold">
              › Tip for the day: Spend some time with loved ones to recharge emotionally.
            </div> */}

            {/* <div>
              <h4 className="font-semibold mb-1">Career & Finance</h4>
              <p className="text-gray-700">
                New opportunities could emerge unexpectedly — be ready to grab them! However, don’t rush decisions, especially if they involve long-term
                commitments. A minor gain in finances is possible.
              </p>
            </div> */}

            {/* <div>
              <h4 className="font-semibold mb-1">Love & Relationships</h4>
              <p className="text-gray-700">
                You’ll feel more connected with your partner today. If single, someone from your past might reach out — think twice before reigniting old
                flames.
              </p>
            </div> */}
            {/* 
            <div>
              <h4 className="font-semibold mb-1">Health & Wellness</h4>
              <p className="text-gray-700">
                Energy levels are high, but avoid overexertion. Light meditation or evening walks can help maintain balance.
              </p>
            </div> */}
          </div>

          {/* Lucky Items */}
          <div className="md:w-1/3 bg-white space-y-4">
            <h3 className="text-xl font-semibold">Lucky items for you</h3>

            {horoscopeContent ? (
              <>
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm capitalize">{activeSign} Lucky Color For {activeTab}</p>
                  <p className={`font-bold ${horoscopeContent.lucky_color ? "text-black" : "text-gray-500"}`}>
                    {horoscopeContent.lucky_color || "Not available now"}
                  </p>
                </div>

                <div className="bg-red-100 p-3 rounded">
                  <p className="text-sm capitalize">{activeSign} Lucky Number For {activeTab}</p>
                  <p className={`font-bold ${horoscopeContent.lucky_number ? "text-black" : "text-gray-500"}`}>
                    {horoscopeContent.lucky_number || "Not available now"}
                  </p>
                </div>

                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm capitalize">{activeSign} Lucky Alphabets</p>
                  <p className={`font-bold ${horoscopeContent.lucky_alphabet ? "text-black" : "text-gray-500"}`}>
                    {horoscopeContent.lucky_alphabet || "Not available now"}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-gray-500">Horoscope data not available for this sign.</div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Horoscopedaily;
