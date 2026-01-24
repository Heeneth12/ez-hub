"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  BarChart3, 
  Package, 
  Zap, 
  Globe, 
  Store, 
  Truck,
  LucideIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/new.png"; 

interface DropdownItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface NavLink {
  name: string;
  hasDropdown: boolean;
}

const dropdownData: Record<string, DropdownItem[]> = {
  Platform: [
    { 
      title: "Inventory Control", 
      desc: "Real-time stock tracking across all locations.", 
      icon: Package 
    },
    { 
      title: "Analytics & Reports", 
      desc: "Data-driven insights to grow revenue.", 
      icon: BarChart3 
    },
    { 
      title: "Automation", 
      desc: "Set triggers and automate workflows.", 
      icon: Zap 
    },
  ],
  Solutions: [
    { 
      title: "For Retail", 
      desc: "POS integration and shop management.", 
      icon: Store 
    },
    { 
      title: "For Warehouses", 
      desc: "Bin tracking and logistics optimization.", 
      icon: Truck 
    },
    { 
      title: "Global Trade", 
      desc: "Multi-currency and export tools.", 
      icon: Globe 
    },
  ]
};

const navLinks: NavLink[] = [
  { name: "Platform", hasDropdown: true },
  { name: "Solutions", hasDropdown: true },
  { name: "Templates", hasDropdown: false },
  { name: "Pricing", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Scroll Lock on Mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleOpenInventoryApp = () => {
    window.open("https://app.ez-hub.in/login?demo=true", "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14 relative">
          
          {/* --- Logo --- */}
          <div className="shrink-0 z-50 flex items-center gap-2 cursor-pointer">
            <Link href="/" className="group flex items-center gap-2">
              <Image 
                src={logo} 
                alt="EZ Hub Logo" 
                className="h-14 w-auto object-contain"
                priority 
              />
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 h-full">
            {navLinks.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              >
                <button
                  className={`group px-4 py-2 text-[15px] font-medium rounded-full transition-all flex items-center gap-1.5 ${
                    activeDropdown === item.name 
                      ? "text-gray-900 bg-gray-100" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180 text-gray-900" : "text-gray-400"
                      }`}
                    />
                  )}
                </button>

                {/* --- Dropdown Panel --- */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-90">
                    <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                    <div className="bg-white backdrop-blur-xl rounded-xl border border-gray-200 shadow-sm  p-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="grid gap-1">
                        {dropdownData[item.name]?.map((subItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-200 transition-all group/item"
                          >
                            <div className="mt-1 p-2 bg-white rounded-lg text-gray-400 border border-gray-200 group-hover/item:text-gray-900 group-hover/item:border-gray-300 transition-colors shrink-0">
                              <subItem.icon size={18} strokeWidth={2} />
                            </div>
                            <div>
                              <div className="text-[14px] font-semibold text-gray-900">
                                {subItem.title}
                              </div>
                              <div className="text-[13px] text-gray-500 leading-snug mt-0.5 group-hover/item:text-gray-600">
                                {subItem.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      
                      {/* Footer */}
                      <div className="mt-2 pt-2 border-t border-gray-200 px-3 pb-1">
                        <a href="#" className="flex items-center justify-between text-xs font-semibold text-gray-500 hover:text-gray-900 py-2 transition-colors">
                          View all {item.name}
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* --- Desktop Actions --- */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="text-[15px] font-medium text-gray-600 px-4 py-2 hover:text-gray-900 transition-colors">
              Sign in
            </button>
            <button
              onClick={handleOpenInventoryApp}
              className="bg-[#FF3C1F] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 flex items-center gap-2">
              Try it free <ArrowRight size={16} />
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden pt-28 px-6 transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}>
        <div className="flex flex-col h-full justify-between pb-10">
          <div className="flex flex-col gap-2">
            {navLinks.map((item, idx) => (
              <a
                key={item.name}
                href="#"
                className={`text-2xl font-semibold text-gray-900 py-4 border-b border-gray-100 flex items-center justify-between group transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}>
                {item.name}
                <ArrowRight
                  size={20}
                  className="text-gray-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            ))}
          </div>

          <div
            className={`flex flex-col gap-4 mt-auto transition-all duration-700 delay-200 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}>
            <button className="w-full py-4 text-center font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all">
              Sign in
            </button>
            <button
              onClick={handleOpenInventoryApp}
              className="w-full py-4 text-center font-bold bg-gray-900 text-white rounded-xl hover:bg-gray-800 shadow-xl shadow-gray-200 active:scale-[0.98] transition-all flex justify-center items-center gap-2">
              Book a demo <ArrowRight size={18} />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              © 2024 Ballpark Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}