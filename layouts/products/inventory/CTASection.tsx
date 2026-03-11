"use client";
import { ArrowRight, Play } from "lucide-react";

export default function CTASection() {
  const handleOpenInventoryApp = (type: string) => {
    if (type === "demo") {
      window.open("https://app.ez-hub.in/login?demo=true", "_blank");
    }
    if (type === "booking") {
      window.open("https://app.ez-hub.in/login?booking=true", "_blank");
    }
  };

  return (
    <section className="py-12 md:py-18 px-4 md:px-4 max-w-[1400px] mx-auto bg-white">

      <div className="bg-gray-50 border border-gray-100 rounded-[2rem] md:rounded-[3rem] py-16 md:py-24 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center text-center">

        {/* Subtle top glow to give the card depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-gray-200/40 to-transparent blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          {/* Updated copy to match Inventory context */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Ready to scale your operations?
          </h2>
          <p className="text-gray-500 text-base md:text-xl mb-10 max-w-xl">
            Join modern Indian businesses automating their inventory. Start free today, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

            {/* Primary Button */}
            <button
              onClick={() => handleOpenInventoryApp("demo")}
              type="button"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-8 md:px-10 py-4 rounded-full text-base font-medium hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Start for free
              {/* Arrow moves slightly right on hover using group-hover:translate-x-1.5 */}
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={() => handleOpenInventoryApp("booking")}
              type="button"
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white border border-gray-200 text-gray-900 px-8 md:px-10 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              <Play size={18} fill="currentColor" strokeWidth={1} className="text-gray-900 transition-transform duration-300 group-hover:scale-110" />
              Book a demo
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}