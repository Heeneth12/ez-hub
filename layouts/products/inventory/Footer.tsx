import React from "react";
import logo from "@/assets/images/new.png";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Youtube, MessageSquare } from "lucide-react";

const SOCIAL_LINKS = [
    {
        label: "Instagram",
        icon: <Instagram size={16} strokeWidth={1.8} />,
    },
    {
        label: "X",
        icon: <Twitter size={16} strokeWidth={1.8} />,
    },
    {
        label: "LinkedIn",
        icon: <Linkedin size={16} strokeWidth={1.8} />,
    },
    {
        label: "YouTube",
        icon: <Youtube size={16} strokeWidth={1.8} />,
    },
];

const FOOTER_COLUMNS = [
    { heading: "Product", links: ["Style Transfer", "Brand Models", "API Access", "Integrations", "Changelog"] },
    { heading: "Industries", links: ["Fashion & Retail", "Hospitality", "Architecture", "Publishing", "Agencies"] },
    { heading: "Resources", links: ["Documentation", "Case Studies", "Blog", "Community", "Status"] },
    { heading: "Company", links: ["About", "Careers", "Press Kit", "Contact", "Pricing"] },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] relative overflow-hidden">
            {/* Main Footer Grid */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-10 md:pb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-12">
                    <FooterBrandColumn />
                    <FooterLinksGrid />
                </div>
            </div>

            {/* Ghost Wordmark */}
            <div className="relative w-full overflow-hidden pointer-events-none select-none h-[14vw] min-h-[50px]">
                <h2 className="text-[25vw] font-bold text-[#141414] leading-none tracking-tighter text-center absolute bottom-0 left-1/2 -translate-x-1/2">
                    EZ Inventory
                </h2>
            </div>

            <FooterBottomBar />
        </footer>
    );
}

const FooterLinksGrid = () => (
    <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-6">
        {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-3">
                <p className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-1">
                    {heading}
                </p>
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-white/40 text-sm hover:text-white transition-colors leading-snug"
                    >
                        {link}
                    </a>
                ))}
            </div>
        ))}
    </div>
);

// ─── FOOTER BRAND COLUMN ──────────────────────────────────────────────────────

const FooterBrandColumn = () => (
    <div className="md:col-span-2 flex flex-col gap-5">
        <Logo dark />
        <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
            AI-powered brand consistency at scale. Your style, your rules, your ownership.
        </p>
        <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, icon }) => (
                <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                    {icon}
                </a>
            ))}
        </div>
    </div>
);

// ─── FOOTER BOTTOM BAR ────────────────────────────────────────────────────────

const FooterBottomBar = () => (
    <div className="border-t border-white/[0.06] px-4 md:px-8 py-4 md:py-5 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[10px] text-white/25 uppercase tracking-widest text-center sm:text-left">
                © exactly.ai 2026. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-6 text-[10px] text-white/25 uppercase tracking-widest flex-wrap justify-center">
                {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, idx, arr) => (
                    <React.Fragment key={item}>
                        <a href="#" className="hover:text-white/60 transition-colors whitespace-nowrap">
                            {item}
                        </a>
                        {idx !== arr.length - 1 && <span className="text-white/10 hidden sm:inline">·</span>}
                    </React.Fragment>
                ))}
            </div>
            <button
                type="button"
                aria-label="Open chat"
                className="w-10 h-10 md:w-11 md:h-11 bg-[#FF451A] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,69,26,0.4)] transition-all duration-300 shrink-0"
            >
                <MessageSquare size={17} color="white" strokeWidth={2} />
            </button>
        </div>
    </div>
);

const Logo = ({ dark = false }) => (
    <div className="flex items-center gap-2 group cursor-pointer">
        <div className="flex lg:flex-1">
            <a href="/" className="group flex items-center gap-2">
                <Image src={logo} alt="EZ Hub Logo" className="h-14 w-auto" />
            </a>
        </div>
        <span className={`text-base md:text-lg font-bold tracking-tighter uppercase ${dark ? "text-white" : "text-[#1A1A1A]"}`}>
            Inventory
        </span>
    </div>
);