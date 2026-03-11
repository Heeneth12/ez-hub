"use client";
import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: "0", yearly: "0" },
    description: "Perfect for small experiments.",
    features: ["Up to 500 items", "Basic Analytics", "1 User Seat"],
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: "4,999", yearly: "3,999" },
    description: "For scaling businesses.",
    features: ["Up to 10,000 items", "5 User Seats", "AI Forecasting", "API Access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "14,999", yearly: "11,999" },
    description: "Full control for large teams.",
    features: ["Unlimited items", "Unlimited Seats", "24/7 Support", "SSO & Audit Logs"],
    popular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER (Compact) --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          
          {/* Compact Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm font-medium ${!isYearly ? "text-[#002B5B]" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-gray-100 rounded-full p-1 transition-colors border border-gray-200"
            >
              <div className={`w-4 h-4 bg-[#FF3C1F] rounded-full transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isYearly ? "text-[#002B5B]" : "text-gray-400"}`}>Yearly</span>
              <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase">Save 20%</span>
            </div>
          </div>
        </div>

        {/* --- PRICING CARDS (Compact Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "border-[#FF3C1F] shadow-[0_20px_40px_rgba(255,60,31,0.08)] scale-105 z-10 bg-white" 
                  : "border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3C1F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#002B5B]">₹{isYearly ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{plan.description}</p>
              </div>

              <div className="h-px bg-gray-100 w-full mb-6" />

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-green-500 shrink-0" strokeWidth={3} />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-[#FF3C1F] text-white hover:bg-gray-900 shadow-lg shadow-red-100"
                    : "bg-white border border-gray-200 text-[#002B5B] hover:border-[#002B5B]"
                }`}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <p className="text-center text-gray-400 text-xs mt-12">
          All plans include 128-bit SSL encryption and automated daily backups. 
          <a href="#" className="text-[#FF3C1F] ml-1 font-semibold hover:underline">View full feature comparison</a>
        </p>
      </div>
    </section>
  );
}