export default function AstroPromoSection() {
  return (
    <section className="relative py-12 sm:py-20 bg-[#460190] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
          Explore Astrology
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug max-w-2xl mx-auto mb-4">
          Whether you&apos;re curious or serious about astrology —
          <span className="text-orange-400"> Horoscope Wale</span> has you covered.
        </h2>
        <p className="text-white/60 max-w-lg mx-auto mb-8">
          Discover what the stars have in store for your love life with personalized predictions.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-2 bg-white text-orange-500 font-semibold px-7 py-3.5 rounded-xl shadow-lg cursor-pointer hover:bg-orange-50 active:scale-95 transition-all duration-200"
        >
          Check Love Prediction
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  );
}
