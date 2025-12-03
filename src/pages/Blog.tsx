const Blog = () => {
  return (
    <div className="min-h-screen bg-[#1a1a22] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Latest <span className="text-[#e4b2b3]">Updates</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            News, insights, and engineering stories from the Zyotra team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <article key={item} className="flex flex-col bg-[#1e1e26] border border-[#2a2a35] rounded-2xl overflow-hidden hover:border-[#e4b2b3]/30 transition-colors duration-300">
              <div className="h-48 bg-[#2a2a32] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e4b2b3]/10 to-[#4fd1c5]/10 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-[#e4b2b3] mb-4">
                  <span>Engineering</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span>Dec 3, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scaling Infrastructure for High-Growth Startups</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  Learn how we architected our platform to handle millions of requests with sub-millisecond latency.
                </p>
                <span className="text-white text-sm font-medium hover:text-[#e4b2b3] transition-colors cursor-pointer">
                  Read article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
