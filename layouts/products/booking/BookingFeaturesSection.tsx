"use client";

import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function BookingFeaturesSection() {
  return (
    <div className="w-full">
      {/* --- TRUSTED BY SECTION --- */}
      <div className="mt-10 pt-10 border-t border-slate-100 text-center max-w-7xl mx-auto px-6">
        <p className="text-slate-400 text-sm font-medium mb-8">
          We are trusted by 200+ companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-slate-800">Google</span>
          <span className="text-xl font-bold text-slate-800 flex items-center gap-1">
            <span className="text-red-500 font-serif italic">U</span> Udemy
          </span>
          <span className="text-xl font-bold text-slate-800 flex items-center gap-1">
            Khan Academy
          </span>
          <span className="text-xl font-bold text-slate-800">Codecademy</span>
          <span className="text-xl font-bold text-slate-800">
            cloud academy
          </span>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to{" "}
              <span className="text-orange-600">scale bookings</span>
            </h2>
            <p className="text-slate-500 text-lg">
              We automates the busywork so you can focus on your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Smart Scheduling
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Syncs with Google, Outlook, and iCal. Never get double-booked
                again with our real-time conflict detection.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Automated Reminders
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Reduce no-shows by up to 80%. Send automated SMS and email
                reminders before every appointment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Business Insights
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Track revenue, popular services, and staff performance with our
                beautiful, easy-to-read dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Alternating Layout) --- */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1 lg:order-1">
              <div className="relative">
                {/* Abstract BG blob */}
                <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
                {/* Visual Representation */}
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-slate-100 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-20 bg-orange-50 rounded-lg border border-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        10:00 AM
                      </div>
                      <div className="h-20 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">
                        11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-white rounded-full border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm">
                1
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Set your availability
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Define when you're available. Block out personal time, set
                buffer times between meetings, and customize your working hours
                in seconds.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Syncs with Google Calendar",
                  "Custom buffer times",
                  "Timezone detection",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 size={18} className="text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 bg-white rounded-full border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm">
                2
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Share your booking link
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Send your personalized link to clients or embed it directly on
                your website. They pick a time, and it's added to your calendar
                instantly.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Embed on any website",
                  "Custom branding",
                  "Payment collection",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 size={18} className="text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform -translate-x-10 translate-y-10"></div>
                {/* Visual Representation */}
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 rotate-[2deg] hover:rotate-0 transition-all duration-500 text-center">
                  <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4">
                    ez-hub.in/booking/your-name
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Book a Consultation
                  </h4>
                  <p className="text-slate-400 text-sm mb-6">
                    30 min • 1-on-1 Call
                  </p>
                  <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm">
                    Select a Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Loved by <span className="text-orange-600">thousands</span> of
            creators
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Freelance Designer",
                text: "EzHub simplified my entire workflow. I used to spend hours emailing back and forth, now it's all automated.",
              },
              {
                name: "David Chen",
                role: "Consultant",
                text: "The cleanest booking interface I've used. My clients constantly compliment how easy it is to schedule time with me.",
              },
              {
                name: "Marcus Reid",
                role: "Agency Owner",
                text: "We scaled from 5 to 50 employees using this system. The team scheduling features are absolute lifesavers.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-orange-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${
                      i === 0
                        ? "bg-purple-100 text-purple-600"
                        : i === 1
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    } flex items-center justify-center font-bold`}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-slate-400 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blur-[100px] opacity-20 pointer-events-none"></div>

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to upgrade your workflow?
          </h2>
          <p className="relative z-10 text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Join 10,000+ professionals who trust EzHub to manage their
            appointments and grow their business.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 px-8 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all hover:scale-105 active:scale-95">
              Start Your Free Trial
            </button>
            <button className="h-14 px-8 rounded-xl bg-white/10 text-white border border-white/10 font-bold hover:bg-white/20 transition-all backdrop-blur-md">
              Contact Sales
            </button>
          </div>
          <p className="relative z-10 mt-6 text-slate-500 text-sm">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>
    </div>
  );
}