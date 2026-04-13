'use client';
import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'How accurate are the predictions on Horoscope Vale?',
    answer: 'Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.',
  },
  {
    question: 'How can I consult an astrologer on Horoscope Vale?',
    answer: 'You can book consultations through our platform via call, chat, or email with certified astrologers.',
  },
  {
    question: 'Is my personal information kept confidential?',
    answer: 'Yes, all your data is fully encrypted and never shared without your consent.',
  },
  {
    question: 'What services do you offer apart from Kundli readings?',
    answer: 'We offer gemstone recommendations, daily horoscopes, Vastu consultations, and personalized reports.',
  },
  {
    question: 'How do I know which gemstone or remedy is right for me?',
    answer: 'After analyzing your Kundli, our astrologers suggest remedies and gemstones tailored to your needs.',
  },
];

function AccordionItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-orange-200 shadow-lg shadow-orange-100/40 bg-white' : 'border-gray-100 bg-white hover:border-orange-100'}`}>
      <button
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 cursor-pointer group"
        onClick={() => onToggle(index)}
      >
        <div className="flex items-center gap-4">
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-500 group-hover:bg-orange-100'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-semibold text-left transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-gray-800'}`}>
            {item.question}
          </span>
        </div>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-500 ${isOpen ? 'bg-orange-500 rotate-180' : 'bg-orange-50 rotate-0 group-hover:bg-orange-100'}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : '#f97316'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: `${height}px` }}>
        <div ref={contentRef} className="px-4 sm:px-6 pb-5 pl-14 sm:pl-[4.5rem]">
          <p className="text-gray-500 leading-relaxed text-[15px]">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Everything you need to know about our astrology services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} isOpen={activeIndex === index} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </section>
  );
}
