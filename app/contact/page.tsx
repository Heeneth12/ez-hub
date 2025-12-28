"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Briefcase,
  Send,
} from "lucide-react";

export default function ContactUs() {
  // Theme Configuration
  const themeBlue = "#2563eb";
  const themeOrange = "#f97316";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-blue-100">
      {/* Inject Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-hand { font-family: 'Kalam', cursive; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- Background Gradient Blob (The "Sunrise" Effect) --- */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none z-0 opacity-20">
        <div
          className="absolute inset-0 rounded-full blur-[100px]"
          style={{
            background: `radial-gradient(circle at center, ${themeOrange} 0%, ${themeBlue} 50%, transparent 70%)`,
          }}
        />
      </div>

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* --- Header Section --- */}
          <div className="text-center mb-20">
            <h2 className="font-hand text-2xl md:text-3xl font-bold text-blue-600 mb-4 rotate-[-2deg]">
              Get in touch!
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Let's start a{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10">conversation.</span>
                {/* Orange Marker SVG */}
                <svg
                  className="absolute bottom-2 left-0 w-full h-4 text-orange-200 -z-10"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,10 Q100,20 200,10" stroke="currentColor" strokeWidth="12" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Whether you have questions about our pricing, need a demo, or want to partner with us, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* --- Left Column: Contact Channels (Cards) --- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Sales */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Talk to Sales</h3>
                    <p className="text-slate-500 text-sm mb-3">
                      Interested in our software? Let's find the right plan for you.
                    </p>
                    <span className="flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                      Contact Sales <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Support */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#f97316] text-white flex items-center justify-center shadow-lg shadow-orange-200">
                    <HelpCircle size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Help & Support</h3>
                    <p className="text-slate-500 text-sm mb-3">
                      Current customer? Get help with your account or technical issues.
                    </p>
                    <span className="flex items-center text-orange-600 font-semibold text-sm group-hover:underline">
                      Visit Help Center <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: General */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-lg shadow-gray-300">
                    <MessageCircle size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Media & Partners</h3>
                    <p className="text-slate-500 text-sm mb-3">
                      For press inquiries or partnership opportunities.
                    </p>
                    <span className="flex items-center text-slate-700 font-semibold text-sm group-hover:underline">
                      Email Us <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* --- Right Column: Contact Form --- */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-400" />

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Business Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">How can we help?</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us a bit about your needs..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-800 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="button"
                      className="w-full py-4 px-8 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${themeBlue}, ${themeBlue}cc)` }}
                    >
                      Send Message <Send size={18} />
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                        By sending this message, you agree to our <a href="#" className="underline hover:text-blue-600">Terms</a> and <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>

          {/* --- Locations Section --- */}
          <div className="mt-24 pt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Locations</h3>
                    <p className="text-slate-500">Come visit us at our offices.</p>
                </div>
                <a href="#" className="text-blue-600 font-semibold hover:underline mt-4 md:mt-0">View on Map &rarr;</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Location 1 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">San Francisco</h4>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        123 Market Street, Suite 400<br/>
                        San Francisco, CA 94105<br/>
                        United States
                    </p>
                </div>

                {/* Location 2 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Brussels (HQ)</h4>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        Chaussée de Namur 40<br/>
                        1367 Grand-Rosière<br/>
                        Belgium
                    </p>
                </div>

                 {/* Location 3 */}
                 <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                        <MapPin size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">New Delhi</h4>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
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