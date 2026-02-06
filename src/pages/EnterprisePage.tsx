import { useContact } from '../context/ContactContext';

const EnterprisePage = () => {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24 pt-12">
          <div className="inline-block px-4 py-2 mb-6 border border-[#e4b2b3]/30 rounded-full bg-[#e4b2b3]/10 text-[#e4b2b3] text-sm font-medium tracking-wide">
            ENTERPRISE PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ship faster.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5]">Scale smarter.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The platform that transforms how startups survive and enterprises innovate.
            Deploy full-stack applications instantly, focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://portal.zyotra.com/register"
              className="px-8 py-4 rounded-md font-bold text-lg border border-[#3a3a45] hover:bg-[#2a2a35] transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: '⚡', label: 'Lightning Fast', sublabel: 'Deploy instantly, not hours' },
            { value: '🎯', label: 'Zero Friction', sublabel: 'No DevOps knowledge required' },
            { value: '🔒', label: 'Enterprise Ready', sublabel: 'Built for scale and reliability' },
            { value: '💡', label: 'Always Evolving', sublabel: 'Continuous improvements' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-[#1e1e26] border border-[#2a2a35]">
              <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* For Startups Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2a2a35] to-[#2a2a35]"></div>
            <div className="px-4 py-2 rounded-full bg-[#e4b2b3]/10 border border-[#e4b2b3]/20">
              <span className="text-[#e4b2b3] text-sm font-medium uppercase tracking-wider">For Startups</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#2a2a35] to-[#2a2a35]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your <span className="text-[#e4b2b3]">survival tool</span> for product-market fit
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Zyotra dramatically lowers the barrier to entry by removing the need for expensive,
                dedicated DevOps hires early on. Deploy full-stack applications instantly, focus on what matters.
              </p>
              <div className="space-y-4">
                {[
                  'Deploy Frontend, Backend, Database, and Redis in one click',
                  'No DevOps expertise required — focus on building, not configuring',
                  'Extend your runway significantly with zero infrastructure overhead',
                  'Ship MVPs faster than ever before',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4b2b3]/20 to-transparent blur-3xl rounded-3xl"></div>
              <div className="relative bg-[#1e1e26] rounded-2xl border border-[#2a2a35] p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-green-400 text-sm font-mono">Deploying...</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Frontend', status: 'done', icon: '✨' },
                      { label: 'Backend API', status: 'done', icon: '⚡' },
                      { label: 'PostgreSQL', status: 'done', icon: '🗄️' },
                      { label: 'Redis Cache', status: 'done', icon: '🔥' },
                    ].map((service, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${service.status === 'done' ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                          <span className="text-white font-medium">{service.label}</span>
                        </div>
                        <span className="text-xl">{service.icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-[#2a2a35]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Status</span>
                    <span className="text-[#e4b2b3] font-bold text-xl">✨ Ready</span>
                  </div>
                  <p className="text-gray-600 text-xs">Full-stack application deployed and ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem/Solution Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Problem</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Startups burn through runway wrestling with Docker configs, Kubernetes manifests,
                and infrastructure provisioning. Expensive DevOps hires drain resources,
                and deployment delays kill momentum.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Weeks spent on infrastructure setup</li>
                <li>• Expensive DevOps expertise required</li>
                <li>• Deployment failures derail launches</li>
                <li>• Configuration complexity slows iteration</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Solution</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Zyotra eliminates infrastructure friction entirely. Deploy your entire stack instantly.
                No DevOps knowledge required. Your team focuses 100% on product-market fit, not YAML files.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Deploy in seconds, not days</li>
                <li>• Zero DevOps overhead — focus on building</li>
                <li>• Visual database management — no SQL expertise needed</li>
                <li>• One-click deployments from GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* For Enterprises Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2a2a35] to-[#2a2a35]"></div>
            <div className="px-4 py-2 rounded-full bg-[#e4b2b3]/10 border border-[#e4b2b3]/20">
              <span className="text-[#e4b2b3] text-sm font-medium uppercase tracking-wider">For Enterprises</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#2a2a35] to-[#2a2a35]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e4b2b3]/20 to-transparent blur-3xl rounded-3xl"></div>
                <div className="relative bg-[#1e1e26] rounded-2xl border border-[#2a2a35] p-8">
                  <div className="mb-6">
                    <h3 className="text-white font-bold mb-4">Internal Developer Platform (IDP)</h3>
                    <div className="space-y-3">
                      {[
                        { team: 'Frontend Team', env: 'Production', status: 'Active', time: '2m ago' },
                        { team: 'Backend Team', env: 'Staging', status: 'Active', time: '5m ago' },
                        { team: 'QA Team', env: 'Test', status: 'Deploying', time: 'Just now' },
                        { team: 'Data Team', env: 'Analytics', status: 'Active', time: '1h ago' },
                      ].map((deployment, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#1a1a22] border border-[#2a2a35]">
                          <div>
                            <div className="text-white font-medium text-sm">{deployment.team}</div>
                            <div className="text-gray-500 text-xs">{deployment.env}</div>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${deployment.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                              {deployment.status}
                            </span>
                            <div className="text-gray-600 text-xs mt-1">{deployment.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-[#2a2a35]">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Self-Service Deployments</span>
                      <span className="text-[#e4b2b3] font-bold">✨ Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Eliminate <span className="text-[#e4b2b3]">deployment bottlenecks</span> forever
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Zyotra functions as your Internal Developer Platform (IDP), enabling self-service
                for engineering teams. No more waiting for infrastructure provisioning.
              </p>
              <div className="space-y-4">
                {[
                  'Self-service deployments — developers deploy without tickets',
                  'Consistent architecture across all teams automatically',
                  'Free senior DevOps engineers for complex SRE work',
                  'Spin up test environments instantly',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Problem/Solution Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Problem</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Large organizations suffer from "deployment bottlenecks" where developers wait
                for infrastructure provisioning. Senior DevOps engineers waste time on routine deployments
                instead of complex SRE tasks.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Long wait times for new environments</li>
                <li>• Inconsistent architecture across teams</li>
                <li>• Senior engineers doing routine work</li>
                <li>• Manual processes create security gaps</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Solution</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Zyotra standardizes deployments across your entire organization. Developers get
                self-service access. Your DevOps team focuses on reliability engineering, not
                provisioning tickets.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Deploy environments instantly</li>
                <li>• Standardized architecture enforced automatically</li>
                <li>• Free up engineers for strategic work</li>
                <li>• Security and compliance built-in by default</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How teams use <span className="text-[#e4b2b3]">Zyotra</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Rapid Prototyping',
                desc: 'Spin up proof-of-concepts instantly. Test ideas without infrastructure overhead.',
                icon: '⚡',
                metric: 'Lightning fast',
              },
              {
                title: 'Feature Branch Deployments',
                desc: 'Every PR gets its own environment automatically. Test in production-like conditions.',
                icon: '🌿',
                metric: 'Zero config',
              },
              {
                title: 'Database Management',
                desc: 'Visual interface for PostgreSQL. Run queries, manage backups, no SQL expertise needed.',
                icon: '🗄️',
                metric: '100% visual',
              },
              {
                title: 'Multi-Environment Workflows',
                desc: 'Dev, staging, and production environments with identical configurations.',
                icon: '🔄',
                metric: '1-click sync',
              },
              {
                title: 'Team Standardization',
                desc: 'Enforce best practices across all teams. No more configuration drift.',
                icon: '📐',
                metric: '100% consistent',
              },
              {
                title: 'Cost Optimization',
                desc: 'Right-size resources automatically. Pay only for what you use.',
                icon: '💰',
                metric: 'Smart savings',
              },
            ].map((useCase, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-colors">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-[#e4b2b3]/20 text-[#e4b2b3]">
                    {useCase.metric}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-[#1e1e26] to-[#22222a] rounded-2xl border border-[#2a2a35] p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The <span className="text-[#e4b2b3]">numbers</span> speak for themselves
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '⚡', label: 'Faster deployments', desc: 'Minutes vs. days' },
                { value: '💰', label: 'Cost efficient', desc: 'No DevOps hire needed' },
                { value: '🔒', label: 'Enterprise ready', desc: 'Built for reliability' },
                { value: '🚀', label: 'Always improving', desc: 'Continuous innovation' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl mb-2">{stat.value}</div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        {/* <div className="mb-24 text-center">
          <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
             <div className="text-2xl font-bold">FORTUNE 500</div>
             <div className="text-2xl font-bold">TECH GIANT</div>
             <div className="text-2xl font-bold">GLOBAL BANK</div>
             <div className="text-2xl font-bold">MEDIA CORP</div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#22222a] to-[#1a1a22] rounded-3xl p-12 border border-[#2a2a35] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform how your team ships?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Join teams that deploy faster and focus on building, not configuring.
            Our enterprise team is ready to help you get started.
          </p>
          <div className="flex flex-col items-center  sm:flex-row gap-4 justify-center">
            <button
              onClick={openContact}
              className="bg-[#e4b2b3] border border-[#e4b2b3] border-r-2 text-[#1a1a22] px-10 py-4 rounded-md font-bold hover:bg-[#dba0a1] transition"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;
