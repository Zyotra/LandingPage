
const EnterprisePage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 mb-6 border border-[#e4b2b3]/30 rounded-full bg-[#e4b2b3]/10 text-[#e4b2b3] text-sm font-medium tracking-wide">
              ENTERPRISE GRADE CLOUD
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Scale without <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4b2b3] to-[#4fd1c5]">compromise.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Custom infrastructure solutions designed for mission-critical workloads. 
              Get dedicated support, advanced security, and guaranteed uptime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#dba0a1] transition shadow-lg shadow-[#e4b2b3]/20">
                Talk to Sales
              </button>
              <button className="px-8 py-4 rounded-md font-bold text-lg border border-[#3a3a45] hover:bg-[#2a2a35] transition">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e4b2b3]/20 to-[#4fd1c5]/20 blur-3xl rounded-full"></div>
            <div className="relative bg-[#22222a]/80 backdrop-blur-xl border border-[#2a2a35] p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-[#2a2a35] pb-6">
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Uptime Guarantee</div>
                  <div className="text-3xl font-bold text-white">99.999%</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Support Response</div>
                  <div className="text-3xl font-bold text-[#4fd1c5]">&lt; 15 min</div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Dedicated Account Manager", value: "Included" },
                  { label: "Custom SLAs", value: "Available" },
                  { label: "Architecture Reviews", value: "Quarterly" },
                  { label: "Security Audits", value: "On-demand" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="font-medium text-white flex items-center gap-2">
                      <span className="text-[#e4b2b3]">✓</span> {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mb-24 text-center">
          <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">Trusted by global enterprises</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
             {/* Logo Placeholders */}
             <div className="text-2xl font-bold">FORTUNE 500</div>
             <div className="text-2xl font-bold">TECH GIANT</div>
             <div className="text-2xl font-bold">GLOBAL BANK</div>
             <div className="text-2xl font-bold">MEDIA CORP</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Advanced Security",
              desc: "DDoS protection, WAF, and private networking included by default.",
              icon: "🛡️"
            },
            {
              title: "Compliance Ready",
              desc: "SOC 2, HIPAA, and GDPR compliant infrastructure.",
              icon: "📋"
            },
            {
              title: "Global Reach",
              desc: "Deploy in 25+ regions with low-latency backbone.",
              icon: "🌍"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#1e1e24] p-8 rounded-xl border border-[#2a2a35] hover:border-[#e4b2b3]/50 transition group">
              <div className="text-4xl mb-6 bg-[#2a2a35] w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#22222a] to-[#1a1a22] rounded-3xl p-12 border border-[#2a2a35] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4b2b3] to-[#4fd1c5]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your infrastructure?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust Zyotra for their most critical applications.
            Our team is ready to help you migrate.
          </p>
          <button className="bg-white text-[#1a1a22] px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;
