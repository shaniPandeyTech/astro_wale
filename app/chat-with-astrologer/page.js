import Astrologers from "../components/astrologers";
import AstroPromoSection from "../components/AstroPromoSection";
import Breadcrumb from "../pages/breadcrumb";
import Faqs from "../components/Faqs";
import HowTalkAstrologer from "../pages/howtalkastrologer";

export default function ChatWithAstrologer() {

    return (
        <>    
        <Breadcrumb page="Chat with Astrologer" />
            <Astrologers heading="Chat with Astrologer" showFilter={true} />

            <HowTalkAstrologer />
            <Faqs />

        </>

    )

}