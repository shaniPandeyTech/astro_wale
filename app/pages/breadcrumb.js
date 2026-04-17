import { FaHome } from "react-icons/fa";

export default function Breadcrumb(props) {
  return (
    <section className="bg-[#FFF7F1] border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-orange-500 hover:text-orange-600 transition-colors">
            <FaHome />
          </a>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          <span className="text-gray-800 font-medium">{props.page}</span>
        </div>
      </div>
    </section>
  );
}
