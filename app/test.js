import React from 'react';
import Image from 'next/image';
import { Star, Phone, Clock, MapPin, Mail, Users, Shield, Award, ChevronDown, Menu, X } from "lucide-react";
import HoroscopeList from './pages/HoroscopeList';
import CelebrityTestimonials from './pages/CelebrityTestimonials';
import RecentArticles from './pages/RecentArticles';
import Testimonials from './pages/Testimonials';
import CelebrityTestimonial from './pages/CelebrityTestimonials';
import FaqAccordion from './pages/FaqAccordion';
import Slider from './pages/CelebrityTestimonials';
import Faqs from './components/Faqs';
// import Faqs from './pages/Faqs';
import Header from './pages/Header';

import HeroSection from './pages/HeroSection';






// import Slider from 'react-slick';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">


<Header />

<HeroSection />


      {/* Services Section */}
      <section id="services" className="py-16 bg-[#FFF7F1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className=" w-full md:w-[520px] text-left  text-3xl md:text-[32px] font-bold text-gray-900 mb-4">
              Our Astrology Services -
              Unlock The Secrets of Your Life!
            </h2>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* card grid  */}
<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>

<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>
<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>
<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>
<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>
<div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
  <Image
    src={"/images/kundli-gengration.svg"}
    alt="kundligentation"
    width={46}
    height={46}
    className="mb-4"
  />

  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
      <p>Personalized birth chart with detailed analysis!</p>
    </div>

    <span className="w-8 h-8 mb-2">
      <Image
        src={"/images/arrow-right.svg"}
        alt="arrow-right"
        width={32}
        height={32}
      />
    </span>
  </div>
</div>

</div>



        </div>
      </section>

      {/* About Section */}
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
                  className="object-contain animate-spin-slow"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Astrologers Section */}
      <section id="astrologers" className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="px-6 py-10">
  <h2 className="text-3xl font-bold mb-8">About Horoscope</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
    {Array(8).fill(0).map((_, index) => (
      <div key={index} className="bg-white rounded-xl border shadow-sm p-4 hover:shadow-md  relative cursor-pointer transform transition-transform hover:scale-105 duration-300  ">
        {index % 4 === 0 && (
          <div className="absolute top-6 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
            Top Rated
          </div>
        )}

        <img
          src="/images/aboutHoroscope1.png"
          alt="Astrologer"
          className="w-full h-48 object-cover rounded-lg mb-3"
        />

        <div className="flex items-center space-x-2 text-sm mb-2">
          <span className="text-orange-500 font-semibold">★ 4.5</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">7 Years of Experience</span>
        </div>

        <h3 className="font-semibold text-base">Acharya Bharati Mishra</h3>
        <p className="text-sm text-gray-600">Vedic Astrologer, Numerology</p>

        <div className="flex items-center text-xs text-gray-600 mt-2">
          <img src="/images/leng.svg" className="w-4 h-4 mr-1" alt="Languages" />
          Hindi, Gujarati, English
        </div>

        <div className="flex justify-between items-center mt-4 bg-[#FFF7F1] -p-4">
          <p className="text-lg font-semibold text-black">₹ 43.99/Min</p>
          <button className="bg-orange-500 text-white text-sm px-4 py-1 rounded hover:bg-orange-600">
            Chat Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>



      
      <section
      className="relative bg-cover bg-center bg-no-repeat text-white pt-16 px-6 md:px-16"
      style={{ backgroundImage: "url('/images/why-bg.jpg')" }}
    >

  <div className="absolute inset-0 bg-[url('/images/mandala-bg.png')] bg-no-repeat bg-cover opacity-10 pointer-events-none"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
    
  
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Horoscope Vale?</h2>
      <p className="text-lg mb-8 max-w-xl">Find clarity and direction in life—trust Horoscope Vale for all your astrology needs!</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

        <div>
          <div className='flex items-start  gap-3'>
        <span className="text-white mr-2">✔️</span>
          <p className="font-semibold flex items-start">
            
             100% Verified Astrologers
          </p>
          <p className="text-white/80 mt-1">Trusted, experienced, and highly rated.</p>
          </div>
        </div>

       
      </div>

     
      <div className="mt-8">
        <a href="#" className="bg-white text-orange-500 font-semibold text-sm px-5 py-3 rounded shadow hover:bg-orange-100 transition">
          Start Your Consultation Now →
        </a>
      </div>
    </div>

  
    <div className="flex justify-center">
      <Image src="/images/candid-image-photography.svg" alt="Astrologer" width={538} height={888} className="w-[538px] md:w-[538px] rounded-xl object-cover" />
    </div>
  </div>
</section>



<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<HoroscopeList />
</div>
</section>



<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<Slider />
   
</div>
</section>


   



<section className="py-16 bg-white">
<div className="container mx-auto px-4">

<Testimonials />
</div>
</section>



{/* <FaqAccordion /> */}
<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<Faqs />
</div>
</section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Expert Love Life and Expert Guidance
              </h2>
              <p className="text-orange-100 text-lg">
                Don't let uncertainty hold you back. Get personalized astrological guidance
                from our expert astrologers and unlock the secrets of your future.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@horoscopevata.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div>saroj</div>
          </div>
        </div>
      </section>

   


      {/* <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
  <AstroForm  />
</div>
</section> */}





      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        
        <RecentArticles />
        </div>
      </section>


   {/* Customer Reviews */}
   <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say About Horoscope Vata
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {  rating: 5, text: "Absolutely amazing predictions! Everything came true exactly as predicted.", author: "Priya Sharma" },
              { rating: 5, text: "Best astrology service I've ever used. Highly recommended!", author: "Raj Kumar" },
              { rating: 4, text: "Very accurate readings and professional service. Thank you!", author: "Sunita Devi" },
              { rating: 5, text: "Life-changing guidance. My problems were solved completely.", author: "Amit Patel" }
            ].map((review, index) => (
              <div key={index}>saroj</div>
            ))}
          </div>
        </div>
      </section>















      {/* FAQ Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How accurate are your predictions?", a: "Our predictions are based on authentic Vedic astrology principles with over 85% accuracy rate." },
              { q: "What information do I need for consultation?", a: "You need your exact date, time, and place of birth for accurate readings." },
              { q: "Are consultations confidential?", a: "Yes, all consultations are 100% private and confidential." },
              { q: "How quickly will I get my reading?", a: "You can get instant consultations 24/7 through chat or schedule a call." }
            ].map((faq, index) => (
              <div>saroj</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Download Our App</h3>
              <p className="text-orange-100 mb-4">Get Astrology Guidance on Mobile, Anywhere, Anytime!</p>
              <div className="space-y-2">
                <div className="text-sm">Available on iOS & Android</div>
                <div className="flex space-x-2">
                  <button variant="outline" className="text-orange-500 border-white hover:bg-white">
                    App Store
                  </button>
                  <button variant="outline" className="text-orange-500 border-white hover:bg-white">
                    Google Play
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-orange-100">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#astrologers" className="hover:text-white transition-colors">Astrologers</a></li>
                <li><a href="#horoscope" className="hover:text-white transition-colors">Daily Horoscope</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-orange-100">
                <li><a href="#services" className="hover:text-white transition-colors">Love Marriage</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Career Guidance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Business Problems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Health Astrology</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-orange-100">
                <li>+91 9876543210</li>
                <li>info@horoscopevata.com</li>
                <li>Mumbai, Maharashtra</li>
                <li>India - 400001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange-400 pt-8 text-center text-orange-100">
            <p>&copy; 2024 Horoscope Vata. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}