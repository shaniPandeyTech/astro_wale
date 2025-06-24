import Image from "next/image";
import { FaFilter, FaSearch, FaSortAlphaUpAlt } from "react-icons/fa";




export default function Astrologers(props) {
 
    return(
        <section id="astrologers" className={`${props.heading ? "pt-16" :"" }   bg-gray-50`}>
          <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
        <div className="px-6 py-1">
  
  
        <div className="flex justify-between items-center px-6 py-4">
      {/* Left Title */}
      <h1 className="text-2xl font-semibold">Chat with Astrologer</h1>

      {/* Right Controls */}
      { props.showFilter == true ? 
      <div className="flex items-center space-x-4">
        <button className=" flex border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
          <span className="mr-1 inline-flex "> <FaFilter className="text-black/40" />   </span>  <span>Filter</span>
        </button>
        <button className=" flex border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
          <span className="mr-1 inline-flex items-center "> <Image src={"/images/sort.svg"} width={24} height={24} /> </span> <span>Sort by</span>
        </button>
        <div className="relative">
        <input
          type="text"
          placeholder="Search Astrologer"
          className="border border-gray-300 rounded-md px-4 py-2 pl-8 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
         <span className="mr-1 absolute left-2 top-[30%]"> <FaSearch className="text-black/40" />   </span>
        </div>
      </div> : ""
      }
    </div>





  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
  {Array(props.page === "chat-with-astrologer" ? 20 : 5).fill(0).map((_, index) => (
      <div key={index} className="bg-white rounded-xl border shadow-sm p-4 hover:shadow-md  relative cursor-pointer transform transition-transform hover:scale-105 duration-300  ">
        {index % 4 === 0 && (
          <div className="absolute top-6 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
            Top Rated
          </div>
        )}
<a href="/astrologer-profile" className="block">
        <img
          src="/images/aboutHoroscope1.png"
          alt="Astrologer"
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        </a>

        <div className="flex items-center space-x-2 text-sm mb-2">
          <span className="text-orange-500 font-semibold">★ 4.5</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">7 Years of Experience</span>
        </div>

        <h3 className="font-semibold text-base">Acharya Bharati Mishra</h3>
        <p className="text-sm text-gray-600">Vedic Astrologer, Numerology</p>

        <div className="flex items-center text-xs text-gray-600 mt-2">
          <img src="/images/leng.svg" className="w-4 h-4 mr-1" alt="Languages" />
          Hindi, Gujarati, English
        </div>

        <div className="flex justify-between items-center mt-4 bg-[#FFF7F1] -p-4">
          <p className="text-lg font-semibold text-black">₹ 43.99/Min</p>
          <button className="bg-orange-500 text-white text-sm px-4 py-1 rounded hover:bg-orange-600">
            Chat Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
        </div>
      </section>
    )
}