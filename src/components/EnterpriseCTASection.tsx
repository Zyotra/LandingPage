import { useEffect, useState, useRef } from 'react';
import { useContact } from '../context/ContactContext';

const EnterpriseCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openContact } = useContact();
  
  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
    setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Staggered feature reveal
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature(prev => {
          if (prev < 5) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const features = [
    { text: 'Unlimited users', description: 'Grow your team without limits', icon: 'users' },
    { text: 'Unlimited projects', description: 'Create as many projects as you need', icon: 'folder' },
    { text: 'Database UI', description: 'View tables, run queries visually', icon: 'chart' },
    { text: 'Dedicated support', description: '24/7 priority access to our experts', icon: 'support' },
    { text: 'Custom domains', description: 'Deploy with your own domain instantly', icon: 'settings' },
    { text: 'SLA Guarantee', description: '99.99% uptime commitment', icon: 'shield' },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#1a1a22] py-20 lg:py-32 relative overflow-hidden">
      {/* Background Grid Lines - Static */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        <div className="absolute left-[95%] top-0 bottom-0 w-px bg-[#2a2a35]/50"></div>
        
        {/* Horizontal scan line animation - CSS only */}
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4b2b3]/30 to-transparent"
          style={{ animation: 'scan-vertical 8s linear infinite' }}
        />
        
        {/* Ambient Glow - Static with CSS animation */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(228,178,179,0.06) 0%, transparent 70%)',
            animation: 'glow-breathe 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* CSS Animations - Optimized for GPU */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg) translateZ(0); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg) translateZ(0); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(360deg) translateX(45px) rotate(-360deg) translateZ(0); }
          to { transform: rotate(0deg) translateX(45px) rotate(0deg) translateZ(0); }
        }
        @keyframes dash-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -20; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scan-vertical {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes particle-orbit {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-orbit { animation: orbit 15s linear infinite; will-change: transform; }
        .animate-orbit-reverse { animation: orbit-reverse 12s linear infinite; will-change: transform; }
        .animate-dash-flow { animation: dash-flow 3s linear infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite; 
        }
        .gpu-accelerated { 
          transform: translateZ(0); 
          backface-visibility: hidden;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content - Optimized Network Visualization */}
          <div className={`flex-1 w-full max-w-md lg:max-w-lg relative transition-all duration-1000 gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            
            {/* SVG Animation Container */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <defs>
                  {/* Gradient for paths */}
                  <linearGradient id="enterpriseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e4b2b3" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f0c4c5" stopOpacity="0.8" />
                  </linearGradient>

                  {/* Ellipse paths for particles */}
                  <ellipse id="orbit1" cx="150" cy="150" rx="120" ry="80" fill="none" transform="rotate(-15 150 150)" />
                  <ellipse id="orbit2" cx="150" cy="150" rx="90" ry="55" fill="none" transform="rotate(20 150 150)" />
                </defs>

                {/* Outer orbital rings - Static dashed */}
                <ellipse 
                  cx="150" cy="150" rx="120" ry="80" 
                  fill="none" 
                  stroke="#e4b2b3" 
                  strokeWidth="1" 
                  strokeDasharray="4,6"
                  strokeOpacity="0.3"
                  className="animate-dash-flow"
                  transform="rotate(-15 150 150)"
                />
                <ellipse 
                  cx="150" cy="150" rx="90" ry="55" 
                  fill="none" 
                  stroke="#e4b2b3" 
                  strokeWidth="1" 
                  strokeDasharray="3,5"
                  strokeOpacity="0.25"
                  className="animate-dash-flow"
                  style={{ animationDirection: 'reverse' }}
                  transform="rotate(20 150 150)"
                />
                <ellipse 
                  cx="150" cy="150" rx="60" ry="35" 
                  fill="none" 
                  stroke="#e4b2b3" 
                  strokeWidth="1" 
                  strokeDasharray="2,4"
                  strokeOpacity="0.2"
                  transform="rotate(-5 150 150)"
                />

                {/* Connection lines to center - Static */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle - 15) * Math.PI / 180;
                  const x = 150 + 100 * Math.cos(rad);
                  const y = 150 + 65 * Math.sin(rad);
                  return (
                    <line 
                      key={`line-${i}`}
                      x1="150" y1="150" x2={x} y2={y}
                      stroke="#e4b2b3"
                      strokeWidth="1"
                      strokeOpacity={activeFeature >= i ? 0.3 : 0.1}
                      strokeDasharray="2,3"
                      style={{ transition: 'stroke-opacity 0.5s ease' }}
                    />
                  );
                })}

                {/* CSS-animated particles on orbit 1 */}
                <circle r="4" fill="#e4b2b3" opacity="0.7">
                  <animateMotion dur="8s" repeatCount="indefinite">
                    <mpath href="#orbit1" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#f0c4c5" opacity="0.5">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="2s">
                    <mpath href="#orbit1" />
                  </animateMotion>
                </circle>
                
                {/* CSS-animated particles on orbit 2 */}
                <circle r="3" fill="#e4b2b3" opacity="0.6">
                  <animateMotion dur="6s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                    <mpath href="#orbit2" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#f0c4c5" opacity="0.4">
                  <animateMotion dur="6s" repeatCount="indefinite" begin="1.5s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                    <mpath href="#orbit2" />
                  </animateMotion>
                </circle>

                {/* Central Node - Enterprise Hub */}
                <g>
                  {/* Pulsing ring - CSS animated */}
                  <circle 
                    cx="150" cy="150" r="35"
                    fill="none"
                    stroke="#e4b2b3"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                    style={{ animation: 'pulse-ring 3s ease-in-out infinite' }}
                  />
                  <circle 
                    cx="150" cy="150" r="28"
                    fill="#1a1a22"
                    stroke="url(#enterpriseGradient)"
                    strokeWidth="2"
                  />
                  {/* Server icon */}
                  <rect x="138" y="138" width="24" height="6" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                  <rect x="138" y="146" width="24" height="6" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                  <rect x="138" y="154" width="24" height="6" rx="1" fill="none" stroke="#e4b2b3" strokeWidth="1" />
                  <circle cx="142" cy="141" r="1" fill="#f0c4c5" />
                  <circle cx="142" cy="149" r="1" fill="#e4b2b3" />
                  <circle cx="142" cy="157" r="1" fill="#f0c4c5" />
                </g>

                {/* Satellite Nodes - Simplified */}
                {[
                  { angle: -15, icon: '▶' },
                  { angle: 45, icon: '⬡' },
                  { angle: 105, icon: '◉' },
                  { angle: 165, icon: '◈' },
                  { angle: 225, icon: '◫' },
                  { angle: 285, icon: '◎' },
                ].map((node, i) => {
                  const rad = node.angle * Math.PI / 180;
                  const x = 150 + 100 * Math.cos(rad);
                  const y = 150 + 65 * Math.sin(rad);
                  const isActive = activeFeature >= i;
                  
                  return (
                    <g key={`node-${i}`} style={{ 
                      opacity: isActive ? 1 : 0.3,
                      transition: 'opacity 0.5s ease'
                    }}>
                      <circle 
                        cx={x} cy={y} r="18"
                        fill="#1a1a22"
                        stroke={isActive ? '#e4b2b3' : '#3a3a45'}
                        strokeWidth="1.5"
                        style={{ transition: 'stroke 0.5s ease' }}
                      />
                      <text 
                        x={x} y={y + 1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isActive ? '#e4b2b3' : '#5a5a65'}
                        fontSize="10"
                        fontFamily="Inter, sans-serif"
                        style={{ transition: 'fill 0.5s ease' }}
                      >
                        {node.icon}
                      </text>
                    </g>
                  );
                })}

                {/* Decorative corner elements */}
                <path d="M 20 40 L 20 20 L 40 20" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 260 20 L 280 20 L 280 40" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 280 260 L 280 280 L 260 280" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 40 280 L 20 280 L 20 260" fill="none" stroke="#e4b2b3" strokeWidth="1" strokeOpacity="0.3" />
                  </svg>

              {/* Orbiting elements around the SVG - CSS only */}
              <div className="absolute inset-0 pointer-events-none gpu-accelerated">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit">
                    <div className="w-2 h-2 bg-[#e4b2b3] rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-orbit-reverse">
                    <div className="w-1.5 h-1.5 bg-[#f0c4c5] rounded-full"></div>
                  </div>
                </div>
                </div>
              </div>

            {/* CTA Content Below Animation */}
            <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5] animate-gradient-shift">deploy?</span>
              </h3>
              
              <p className="text-gray-400 text-base mb-8 max-w-sm mx-auto leading-relaxed">
                Join hundreds of fast-growing companies building the future on Zyotra.
              </p>

              <div className="flex flex-col items-center gap-5">
                <button 
                  onClick={openContact}
                  className="group relative px-8 py-4 overflow-hidden rounded-full transition-all duration-500"
                >
                  {/* Button background with animated gradient */}
                  <div className="absolute inset-0 border border-[#e4b2b3]/50 rounded-full group-hover:border-[#e4b2b3] transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e4b2b3]/0 via-[#e4b2b3]/10 to-[#e4b2b3]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
                  
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#e4b2b3]/20 rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700"></div>
                  </div>
                  
                  <span className="relative flex items-center gap-3 text-[#e4b2b3] font-medium text-lg">
                    Contact Sales
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="relative w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-[#e4b2b3] animate-ping opacity-75"></span>
                      <span className="relative block w-2 h-2 rounded-full bg-[#e4b2b3]"></span>
                    </span>
                    Response in 24h
                  </span>
                  <span className="w-px h-4 bg-gray-700"></span>
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enterprise Solutions */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
              <span className="relative inline-block">
                <span className="text-[#e4b2b3]">Enterprise-grade</span>
                {/* Underline animation */}
                <span 
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#e4b2b3] to-[#f0c4c5] transition-all duration-1000"
                  style={{ width: isVisible ? '100%' : '0%', transitionDelay: '800ms' }}
                />
              </span> <br />
              deployment solutions
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Empower your organization with a secure, scalable, and fully managed deployment infrastructure designed for high-growth startups and large enterprises.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start gap-4 transition-all duration-500 ${
                    activeFeature >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  {/* Animated indicator */}
                  <div className="mt-1 relative shrink-0">
                    {/* Outer ring with rotation on hover */}
                    <div className="w-6 h-6 rounded-full border border-[#e4b2b3]/30 flex items-center justify-center group-hover:border-[#e4b2b3] transition-all duration-500 group-hover:rotate-180">
                      {/* Inner dot with scale animation */}
                      <div className="w-2 h-2 rounded-full bg-[#e4b2b3] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#f0c4c5]"></div>
                    </div>
                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full border border-[#e4b2b3]/20 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <h4 className="text-white font-medium text-lg group-hover:text-[#e4b2b3] transition-colors duration-300">
                      {feature.text}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                    {/* Animated underline */}
                    <div className="h-px bg-gradient-to-r from-[#e4b2b3]/50 to-transparent w-0 group-hover:w-full transition-all duration-500 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner brackets */}
      <div className={`absolute top-8 left-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 border-t border-l border-[#e4b2b3]/20"></div>
      </div>
      <div className={`absolute top-8 right-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 border-t border-r border-[#e4b2b3]/20"></div>
      </div>
      <div className={`absolute bottom-8 left-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 border-b border-l border-[#e4b2b3]/20"></div>
      </div>
      <div className={`absolute bottom-8 right-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 border-b border-r border-[#e4b2b3]/20"></div>
      </div>
    </section>
  );
};

export default EnterpriseCTASection;
