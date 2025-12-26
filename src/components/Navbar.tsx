import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openContact } = useContact();

  // Ref for dropdown timeout management
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  // Dropdown handlers with delay
  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  // Logo component to avoid duplication
  const Logo = ({ className = "" }: { className?: string }) => (
    <svg 
      className={`w-7 h-7 animate-spin-slow ${className}`}
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
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'px-4 md:px-6 lg:px-8 pt-3' : 'px-0 pt-0'
    }`}>
      <nav className={`mx-auto transition-all duration-500 relative ${
        scrolled 
          ? 'max-w-5xl bg-[#1a1a22]/95 backdrop-blur-md border border-[#2a2a35] rounded-lg shadow-lg shadow-black/20' 
          : 'max-w-full bg-[#1a1a22] border-b border-[#2a2a35]'
      }`}>
        {/* Corner decorations - only show when scrolled */}
        {scrolled && (
          <>
            <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#e4b2b3]/30 rounded-tl-lg"></span>
            <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#e4b2b3]/30 rounded-tr-lg"></span>
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#e4b2b3]/30 rounded-bl-lg"></span>
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#e4b2b3]/30 rounded-br-lg"></span>
          </>
        )}
        
        {/* Main Navbar Content */}
        <div className={`flex items-center justify-between relative transition-all duration-500 ${
          scrolled ? 'px-4 md:px-6 py-3' : 'max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4'
        }`}>
          
          {/* Left - Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wider">
            <Logo />
            <span className="text-xl text-[#e4b2b3] hover:text-[#f0c4c5] transition">ZYOTRA</span>
          </Link>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <button className="flex items-center gap-1.5 text-gray-300 hover:text-white transition text-sm py-2">
                Products
                <svg className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="w-72 bg-[#1e1e26] border border-[#2a2a35] rounded-lg shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Dropdown Header */}
                  <div className="px-4 py-3 border-b border-[#2a2a35]">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</span>
                  </div>
                  
                  <div className="p-2">
                    <Link 
                      to="/platform/vps"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 hover:text-white hover:bg-[#2a2a35] transition group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-md bg-[#e4b2b3]/10 flex items-center justify-center group-hover:bg-[#e4b2b3]/20 transition">
                        <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">VPS Instances</div>
                        <div className="text-xs text-gray-500">Deploy servers in seconds</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/platform/autoscaling"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 hover:text-white hover:bg-[#2a2a35] transition group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-md bg-[#e4b2b3]/10 flex items-center justify-center group-hover:bg-[#e4b2b3]/20 transition">
                        <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Auto Scaling</div>
                        <div className="text-xs text-gray-500">Scale resources automatically</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/platform/loadbalancing"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 hover:text-white hover:bg-[#2a2a35] transition group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-md bg-[#e4b2b3]/10 flex items-center justify-center group-hover:bg-[#e4b2b3]/20 transition">
                        <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Load Balancing</div>
                        <div className="text-xs text-gray-500">Distribute traffic efficiently</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/platform/monitoring"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-300 hover:text-white hover:bg-[#2a2a35] transition group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-md bg-[#e4b2b3]/10 flex items-center justify-center group-hover:bg-[#e4b2b3]/20 transition">
                        <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium">Monitoring</div>
                        <div className="text-xs text-gray-500">Real-time metrics & alerts</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <Link 
              to="/docs" 
              className={`text-sm transition ${location.pathname === '/docs' ? 'text-[#e4b2b3]' : 'text-gray-300 hover:text-white'}`}
            >
              Docs
            </Link>

            {/* Enterprise */}
            <Link 
              to="/enterprise" 
              className={`text-sm transition ${location.pathname === '/enterprise' ? 'text-[#e4b2b3]' : 'text-gray-300 hover:text-white'}`}
            >
              Enterprise
            </Link>

            {/* Contact Sales */}
            <button 
              onClick={openContact}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              Contact
            </button>
          </div>

          {/* Right - Auth Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://zyotraportal.ramkrishna.cloud" 
              className="text-gray-300 hover:text-white transition text-sm"
            >
              Log in
            </a>
            
            <a 
              href="https://zyotraportal.ramkrishna.cloud/register" 
              className="inline-flex items-center gap-2 bg-[#f59fa0] hover:bg-[#fc8f91] text-[#1a1a22] px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-[#2a2a35] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1">
            
            {/* Products Accordion */}
            <div>
              <button 
                className="w-full flex items-center justify-between py-3 text-white text-base"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                Products
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-60' : 'max-h-0'}`}>
                <div className="pl-4 pb-3 space-y-1">
                  <Link to="/platform/vps" className="block text-gray-400 hover:text-white py-2 text-sm">VPS Instances</Link>
                  <Link to="/platform/autoscaling" className="block text-gray-400 hover:text-white py-2 text-sm">Auto Scaling</Link>
                  <Link to="/platform/loadbalancing" className="block text-gray-400 hover:text-white py-2 text-sm">Load Balancing</Link>
                  <Link to="/platform/monitoring" className="block text-gray-400 hover:text-white py-2 text-sm">Monitoring</Link>
                </div>
              </div>
            </div>

            {/* Docs */}
            <Link to="/docs" className="block py-3 text-white text-base border-t border-[#2a2a35]">
              Docs
            </Link>

            {/* Enterprise */}
            <Link to="/enterprise" className="block py-3 text-white text-base border-t border-[#2a2a35]">
              Enterprise
            </Link>

            {/* Contact */}
            <button 
              onClick={openContact}
              className="block w-full text-left py-3 text-white text-base border-t border-[#2a2a35]"
            >
              Contact Sales
            </button>

            {/* Auth Actions */}
            <div className="pt-4 border-t border-[#2a2a35] space-y-3">
              <a 
                href="https://zyotraportal.ramkrishna.cloud" 
                className="block w-full text-center text-gray-300 hover:text-white py-2.5 text-base border border-[#2a2a35] rounded-md"
              >
                Log in
              </a>
              <a 
                href="https://zyotraportal.ramkrishna.cloud/register" 
                className="block w-full text-center bg-[#e4b2b3] hover:bg-[#d4a2a3] text-[#1a1a22] py-2.5 rounded-md font-medium"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
