"use client";
import { motion } from "framer-motion";
import inv from "@/assets/images/inv_so.png";
import Image from "next/image";

import { ArrowRight, CheckCircle2, Play } from "lucide-react";

export default function HeroSection() {
  const handleOpenInventoryApp = (type: string) => {
    if (type === "demo") {
      window.open("https://app.ez-hub.in/login?demo=true", "_blank");
    }
    if (type === "booking") {
      window.open("https://app.ez-hub.in/login?booking=true", "_blank");
    }
  };

  return (
    <section>
      <main className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 max-w-300 mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Explicitly set to text-gray-900 for bold, sharp visibility */}
          <h1 className="text-[40px] sm:text-5xl md:text-[84px] font-semibold leading-[1.05] tracking-[-0.04em] mb-4 text-gray-900">
            Modern inventory software{" "}
            <br className="hidden md:block" />
            for Indian businesses
          </h1>

          <h4 className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-gray-500 mt-6 leading-relaxed max-w-2xl mx-auto">
            Real-time tracking, AI-powered forecasting, and automated reordering. <br className="hidden md:block" />
            Built to scale your operations effortlessly.
          </h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-10 md:mt-16 w-full sm:w-auto"
        >
          {/* Primary Button: Added Flex layout, gap, and the animated ArrowRight */}
          <button
            onClick={() => handleOpenInventoryApp("demo")}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF451A] text-white px-6 md:px-8 py-4 rounded-full text-base font-bold hover:shadow-[0_15px_30px_rgba(255,69,26,0.25)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Start for free
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          {/* Secondary Button: Added Flex layout, gap, and the animated Play icon */}
          <button
            onClick={() => handleOpenInventoryApp("booking")}
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F5F5F7] text-black px-6 md:px-8 py-4 rounded-full text-base font-bold hover:bg-[#EDEDF0] transition-all duration-300"
          >
            <Play size={18} fill="currentColor" strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
            Book a demo
          </button>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400"
        >
          {['GST Ready', 'Cloud Sync', '24/7 Support'].map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs font-medium">
              <CheckCircle2 size={14} className="text-green-500" />
              {feature}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl rounded-2xl border border-gray-300 shadow-sm bg-gray-300 overflow-hidden"
        >
          <div>
            {/* Replace this with an actual screenshot of your app */}
            <Image
              src={inv}
              alt="EZ Hub Logo"
              className="h-full w-auto rounded-2xl object-contain"
              priority
            />
          </div>
        </motion.div>

      </main>
    </section>
  );
}