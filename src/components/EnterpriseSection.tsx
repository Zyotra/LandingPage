const EnterpriseSection = () => {
  const features = [
    { text: 'SSO and SCIM' },
    { text: 'Single tenant deploys' },
    { text: 'HIPAA BAA available' },
    { text: 'OAuth and SSL data connections' },
  ];

  return (
    <section className="w-full bg-[#1a1a22] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-row gap-6">
            {/* Vertical ENTERPRISE label */}
            <div className="hidden sm:flex items-start">
              <span 
                className="text-[#6b6b75] text-xs tracking-[0.3em] font-medium uppercase"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Enterprise
              </span>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-8">
                Built for<br />
                <span className="text-[#e8e0dc] italic font-serif">scale,</span><br />
                <span className="text-[#e8e0dc] italic font-serif">security,</span> and<br />
                <span className="text-[#e8e0dc] italic font-serif">control</span>
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md">
                Connect to data, provision users, and enforce permissions with ease.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg 
                      className="w-5 h-5 text-[#4fd1c5] flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-white text-sm sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button className="group relative px-6 py-3 text-[#e4b2b3] text-sm font-medium border border-[#e4b2b3]/30 rounded-sm bg-transparent hover:bg-[#e4b2b3]/5 transition-all duration-300">
                <span className="relative z-10">Get in touch</span>
                {/* Corner decorations */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#e4b2b3]/50"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#e4b2b3]/50"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#e4b2b3]/50"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#e4b2b3]/50"></span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Dashboard Illustration */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              {/* Main Dashboard Window */}
              <div className="bg-[#22222a] border border-gray-700/50 rounded-lg overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm tracking-wider">ZYOTRA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500 -ml-2"></div>
                    </div>
                    <div className="w-16 h-6 border border-gray-600 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-4 flex gap-4">
                  {/* Left Sidebar */}
                  <div className="hidden sm:flex flex-col gap-3 w-24">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 bg-gray-600/50 rounded-full"></div>
                      <div className="w-8 h-4 bg-gray-700/50 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-4 bg-gray-700/50 rounded-full"></div>
                    </div>
                    <div className="mt-8">
                      {/* User Avatar */}
                      <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Chart Area */}
                  <div className="flex-1">
                    {/* Chart Container */}
                    <div className="border border-[#8b4a4d] bg-[#1a1a22]/50 rounded p-4 h-48 relative">
                      {/* Grid Lines */}
                      <div className="absolute inset-4 flex flex-col justify-between">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-full h-px bg-gray-700/30"></div>
                        ))}
                      </div>
                      
                      {/* Chart Lines - SVG */}
                      <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]" viewBox="0 0 200 100" preserveAspectRatio="none">
                        {/* Curved line */}
                        <path 
                          d="M0,80 Q30,85 50,60 T80,40 Q100,20 120,50 T160,30 L200,10" 
                          fill="none" 
                          stroke="#4fd1c5" 
                          strokeWidth="2"
                        />
                        {/* Straight trend line */}
                        <line 
                          x1="0" y1="90" 
                          x2="200" y2="20" 
                          stroke="#888" 
                          strokeWidth="1.5" 
                          strokeDasharray="4,4"
                        />
                        {/* Data points */}
                        <circle cx="50" cy="60" r="4" fill="#4fd1c5" />
                        <circle cx="80" cy="40" r="4" fill="#4fd1c5" />
                        <circle cx="120" cy="50" r="4" fill="#888" />
                        <circle cx="160" cy="30" r="4" fill="#888" />
                        <circle cx="200" cy="10" r="4" fill="#888" />
                      </svg>
                    </div>
                    
                    {/* Bottom Controls */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#2a2a32] rounded border border-gray-700/30">
                        <div className="flex gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                          ))}
                        </div>
                        <div className="ml-auto">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#2a2a32] rounded border border-[#8b4a4d]">
                        <div className="flex gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                          ))}
                        </div>
                        <div className="ml-auto">
                          <svg className="w-4 h-4 text-[#4fd1c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
