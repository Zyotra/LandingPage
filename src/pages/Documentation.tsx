import { useState } from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', label: 'Quick Start' },
    { id: 'database-management', label: 'Databases' },
    { id: 'query-runner', label: 'SQL Editor' },
    { id: 'table-browser', label: 'Tables' },
    { id: 'github-auth', label: 'GitHub Auth' },
    { id: 'deployments', label: 'Deploy' },
    { id: 'backups', label: 'Backups' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a22] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#e4b2b3] text-sm font-medium tracking-wide mb-2">Documentation</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Zyotra Docs
          </h1>
          <p className="text-gray-400 max-w-xl">
            Learn how to deploy servers, manage databases, and automate your infrastructure.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-56 shrink-0">
            <nav className="sticky top-28 bg-[#1e1e26] rounded-xl border border-[#2a2a35] overflow-hidden">
              {/* Guide Section */}
              <div className="p-3 border-b border-[#2a2a35]">
                <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest px-2">Guide</p>
              </div>
              <div className="p-2">
                {sections.slice(0, 1).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-[13px] font-medium transition-all whitespace-nowrap ${activeSection === section.id
                        ? 'bg-[#e4b2b3]/10 text-[#e4b2b3]'
                        : 'text-gray-400 hover:text-white hover:bg-[#2a2a35]'
                      }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Database Section */}
              <div className="p-3 border-t border-[#2a2a35]">
                <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest px-2">Database</p>
              </div>
              <div className="p-2 pt-0">
                {sections.slice(1, 5).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-[13px] font-medium transition-all whitespace-nowrap ${activeSection === section.id
                        ? 'bg-[#e4b2b3]/10 text-[#e4b2b3]'
                        : 'text-gray-400 hover:text-white hover:bg-[#2a2a35]'
                      }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Infrastructure Section */}
              <div className="p-3 border-t border-[#2a2a35]">
                <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest px-2">Infrastructure</p>
              </div>
              <div className="p-2 pt-0">
                {sections.slice(5).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-[13px] font-medium transition-all whitespace-nowrap ${activeSection === section.id
                        ? 'bg-[#e4b2b3]/10 text-[#e4b2b3]'
                        : 'text-gray-400 hover:text-white hover:bg-[#2a2a35]'
                      }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Resources Section */}
              <div className="p-3 border-t border-[#2a2a35]">
                <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest px-2">Resources</p>
              </div>
              <div className="p-2 pt-0 pb-3">
                <Link to="/blog" className="block px-3 py-2 rounded-md text-[13px] font-medium text-gray-400 hover:text-white hover:bg-[#2a2a35] transition-all whitespace-nowrap">
                  Blog
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">

            {/* Getting Started Section */}
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Quick Start</h2>
                    <p className="text-gray-500 text-sm">Get your first deployment running instantly</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Zyotra is a powerful platform for deploying and managing your applications on Ubuntu servers.
                    With our intuitive dashboard, you can deploy projects from GitHub, manage PostgreSQL databases
                    with a visual interface, run SQL queries, and automate your entire infrastructure.
                  </p>

                  {/* Quick Start Steps */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Start Guide</h3>
                    {[
                      {
                        step: 1,
                        title: 'Create an Account',
                        desc: 'Sign up at portal.zyotra.com to access the dashboard',
                        code: null
                      },
                      {
                        step: 2,
                        title: 'Add Your VPS Machine',
                        desc: 'Connect your Ubuntu server using SSH credentials (IP, username, password/key)',
                        code: null
                      },
                      {
                        step: 3,
                        title: 'Create a Database',
                        desc: 'Deploy PostgreSQL with one click and get connection details instantly',
                        code: 'postgresql://admin:admin@localhost/test68'
                      },
                      {
                        step: 4,
                        title: 'Deploy Your Project',
                        desc: 'Connect your GitHub repository and deploy with automatic builds',
                        code: null
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                        <span className="w-8 h-8 rounded-full bg-[#e4b2b3]/20 text-[#e4b2b3] flex items-center justify-center text-sm font-bold shrink-0">
                          {item.step}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1">{item.title}</h4>
                          <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                          {item.code && (
                            <code className="block px-3 py-2 rounded bg-[#22222a] text-[#e4b2b3] text-sm font-mono">
                              {item.code}
                            </code>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Visual Database UI', desc: 'Browse tables and run queries without command line', icon: '🗄️' },
                      { title: 'GitHub Integration', desc: 'Deploy directly from your repositories', icon: '🔗' },
                      { title: 'One-Click Backups', desc: 'Create and restore database backups easily', icon: '💾' },
                      { title: 'Real-time Monitoring', desc: 'Track CPU, memory, and disk usage live', icon: '📊' },
                    ].map((feature, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-colors">
                        <span className="text-2xl mb-3 block">{feature.icon}</span>
                        <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Database Management Section */}
            {activeSection === 'database-management' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Databases</h2>
                    <p className="text-gray-500 text-sm">Visual interface for PostgreSQL management</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Zyotra provides a complete database management interface. Create PostgreSQL databases,
                    view connection details, manage backups, and access your data through a visual table browser
                    or SQL query runner.
                  </p>

                  {/* Database Overview Mock */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden mb-8">
                    {/* Header */}
                    <div className="p-4 border-b border-[#2a2a35] flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#336791]/20 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-white font-bold text-lg">test68</h3>
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-400">RUNNING</span>
                        </div>
                        <p className="text-gray-500 text-sm">Database Engine: <span className="text-white">postgres</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Created On</p>
                        <p className="text-white">December 26, 2025</p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Connection Details */}
                      <div className="lg:col-span-2 p-6 border-r border-[#2a2a35]">
                        <div className="flex items-center gap-2 mb-4">
                          <svg className="w-5 h-5 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-white font-medium">Connection Details</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">HOST</p>
                            <div className="flex items-center gap-2">
                              <code className="text-[#e4b2b3] font-mono text-sm">31.97.62.215</code>
                              <button className="text-gray-500 hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">USERNAME</p>
                            <p className="text-white font-mono text-sm">admin</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">PORT</p>
                            <p className="text-white font-mono text-sm">5432</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">DATABASE NAME</p>
                            <p className="text-white font-mono text-sm">test68</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">CONNECTION STRING</p>
                            <div className="flex gap-1">
                              <button className="px-2 py-1 text-xs rounded bg-[#2a2a35] text-gray-400">External</button>
                              <button className="px-2 py-1 text-xs rounded bg-[#e4b2b3]/20 text-[#e4b2b3]">Localhost</button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                            <code className="flex-1 text-[#e4b2b3] font-mono text-sm">postgresql://admin:admin@localhost/test68</code>
                            <button className="text-gray-500 hover:text-white">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Backup Section */}
                        <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                          <div className="flex items-center gap-3 mb-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            <div>
                              <p className="text-white font-medium text-sm">DATABASE BACKUP</p>
                              <p className="text-gray-500 text-xs">Manage backups for your POSTGRES database</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#1a1a22] border border-[#2a2a35] text-[#e4b2b3] text-sm hover:border-[#e4b2b3]/50 transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Create Backup
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#1a1a22] border border-[#2a2a35] text-gray-400 text-sm hover:border-[#e4b2b3]/50 transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Access Backup
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Management Panel */}
                      <div className="p-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">MANAGEMENT</p>
                        <div className="space-y-3 mb-6">
                          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-white hover:border-[#e4b2b3]/50 transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Open SQL Shell
                          </button>
                          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-white hover:border-[#e4b2b3]/50 transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                            Browse Tables
                          </button>
                        </div>

                        <div className="border-t border-[#2a2a35] pt-4">
                          <p className="text-xs text-red-400 uppercase tracking-wider mb-3">DANGER ZONE</p>
                          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete Database
                          </button>
                          <p className="text-gray-600 text-xs mt-2">Permanently delete this database and all of its data. This action cannot be undone.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#e4b2b3]/10 border border-[#e4b2b3]/20">
                    <p className="text-[#e4b2b3] text-sm">
                      <strong>💡 Pro Tip:</strong> Use the "Localhost" connection string when your application is running on the same VPS as the database for better performance.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* Query Runner Section */}
            {activeSection === 'query-runner' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">SQL Editor</h2>
                    <p className="text-gray-500 text-sm">Execute queries and view results in real-time</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    The Query Runner provides a powerful SQL editor to execute queries directly on your database.
                    View results instantly, track execution time, and export data as needed.
                  </p>

                  {/* Query Runner Mock */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden mb-6">
                    {/* SQL Editor */}
                    <div className="p-4 border-b border-[#2a2a35]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">SQL EDITOR</span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e4b2b3] text-[#1a1a22] font-medium text-sm hover:bg-[#d4a2a3] transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          RUN QUERY
                        </button>
                      </div>
                      <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                        <code className="text-white font-mono">select * from users;</code>
                      </div>
                    </div>

                    {/* Output */}
                    <div className="p-4 border-b border-[#2a2a35]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">OUTPUT</span>
                      </div>
                      <p className="text-green-400 font-mono text-sm mb-1">[8:29:28 PM] Query executed successfully.</p>
                      <p className="text-gray-500 font-mono text-sm">Affected rows: 3 | Time: 0ms</p>
                    </div>

                    {/* Results Table */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">QUERY RESULT</span>
                        <span className="text-xs text-gray-500">Executed in 0ms</span>
                      </div>
                      <div className="overflow-x-auto rounded-lg border border-[#2a2a35]">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#22222a] text-gray-400 text-xs uppercase">
                              <th className="px-4 py-3 text-left font-semibold">ID</th>
                              <th className="px-4 py-3 text-left font-semibold">NAME</th>
                              <th className="px-4 py-3 text-left font-semibold">EMAIL</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono text-sm">
                            <tr className="border-t border-[#2a2a35]">
                              <td className="px-4 py-3 text-gray-300">1</td>
                              <td className="px-4 py-3 text-white">Ram Krishna Yadav</td>
                              <td className="px-4 py-3 text-gray-400">ram.yadav@example.com</td>
                            </tr>
                            <tr className="border-t border-[#2a2a35] bg-[#22222a]/50">
                              <td className="px-4 py-3 text-gray-300">2</td>
                              <td className="px-4 py-3 text-white">Anita Sharma</td>
                              <td className="px-4 py-3 text-gray-400">anita.sharma@example.com</td>
                            </tr>
                            <tr className="border-t border-[#2a2a35]">
                              <td className="px-4 py-3 text-gray-300">3</td>
                              <td className="px-4 py-3 text-white">Suresh Thapa</td>
                              <td className="px-4 py-3 text-gray-400">suresh.thapa@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                      <h4 className="text-white font-medium mb-2">Supported Commands</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• SELECT, INSERT, UPDATE, DELETE</li>
                        <li>• CREATE TABLE, ALTER TABLE</li>
                        <li>• JOIN operations</li>
                        <li>• Aggregate functions</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                      <h4 className="text-white font-medium mb-2">Keyboard Shortcuts</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li><code className="text-[#e4b2b3]">Ctrl + Enter</code> - Run query</li>
                        <li><code className="text-[#e4b2b3]">Ctrl + /</code> - Comment line</li>
                        <li><code className="text-[#e4b2b3]">Ctrl + S</code> - Save query</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Table Browser Section */}
            {activeSection === 'table-browser' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Tables</h2>
                    <p className="text-gray-500 text-sm">Browse and explore your database schema</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    The Table Browser lets you explore your database structure visually. Browse all public tables,
                    view table data, and see the first 100 rows instantly without writing SQL.
                  </p>

                  {/* Table Browser Mock */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden mb-6">
                    <div className="flex">
                      {/* Sidebar */}
                      <div className="w-48 border-r border-[#2a2a35] p-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">PUBLIC TABLES</p>
                        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e4b2b3]/10 text-[#e4b2b3] text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                          users
                        </button>
                      </div>

                      {/* Table View */}
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm text-gray-400">DATA FOR TABLE: <span className="text-[#e4b2b3] font-medium">USERS</span></p>
                          <p className="text-xs text-gray-500">Showing first 100 rows</p>
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-[#2a2a35]">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-[#22222a] text-gray-400 text-xs uppercase">
                                <th className="px-4 py-3 text-left font-semibold">ID</th>
                                <th className="px-4 py-3 text-left font-semibold">NAME</th>
                                <th className="px-4 py-3 text-left font-semibold">EMAIL</th>
                              </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                              <tr className="border-t border-[#2a2a35]">
                                <td className="px-4 py-3 text-gray-300">1</td>
                                <td className="px-4 py-3 text-white">Ram Krishna Yadav</td>
                                <td className="px-4 py-3 text-gray-400">ram.yadav@example.com</td>
                              </tr>
                              <tr className="border-t border-[#2a2a35] bg-[#22222a]/50">
                                <td className="px-4 py-3 text-gray-300">2</td>
                                <td className="px-4 py-3 text-white">Anita Sharma</td>
                                <td className="px-4 py-3 text-gray-400">anita.sharma@example.com</td>
                              </tr>
                              <tr className="border-t border-[#2a2a35]">
                                <td className="px-4 py-3 text-gray-300">3</td>
                                <td className="px-4 py-3 text-white">Suresh Thapa</td>
                                <td className="px-4 py-3 text-gray-400">suresh.thapa@example.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <p className="text-blue-400 text-sm">
                      <strong>📌 Note:</strong> For complex queries or filtering, use the Query Runner tab to write custom SQL statements.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* GitHub Authentication Section */}
            {activeSection === 'github-auth' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">GitHub Auth</h2>
                    <p className="text-gray-500 text-sm">Connect your VPS to deploy from private repositories</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    To deploy from private GitHub repositories, you need to authenticate your VPS machine with GitHub.
                    This allows Zyotra to clone and deploy your private code securely.
                  </p>

                  {/* Auth Modal Mock */}
                  <div className="max-w-md mx-auto bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden mb-8">
                    <div className="p-6 border-b border-[#2a2a35]">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <h3 className="text-xl font-bold text-white">GitHub Authentication</h3>
                      </div>
                      <p className="text-gray-400 text-sm">Machine: <span className="text-white">Hostinger KVM 1</span></p>
                    </div>

                    <div className="p-6 space-y-4">
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-white hover:border-purple-500/50 transition-colors">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span className="text-sm">How to generate Personal Access Token</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </button>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">GitHub Username</label>
                        <input
                          type="text"
                          placeholder="Enter GitHub username"
                          className="w-full p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-white placeholder:text-gray-600 text-sm focus:border-[#e4b2b3]/50 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Personal Access Token <span className="text-red-400">*</span></label>
                        <input
                          type="password"
                          placeholder="Enter personal access token (not password)"
                          className="w-full p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-white placeholder:text-gray-600 text-sm focus:border-[#e4b2b3]/50 focus:outline-none"
                        />
                        <p className="text-gray-600 text-xs mt-2">Only personal access tokens are accepted. Passwords will not work.</p>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button className="flex-1 py-2.5 rounded-lg border border-[#2a2a35] text-gray-400 hover:text-white hover:border-[#3a3a45] transition-colors">
                          Cancel
                        </button>
                        <button className="flex-1 py-2.5 rounded-lg bg-white text-[#1a1a22] font-medium hover:bg-gray-200 transition-colors">
                          Authenticate
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* How to Generate PAT */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] p-6">
                    <h3 className="text-lg font-bold text-white mb-4">How to Generate a Personal Access Token</h3>
                    <ol className="space-y-3 text-gray-400 text-sm">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#2a2a35] text-[#e4b2b3] flex items-center justify-center text-xs font-bold shrink-0">1</span>
                        <span>Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#2a2a35] text-[#e4b2b3] flex items-center justify-center text-xs font-bold shrink-0">2</span>
                        <span>Click "Generate new token" → "Generate new token (classic)"</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#2a2a35] text-[#e4b2b3] flex items-center justify-center text-xs font-bold shrink-0">3</span>
                        <span>Give it a name, set expiration, and select the <code className="text-[#e4b2b3]">repo</code> scope</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#2a2a35] text-[#e4b2b3] flex items-center justify-center text-xs font-bold shrink-0">4</span>
                        <span>Click "Generate token" and copy it immediately (you won't see it again)</span>
                      </li>
                    </ol>
                  </div>
                </section>
              </div>
            )}

            {/* Deployments Section */}
            {activeSection === 'deployments' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Deploy</h2>
                    <p className="text-gray-500 text-sm">Ship applications from GitHub to production</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Deploy web applications, APIs, and services directly from your GitHub repositories.
                    Zyotra handles the build process and deployment automatically.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: 'Web Service / Backend', desc: 'Node.js, Python, Go, Ruby, PHP', icon: '</>', color: 'blue' },
                      { title: 'UI Layer (Frontend)', desc: 'React, Vue, Angular, Svelte', icon: '🎨', color: 'purple' },
                      { title: 'Databases', desc: 'PostgreSQL, MySQL, MongoDB', icon: '🗄️', color: 'green' },
                      { title: 'Caching', desc: 'Redis, Memcached', icon: '⚡', color: 'orange' },
                    ].map((service, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-colors">
                        <span className="text-2xl mb-3 block">{service.icon}</span>
                        <h4 className="text-white font-medium mb-1">{service.title}</h4>
                        <p className="text-gray-500 text-sm">{service.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm">
                      <strong>⚠️ Important:</strong> For private repositories, ensure your VPS is authenticated with GitHub first.
                      Go to VPS Machines → Action Buttons → Authenticate GitHub.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* Backups Section */}
            {activeSection === 'backups' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Backups</h2>
                    <p className="text-gray-500 text-sm">Protect your data with automated backups</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Protect your data with one-click backups. Create manual backups anytime and restore them when needed.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-[#1a1a22] border border-[#2a2a35]">
                      <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Create Backup</h3>
                      <p className="text-gray-400 text-sm mb-4">Generate a complete backup of your database including all tables and data.</p>
                      <ul className="space-y-2 text-sm text-gray-500">
                        <li>• Full database dump</li>
                        <li>• Compressed format</li>
                        <li>• Download anytime</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-[#1a1a22] border border-[#2a2a35]">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Restore Backup</h3>
                      <p className="text-gray-400 text-sm mb-4">Restore your database from a previous backup point.</p>
                      <ul className="space-y-2 text-sm text-gray-500">
                        <li>• One-click restore</li>
                        <li>• Point-in-time recovery</li>
                        <li>• Safe rollback</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

          </main>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://portal.zyotra.com/register"
              className="px-6 py-3 rounded-lg bg-[#e4b2b3] text-[#1a1a22] font-medium hover:bg-[#d4a2a3] transition-colors"
            >
              Get Started for Free
            </a>
            <Link
              to="/blog"
              className="px-6 py-3 rounded-lg border border-[#2a2a35] text-gray-400 hover:text-white hover:border-[#e4b2b3]/50 transition-colors"
            >
              Read our Blog →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
