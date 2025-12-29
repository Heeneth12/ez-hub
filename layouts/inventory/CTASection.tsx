'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-12 bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Background Aurora Effect */}
      <div className="absolute inset-0 w-full h-full bg-[#050505]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-linear-to-t from-indigo-600/20 via-purple-900/10 to-transparent blur-[100px] pointer-events-none" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
           Ready to revolutionize <br />
           <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-white to-purple-300">
             your inventory?
           </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Start your 14-day free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="h-14 px-8 rounded-full bg-black/50 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Talk to Sales
          </button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}