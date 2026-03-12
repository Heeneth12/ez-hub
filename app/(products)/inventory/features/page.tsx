"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    BarChart3, Tags, Boxes, ShoppingCart, TrendingUp,
    CheckSquare, Search, CheckCircle2, Clock, ArrowUpRight,
    ArrowDownLeft, ShieldCheck, Zap, Filter, PackageOpen,
    XCircle, FileText, ChevronRight, Sparkles
} from "lucide-react";

/* ─────────────────────────────────────────────
   Design tokens
───────────────────────────────────────────── */
const tokens = {
    heading: "font-[\'DM_Sans\',_sans-serif] tracking-[-0.03em]",
    mono: "font-mono",
};

/* ─────────────────────────────────────────────
   Feature data
───────────────────────────────────────────── */
const features = [
    {
        badge: "Analytics",
        accentClass: "text-[#4F7FFF]",
        bgAccent: "bg-[#EEF3FF]",
        borderAccent: "border-[#D1DCFF]",
        icon: <BarChart3 size={20} />,
        title: "Intelligent Dashboards & Analytics",
        description: "Complete visibility over business operations. Advanced charting transforms raw data into actionable insights — spot trends, track KPIs, and make confident decisions.",
        points: ["Real-time data visualization with dynamic charts", "Vendor-specific portals and analytics", "Instant overview of revenue, stock & pending tasks"],
        visual: <DashboardVisual />,
        reversed: false,
    },
    {
        badge: "Product Catalog",
        accentClass: "text-[#0EA96A]",
        bgAccent: "bg-[#EDFBF4]",
        borderAccent: "border-[#C2F0DB]",
        icon: <Tags size={20} />,
        title: "Catalog & Item Management",
        description: "Organize your product portfolio with precision. Define items, variants, and services — categorize effectively while distributing updated pricing across your organization.",
        points: ["Debounced search & filtering for lightning performance", "Multi-level item categorization & tagging", "Seamless price management and adjustments"],
        visual: <ItemVisual />,
        reversed: true,
    },
    {
        badge: "Purchasing",
        accentClass: "text-[#8B5CF6]",
        bgAccent: "bg-[#F3EFFE]",
        borderAccent: "border-[#DDD0FC]",
        icon: <ShoppingCart size={20} />,
        title: "End-to-End Procurement",
        description: "Control purchasing from request to receipt. Full workflows for PRQ, PO, GRN, and Purchase Returns ensure complete accountability at every stage.",
        points: ["Automated transition from PRQ → PO → GRN", "Real-time stock update upon Goods Receipt", "Supplier history and performance tracking"],
        visual: <PurchaseVisual />,
        reversed: false,
    },
    {
        badge: "Sales",
        accentClass: "text-[#F43F8A]",
        bgAccent: "bg-[#FFF0F6]",
        borderAccent: "border-[#FFD0E6]",
        icon: <TrendingUp size={20} />,
        title: "Advanced Sales Lifecycle",
        description: "Accelerate order-to-cash. From quotes to Sales Orders, Invoices, Delivery Challans, Payments, and Returns — the complete revenue cycle in one place.",
        points: ["One-click conversion from Quote to Sales Order", "Partial delivery management and invoicing", "Real-time payment tracking integration"],
        visual: <SalesVisual />,
        reversed: true,
    },
    {
        badge: "Inventory",
        accentClass: "text-[#F97316]",
        bgAccent: "bg-[#FFF4EC]",
        borderAccent: "border-[#FFD8B8]",
        icon: <Boxes size={20} />,
        title: "Stock Control & Ledger",
        description: "A meticulous record of every movement. View real-time stock levels and trace every transaction through the immutable Stock Ledger.",
        points: ["Immutable Stock Ledger for absolute traceability", "Real-time cross-location tracking", "Guided and audited manual stock adjustments"],
        visual: <StockVisual />,
        reversed: false,
    },
    {
        badge: "Security & Access",
        accentClass: "text-[#06B6D4]",
        bgAccent: "bg-[#EDF9FC]",
        borderAccent: "border-[#BAE8F4]",
        icon: <CheckSquare size={20} />,
        title: "Unified Approval Console",
        description: "Implement robust workflow routing for all document authorizations based on strict role-based access controls and team hierarchy.",
        points: ["Centralized dashboard for all pending approvals", "Granular role-based key access control", "Detailed audit trails for compliance"],
        visual: <ApprovalVisual />,
        reversed: true,
    },
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function FeaturesPage() {
    return (
        <div className="bg-white min-h-screen overflow-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

            {/* ── HERO ── */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Subtle grid bg */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)"
                    }} />
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, #4F7FFF 0%, transparent 70%)" }} />

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[13px] font-semibold text-gray-500 mb-8 shadow-sm"
                    >
                        <Sparkles size={13} className="text-[#4F7FFF]" />
                        Platform Capabilities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-950 leading-[1.05] tracking-[-0.04em] mb-6"
                    >
                        Everything to scale<br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4F7FFF 0%, #A855F7 100%)" }}>
                            your supply chain.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16 }}
                        className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-10"
                    >
                        Enterprise-grade inventory management with real-time reactivity, approval workflows, and deeply integrated modules.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.22 }}
                        className="flex items-center justify-center gap-3"
                    >
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-950/10">
                            Get Started <ChevronRight size={15} />
                        </button>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">
                            View Demo
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── FEATURE ROWS ── */}
            <section className="max-w-6xl mx-auto px-6 pb-32 flex flex-col gap-32 md:gap-40">
                {features.map((f, i) => (
                    <FeatureRow key={i} {...f} index={i} />
                ))}
            </section>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Feature Row
