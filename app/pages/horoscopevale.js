
// 
'use client';

import Image from 'next/image';

export default function HoroscopeVale() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white "
      style={{ backgroundImage: "url('/images/panditjeebg.svg')" }}
    >
      <div className="container mx-auto px-4 relative">
      
    

    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 py-16 md:py-32 gap-10 items-center  z-10">
       
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Horoscope Vale?
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            Find clarity and direction in life—trust Horoscope Vale for all your astrology needs!
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">
            {[
              {
                title: '100% Verified Astrologers',
                desc: 'Trusted, experienced, and highly rated.'
              },
              {
                title: 'Instant Chat & Call',
                desc: 'Get answers quickly, 24/7.'
              },
              {
                title: 'Affordable Consultations',
                desc: 'Value-packed guidance that fits your budget.'
              },
              {
                title: 'Privacy Guaranteed',
                desc: 'Your conversations are safe and confidential.'
              },
              {
                title: 'Personalized Remedies',
                desc: 'Solutions designed just for you.'
              },
              {
                title: 'Trusted by Millions',
                desc: 'Join thousands of satisfied users.'
              }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1"><Image src="/images/tick.svg" width={20} height={16}  /></span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-white/80 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#"
              className="bg-white text-orange-500 font-semibold text-sm px-5 py-3 rounded shadow hover:bg-orange-100 transition"
            >
              Start Your Consultation Now →
            </a>
          </div>
        </div>

      
      </div>

      <div className="flex justify-center relative lg:absolute lg:right-0 lg:bottom-0">
          <Image
            src="/images/panditji.svg"
            alt="Astrologer"
            width={650}
            height={888}
            className="w-full max-w-[750px] rounded-xl object-cover"
          />
        </div>

        {/* Image */}
       



      </div>
    </section>
  );
}
