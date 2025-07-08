'use client';

import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Suman Rajpoot",
    location: "New Delhi",
    text: "Horoscope Vale’s astrological insights have been truly enlightening. Their predictions and remedies are accurate and deeply rooted in Vedic wisdom!"
  },
  {
    id: 2,
    name: "Priya Sen",
    location: "Kolkata",
    text: "I never believed in astrology, but the daily horoscope and live consultations changed my perspective. The astrologers here truly understand Vedic astrology."
  },
  {
    id: 3,
    name: "Aman Singh",
    location: "Hyderabad",
    text: "I was struggling with my career decisions, but after consulting an astrologer at Horoscope Vale, I got the clarity I needed. Their predictions were spot on!"
  },
  {
    id: 4,
    name: "Neha Malhotra",
    location: "Pune",
    text: "Horoscope Vale’s remedies actually work! The yantra I purchased brought so much peace and positivity into my life."
  }
];

const Testimonials = () => {

  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    fetch('https://api.indiandetectiveservices.com/public/api/v1/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reviews:', err);
        setLoading(false);
      });
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const end = startIndex + visibleCount;
    return testimonials.slice(startIndex, end).concat(
      end > testimonials.length ? testimonials.slice(0, end - testimonials.length) : []
    );
  };

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Our Customers Say About Horoscope Vale 
        </h2>

        <div className="relative">

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center px-5">
            {getVisibleTestimonials().map((item) => (
              <div key={item.id} className="bg-[#FFF7F1] rounded-xl shadow p-6 text-center w-full">
                <p className="text-xl mb-4">❝</p>
                <p className="italic mb-4">{item.text}</p>
                <p className="font-bold">– {item.name}, {item.location}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prevSlide} className="absolute  items-center justify-center top-1/2 -left-4 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
              ❮
            </button>
            <button onClick={nextSlide} className="absolute  items-center justify-center top-1/2 -right-4 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
              ❯
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;