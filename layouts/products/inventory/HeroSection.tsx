"use client";
import Image from "next/image";
import Inv from "@/assets/images/Inv-bg.png";
import { motion } from "framer-motion";

const ConnectingBeam = ({
  startX,
  duration,
  delay,
  repeatDelay,
}: {
  startX: number;
  duration: number;
  delay: number;
  repeatDelay: number;
}) => {
  const path = `M ${startX} 0 C ${startX} 50, 50 25, 50 100`;

  return (
    <>
      <path
        d={path}
        stroke="#e5e7eb"
        strokeWidth="1"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />

      <motion.path
        d={path}
        fill="none"
        stroke="url(#orangeGradient)"
        strokeWidth="0.3"
        strokeLinecap="round"
        initial={{ strokeDasharray: "10 150", strokeDashoffset: 160 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
          repeatDelay: repeatDelay,
        }}
      />
    </>
  );
};

export default function HeroSection() {
  const handleOpenInventoryApp = () => {
    window.open("https://app.ez-hub.in/login?demo=true", "_blank");
  };

  return (
    <div className="relative bg-white w-full min-h-screen font-sans text-[#0f0f0f] overflow-x-hidden selection:bg-orange-100">
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#d4d4d8_1.1px,transparent_1.1px)] [background-size:20px_20px]"></div>
      <section className="pt-32 pb-0 flex flex-col items-center text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 my-8">
          <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1] font-black tracking-[-0.03em] text-[#0F0F0F]">
            Modern inventory software <br />
            for Indian businesses
          </h1>
        </div>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 px-6">
          Real-time inventory tracking, AI-powered demand forecasting, and automated reordering —
          <span className="text-black font-semibold">
            {" "}
            built to simplify
          </span>
        </p>

        <div className="w-full max-w-6xl mx-auto relative z-20">
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 relative z-10 px-4">
            {[
              "Surveys",
              "Interviews",
              "Video",
              "Voice",
              "Visuals",
              "Tasks",
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white border rounded-full px-6 py-3 text-sm font-bold shadow-sm z-20 relative transition-transform hover:-translate-y-1 duration-300
                ${
                  item === "Visuals"
                    ? "border-orange-200 text-orange-600 bg-orange-50/50"
                    : "border-gray-200 text-gray-800"
                }`}
              >
                {item}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full z-0"></div>
              </div>
            ))}
          </div>

          <div className="h-35 w-full relative -mt-3 z-0">
            <svg
              className="absolute top-0 left-0 w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="orangeGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ff9a44" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ff4f00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff4f00" stopOpacity="1" />
                </linearGradient>
              </defs>
              <ConnectingBeam
                startX={20}
                duration={3}
                delay={0}
                repeatDelay={12}
              />
              <ConnectingBeam
                startX={32}
                duration={3}
                delay={4}
                repeatDelay={14}
              />
              <ConnectingBeam
                startX={44}
                duration={3}
                delay={8}
                repeatDelay={10}
              />
              <ConnectingBeam
                startX={56}
                duration={3}
                delay={2}
                repeatDelay={16}
              />
              <ConnectingBeam
                startX={68}
                duration={3}
                delay={10}
                repeatDelay={11}
              />
              <ConnectingBeam
                startX={80}
                duration={3}
                delay={6}
                repeatDelay={13}
              />
              <circle cx="50" cy="100" r="1.5" fill="#ff4f00" />
            </svg>
          </div>
        </div>

        <div className="w-full relative -mt-0.5">
          <div className="absolute top-[35%] bottom-0 left-0 right-0 bg-[#FF3C1F] z-0"></div>

          <div className="relative z-10 max-w-325 mx-auto px-4 md:px-8 pb-24">
            <div className="bg-white rounded-xl">
              <div className="relative w-full bg-gray-50 min-h-125 md:min-h-162.5 rounded-xl">
                <div className="relative w-full h-full shadow-sm rounded-lg overflow-hidden">
                  <Image
                    src={Inv}
                    alt="Dashboard UI"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-12 right-12 w-80 bg-white rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden hidden lg:block"
                >
                  <div className="p-3 border-b border-gray-100 bg-white flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Ask AI Coach
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 flex flex-col gap-3">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none border border-gray-100 shadow-sm text-[12px] font-medium text-gray-600 leading-relaxed">
                      "Stockouts decreased by 20% after enabling auto-sync."
                    </div>
                  </div>
                  <div className="p-2 bg-white border-t border-gray-100">
                    <div className="h-8 bg-gray-100 rounded-md w-full flex items-center px-3 text-xs text-gray-400">
                      Ask a question...
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}