'use client';
import Footer from "@/layouts/components/Footer";
import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import { Users, Code } from "lucide-react";
import Header from "@/layouts/components/Header";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="grow">
        <article>
          <section id="hero">
            <HeroSection />
          </section>

          <section id="features" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2>
            {/* <FeaturesSectionAnima /> */}
          </section>
        </article>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}


 function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      }, 3000);
    }
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 mb-6">
            <MessageCircle size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700">We're here to help</span>
          </div>
          
          <h2 className="text-5xl font-bold sm:text-6xl mb-6 text-gray-900 leading-tight">
            Get in{" "}
            <span className="relative inline-block">
              touch
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to see a demo? Our team is ready to help you transform your HR operations.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left - Contact Form */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Check size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                          focused === "name"
                            ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                          focused === "email"
                            ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Input */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused("")}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                          focused === "company"
                            ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                        placeholder="Company Inc."
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                          focused === "phone"
                            ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                        focused === "message"
                          ? "border-green-500 bg-green-50/50 shadow-lg shadow-green-100"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                    <Check size={14} className="text-green-500" />
                    We'll respond within 24 hours
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right - Contact Information & Stats */}
          <div className="mt-12 lg:mt-0 space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Our team is here to help
                    </p>
                    <div className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer group/link">
                      hello@company.com
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Mon-Fri from 8am to 6pm
                    </p>
                    <div className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 cursor-pointer group/link">
                      +1 (555) 000-0000
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Come say hello at our office
                    </p>
                    <p className="text-sm font-semibold text-purple-600">
                      100 Smith Street<br />
                      Melbourne VIC 3000, AU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}