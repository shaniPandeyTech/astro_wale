import Astrologers from "../components/astrologers";
import FaqAccordion from "../pages/FaqAccordion";
import Faqs from "../components/Faqs";
import KundliFeatures from "../pages/KundliFeature";
import AstroPromoSection from "../components/AstroPromoSection";
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