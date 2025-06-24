import Astrologers from "../pages/astrologers";
import FaqAccordion from "../pages/FaqAccordion";
import Faqs from "../pages/Faqs";
import KundliFeatures from "../pages/KundliFeature";
import AstroPromoSection from "../pages/AstroPromoSection";
import FreeKundliForm from "../pages/FreeKundliForm";

export default function DetailsPage() {
    return(
       <>
       
       
       
       <FreeKundliForm />
   <KundliFeatures />
    <Astrologers heading={"Explore Your Kundali Thoroughly "} />
    <AstroPromoSection />
       <Faqs  />
       </>
    )
}