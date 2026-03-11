import React from "react";
import logo from "@/assets/images/new.png";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Youtube, MessageSquare, ArrowUpRight } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", icon: <Instagram size={15} strokeWidth={1.6} /> },
  { label: "X", icon: <Twitter size={15} strokeWidth={1.6} /> },
  { label: "LinkedIn", icon: <Linkedin size={15} strokeWidth={1.6} /> },
  { label: "YouTube", icon: <Youtube size={15} strokeWidth={1.6} /> },
];

const FOOTER_COLUMNS = [
  { heading: "Product", links: ["Style Transfer", "Brand Models", "API Access", "Integrations", "Changelog"] },
  { heading: "Industries", links: ["Fashion & Retail", "Hospitality", "Architecture", "Publishing", "Agencies"] },
  { heading: "Resources", links: ["Documentation", "Case Studies", "Blog", "Community", "Status"] },
  { heading: "Company", links: ["About", "Careers", "Press Kit", "Contact", "Pricing"] },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #0A0A0A 60%, #0C0805 100%)",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Subtle radial glow top-left */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-150 h-100 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, #FF451A33 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Top divider accent ── */}
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, #FF451A55 30%, #FF451A 50%, #FF451A55 70%, transparent 100%)" }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12 pt-8 md:pt-10 pb-12 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo />

            <p className="text-white/35 text-[13.5px] leading-[1.75] max-w-70" style={{ letterSpacing: "0.01em" }}>
              AI-powered brand consistency at scale. Your style, your rules, your ownership.
            </p>

            {/* Newsletter micro-signup */}
            <div className="mt-1">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/25 mb-3 font-medium">Stay updated</p>
              <div className="flex gap-0 max-w-70">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/4 border border-white/10 text-white/60 text-[12.5px] px-3.5 py-2.5 rounded-l-lg outline-none placeholder:text-white/20 focus:border-white/25 transition-colors"
                  style={{ fontFamily: "inherit" }}
                />
                <button
                  type="button"
                  className="px-3.5 py-2.5 rounded-r-lg text-white text-[12px] font-semibold transition-all duration-200 hover:opacity-90 shrink-0"
                  style={{ background: "#FF451A", fontFamily: "inherit" }}
                >
                  →
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {SOCIAL_LINKS.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-2.5">
                <p
                  className="text-white/70 text-[10.5px] font-semibold uppercase mb-2"
                  style={{ letterSpacing: "0.16em" }}
                >
                  {heading}
                </p>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="group flex items-center gap-1 text-white/30 text-[13px] leading-snug transition-all duration-150 hover:text-white/80"
                    style={{ fontFamily: "inherit" }}
                  >
                    <span>{link}</span>
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-60 -translate-y-0.5 group-hover:translate-y-0 transition-all duration-150"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-6 mb-0 w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── Ghost Wordmark ── */}
      <div className="relative w-full h-75 overflow-hidden pointer-events-none select-none">
        <span
          className="absolute bottom-0 left-1/3 -translate-x-1/3 whitespace-nowrap font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(50px, 20vw, 300px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
            letterSpacing: "-0.04em",
          }}
        >
          ezInventory
        </span>
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(50px, 20vw, 300px)",
            color: "#141414",
            letterSpacing: "-0.04em",
          }}
        >
          ezInventory
        </span>
      </div>
    </footer>
  );
}

const Logo = () => (
  <a href="/" className="flex items-center gap-2.5 group w-fit">
    <Image src={logo} alt="EZ Hub Logo" className="h-12 w-auto" />
    <span
      className="text-base font-bold uppercase tracking-tight text-white group-hover:opacity-80 transition-opacity"
      style={{ letterSpacing: "-0.01em" }}
    >
      Inventory
    </span>
  </a>
);