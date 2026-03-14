import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the EZ Hub Privacy Policy. Learn how we collect, use, store, and protect your personal data when you use our SaaS products and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — EZ Hub",
    description:
      "Learn how EZ Hub collects, uses, and protects your personal information.",
    url: "https://ez-hub.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 14, 2026";

  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24 font-sans text-[#1a1a1a]">
      {/* Page Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-10 text-[15px] leading-7 text-gray-700">
        <section id="introduction">
          <p>
            At <strong>EZ Hub</strong> (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;), we respect your privacy and are committed to
            protecting the personal data you share with us. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our website and SaaS products.
          </p>
        </section>

        <section id="information-we-collect">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, billing address, and company name when you register or
              subscribe.
            </li>
            <li>
              <strong>Account Data:</strong> Username, password (encrypted), and
              account preferences.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, features used, session
              duration, device type, browser, and IP address.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment card details are
              processed securely through third-party payment processors. We do
              not store your full card details.
            </li>
            <li>
              <strong>Communications:</strong> Any messages, feedback, or
              support requests you submit to us.
            </li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain our platform and services.</li>
            <li>
              To process transactions and send related information such as
              invoices and confirmations.
            </li>
            <li>
              To communicate with you, including sending service updates,
              security alerts, and support messages.
            </li>
            <li>
              To personalize your experience and improve our products.
            </li>
            <li>
              To detect, prevent, and address technical issues, fraud, or
              security breaches.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section id="data-sharing">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            3. Data Sharing &amp; Disclosure
          </h2>
          <p className="mb-3">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist
              with hosting, analytics, payment processing, and customer support.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or governmental authority.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your data may be transferred.
            </li>
          </ul>
        </section>

        <section id="data-security">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            4. Data Security
          </h2>
          <p>
            We implement industry-standard security measures, including
            encryption in transit (TLS/SSL) and at rest, access controls, and
            regular security audits to protect your data. However, no method of
            electronic transmission or storage is 100% secure.
          </p>
        </section>

        <section id="data-retention">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            5. Data Retention
          </h2>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this policy, or as required by law.
            Once your data is no longer needed, we securely delete or anonymize
            it.
          </p>
        </section>

        <section id="your-rights">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            6. Your Rights
          </h2>
          <p className="mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal data.</li>
            <li>Object to or restrict certain types of processing.</li>
            <li>
              Request data portability (receive your data in a structured
              format).
            </li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:support@ez-hub.in"
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors"
            >
              support@ez-hub.in
            </a>
            .
          </p>
        </section>

        <section id="cookies">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            7. Cookies &amp; Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance your browsing
            experience, analyze traffic, and understand how our platform is
            used. You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section id="third-party-links">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices. We encourage you to review
            the privacy policies of any external websites you visit.
          </p>
        </section>

        <section id="childrens-privacy">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            9. Children&apos;s Privacy
          </h2>
          <p>
            Our services are not intended for children under the age of 16. We
            do not knowingly collect personal information from children. If you
            believe a child has provided us with their data, please contact us
            immediately.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised &quot;Last updated&quot;
            date. We encourage you to review this page periodically.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">
            11. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us:
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
