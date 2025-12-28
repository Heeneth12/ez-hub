"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/new.png";
import Image from "next/image";

const navigation = [
  { name: "Apps", href: "#apps" },
  { name: "Industries", href: "#industries" },
  { name: "Community", href: "#community" },
  { name: "Pricing", href: "#pricing" },
  { name: "Help", href: "#help" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-md border-gray-900 shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 font-sans">
        <div className="flex lg:flex-1">
          <a href="/" className="group flex items-center gap-2">
            <Image src={logo} alt="EZ Hub Logo" className="h-14 w-auto" />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-medium text-white transition-colors group py-1">
              {item.name}
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* --- Desktop Auth Buttons --- */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          <a
            href="/login"
            className="text-[15px] font-semibold text-gray-400 hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="/signup"
            className="rounded-4xl bg-[#e05c10] px-5 py-2.5 text-[15px] font-semibold text-white shadow-purple-900/10 hover:bg-[#f1770d] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            Try it free
          </a>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-3xl font-bold text-white">odoo</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root font-sans">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#714B67] transition-colors">
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Sign in
                </a>
                <a
                  href="/signup"
                  className="mt-4 block w-full rounded-md bg-[#eb4e10] px-3 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#FF5F1F]">
                  Try it free
                </a>
                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-400">
                    Join 10,000+ companies growing with Odoo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
