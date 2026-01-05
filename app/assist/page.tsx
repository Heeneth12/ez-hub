"use client";
import React, { useState, useEffect } from "react";
import { 
  MessageSquare, 
  LifeBuoy, 
  CheckCircle2, 
  Clock, 
  BarChart2, 
  Zap, 
  Users, 
  ArrowRight,
  Search,
  MoreVertical,
  Paperclip,
  Send,
  Command,
  Inbox,
  Layout,
  Settings,
  Bell
} from "lucide-react";
import Link from "next/link";

export default function IAssistProLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500/20 selection:text-blue-700">
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <LifeBuoy size={20} className="animate-spin-slow" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">iAssist</span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-md">
            {['Product', 'Solutions', 'Enterprise', 'Pricing'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900">Log In</button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/80 via-indigo-50/50 to-transparent blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
              New: AI Voice Agent
            </span>
            <ArrowRight size={12} className="text-slate-400" />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
            Customer support, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              reimagined by AI.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed font-medium">
            Unify your inbox, automate 40% of queries, and delight customers 
            with the helpdesk built for the AI era.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button className="h-14 px-8 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Start 14-Day Free Trial
              <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-4 px-6 text-sm font-semibold text-slate-600">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px]`}>User</div>)}
                </div>
                <span>Trusted by 4,000+ teams</span>
            </div>
          </div>
        </div>

        {/* --- HIGH FIDELITY DASHBOARD MOCKUP --- */}
        <div className="max-w-6xl mx-auto relative group perspective-1000">
          {/* Glow behind dashboard */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative bg-[#FAFAFA] rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex h-[700px]">
            
            {/* 1. Slim Sidebar */}
            <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-20">
               <div className="p-2 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-200"><Inbox size={20}/></div>
               <div className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"><Users size={20}/></div>
               <div className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"><BarChart2 size={20}/></div>
               <div className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"><Settings size={20}/></div>
               <div className="mt-auto p-2"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm"/></div>
            </div>

            {/* 2. Ticket List Panel */}
            <div className="w-80 bg-white border-r border-slate-200 flex flex-col z-10">
               <div className="h-16 border-b border-slate-100 flex items-center justify-between px-5">
                  <span className="font-bold text-slate-800">Inbox</span>
                  <div className="flex gap-2 text-slate-400">
                      <Search size={16} className="cursor-pointer hover:text-slate-600"/>
                      <Layout size={16} className="cursor-pointer hover:text-slate-600"/>
                  </div>
               </div>
               
               <div className="flex-1 overflow-y-auto">
                 {[
                   { user: "Emma W.", title: "Can't update billing", tag: "Urgent", tagColor: "bg-red-50 text-red-600", time: "2m", active: true },
                   { user: "Liam K.", title: "API Documentation", tag: "Question", tagColor: "bg-blue-50 text-blue-600", time: "12m", active: false },
                   { user: "Sophia L.", title: "Enterprise Pricing", tag: "Sales", tagColor: "bg-green-50 text-green-600", time: "45m", active: false },
                   { user: "Support Bot", title: "Automated Report", tag: "System", tagColor: "bg-slate-50 text-slate-500", time: "1h", active: false },
                   { user: "Noah R.", title: "Bug in dark mode", tag: "Bug", tagColor: "bg-amber-50 text-amber-600", time: "3h", active: false },
                 ].map((t, i) => (
                    <div key={i} className={`p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors group ${t.active ? 'bg-blue-50/50' : ''}`}>
                       <div className="flex justify-between items-start mb-1">
                          <span className={`font-semibold text-sm ${t.active ? 'text-blue-700' : 'text-slate-700'}`}>{t.user}</span>
                          <span className="text-[10px] text-slate-400">{t.time}</span>
                       </div>
                       <p className={`text-xs mb-2 ${t.active ? 'text-blue-900/70 font-medium' : 'text-slate-500'}`}>{t.title}</p>
                       <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${t.tagColor}`}>{t.tag}</span>
                    </div>
                 ))}
               </div>
            </div>

            {/* 3. Main Chat Area */}
            <div className="flex-1 bg-slate-50/50 flex flex-col relative">
               {/* Header */}
               <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 shadow-sm z-10">
                  <div className="flex items-center gap-3">
                     <span className="bg-slate-100 p-1.5 rounded text-xs font-bold text-slate-500">#2942</span>
                     <h2 className="font-bold text-slate-800 text-sm">Can't update billing information</h2>
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="h-8 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50">Assign</button>
                     <button className="h-8 px-3 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 flex items-center gap-1">
                        <CheckCircle2 size={14}/> Resolve
                     </button>
                  </div>
               </div>

               {/* Chat Flow */}
               <div className="flex-1 p-8 space-y-8 overflow-y-auto">
                  {/* Message 1 */}
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs shrink-0 border border-white shadow-sm">EW</div>
                     <div className="space-y-1 max-w-[85%]">
                        <div className="bg-white border border-slate-200 p-5 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 leading-relaxed">
                           <p>Hi team, I'm trying to update my credit card for the Pro plan, but every time I hit "Save", the page just refreshes and the old card is still there. I've tried clearing cache but it didn't help.</p>
                        </div>
                        <p className="text-[10px] text-slate-400 pl-2">Emma W. • 10:42 AM</p>
                     </div>
                  </div>

                  {/* AI Note (Internal) */}
                  <div className="flex gap-4 opacity-90">
                     <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0 border border-white shadow-sm">
                        <Zap size={16} />
                     </div>
                     <div className="w-full">
                        <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl text-sm relative overflow-hidden">
                           <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-xs uppercase tracking-wide">
                              <Zap size={12}/> AI Insight
                           </div>
                           <p className="text-slate-600 text-xs mb-3">
                              This user experienced a <strong>402 Payment Error</strong> in the logs 5 minutes ago. It seems to be a gateway timeout.
                           </p>
                           <div className="flex gap-2">
                              <button className="bg-white border border-amber-200 text-amber-700 text-xs px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-50">View Error Log</button>
                              <button className="bg-white border border-amber-200 text-amber-700 text-xs px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-50">Reset Session</button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Reply Box */}
                  <div className="mt-8 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 p-1 focus-within:ring-2 focus-within:ring-blue-100 transition-shadow">
                     <div className="flex items-center gap-2 border-b border-slate-50 p-2 bg-slate-50/50 rounded-t-lg text-slate-400">
                         <span className="text-xs font-bold text-slate-500 px-2">Reply</span>
                         <span className="text-xs hover:text-blue-600 cursor-pointer px-2">Note</span>
                     </div>
                     <textarea 
                        className="w-full resize-none outline-none text-sm p-4 text-slate-700 h-24 placeholder:text-slate-300 bg-transparent" 
                        placeholder="Type / for snippets or just start typing..." 
                        defaultValue="Hi Emma, thanks for reaching out. I see a timeout error on our end. Could you try..."
                     ></textarea>
                     <div className="flex justify-between items-center px-3 pb-3">
                        <div className="flex gap-3 text-slate-400">
                           <Paperclip size={18} className="cursor-pointer hover:text-slate-600 transition-colors"/>
                           <Command size={18} className="cursor-pointer hover:text-slate-600 transition-colors"/>
                        </div>
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
                           Send Reply <Send size={12} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 4. Customer Profile (Right Sidebar - Collapsible style) */}
            <div className="w-72 bg-white border-l border-slate-200 hidden lg:block p-6 z-10">
               <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center text-pink-600 font-bold text-xl">EW</div>
                  <h3 className="font-bold text-slate-900">Emma Watson</h3>
                  <p className="text-xs text-slate-400">emma@acmecorp.com</p>
               </div>
               
               <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Subscription</h4>
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-slate-700">Pro Plan</span>
                          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Active</span>
                      </div>
                      <p className="text-xs text-slate-500">$49/mo • Renews in 12d</p>
                  </div>

                  <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Recent Tickets</h4>
                      <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-600 truncate max-w-[140px]">Export failed to PDF</span>
                              <span className="text-slate-400">2d ago</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-600 truncate max-w-[140px]">Inviting new member</span>
                              <span className="text-slate-400">1w ago</span>
                          </div>
                      </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-20">
               <h2 className="text-4xl font-bold text-slate-900 mb-6">
                 All the tools you need, <br/>
                 <span className="text-slate-400">none of the clutter.</span>
               </h2>
               <p className="text-lg text-slate-500">
                 We stripped away the complexity of legacy helpdesks and built a system designed for speed and clarity.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
                
                {/* Card 1: Main Feature (Tall) */}
                <div className="md:row-span-2 rounded-[2rem] bg-slate-50 border border-slate-200 p-8 relative overflow-hidden group hover:border-blue-200 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MessageSquare size={200} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
                           <Inbox size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified Inbox</h3>
                        <p className="text-slate-500 leading-relaxed mb-8">
                           Email, Chat, WhatsApp, and Social. All your conversations in one single, stream-lined feed. No more tab switching.
                        </p>
                        <div className="mt-auto">
                            <img src="https://placehold.co/400x300/e2e8f0/94a3b8?text=Inbox+Preview" alt="Inbox" className="rounded-xl shadow-lg border border-slate-200 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-top-left" />
                        </div>
                    </div>
                </div>

                {/* Card 2: AI (Wide) */}
                <div className="md:col-span-2 rounded-[2rem] bg-[#0F172A] text-white p-10 relative overflow-hidden flex flex-col justify-center group">
                    {/* Abstract Blue Glow */}
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                             <div className="flex items-center gap-3 mb-4 text-blue-300 font-bold uppercase tracking-widest text-xs">
                                <Zap size={14} /> iAssist AI
                             </div>
                             <h3 className="text-3xl font-bold mb-4">Auto-Draft Responses</h3>
                             <p className="text-slate-400 text-lg leading-relaxed">
                                Our AI analyzes the ticket history and drafts the perfect response for you. Just review and send.
                             </p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="flex gap-3 mb-4">
                                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">AI</div>
                                 <div className="h-2 w-24 bg-slate-600 rounded-full mt-3"></div>
                             </div>
                             <div className="space-y-2">
                                 <div className="h-2 w-full bg-slate-700 rounded-full"></div>
                                 <div className="h-2 w-5/6 bg-slate-700 rounded-full"></div>
                                 <div className="h-2 w-4/6 bg-slate-700 rounded-full"></div>
                             </div>
                             <button className="mt-6 w-full py-2 bg-blue-600 rounded-lg text-xs font-bold">Apply Suggestion</button>
                        </div>
                    </div>
                </div>

                {/* Card 3: Analytics */}
                <div className="rounded-[2rem] bg-white border border-slate-200 p-8 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                    <BarChart2 className="text-blue-600 mb-6" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Metrics</h3>
                    <p className="text-slate-500 text-sm">Monitor response times and resolution rates live.</p>
                    <div className="mt-auto pt-6 flex items-end gap-2 h-24">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-slate-100 rounded-t-md hover:bg-blue-500 transition-colors duration-300"></div>
                        ))}
                    </div>
                </div>

                 {/* Card 4: Automation */}
                 <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 flex flex-col hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
                    <Layout className="text-indigo-600 mb-6" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Workflows</h3>
                    <p className="text-slate-600 text-sm">Build automation rules with a simple drag-and-drop builder.</p>
                </div>

            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1">
                   <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <LifeBuoy size={18} />
                        </div>
                        <span className="text-xl font-bold text-slate-900">iAssist</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-6">
                        The customer support platform for teams that care about quality.
                    </p>
               </div>
               {/* Footer Links (Simplified) */}
               <div>
                  <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                      <li>Ticketing</li>
                      <li>Live Chat</li>
                      <li>Knowledge Base</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                      <li>About</li>
                      <li>Customers</li>
                      <li>Careers</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                      <li>Privacy</li>
                      <li>Terms</li>
                      <li>Security</li>
                  </ul>
               </div>
            </div>
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                <p>&copy; 2026 iAssist Inc.</p>
                <div className="flex gap-6">
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                    <span>GitHub</span>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
}