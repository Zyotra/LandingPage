const TrustedBySection = () => {
  return (
    <section className="w-full bg-[#1a1a22] py-12 border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-gray-600">┌</span>
          <span className="text-gray-500 text-xs uppercase tracking-widest">
            Trusted by leading data companies
          </span>
          <span className="text-gray-600">┐</span>
        </div>

        {/* Company Logos - Single Row */}
        <div className="flex items-center justify-between gap-8">
          {/* Reddit */}
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" className="text-[#FF4500]" fill="currentColor"/>
              <circle cx="8" cy="11" r="1.5" fill="white"/>
              <circle cx="16" cy="11" r="1.5" fill="white"/>
              <path d="M8 15c1.5 2 5 2 8 0" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="font-bold text-lg">reddit</span>
          </div>

          {/* Notion */}
          <div className="flex items-center gap-1 text-white hover:text-gray-300 transition">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center font-serif text-sm font-bold">
              N
            </div>
          </div>

          {/* Anthropic */}
          <div className="text-white hover:text-gray-300 transition font-medium text-lg tracking-wider">
            ANTHROPIC
          </div>

          {/* SeatGeek */}
          <div className="text-white hover:text-gray-300 transition">
            <span className="font-light text-lg tracking-wider">SEAT</span>
            <span className="font-bold text-lg tracking-wider">GEEK</span>
          </div>

          {/* ClickUp */}
          <div className="flex items-center gap-1 text-white hover:text-gray-300 transition">
            <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 14l5 4 9-10-2-2-7 7-3-3z"/>
            </svg>
            <span className="font-semibold text-lg">ClickUp</span>
          </div>

          {/* AllTrails */}
          <div className="flex items-center gap-1 text-white hover:text-gray-300 transition">
            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l-2 8H4l6 4-2 8 6-5 6 5-2-8 6-4h-6L12 2z"/>
            </svg>
            <span className="font-semibold text-lg">AllTrails</span>
          </div>

          {/* Modern Treasury */}
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="8" width="18" height="12" rx="1"/>
              <path d="M3 8l9-5 9 5"/>
            </svg>
            <span className="text-xs font-medium tracking-wider">MODERN TREASURY</span>
          </div>

          {/* Ramp */}
          <div className="flex items-center gap-1 text-white hover:text-gray-300 transition">
            <span className="font-semibold text-lg">ramp</span>
            <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
