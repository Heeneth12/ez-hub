import HeroSection from "@/layouts/inventory/HeroSection";
import FeaturesSection from "@/layouts/inventory/FeaturesSection";
import BentoFeatures from "../../layouts/inventory/BentoFeatures";
import PricingSection from "@/layouts/inventory/PricingSection";
import CTASection from "@/layouts/inventory/CTASection";
import Header from "@/layouts/components/Header";
import Footer from "@/layouts/components/Footer";

export default function Inventory() {
  return (
    <>
      <Header />
      <main className="grow bg-[#050505] min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <BentoFeatures />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
