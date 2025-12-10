
const LoadBalancing = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] text-white pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Global Load Balancing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Distribute traffic across multiple regions and instances. Ensure high availability and low latency for users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#22222a] p-8 rounded-xl border border-[#2a2a35]">
            <h3 className="text-2xl font-bold mb-4">Layer 4 Load Balancing</h3>
            <p className="text-gray-400 mb-6">
              High-performance TCP/UDP load balancing for non-HTTP applications. Ideal for gaming servers, databases, and real-time protocols.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Ultra-low latency</li>
              <li>• Protocol agnostic</li>
              <li>• Direct server return</li>
            </ul>
            <button className="text-[#e4b2b3] font-medium hover:underline">Learn more →</button>
          </div>
          <div className="bg-[#22222a] p-8 rounded-xl border border-[#2a2a35]">
            <h3 className="text-2xl font-bold mb-4">Layer 7 Load Balancing</h3>
            <p className="text-gray-400 mb-6">
              Advanced HTTP/HTTPS load balancing with content-based routing. Perfect for microservices, APIs, and web applications.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• SSL Termination</li>
              <li>• URL Rewriting</li>
              <li>• Header manipulation</li>
            </ul>
            <button className="text-[#e4b2b3] font-medium hover:underline">Learn more →</button>
          </div>
        </div>

        <div className="bg-[#1e1e24] rounded-2xl p-8 md:p-12 border border-[#2a2a35] text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to scale globally?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our load balancers are deployed in 25+ regions worldwide. Get started with a free trial today.
          </p>
          <button className="bg-[#e4b2b3] text-[#1a1a22] px-8 py-3 rounded-md font-bold hover:bg-[#dba0a1] transition">
            Create Load Balancer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadBalancing;
