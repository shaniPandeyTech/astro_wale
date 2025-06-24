import { FaPlay } from "react-icons/fa";

export default function KundliFeatures() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full lg:w-[712px] flex justify-center">
          <img
            src="/images/kundlireport.jpg"
            alt="Janam Kundli Book"
            className="w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[640px] pr-52">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What Will You Get in Your Free Kundli Report?
          </h2>

          <ul className="space-y-6 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <FaPlay className="text-orange-500 mt-1 text-xs" />
              <div>
                <p className="font-semibold text-orange-600">Janam Kundli Chart (Birth Chart)</p>
                <p>A complete Vedic astrology chart with 12 houses, planets, signs, and lagnas.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaPlay className="text-orange-500 mt-1 text-xs" />
              <div>
                <p className="font-semibold text-orange-600">Planetary Positions & Houses</p>
                <p>Detailed placements of Moon, Sun, Mars, and other celestial bodies with their effects.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaPlay className="text-orange-500 mt-1 text-xs" />
              <div>
                <p className="font-semibold text-orange-600">Doshas & Yogas</p>
                <p>Info on Mangal Dosha, Kaal Sarp Dosha, Raj Yoga, Gaj Kesari Yoga & more.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaPlay className="text-orange-500 mt-1 text-xs" />
              <div>
                <p className="font-semibold text-orange-600">Life Predictions</p>
                <p>Insights into your career, love life, marriage, finances, and health.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaPlay className="text-orange-500 mt-1 text-xs" />
              <div>
                <p className="font-semibold text-orange-600">Favourable Gemstones & Remedies</p>
                <p>Astrological guidance to reduce negative planetary impacts.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
