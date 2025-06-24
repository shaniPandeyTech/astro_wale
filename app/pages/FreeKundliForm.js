import { FaPlay } from "react-icons/fa";

export default function FreeKundliForm() {
  return (
    <section className="bg-[#fff2e9] pb-12 px-4">

{/* <div className="text-sm py-4 text-orange-600 flex items-center gap-2 border-b ">
<div className="max-w-7xl mx-auto flex text-left flex-col md:flex-row gap-10">
            <span role="img" aria-label="home">🏠</span>
            <span>Free Kundli</span>
            </div>
          </div> */}


      <div className="container mx-auto flex flex-col md:flex-row gap-10 py-16">
      

        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
        

          <h1 className="text-3xl font-bold leading-snug text-black">
            Generate Your Free Janam Kundli Instantly <br className="hidden md:block" />
            with Horoscope Wale
          </h1>

          <p className="text-gray-700 text-base leading-relaxed max-w-xl">
            Today is an exciting day full of fresh prospects and opportunities. It is time to accept change and venture into unexplored territory. Your unique ideas and active attitude will be greatly appreciated by your coworkers and superiors.
          </p>

          <hr className="border-t border-gray-300 max-w-md" />

          <h2 className="text-lg font-semibold text-black">Why Get Your Kundli from Horoscope Wale?</h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <FaPlay className="text-orange-500 mt-1 text-sm" />
              <span className="text-sm text-orange-600 font-semibold">
                Accurate Vedic Calculations – Powered by trusted Panchang and astrology systems
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPlay className="text-orange-500 mt-1 text-sm" />
              <span className="text-sm text-orange-600 font-semibold">
                Hindi & English Kundli – Choose your preferred language
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPlay className="text-orange-500 mt-1 text-sm" />
              <span className="text-sm text-orange-600 font-semibold">
                Free For Life – No subscription, no upselling
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPlay className="text-orange-500 mt-1 text-sm" />
              <span className="text-sm text-orange-600 font-semibold">
                100% Privacy Guaranteed – Your details are secure
              </span>
            </li>
          </ul>
        </div>

        {/* Right Form */}




        









        <form  className="bg-white w-full md:w-[600px] text-black p-6 rounded-lg shadow-lg ">
          <h3 className="text-2xl font- border-b pb-4 mb-4">Enter Your Birth Details to Generate Kundli</h3>

        <label className='text-base'>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            className="w-full border border-gray-300 mb-4 rounded-lg  px-3 py-2"
           
          />
 <label className=''>Select Gender</label>
          <select
            name="gender"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
           
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label className='text-base'>Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
           
          />

<label className='text-base'>Birth Time</label>
<div className="flex gap-2">
            <select className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm">
              {Array.from({ length: 12 }, (_, i) => <option key={i}>{String(i).padStart(2, '0')}</option>)}
            </select>
            <select className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm">
              {Array.from({ length: 60 }, (_, i) => <option key={i}>{String(i).padStart(2, '0')}</option>)}
            </select>
            <select className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>


          <label className='text-base'>Date of place</label>
          <input type="text" placeholder="Enter Place of Birth" className="w-full border border-gray-300 rounded px-4 py-2 text-sm" />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 my-4 rounded-lg hover:bg-orange-600 transition"
          >
            Submit Question →
          </button>
        </form>





















        
      </div>
    </section>
  );
}
