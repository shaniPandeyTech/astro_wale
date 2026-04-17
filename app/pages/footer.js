import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF7F1] text-gray-700 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Corporate Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Corporate Info</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Board of Advisor</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Refund and Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Horoscope */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Horoscope</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Daily Horoscope</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Weekly Horoscope</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Monthly Horoscope</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Yearly Horoscope</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Important Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Chat with Astrologer</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Call with Astrologer</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Free Kundli</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Book a Pooja</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Shop Our Products</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Gemstones</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Yantras</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Rudraksha</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Kawach</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2.5 text-gray-500">
              <li>Email: support@horoscopevale.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: New Delhi, India</li>
            </ul>

            <div className="flex gap-3 mt-5">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaYoutube, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-9 h-9 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-100 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Horoscope Vale. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