───────────────────────────────────────────── */
interface FeatureRowProps {
    badge: string;
    accentClass: string;
    bgAccent: string;
    borderAccent: string;
    icon: ReactNode;
    title: string;
    description: string;
    points: string[];
    visual: ReactNode;
    reversed: boolean;
    index: number;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
    badge, accentClass, bgAccent, borderAccent, icon, title, description, points, visual, reversed
}) => (
    <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reversed ? "lg:flex-row-reverse" : ""}`}>
        {/* Content */}
        <motion.div
            initial={{ opacity: 0, x: reversed ? 32 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-lg"
        >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-5 ${bgAccent} ${borderAccent} ${accentClass}`}>
                <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
                {badge}
            </div>

            <h2 className="text-3xl md:text-[40px] font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mb-4">
                {title}
            </h2>

            <p className="text-base text-gray-500 leading-relaxed mb-8">
                {description}
            </p>

            <ul className="flex flex-col gap-3">
                {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                        <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${accentClass}`} />
                        {p}
                    </li>
                ))}
            </ul>
        </motion.div>

        {/* Visual */}
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="flex-1 w-full"
        >
            {visual}
        </motion.div>
    </div>
);

/* ─────────────────────────────────────────────
   Shared card wrapper
───────────────────────────────────────────── */
const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <div className={`bg-white rounded-2xl border border-gray-100/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${className}`}>
        {children}
    </div>
);

const VisualShell = ({ children, tint }: { children: ReactNode; tint: string }) => (
    <div className={`relative w-full aspect-[4/3] rounded-3xl ${tint} border border-gray-100 p-6 overflow-hidden`}>
        {children}
    </div>
);

/* ─────────────────────────────────────────────
   VISUAL: Dashboard
───────────────────────────────────────────── */
function DashboardVisual() {
    const bars = [38, 55, 42, 78, 52, 88, 70];
    return (
        <VisualShell tint="bg-[#F8FAFF]">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <p className="text-[13px] font-semibold text-gray-400 mb-0.5">Business Overview</p>
                    <p className="text-[11px] text-gray-300">Real-time metrics · This Month</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-gray-100 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-gray-500 shadow-sm">
                    <Filter size={11} /> Filter
                </div>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                    { label: "Revenue", value: "$124.5K", change: "+14.5%", up: true },
                    { label: "Orders", value: "1,204", change: "+5.2%", up: true },
                    { label: "Vendors", value: "38", change: "+2", up: true },
                ].map((s, i) => (
                    <Card key={i} className="p-3">
                        <p className="text-[10px] text-gray-400 mb-1">{s.label}</p>
                        <p className="text-[15px] font-bold text-gray-900 leading-none mb-1.5">{s.value}</p>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
                            <ArrowUpRight size={10} />{s.change}
                        </span>
                    </Card>
                ))}
            </div>

            {/* Chart */}
            <Card className="flex-1 p-4">
                <p className="text-[11px] font-semibold text-gray-400 mb-3">Weekly Revenue</p>
                <div className="flex items-end gap-1.5 h-20">
                    {bars.map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm overflow-hidden flex flex-col justify-end" style={{ height: "100%" }}>
                            <div
                                className="rounded-sm transition-all duration-700"
                                style={{
                                    height: `${h}%`,
                                    background: i === 5 ? "linear-gradient(180deg, #4F7FFF, #6B9FFF)" : "#E8EEFF"
                                }}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i} className="flex-1 text-center text-[10px] text-gray-300">{d}</span>
                    ))}
                </div>
            </Card>
        </VisualShell>
    );
}

/* ─────────────────────────────────────────────
   VISUAL: Item Catalog
───────────────────────────────────────────── */
function ItemVisual() {
    const rows = [
        { name: "Premium Office Chair", sku: "CH-001", cat: "Furniture", price: "$299" },
        { name: "Standing Desk Pro", sku: "DK-204", cat: "Furniture", price: "$599" },
        { name: "Mechanical Keyboard", sku: "KB-992", cat: "Electronics", price: "$120" },
        { name: "UltraWide Monitor", sku: "MN-400", cat: "Electronics", price: "$850" },
    ];
    return (
        <VisualShell tint="bg-[#F7FDF9]">
            {/* Search */}
            <div className="flex gap-2 mb-4">
                <div className="flex-1 bg-white border border-gray-100 rounded-xl px-3 py-2 flex items-center gap-2 text-[12px] text-gray-400 shadow-sm">
                    <Search size={13} className="shrink-0" /> Search items, SKUs&hellip;
                </div>
                <button className="bg-[#0EA96A] text-white rounded-xl px-3.5 py-2 text-[12px] font-semibold shadow-md shadow-emerald-100 whitespace-nowrap">+ Add Item</button>
            </div>

            {/* Table */}
            <Card className="overflow-hidden">
                <div className="grid grid-cols-12 px-4 py-2.5 bg-gray-50/60 border-b border-gray-100 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-4">Category</div>
                    <div className="col-span-3 text-right">Price</div>
                </div>
                {rows.map((r, i) => (
                    <div key={i} className={`grid grid-cols-12 px-4 py-3 items-center ${i < rows.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/60 transition-colors`}>
                        <div className="col-span-5">
                            <p className="text-[13px] font-semibold text-gray-800 leading-none mb-0.5">{r.name}</p>
                            <p className="text-[10px] font-mono text-gray-400">{r.sku}</p>
                        </div>
                        <div className="col-span-4">
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${r.cat === "Furniture" ? "bg-[#EDFBF4] text-[#0EA96A]" : "bg-[#EEF3FF] text-[#4F7FFF]"}`}>
                                {r.cat}
                            </span>
                        </div>
                        <div className="col-span-3 text-right text-[13px] font-bold text-gray-900">{r.price}</div>
                    </div>
                ))}
            </Card>
        </VisualShell>
    );
}

