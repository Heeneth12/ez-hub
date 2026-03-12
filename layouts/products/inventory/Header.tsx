"use client";
import { useState } from "react";
import logo from "@/assets/images/new.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "Features", href: "/inventory/features" },
    { label: "Pricing", href: "/inventory/pricing" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const pathname = usePathname();

    const handleOpenInventoryApp = (type: string) => {
        if (type === "demo") {
            window.open("https://app.ez-hub.in/login?demo=true", "_blank");
        }
        if (type === "login") {
            window.open("https://app.ez-hub.in/login", "_blank");
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-350 mx-auto flex items-center justify-between px-4 md:px-8 h-16">

                {/* Logo */}
                <Logo />

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-2 text-[13px] font-medium tracking-wide text-gray-500">
                    {NAV_LINKS.map(({ label, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={label}
                                href={href}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-gray-100 text-black font-semibold' : 'hover:text-black hover:bg-gray-50/50'}`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    {/* Resources Dropdown Toggle */}
                    {/* <div className="relative">
                        <button
                            onClick={() => setResourcesOpen(!resourcesOpen)}
                            className="flex items-center gap-1 hover:text-black transition-colors"
                        >
                            Resources <span className={`text-[8px] opacity-50 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>

                        {resourcesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 shadow-lg rounded-xl py-2 animate-in fade-in zoom-in duration-200">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Help Center</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Community</a>
                            </div>
                        )}
                    </div> */}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-6">
                    <button
                        onClick={() => handleOpenInventoryApp("login")}
                        className="text-[13px] font-semibold text-gray-500 hover:text-gray-700 transition"
                    >
                        Log in
                    </button>
                    <button
                        onClick={() => handleOpenInventoryApp("demo")}
                        className="bg-[#FF451A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold hover:shadow-[0_8px_20px_rgba(255,69,26,0.3)] transition-all duration-300 active:scale-95"
                    >
                        Start for free
                    </button>
                </div>

                {/* Mobile: Log in + Hamburger */}
                <div className="flex lg:hidden items-center gap-3">
                    <button
                        onClick={() => handleOpenInventoryApp("login")}
                        className="text-[13px] font-semibold text-gray-500 hover:text-gray-700 transition"
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-9 h-9 flex flex-col items-center justify-center gap-1.25 rounded-lg hover:bg-gray-50 transition"
                    >
                        <MenuIcon className="text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden border-t border-gray-100 bg-white"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {NAV_LINKS.map(({ label, href }) => {
                                const isActive = pathname === href;
                                return (
                                    <Link
                                        key={label}
                                        href={href}
                                        className={`py-3 px-4 rounded-xl text-[15px] font-medium transition-colors ${isActive ? 'bg-gray-50 text-black font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <button
                                className="mt-3 bg-[#FF451A] text-white text-center py-3 rounded-full text-[13px] font-bold active:scale-95 transition-transform"
                                onClick={() => {
                                    handleOpenInventoryApp("demo");
                                    setMobileMenuOpen(false);
                                }}
                            >
                                Start for free
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Logo = () => (
    <Link
        href="/inventory"
        className="group flex items-center active:scale-[0.98] transition-transform duration-200 focus:outline-none rounded-lg"
        aria-label="EZ Hub Home"
    >
        <Image
            src={logo}
            alt="EZ Hub Logo"
            className="h-10 w-auto object-contain"
            priority
        />
    </Link>
);