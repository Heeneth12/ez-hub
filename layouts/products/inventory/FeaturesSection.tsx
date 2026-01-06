"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Package, 
  Warehouse, 
  ScanBarcode, 
  Puzzle, 
  MapPin, 
  FileBarChart, 
  ArrowRight,
  Sparkles
} from "lucide-react";

// --- THEME CONFIGURATION ---
const theme = {
  colors: {
    bg: {
      main: "bg-zinc-50",
      card: "bg-gradient-to-b from-white to-zinc-50",
      featured: "bg-gradient-to-br from-zinc-900 to-zinc-800",
      iconBox: "bg-gradient-to-br from-white to-zinc-100",
      iconBoxFeatured: "bg-zinc-800",
    },
    text: {
      heading: "text-zinc-900",
      body: "text-zinc-500",
      inverse: "text-zinc-100", 
      inverseBody: "text-zinc-400",
    },
    border: {
      light: "border-zinc-200", // Standard border
      highlight: "border-zinc-300",
      featured: "border-zinc-700",
    },
    effects: {
      shadow: "shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]",
      shadowHover: "hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]",
      innerHighlight: "shadow-[inset_0_1px_0_0_rgba(255,255,255,1)]", // Top edge light
    }
  },
  layout: {
    maxWidth: "max-w-7xl",
    sectionPad: "py-24",
  }
};

// --- DATA ---
const features = [
  {
    title: "Order Management",
    description: "Centralize your sales and purchase activities. Track payments and shipments in real-time with automated workflows.",
    icon: Package,
    featured: true, 
    link: "/features/orders"
  },
  {
    title: "Warehouse Control",
    description: "Manage stock across multiple locations. Track transfers and generate granular warehouse-specific reports.",
    icon: Warehouse,
    link: "/features/warehouse"
  },
  {
    title: "Barcode Systems",
    description: "Connect major scanners to easily add SKUs, serials, and batch numbers to your digital records.",
    icon: ScanBarcode,
    link: "/features/barcode"
  },
  {
    title: "Ecosystem Sync",
    description: "Seamlessly integrate with Shopify, Amazon, CRM tools, and payment gateways like Razorpay.",
    icon: Puzzle,
    link: "/features/integrations"
  },
  {
    title: "Precision Tracking",
    description: "Monitor spare parts, expiration dates, and serial numbers to minimize loss and optimize stock levels.",
    icon: MapPin,
    link: "/features/tracking"
  },
  {
    title: "Intelligence & Reports",
    description: "Deep dive into inventory aging, vendor performance, and valuation with exportable, data-rich reports.",
    icon: FileBarChart,
    link: "/features/reports"
  }
];

export default function FeaturesSectionSilver() {
  return (
    <section className={`relative ${theme.colors.bg.main} ${theme.layout.sectionPad} overflow-hidden font-sans selection:bg-zinc-200`}>
      
      {/* Background: Subtle Metallic Grain/Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
        style={{ backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
      />
      
      {/* Ambient Gradient Blobs (Very Subtle) */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-200/30 blur-[100px] pointer-events-none" />

      <div className={`relative z-10 mx-auto px-6 ${theme.layout.maxWidth}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm mb-6">
            <Sparkles size={12} className="text-zinc-500" />
            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Enterprise Grade</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-semibold tracking-tighter mb-6 ${theme.colors.text.heading}`}>
            Built for scale, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 via-zinc-600 to-zinc-400">
              designed for clarity.
            </span>
          </h2>
          <p className={`text-lg ${theme.colors.text.body} font-light`}>
             A unified operating system for your inventory, stripped of complexity and polished for performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <a href="/features" className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-all">
            <span className="border-b border-transparent group-hover:border-zinc-900">View full capabilities</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: FEATURE CARD ---
const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const isFeatured = feature.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-500
        ${isFeatured 
          ? `${theme.colors.bg.featured} ${theme.colors.border.featured} shadow-2xl` 
          : `${theme.colors.bg.card} ${theme.colors.border.light}  hover:border-zinc-300`
        }
      `}
    >
      {/* Inner Light Highlight (Top Bevel Effect) */}
      {!isFeatured && <div className={`absolute inset-0 rounded-2xl pointer-events-none `} />}

      {/* Featured Card Subtle Light Effect */}
      {isFeatured && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
      )}

      {/* Icon Area */}
      <div className="mb-8 relative">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-105 shadow-sm
          ${isFeatured 
            ? `${theme.colors.bg.iconBoxFeatured} border-zinc-700 text-white shadow-black/20` 
            : `${theme.colors.bg.iconBox} border-zinc-100 text-zinc-700 group-hover:border-zinc-300 group-hover:text-zinc-900`
          }
        `}>
          <feature.icon size={26} strokeWidth={1.5} />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow relative z-10">
        <h3 className={`text-lg font-medium mb-3 tracking-tight ${isFeatured ? theme.colors.text.inverse : theme.colors.text.heading}`}>
          {feature.title}
        </h3>
        <p className={`text-sm leading-relaxed ${isFeatured ? theme.colors.text.inverseBody : theme.colors.text.body}`}>
          {feature.description}
        </p>
      </div>

      {/* Action Area (Subtle Arrow) */}
      <div className={`mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300
        ${isFeatured ? "text-zinc-400 group-hover:text-white" : "text-zinc-400 group-hover:text-zinc-900"}
      `}>
        Learn More
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>

    </motion.div>
  );
};