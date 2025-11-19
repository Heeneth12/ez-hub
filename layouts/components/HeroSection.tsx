'use client';
import {ArrowRight, Check, TrendingUp, Users} from "lucide-react";
import { useState } from "react";
import dashboardImg from "@/assets/images/dashboard.png";
import ez from "@/assets/images/EZ.png";
import Image from "next/image";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50">
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-100 to-emerald-100 border border-green-200 mb-6 group hover:shadow-lg transition-all duration-300">
              <span className="text-sm font-semibold text-green-700">
                Trusted by 500+ companies
              </span>
              <ArrowRight
                size={14}
                className="text-green-600 group-hover:translate-x-1 transition-transform"
              />
            </div>

            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 text-gray-900 leading-tight">
              Make every{" "}
              <span className="relative inline-block">
                operation
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none">
                  <path
                    d="M2 10C60 2 140 2 198 10"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-orange-500 to-orange-700 font-extrabold drop-shadow-md">
                <Image
                src={ez}
                alt="Dashboard"
                width={100}
              />
              </span>
              
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed">
              Businesses are switching to EZ-Hub — not because it’s software,
              but because life becomes EZ.
            </p>

            {/* Enhanced Email Input */}
            <div className="relative max-w-md mb-10">
              <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 placeholder-gray-400"
                />
                <button className="group px-6 py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 whitespace-nowrap flex items-center gap-2 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5">
                  Book a demo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1.5">
                <Check size={14} className="text-green-500" />
                Free 30-day trial • No credit card required
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="group p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">75.2%</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Average daily activity
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <TrendingUp size={12} />
                  +12% from last month
                </div>
              </div>

              <div className="group p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">~20k</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Average daily users
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <TrendingUp size={12} />
                  +8% from last month
                </div>
              </div>
            </div>
          </div>
          {/* Right - Advanced 3D Phone Mockup */}
          <div
            className="mt-16 lg:mt-0 relative flex justify-center perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="relative w-full max-w-md">
              <Image
                src={dashboardImg}
                alt="Dashboard"
                width={500}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Trust Section */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
              Trusted by leading companies worldwide
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Acme Corp', 'TechFlow', 'GlobalCo', 'Innovate', 'NextGen', 'Catalyst'].map((name, i) => (
              <div 
                key={i} 
                className="text-center p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl font-bold text-gray-300 group-hover:text-gray-600 transition-colors">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
