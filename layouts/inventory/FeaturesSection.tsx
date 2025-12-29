'use client';
import React from 'react';
import { 
  Zap, 
  BarChart3, 
  RefreshCw, 
  Box, 
  ShieldCheck, 
  Users,
  ArrowUpRight
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Real-time Sync",
    description: "Updates across all sales channels in milliseconds. Never oversell again with instant inventory propagation.",
    gradient: "from-yellow-500/20 to-transparent"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    title: "AI Forecasting",
    description: "Our algorithms predict demand spikes before they happen, suggesting reorders based on seasonal trends.",
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-teal-400" />,
    title: "Auto-Reordering",
    description: "Set par levels and let the system automatically draft POs when stock runs low. Approval takes one click.",
    gradient: "from-teal-500/20 to-transparent"
  },
  {
    icon: <Box className="w-6 h-6 text-blue-400" />,
    title: "Multi-Warehouse",
    description: "Manage stock across multiple locations. Smart routing fulfills orders from the nearest hub to save shipping costs.",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Team Permissions",
    description: "Granular access controls. Give warehouse staff scan-only access while managers get full financial reporting.",
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Enterprise Audit",
    description: "Every action is logged. Track lost inventory, modifications, and user activity with an immutable audit trail.",
    gradient: "from-emerald-500/20 to-transparent"
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden font-sans text-white">
      
      {/* 1. Background Elements (Matching Hero) */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Side Glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
             <span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">Powerful Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
             Everything you need to <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">
               scale operations.
             </span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Replace your spreadsheet chaos with a unified operating system built for high-growth e-commerce brands.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {feature.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}