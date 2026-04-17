
import Image from 'next/image';
import React from 'react';

const articles = [
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there\u2019s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there\u2019s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there\u2019s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
  {
    image: '/images/article1.jpg',
    title: 'Find Your Guardian Angel According to Your Zodiac Sign',
    description: 'Have you ever wondered if there\u2019s a special guardian angel watching over you?',
    author: 'Ranjana Verma',
    date: 'March 30, 2025',
  },
];

export default function RecentArticles() {
  return (
    <section className="py-12 sm:py-20 bg-[#FFF7F1]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Blog & Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
              Recent <span className="text-orange-500">Articles</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Explore the latest insights on astrology, zodiac signs, and spiritual guidance.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-200 shadow-sm shadow-orange-200 active:scale-95 self-start md:self-auto"
          >
            View All Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={345}
                  height={390}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold text-white bg-orange-500 px-3 py-1 rounded-full shadow-sm">
                    Astrology
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-[16px] leading-snug mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{article.author}</span>
                  </div>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
