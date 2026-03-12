"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  PackagePlus,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Boxes,
  CheckCircle2,
  Clock,
  Shield,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <Shield size={18} className="text-blue-500" />,
    title: "Role-Based Control",
    desc: "Only authorised managers can approve or reject sensitive changes.",
  },
  {
    icon: <Bell size={18} className="text-amber-500" />,
    title: "Instant Alerts",
    desc: "Teams get notified the moment a request changes status.",
  },
  {
    icon: <TrendingUp size={18} className="text-emerald-500" />,
    title: "Full Audit Trail",
    desc: "Every action is logged with timestamps for compliance.",
  },
];

export default function FeaturesSectionInventory() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-32">
        <FeatureCard
          title="Sales Management"
          description="Track every sale in real-time. From order creation to invoice generation, manage your entire sales pipeline with smart status tracking and instant revenue insights."
          visual={<SalesVisual />}
        />
        <FeatureCard
          title="Purchase Management"
          description="Streamline your procurement process. Create purchase orders, manage suppliers, and automatically update inventory levels the moment goods are received."
          visual={<PurchaseVisual />}
          reversed
        />
        <FeatureCard
          title="Stock Control"
          description="Always know what's on your shelves. Monitor stock levels across multiple locations, get low-stock alerts, and make data-driven restocking decisions with ease."
          visual={<StockVisual />}
        />
      </div>
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">
                  {f.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  visual,
  reversed = false,
}) => (
  <div
    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${
      reversed ? "lg:flex-row-reverse" : ""
    }`}>
    <motion.div
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 space-y-4">
      <h3 className="text-2xl md:text-4xl text-gray-700 font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-[#666666] text-base md:text-lg leading-relaxed max-w-md">
        {description}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 w-full">
      {visual}
    </motion.div>
  </div>
);

// SALES VISUAL
const SalesVisual = () => {
  const orders = [
    {
      id: "#ORD-4821",
      customer: "Apex Retail Co.",
      amount: "$3,240",
      status: "Completed",
      color: "text-green-600 bg-green-50",
    },
    {
      id: "#ORD-4820",
      customer: "BlueLine Store",
      amount: "$1,850",
      status: "Processing",
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      id: "#ORD-4819",
      customer: "Nova Traders",
      amount: "$5,120",
      status: "Completed",
      color: "text-green-600 bg-green-50",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative flex flex-col gap-4 min-h-[300px] md:min-h-[400px] overflow-hidden justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-orange-100 via-rose-100 to-pink-100 blur-[60px] opacity-60 mix-blend-multiply pointer-events-none" />

      {/* Revenue summary */}
      <div className="relative z-10 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Total Revenue</p>
          <p className="text-2xl font-bold tracking-tight text-gray-900">
            $24,380
          </p>
        </div>
        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2.5 py-1.5 rounded-xl text-xs font-semibold">
          <TrendingUp size={12} />
          +12.4% this month
        </div>
      </div>

      {/* Orders list */}
      <div className="relative z-10 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Recent Orders
        </p>
        <div className="space-y-2.5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <ShoppingCart size={13} className="text-gray-400" />
                <span className="font-mono text-gray-500 text-xs">
                  {order.id}
                </span>
                <span className="text-gray-700 font-medium hidden sm:inline">
                  {order.customer}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  {order.amount}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${order.color}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PURCHASE VISUAL
const PurchaseVisual = () => {
  const items = [
    {
      name: "Office Chairs (x20)",
      supplier: "FurniPro Ltd.",
      value: "$2,400",
      icon: "📦",
    },
    {
      name: "Laptop Units (x10)",
      supplier: "TechSource",
      value: "$12,000",
      icon: "💻",
    },
    {
      name: "Stationery Pack",
      supplier: "OfficeWorld",
      value: "$340",
      icon: "✏️",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative flex flex-col gap-4 min-h-[300px] md:min-h-[400px] overflow-hidden justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-100 via-indigo-100 to-violet-100 blur-[60px] opacity-50 mix-blend-multiply pointer-events-none" />

      {/* PO header */}
      <div className="relative z-10 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-400">Purchase Order</p>
            <p className="font-bold text-gray-900 text-sm">PO-2024-0091</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 flex items-center gap-1">
            <Clock size={11} /> Pending Approval
          </span>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-xs py-1.5 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-400">{item.supplier}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action row */}
      <div className="relative z-10 flex gap-3">
        <div className="flex-1 bg-white rounded-2xl border border-gray-100/80 shadow-[0_4px_15px_rgb(0,0,0,0.03)] p-3.5 flex items-center gap-2">
          <ArrowDownLeft size={14} className="text-blue-500" />
          <div>
            <p className="text-[10px] text-gray-400">Supplier</p>
            <p className="text-xs font-semibold text-gray-700">3 Active</p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-2xl border border-gray-100/80 shadow-[0_4px_15px_rgb(0,0,0,0.03)] p-3.5 flex items-center gap-2">
          <CheckCircle2 size={14} className="text-green-500" />
          <div>
            <p className="text-[10px] text-gray-400">Received</p>
            <p className="text-xs font-semibold text-gray-700">$14,740</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// STOCK VISUAL
const StockVisual = () => {
  const stockItems = [
    {
      name: "Wireless Keyboards",
      qty: 142,
      max: 200,
      color: "bg-green-400",
      status: "Healthy",
    },
    {
      name: "USB-C Hubs",
      qty: 23,
      max: 100,
      color: "bg-yellow-400",
      status: "Low Stock",
    },
    {
      name: "Monitor Stands",
      qty: 8,
      max: 80,
      color: "bg-red-400",
      status: "Critical",
    },
    {
      name: "Desk Lamps",
      qty: 67,
      max: 100,
      color: "bg-blue-400",
      status: "Good",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative flex flex-col gap-4 min-h-[300px] md:min-h-[400px] overflow-hidden justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-teal-100 via-emerald-100 to-cyan-100 blur-[60px] opacity-50 mix-blend-multiply pointer-events-none" />

      {/* Summary row */}
      <div className="relative z-10 flex gap-3">
        {[
          {
            label: "Total SKUs",
            value: "1,284",
            icon: <Boxes size={13} className="text-teal-500" />,
          },
          {
            label: "Low Stock",
            value: "14 items",
            icon: <BarChart3 size={13} className="text-orange-500" />,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 bg-white rounded-2xl border border-gray-100/80 shadow-[0_4px_15px_rgb(0,0,0,0.03)] p-3.5 flex items-center gap-2">
            {s.icon}
            <div>
              <p className="text-[10px] text-gray-400">{s.label}</p>
              <p className="text-sm font-bold text-gray-800">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stock levels */}
      <div className="relative z-10 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 md:p-5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Stock Levels
        </p>
        <div className="space-y-3">
          {stockItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-medium text-gray-700">{item.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400">
                    {item.qty}/{item.max}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                      item.status === "Critical"
                        ? "bg-red-50 text-red-500"
                        : item.status === "Low Stock"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-green-50 text-green-600"
                    }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${(item.qty / item.max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
