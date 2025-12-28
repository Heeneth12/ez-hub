"use client";

import React, { useState } from "react";
type AccentType = "purple" | "teal" | "pink";
interface FeatureCardProps {
  title: string;
  description: string;
  renderImage?: () => React.ReactNode;
  accent: AccentType;
}

const FeatureCardLight: React.FC<FeatureCardProps> = ({
  title,
  description,
  renderImage,
  accent,
}) => {
  const accentStyles: Record<AccentType, string> = {
    purple: "from-purple-100 via-white to-white group-hover:border-purple-200",
    teal: "from-teal-100 via-white to-white group-hover:border-teal-200",
    pink: "from-pink-100 via-white to-white group-hover:border-pink-200",
  };

  return (
    <div
      className={`group relative rounded-4xl bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
        accentStyles[accent] || ""
      }`}>
      {/* Dynamic Glow Background (Subtle Wash on Hover) */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] ${accentStyles[accent]} pointer-events-none`}></div>

      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
        {/* Image Section (Top) - Placeholder */}
        <div className="mb-10 flex items-center justify-center min-h-[250px] bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
          {renderImage ? (
            renderImage()
          ) : (
            <h1 className="text-gray-400 font-bold text-xl">
              Image Placeholder
            </h1>
          )}
        </div>

        {/* Text Section (Bottom) */}
        <div className="mt-auto text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500">
            {title}
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FeaturesSectionLight() {
  const [activeTab, setActiveTab] = useState("Poss");
  const tabs = ["Poss", "Payroll", "Invoice", "Purchase", "Tasks"];
  const themeBlue = "#1a73e8"; // A standard blue
  const themeOrange = "#ea8600"; // A vibrant orange
  return (
    <section className="relative py-12 bg-[#F9FAFB] overflow-hidden font-sans text-gray-900">
      {/* Subtle Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            Keep everything in <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-orange-400 to-purple-800">
              one place.
            </span>
          </h2>
          {/* <p className="text-mb text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
            Forget complex project management tools. Our platform unifies your
            workflow in a single, beautiful interface.
          </p> */}
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange-50 text-orange-600 font-semibold shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}>
              {tab}
            </button>
          ))}
        </nav>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <FeatureCardLight
            title="Seamless Collaboration"
            description="Work together with your team effortlessly, share tasks, and update progress in real-time."
            accent="purple"
            renderImage={() => (
              <h1 className="text-purple-400 font-bold text-2xl">
                Image Placeholder
              </h1>
            )}
          />

          {/* Card 2 */}
          <FeatureCardLight
            title="Time Management Tools"
            description="Optimize your time with integrated tools like timers, reminders, and schedules."
            accent="teal"
            renderImage={() => (
              <h1 className="text-teal-400 font-bold text-2xl">
                Image Placeholder
              </h1>
            )}
          />

          {/* Card 3 */}
          <FeatureCardLight
            title="Advanced task tracking"
            description="A birds eye view of your entire behaviour and productivity."
            accent="pink"
            renderImage={() => (
              <h1 className="text-pink-400 font-bold text-2xl">
                Image Placeholder
              </h1>
            )}
          />

          {/* Card 4 */}
          <FeatureCardLight
            title="Customizable Workspaces"
            description="Tailor your environment with widgets, themes, and personalized views."
            accent="purple"
            renderImage={() => (
              <h1 className="text-indigo-400 font-bold text-2xl">
                Image Placeholder
              </h1>
            )}
          />
        </div>
      </div>
    </section>
  );
}
