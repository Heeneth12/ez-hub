"use client";
import React from "react";
import {
  TrendingUp,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Users,
  Server,
  ShoppingCart,
  ArrowUpRight,
  Box,
} from "lucide-react";

export default function SaaSFeatureGrid() {
  return (
    <section className="bg-gray-50 py-24 font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Everything you need to <br className="hidden md:block" />
            <span className="text-gray-400">scale your operations.</span>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
            A unified interface for inventory tracking, and next-generation AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. MAIN DASHBOARD (Sales & Stock) - Large Anchor Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Executive Dashboard
                </h3>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">
                  Real-time view of sales performance versus available
                  inventory.
                </p>
              </div>
              <button className="text-xs font-semibold bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-gray-600 transition-colors">
                View Report
              </button>
            </div>

            {/* MOCK UI: Chart Area */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 h-64 relative overflow-hidden group-hover:border-blue-100 transition-colors">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    Monthly Revenue
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    $124,500
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md flex items-center gap-1">
                    <TrendingUp size={12} /> +12.5%
                  </span>
                </div>
              </div>

              {/* Bars */}
              <div className="flex items-end justify-between gap-2 h-32 mt-auto">
                {[35, 55, 40, 70, 50, 85, 60, 95].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-blue-100 rounded-t-md relative overflow-hidden group/bar hover:bg-blue-600 transition-colors duration-300"
                    style={{ height: `${h}%` }}></div>
                ))}
              </div>

              {/* Overlay Grid Lines */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 95%, #e5e7eb 95%)",
                  backgroundSize: "100% 20%",
                }}></div>
            </div>
          </div>

          {/* 2. PROCUREMENT / PURCHASES - Vertical List */}
          <div className="md:col-span-1 md:row-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
            <div className="mb-6 relative z-10">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <ShoppingCart size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Procurement</h3>
              <p className="text-xs text-gray-500 mt-1">
                Recent purchase orders
              </p>
            </div>

            {/* MOCK UI: PO List */}
            <div className="space-y-3 flex-1 overflow-hidden relative">
              {[
                {
                  id: "#PO-4022",
                  item: "MacBook Pro M3",
                  status: "Pending",
                  color: "bg-yellow-100 text-yellow-700",
                },
                {
                  id: "#PO-4021",
                  item: "Ergo Chairs (x5)",
                  status: "Approved",
                  color: "bg-green-100 text-green-700",
                },
                {
                  id: "#PO-4020",
                  item: "Dell Monitors",
                  status: "Paid",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  id: "#PO-4019",
                  item: "USB-C Hubs",
                  status: "Rejected",
                  color: "bg-red-100 text-red-700",
                },
              ].map((po, i) => (
                <div
                  key={i}
                  className="group/item flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer">
                  <div>
                    <div className="text-xs font-bold text-gray-900">
                      {po.id}
                    </div>
                    <div className="text-[10px] text-gray-500">{po.item}</div>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-semibold ${po.status === "Pending" ? "animate-pulse" : ""} ${po.color}`}>
                    {po.status}
                  </span>
                </div>
              ))}
              {/* Fade at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>

          {/* 3. PAYMENTS - Compact Visual */}
          <div className="md:col-span-1 bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <CreditCard size={80} className="transform rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Payments</h3>

              {/* Mock Card UI */}
              <div className="mt-4 bg-gray-900 rounded-xl p-4 text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-4 opacity-50">
                  <CreditCard size={14} />
                  <span className="text-[10px]">Business Corp</span>
                </div>
                <div className="text-lg font-mono tracking-widest mb-2">
                  •••• 4242
                </div>
                <div className="flex justify-between text-[10px] opacity-70">
                  <span>Exp 12/28</span>
                  <span>CVC •••</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. USER MANAGEMENT - Compact Visual */}
          <div className="md:col-span-1 bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Team Access</h3>
            </div>

            {/* Avatar Stack */}
            <div className="mt-4">
              <div className="flex items-center -space-x-2 overflow-hidden mb-3 pl-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    U{i + 1}
                  </div>
                ))}
                <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                  +12
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-medium text-gray-600 border border-gray-200">
                  Admin
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-medium text-gray-600 border border-gray-200">
                  Manager
                </span>
              </div>
            </div>
          </div>

          {/* 5. MCP SERVER / AI - Wide Dark Card */}
          <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
            {/* Gradient Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 rounded-full blur-[60px] opacity-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 h-full">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/10 border border-white/10 text-xs font-medium text-blue-200 mb-4">
                  <Server size={12} /> MCP Protocol Ready
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Agent Integration
                </h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Connect external AI agents securely to read inventory and
                  trigger automated actions via our MCP Server.
                </p>
              </div>

              {/* Mock Terminal */}
              <div className="w-full md:w-64 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 p-3 font-mono text-[10px] shadow-2xl">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-500">
                    # Connected to Inventory_DB
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-400">➜</span>
                    <span className="text-white">fetch_stock_levels()</span>
                  </div>
                  <div className="text-green-400 pl-4">{`{ "status": "200 OK", "items": 1450 }`}</div>
                  <div className="flex gap-2 animate-pulse">
                    <span className="text-blue-400">➜</span>
                    <span className="text-white w-2 h-4 bg-gray-500 block"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. APPROVALS - Wide Interactive Card */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600 mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Smart Approvals
                  </h3>
                  <p className="text-sm text-gray-500 max-w-sm mt-1">
                    Automated workflows for high-value purchase orders.
                  </p>
                </div>
                <div className="hidden md:flex -space-x-1">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-xs">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
              </div>

              {/* Mock Approval Action */}
              <div className="mt-6 bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                    <Box size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Bulk Order #9921
                    </div>
                    <div className="text-xs text-gray-500">
                      $2,400.00 • Office Supplies
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <ArrowUpRight size={16} className="rotate-45" />
                  </button>
                  <button className="h-8 px-3 flex items-center gap-1 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
