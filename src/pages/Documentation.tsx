import { useState } from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'vps-monitoring', label: 'VPS Monitoring', icon: '🖥️' },
    { id: 'process-management', label: 'Process Management', icon: '⚡' },
    { id: 'deployments', label: 'Deployments', icon: '🚀' },
    { id: 'service-types', label: 'Service Types', icon: '📦' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a22] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            <span className="text-[#e4b2b3]">Documentation</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to deploy, monitor, and scale your applications on Zyotra.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <nav className="sticky top-28 space-y-1 p-4 bg-[#1e1e26] rounded-xl border border-[#2a2a35]">
              <p className="text-xs uppercase text-gray-500 font-semibold mb-3 px-3">Documentation</p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? 'bg-[#e4b2b3]/10 text-[#e4b2b3] border-l-2 border-[#e4b2b3]'
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2a35]'
                  }`}
                >
                  <span>{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Welcome to Zyotra</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Zyotra is an automated platform for deploying and managing VPS instances. Launch servers instantly, 
                    deploy applications from Git repositories, and scale with confidence using our intuitive dashboard.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'VPS Management', desc: 'Monitor CPU, memory, and disk usage in real-time', icon: '🖥️' },
                      { title: 'Git Deployments', desc: 'Deploy directly from your GitHub repositories', icon: '🚀' },
                      { title: 'Multiple Services', desc: 'Support for backend, frontend, databases & caching', icon: '📦' },
                      { title: 'Process Monitoring', desc: 'View and manage running processes on your servers', icon: '⚡' },
                    ].map((feature, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                        <span className="text-2xl mb-2 block">{feature.icon}</span>
                        <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Start Guide</h3>
                  <ol className="space-y-4">
                    {[
                      { step: 1, title: 'Add your VPS', desc: 'Connect your VPS machine using SSH credentials' },
                      { step: 2, title: 'Select service type', desc: 'Choose between Web Service, Frontend, Database, or Caching' },
                      { step: 3, title: 'Configure deployment', desc: 'Enter your Git repository URL and build settings' },
                      { step: 4, title: 'Deploy & Monitor', desc: 'Launch your application and monitor performance in real-time' },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-[#e4b2b3]/20 text-[#e4b2b3] flex items-center justify-center text-sm font-bold shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            )}

            {/* VPS Monitoring Section */}
            {activeSection === 'vps-monitoring' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">VPS Monitoring</h2>
                  <p className="text-gray-400 mb-6">
                    Monitor your VPS instances in real-time with comprehensive system metrics and performance data.
                  </p>

                  {/* Mock VPS Card */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] p-6 mb-6">
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#2a2a35]">
                      <div className="w-12 h-12 rounded-lg bg-[#2a2a35] flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Hostinger KVM 1</h3>
                        <p className="text-gray-500 text-sm font-mono">31.97.62.215</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* CPU Info */}
                      <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                          <span className="text-white font-medium">CPU Information</span>
                        </div>
                        <p className="text-gray-400 text-sm font-mono">AMD EPYC 9354P 32-Core Processor</p>
                      </div>

                      {/* OS Info */}
                      <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white font-medium">Operating System</span>
                        </div>
                        <p className="text-gray-400 text-sm font-mono">Ubuntu 24.04.3 LTS</p>
                      </div>
                    </div>

                    {/* Memory Usage */}
                    <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35] mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-white font-medium">Memory Usage</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">RAM</span>
                        <span className="text-gray-300">784.00 MB / 3.82 GB</span>
                      </div>
                      <div className="h-2 bg-[#1a1a22] rounded-full overflow-hidden mb-2">
                        <div className="h-full w-[20%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-500 text-xs">20.0% Used</p>
                      
                      <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="p-3 rounded bg-[#1a1a22]">
                          <p className="text-gray-500 text-xs mb-1">Free</p>
                          <p className="text-white font-medium">804.00 MB</p>
                        </div>
                        <div className="p-3 rounded bg-[#1a1a22]">
                          <p className="text-gray-500 text-xs mb-1">Buff/Cache</p>
                          <p className="text-white font-medium">2.58 GB</p>
                        </div>
                        <div className="p-3 rounded bg-[#1a1a22]">
                          <p className="text-gray-500 text-xs mb-1">Available</p>
                          <p className="text-white font-medium">3.06 GB</p>
                        </div>
                      </div>
                    </div>

                    {/* Disk Usage */}
                    <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        <span className="text-white font-medium">Disk Usage</span>
                      </div>
                      <div className="p-3 rounded bg-[#1a1a22]">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="text-white font-medium text-sm">tmpfs</p>
                            <p className="text-gray-500 text-xs">/run</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-300 text-sm">1.1M / 392M</p>
                            <p className="text-gray-500 text-xs">391M available</p>
                          </div>
                        </div>
                        <div className="h-1.5 bg-[#2a2a35] rounded-full overflow-hidden">
                          <div className="h-full w-[1%] bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">1%</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#e4b2b3]/10 border border-[#e4b2b3]/20 rounded-lg p-4">
                    <p className="text-[#e4b2b3] text-sm">
                      💡 <strong>Tip:</strong> Click on any VPS card in your dashboard to view detailed monitoring information including CPU, memory, disk usage, and running processes.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* Process Management Section */}
            {activeSection === 'process-management' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Process Management</h2>
                  <p className="text-gray-400 mb-6">
                    View and monitor all running processes on your VPS instances with detailed CPU and memory usage statistics.
                  </p>

                  {/* Mock Process Table */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden">
                    <div className="p-4 border-b border-[#2a2a35] flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white font-bold">Top Processes</span>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-500 text-xs uppercase border-b border-[#2a2a35]">
                            <th className="px-4 py-3">PID</th>
                            <th className="px-4 py-3">USER</th>
                            <th className="px-4 py-3">CPU%</th>
                            <th className="px-4 py-3">MEM%</th>
                            <th className="px-4 py-3">STATUS</th>
                            <th className="px-4 py-3">COMMAND</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {[
                            { pid: '477320', user: 'root', cpu: '25.0%', mem: '0.9%', status: 'D', command: 'check-n+', highlight: true },
                            { pid: '1', user: 'root', cpu: '0.0%', mem: '0.4%', status: 'S', command: 'systemd' },
                            { pid: '2', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'S', command: 'kthreadd' },
                            { pid: '3', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'S', command: 'pool_wo+' },
                            { pid: '4', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                            { pid: '5', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                          ].map((process, i) => (
                            <tr key={i} className={`border-b border-[#2a2a35] ${i % 2 === 1 ? 'bg-[#22222a]' : ''}`}>
                              <td className="px-4 py-3 text-gray-300 font-mono">{process.pid}</td>
                              <td className="px-4 py-3 text-gray-400">{process.user}</td>
                              <td className={`px-4 py-3 font-mono ${process.highlight ? 'text-yellow-400' : 'text-gray-400'}`}>
                                {process.cpu}
                              </td>
                              <td className="px-4 py-3 text-gray-400 font-mono">{process.mem}</td>
                              <td className="px-4 py-3">
                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                  process.status === 'D' ? 'bg-orange-500/20 text-orange-400' :
                                  process.status === 'S' ? 'bg-blue-500/20 text-blue-400' :
                                  'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {process.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-300 font-mono">{process.command}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                      <h4 className="text-white font-medium mb-2">Process Status Codes</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400">S</span>
                          <span className="text-gray-400">Sleeping</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-orange-500/20 text-orange-400">D</span>
                          <span className="text-gray-400">Disk Sleep</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-gray-500/20 text-gray-400">I</span>
                          <span className="text-gray-400">Idle</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                      <h4 className="text-white font-medium mb-2">CPU Usage</h4>
                      <p className="text-gray-400 text-sm">
                        Processes with high CPU usage are highlighted in yellow for easy identification.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                      <h4 className="text-white font-medium mb-2">Real-time Updates</h4>
                      <p className="text-gray-400 text-sm">
                        Process data refreshes automatically to show current system state.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Deployments Section */}
            {activeSection === 'deployments' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Creating a New Project</h2>
                  <p className="text-gray-400 mb-6">
                    Deploy applications directly from your Git repositories with automatic build and deployment pipelines.
                  </p>

                  {/* Mock Create Project Form */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Create New Project</h3>
                    <p className="text-gray-500 text-sm mb-6">Deploy a new project from your Git repository.</p>

                    <div className="space-y-6">
                      {/* Project Details Section */}
                      <div className="p-5 rounded-lg border border-[#2a2a35]">
                        <div className="flex items-center gap-2 mb-4">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-white font-medium">Project Details</span>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Project Type <span className="text-red-400">*</span>
                            </label>
                            <div className="w-full p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-gray-500 text-sm">
                              Select project type...
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-400 text-sm mb-2">Deployment ID / Name</label>
                            <div className="w-full p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-gray-300 text-sm font-mono">
                              dep_Ay4cel882Fr8qxTl
                            </div>
                          </div>

                          <div>
                            <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              Git Repository URL
                            </label>
                            <div className="w-full p-3 rounded-lg bg-[#22222a] border border-[#2a2a35] text-gray-500 text-sm">
                              https://github.com/username/repo
                            </div>
                          </div>

                          {/* Warning Box */}
                          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                            <p className="text-yellow-400 text-sm">
                              <strong>⚠️ Important:</strong> If you are deploying from a <strong>private GitHub repository</strong>, ensure the target VPS is authenticated with GitHub. 
                              Authenticate via <strong>VPS Machines → Action Buttons → Authenticate GitHub</strong> using your GitHub username and a classic personal access token.
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Project is inside a subdirectory</span>
                            <div className="w-12 h-6 rounded-full bg-[#2a2a35] relative">
                              <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-gray-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Build Settings Section */}
                      <div className="p-5 rounded-lg border border-[#2a2a35]">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-gray-400">⌘</span>
                          <span className="text-white font-medium">Build & Output Settings</span>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                            <div>
                              <p className="text-white font-medium text-sm">Before you deploy — run your database migrations</p>
                              <p className="text-gray-400 text-xs mt-1">
                                Apply any pending database migrations prior to deployment to avoid runtime schema errors.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Service Types Section */}
            {activeSection === 'service-types' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Service Types</h2>
                  <p className="text-gray-400 mb-6">
                    Choose the type of service you want to deploy. Zyotra supports multiple deployment types for different use cases.
                  </p>

                  {/* Service Type Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Web Service */}
                    <div className="p-6 rounded-xl bg-[#1a1a22] border-2 border-blue-500/50 hover:border-blue-500 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                        <span className="text-blue-400 text-xl">&lt;/&gt;</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">Web Service / Backend</h3>
                      <p className="text-gray-400 text-sm">
                        Deploy Node.js, Python, Go, or any backend application
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Node.js', 'Python', 'Go', 'Ruby', 'PHP'].map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded text-xs bg-blue-500/10 text-blue-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* UI Layer */}
                    <div className="p-6 rounded-xl bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-lg bg-[#2a2a35] flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">UI Layer (Frontend)</h3>
                      <p className="text-gray-400 text-sm">
                        Deploy HTML, CSS, JavaScript, or SPA applications
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['React', 'Vue', 'Angular', 'Svelte', 'Next.js'].map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded text-xs bg-[#2a2a35] text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div className="p-6 rounded-xl bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-lg bg-[#2a2a35] flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">Databases</h3>
                      <p className="text-gray-400 text-sm">
                        Deploy MySQL, PostgreSQL, MongoDB, or other databases
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'].map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded text-xs bg-[#2a2a35] text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Caching */}
                    <div className="p-6 rounded-xl bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-lg bg-[#2a2a35] flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">Caching</h3>
                      <p className="text-gray-400 text-sm">
                        Deploy Redis, Memcached, or other caching solutions
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Redis', 'Memcached', 'Varnish'].map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded text-xs bg-[#2a2a35] text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Dashboard Section */}
            {activeSection === 'dashboard' && (
              <div className="space-y-8">
                <section className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Dashboard Overview</h2>
                  <p className="text-gray-400 mb-6">
                    Your central hub for managing all VPS instances, projects, databases, and deployments.
                  </p>

                  {/* Mock Dashboard */}
                  <div className="bg-[#1a1a22] rounded-xl border border-[#2a2a35] overflow-hidden">
                    <div className="flex">
                      {/* Sidebar */}
                      <div className="w-56 bg-[#0f0f14] border-r border-[#2a2a35] p-4 hidden md:block">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-6 h-6 rounded bg-[#e4b2b3]/20"></div>
                          <span className="text-white font-bold">Zyotra</span>
                        </div>
                        
                        <nav className="space-y-1">
                          {[
                            { icon: '📊', label: 'Overview', active: false },
                            { icon: '🖥️', label: 'VPS Machines', active: false },
                            { icon: '📁', label: 'Projects', active: true },
                            { icon: '🗄️', label: 'Databases', active: false },
                            { icon: '💾', label: 'Cache Memory', active: false },
                            { icon: '🌐', label: 'Domains', active: false },
                            { icon: '🚀', label: 'Deployments', active: false },
                            { icon: '📈', label: 'Activity', active: false },
                            { icon: '💳', label: 'Billings', active: false },
                            { icon: '⚙️', label: 'Settings', active: false },
                          ].map((item, i) => (
                            <div 
                              key={i}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                                item.active 
                                  ? 'bg-[#1e1e26] text-white' 
                                  : 'text-gray-500 hover:text-gray-300'
                              }`}
                            >
                              <span>{item.icon}</span>
                              {item.label}
                              {item.active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#e4b2b3]"></span>}
                            </div>
                          ))}
                        </nav>

                        <div className="mt-8 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <p className="text-white text-sm font-medium">Upgrade to Pro</p>
                          <p className="text-gray-400 text-xs mt-1">Unlock advanced features and priority support</p>
                          <button className="mt-3 w-full py-2 rounded bg-purple-500 text-white text-xs font-medium">
                            Upgrade Now
                          </button>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex-1 relative">
                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                              type="text" 
                              placeholder="Search Projects..." 
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#22222a] border border-[#2a2a35] text-gray-300 text-sm placeholder:text-gray-600"
                            />
                          </div>
                        </div>

                        {/* Project Card */}
                        <div className="p-4 rounded-xl bg-[#22222a] border border-[#2a2a35]">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-[#2a2a35] flex items-center justify-center text-gray-400 font-mono text-sm">
                                ex
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-white font-bold">chess.ramkrishna.cloud</h3>
                                  <span className="flex items-center gap-1 text-green-400 text-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    Success
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                  imramkrishna/ChessOnline
                                </div>
                              </div>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </button>
                          </div>
                          
                          <div className="mt-4 p-3 rounded-lg bg-[#1a1a22]">
                            <p className="text-gray-400 text-sm font-mono">Web service deployed successfully.</p>
                          </div>
                          
                          <div className="mt-3 flex items-center gap-4 text-gray-500 text-xs">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                              </svg>
                              31.97.62.215
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#2a2a35] font-mono">dep_g1JLnhRrwDiVR40P</span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              1d ago
              </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Features */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'VPS Machines', desc: 'Manage and monitor all your connected VPS instances', icon: '🖥️' },
                      { title: 'Projects', desc: 'View and manage all deployed projects', icon: '📁' },
                      { title: 'Databases', desc: 'Manage MySQL, PostgreSQL, and MongoDB instances', icon: '🗄️' },
                      { title: 'Domains', desc: 'Configure custom domains and SSL certificates', icon: '🌐' },
                      { title: 'Deployments', desc: 'Track deployment history and rollbacks', icon: '🚀' },
                      { title: 'Activity', desc: 'Monitor all actions and events in your account', icon: '📈' },
                    ].map((feature, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-colors">
                        <span className="text-2xl mb-2 block">{feature.icon}</span>
                        <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
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
              href="https://zyotraportal.ramkrishna.cloud/register"
              className="px-6 py-3 rounded-lg bg-[#e4b2b3] text-[#1a1a22] font-medium hover:bg-[#d4a2a3] transition-colors"
            >
              Get Started for Free
            </a>
            <Link 
              to="/api"
              className="px-6 py-3 rounded-lg border border-[#2a2a35] text-gray-400 hover:text-white hover:border-[#e4b2b3]/50 transition-colors"
            >
              View API Reference →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
