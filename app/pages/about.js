import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold tracking-wider text-orange-500 uppercase bg-orange-50 px-4 py-1.5 rounded-full">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              About Horoscope Vata - <br />
              <span className="text-orange-500">Unlock The Secrets</span> of Your Destiny
            </h2>

            <p className="text-gray-500 leading-relaxed">
              With over 25 years of experience in Vedic astrology, we have guided thousands of people
              towards a better understanding of their life&apos;s purpose and destiny. Our team of certified
              astrologers combines ancient wisdom with modern insights to provide accurate predictions
              and practical solutions.
            </p>

            <p className="text-gray-500 leading-relaxed">
              We specialize in various branches of astrology including Vedic astrology, numerology,
              palmistry, and vastu shastra. Our personalized approach ensures that each consultation
              is tailored to your unique birth chart and life circumstances.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 pt-2">
              <div>
                <p className="text-3xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-400">Expert Astrologers</p>
              </div>
            </div>

            <button className="group inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer mt-2 transition-colors duration-300 hover:text-orange-600">
              Join the Horoscope Vale family today
              <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:translate-x-1">
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </span>
            </button>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 lg:w-[440px] lg:h-[440px] rounded-3xl overflow-hidden bg-orange-50 p-6">
              <Image
                src="/images/horoscopeValue.png"
                alt="Zodiac Wheel"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
