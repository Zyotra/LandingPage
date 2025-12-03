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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content */}
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
          
          {/* Right Content - Professional Card */}
          <div className={`flex-1 w-full max-w-md lg:max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#e4b2b3]/20 to-[#4fd1c5]/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-[#1e1e26] border border-[#2a2a35] rounded-2xl p-8 sm:p-10 overflow-hidden">
                {/* Decorative background inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4b2b3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#2a2a32] rounded-2xl border border-[#3a3a45] flex items-center justify-center mb-8 shadow-lg shadow-[#e4b2b3]/5">
                    <svg className="w-8 h-8 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to scale?
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Get a customized plan tailored to your organization's specific needs and security requirements.
                  </p>

                  <button className="w-full group relative flex items-center justify-center gap-3 bg-[#e4b2b3] hover:bg-[#dca0a1] text-[#1a1a22] px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg shadow-[#e4b2b3]/20 hover:shadow-[#e4b2b3]/30 hover:-translate-y-0.5">
                    <span className='text-[#e4b2b3]'>Contact Sales</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-6 border-t border-[#2a2a35] pt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#4fd1c5] animate-pulse"></div>
                      <span className="text-sm text-gray-400">Response in 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-400">No commitment</span>
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

export default EnterpriseCTASection;
