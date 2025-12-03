import { useEffect, useState } from 'react';

const EnterpriseCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { text: 'Unlimited users' },
    { text: 'Unlimited projects' },
    { text: 'Usage reports' },
    { text: 'Dedicated support' },
    { text: 'Customized environments and more...' },
  ];

  return (
    <section className="w-full bg-[#1a1a22] pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-14 md:pb-16 lg:pb-20 relative overflow-hidden">
      {/* Grid Pattern Background - continuous with hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical lines */}
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[#2a2a35] hidden sm:block"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-[#2a2a35] hidden sm:block"></div>
        <div className="absolute left-[95%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        
        {/* Decorative diamond shape on the right */}
        <div className="absolute top-[15%] right-[8%] w-12 h-12 border border-[#3a3a45]/50 rotate-45 hidden lg:block"></div>
        
        {/* Decorative stars */}
        <div className="absolute top-[40%] left-[12%] text-[#4a4a55] text-xl hidden lg:block">✦</div>
        <div className="absolute bottom-[30%] right-[6%] text-[#3a3a45] text-sm hidden lg:block">✦</div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgb(228,178,179); }
          50% { box-shadow: 0 0 40px rgba(228,178,179, 0.5); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 0.5s; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-dash { animation: dash 1s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-orbit { animation: orbit 12s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          
          {/* Right Content - Animated CTA Card */}
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Background Decorative Elements */}
              <div className="absolute -inset-8 pointer-events-none">
                {/* Orbiting dots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#e4b2b3]/40 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#e4b2b3]/40 rounded-full"></div>
                  <div className="absolute top-1/2 left-0 w-1 h-1 bg-[#e4b2b3]/30 rounded-full"></div>
                </div>
                
                {/* Floating geometric shapes */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-[#4fd1c5]/20 rotate-45 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 border border-[#e4b2b3]/20 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/4 -left-8 w-3 h-3 bg-[#4fd1c5]/10 rounded-full animate-pulse-ring"></div>
                <div className="absolute bottom-1/4 -right-6 w-4 h-4 border border-[#e4b2b3]/15 animate-float"></div>
              </div>

              {/* CTA Card with enhanced styling */}
              <div className="relative bg-gradient-to-br from-[#22222a]/80 to-[#1a1a22]/90 backdrop-blur-sm border border-gray-600/50 rounded-lg px-10 sm:px-16 py-12 sm:py-16 text-center max-w-md overflow-hidden">
                
                {/* Animated background glow */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#4fd1c5]/10 rounded-full blur-3xl animate-pulse-ring"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#e4b2b3]/10 rounded-full blur-3xl animate-float"></div>
                </div>
                
                {/* Corner decorations with animation */}
                <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#e4b2b3]/60 rounded-tl-lg"></span>
                <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#e4b2b3]/60 rounded-tr-lg"></span>
                <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#e4b2b3]/60 rounded-bl-lg"></span>
                <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#e4b2b3]/60 rounded-br-lg"></span>
                
                {/* Animated icon */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 border-2 border-[#e4b2b3]/30 rounded-full animate-pulse-ring"></div>
                  {/* Middle ring */}
                  <div className="absolute inset-2 border border-[#e4b2b3]/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                  {/* Inner circle with icon */}
                  <div className="absolute inset-4 bg-gradient-to-brfrom-[#e4b2b3]/20 to-[#e4b2b3]/5 rounded-full flex items-center justify-center animate-glow">
                    <svg className="w-6 h-6 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {/* Orbiting dot */}
                  <div className="absolute inset-0 animate-orbit">
                    <div className="w-2 h-2 bg-[#e4b2b3] rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to get<br />started?
                </h3>
                
                <p className="relative text-gray-400 text-base sm:text-lg mb-8 max-w-xs mx-auto">
                  Get in touch and find out which plan is right for you.
                </p>
                
                {/* Enhanced CTA Button - Professional Style */}
                <div className="relative p-2 inline-block">
                  {/* Outer corner accents */}
                  <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                  <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                  
                  <button className="group relative flex items-center gap-3 bg-[#2a2a32] hover:bg-[#32323a] text-[#e4b2b3] px-6 py-3.5 transition-all duration-300 border border-[#3a3a45] hover:border-[#e4b2b3]/50 hover:shadow-lg hover:shadow-[#e4b2b3]/10">
                    {/* Icon circle - Chat/Message icon */}
                    <span className="w-8 h-8 flex items-center justify-center border border-[#e4b2b3]/50 rounded-full transition-all duration-300 group-hover:border-[#e4b2b3] group-hover:bg-[#e4b2b3]/10 group-hover:scale-110">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    <span className="font-medium text-base">Contact Sales</span>
                  </button>
                </div>
                
                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#4fd1c5" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4fd1c5" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 0 40 Q 50 20 100 40 T 200 40" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-dash"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTASection;
