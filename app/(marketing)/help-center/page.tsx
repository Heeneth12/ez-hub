import type { Metadata } from "next";
import {
  HelpCircle,
  CreditCard,
  Shield,
  Settings,
  Users,
  FileText,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Get help with EZ Hub. Browse FAQs, learn how to manage your account, billing, security, and more. Contact our support team for further assistance.",
  alternates: {
    canonical: "/help-center",
  },
  openGraph: {
    title: "Help Center — EZ Hub",
    description:
      "Find answers to common questions and get support for EZ Hub products.",
    url: "https://ez-hub.in/help-center",
  },
};

/* ── Data ── */
const categories = [
  {
    icon: HelpCircle,
    title: "Getting Started",
    description: "Learn the basics of setting up your EZ Hub account and workspace.",
    questions: [
      "How do I create an EZ Hub account?",
      "How do I set up my organization?",
      "What are the system requirements?",
      "How do I invite team members?",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Subscriptions",
    description: "Manage your plan, invoices, and payment methods.",
    questions: [
      "How do I upgrade or downgrade my plan?",
      "Where can I find my invoices?",
      "What payment methods are supported?",
      "How do I cancel my subscription?",
    ],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Understand how we keep your data safe and manage permissions.",
    questions: [
      "How is my data encrypted?",
      "How do I enable two-factor authentication?",
      "Who can access my data?",
      "How do I request data deletion?",
    ],
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Update your profile, preferences, and notifications.",
    questions: [
      "How do I change my password?",
      "How do I update my email address?",
      "How do I manage notification preferences?",
      "How do I delete my account?",
    ],
  },
  {
    icon: Users,
    title: "Teams & Permissions",
    description: "Manage users, roles, and access controls across your organization.",
    questions: [
      "How do I add or remove team members?",
      "What roles and permissions are available?",
      "How do I transfer account ownership?",
      "How do I manage department access?",
    ],
  },
  {
    icon: FileText,
    title: "Products & Features",
    description: "Explore the features available in Inventory, Billing, and more.",
    questions: [
      "How do I use the inventory module?",
      "How do I generate invoices?",
      "How do I set up automated reports?",
      "How do I export my data?",
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-24 font-sans text-[#1a1a1a]">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Help Center
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-[15px] leading-relaxed">
          Find answers to common questions, learn how to use our platform, or
          reach out to our support team for assistance.
        </p>
      </header>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Icon size={18} className="text-gray-600" />
                </div>
                <h2 className="text-base font-semibold">{category.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.questions.map((question) => (
                  <li key={question}>
                    <button className="w-full flex items-center justify-between text-left text-sm text-gray-600 hover:text-[#1a1a1a] py-1.5 group transition-colors">
                      <span>{question}</span>
                      <ChevronRight
                        size={14}
                        className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0 ml-2"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Contact Support Section */}
      <section
        id="contact-support"
        className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
          <Mail size={20} className="text-gray-600" />
        </div>
        <h2 className="text-xl font-semibold mb-3">
          Still need help?
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Our support team is available to assist you. Reach out and we&apos;ll
          get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:support@ez-hub.in"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[#333] transition-colors"
          >
            <Mail size={15} />
            Email Support
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] text-sm font-medium px-6 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Contact Page
            <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <Link
            href="/privacy-policy"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-300">·</span>
          <Link
            href="/terms-of-service"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-gray-300">·</span>
          <a
            href="mailto:support@ez-hub.in"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            support@ez-hub.in
          </a>
        </div>
      </footer>
    </article>
  );
}
