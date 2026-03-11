"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Warehouse,
  ScanBarcode,
  Puzzle,
  MapPin,
  FileBarChart,
} from "lucide-react";

export default function FeaturesSectionSilver() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-32">
        <FeatureCard
          title="An AI IDE Core"
          description="exactly.ai's Editor view offers tab autocompletion, natural language code commands, and a configurable, context-aware agent built for brand consistency at every keystroke."
          visual={<Feature1Visual />}
        />
        <FeatureCard
          title="Higher-level Abstractions"
          description="A more intuitive task-based approach to monitoring agent activity, presenting you with essential artifacts and verification results to build trust."
          visual={<Feature2Visual />}
          reversed
        />
      </div>
    </section>
  );
}


interface FeatureCardProps {
  title: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean;
}

// ─── FEATURE CARD (reusable) ──────────────────────────────────────────────────
const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  visual, 
  reversed = false 
}) => (
  <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${reversed ? "lg:flex-row-reverse" : ""}`}>
    <motion.div
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 space-y-4"
    >
      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h3>
      <p className="text-[#666666] text-base md:text-lg leading-relaxed max-w-md">{description}</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 w-full"
    >
      {visual}
    </motion.div>
  </div>
);

// FEATURE 1 VISUAL
const Feature1Visual = () => (
  <div className="bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative flex items-center justify-center min-h-[300px] md:min-h-[400px] overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-yellow-200 via-green-200 to-cyan-200 blur-[60px] opacity-40 mix-blend-multiply pointer-events-none" />
    <div className="relative z-10 w-full bg-white/80 backdrop-blur-xl rounded-xl border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3 md:p-4 font-mono text-[10px] md:text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2 text-gray-400 flex-wrap">
        <span className="text-blue-500">⚛ Implementation plan</span>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <span className="text-gray-800 font-medium">LoginButton.tsx</span>
      </div>
      <div className="text-gray-500 space-y-1 pl-3 md:pl-4 border-l-2 border-green-400">
        <p>
          <span className="text-purple-600">import</span> Link{" "}
          <span className="text-purple-600">from</span>{" "}
          <span className="text-green-600">'next/link'</span>;
        </p>
        <br />
        <p>
          <span className="text-purple-600">export default function</span>{" "}
          <span className="text-blue-600">LoginButton</span>() {"{"}
        </p>
        <p className="pl-4">
          <span className="text-purple-600">return</span> (
        </p>
        <p className="pl-6 md:pl-8 text-blue-500">{"<Link"}</p>
        <p className="pl-10 md:pl-12">
          <span className="text-blue-400">href</span>=
          <span className="text-green-600">"/api/auth/signin"</span>
        </p>
        <p className="pl-10 md:pl-12">
          <span className="text-blue-400">className</span>=
          <span className="text-green-600">"rounded-md bg-orange-500..."</span>
        </p>
        <p className="pl-6 md:pl-8 text-blue-500">{">"}</p>
        <p className="pl-10 md:pl-12 text-black">Login with Google</p>
        <p className="pl-6 md:pl-8 text-blue-500">{"</Link>"}</p>
        <p className="pl-4">)</p>
        <p>{"}"}</p>
      </div>
    </div>
  </div>
);

// FEATURE 2 VISUAL 
const Feature2Visual = () => (
  <div className="bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative flex flex-col gap-4 items-center justify-center min-h-[300px] md:min-h-[400px] overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-100 via-cyan-100 to-teal-100 blur-[70px] opacity-50 mix-blend-multiply pointer-events-none" />
    <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-6">
      <h4 className="font-semibold text-sm mb-2">Setting up Dependencies</h4>
      <p className="text-xs text-gray-500 mb-3">
        User approved plan. Starting execution by installing...
      </p>
      <div className="flex flex-wrap gap-2 text-[10px] font-mono">
        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">date-fns</span>
        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">lucide-react</span>
      </div>
    </div>
    <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-6 opacity-70">
      <h4 className="font-semibold text-sm mb-2">Implementing Backend</h4>
      <p className="text-xs text-gray-500">
        Created{" "}
        <span className="text-blue-500 bg-blue-50 px-1 rounded">DashboardUI.tsx</span>. Now
        creating page.tsx to fetch data and render UI.
      </p>
    </div>
  </div>
);