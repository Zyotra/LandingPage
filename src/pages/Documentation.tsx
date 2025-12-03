const Documentation = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            <span className="text-[#e4b2b3]">Documentation</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications on Zyotra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Getting Started', 'Core Concepts', 'Guides & Tutorials'].map((item, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4b2b3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item}</h3>
              <p className="text-gray-400 mb-6 relative z-10">
                Comprehensive guides to help you get up and running quickly and efficiently.
              </p>
              <span className="text-[#e4b2b3] text-sm font-medium flex items-center gap-2 relative z-10 group-hover:gap-3 transition-all">
                Read more 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
