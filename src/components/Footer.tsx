const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a22] border-t border-gray-800/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-6 gap-8 mb-16">
          {/* Logo Column */}
          <div className="col-span-1">
            <a href="#" className="text-[#f5a623] font-bold text-2xl tracking-wider flex items-center">
              ZYOTRA<span className="text-xs ml-0.5 text-gray-500">®</span>
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Made with <span className="text-red-500">❤</span> on <span>🌍</span>.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Customers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Media kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">VPS Instances</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Auto Scaling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Load Balancing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Monitoring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">CI/CD Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">SSL Certificates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">DDoS Protection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">API Access</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Docs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Changelog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Status Page</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Contact sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Request a demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Technical support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Discord</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">X (Twitter)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* SOC Badge Column */}
          <div className="flex justify-end">
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
        <div className="border-t border-gray-800/30 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2025 Zyotra Technologies Inc.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
                Privacy policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
                Terms & conditions
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
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
