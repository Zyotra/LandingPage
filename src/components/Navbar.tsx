import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'px-4 md:px-6 lg:px-8 pt-3' : 'px-0 pt-0'
    }`}>
      {/* Floating Navbar Container */}
      <nav className={`mx-auto transition-all duration-500 ${
        scrolled 
          ? 'max-w-5xl bg-[#1a1a22]/95 backdrop-blur-md border border-[#2a2a35] rounded-lg shadow-lg shadow-black/20' 
          : 'max-w-full bg-[#1a1a22] border-b border-[#2a2a35]'
      }`}>
        {/* Corner decorations - only show when scrolled */}
        {scrolled && (
          <>
            <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#3a3a45] rounded-tl-lg"></span>
            <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#3a3a45] rounded-tr-lg"></span>
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#3a3a45] rounded-bl-lg"></span>
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#3a3a45] rounded-br-lg"></span>
          </>
        )}
        
        {/* Main Navbar Content */}
        <div className={`flex items-center justify-between relative transition-all duration-500 ${
          scrolled ? 'px-4 md:px-6 py-3' : 'max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4'
        }`}>
          {/* Left side - Logo on mobile, Navigation on desktop */}
          <div className="flex items-center gap-6">
            {/* Logo - visible on mobile */}
            <Link to="/" className="flex md:hidden items-center gap-2 font-bold text-xl tracking-wider">
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
            </Link>

            {/* Desktop Navigation - Left side */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {/* Platform Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white transition text-sm">
                  Platform
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {platformOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-[#22222a] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-3">
                    <div className="space-y-1">
                      <Link to="/platform/autoscaling" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">Auto Scaling</Link>
                      <Link to="/platform/loadbalancing" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">Load Balancing</Link>
                      <Link to="/platform/monitoring" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">Monitoring</Link>
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
                <button className="flex items-center gap-1 text-gray-300 hover:text-white transition text-sm">
                  Solutions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-[#22222a] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-3">
                    <div className="space-y-1">
                      <Link to="/solutions/startups" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">For Startups</Link>
                      <Link to="/solutions/enterprise" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">For Enterprise</Link>
                      <Link to="/solutions/developers" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">For Developers</Link>
                    </div>
                  </div>
                )}
              </div>
              {/* Enterprise */}
              <Link to="/enterprise" className="text-gray-300 hover:text-white transition text-sm">
                Enterprise
              </Link>
            </div>
          </div>

          {/* Center - Logo (Desktop only) */}
          <div className="hidden md:flex items-center justify-center">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wider">
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
              <span className="text-xl text-[#e4b2b3] hover:text-[#e5a3a5] transition">ZYOTRA</span>
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition text-sm">
                Resources
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-[#22222a] border border-[#3a3a3a] rounded-lg shadow-xl z-50 p-3">
                  <div className="space-y-1">
                    <Link to="/docs" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">Documentation</Link>
                    <Link to="/blog" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">Blog</Link>
                    <Link to="/api" className="block text-gray-300 hover:text-white hover:bg-[#2a2a35] px-3 py-2 rounded transition text-sm">API Reference</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              Pricing
            </a>

            {/* Log In */}
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              Log In
            </a>

            {/* Get started Button */}
            <div className="relative p-1">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#e4b2b3]/60 rounded-tl-sm"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#e4b2b3]/60 rounded-tr-sm"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#e4b2b3]/60 rounded-bl-sm"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#e4b2b3]/60 rounded-br-sm"></span>
              <a 
                href="#" 
                className="inline-flex items-center bg-transparent hover:bg-[#e4b2b3]/10 text-[#e4b2b3] px-4 py-1.5 transition-all duration-300 border border-[#e4b2b3]/40 hover:border-[#e4b2b3]/60 rounded-sm"
              >
                <span className="font-medium text-sm">Get started</span>
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
        <div className={`md:hidden border-t border-[#2a2a35] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2 max-h-[60vh] overflow-y-auto">
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
                  <Link to="/platform/autoscaling" className="block text-gray-400 hover:text-white py-2 text-sm">Auto Scaling</Link>
                  <Link to="/platform/loadbalancing" className="block text-gray-400 hover:text-white py-2 text-sm">Load Balancing</Link>
                  <Link to="/platform/monitoring" className="block text-gray-400 hover:text-white py-2 text-sm">Monitoring</Link>
                </div>
              </div>
            </div>

            {/* Solutions Accordion */}
            <div className="border-t border-[#2a2a35]">
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
                  <Link to="/solutions/startups" className="block text-gray-400 hover:text-white py-2 text-sm">For Startups</Link>
                  <Link to="/solutions/enterprise" className="block text-gray-400 hover:text-white py-2 text-sm">For Enterprise</Link>
                  <Link to="/solutions/developers" className="block text-gray-400 hover:text-white py-2 text-sm">For Developers</Link>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <Link to="/enterprise" className="block py-3 text-white text-base border-t border-[#2a2a35]">
              Enterprise
            </Link>

            {/* Resources Accordion */}
            <div className="border-t border-[#2a2a35]">
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
                  <Link to="/docs" className="block text-gray-400 hover:text-white py-2 text-sm">Documentation</Link>
                  <Link to="/blog" className="block text-gray-400 hover:text-white py-2 text-sm">Blog</Link>
                  <Link to="/api" className="block text-gray-400 hover:text-white py-2 text-sm">API Reference</Link>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <a href="#" className="block py-3 text-white text-base border-t border-[#2a2a35]">
              Pricing
            </a>

            {/* Log In */}
            <a href="#" className="block py-3 text-white text-base border-t border-[#2a2a35]">
              Log In
            </a>

            {/* Get Started Button */}
            <div className="pt-4 border-t border-[#2a2a35]">
              <a 
                href="#" 
                className="block w-full text-center bg-transparent text-[#e4b2b3] px-4 py-3 border border-[#e4b2b3]/40 rounded font-medium"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
