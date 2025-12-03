import { useEffect, useState } from 'react';

const EnterpriseCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { text: 'Unlimited users', description: 'Scale your team without limits' },
    { text: 'Unlimited projects', description: 'Create as many projects as you need' },
    { text: 'Usage reports', description: 'Detailed insights into your deployment' },
    { text: 'Dedicated support', description: '24/7 priority access to our experts' },
    { text: 'Custom environments', description: 'Tailored infrastructure for your needs' },
    { text: 'SLA Guarantee', description: '99.99% uptime commitment' },
  ];

  return (
    <section className="w-full bg-[#1a1a22] py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Keeping consistency */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        <div className="absolute left-[95%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e4b2b3]/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content - Unique Animation Component */}
          <div className={`flex-1 w-full max-w-md lg:max-w-lg relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300`}>
            
            {/* Animated Background System - No Card Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-[#e4b2b3]/10 rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute inset-[15%] border border-[#4fd1c5]/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-[30%] border border-[#e4b2b3]/5 rounded-full animate-pulse-slow"></div>
              
              {/* Glowing Core */}
              <div className="absolute inset-[40%] bg-gradient-to-tr from-[#e4b2b3]/10 to-[#4fd1c5]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Content Container - Floating freely */}
            <div className="relative z-10 text-center">
              
              {/* Floating Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 mb-8 relative">
                <div className="absolute inset-0 bg-[#e4b2b3]/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative z-10 bg-[#1a1a22] p-5 rounded-full border border-[#e4b2b3]/30 shadow-[0_0_30px_rgba(228,178,179,0.15)] animate-float">
                  <svg className="w-10 h-10 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Orbiting particles around icon */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4fd1c5] rounded-full shadow-[0_0_10px_#4fd1c5]"></div>
                </div>
              </div>

              <h3 className="text-4xl sm:text-5xl font-serif text-white mb-6 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4b2b3] to-[#4fd1c5]">deploy?</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
                Join hundreds of fast-growing companies building the future on Zyotra.
              </p>

              <div className="flex flex-col items-center gap-6">
                <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300">
                  <div className="absolute inset-0 border border-[#e4b2b3]/50 rounded-full group-hover:border-[#e4b2b3] transition-colors"></div>
                  <div className="absolute inset-0 bg-[#e4b2b3]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  <span className="relative flex items-center gap-3 text-[#e4b2b3] font-medium text-lg">
                    Contact Sales
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5] animate-pulse"></span>
                    Response in 24h
                  </span>
                  <span className="w-px h-4 bg-gray-700"></span>
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enterprise Solutions */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
              <span className="text-[#e4b2b3]">Enterprise-grade</span> <br />
              deployment solutions
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Empower your organization with a secure, scalable, and fully managed deployment infrastructure designed for high-growth startups and large enterprises.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full border border-[#e4b2b3]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#e4b2b3] group-hover:bg-[#e4b2b3]/10 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e4b2b3]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{feature.text}</h4>
                    <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTASection;
