import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes! We offer a 14-day free trial for the Professional plan. No credit card required. You can also stay on the Starter plan forever for free.",
  },
  {
    q: "Can I sync with multiple calendars?",
    a: "Absolutely. On the Professional plan, you can sync up to 5 calendars (Google, Outlook, iCloud) to check for conflicts and add bookings.",
  },
  {
    q: "Does it support local payment gateways?",
    a: "Yes, we integrate with Razorpay, Stripe, and PayPal so you can collect payments from clients at the time of booking.",
  },
  {
    q: "Can I remove the EzBooking branding?",
    a: "Yes, the Professional and Business plans allow you to remove our branding and add your own logo, colors, and email signatures.",
  },
];

export default function BookingFAQSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">
            Can’t find the answer you’re looking for? Reach out to our{" "}
            <a
              href="#"
              className="text-orange-600 font-semibold hover:underline">
              support team
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-200 transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        <div
          className={`p-2 rounded-full transition-colors duration-200 ${
            isOpen
              ? "bg-orange-100 text-orange-600"
              : "bg-slate-50 text-slate-400"
          }`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-transparent">
          {answer}
        </div>
      </div>
    </div>
  );
}
