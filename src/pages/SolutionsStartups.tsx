import React from 'react';

const SolutionsStartups = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#e4b2b3] font-medium tracking-wider text-sm uppercase mb-4 block">For Startups</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build fast. Scale faster.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Get the infrastructure you need to launch your MVP and grow to millions of users. 
            Generous credits and support for eligible startups.
          </p>
          <button className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition">
            Apply for Credits
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#22222a] p-8 rounded-2xl border border-[#2a2a35]">
            <h3 className="text-2xl font-bold mb-4">Startup Program Benefits</h3>
            <ul className="space-y-4">
              {[
                "$10,000 in cloud credits for 12 months",
                "Technical support and architecture reviews",
                "Co-marketing opportunities",
                "Access to investor network"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[#e4b2b3] mt-1">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#22222a] p-8 rounded-2xl border border-[#2a2a35]">
            <h3 className="text-2xl font-bold mb-4">Why Startups Choose Us</h3>
            <ul className="space-y-4">
              {[
                "Simple, predictable pricing",
                "Developer-friendly API and CLI",
                "No vendor lock-in",
                "Instant provisioning"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[#4fd1c5] mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by next-gen unicorns</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholders for logos */}
            <div className="text-2xl font-bold">ACME Corp</div>
            <div className="text-2xl font-bold">Globex</div>
            <div className="text-2xl font-bold">Soylent</div>
            <div className="text-2xl font-bold">Initech</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsStartups;
