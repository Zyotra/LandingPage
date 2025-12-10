import { useContact } from '../context/ContactContext';

const Monitoring = () => {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Real-time Monitoring
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Gain deep visibility into your infrastructure. Track metrics, logs, and traces in a single unified platform.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#e4b2b3] text-[#1a1a22] px-6 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition">
                Start Monitoring
              </button>
              <button 
                onClick={openContact}
                className="text-white px-6 py-3 rounded-md font-medium hover:bg-[#2a2a35] transition"
              >
                View Demo
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            {/* Mock Dashboard */}
            <div className="bg-[#22222a] rounded-xl border border-[#2a2a35] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-[#2a2a35] pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500">System Status: Healthy</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a1a22] p-4 rounded-lg border border-[#2a2a35]">
                  <div className="text-gray-400 text-xs mb-1">CPU Usage</div>
                  <div className="text-2xl font-bold text-[#4fd1c5]">42%</div>
                  <div className="w-full bg-[#2a2a35] h-1 mt-2 rounded-full">
                    <div className="bg-[#4fd1c5] w-[42%] h-full rounded-full"></div>
                  </div>
                </div>
                <div className="bg-[#1a1a22] p-4 rounded-lg border border-[#2a2a35]">
                  <div className="text-gray-400 text-xs mb-1">Memory</div>
                  <div className="text-2xl font-bold text-[#e4b2b3]">6.2 GB</div>
                  <div className="w-full bg-[#2a2a35] h-1 mt-2 rounded-full">
                    <div className="bg-[#e4b2b3] w-[75%] h-full rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a22] p-4 rounded-lg border border-[#2a2a35] h-32 flex items-end justify-between gap-1">
                {[30, 45, 35, 60, 75, 50, 65, 80, 70, 55, 40, 50].map((h, i) => (
                  <div key={i} className="w-full bg-[#2a2a35] rounded-t-sm relative group">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-[#e4b2b3] opacity-60 group-hover:opacity-100 transition-all"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Alerts",
              desc: "Set up alerts via Email, Slack, or PagerDuty when thresholds are breached.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e4b2b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              )
            },
            {
              title: "Log Management",
              desc: "Centralized log aggregation with powerful search and filtering capabilities.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e4b2b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              title: "Infrastructure Map",
              desc: "Visual topology of your entire stack and dependencies.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e4b2b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              )
            }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-[#2a2a35] rounded-xl hover:bg-[#22222a] transition group">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#e4b2b3]">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
