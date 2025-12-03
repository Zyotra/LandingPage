import React from 'react';

const SolutionsEnterprise = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-[#4fd1c5] font-medium tracking-wider text-sm uppercase mb-4 block">For Enterprise</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mission-critical infrastructure at scale.
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Secure, compliant, and reliable cloud solutions for large organizations. 
              Dedicated support and custom SLAs.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#4fd1c5] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#3ebcb0] transition">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="bg-[#22222a] p-10 rounded-2xl border border-[#2a2a35] relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4fd1c5]/20 rounded-full blur-xl"></div>
            <h3 className="text-2xl font-bold mb-6">Enterprise Grade Security</h3>
            <div className="space-y-6">
              {[
                { title: "SOC 2 Type II Compliant", desc: "Rigorous security controls and auditing." },
                { title: "Dedicated Private Cloud", desc: "Isolated resources for maximum security." },
                { title: "SSO & IAM", desc: "Integrate with your existing identity providers." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2a2a35] flex items-center justify-center text-[#4fd1c5] shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e24] border border-[#2a2a35] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#2a2a35]">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Dedicated Support</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">Global</div>
              <div className="text-gray-400">Data Centers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsEnterprise;
