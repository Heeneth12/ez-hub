import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/components/Header";
import Footer from "@/layouts/components/Footer";

//Optimize Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kalam = Kalam({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

//SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "EZ Hub — Smart SaaS Suite for Billing, Inventory & Payroll",
    template: "%s | EZ Hub",
  },
  description:
    "EZ Hub offers modern SaaS solutions including billing software, POS systems, Inventory management, and business automation tools.",
  keywords: [
    "EZ Hub",
    "billing software",
    "Inventory system",
    "payroll software",
    "SaaS products",
    "business automation",
    "cloud software",
    "HR and payroll",
  ],
  metadataBase: new URL("https://ez-hub.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EZ Hub — Smart SaaS Suite",
    description:
      "Manage your business operations easily with EZ Hub's smart software suite.",
    url: "https://ez-hub.in",
    siteName: "EZ Hub",
    locale: "en_US",
    type: "website",
  },
};

//JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EZ Hub",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Integrated SaaS suite for Billing, Inventory management, and Booking management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${kalam.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Inter:wght@400;500;600&display=swap');
          .font-brand { font-family: 'Kalam', cursive; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>
      </head>
      <body
        style={{ backgroundColor: "#EDEDED" }}
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
