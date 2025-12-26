import { useState, useEffect, useRef } from 'react';
import { useContact } from '../context/ContactContext';

const HeroSection = () => {
  const [arrowProgress, setArrowProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openContact } = useContact();

  // Rotating text for subtitle
  const rotatingTexts = [
    "Launch instances instantly",
    "Scale with confidence",
    "Deploy in seconds",
    "Automate everything"
  ];

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotate subtitle text
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section ref={sectionRef} className="w-full bg-[#1a1a22] pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12 relative overflow-hidden">
      
      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes dash-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -20; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes text-reveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(228,178,179,0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(228,178,179,0.8)); }
        }
        @keyframes node-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes ripple-out {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-twinkle-delay { animation: twinkle 2.5s ease-in-out infinite 0.5s; }
        .animate-twinkle-delay-2 { animation: twinkle 3s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-line { animation: pulse-line 3s ease-in-out infinite; }
        .animate-dash-flow { animation: dash-flow 2s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-node-breathe { animation: node-breathe 3s ease-in-out infinite; }
      `}</style>

      {/* Grid Pattern Background - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical lines with pulse effect */}
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a35] to-transparent animate-pulse-line"></div>
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a35] to-transparent hidden sm:block animate-pulse-line" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a35] to-transparent animate-pulse-line" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a35] to-transparent hidden sm:block animate-pulse-line" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute left-[95%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a35] to-transparent animate-pulse-line" style={{ animationDelay: '2s' }}></div>
        
        {/* Horizontal lines */}
        <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent"></div>
        <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent"></div>
        <div className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent"></div>
        <div className="absolute top-[95%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a35] to-transparent"></div>
        
        {/* Animated scan line */}
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4b2b3]/40 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite' }}
        ></div>

        {/* Ambient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(228,178,179,${0.08 + Math.sin(arrowProgress * 0.03) * 0.03}) 0%, 
              rgba(228,178,179,${0.04 + Math.cos(arrowProgress * 0.03) * 0.02}) 40%, 
              transparent 70%)`
          }}
        ></div>
        
        {/* Decorative stars - Animated */}
        <div className="absolute top-[20%] right-[42%] text-[#e4b2b3] text-xl hidden lg:block animate-twinkle">✦</div>
        <div className="absolute top-[50%] right-[38%] text-[#e4b2b3]/60 text-sm hidden lg:block animate-twinkle-delay">✦</div>
        <div className="absolute top-[30%] left-[15%] text-[#e4b2b3] text-xs hidden lg:block animate-twinkle-delay-2">✦</div>
        <div className="absolute top-[70%] left-[20%] text-[#e4b2b3]/80 text-lg hidden lg:block animate-twinkle">✦</div>
        <div className="absolute top-[85%] right-[25%] text-[#e4b2b3] text-sm hidden lg:block animate-twinkle-delay">✦</div>
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-4 left-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-8 h-8 border-t border-l border-[#e4b2b3]/30"></div>
      </div>
      <div className={`absolute top-4 right-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-8 h-8 border-t border-r border-[#e4b2b3]/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative text-center lg:text-left order-2 lg:order-1">
            {/* Main heading with staggered animation */}
            <h1 
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] mb-4 md:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontFamily: "Playfair Display", fontWeight: 400 }}
            >
              <span className="inline-block overflow-hidden">
                <span 
                  className="inline-block bg-gradient-to-r from-[#e4b2b3] via-[#f0c4c5] to-[#e4b2b3] bg-clip-text text-transparent animate-gradient-x"
                  style={{ transitionDelay: '200ms' }}
                >
                  Deploy servers
                </span>
              </span>
              <br />
              <span 
                className={`inline-block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="bg-gradient-to-r from-[#e4b2b3] via-[#f0c4c5] to-[#e4b2b3] bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
                  in seconds
                </span>
              </span>
            </h1>
            
            {/* Animated rotating text */}
            <div className={`relative h-[80px] sm:h-[100px] mb-6 sm:mb-8 md:mb-10 overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p 
                className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0" 
                style={{ fontFamily: "Playfair Display" }}
              >
                Zyotra is an automated platform for deploying VPS.
              </p>
              <div className="relative h-8 mt-2 overflow-hidden">
                {rotatingTexts.map((text, index) => (
                  <span
                    key={index}
                    className={`absolute left-0 lg:left-0 right-0 lg:right-auto text-[#e4b2b3] text-sm sm:text-base md:text-lg font-medium transition-all duration-500 ${
                      textIndex === index 
                        ? 'opacity-100 translate-y-0' 
                        : index === (textIndex - 1 + rotatingTexts.length) % rotatingTexts.length
                          ? 'opacity-0 -translate-y-8'
                          : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {text} <span className="inline-block w-0.5 h-4 bg-[#e4b2b3] animate-pulse ml-1"></span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons with enhanced animations */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Get started button */}
              <div className="relative p-1.5 sm:p-2 w-full sm:w-auto group">
                {/* Animated corner accents */}
                <span className="absolute top-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute top-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute bottom-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute bottom-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                
                <a 
                  href="https://zyotraportal.ramkrishna.cloud/register" 
                  className="relative inline-flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 md:gap-4 bg-[#2a2a32] hover:bg-[#32323a] text-[#e4b2b3] px-4 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 transition-all duration-300 border border-[#3a3a45] hover:border-[#e4b2b3]/50 hover:shadow-lg hover:shadow-[#e4b2b3]/10 overflow-hidden"
                >
                  {/* Ripple effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e4b2b3]/0 via-[#e4b2b3]/10 to-[#e4b2b3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></span>
                  
                  <span className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-8 flex items-center justify-center border border-[#e4b2b3]/50 rounded-full transition-all duration-300 group-hover:border-[#e4b2b3] group-hover:bg-[#e4b2b3]/10 group-hover:rotate-45">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                  <span className="relative font-medium text-base sm:text-lg md:text-xl group-hover:text-white transition-colors">Get started</span>
                </a>
              </div>
              
              {/* Request a demo button */}
              <div className="relative p-1.5 sm:p-2 w-full sm:w-auto group">
                <span className="absolute top-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute top-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute bottom-0 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-l border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                <span className="absolute bottom-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-r border-[#e4b2b3] transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                
                <button
                  onClick={openContact}
                  className="relative inline-flex items-center justify-center w-full sm:w-auto text-[#e4b2b3] font-medium text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 transition-all duration-300 border border-dashed border-[#e4b2b3]/60 hover:border-[#e4b2b3] hover:text-white hover:bg-[#e4b2b3]/10 hover:shadow-lg hover:shadow-[#e4b2b3]/10 overflow-hidden"
                >
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-[#e4b2b3]/5 rounded transition-transform duration-500 origin-center"></span>
                  <span className="relative">Request a demo</span>
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className={`flex items-center justify-center lg:justify-start gap-8 mt-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-gray-500">Uptime SLA</div>
              </div>
              <div className="w-px h-8 bg-[#3a3a45]"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">&lt;30s</div>
                <div className="text-xs text-gray-500">Deploy Time</div>
              </div>
              <div className="w-px h-8 bg-[#3a3a45]"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Animated Workflow Diagram */}
          <div className={`relative h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* SVG Animation Container */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                {/* Gradient for flowing effect */}
                <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e4b2b3" stopOpacity="0" />
                  <stop offset="40%" stopColor="#e4b2b3" stopOpacity="1" />
                  <stop offset="60%" stopColor="#e4b2b3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e4b2b3" stopOpacity="0" />
                </linearGradient>

                {/* Light rose gradient */}
                <linearGradient id="lightRoseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e4b2b3" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f0c4c5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e4b2b3" stopOpacity="0" />
                </linearGradient>

                {/* Combined gradient */}
                <linearGradient id="combinedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e4b2b3" />
                  <stop offset="50%" stopColor="#f0c4c5" />
                  <stop offset="100%" stopColor="#e4b2b3" />
                </linearGradient>
                
                {/* Soft glow filter */}
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Stronger glow for active elements */}
                <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="6" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Subtle glow for dots */}
                <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Node glow */}
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background circles - decorative */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#2a2a35" strokeWidth="1" strokeDasharray="2,8" strokeOpacity="0.3" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#2a2a35" strokeWidth="1" strokeDasharray="4,6" strokeOpacity="0.2" />

              {/* Visible curved paths with animation */}
              <path 
                d="M 240 110 Q 330 160, 310 260" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity={activeNode === 0 ? "0.6" : "0.2"}
                className="animate-dash-flow"
                style={{ transition: 'stroke-opacity 0.5s ease' }}
              />
              <path 
                d="M 290 330 Q 200 380, 110 330" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity={activeNode === 1 ? "0.6" : "0.2"}
                className="animate-dash-flow"
                style={{ transition: 'stroke-opacity 0.5s ease' }}
              />
              <path 
                d="M 90 260 Q 70 160, 160 110" 
                fill="none" 
                stroke="#e4b2b3" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                strokeOpacity={activeNode === 2 ? "0.6" : "0.2"}
                className="animate-dash-flow"
                style={{ transition: 'stroke-opacity 0.5s ease' }}
              />

              {/* Center Text with glow */}
              <g filter="url(#softGlow)">
                <text x="200" y="190" textAnchor="middle" fill="#5a5a65" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="3">AUTOMATED</text>
                <text x="200" y="207" textAnchor="middle" fill="#5a5a65" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="3">DEPLOYMENT</text>
              </g>

              {/* Animated center ring */}
              <circle 
                cx="200" cy="200" r="50" 
                fill="none" 
                stroke="url(#combinedGradient)" 
                strokeWidth="1"
                strokeDasharray="8,4"
                strokeOpacity={0.3 + Math.sin(arrowProgress * 0.05) * 0.2}
                style={{ transformOrigin: '200px 200px', animation: 'dash-flow 4s linear infinite reverse' }}
              />

              {/* Path labels */}
              <text x="340" y="180" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" transform="rotate(70, 340, 180)" letterSpacing="1">PROVISION SERVERS</text>
              <text x="200" y="370" textAnchor="middle" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1">OPTIMIZE RESOURCES</text>
              <text x="55" y="180" fill="#4a4a55" fontSize="9" fontFamily="Inter, sans-serif" transform="rotate(-70, 55, 180)" letterSpacing="1">SCALE INSTANCES</text>

              {/* Animated Flowing Dots - Path 1: Deploy to Monitor */}
              {[0, 15, 30, 45, 60, 75].map((offset, i) => {
                const progress = (arrowProgress + offset) % 100;
                const t = progress / 100;
                const x = (1-t)*(1-t)*240 + 2*(1-t)*t*330 + t*t*310;
                const y = (1-t)*(1-t)*110 + 2*(1-t)*t*160 + t*t*260;
                const opacity = Math.sin(t * Math.PI) * (activeNode === 0 ? 1 : 0.4);
                const shade = i % 2 === 0 ? '#e4b2b3' : '#f0c4c5';
                return (
                  <circle
                    key={`dot1-${i}`}
                    cx={x}
                    cy={y}
                    r={4 - i * 0.4}
                    fill={shade}
                    filter="url(#dotGlow)"
                    style={{ opacity, transition: 'opacity 0.3s ease' }}
                  />
                );
              })}

              {/* Animated Flowing Dots - Path 2: Monitor to Scale */}
              {[0, 15, 30, 45, 60, 75].map((offset, i) => {
                const progress = (arrowProgress + offset) % 100;
                const t = progress / 100;
                const x = (1-t)*(1-t)*290 + 2*(1-t)*t*200 + t*t*110;
                const y = (1-t)*(1-t)*330 + 2*(1-t)*t*380 + t*t*330;
                const opacity = Math.sin(t * Math.PI) * (activeNode === 1 ? 1 : 0.4);
                const shade = i % 2 === 0 ? '#e4b2b3' : '#f0c4c5';
                return (
                  <circle
                    key={`dot2-${i}`}
                    cx={x}
                    cy={y}
                    r={4 - i * 0.4}
                    fill={shade}
                    filter="url(#dotGlow)"
                    style={{ opacity, transition: 'opacity 0.3s ease' }}
                  />
                );
              })}

              {/* Animated Flowing Dots - Path 3: Scale to Deploy */}
              {[0, 15, 30, 45, 60, 75].map((offset, i) => {
                const progress = (arrowProgress + offset) % 100;
                const t = progress / 100;
                const x = (1-t)*(1-t)*90 + 2*(1-t)*t*70 + t*t*160;
                const y = (1-t)*(1-t)*260 + 2*(1-t)*t*160 + t*t*110;
                const opacity = Math.sin(t * Math.PI) * (activeNode === 2 ? 1 : 0.4);
                const shade = i % 2 === 0 ? '#e4b2b3' : '#f0c4c5';
                return (
                  <circle
                    key={`dot3-${i}`}
                    cx={x}
                    cy={y}
                    r={4 - i * 0.4}
                    fill={shade}
                    filter="url(#dotGlow)"
                    style={{ opacity, transition: 'opacity 0.3s ease' }}
                  />
                );
              })}

              {/* Node 1 - Deploy (Top) - Enhanced */}
              <g className="cursor-pointer" style={{ transform: activeNode === 0 ? 'scale(1.05)' : 'scale(1)', transformOrigin: '200px 70px', transition: 'transform 0.5s ease' }}>
                {/* Pulse ring when active */}
                {activeNode === 0 && (
                  <>
                    <circle cx="200" cy="70" r="55" fill="none" stroke="#e4b2b3" strokeWidth="2" strokeOpacity="0.3">
                      <animate attributeName="r" values="45;65;45" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}
                {/* Outer dashed circle */}
                <circle cx="200" cy="70" r="50" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" className="animate-dash-flow" />
                {/* Glow behind when active */}
                {activeNode === 0 && (
                  <circle cx="200" cy="70" r="38" fill="#e4b2b3" fillOpacity="0.1" filter="url(#nodeGlow)" />
                )}
                {/* Inner circle */}
                <circle cx="200" cy="70" r="35" fill="#1a1a22" stroke={activeNode === 0 ? "#e4b2b3" : "#3a3a45"} strokeWidth={activeNode === 0 ? "2" : "1.5"} style={{ transition: 'stroke 0.3s ease, stroke-width 0.3s ease' }} />
                {/* Server Icon */}
                <rect x="180" y="55" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <rect x="180" y="67" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <rect x="180" y="79" width="40" height="8" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <circle cx="186" cy="59" r="1.5" fill={activeNode === 0 ? "#f0c4c5" : "#e4b2b3"} style={{ transition: 'fill 0.3s ease' }}>
                  {activeNode === 0 && <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />}
                </circle>
                <circle cx="186" cy="71" r="1.5" fill="#e4b2b3" />
                <circle cx="186" cy="83" r="1.5" fill={activeNode === 0 ? "#f0c4c5" : "#e4b2b3"} style={{ transition: 'fill 0.3s ease' }} />
                {/* Dot indicator */}
                <circle cx="200" cy="125" r="4" fill="#e4b2b3" filter={activeNode === 0 ? "url(#dotGlow)" : "none"} />
                {/* Label */}
                <text x="200" y="145" textAnchor="middle" fill={activeNode === 0 ? "#e4b2b3" : "#5a5a65"} fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1" style={{ transition: 'fill 0.3s ease' }}>DEPLOY</text>
              </g>

              {/* Node 2 - Monitor (Bottom Right) - Enhanced */}
              <g className="cursor-pointer" style={{ transform: activeNode === 1 ? 'scale(1.05)' : 'scale(1)', transformOrigin: '320px 300px', transition: 'transform 0.5s ease' }}>
                {/* Pulse ring when active */}
                {activeNode === 1 && (
                  <circle cx="320" cy="300" r="60" fill="none" stroke="#e4b2b3" strokeWidth="2" strokeOpacity="0.3">
                    <animate attributeName="r" values="50;70;50" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Outer dashed circle */}
                <circle cx="320" cy="300" r="55" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" className="animate-dash-flow" style={{ animationDirection: 'reverse' }} />
                {/* Inner dashed circle */}
                <circle cx="320" cy="300" r="40" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.3" />
                {/* Glow behind when active */}
                {activeNode === 1 && (
                  <circle cx="320" cy="300" r="28" fill="#e4b2b3" fillOpacity="0.1" filter="url(#nodeGlow)" />
                )}
                {/* Core circle */}
                <circle cx="320" cy="300" r="25" fill="#1a1a22" stroke={activeNode === 1 ? "#e4b2b3" : "#3a3a45"} strokeWidth={activeNode === 1 ? "2" : "1.5"} style={{ transition: 'stroke 0.3s ease' }} />
                {/* Checkmark Icon - Animated */}
                <path 
                  d="M 308 300 L 316 308 L 332 292" 
                  fill="none" 
                  stroke={activeNode === 1 ? "#f0c4c5" : "#e4b2b3"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ transition: 'stroke 0.3s ease' }}
                />
                {/* Dot indicator */}
                <circle cx="320" cy="245" r="4" fill="#e4b2b3" filter={activeNode === 1 ? "url(#dotGlow)" : "none"} />
                {/* Label */}
                <text x="320" y="365" textAnchor="middle" fill={activeNode === 1 ? "#e4b2b3" : "#5a5a65"} fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1" style={{ transition: 'fill 0.3s ease' }}>MONITOR HEALTH</text>
                {/* Icon top right */}
                <g transform="translate(360, 260)" opacity={activeNode === 1 ? "1" : "0.5"} style={{ transition: 'opacity 0.3s ease' }}>
                  <rect x="-6" y="-6" width="12" height="12" rx="2" fill="none" stroke="#4a4a55" strokeWidth="1" />
                  <line x1="-3" y1="0" x2="3" y2="0" stroke="#4a4a55" strokeWidth="1" />
                </g>
              </g>

              {/* Node 3 - Scale (Bottom Left) - Enhanced */}
              <g className="cursor-pointer" style={{ transform: activeNode === 2 ? 'scale(1.05)' : 'scale(1)', transformOrigin: '80px 300px', transition: 'transform 0.5s ease' }}>
                {/* Pulse ring when active */}
                {activeNode === 2 && (
                  <circle cx="80" cy="300" r="55" fill="none" stroke="#e4b2b3" strokeWidth="2" strokeOpacity="0.3">
                    <animate attributeName="r" values="45;65;45" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Outer dashed circle */}
                <circle cx="80" cy="300" r="50" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.5" className="animate-dash-flow" />
                {/* Glow behind when active */}
                {activeNode === 2 && (
                  <circle cx="80" cy="300" r="38" fill="#e4b2b3" fillOpacity="0.1" filter="url(#nodeGlow)" />
                )}
                {/* Inner circle */}
                <circle cx="80" cy="300" r="35" fill="#1a1a22" stroke={activeNode === 2 ? "#e4b2b3" : "#3a3a45"} strokeWidth={activeNode === 2 ? "2" : "1.5"} style={{ transition: 'stroke 0.3s ease' }} />
                {/* Console Icon - Animated lines */}
                <rect x="55" y="285" width="50" height="30" rx="3" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                <line x1="62" y1="295" x2="98" y2="295" stroke={activeNode === 2 ? "#f0c4c5" : "#e4b2b3"} strokeWidth="1" strokeDasharray="3,2" style={{ transition: 'stroke 0.3s ease' }}>
                  {activeNode === 2 && <animate attributeName="x2" values="62;98;62" dur="2s" repeatCount="indefinite" />}
                </line>
                <line x1="62" y1="302" x2="85" y2="302" stroke="#e4b2b3" strokeWidth="1" strokeDasharray="3,2" />
                <line x1="62" y1="309" x2="92" y2="309" stroke={activeNode === 2 ? "#f0c4c5" : "#e4b2b3"} strokeWidth="1" strokeDasharray="3,2" style={{ transition: 'stroke 0.3s ease' }} />
                {/* Dot indicator */}
                <circle cx="80" cy="250" r="4" fill="#e4b2b3" filter={activeNode === 2 ? "url(#dotGlow)" : "none"} />
                {/* Label */}
                <text x="80" y="365" textAnchor="middle" fill={activeNode === 2 ? "#e4b2b3" : "#5a5a65"} fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1" style={{ transition: 'fill 0.3s ease' }}>AUTO SCALE</text>
                {/* Icon */}
                <g transform="translate(30, 265)" opacity={activeNode === 2 ? "1" : "0.5"} style={{ transition: 'opacity 0.3s ease' }}>
                  <circle cx="0" cy="0" r="8" fill="none" stroke="#4a4a55" strokeWidth="1" />
                  <line x1="-4" y1="0" x2="4" y2="0" stroke="#4a4a55" strokeWidth="1" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#4a4a55" strokeWidth="1" />
                </g>
              </g>

              {/* Decorative elements - Enhanced */}
              <circle cx="50" cy="100" r="2" fill="#e4b2b3" fillOpacity="0.5" className="animate-twinkle" />
              <circle cx="350" cy="150" r="2" fill="#e4b2b3" fillOpacity="0.4" className="animate-twinkle-delay" />
              <circle cx="350" cy="380" r="1.5" fill="#e4b2b3" fillOpacity="0.5" className="animate-twinkle-delay-2" />
              <circle cx="50" cy="380" r="2" fill="#e4b2b3" fillOpacity="0.4" className="animate-twinkle" />
              
              {/* Small arrows on paths - Enhanced with glow */}
              <polygon points="280,150 285,145 285,155" fill="#e4b2b3" fillOpacity={activeNode === 0 ? "0.8" : "0.4"} filter={activeNode === 0 ? "url(#dotGlow)" : "none"} style={{ transition: 'fill-opacity 0.3s ease' }} />
              <polygon points="230,355 235,360 225,360" fill="#e4b2b3" fillOpacity={activeNode === 1 ? "0.8" : "0.4"} filter={activeNode === 1 ? "url(#dotGlow)" : "none"} style={{ transition: 'fill-opacity 0.3s ease' }} />
              <polygon points="105,200 100,195 100,205" fill="#e4b2b3" fillOpacity={activeNode === 2 ? "0.8" : "0.4"} filter={activeNode === 2 ? "url(#dotGlow)" : "none"} style={{ transition: 'fill-opacity 0.3s ease' }} />

              {/* Corner brackets in SVG */}
              <path d="M 20 40 L 20 20 L 40 20" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M 360 20 L 380 20 L 380 40" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M 380 360 L 380 380 L 360 380" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M 40 380 L 20 380 L 20 360" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
            </svg>

            {/* Corner bracket decoration */}
            <div className={`absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#3a3a45] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#3a3a45] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
