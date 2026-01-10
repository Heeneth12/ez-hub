"use client";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  MoreHorizontal,
  Star,
} from "lucide-react";

// Simple Avatar Component
const Avatar = ({ src, alt, fallback }: { src?: string; alt?: string; fallback: string }) => (
  <div className="relative w-10 h-10 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shadow-sm overflow-hidden">
    {fallback}
  </div>
);

export default function BookingHero() {
  const handleStart = () => {
    window.open("https://app.ez-hub.in/booking", "_blank");
  };

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden relative">
      {/* Background Decor - Extremely subtle to not distract */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: Text Content --- */}
          <div className="space-y-10 animate-fade-in-up max-w-2xl">
            
            {/* Badge - Toned down for a cleaner look */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-xs font-medium transition-colors hover:bg-slate-100 cursor-default">
              <span className="flex h-2 w-2 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>v2.0 Now Live: Advanced Calendar Sync</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Simplify Your <br />
              {/* Gradient text for a premium feel, not just flat orange */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Booking Process
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
              Stop playing email tag. Automate your appointments, reminders, and 
              team scheduling with a tool designed to get out of your way.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                onClick={handleStart}
                className="h-14 px-8 rounded-2xl bg-orange-600 text-white font-semibold text-base hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Started Free
                <ArrowRight size={18} />
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-600 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto">
                View Demo
              </button>
            </div>

            {/* Social Proof - refined alignment */}
            <div className="pt-6 flex items-center gap-6 border-t border-slate-100 mt-4">
              <div className="flex -space-x-4">
                <Avatar fallback="JD" />
                <Avatar fallback="AS" />
                <Avatar fallback="MR" />
                <Avatar fallback="KP" />
                 <div className="relative w-10 h-10 rounded-full border-[3px] border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm">
                  +2k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-orange-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-sm font-medium text-slate-500">
                  Trusted by <span className="text-slate-900 font-bold">10,000+</span> pros
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: UI Composition --- */}
          <div className="relative hidden md:block select-none pointer-events-none lg:translate-x-8">
            {/* Main App Window Simulation */}
            <div className="relative z-10 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 w-full max-w-[480px] ml-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
              
              {/* Fake Window Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <h3 className="font-bold text-xl text-slate-800">
                    Appointments
                    </h3>
                    <p className="text-xs text-slate-400">Today, 24 Jan</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Calendar size={18} className="text-slate-400" />
                </div>
              </div>

              {/* List Header */}
              <div className="flex justify-between text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-4 px-3">
                <span>Client</span>
                <span>Status</span>
              </div>

              {/* List Items - Cleaner Design */}
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                      RJ
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Rohan J.</h4>
                      <p className="text-xs text-slate-400">10:00 AM - 10:30 AM</p>
                    </div>
                  </div>
                   <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">
                    Confirmed
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                      SK
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Sarah K.</h4>
                      <p className="text-xs text-slate-400">11:30 AM - 12:30 PM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[10px] font-bold border border-orange-100">
                    Pending
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100/50 rounded-2xl opacity-60">
                   <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                      MP
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Mike P.</h4>
                      <p className="text-xs text-slate-400">02:00 PM - 02:45 PM</p>
                    </div>
                  </div>
                  <MoreHorizontal className="text-slate-300" size={16}/>
                </div>
              </div>
            </div>

            {/* Floating "New Booking" Card - Glassmorphism */}
            <div className="absolute top-[50%] -left-12 lg:-left-4 z-20 backdrop-blur-xl bg-white/90 p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 w-72 animate-bounce-slow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide">
                    New Request
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-2">
                    Consultation Call
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                    <span className="text-lg">👋</span>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                 <div className="flex-1 bg-slate-50 rounded-xl p-2.5 flex flex-col items-center justify-center gap-1 border border-slate-100">
                    <Calendar size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">Tomorrow</span>
                 </div>
                 <div className="flex-1 bg-slate-50 rounded-xl p-2.5 flex flex-col items-center justify-center gap-1 border border-slate-100">
                    <Clock size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">4:00 PM</span>
                 </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                Accept Booking
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}