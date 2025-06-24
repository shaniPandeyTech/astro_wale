
import Image from 'next/image';
import React from 'react';

const articles = [
  {
    image: '/images/article1.jpg', // Replace with actual image URLs
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there’s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there’s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there’s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there’s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
];

export default function RecentArticles() {
  return (
    <section className="py-12 bg-white border-b  ">
         <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Recent Article</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden border"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={345}
              height={390}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {article.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}