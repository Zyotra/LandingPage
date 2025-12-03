import { useState } from 'react';

const Navbar = () => {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1a1a22] relative z-50">
      {/* Top Announcement Bar - Hidden on mobile, scrolling on larger */}
      <div className="hidden md:flex w-full bg-[#1a1a22] py-2 px-4 items-center justify-center gap-12 text-sm border-b border-gray-800/50 overflow-hidden">
        <a href="#" className="text-gray-500 hover:text-white transition flex items-center gap-1 whitespace-nowrap text-xs">
          Slack & via MCP →
        </a>
        <a href="#" className="text-gray-500 hover:text-white transition flex items-center gap-1 whitespace-nowrap text-xs">
          <span>✨</span> Bringing the magic of AI to data: <span className="text-[#f5a623] italic">agentic analytics tools that actually work</span> →
        </a>
        <a href="#" className="text-gray-500 hover:text-white transition flex items-center gap-1 whitespace-nowrap text-xs hidden lg:flex">
          <span className="text-red-500">▲</span> It's just "Zyotra"! Not "ZYOTRA" or "Zyotra dot tech" →
        </a>
        <a href="#" className="text-gray-500 hover:text-white transition flex items-center gap-1 whitespace-nowrap text-xs hidden xl:flex">
          <span className="text-green-500">●</span> Zyotra Agent, everywhere →
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Left side - Logo on mobile, Navigation on desktop */}
        <div className="flex items-center gap-6">
          {/* Logo - visible on mobile, centered on desktop */}
          <a href="#" className="flex md:hidden items-center gap-2 font-bold text-xl tracking-wider">
            <svg 
              className="w-7 h-7 animate-spin-slow" 
              viewBox="0 0 100 100" 
              fill="none"
            >
              <circle cx="50" cy="50" r="8" fill="#e4b2b3" />
              <circle cx="50" cy="50" r="5" fill="#1a1a22" />
              <circle cx="50" cy="50" r="2" fill="#e4b2b3" />
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5) * (Math.PI / 180);
                const innerRadius = 12;
                const outerRadius = i % 2 === 0 ? 42 : 32;
                const x1 = 50 + innerRadius * Math.cos(angle);
                const y1 = 50 + innerRadius * Math.sin(angle);
                const x2 = 50 + outerRadius * Math.cos(angle);
                const y2 = 50 + outerRadius * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#e4b2b3"
                    strokeWidth={i % 2 === 0 ? "4" : "3"}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
            <span className="text-xl text-[#e4b2b3]">ZYOTRA</span>
          </a>

          {/* Desktop Navigation - Left side */}
          <div className="hidden md:flex items-center gap-6">
            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm">
                Platform
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {platformOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#252525] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-4">
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">VPS Instances</a>
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">Auto Scaling</a>
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">Load Balancing</a>
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">Monitoring</a>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm">
                Solutions
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#252525] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-4">
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">For Startups</a>
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">For Enterprise</a>
                    <a href="#" className="block text-gray-300 hover:text-white transition text-sm">For Developers</a>
                  </div>
                </div>
              )}
            </div>

            {/* Enterprise */}
            <a href="#" className="text-white hover:text-gray-300 transition text-sm">
              Enterprise
            </a>
          </div>
        </div>

        {/* Center - Logo (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="flex items-center gap-2 font-bold text-2xl tracking-wider">
            <svg 
              className="w-8 h-8 animate-spin-slow" 
              viewBox="0 0 100 100" 
              fill="none"
            >
              <circle cx="50" cy="50" r="8" fill="#e4b2b3" />
              <circle cx="50" cy="50" r="5" fill="#1a1a22" />
              <circle cx="50" cy="50" r="2" fill="#e4b2b3" />
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5) * (Math.PI / 180);
                const innerRadius = 12;
                const outerRadius = i % 2 === 0 ? 42 : 32;
                const x1 = 50 + innerRadius * Math.cos(angle);
                const y1 = 50 + innerRadius * Math.sin(angle);
                const x2 = 50 + outerRadius * Math.cos(angle);
                const y2 = 50 + outerRadius * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#e4b2b3"
                    strokeWidth={i % 2 === 0 ? "4" : "3"}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
            <span className="ml-0.5 text-2xl text-[#e4b2b3] hover:text-[#e5a3a5]">ZYOTRA</span>
          </a>
        </div>

        {/* Right side - Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm">
              Resources
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#252525] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-4">
                <div className="space-y-3">
                  <a href="#" className="block text-gray-300 hover:text-white transition text-sm">Documentation</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition text-sm">Blog</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition text-sm">API Reference</a>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <a href="#" className="text-white hover:text-gray-300 transition text-sm">
            Pricing
          </a>

          {/* Log In */}
          <a href="#" className="text-white hover:text-gray-300 transition text-sm">
            Log In
          </a>

          {/* Get started Button */}
          <div className="relative">
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#e4b2b3]"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e4b2b3]"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e4b2b3]"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#e4b2b3]"></span>
            <a 
              href="#" 
              className="inline-flex items-center gap-4 bg-[#2a2a32] hover:bg-[#32323a] text-[#e4b2b3] px-3 py-2 transition-all duration-300 group border border-[#3a3a45] hover:border-[#e4b2b3]/50 hover:shadow-lg hover:shadow-[#e4b2b3]/10"
            >
              <span className="font-medium text-lg lg:text-xl">Get started</span>
            </a>
          </div>
        </div>

        {/* Mobile - Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#e4b2b3] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#e4b2b3] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#e4b2b3] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1a22] border-t border-gray-800/50 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
          {/* Platform Accordion */}
          <div>
            <button 
              className="w-full flex items-center justify-between py-3 text-white text-base"
              onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
            >
              Platform
              <svg className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobilePlatformOpen ? 'max-h-40' : 'max-h-0'}`}>
              <div className="pl-4 pb-2 space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">VPS Instances</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">Auto Scaling</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">Load Balancing</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">Monitoring</a>
              </div>
            </div>
          </div>

          {/* Solutions Accordion */}
          <div className="border-t border-gray-800/30">
            <button 
              className="w-full flex items-center justify-between py-3 text-white text-base"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-32' : 'max-h-0'}`}>
              <div className="pl-4 pb-2 space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">For Startups</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">For Enterprise</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">For Developers</a>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <a href="#" className="block py-3 text-white text-base border-t border-gray-800/30">
            Enterprise
          </a>

          {/* Resources Accordion */}
          <div className="border-t border-gray-800/30">
            <button 
              className="w-full flex items-center justify-between py-3 text-white text-base"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              Resources
              <svg className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? 'max-h-32' : 'max-h-0'}`}>
              <div className="pl-4 pb-2 space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">Documentation</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white py-2 text-sm">API Reference</a>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <a href="#" className="block py-3 text-white text-base border-t border-gray-800/30">
            Pricing
          </a>

          {/* Log In */}
          <a href="#" className="block py-3 text-white text-base border-t border-gray-800/30">
            Log In
          </a>

          {/* Get Started Button */}
          <div className="pt-4 border-t border-gray-800/30">
            <a 
              href="#" 
              className="block w-full text-center bg-[#2a2a32] text-[#e4b2b3] px-4 py-3 border border-[#3a3a45] font-medium"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
