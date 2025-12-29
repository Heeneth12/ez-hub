'use client';
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: { monthly: "0", yearly: "0" },
    description: "Perfect for side projects and small experiments.",
    features: ["Up to 500 items", "Basic Analytics", "1 User Seat", "Community Support"],
    notIncluded: ["AI Forecasting", "API Access", "SSO"],
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: "49", yearly: "39" },
    description: "For scaling businesses that need automation.",
    features: ["Up to 10,000 items", "Advanced Analytics", "5 User Seats", "Priority Email Support", "AI Forecasting", "API Access"],
    notIncluded: ["SSO"],
    popular: true, // This triggers the glow effect
  },
  {
    name: "Enterprise",
    price: { monthly: "199", yearly: "159" },
    description: "Full control and security for large teams.",
    features: ["Unlimited items", "Custom Reporting", "Unlimited Seats", "24/7 Phone Support", "AI Forecasting", "API Access", "SSO & Audit Logs"],
    notIncluded: [],
    popular: false,
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden font-sans text-white">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header & Toggle */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            No hidden fees. Cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isYearly ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isYearly ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly
            </button>
          </div>
          {isYearly && (
            <span className="mt-4 text-xs font-semibold text-teal-400 tracking-wide uppercase animate-pulse">
              🎉 Saving 20% on annual billing
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-[#0a0a0a] border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.1)] scale-105 z-10' 
                  : 'bg-[#0a0a0a]/50 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-indigo-400' : 'text-gray-500'}`} />
                    {feat}
                  </div>
                ))}
                {plan.notIncluded.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <X className="w-5 h-5 opacity-50" />
                    {feat}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white text-black hover:scale-[1.02] shadow-lg' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}