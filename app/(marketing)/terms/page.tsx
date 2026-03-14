import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the EZ Hub Terms of Service. Understand the terms and conditions that govern your use of our platform, SaaS products, and related services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — EZ Hub",
    description:
      "Terms and conditions governing the use of EZ Hub platform and services.",
    url: "https://ez-hub.in/terms",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "March 14, 2026";

  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24 font-sans text-[#1a1a1a]">
      {/* Page Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-10 text-[15px] leading-7 text-gray-700">
        <section id="introduction">
          <p>
            Welcome to <strong>EZ Hub</strong>. These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of our website,
            platform, and SaaS products (collectively, the
            &quot;Services&quot;). By accessing or using our Services, you agree
            to be bound by these Terms. If you do not agree, please do not use
            our Services.
          </p>
        </section>

        <section id="eligibility">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            1. Eligibility
          </h2>
          <p>
            You must be at least 18 years of age or the legal age in your
            jurisdiction to use our Services. By registering an account, you
            represent and warrant that you have the legal capacity to enter into
            a binding agreement.
          </p>
        </section>

        <section id="accounts">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            2. Account Registration
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to provide accurate and complete information during
              registration and to keep your information up to date.
            </li>
            <li>
              You are solely responsible for all activities that occur under
              your account.
            </li>
            <li>
              Notify us immediately at{" "}
              <a
                href="mailto:support@ez-hub.in"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors"
              >
                support@ez-hub.in
              </a>{" "}
              if you suspect any unauthorized access.
            </li>
          </ul>
        </section>

        <section id="use-of-services">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            3. Use of Services
          </h2>
          <p className="mb-3">You agree to use our Services only for lawful purposes. You shall not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the platform in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Attempt to gain unauthorized access to our systems, servers, or
              networks.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              Services.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any part of our
              software.
            </li>
            <li>
              Use automated tools (bots, scrapers) to access the platform
              without prior written consent.
            </li>
          </ul>
        </section>

        <section id="subscriptions">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            4. Subscriptions &amp; Payments
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Certain features require a paid subscription. Pricing and plan
              details are available on our website.
            </li>
            <li>
              Subscriptions renew automatically unless cancelled before the
              renewal date.
            </li>
            <li>
              All fees are non-refundable unless otherwise stated in our
              refund policy or required by applicable law.
            </li>
            <li>
              We reserve the right to modify pricing with at least 30 days
              advance notice.
            </li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content, features, code, designs, and trademarks associated
            with EZ Hub are owned by us or our licensors and are protected by
            intellectual property laws. You may not copy, modify, distribute, or
            create derivative works without our express written permission.
          </p>
        </section>

        <section id="your-data">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            6. Your Data
          </h2>
          <p>
            You retain ownership of all data you upload or create through our
            Services (&quot;Your Data&quot;). By using our Services, you grant
            EZ Hub a limited license to process Your Data solely for the purpose
            of providing and improving the Services. For more on how we handle
            your data, please refer to our{" "}
            <a
              href="/privacy-policy"
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section id="availability">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            7. Service Availability
          </h2>
          <p>
            We strive to maintain high availability but do not guarantee
            uninterrupted access. We may temporarily suspend or modify the
            Services for maintenance, updates, or other operational reasons.
            We will make reasonable efforts to provide advance notice of
            scheduled downtime.
          </p>
        </section>

        <section id="limitation-of-liability">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, EZ Hub and its affiliates
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits, data,
            use, or goodwill, arising out of or related to your use of the
            Services. Our total liability shall not exceed the amount you paid
            to us in the twelve (12) months preceding the event giving rise to
            the claim.
          </p>
        </section>

        <section id="indemnification">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            9. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless EZ Hub, its officers,
            directors, employees, and agents from any claims, damages, losses,
            or expenses (including reasonable attorney fees) arising from your
            use of the Services or violation of these Terms.
          </p>
        </section>

        <section id="termination">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            10. Termination
          </h2>
          <p>
            We may suspend or terminate your account at our discretion if you
            violate these Terms or engage in conduct that may harm EZ Hub or
            other users. You may terminate your account at any time by
            contacting our support team. Upon termination, your right to use
            the Services ceases immediately, though certain provisions of these
            Terms survive termination.
          </p>
        </section>

        <section id="governing-law">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            11. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to conflict of law principles.
            Any disputes arising from these Terms shall be subject to the
            exclusive jurisdiction of the courts located in India.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            12. Changes to These Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms at any time.
            Changes will be posted on this page with a revised &quot;Last
            updated&quot; date. Your continued use of the Services after any
            changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            13. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm space-y-1.5">
            <p>
              <strong>EZ Hub</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:support@ez-hub.in"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors"
              >
                support@ez-hub.in
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://ez-hub.in"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors"
              >
                ez-hub.in
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
