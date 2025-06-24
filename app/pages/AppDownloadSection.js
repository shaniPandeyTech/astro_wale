import Image from 'next/image';
export default function AppDownloadSection() {
    return (
      <section className="bg-orange-500 text-white pt-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download Our App –
              <br />
              <span className="text-white">Your Personal Astrology Guide Anytime, Anywhere!</span>
            </h2>
            <p className="text-white/90 text-base mb-6 max-w-md">
              Unlock the power of Vedic astrology at your fingertips! With the Horoscope Vale app, you can:
            </p>
  
            {/* App Store Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/appstore.svg" alt="Download on App Store" width={160} height={55} className="h-12" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/playstore.svg" alt="Get it on Google Play" width={160} height={55} className="h-12" />
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Image
              src="/images/iphone-1.png"
              alt="Mobile App Preview"
              height={320}
              width={400}
              className="max-h-[320px] md:max-h-[400px] object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  