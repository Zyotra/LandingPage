
const SolutionsDevelopers = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium tracking-wider text-sm uppercase mb-4 block">For Developers</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Built by developers, <br/>for developers.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful APIs, CLI tools, and integrations that fit seamlessly into your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Code Snippet */}
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-gray-400 text-xs">deploy.sh</span>
            </div>
            <div className="p-6 text-gray-300 overflow-x-auto">
              <div className="mb-2"><span className="text-[#ff7b72]">import</span> zyotra <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@zyotra/sdk'</span>;</div>
              <div className="mb-2">&nbsp;</div>
              <div className="mb-2"><span className="text-[#ff7b72]">const</span> client = <span className="text-[#ff7b72]">new</span> zyotra.Client(process.env.API_KEY);</div>
              <div className="mb-2">&nbsp;</div>
              <div className="mb-2"><span className="text-[#8b949e]">// Deploy a new instance</span></div>
              <div className="mb-2"><span className="text-[#ff7b72]">const</span> instance = <span className="text-[#ff7b72]">await</span> client.instances.create({'{'}</div>
              <div className="mb-2">&nbsp;&nbsp;region: <span className="text-[#a5d6ff]">'us-east-1'</span>,</div>
              <div className="mb-2">&nbsp;&nbsp;image: <span className="text-[#a5d6ff]">'ubuntu-22.04'</span>,</div>
              <div className="mb-2">&nbsp;&nbsp;size: <span className="text-[#a5d6ff]">'s-2vcpu-4gb'</span></div>
              <div className="mb-2">{'}'});</div>
              <div className="mb-2">&nbsp;</div>
              <div>console.log(<span className="text-[#a5d6ff]">`Deployed at ${'{'}instance.ip_address{'}'}`</span>);</div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {[
              { title: "Comprehensive API", desc: "Control every aspect of your infrastructure programmatically." },
              { title: "Terraform Provider", desc: "Manage your infrastructure as code with our official provider." },
              { title: "CI/CD Integrations", desc: "Deploy automatically from GitHub Actions, GitLab CI, and more." }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
            <div>
              <button className="bg-white text-[#1a1a22] px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition">
                Read the Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDevelopers;
