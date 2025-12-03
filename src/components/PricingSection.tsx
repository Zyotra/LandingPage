const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$5',
      period: '/mo',
      description: 'Perfect for testing and small projects',
      buttonText: 'Get started',
      buttonStyle: 'bg-transparent border border-gray-600 hover:border-gray-400 text-white',
      featured: false,
      features: [
        '1 VPS Instance',
        '1 vCPU, 1GB RAM',
        '25GB SSD Storage',
        '1TB Bandwidth',
        'Basic Monitoring',
        'Email Support',
      ],
    },
    {
      name: 'Professional',
      price: '$25',
      period: '/mo',
      description: 'For growing applications and teams',
      buttonText: 'Get started',
      buttonStyle: 'bg-transparent border border-gray-600 hover:border-gray-400 text-white',
      featured: false,
      features: [
        '5 VPS Instances',
        'Up to 4 vCPU, 8GB RAM',
        '100GB SSD Storage',
        '5TB Bandwidth',
        'Advanced Monitoring',
        'Priority Support',
        'Auto Scaling',
      ],
    },
    {
      name: 'Team',
      price: '$99',
      period: '/mo',
      description: 'For teams that need more power',
      buttonText: 'Try 14 days free',
      buttonStyle: 'bg-[#f5a623] hover:bg-[#e09620] text-black',
      featured: true,
      features: [
        'Unlimited Instances',
        'Up to 16 vCPU, 64GB RAM',
        '500GB SSD Storage',
        'Unlimited Bandwidth',
        'Real-time Monitoring',
        '24/7 Priority Support',
        'Auto Scaling',
        'Load Balancing',
        'CI/CD Integration',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale deployments',
      buttonText: 'Contact us',
      buttonStyle: 'bg-transparent border border-gray-600 hover:border-gray-400 text-white',
      featured: false,
      features: [
        'Unlimited Everything',
        'Custom Resources',
        'Dedicated Support',
        'Custom SLA',
        'On-premise Options',
        'SOC 2 Compliance',
        'Custom Integrations',
        'Dedicated Account Manager',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#1a1a22] py-12 md:py-20 border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#e4b2b3] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Choose the plan that works best for your deployment needs. 
            All plans include free SSL certificates and DDoS protection.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Plan Cards */}
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`flex flex-col p-5 md:p-6 rounded-lg ${
                plan.featured 
                  ? 'border-2 border-[#f5a623]/50 bg-[#22222a] relative' 
                  : 'border border-gray-800/50 bg-[#22222a]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#f5a623] text-black text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-white text-lg md:text-xl font-medium mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              
              <a 
                href="#"
                className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-md text-xs md:text-sm font-medium transition text-center mb-6 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </a>
              
              <ul className="space-y-2 md:space-y-3 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compare Plans Link */}
        <div className="text-center mt-8 md:mt-12">
          <a href="#" className="text-[#e4b2b3] font-serif text-base md:text-lg hover:underline">
            Compare plan features →
          </a>
        </div>

        {/* Help Text */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-500 text-xs md:text-sm">
            Can't find your answer here? <a href="#" className="text-white underline hover:no-underline">Get in touch</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
