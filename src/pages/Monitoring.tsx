import { useState } from 'react';

const Monitoring = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'processes' | 'storage' | 'logs' | 'errors' | 'pm2'>('overview');

  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real-time <span className="text-[#e4b2b3]">Monitoring</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Complete visibility into your VPS infrastructure. Monitor CPU, memory, disk, processes, and logs in real-time.
          </p>
        </div>

        {/* VPS Card - Matching the actual interface */}
        <div className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] overflow-hidden mb-8">
          {/* Header */}
          <div className="p-6 border-b border-[#2a2a35] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#336791]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#336791]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Hostinger KVM 1</h2>
                <p className="text-gray-500 text-sm font-mono">31.97.62.215</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">RUNNING</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#2a2a35] flex gap-1 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'processes', label: 'Top Processes', icon: '⚡' },
              { id: 'storage', label: 'Storage', icon: '💾' },
              { id: 'logs', label: 'Real-time Logs', icon: '📝' },
              { id: 'errors', label: 'Error Logs', icon: '🚨' },
              { id: 'pm2', label: 'PM2 Logs', icon: '🔄' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#e4b2b3] text-[#e4b2b3]'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* CPU and OS Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* CPU Information */}
                  <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <span className="text-white font-medium">CPU Information</span>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">AMD EPYC 9354P 32-Core Processor</p>
                  </div>

                  {/* Operating System */}
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
                <div className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-white font-medium">Memory Usage</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">RAM</span>
                    <span className="text-gray-300">801.00 MB / 3.82 GB</span>
                  </div>
                  <div className="h-2 bg-[#1a1a22] rounded-full overflow-hidden mb-2">
                    <div className="h-full w-[20.5%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-500 text-xs mb-4">20.5% Used</p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded bg-[#1a1a22]">
                      <p className="text-gray-500 text-xs mb-1">Free</p>
                      <p className="text-white font-medium">857.00 MB</p>
                    </div>
                    <div className="p-3 rounded bg-[#1a1a22]">
                      <p className="text-gray-500 text-xs mb-1">Buff/Cache</p>
                      <p className="text-white font-medium">2.51 GB</p>
                    </div>
                    <div className="p-3 rounded bg-[#1a1a22]">
                      <p className="text-gray-500 text-xs mb-1">Available</p>
                      <p className="text-white font-medium">3.04 GB</p>
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
                  <div className="space-y-3">
                    {[
                      { filesystem: 'tmpfs', mount: '/run', used: '1.1M', total: '392M', available: '391M', percent: 1 },
                      { filesystem: '/dev/sda1', mount: '/', used: '1.0G', total: '40G', available: '39G', percent: 2.5 },
                    ].map((disk, i) => (
                      <div key={i} className="p-3 rounded bg-[#1a1a22]">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="text-white font-medium text-sm">{disk.filesystem}</p>
                            <p className="text-gray-500 text-xs">{disk.mount}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-300 text-sm">{disk.used} / {disk.total}</p>
                            <p className="text-gray-500 text-xs">{disk.available} available</p>
                          </div>
                        </div>
                        <div className="h-1.5 bg-[#2a2a35] rounded-full overflow-hidden">
                          <div className={`h-full w-[${disk.percent}%] bg-green-500 rounded-full`} style={{ width: `${disk.percent}%` }}></div>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">{disk.percent}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Top Processes Tab */}
            {activeTab === 'processes' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white font-bold">Top Processes</span>
                </div>
                <div className="overflow-x-auto rounded-lg border border-[#2a2a35]">
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
                        { pid: '477320', user: 'root', cpu: '25.0%', mem: '0.9%', status: 'D', command: 'check-n+' },
                        { pid: '1', user: 'root', cpu: '0.0%', mem: '0.4%', status: 'S', command: 'systemd' },
                        { pid: '2', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'S', command: 'kthreadd' },
                        { pid: '3', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'S', command: 'pool_wo+' },
                        { pid: '4', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                        { pid: '5', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                        { pid: '6', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                        { pid: '7', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                        { pid: '12', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'kworker+' },
                        { pid: '13', user: 'root', cpu: '0.0%', mem: '0.0%', status: 'I', command: 'rcu_tas+' },
                      ].map((process, i) => (
                        <tr key={i} className={`border-b border-[#2a2a35] ${i % 2 === 1 ? 'bg-[#22222a]' : ''}`}>
                          <td className="px-4 py-3 text-gray-300 font-mono">{process.pid}</td>
                          <td className="px-4 py-3 text-gray-400">{process.user}</td>
                          <td className={`px-4 py-3 font-mono ${parseFloat(process.cpu) > 0 ? 'text-yellow-400' : 'text-gray-400'}`}>
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
                <div className="mt-4 p-4 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                  <h4 className="text-white font-medium mb-3">Process Status Codes</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400">S</span>
                      <span className="text-gray-400">Sleeping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-orange-500/20 text-orange-400">D</span>
                      <span className="text-gray-400">Disk Sleep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-gray-500/20 text-gray-400">I</span>
                      <span className="text-gray-400">Idle</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Storage Tab */}
            {activeTab === 'storage' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <span className="text-white font-bold">Storage Usage</span>
                </div>
                <div className="space-y-3">
                  {[
                    { filesystem: '/dev/shm', usage: 1, used: '~2.0G', available: '2.0G available' },
                    { filesystem: 'tmpfs', mount: '/run/lock', usage: 0, used: '0 / 5.0M', available: '5.0M available' },
                    { filesystem: '/dev/sda16', mount: '/boot', usage: 15, used: '119M / 881M', available: '701M available' },
                    { filesystem: '/dev/sda15', mount: '/boot/efi', usage: 6, used: '6.2M / 105M', available: '99M available' },
                    { filesystem: 'tmpfs', mount: '/run/user/0', usage: 1, used: '12K / 392M', available: '392M available' },
                  ].map((disk, i) => (
                    <div key={i} className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-white font-medium text-sm">{disk.filesystem}</p>
                          {disk.mount && <p className="text-gray-500 text-xs">{disk.mount}</p>}
                        </div>
                        <div className="text-right">
                          <p className="text-gray-300 text-sm">{disk.used}</p>
                          <p className="text-gray-500 text-xs">{disk.available}</p>
                        </div>
                      </div>
                      <div className="h-1.5 bg-[#1a1a22] rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${disk.usage}%` }}></div>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{disk.usage}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real-time Logs Tab */}
            {activeTab === 'logs' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-white font-bold">Real-time System Logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-green-400 text-sm font-mono">LIVE</span>
                  </div>
                </div>
                <div className="bg-[#1a1a22] rounded-lg border border-[#2a2a35] p-4 h-96 overflow-y-auto font-mono text-sm">
                  <div className="space-y-1">
                    {[
                      { time: '14:32:15', level: 'INFO', message: 'System startup completed successfully' },
                      { time: '14:32:18', level: 'INFO', message: 'Network interface eth0 configured: 31.97.62.215' },
                      { time: '14:32:20', level: 'INFO', message: 'SSH service started on port 22' },
                      { time: '14:32:25', level: 'INFO', message: 'PostgreSQL database initialized' },
                      { time: '14:32:30', level: 'INFO', message: 'Deployment service ready: listening on port 8080' },
                      { time: '14:33:45', level: 'INFO', message: 'New deployment started: project-api from GitHub' },
                      { time: '14:34:12', level: 'INFO', message: 'Build process completed: 27s' },
                      { time: '14:34:15', level: 'INFO', message: 'Application deployed successfully at /var/www/api' },
                      { time: '14:35:20', level: 'INFO', message: 'Health check passed: all services running' },
                      { time: '14:36:10', level: 'INFO', message: 'Database backup created: backup_2025-12-27_14-36-10.sql' },
                      { time: '14:37:05', level: 'INFO', message: 'Memory usage normal: 20.5% (801MB / 3.82GB)' },
                      { time: '14:38:00', level: 'INFO', message: 'Scheduled task executed: cleanup temporary files' },
                    ].map((log, i) => (
                      <div key={i} className="flex gap-3 text-gray-400 hover:text-white transition-colors">
                        <span className="text-gray-600 font-mono text-xs shrink-0">{log.time}</span>
                        <span className={`font-medium shrink-0 ${
                          log.level === 'ERROR' ? 'text-red-400' :
                          log.level === 'WARN' ? 'text-yellow-400' :
                          'text-blue-400'
                        }`}>
                          [{log.level}]
                        </span>
                        <span className="text-gray-300">{log.message}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#2a2a35]">
                    <p className="text-gray-600 text-xs">Logs update in real-time. Scroll to see latest entries.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Logs Tab */}
            {activeTab === 'errors' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-white font-bold">Error Logs</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                    3 errors in last 24h
                  </span>
                </div>
                <div className="bg-[#1a1a22] rounded-lg border border-[#2a2a35] p-4 h-96 overflow-y-auto font-mono text-sm">
                  <div className="space-y-4">
                    {[
                      { 
                        time: '14:25:10', 
                        level: 'ERROR', 
                        service: 'deployment-service',
                        message: 'Failed to clone repository: authentication failed',
                        details: 'GitHub token expired. Please re-authenticate in VPS settings.'
                      },
                      { 
                        time: '13:15:42', 
                        level: 'WARN', 
                        service: 'database',
                        message: 'Connection pool exhausted: 50/50 connections in use',
                        details: 'Consider increasing max_connections or optimizing query performance.'
                      },
                      { 
                        time: '12:08:33', 
                        level: 'ERROR', 
                        service: 'nginx',
                        message: 'SSL certificate renewal failed for domain example.com',
                        details: 'Let\'s Encrypt rate limit reached. Retry in 1 hour.'
                      },
                    ].map((error, i) => (
                      <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gray-600 font-mono text-xs">{error.time}</span>
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-500/20 text-red-400">
                            {error.level}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#2a2a35] text-gray-400">
                            {error.service}
                          </span>
                        </div>
                        <p className="text-red-400 font-medium mb-2">{error.message}</p>
                        <p className="text-gray-500 text-xs">{error.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PM2 Logs Tab */}
            {activeTab === 'pm2' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-white font-bold">PM2 Process Manager Logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-green-400 text-sm font-mono">3 processes running</span>
                  </div>
                </div>
                
                {/* PM2 Process List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { name: 'api-server', status: 'online', uptime: '2d 5h', cpu: '12%', mem: '145MB' },
                    { name: 'worker-queue', status: 'online', uptime: '2d 5h', cpu: '3%', mem: '89MB' },
                    { name: 'scheduler', status: 'online', uptime: '1d 12h', cpu: '0.5%', mem: '45MB' },
                  ].map((proc, i) => (
                    <div key={i} className="p-4 rounded-lg bg-[#22222a] border border-[#2a2a35]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-medium">{proc.name}</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-400">
                          {proc.status}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Uptime:</span>
                          <span className="text-gray-300">{proc.uptime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">CPU:</span>
                          <span className="text-yellow-400">{proc.cpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Memory:</span>
                          <span className="text-blue-400">{proc.mem}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PM2 Logs */}
                <div className="bg-[#1a1a22] rounded-lg border border-[#2a2a35] p-4 h-96 overflow-y-auto font-mono text-sm">
                  <div className="space-y-1">
                    {[
                      { time: '14:40:15', process: 'api-server', level: 'INFO', message: 'Server started on port 3000' },
                      { time: '14:40:16', process: 'api-server', level: 'INFO', message: 'Database connection established' },
                      { time: '14:40:20', process: 'worker-queue', level: 'INFO', message: 'Processing job queue: 12 pending jobs' },
                      { time: '14:40:25', process: 'api-server', level: 'INFO', message: 'GET /api/health - 200 OK - 5ms' },
                      { time: '14:40:30', process: 'scheduler', level: 'INFO', message: 'Scheduled task executed: daily backup' },
                      { time: '14:40:35', process: 'worker-queue', level: 'INFO', message: 'Job completed: email-send-12345' },
                      { time: '14:40:40', process: 'api-server', level: 'INFO', message: 'POST /api/users - 201 Created - 12ms' },
                      { time: '14:40:45', process: 'api-server', level: 'WARN', message: 'Rate limit warning: 80% of quota used' },
                      { time: '14:40:50', process: 'worker-queue', level: 'INFO', message: 'Queue processed: 8/12 jobs completed' },
                      { time: '14:40:55', process: 'api-server', level: 'INFO', message: 'GET /api/users - 200 OK - 3ms' },
                    ].map((log, i) => (
                      <div key={i} className="flex gap-3 text-gray-400 hover:text-white transition-colors">
                        <span className="text-gray-600 font-mono text-xs shrink-0">{log.time}</span>
                        <span className="text-purple-400 font-medium shrink-0">[{log.process}]</span>
                        <span className={`font-medium shrink-0 ${
                          log.level === 'ERROR' ? 'text-red-400' :
                          log.level === 'WARN' ? 'text-yellow-400' :
                          'text-blue-400'
                        }`}>
                          {log.level}
                        </span>
                        <span className="text-gray-300">{log.message}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#2a2a35]">
                    <p className="text-gray-600 text-xs">PM2 logs stream in real-time. Filter by process name or log level.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: 'Real-time Updates',
              desc: 'All metrics update live. No page refresh needed. See changes as they happen.',
              icon: '⚡'
            },
            {
              title: 'Historical Data',
              desc: 'Track performance over time. View trends and identify patterns in resource usage.',
              icon: '📈'
            },
            {
              title: 'Alert System',
              desc: 'Get notified when thresholds are breached. Email, Slack, or webhook integrations.',
              icon: '🔔'
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-all">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
