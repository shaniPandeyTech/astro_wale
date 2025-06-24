import Astrologers from "../pages/astrologers";

import Faqs from "../pages/Faqs";

import AstroPromoSection from "../pages/AstroPromoSection";
import Horoscopedaily from "../pages/Horoscopedaily";
import LovePredictionBanner from "../pages/LovePredictionBanner";

export default function DetailsPage() {
    return(
       <>
       
       
       
       
   <Horoscopedaily/>
<LovePredictionBanner />
  
    <Astrologers heading={"Explore Your Kundali Thoroughly "} />
    <AstroPromoSection />
       <Faqs  />
       </>
    )
}