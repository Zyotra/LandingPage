
const VpsInstances = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            High Performance VPS Instances
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Deploy scalable, high-performance virtual private servers in seconds. 
            Powered by the latest generation processors and NVMe storage.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition">
              Deploy Now
            </button>
            <button className="border border-[#3a3a45] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2a35] transition">
              View Pricing
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "NVMe Storage",
              desc: "Lightning fast local storage for I/O intensive applications.",
              icon: "🚀"
            },
            {
              title: "40Gbps Network",
              desc: "High throughput networking for data-heavy workloads.",
              icon: "⚡"
            },
            {
              title: "DDoS Protection",
              desc: "Always-on protection against volumetric attacks.",
              icon: "🛡️"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#22222a] p-8 rounded-xl border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#e4b2b3] transition">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Specs Table */}
        <div className="bg-[#22222a] rounded-xl border border-[#2a2a35] overflow-hidden">
          <div className="p-6 border-b border-[#2a2a35]">
            <h2 className="text-2xl font-bold">Instance Types</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#1e1e24] text-gray-400">
                <tr>
                  <th className="p-6 font-medium">Type</th>
                  <th className="p-6 font-medium">vCPU</th>
                  <th className="p-6 font-medium">RAM</th>
                  <th className="p-6 font-medium">Storage</th>
                  <th className="p-6 font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a35]">
                {[
                  { type: "Standard", cpu: "1 vCPU", ram: "2 GB", storage: "50 GB NVMe", price: "$10/mo" },
                  { type: "Performance", cpu: "2 vCPU", ram: "4 GB", storage: "80 GB NVMe", price: "$20/mo" },
                  { type: "Pro", cpu: "4 vCPU", ram: "8 GB", storage: "160 GB NVMe", price: "$40/mo" },
                  { type: "Elite", cpu: "8 vCPU", ram: "16 GB", storage: "320 GB NVMe", price: "$80/mo" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#2a2a35]/50 transition">
                    <td className="p-6 font-medium text-white">{row.type}</td>
                    <td className="p-6 text-gray-400">{row.cpu}</td>
                    <td className="p-6 text-gray-400">{row.ram}</td>
                    <td className="p-6 text-gray-400">{row.storage}</td>
                    <td className="p-6 text-[#e4b2b3] font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VpsInstances;
