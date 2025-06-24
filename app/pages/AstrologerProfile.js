import React from "react";
import { Star, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { FaCheckCircle, FaGlobe, FaPhone, FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AstrologerProfile = () => {
  return (
   
    <>
      <div className="bg-orange-50 border p-6  mx-auto">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Image Section */}
        <div className="relative flex-shrink-0">
          <Image
            src="/images/aboutHoroscope1.png"
            alt="Acharya Bharati Mishra"
            width={280}
            height={300}
            className="w-72 h-80 rounded-xl object-cover"
          />
          <span className="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-br-md font-medium">
            Top Rated
          </span>
        </div>

        {/* Right: Details Section */}
        <div className="flex flex-col justify-between">
         <div className="flex flex-col gap-y-4">  
          <div className="flex items-center flex-wrap gap-2">
            <h2 className="text-2xl font-semibold">Acharya Bharati Mishra</h2>
            <FaCheckCircle className="text-green-600" />
            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded">
              <FaStar className="text-xs" />
              <span>4.5</span>
            </div>
          </div>

         
          <div className="bg-[#E9E8E8] text-gray-600 px-4 py-2 text-base rounded w-fit mt-1">
            7 Years of Experience
          </div>

         
          <p className=" text-gray-800 mt-1 text-base">
            Vedic Astrologer, Numerology
          </p>

         
          <div className="flex items-center text-base text-gray-700 mt-1 gap-2">
            <FaGlobe />
            <span>English, Hindi</span>
          </div>
</div>
         
          <div className="flex gap-4 mt-4 border-t pt-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 text-sm">
              Chat - 25/Minutes →
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 text-sm">
              Call - 25/Minutes →
            </button>
          </div>



        </div>
      </div>
       </div>
    </div>

  
      <div className="container mx-auto p-6">
   
{/* About & Experience */}
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700 border-b pb-8 mb-5">
  {/* Left Column: About + Experience (spans 2 columns on large screens) */}
  <div className="lg:col-span-2 space-y-6">
    {/* About me */}
    <div>
      <h3 className="font-semibold text-lg mb-2">About me</h3>
      <p className="text-sm leading-relaxed">
      I specialize in Astrology, offering detailed insights into individuals' lives through Vedic Astrology practices. My services include comprehensive analyses of Birth Charts, exploring planetary positions and their influences on various aspects of life. I provide precise predictions and guidance on career, relationships, health, and more. Additionally, I conduct remedial measures to mitigate Doshas like Kaal Sarp, Pitra, Guru Chandal, etc., present in clients' charts, offering solutions through gemstone recommendations, rituals, or mantras. My consultations focus on providing clarity and actionable advice for a better future.
      </p>
    </div>

    {/* Experience */}
    <div>
      <h3 className="font-semibold text-lg mb-2">Experience & Qualification</h3>
      <p className="text-sm leading-relaxed">
      With years of experience, I hold a master's degree in Astrology and Vedic Sciences, along with certifications in advanced astrological studies. I've assisted numerous individuals globally, guiding them through challenging times and empowering them with astrological knowledge. My expertise lies in decoding intricate planetary configurations, facilitating in-depth consultations, and crafting personalized solutions to rectify doshas and enhance the positive influences of Rajyog present in clients' charts. I combine traditional wisdom with modern approaches, ensuring accurate and beneficial guidance for my clients' holistic well-being.
      </p>
    </div>
  </div>

  {/* Right Column: Client Served Stats */}
  <div>
    <h3 className="font-semibold text-lg mb-4">Client Served</h3>

    <div className="space-y-4">
      {/* Chat */}
      <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center gap-3">
      <FaMessage />
        <div>
          <div className="text-sm font-semibold">Total Minutes of Chats</div>
          <div className="text-sm">10k Mins</div>
        </div>
      </div>

      {/* Call */}
      <div className="bg-orange-100 text-orange-700 p-4 rounded-lg flex items-center gap-3">
      <FaPhone />
        <div>
          <div className="text-sm font-semibold">Total Minutes of Calls</div>
          <div className="text-sm">14k Mins</div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Client Reviews</h3>
          <button className="text-orange-500 text-sm font-medium hover:underline">
            View All ➝
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm"
            >
              <p className="text-sm italic mb-4">
                “Horoscope Vala’s astrological insights have been truly enlightening. Their predictions and remedies are accurate and deeply rooted in Vedic wisdom!”
              </p>
              <div className="text-sm font-semibold">- Suman Rajooat, New Delhi</div>
              <div className="flex mt-2 text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} size={16} fill="currentColor" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </div>
    </>
  );
};

export default AstrologerProfile;
