"use client";
import {
  Briefcase,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Send,
  MapPin,
} from "lucide-react";

export default function ContactUsDark() {
  // Theme Configuration
  const themeBlue = "#3b82f6"; // Slightly brighter blue for dark mode
  const themeOrange = "#f97316";

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* --- Background Ambient Glow --- */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] pointer-events-none z-0 opacity-40 mix-blend-screen">
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle at center, ${themeOrange} 0%, ${themeBlue} 40%, transparent 70%)`,
          }}
        />
      </div>

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* --- Header Section --- */}
          <div className="text-center mb-20">
            <h2 className="font-hand text-2xl md:text-3xl font-bold text-blue-400 mb-4 -rotate-2">
              Get in touch!
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Let's start a{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10">conversation.</span>
                {/* Orange Marker SVG - Glowing */}
                <svg
                  className="absolute bottom-2 left-0 w-full h-4 text-orange-500/80 -z-10 blur-[1px]"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,10 Q100,20 200,10" stroke="currentColor" strokeWidth="12" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you have questions about our pricing, need a demo, or want to partner with us, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* --- Left Column: Contact Channels (Cards) --- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Sales */}
              <div className="group bg-white/5 hover:bg-white/10 rounded-3xl p-6 border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Talk to Sales</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Interested in our software? Let's find the right plan for you.
                    </p>
                    <span className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                      Contact Sales <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Support */}
              <div className="group bg-white/5 hover:bg-white/10 rounded-3xl p-6 border border-white/10 hover:border-orange-500/30 shadow-lg hover:shadow-orange-900/20 transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                    <HelpCircle size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Help & Support</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Current customer? Get help with your account or technical issues.
                    </p>
                    <span className="flex items-center text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors">
                      Visit Help Center <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: General */}
              <div className="group bg-white/5 hover:bg-white/10 rounded-3xl p-6 border border-white/10 hover:border-gray-500/30 shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-700/30 text-gray-300 border border-gray-600/30 flex items-center justify-center">
                    <MessageCircle size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Media & Partners</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      For press inquiries or partnership opportunities.
                    </p>
                    <span className="flex items-center text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">
                      Email Us <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* --- Right Column: Contact Form --- */}
            <div className="lg:col-span-7">
              <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
                {/* Decorative Glow inside form */}
                <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-blue-600 via-purple-500 to-orange-500" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send us a message</h3>
                
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Business Ltd."
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">How can we help?</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us a bit about your needs..."
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="button"
                      className="w-full py-4 px-8 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                      style={{ background: `linear-gradient(135deg, ${themeBlue}, #1e40af)` }}
                    >
                      Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                        By sending this message, you agree to our <a href="#" className="underline hover:text-blue-400 transition-colors">Terms</a> and <a href="#" className="underline hover:text-blue-400 transition-colors">Privacy Policy</a>.
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>

          {/* --- Locations Section --- */}
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">Our Locations</h3>
                    <p className="text-gray-400 mt-1">Come visit us at our offices.</p>
                </div>
                <a href="#" className="text-blue-400 font-semibold hover:text-blue-300 hover:underline mt-4 md:mt-0 transition-colors">View on Map &rarr;</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Location 1 */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg">San Francisco</h4>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        123 Market Street, Suite 400<br/>
                        San Francisco, CA 94105<br/>
                        United States
                    </p>
                </div>

                {/* Location 2 */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg">Brussels (HQ)</h4>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        Chaussée de Namur 40<br/>
                        1367 Grand-Rosière<br/>
                        Belgium
                    </p>
                </div>

                 {/* Location 3 */}
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg">New Delhi</h4>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        Tower B, Cyber City<br/>
                        Gurugram, Haryana 122002<br/>
                        India
                    </p>
                </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}