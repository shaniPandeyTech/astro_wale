import { FaHome } from "react-icons/fa";

export default function Breadcrumb(props) {
    return (
        <section className="bg-[#FFF3EA] border-b">
        <div className="container mx-auto  text-black py-6 ">
    <div className="flex  flex-wrap gap-4 items-center ">
    <span className="text-[#EF6800]"><FaHome /></span>
    <span className="text-[#EF6800]">❯</span>
<span className="text-[#EF6800]">{props.page}</span>

    </div>
</div>
   </section>
    )
}