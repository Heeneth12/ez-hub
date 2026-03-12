"use client";
import { motion } from "framer-motion";
import inv from "@/assets/images/inv_so.png";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

const FloatingDot = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-[#FF451A] pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, opacity: 0.12 }}
    animate={{
      y: [0, -18, 0],
      opacity: [0.08, 0.18, 0.08],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

// Animated counter for the badge
const AnimatedBadge = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 2400;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) { clearInterval(timer); return target; }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Sparkles size={13} className="text-[#FF451A]" />
      </motion.div>
      <span className="text-xs font-semibold text-gray-600">
        Trusted by <span className="text-[#FF451A]">{count.toLocaleString()}+</span> Indian businesses
      </span>
    </motion.div>
  );
};

export default function HeroSection() {
  const handleOpenInventoryApp = (type: string) => {
    if (type === "demo") window.open("https://app.ez-hub.in/login?demo=true", "_blank");
    if (type === "booking") window.open("https://app.ez-hub.in/login?booking=true", "_blank");
  };

  const features = ['GST Ready', 'Cloud Sync', '24/7 Support'];

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── LIGHT GRID BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle ambient background blobs */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,69,26,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating dots */}
      <FloatingDot delay={0} x="8%" y="20%" size={8} />
      <FloatingDot delay={1.2} x="90%" y="15%" size={5} />
      <FloatingDot delay={2.4} x="85%" y="55%" size={10} />
      <FloatingDot delay={0.8} x="5%" y="65%" size={6} />
      <FloatingDot delay={3} x="50%" y="8%" size={4} />

      <main className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 max-w-300 mx-auto flex flex-col items-center">

        {/* Badge */}
        <AnimatedBadge />

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="text-[40px] sm:text-5xl md:text-[84px] font-semibold leading-[1.05] tracking-[-0.04em] mb-4 text-gray-900">
            {"Modern inventory software".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            {"for Indian businesses".split(" ").map((word, i) => (
              <motion.span
                key={i + 10}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.45 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.h4
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-gray-500 mt-6 leading-relaxed max-w-2xl mx-auto"
          >
            Real-time tracking, AI-powered forecasting, and automated reordering.{" "}
            <br className="hidden md:block" />
            Built to scale your operations effortlessly.
          </motion.h4>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-10 md:mt-16 w-full sm:w-auto"
        >
          <motion.button
            onClick={() => handleOpenInventoryApp("demo")}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF451A] text-white px-6 md:px-8 py-4 rounded-full text-base font-bold hover:shadow-[0_15px_30px_rgba(255,69,26,0.3)] transition-shadow duration-300"
          >
            Start for free
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

          <motion.button
            onClick={() => handleOpenInventoryApp("booking")}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F5F5F7] text-black px-6 md:px-8 py-4 rounded-full text-base font-bold hover:bg-[#EDEDF0] transition-colors duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Play size={18} fill="currentColor" strokeWidth={1.5} />
            </motion.span>
            Book a demo
          </motion.button>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } },
          }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400"
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
              }}
              className="flex items-center gap-1.5 text-xs font-medium"
            >
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 + Math.random() * 2 }}
              >
                <CheckCircle2 size={14} className="text-green-500" />
              </motion.div>
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* NORMAL Product image (3D tilt removed) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-5xl relative"
        >
          <motion.div
            className="absolute inset-x-8 bottom-0 h-16 rounded-full blur-2xl bg-[#FF451A] pointer-events-none"
            style={{ opacity: 0.08 }}
            animate={{ opacity: [0.06, 0.13, 0.06] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative rounded-2xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] bg-gray-100 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-gray-100">
              {["#FF5F56", "#FFBD2E", "#27C93F"].map((color) => (
                <div key={color} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
            <Image
              src={inv}
              alt="EZ Hub Inventory Dashboard"
              className="w-full h-auto rounded-b-2xl object-contain"
              priority
            />
          </div>
        </motion.div>

      </main>
    </section>
  );
}