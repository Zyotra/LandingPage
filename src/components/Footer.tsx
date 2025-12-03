const Footer = () => {
  const LINK_COLOR = "#e1b1b3"; // rgb(225,177,179)

  return (
    <footer className="w-full bg-[#1a1a22] border-t border-gray-800/30 pt-8 sm:pt-10 md:pt-16 pb-4 sm:pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Logo Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 sm:mb-0">
            <a href="#" className="font-bold text-lg sm:text-xl md:text-2xl tracking-wider flex items-center text-white">
              ZYOTRA<span className="text-[10px] sm:text-xs ml-0.5 text-gray-500">®</span>
            </a>
            <p className="text-xs sm:text-sm mt-2 sm:mt-3" style={{ color: LINK_COLOR }}>
              Made with <span className="text-red-500">❤</span> on <span>🌍</span>.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 md:mb-4">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Careers</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Customers</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">About Us</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Media kit</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 md:mb-4">Platform</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">VPS Instances</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Auto Scaling</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Load Balancing</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Monitoring</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">CI/CD Integration</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">SSL Certificates</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden md:block">DDoS Protection</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden md:block">API Access</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Pricing</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Enterprise</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Blog</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Docs</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">Tutorials</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">Templates</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden md:block">Changelog</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden md:block">Status Page</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 md:mb-4">Connect</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Contact sales</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Request a demo</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">Technical support</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">Discord</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">GitHub</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition">X (Twitter)</a></li>
              <li><a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-xs sm:text-sm transition hidden sm:block">LinkedIn</a></li>
            </ul>
          </div>

          {/* Counter Column (right) */}
          <div className="hidden lg:flex justify-end items-start">
            <div className="inline-block">
              <div className="border rounded px-3 py-2" style={{ borderColor: 'rgba(225,177,179,0.25)' }}>
                <div className="font-mono text-sm" style={{ color: LINK_COLOR }}>
                  <span className="tracking-widest">012345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/30 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm order-2 sm:order-1" style={{ color: LINK_COLOR }}>
              © 2025 Zyotra Technologies Inc.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
              <a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-[10px] sm:text-xs md:text-sm transition">Privacy policy</a>
              <a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-[10px] sm:text-xs md:text-sm transition">Terms & conditions</a>
              <a href="#" style={{ color: LINK_COLOR }} className="hover:underline text-[10px] sm:text-xs md:text-sm transition">Cookie policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
