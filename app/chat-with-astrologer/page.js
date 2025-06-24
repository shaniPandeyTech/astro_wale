import Astrologers from "../pages/astrologers";
import AstroPromoSection from "../pages/AstroPromoSection";
import Breadcrumb from "../pages/breadcrumb";
import Faqs from "../pages/Faqs";
import HowTalkAstrologer from "../pages/howtalkastrologer";

export default function ChatWithAstrologer() { 

return(
    <>    <Breadcrumb page="Chat with Astrologer" />
   <Astrologers heading="Chat with Astrologer" showFilter={true} />
    
    <HowTalkAstrologer />
       <Faqs  />

       </>

)

}