import { Link } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

const Footer = () => {
  const { openContact } = useContact();

  return (
    <footer className="w-full bg-[#1a1a22] border-t border-[#2a2a35] pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e4b2b3]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <svg 
                className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" 
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
              <span className="text-xl font-bold text-[#e4b2b3] tracking-wider">ZYOTRA</span>
            </Link>
            <p className="text-gray-500 text-sm mt-4 max-w-[200px] leading-relaxed">
              Deploy servers in seconds. Automate everything.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e4b2b3] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e4b2b3] transition-colors"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e4b2b3] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/platform/vps" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  VPS Instances
                </Link>
              </li>
              <li>
                <Link to="/platform/database" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  Database Tools
                </Link>
              </li>
              <li>
                <Link to="/platform/monitoring" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/startups" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  For Startups
                </Link>
              </li>
              <li>
                <Link to="/solutions/enterprise" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  For Enterprise
                </Link>
              </li>
              <li>
                <Link to="/solutions/developers" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  For Developers
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  Enterprise Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="https://status.zyotra.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={openContact}
                  className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors text-left"
                >
                  Contact Sales
                </button>
              </li>
              <li>
                <a 
                  href="https://zyotraportal.ramkrishna.cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a 
                  href="https://zyotraportal.ramkrishna.cloud/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e4b2b3] text-sm transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a35] pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs sm:text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Zyotra Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 order-1 sm:order-2">
              <a href="#" className="text-gray-500 hover:text-[#e4b2b3] text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#e4b2b3] text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
