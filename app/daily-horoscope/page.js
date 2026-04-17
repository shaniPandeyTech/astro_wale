// app/daily-horoscope/page.js
import Horoscopedaily from "../components/Horoscopedaily";
import Astrologers from "../components/astrologers";
import LovePredictionBanner from "../components/LovePredictionBanner";
import AstroPromoSection from "../components/AstroPromoSection";
import Faqs from "../components/Faqs";

export default function DailyHoroscopePage() {
  return (
    <>
      <Horoscopedaily />
      <LovePredictionBanner />
      <Astrologers heading={"Explore Your Kundali Thoroughly "} />
      <AstroPromoSection />
      <Faqs />
    </>
  );
}
