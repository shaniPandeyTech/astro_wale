"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "1. How accurate are the predictions on Horoscope Vale?",
    answer:
      "Our astrologers use authentic Vedic astrology principles to provide accurate and personalized predictions based on your Kundli, planetary positions, and life circumstances.",
  },
  {
    question: "2. How can I consult an astrologer on Horoscope Vale?",
    answer:
      "You can book consultations through our platform via call, chat, or email with certified astrologers.",
  },
  {
    question: "3. Is my personal information kept confidential?",
    answer:
      "Yes, all your data is fully encrypted and never shared without your consent.",
  },
  {
    question: "4. What services do you offer apart from Kundli readings?",
    answer:
      "We offer gemstone recommendations, daily horoscopes, Vastu consultations, and personalized reports.",
  },
  {
    question: "5. How do I know which gemstone or remedy is right for me?",
    answer:
      "After analyzing your Kundli, our astrologers suggest remedies and gemstones tailored to your needs.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Question</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded overflow-hidden">
            <button
              onClick={() => toggleFaq(index)}
              className={`w-full text-left px-4 py-3 flex justify-between items-center font-semibold transition-colors ${
                openIndex === index ? "bg-orange-500 text-white" : "bg-orange-50 text-black"
              }`}
            >
              {faq.question}
              <span className={`transition-transform transform ${openIndex === index ? "rotate-180" : ""}`}>
                &#x25B2;
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-white px-4 py-3 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
