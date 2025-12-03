const TrustedBySection = () => {
  return (
    <section className="w-full bg-[#1a1a22] py-6 sm:py-8 md:py-12 border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-10">
          <span className="text-gray-600 hidden sm:inline">┌</span>
          <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest text-center">
            Trusted by leading data companies
          </span>
          <span className="text-gray-600 hidden sm:inline">┐</span>
        </div>

        {/* Company Logos - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Reddit */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-gray-300 transition">
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" className="text-[#FF4500]" fill="currentColor"/>
              <circle cx="8" cy="11" r="1.5" fill="white"/>
              <circle cx="16" cy="11" r="1.5" fill="white"/>
              <path d="M8 15c1.5 2 5 2 8 0" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="font-bold text-base md:text-lg">reddit</span>
          </div>

          {/* Notion */}
          <div className="flex items-center justify-center gap-1 text-white hover:text-gray-300 transition">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white rounded flex items-center justify-center font-serif text-xs md:text-sm font-bold">
              N
            </div>
          </div>

          {/* Anthropic */}
          <div className="text-white hover:text-gray-300 transition font-medium text-sm md:text-lg tracking-wider text-center">
            ANTHROPIC
          </div>

          {/* SeatGeek */}
          <div className="text-white hover:text-gray-300 transition text-center">
            <span className="font-light text-sm md:text-lg tracking-wider">SEAT</span>
            <span className="font-bold text-sm md:text-lg tracking-wider">GEEK</span>
          </div>

          {/* ClickUp - Hidden on smallest screens */}
          <div className="hidden sm:flex items-center justify-center gap-1 text-white hover:text-gray-300 transition">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 14l5 4 9-10-2-2-7 7-3-3z"/>
            </svg>
            <span className="font-semibold text-sm md:text-lg">ClickUp</span>
          </div>

          {/* AllTrails - Hidden on smallest screens */}
          <div className="hidden sm:flex items-center justify-center gap-1 text-white hover:text-gray-300 transition">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l-2 8H4l6 4-2 8 6-5 6 5-2-8 6-4h-6L12 2z"/>
            </svg>
            <span className="font-semibold text-sm md:text-lg">AllTrails</span>
          </div>

          {/* Modern Treasury - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 text-white hover:text-gray-300 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="8" width="18" height="12" rx="1"/>
              <path d="M3 8l9-5 9 5"/>
            </svg>
            <span className="text-xs font-medium tracking-wider">MODERN TREASURY</span>
          </div>

          {/* Ramp - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1 text-white hover:text-gray-300 transition">
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
