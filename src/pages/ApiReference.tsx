const ApiReference = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Getting Started</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="text-[#e4b2b3]">Introduction</li>
                  <li className="hover:text-white cursor-pointer">Authentication</li>
                  <li className="hover:text-white cursor-pointer">Errors</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer">Deployments</li>
                  <li className="hover:text-white cursor-pointer">Domains</li>
                  <li className="hover:text-white cursor-pointer">Databases</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-12">
              <h1 className="text-4xl font-serif text-white mb-6">
                API <span className="text-[#e4b2b3]">Reference</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                The Zyotra API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-[#1e1e26] border border-[#2a2a35] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded bg-[#4fd1c5]/10 text-[#4fd1c5] text-xs font-mono font-bold">GET</span>
                  <code className="text-gray-300 font-mono text-sm">/v1/deployments</code>
                </div>
                <p className="text-gray-400 mb-6">
                  List all deployments under your account. You can filter by project, environment, or status.
                </p>
                <div className="bg-[#15151a] rounded-lg p-4 border border-[#2a2a35]">
                  <pre className="text-xs text-gray-400 font-mono overflow-x-auto">
{`{
  "deployments": [
    {
      "id": "dpl_8y7234...",
      "status": "READY",
      "url": "https://app-xyz.zyotra.app",
      "created_at": 1678234234
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;