/* ─────────────────────────────────────────────
   VISUAL: Purchase Workflow
───────────────────────────────────────────── */
function PurchaseVisual() {
    const steps = [
        { label: "Purchase Request", sub: "PRQ-2024-089 · Approved", icon: <FileText size={16} />, state: "done", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
        { label: "Purchase Order", sub: "PO-2024-112 · Sent to Vendor", icon: <ShoppingCart size={16} />, state: "active", color: "bg-[#8B5CF6] text-white border-[#8B5CF6]" },
        { label: "Goods Receipt Note", sub: "Awaiting delivery", icon: <PackageOpen size={16} />, state: "pending", color: "bg-gray-100 text-gray-400 border-gray-100" },
    ];
    return (
        <VisualShell tint="bg-[#FAF8FF]">
            <div className="h-full flex flex-col justify-center gap-0 max-w-xs mx-auto">
                {steps.map((s, i) => (
                    <React.Fragment key={i}>
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className={`flex items-center gap-3 px-4 py-3.5 ${s.state === "active" ? "shadow-[0_4px_20px_rgba(139,92,246,0.18)] border-[#C4B5FD]" : ""}`}>
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${s.color}`}>
                                    {s.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-[13px] font-semibold leading-none mb-0.5 ${s.state === "pending" ? "text-gray-400" : "text-gray-900"}`}>{s.label}</p>
                                    <p className={`text-[11px] truncate ${s.state === "active" ? "text-[#8B5CF6]" : "text-gray-400"}`}>{s.sub}</p>
                                </div>
                                {s.state === "done" && <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />}
                                {s.state === "active" && <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse shrink-0" />}
                                {s.state === "pending" && <Clock size={14} className="text-amber-400 shrink-0" />}
                            </Card>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <div className="flex items-center ml-8 py-1">
                                <div className={`w-px h-5 ${i === 0 ? "bg-emerald-200" : "bg-gray-100"}`} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </VisualShell>
    );
}

/* ─────────────────────────────────────────────
   VISUAL: Invoice / Sales
───────────────────────────────────────────── */
function SalesVisual() {
    return (
        <VisualShell tint="bg-[#FFF8FA]">
            <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                    <Card className="p-5 shadow-[0_8px_32px_rgba(244,63,138,0.10)]">
                        {/* Header */}
                        <div className="flex justify-between items-start pb-4 mb-4 border-b border-gray-50">
                            <div>
                                <p className="text-[10px] font-bold text-[#F43F8A] uppercase tracking-widest mb-1">Tax Invoice</p>
                                <p className="text-lg font-bold text-gray-950 tracking-tight">INV-98230</p>
                                <p className="text-[12px] text-gray-400 mt-0.5">Acme Corp. Ltd</p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-lg text-[11px] font-bold">
                                <CheckCircle2 size={11} /> Paid
                            </div>
                        </div>

                        {/* Line items */}
                        <div className="space-y-2.5 mb-4">
                            {[
                                { label: "Enterprise License (×1)", val: "$4,500.00" },
                                { label: "Setup & Integration", val: "$1,200.00" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between text-[13px]">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-800">{item.val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="bg-gray-950 rounded-xl p-4 flex justify-between items-center">
                            <span className="text-[12px] font-semibold text-gray-400">Total</span>
                            <span className="text-xl font-bold text-white tracking-tight">$5,700.00</span>
                        </div>
                    </Card>

                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute -bottom-5 -right-3 bg-white border border-gray-100 rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-lg"
                    >
                        <div className="w-7 h-7 rounded-lg bg-[#FFF0F6] flex items-center justify-center">
                            <Zap size={13} className="text-[#F43F8A]" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 leading-none mb-0.5">Payment via</p>
                            <p className="text-[12px] font-bold text-gray-800">Stripe</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </VisualShell>
    );
}

/* ─────────────────────────────────────────────
   VISUAL: Stock Ledger
───────────────────────────────────────────── */
function StockVisual() {
    const ledger = [
        { doc: "GRN-4421", type: "IN", qty: "+500", item: "Office Chairs", date: "Today, 09:41 AM" },
        { doc: "DC-8832", type: "OUT", qty: "-120", item: "Laptop Stands", date: "Today, 08:15 AM" },
        { doc: "ADJ-102", type: "ADJ", qty: "-4", item: "Monitors", date: "Yesterday" },
    ];
    const typeStyle: Record<string, string> = {
        IN: "bg-emerald-50 text-emerald-700",
        OUT: "bg-rose-50 text-rose-600",
        ADJ: "bg-amber-50 text-amber-700",
    };
    return (
        <VisualShell tint="bg-[#FFFAF6]">
            {/* Counters */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[
                    { label: "Stock In", value: "1,402", icon: <ArrowDownLeft size={13} className="text-emerald-500" />, color: "text-emerald-600" },
                    { label: "Stock Out", value: "834", icon: <ArrowUpRight size={13} className="text-rose-500" />, color: "text-rose-600" },
                ].map((s, i) => (
                    <Card key={i} className="p-3.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase mb-2">
                            {s.icon} {s.label}
                        </div>
                        <p className={`text-[22px] font-bold leading-none ${s.color}`}>{s.value}</p>
                        <p className="text-[10px] text-gray-300 mt-1">Units this week</p>
                    </Card>
                ))}
            </div>

            {/* Ledger */}
            <Card className="overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2.5 bg-gray-50/60 border-b border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Stock Ledger</span>
                    <span className="text-[10px] font-semibold text-[#F97316]">View All →</span>
                </div>
                {ledger.map((l, i) => (
                    <div key={i} className={`flex items-center justify-between px-4 py-3 ${i < ledger.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition-colors cursor-pointer`}>
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md min-w-[32px] text-center ${typeStyle[l.type]}`}>{l.type}</span>
                            <div>
                                <p className="text-[13px] font-semibold text-gray-800 leading-none">{l.doc}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">{l.item}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`text-[13px] font-bold ${l.type === "IN" ? "text-emerald-600" : l.type === "OUT" ? "text-rose-600" : "text-amber-600"}`}>{l.qty}</p>
                            <p className="text-[10px] text-gray-300 mt-0.5">{l.date}</p>
                        </div>
                    </div>
                ))}
            </Card>
        </VisualShell>
    );
}

/* ─────────────────────────────────────────────
   VISUAL: Approval Console
───────────────────────────────────────────── */
function ApprovalVisual() {
    return (
        <VisualShell tint="bg-[#F6FDFF]">
            <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                    {/* Stack shadow cards */}
                    <div className="absolute inset-0 bg-white/50 rounded-2xl border border-gray-100 translate-y-3 scale-[0.97]" />
                    <div className="absolute inset-0 bg-white/70 rounded-2xl border border-gray-100 translate-y-1.5 scale-[0.99]" />

                    {/* Main card */}
                    <Card className="relative p-5 shadow-[0_8px_32px_rgba(6,182,212,0.10)]">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={17} className="text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Approval Required</p>
                                    <p className="text-[17px] font-bold text-gray-950 tracking-tight">PO-2024-504</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold bg-red-50 text-red-600 px-2 py-1 rounded-lg border border-red-100">Urgent</span>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-3.5 mb-4 border border-gray-100">
                            <div className="flex justify-between text-[13px] mb-1.5">
                                <span className="text-gray-500">Total Value</span>
                                <span className="font-bold text-gray-900">$18,450.00</span>
                            </div>
                            <div className="flex justify-between text-[12px]">
                                <span className="text-gray-400">Requested by</span>
                                <span className="font-medium text-gray-600">Sarah Jenkins</span>
                            </div>
                        </div>

                        <div className="flex gap-2.5">
                            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                <XCircle size={14} /> Reject
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#06B6D4] text-white text-[13px] font-semibold shadow-md shadow-cyan-100 hover:bg-[#0891B2] transition-colors">
                                <CheckCircle2 size={14} /> Approve
                            </button>
                        </div>
                    </Card>

                    {/* Queue indicator */}
                    <div className="absolute -top-4 -right-3 bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                        <div className="flex -space-x-1.5">
                            {["bg-[#4F7FFF]", "bg-[#F43F8A]", "bg-[#F97316]"].map((c, i) => (
                                <div key={i} className={`w-5 h-5 rounded-full border-2 border-white ${c}`} />
                            ))}
                        </div>
                        <span className="text-[11px] font-semibold text-gray-600">+12 pending</span>
                    </div>
                </div>
            </div>
        </VisualShell>
    );
}