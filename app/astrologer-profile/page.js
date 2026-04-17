import AstrologerProfile from "../pages/AstrologerProfile";
import Astrologers from "../components/astrologers";
import AstroPromoSection from "../components/AstroPromoSection";
import Breadcrumb from "../pages/breadcrumb";
import Faqs from "../components/Faqs";
import HowTalkAstrologer from "../pages/howtalkastrologer";

export default function ChatWithAstrologer() { 

return(
    <>    <Breadcrumb page="Chat with Astrologer" />
    <AstrologerProfile />
    <Astrologers heading={"Chat with Astrologer"} />
    
    <HowTalkAstrologer />
       <Faqs  />

       </>

)

}