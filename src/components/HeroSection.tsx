import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [arrowProgress, setArrowProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  // Animate arrows moving around the cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setArrowProgress(prev => {
        const next = prev + 0.5;
        if (next >= 100) {
          setActiveNode(n => (n + 1) % 3);
          return 0;
        }
        return next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#1a1a22] py-16 lg:py-24 relative overflow-hidden min-h-[90vh]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical lines */}
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        <div className="absolute left-[95%] top-0 bottom-0 w-px bg-[#2a2a35]"></div>
        
        {/* Horizontal lines */}
        <div className="absolute top-[15%] left-0 right-0 h-px bg-[#2a2a35]"></div>
        <div className="absolute top-[45%] left-0 right-0 h-px bg-[#2a2a35]"></div>
        <div className="absolute top-[75%] left-0 right-0 h-px bg-[#2a2a35]"></div>
        <div className="absolute top-[95%] left-0 right-0 h-px bg-[#2a2a35]"></div>
        
        {/* Decorative stars */}
        <div className="absolute top-[20%] right-[42%] text-[#4a4a55] text-xl">✦</div>
        <div className="absolute top-[50%] right-[38%] text-[#3a3a45] text-sm">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <h1 className="text-5xl lg:text-[4.5rem] leading-[1.1] mb-6" style={{ fontFamily: "Playfair Display", fontWeight: 400 }}>
              <span className="text-[#e4b2b3]">Deploy servers</span><br />
              <span className="text-[#e4b2b3]">in seconds</span>
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "PlayFair Display" }}>
              Zyotra is an automated platform for deploying VPS.
              Launch instances instantly, partner with automation to
              do better deployments, and scale with confidence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-8">
              {/* Get started button - dark with border and corner accents */}
              <div className="relative p-2">
                {/* Corner accents - outside the button */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#e4b2b3]"></span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e4b2b3]"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e4b2b3]"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#e4b2b3]"></span>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-4 bg-[#2a2a32] hover:bg-[#32323a] text-[#e4b2b3] px-6 py-4 transition-all duration-300 group border border-[#3a3a45] hover:border-[#e4b2b3]/50 hover:shadow-lg hover:shadow-[#e4b2b3]/10"
                >
                  <span className="w-10 h-8 flex items-center justify-center border border-[#e4b2b3]/50 rounded-full transition-all duration-300 group-hover:border-[#e4b2b3] group-hover:bg-[#e4b2b3]/10">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                  <span className="font-medium text-xl">Get started</span>
                </a>
              </div>
              
              {/* Request a demo button - dashed border */}
              <div className="relative p-2">
                {/* Corner accents - outside the button */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#e4b2b3]"></span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e4b2b3]"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e4b2b3]"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#e4b2b3]"></span>
                
                <a
                  href="#" 
                  className="inline-flex items-center justify-center text-[#e4b2b3] font-medium text-xl px-8 py-4 transition-all duration-300 border border-dashed border-[#e4b2b3]/60 hover:border-[#e4b2b3] hover:text-white hover:bg-[#e4b2b3]/10 hover:shadow-lg hover:shadow-[#e4b2b3]/10"
                >
                  Request a demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Animated Workflow Diagram */}
          <div className="relative h-[500px]">
            {/* SVG Animation Container */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                {/* Gradient for arrows */}
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e4b2b3" stopOpacity="0" />
                  <stop offset="50%" stopColor="#e4b2b3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e4b2b3" stopOpacity="0" />
                </linearGradient>
                
                {/* Glow filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Center Text */}
              <text x="200" y="195" textAnchor="middle" fill="#4a4a55" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="2">AUTOMATED</text>
              <text x="200" y="212" textAnchor="middle" fill="#4a4a55" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="2">DEPLOYMENT</text>

              {/* Curved Paths - Dotted connections between nodes */}
              {/* Path from Deploy (top) to Monitor (bottom-right) */}
              <path 
                d="M 260 100 Q 340 150, 320 280" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity="0.4"
              />
              <text x="340" y="180" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" transform="rotate(70, 340, 180)" letterSpacing="1">PROVISION SERVERS</text>
              
              {/* Path from Monitor (bottom-right) to Scale (bottom-left) */}
              <path 
                d="M 280 320 Q 200 380, 120 320" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity="0.4"
              />
              <text x="200" y="370" textAnchor="middle" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1">OPTIMIZE RESOURCES</text>
              
              {/* Path from Scale (bottom-left) to Deploy (top) */}
              <path 
                d="M 80 280 Q 60 150, 140 100" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity="0.4"
              />
              <text x="55" y="180" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" transform="rotate(-70, 55, 180)" letterSpacing="1">SCALE INSTANCES</text>

              {/* Animated Arrow 1 - Deploy to Monitor */}
              <g style={{ 
                transform: `translateX(${80 + arrowProgress * 0.6}px) translateY(${-20 + arrowProgress * 1.8}px)`,
                opacity: activeNode === 0 ? 1 : 0.3
              }}>
                <polygon points="0,-4 8,0 0,4" fill="#e4b2b3" filter="url(#glow)" transform="rotate(70)" />
              </g>

              {/* Animated Arrow 2 - Monitor to Scale */}
              <g style={{ 
                transform: `translateX(${280 - arrowProgress * 1.6}px) translateY(${280 + arrowProgress * 0.4}px)`,
                opacity: activeNode === 1 ? 1 : 0.3
              }}>
                <polygon points="0,-4 8,0 0,4" fill="#e4b2b3" filter="url(#glow)" transform="rotate(160)" />
              </g>

              {/* Animated Arrow 3 - Scale to Deploy */}
              <g style={{ 
                transform: `translateX(${80 + arrowProgress * 0.6}px) translateY(${280 - arrowProgress * 1.8}px)`,
                opacity: activeNode === 2 ? 1 : 0.3
              }}>
                <polygon points="0,-4 8,0 0,4" fill="#e4b2b3" filter="url(#glow)" transform="rotate(-50)" />
              </g>

              {/* Node 1 - Deploy (Top) */}
              <g className="cursor-pointer">
                {/* Outer dashed circle */}
                <circle cx="200" cy="70" r="50" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" />
                {/* Inner circle */}
                <circle cx="200" cy="70" r="35" fill="#1a1a22" stroke={activeNode === 0 ? "#e4b2b3" : "#3a3a45"} strokeWidth="1.5" />
                {/* Server Icon */}
                <rect x="180" y="55" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <rect x="180" y="67" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <rect x="180" y="79" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <circle cx="186" cy="59" r="1.5" fill="#e4b2b3" />
                <circle cx="186" cy="71" r="1.5" fill="#e4b2b3" />
                <circle cx="186" cy="83" r="1.5" fill="#e4b2b3" />
                {/* Dot indicator */}
                <circle cx="200" cy="125" r="4" fill="#e4b2b3" className={activeNode === 0 ? "animate-pulse" : ""} />
                {/* Label */}
                <text x="200" y="145" textAnchor="middle" fill="#5a5a65" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1"></text>
                {/* Menu icon */}
                <g transform="translate(200, 15)">
                  <rect x="-8" y="-4" width="16" height="2" rx="1" fill="#4a4a55" />
                  <rect x="-8" y="0" width="16" height="2" rx="1" fill="#4a4a55" />
                  <rect x="-8" y="4" width="16" height="2" rx="1" fill="#4a4a55" />
                </g>
              </g>

              {/* Node 2 - Monitor (Bottom Right) */}
              <g className="cursor-pointer">
                {/* Outer dashed circle */}
                <circle cx="320" cy="300" r="55" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" />
                {/* Inner dashed circle */}
                <circle cx="320" cy="300" r="40" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.3" />
                {/* Core circle */}
                <circle cx="320" cy="300" r="25" fill="#1a1a22" stroke={activeNode === 1 ? "#e4b2b3" : "#3a3a45"} strokeWidth="1.5" />
                {/* Checkmark Icon */}
                <path d="M 308 300 L 316 308 L 332 292" fill="none" stroke="#e4b2b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Dot indicator */}
                <circle cx="320" cy="245" r="4" fill="#e4b2b3" className={activeNode === 1 ? "animate-pulse" : ""} />
                {/* Label */}
                <text x="320" y="365" textAnchor="middle" fill="#5a5a65" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1" transform="rotate(0)">MONITOR HEALTH</text>
                {/* Icon top right */}
                <g transform="translate(360, 260)">
                  <rect x="-6" y="-6" width="12" height="12" rx="2" fill="none" stroke="#4a4a55" strokeWidth="1" />
                  <line x1="-3" y1="0" x2="3" y2="0" stroke="#4a4a55" strokeWidth="1" />
                </g>
              </g>

              {/* Node 3 - Scale (Bottom Left) */}
              <g className="cursor-pointer">
                {/* Outer dashed circle */}
                <circle cx="80" cy="300" r="50" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" />
                {/* Inner circle */}
                <circle cx="80" cy="300" r="35" fill="#1a1a22" stroke={activeNode === 2 ? "#e4b2b3" : "#3a3a45"} strokeWidth="1.5" />
                {/* Chat/Console Icon */}
                <rect x="55" y="285" width="50" height="30" rx="3" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <line x1="62" y1="295" x2="98" y2="295" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="3,2" />
                <line x1="62" y1="302" x2="85" y2="302" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="3,2" />
                <line x1="62" y1="309" x2="92" y2="309" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="3,2" />
                {/* Dot indicator */}
                <circle cx="80" cy="250" r="4" fill="#e4b2b3" className={activeNode === 2 ? "animate-pulse" : ""} />
                {/* Label */}
                <text x="80" y="365" textAnchor="middle" fill="#5a5a65" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1">AUTO SCALE</text>
                {/* Icon */}
                <g transform="translate(30, 265)">
                  <circle cx="0" cy="0" r="8" fill="none" stroke="#4a4a55" strokeWidth="1" />
                  <line x1="-4" y1="0" x2="4" y2="0" stroke="#4a4a55" strokeWidth="1" />
                </g>
              </g>

              {/* Decorative elements */}
              <circle cx="50" cy="100" r="2" fill="#3a3a45" />
              <circle cx="350" cy="150" r="2" fill="#3a3a45" />
              <circle cx="350" cy="380" r="1.5" fill="#3a3a45" />
              
              {/* Small arrows on paths */}
              <polygon points="280,150 285,145 285,155" fill="#e4b2b3" fillOpacity="0.6" />
              <polygon points="230,355 235,360 225,360" fill="#e4b2b3" fillOpacity="0.6" />
              <polygon points="105,200 100,195 100,205" fill="#e4b2b3" fillOpacity="0.6" />
            </svg>

            {/* Corner bracket decoration */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#3a3a45]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
