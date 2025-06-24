import Image from "next/image";




export default function About() {
    return(
        <section id="about" className="py-16 bg-white">
         
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  About Horoscope Vata - Unlock The Secrets of Your Destiny
                </h2>
                
                <p className="text-gray-600 mb-6">
                  With over 25 years of experience in Vedic astrology, we have guided thousands of people
                  towards a better understanding of their life's purpose and destiny. Our team of certified
                  astrologers combines ancient wisdom with modern insights to provide accurate predictions
                  and practical solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  We specialize in various branches of astrology including Vedic astrology, numerology,
                  palmistry, and vastu shastra. Our personalized approach ensures that each consultation
                  is tailored to your unique birth chart and life circumstances.
                </p>
                <button className="text-orange-500 flex gap-x-2  hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                Join the Horoscope Vale family today and discover what the stars have in store for you! 

                <span className="w-6 h-6 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={24}
        height={24}
      />
    </span>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/horoscopeValue.png"
                  alt="Zodiac Wheel"
                  fill
                  className="object-contain "
                />
              </div>
            </div>

          </div>
        </div>
       
      </section>
    )
}