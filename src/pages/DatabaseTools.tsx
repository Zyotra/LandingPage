
const DatabaseTools = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Visual Database Management
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Manage your databases with an intuitive UI. View tables, run queries, and monitor performance — all from your browser.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Visual table browser",
                "Run SQL queries directly",
                "Export & import data",
                "Real-time query results"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center text-[#e4b2b3] text-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://zyotraportal.ramkrishna.cloud/register"
              className="inline-block bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition"
            >
              Get Started
            </a>
          </div>
          <div className="bg-[#22222a] p-6 rounded-2xl border border-[#2a2a35] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4b2b3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Database Table Visualization */}
            <div className="relative z-10">
              {/* Query Input */}
              <div className="bg-[#1a1a22] rounded-lg border border-[#2a2a35] p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Query Editor</span>
                </div>
                <code className="text-sm text-[#e4b2b3] font-mono">
                  SELECT * FROM users WHERE status = 'active';
                </code>
              </div>

              {/* Results Table */}
              <div className="bg-[#1a1a22] rounded-lg border border-[#2a2a35] overflow-hidden">
                <div className="px-3 py-2 border-b border-[#2a2a35] flex items-center justify-between">
                  <span className="text-xs text-gray-400">Results: 3 rows</span>
                  <span className="text-xs text-green-400">● Connected</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#22222a] text-gray-400 text-xs uppercase">
                        <th className="px-3 py-2 text-left">id</th>
                        <th className="px-3 py-2 text-left">name</th>
                        <th className="px-3 py-2 text-left">email</th>
                        <th className="px-3 py-2 text-left">status</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-t border-[#2a2a35]">
                        <td className="px-3 py-2 text-gray-300">1</td>
                        <td className="px-3 py-2 text-gray-300">John Doe</td>
                        <td className="px-3 py-2 text-gray-400">john@example.com</td>
                        <td className="px-3 py-2"><span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">active</span></td>
                      </tr>
                      <tr className="border-t border-[#2a2a35] bg-[#22222a]/50">
                        <td className="px-3 py-2 text-gray-300">2</td>
                        <td className="px-3 py-2 text-gray-300">Jane Smith</td>
                        <td className="px-3 py-2 text-gray-400">jane@example.com</td>
                        <td className="px-3 py-2"><span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">active</span></td>
                      </tr>
                      <tr className="border-t border-[#2a2a35]">
                        <td className="px-3 py-2 text-gray-300">3</td>
                        <td className="px-3 py-2 text-gray-300">Bob Wilson</td>
                        <td className="px-3 py-2 text-gray-400">bob@example.com</td>
                        <td className="px-3 py-2"><span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">active</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Database Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-[#1a1a22] p-3 rounded-lg border border-[#2a2a35]">
                  <p className="text-xs text-gray-500 mb-1">Tables</p>
                  <p className="text-lg font-bold text-white">12</p>
                </div>
                <div className="bg-[#1a1a22] p-3 rounded-lg border border-[#2a2a35]">
                  <p className="text-xs text-gray-500 mb-1">Records</p>
                  <p className="text-lg font-bold text-white">45.2K</p>
                </div>
                <div className="bg-[#1a1a22] p-3 rounded-lg border border-[#2a2a35]">
                  <p className="text-xs text-gray-500 mb-1">Size</p>
                  <p className="text-lg font-bold text-white">128 MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Table Browser",
              desc: "Navigate your database structure visually. Browse tables, columns, and relationships."
            },
            {
              title: "Query Editor",
              desc: "Write and execute SQL queries with syntax highlighting and auto-completion."
            },
            {
              title: "Data Export",
              desc: "Export query results to CSV, JSON, or SQL format with one click."
            }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#22222a] border border-[#2a2a35]">
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Supported Databases */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-8">Supported Databases</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['MySQL', 'PostgreSQL'].map((db) => (
              <div key={db} className="px-6 py-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-gray-300">
                {db}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseTools;

