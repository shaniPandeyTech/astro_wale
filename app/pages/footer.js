import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fff8f0] text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        
        {/* Corporate Info */}
        <div>
          <h3 className="font-semibold text-orange-600 mb-4">Corporate Info</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Board of Advisor</a></li>
            <li><a href="#">Refund and Cancellation Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Horoscope */}
        <div>
          <h3 className="font-semibold text-orange-600 mb-4">Horoscope</h3>
          <ul className="space-y-2">
            <li><a href="#">Horoscope 2025</a></li>
            <li><a href="#">Today’s Horoscope</a></li>
            <li><a href="#">Weekly Horoscope</a></li>
            <li><a href="#">Monthly Horoscope</a></li>
            <li><a href="#">Love Horoscope</a></li>
            <li><a href="#">Yearly Horoscope</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-orange-600 mb-4">Important links</h3>
          <ul className="space-y-2">
            <li><a href="#">Astrology Services</a></li>
            <li><a href="#">Priest Services</a></li>
            <li><a href="#">Love and Marriage</a></li>
            <li><a href="#">Business and Career</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Health and Beauty</a></li>
            <li><a href="#">Wealth and Finance</a></li>
            <li><a href="#">Family Problems</a></li>
          </ul>
        </div>

        {/* Shop Our Products */}
        <div>
          <h3 className="font-semibold text-orange-600 mb-4">Shop Our Products</h3>
          <ul className="space-y-2">
            <li><a href="#">Bracelets For Men</a></li>
            <li><a href="#">Bracelets For Women</a></li>
            <li><a href="#">Rudraksha</a></li>
            <li><a href="#">Rudraksha Bracelet</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-orange-600 mb-4">Contact Us</h3>
          <p className="mb-3">
            <strong>Address:</strong><br />
            Horoscope Vale, 2nd Floor, XYZ Tower, Sector 18, Noida,<br />
            Uttar Pradesh, India – 201301
          </p>
          <p className="mb-3">
            <strong>Email:</strong><br />
            support@horoscopevale.com
          </p>
          <p className="mb-2 font-medium">Follow us on:</p>
          <div className="flex items-center gap-4 text-lg text-black">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
