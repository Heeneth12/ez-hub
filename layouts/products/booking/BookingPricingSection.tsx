import { Check } from "lucide-react";
import { useState } from "react";

export default function BookingPricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  // Pricing Data
  const plans = [
    {
      name: "Starter",
      desc: "For individuals just starting out.",
      price: isAnnual ? "0" : "0",
      features: [
        "1 Calendar connection",
        "50 Appointments/mo",
        "Basic email reminders",
        "Google Calendar Sync",
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Professional",
      desc: "For growing businesses & teams.",
      price: isAnnual ? "29" : "39",
      features: [
        "5 Calendar connections",
        "Unlimited Appointments",
        "SMS & WhatsApp reminders",
        "Remove EzHub branding",
        "Team management",
      ],
      cta: "Start Free Trial",
      popular: true, // Highlights this card
    },
    {
      name: "Business",
      desc: "For large agencies & organizations.",
      price: isAnnual ? "79" : "99",
      features: [
        "Unlimited Calendars",
        "Admin Reporting & API",
        "Custom Domain (CNAME)",
        "Dedicated Success Manager",
        "SSO & Advanced Security",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-slate-50 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Simple, transparent <span className="text-orange-600">pricing</span>
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            No hidden fees. Change or cancel your plan at any time.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${
                !isAnnual ? "text-slate-900" : "text-slate-400"
              }`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-slate-200 p-1 relative transition-colors duration-300 focus:outline-none">
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                isAnnual ? "text-slate-900" : "text-slate-400"
              }`}>
              Yearly{" "}
              <span className="text-orange-600 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl bg-white transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-orange-500 shadow-2xl shadow-orange-100 scale-100 md:scale-105 z-10"
                  : "border border-slate-200 hover:border-slate-300 hover:shadow-xl"
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-slate-900">
                  ${plan.price}
                </span>
                <span className="text-slate-400 font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-600">
                    <Check
                      size={18}
                      className="text-orange-600 shrink-0 mt-0.5"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${
                  plan.popular
                    ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
