import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import LoveImage from './love-banner.png'; // Replace with your actual image path

export default function LovePredictionBanner() {
  return (
    <div className=" text-white px-6 pt-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between  overflow-hidden"
    style={{ backgroundImage: "url('/images/loverbg.jpg')" }}
    >
      {/* Left Content */}
      <div className="container">
        <div className='flex justify-between items-center mb-6 relative'>
        <div className='pb-16'>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Curious About Your Love Life?
        </h2>
        <p className="text-lg mb-6">
          Your stars hold the key to your romantic journey.<br />
          Get Your Personalized Love Horoscope Now
        </p>
        <button className="group inline-flex items-center gap-2 text-orange-500 bg-white px-5 py-3 rounded-full font-semibold hover:bg-orange-100 transition">
          Check Love Prediction <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>

        </div>


        <div className=" absolute right-0 -bottom-6">
        <Image
          src="/images/LoveImage.png"
          alt="Love Horoscope Banner"
          className=" "
          width={800}
          height={600}
        />
      </div>
      </div>
      </div>

      {/* Right Image */}
   
    </div>
  );
}
