"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2, X, Zap, Building2, User, HelpCircle,
    ChevronDown, CreditCard, ShieldCheck, Lock
} from "lucide-react";

/* ─────────────────────────────────────────────
   Tokens
───────────────────────────────────────────── */
const tokens = {
    heading: "font-['DM_Sans',_system-ui,_sans-serif] tracking-[-0.03em]",
};

/* ─────────────────────────────────────────────
   Data: Pricing Plans
───────────────────────────────────────────── */
const plans = [
    {
        name: "Starter",
        icon: <User size={20} className="text-blue-500" />,
        desc: "Perfect for small businesses just getting started with inventory.",
        priceMonthly: 49,
        priceYearly: 39,
        featured: false,
        btnText: "Start Free Trial",
        features: [
            "Up to 1,000 SKUs",
            "1 User Account",
            "Basic Dashboard Analytics",
            "Standard Email Support",
        ],
        notIncluded: [
            "Purchase Workflows (PO, GRN)",
            "Role-based Access Control",
            "Vendor Portal",
        ]
    },
    {
        name: "Professional",
        icon: <Zap size={20} className="text-[#8B5CF6]" />,
        desc: "Everything you need to scale your growing supply chain operations.",
        priceMonthly: 129,
        priceYearly: 99,
        featured: true,
        badge: "Most Popular",
        btnText: "Get Professional",
        features: [
            "Up to 10,000 SKUs",
            "5 User Accounts",
            "Advanced Reporting & Excel Export",
            "Full Sales & Purchase Lifecycles",
            "Priority 24/7 Support",
        ],
        notIncluded: [
            "Dedicated Account Manager",
        ]
    },
    {
        name: "Enterprise",
        icon: <Building2 size={20} className="text-gray-900" />,
        desc: "Custom-tailored solutions for massive scale and complex hierarchies.",
        priceMonthly: 349,
        priceYearly: 299,
        featured: false,
        btnText: "Contact Sales",
        features: [
            "Unlimited SKUs & Users",
            "Granular Role-based Workflows",
            "Vendor Action Portals",
            "Custom API Access",
            "Dedicated Success Manager",
        ],
        notIncluded: []
    }
];

const featureComparison = [
    {
        category: "Core Features",
        items: [
            { name: "Item Catalog", starter: "Basic", pro: "Advanced", enterprise: "Unlimited" },
            { name: "Stock Ledger", starter: true, pro: true, enterprise: true },
            { name: "Multi-Warehouse", starter: false, pro: "Up to 3", enterprise: "Unlimited" },
        ]
    },
    {
        category: "Sales & Procurement",
        items: [
            { name: "Invoicing & Quotes", starter: true, pro: true, enterprise: true },
            { name: "Purchase Orders (PO)", starter: false, pro: true, enterprise: true },
            { name: "Approval Workflows", starter: false, pro: "Standard", enterprise: "Advanced Rules" },
        ]
    },
    {
        category: "Security & Support",
        items: [
            { name: "Role-Based Access", starter: false, pro: true, enterprise: true },
            { name: "Audit Trail", starter: false, pro: true, enterprise: true },
            { name: "Support Level", starter: "Email", pro: "Priority", enterprise: "24/7 + Dedicated SL" },
        ]
    }
];

