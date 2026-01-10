"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/images/new.png";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Inventory", href: "/inventory" },
      { name: "Bookings", href: "/bookings" },
      { name: "Assist", href: "/assist" },
    ],
  },
  { name: "About Us", href: "/about" },
];

export default function BookingsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
          ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3"
          : "bg-white border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 font-sans">
        {/* --- Logo --- */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center">
            <Image src={logo} alt="EZ Hub Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* --- Desktop Nav --- */}
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-600 transition-colors group-hover:text-orange-600 py-2 outline-none">
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-orange-600" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 origin-top rounded-xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 ring-1 ring-black/5 focus:outline-none opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden">
                    <div className="p-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="relative text-[15px] font-semibold text-slate-600 transition-colors hover:text-orange-600 py-1"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* --- Desktop Auth Buttons --- */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          <Link
            href="/auth"
            className="text-[15px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign in
          </Link>

          <Link
            href="/auth"
            className="rounded-full bg-orange-600 px-6 py-2.5 text-[15px] font-bold text-white shadow-md shadow-orange-200 hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Try it free
          </Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-50 transition-colors"
          >
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
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
               <Image src={logo} alt="Logo" className="h-8 w-auto" />
               <span className="font-bold text-lg text-slate-900">EZ Hub</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root font-sans">
            <div className="-my-6 divide-y divide-slate-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    /* Mobile Dropdown Logic */
                    <div key={item.name} className="-mx-3">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen(!mobileDropdownOpen)
                        }
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 flex-none text-slate-400 transition-transform ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div className={`mt-1 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-60' : 'max-h-0'}`}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              <div className="py-6">
                <Link
                  href="/auth"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth"
                  className="mt-4 block w-full rounded-xl bg-orange-600 px-3 py-3 text-center text-base font-bold text-white shadow-md hover:bg-orange-700 transition-all"
                >
                  Try it free
                </Link>
                <div className="mt-8 text-center">
                  <p className="text-xs text-slate-400">
                    Join 10,000+ companies growing with EZ Hub
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