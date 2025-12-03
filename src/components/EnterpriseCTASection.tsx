const EnterpriseCTASection = () => {
  const features = [
    { text: 'Unlimited users' },
    { text: 'Unlimited projects' },
    { text: 'Usage reports' },
    { text: 'Dedicated support' },
    { text: 'Customized environments and more...' },
  ];

  return (
    <section className="w-full bg-[#1a1a22] py-16 sm:py-20 md:py-28 lg:py-32 border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 md:mb-12">
              <span className="text-[#e8e0dc] italic font-serif">A complete</span><br />
              <span className="text-[#e8e0dc] italic font-serif">solution</span>{' '}
              <span className="text-white font-sans not-italic">for</span><br />
              <span className="text-white font-sans not-italic">enterprise</span><br />
              <span className="text-white font-sans not-italic">analytics</span>
            </h2>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {features.slice(0, 3).map((feature, index) => (
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
                  <span className="text-white text-base sm:text-lg">{feature.text}</span>
                </div>
              ))}
              {features.slice(3).map((feature, index) => (
                <div key={index + 3} className="flex items-center gap-3">
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
                  <span className="text-white text-base sm:text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - CTA Card */}
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative">
              {/* CTA Card with border decoration */}
              <div className="relative bg-transparent border border-gray-600/50 rounded-sm px-10 sm:px-16 py-12 sm:py-16 text-center max-w-md">
                {/* Corner decorations */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gray-500 rounded-tl-sm"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gray-500 rounded-tr-sm"></span>
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gray-500 rounded-bl-sm"></span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gray-500 rounded-br-sm"></span>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to get<br />started?
                </h3>
                
                <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xs mx-auto">
                  Get in touch and find out which plan is right for you.
                </p>
                
                {/* CTA Button */}
                <button className="group relative px-8 py-3 text-[#e4b2b3] text-sm font-medium border border-[#e4b2b3]/40 rounded-sm bg-transparent hover:bg-[#e4b2b3]/5 transition-all duration-300">
                  <span className="relative z-10">Contact Sales</span>
                  {/* Corner decorations */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#e4b2b3]/60"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#e4b2b3]/60"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#e4b2b3]/60"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#e4b2b3]/60"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTASection;