export default function PricingPaymentPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="bg-[#FCFDFD] min-h-screen" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

            {/* ── HERO ── */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 40%, transparent 100%)"
                    }} />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none bg-[#8B5CF6]" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[13px] font-semibold text-gray-500 mb-6 shadow-sm"
                    >
                        <CreditCard size={14} className="text-[#8B5CF6]" />
                        Simple & Transparent Pricing
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-gray-950 leading-[1.05] tracking-[-0.04em] mb-6"
                    >
                        Plans designed to <br className="hidden sm:block" /> scale with your business.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-10"
                    >
                        Start for free, then choose a plan that fits your needs. Zero hidden fees. Cancel anytime.
                    </motion.p>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mb-2"
                    >
                        <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>

                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-14 h-7 rounded-full bg-gray-950 flex items-center p-1 relative transition-colors focus:outline-none"
                            aria-label="Toggle Billing Cycle"
                        >
                            <motion.div
                                className="w-5 h-5 bg-white rounded-full shadow-sm"
                                animate={{ x: isAnnual ? 28 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>

                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>Annually</span>
                            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wide">
                                Save 20%
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── PRICING CARDS ── */}
            <section className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className={`relative rounded-[2rem] p-8 transition-all duration-300 ${plan.featured
                                ? "bg-white border-2 border-[#8B5CF6] shadow-[0_20px_60px_-15px_rgba(139,92,246,0.2)] md:-mt-4"
                                : "bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured ? "bg-violet-50" : "bg-gray-50"}`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                            </div>

                            <p className="text-sm text-gray-500 min-h-[40px] leading-relaxed mb-6">
                                {plan.desc}
                            </p>

                            <div className="mb-8 flex items-end gap-1.5">
                                <span className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
                                    ${isAnnual ? plan.priceYearly : plan.priceMonthly}
                                </span>
                                <span className="text-sm text-gray-400 font-medium pb-1.5">/ user / mo</span>
                            </div>

                            <button className={`w-full py-3.5 rounded-xl font-bold text-sm mb-8 transition-all active:scale-[0.98] ${plan.featured
                                ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-lg shadow-violet-200"
                                : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                                }`}>
                                {plan.btnText}
                            </button>

                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Features Included</p>
                                <ul className="space-y-3">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                                            <CheckCircle2 size={18} className="text-[#0EA96A] shrink-0 fill-emerald-50" />
                                            <span className="leading-tight pt-0.5">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {plan.notIncluded.length > 0 && (
                                    <>
                                        <div className="h-px bg-gray-50 my-5" />
                                        <ul className="space-y-3">
                                            {plan.notIncluded.map((f, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                                                    <X size={18} className="text-gray-300 shrink-0" />
                                                    <span className="leading-tight pt-0.5">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── DETAILED COMPARISON TABLE ── */}
            <section className="py-24 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Detailed Plan Comparison</h2>
                    <p className="text-lg text-gray-500">Dive into the specifics of what each plan brings to incredibly power your workspace.</p>
                </div>

                <div className="overflow-x-auto w-full border border-gray-100 rounded-3xl shadow-sm bg-white">
                    <table className="w-full text-left min-w-[800px] border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="p-5 font-semibold text-gray-500 w-1/4">Features</th>
                                <th className="p-5 font-bold text-gray-900 w-1/4">Starter</th>
                                <th className="p-5 font-bold text-[#8B5CF6] w-1/4">
                                    Professional<br />
                                    <span className="text-[10px] bg-violet-100 text-[#8B5CF6] px-2 py-0.5 rounded-full mt-1 inline-block">Popular</span>
                                </th>
                                <th className="p-5 font-bold text-gray-900 w-1/4">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featureComparison.map((group, i) => (
                                <React.Fragment key={i}>
                                    <tr className="bg-gray-50/50 border-y border-gray-100">
                                        <td colSpan={4} className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                            {group.category}
                                        </td>
                                    </tr>
                                    {group.items.map((item, j) => (
                                        <tr key={j} className="border-b border-gray-50 last:border-none hover:bg-gray-50/30 transition-colors text-sm">
                                            <td className="p-5 font-medium text-gray-700">{item.name}</td>

                                            {/* Starter */}
                                            <td className="p-5 text-gray-500">
                                                {typeof item.starter === "boolean"
                                                    ? (item.starter ? <CheckCircle2 size={18} className="text-[#0EA96A] opacity-80" /> : <X size={18} className="text-gray-300" />)
                                                    : item.starter}
                                            </td>

                                            {/* Pro */}
                                            <td className="p-5 text-gray-900 font-semibold bg-violet-50/30">
                                                {typeof item.pro === "boolean"
                                                    ? (item.pro ? <CheckCircle2 size={18} className="text-[#0EA96A]" /> : <X size={18} className="text-gray-300" />)
                                                    : item.pro}
                                            </td>

                                            {/* Enterprise */}
                                            <td className="p-5 text-gray-600">
                                                {typeof item.enterprise === "boolean"
                                                    ? (item.enterprise ? <CheckCircle2 size={18} className="text-[#0EA96A]" /> : <X size={18} className="text-gray-300" />)
                                                    : item.enterprise}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
