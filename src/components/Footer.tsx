const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a22] border-t border-gray-800/30 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 md:mb-16">
          {/* Logo Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="text-[#f5a623] font-bold text-xl md:text-2xl tracking-wider flex items-center">
              ZYOTRA<span className="text-xs ml-0.5 text-gray-500">®</span>
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Made with <span className="text-red-500">❤</span> on <span>🌍</span>.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Customers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Media kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Platform
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">VPS Instances</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Auto Scaling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Load Balancing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Monitoring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">CI/CD Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">SSL Certificates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden md:block">DDoS Protection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden md:block">API Access</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Docs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden md:block">Changelog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden md:block">Status Page</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Connect
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Contact sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Request a demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">Technical support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Discord</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">X (Twitter)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition hidden sm:block">LinkedIn</a></li>
            </ul>
          </div>

          {/* SOC Badge Column */}
          <div className="hidden lg:flex justify-end">
            <div className="text-gray-500 font-mono text-xs">
              <div className="border border-gray-600 rounded px-3 py-2 inline-block">
                <div className="text-center">
                  <span className="text-lg font-bold tracking-widest">SOC</span>
                  <div className="text-[10px]">AICPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/30 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs md:text-sm order-2 sm:order-1">
              © 2025 Zyotra Technologies Inc.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 order-1 sm:order-2">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm transition">
                Privacy policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm transition">
                Terms & conditions
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm transition">
                Cookie policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
