'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const accordionItems = [
  {
    title: 'How accurate are the predictions on Horoscope Vale?',
    content: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.'
  },
  {
    title: 'How can I consult an astrologer on Horoscope Vale?',
    content: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.'
  },
  {
    title: 'How can I consult an astrologer on Horoscope Vale?',
    content: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.'
  },
  {
    title: 'How can I consult an astrologer on Horoscope Vale?',
    content: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.'
  },
  {
    title: 'How can I consult an astrologer on Horoscope Vale?',
    content: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.'
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 font-semibold">
        <h2 className='text-3xl pb-8'>Frequently Asked Question</h2>
      {accordionItems.map((item, index) => (
        <div key={index} className="border rounded-lg shadow mb-2">
          <button
            className={`w-full flex rounded-t-lg justify-between p-4 transition-colors duration-300  ${activeIndex === index ? " bg-[#EF6800] text-white":" bg-[#FFF7F1] text-black"}`}
            onClick={() => handleToggle(index)}
          >
            <span className="font-semibold text-lg text-left">{item.title}</span>
            {activeIndex === index ? (
              <FaMinus className="text-white" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 text-sm ${
              activeIndex === index ? 'max-h-40 p-4 bg-white' : 'max-h-0 p-0'
            }`}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
