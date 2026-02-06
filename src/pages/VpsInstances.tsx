import { useContact } from '../context/ContactContext';

const VpsInstances = () => {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 mb-6 border border-[#e4b2b3]/30 rounded-full bg-[#e4b2b3]/10 text-[#e4b2b3] text-sm font-medium tracking-wide">
            BRING YOUR OWN INFRASTRUCTURE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect Your VPS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5]">Automate Everything.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Use any VPS from any provider. Connect it to Zyotra and transform it into a fully automated
            deployment platform. No vendor lock-in. Complete control. Zero configuration.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://portal.zyotra.com/register"
              className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition"
            >
              Connect Your VPS
            </a>
            <button
              onClick={openContact}
              className="border border-[#3a3a45] bg-[#2a2a35] text-white px-8 py-3 rounded-md font-medium hover:bg-[#222228] transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* How It Works */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How <span className="text-[#e4b2b3]">Zyotra</span> Works
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Bring your existing VPS from any provider. We automate everything else.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your VPS',
                desc: 'Add any Ubuntu VPS from DigitalOcean, AWS, Linode, Vultr, or any provider. Just provide SSH credentials.',
                icon: '🔗',
                highlight: 'Any Provider Works'
              },
              {
                step: '02',
                title: 'Automated Setup',
                desc: 'Zyotra automatically configures your server, installs dependencies, and sets up the deployment environment.',
                icon: '⚙️',
                highlight: 'Zero Manual Config'
              },
              {
                step: '03',
                title: 'Deploy Instantly',
                desc: 'Deploy full-stack applications, databases, and services with one click. Everything is automated.',
                icon: '🚀',
                highlight: 'One-Click Deploy'
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#1e1e26] rounded-xl border border-[#2a2a35] p-8 hover:border-[#e4b2b3]/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold text-[#e4b2b3]/20">{step.step}</span>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#e4b2b3]/10 text-[#e4b2b3] text-xs font-medium">
                      {step.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#2a2a35]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-[#2a2a35] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Transform Your VPS into a <span className="text-[#e4b2b3]">Powerhouse</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Your VPS, your control. Zyotra doesn't lock you into any provider. Connect any Ubuntu server
                and instantly get enterprise-grade deployment automation, database management, and monitoring.
              </p>
              <div className="space-y-4">
                {[
                  'Use VPS from any provider - DigitalOcean, AWS, Linode, Vultr, Hetzner, or your own',
                  'Complete control - your server, your data, your infrastructure',
                  'Zero vendor lock-in - disconnect anytime, keep your deployments',
                  'Automated everything - deployments, databases, monitoring, backups',
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
                  <h3 className="text-white font-bold mb-4">Supported VPS Providers</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['DigitalOcean', 'AWS EC2', 'Linode', 'Vultr', 'Hetzner', 'OVH', 'Contabo', 'Any Ubuntu VPS'].map((provider, i) => (
                      <div key={i} className="p-3 rounded-lg bg-[#1a1a22] border border-[#2a2a35] text-center">
                        <span className="text-gray-300 text-sm font-medium">{provider}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-[#2a2a35]">
                  <p className="text-gray-400 text-sm mb-2">Connection Requirements</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ubuntu 20.04+ or 22.04+
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      SSH access (password or key)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Root or sudo access
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You Get When You <span className="text-[#e4b2b3]">Connect Your VPS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Automated Deployments',
                desc: 'Deploy from GitHub in seconds. Full-stack applications, databases, and services - all automated.',
                icon: '🚀',
                metric: 'Instant deploy'
              },
              {
                title: 'Visual Database Management',
                desc: 'PostgreSQL with a visual interface. Browse tables, run queries, manage backups - no SQL knowledge needed.',
                icon: '🗄️',
                metric: '100% visual'
              },
              {
                title: 'Real-time Monitoring',
                desc: 'Track CPU, memory, disk usage, and running processes. All in one dashboard.',
                icon: '📊',
                metric: 'Live metrics'
              },
              {
                title: 'One-Click Services',
                desc: 'Deploy Redis, PostgreSQL, and other services instantly. Pre-configured and optimized.',
                icon: '⚡',
                metric: '1-click setup'
              },
              {
                title: 'Domain Management',
                desc: 'Configure custom domains with automatic SSL certificates. Point domains to any deployment.',
                icon: '🌐',
                metric: 'Auto SSL'
              },
              {
                title: 'Backup & Recovery',
                desc: 'One-click database backups. Restore to any point in time. Never lose your data.',
                icon: '💾',
                metric: 'Instant backups'
              },
              {
                title: 'Process Management',
                desc: 'View all running processes, their resource usage, and manage them visually.',
                icon: '⚙️',
                metric: 'Full control'
              },
              {
                title: 'GitHub Integration',
                desc: 'Deploy from public or private repositories. Automatic builds and deployments.',
                icon: '🔗',
                metric: 'Auto deploy'
              },
              {
                title: 'Multi-Project Support',
                desc: 'Deploy multiple projects on the same VPS. Isolated and secure.',
                icon: '📦',
                metric: 'Unlimited'
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-[#e4b2b3]/20 text-[#e4b2b3]">
                    {feature.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Old Way</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                You have a VPS, but deploying applications is a nightmare. SSH into servers, write deployment scripts,
                configure databases manually, set up monitoring, manage backups. What should be simple becomes complex.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Manual SSH connections and commands</li>
                <li>• Writing and maintaining deployment scripts</li>
                <li>• Database setup and configuration by hand</li>
                <li>• No visual tools - everything is command-line</li>
                <li>• Monitoring requires separate tools</li>
                <li>• Backups are manual and error-prone</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">The Zyotra Way</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Connect your VPS once. Deploy everything with clicks, not commands. Visual database management.
                Automatic monitoring. One-click backups. Your VPS becomes a fully automated deployment platform.
              </p>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Connect VPS in moments</li>
                <li>• Deploy from GitHub with one click</li>
                <li>• Visual database interface - no SQL needed</li>
                <li>• Built-in monitoring dashboard</li>
                <li>• One-click backups and recovery</li>
                <li>• Everything automated and visual</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perfect For <span className="text-[#e4b2b3]">Every Use Case</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Whether you're a solo developer or managing enterprise infrastructure, Zyotra transforms your VPS into a powerful platform.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Solo Developers',
                desc: 'Deploy side projects and MVPs without DevOps knowledge. Focus on code, not infrastructure.',
                icon: '👨‍💻',
                benefits: ['No DevOps skills needed', 'Deploy in minutes', 'Visual tools']
              },
              {
                title: 'Startups',
                desc: 'Extend your runway. Deploy full-stack applications without hiring expensive DevOps engineers.',
                icon: '🚀',
                benefits: ['Reduce infrastructure costs', 'Ship faster', 'Focus on product']
              },
              {
                title: 'Enterprises',
                desc: 'Standardize deployments across teams. Enable self-service for developers. Free up DevOps engineers.',
                icon: '🏢',
                benefits: ['Team standardization', 'Self-service', 'Reduce bottlenecks']
              },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{useCase.desc}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#e4b2b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#22222a] to-[#1a1a22] rounded-3xl p-12 border border-[#2a2a35] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your VPS?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Connect your VPS instantly. Start deploying immediately. No vendor lock-in.
            Complete control. Full automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://portal.zyotra.com/register"
              className="bg-[#e4b2b3] text-[#1a1a22] px-10 py-4 rounded-md font-bold hover:bg-[#dba0a1] transition"
            >
              Connect Your VPS Now
            </a>
            <button
              onClick={openContact}
              className="px-10 py-4 bg-[#2a2a35] rounded-md font-bold border border-[#3a3a45] hover:bg-[#222228] transition"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VpsInstances;
