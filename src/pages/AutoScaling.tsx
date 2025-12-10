
const AutoScaling = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Intelligent Auto Scaling
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Automatically adjust your resources to match demand. Ensure performance during peaks and save costs during lulls.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Dynamic resource allocation",
                "Custom scaling policies",
                "Real-time metrics integration",
                "Zero downtime scaling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center text-[#e4b2b3] text-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition">
              Configure Scaling
            </button>
          </div>
          <div className="bg-[#22222a] p-8 rounded-2xl border border-[#2a2a35] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4b2b3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Abstract Visualization */}
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-end h-40 gap-2">
                {[40, 60, 30, 80, 50, 90, 70, 45].map((h, i) => (
                  <div key={i} className="w-full bg-[#2a2a35] rounded-t-sm relative group">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#e4b2b3] to-[#4fd1c5] opacity-80 transition-all duration-1000"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-mono">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
              </div>
              <div className="bg-[#1a1a22] p-4 rounded-lg border border-[#2a2a35] mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Current Instances</span>
                  <span className="text-[#4fd1c5] font-bold">12 Active</span>
                </div>
                <div className="w-full bg-[#2a2a35] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#4fd1c5] h-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Predictive Scaling",
              desc: "Uses machine learning to predict traffic spikes before they happen."
            },
            {
              title: "Scheduled Actions",
              desc: "Scale up or down based on known traffic patterns or events."
            },
            {
              title: "Health Checks",
              desc: "Automatically replace unhealthy instances to maintain availability."
            }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#22222a] border border-[#2a2a35]">
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScaling;
