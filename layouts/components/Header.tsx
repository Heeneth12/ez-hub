"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-sm" : "backdrop-blur-sm"
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              EZ - HuB
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10 lg:ml-10">
          <a
            href="#home"
            className="text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Home
          </a>
          <a
            href="#pricing"
            className="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a
            href="#about"
            className="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            About us
          </a>
          <a
            href="#contact"
            className="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex lg:gap-x-3 ml-auto">
          <a
            href="/login"
            className="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors px-3 py-2">
            Log in
          </a>
          <a
            href="/signup"
            className="rounded-xl bg-blue-700 px-6 py-2 text-[15px] font-normal text-white shadow-sm hover:bg-blue-800 transition-all duration-200">
            Sign up
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">Lando</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-50">
                  Home
                </a>
                <a
                  href="#pricing"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                  Pricing
                </a>
                <a
                  href="#about"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                  About us
                </a>
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                  Contact
                </a>
              </div>

              <div className="border-t border-gray-200 py-6 space-y-3">
                <a
                  href="/login"
                  className="block rounded-lg px-3 py-2.5 text-center text-base font-medium text-gray-700 hover:bg-gray-50">
                  Log in
                </a>
                <a
                  href="/signup"
                  className="block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-base font-medium text-white hover:bg-blue-700">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
