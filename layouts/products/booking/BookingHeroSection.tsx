"use client";
import {
  ArrowRight,
  Calendar,
  Clock,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";

// Simple Avatar Component
const Avatar = ({ color }: { color: string }) => (
  <div
    className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-[10px] text-white font-bold shadow-sm relative z-10 hover:z-20 hover:scale-110 transition-transform duration-200`}
  >
    U
  </div>
);

export default function BookingHeroSection() {
  const handleStart = () => {
    window.open("https://app.ez-hub.in/booking", "_blank");
  };

  return (
    <>
      {/* 1. Define Custom Animations directly here so they work instantly */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-soft {
          0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.2); }
          70% { box-shadow: 0 0 0 10px rgba(249, 115, 22, 0); }
          100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 5s ease-in-out 2s infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <div className="bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600 overflow-hidden relative">
        <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* --- LEFT: Text Content --- */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold cursor-pointer hover:bg-orange-100 transition-all hover:scale-105 group">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-white border border-orange-200 text-[10px] uppercase tracking-wider group-hover:border-orange-300 transition-colors">
                    New
                  </span>
                  <span>Advanced Calendar Sync</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Simplify Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                  Booking Process
                </span>
              </h1>

              {/* Subtext */}
              <p className="animate-fade-up delay-200 text-lg text-slate-500 max-w-lg leading-relaxed">
                Stay on top of appointments, client reminders, and team scheduling
                with real-time insights and automated tools.
              </p>

              {/* Buttons */}
              <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleStart}
                  className="group h-12 px-8 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center gap-2"
                  style={{ animation: 'pulse-soft 2s infinite' }}
                >
                  Get Started
                  <ArrowRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="h-12 px-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Reviews / Social Proof */}
              <div className="animate-fade-up delay-300 flex items-center gap-4 pt-4">
                <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                  <Avatar color="bg-blue-500" />
                  <Avatar color="bg-green-500" />
                  <Avatar color="bg-purple-500" />
                  <Avatar color="bg-orange-500" />
                </div>
                <div className="text-sm font-medium text-slate-600">
                  <span className="font-bold text-slate-900">4.9</span>
                  <span className="text-orange-500 mx-1">★</span>
                  (10k+ reviews)
                </div>
              </div>
            </div>

            {/* --- RIGHT: Floating UI Composition --- */}
            <div className="relative isolate hidden md:block animate-fade-up delay-200">
              {/* Decor Circles (Blur) - pulsing */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

              {/* Main Card: Appointment List */}
              <div className="animate-float relative z-10 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-6 max-w-md ml-auto transform transition-all hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-slate-800">
                    Appointments
                  </h3>
                  <span className="text-xs font-medium text-slate-400 cursor-pointer hover:text-orange-600 transition-colors">
                    View All
                  </span>
                </div>

                {/* Header Row */}
                <div className="grid grid-cols-12 text-xs font-semibold text-slate-400 mb-4 px-2">
                  <div className="col-span-5">Client Name</div>
                  <div className="col-span-3 text-center">Time</div>
                  <div className="col-span-3 text-center">Status</div>
                  <div className="col-span-1"></div>
                </div>

                {/* List Items with Hover Effects */}
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-all hover:scale-[1.02] hover:shadow-sm group cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        RJ
                      </div>
                      <span className="font-semibold text-slate-700">Rohan J.</span>
                    </div>
                    <div className="col-span-3 text-center text-slate-500">
                      10:00 AM
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                        Confirmed
                      </span>
                    </div>
                    <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                      <MoreHorizontal size={16} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-all hover:scale-[1.02] hover:shadow-sm group cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        SK
                      </div>
                      <span className="font-semibold text-slate-700">Sarah K.</span>
                    </div>
                    <div className="col-span-3 text-center text-slate-500">
                      11:30 AM
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">
                        Pending
                      </span>
                    </div>
                    <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                      <MoreHorizontal size={16} />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-all hover:scale-[1.02] hover:shadow-sm group cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        MP
                      </div>
                      <span className="font-semibold text-slate-700">Mike P.</span>
                    </div>
                    <div className="col-span-3 text-center text-slate-500">
                      02:00 PM
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                        Confirmed
                      </span>
                    </div>
                    <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                      <MoreHorizontal size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pop-up Card */}
              <div className="animate-float-delayed absolute top-[60%] -left-6 z-20 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 w-64 transition-transform hover:scale-105 duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      New Request
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1">
                      Consultation Call
                    </h4>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-100 flex gap-4">
                  <div className="flex flex-col items-center flex-1 border-r border-slate-200 pr-2">
                    <Calendar size={14} className="text-orange-500 mb-1" />
                    <span className="text-xs text-slate-700 font-bold">Tmrw</span>
                    <span className="text-[10px] text-slate-400">4:00 PM</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <Clock size={14} className="text-blue-500 mb-1" />
                    <span className="text-xs text-slate-700 font-bold">30m</span>
                    <span className="text-[10px] text-slate-400">Duration</span>
                  </div>
                </div>

                <button className="w-full py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200">
                  Accept Booking
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}