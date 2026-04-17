"use client";

import Image from "next/image";

const services = [
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
  { title: "Free Kundli Generation", description: "Personalized birth chart with detailed analysis!" },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-[#FFF7F1]">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-white border border-orange-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Our Services
          </span>
          <h2 className="max-w-full md:max-w-[520px] text-left text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-snug">
            Our Astrology Services - <br className="hidden sm:block" />
            <span className="text-orange-500">Unlock The Secrets</span> of Your Life!
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg">
            Explore our wide range of astrology services designed to guide you on your life journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group px-5 py-6 rounded-2xl flex flex-col bg-white border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/60 hover:border-orange-200"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-100">
                <Image
                  src="/images/kundli-gengration.svg"
                  alt="kundli generation"
                  width={28}
                  height={28}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>

                <span className="w-8 h-8 flex-shrink-0 ml-3 flex items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:bg-orange-500 group-hover:translate-x-1">
                  <Image
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                    width={16}
                    height={16}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
