import HeroSection from "@/layouts/inventory/HeroSection";
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { AnimatedBeamMultipleOutputDemo } from "@/layouts/inventory/AnimatedBeamDemo";
import FeaturesSection from "@/layouts/inventory/FeaturesSection";
import BentoFeatures from "./BentoFeatures";
import PricingSection from "@/layouts/inventory/PricingSection";
import CTASection from "@/layouts/inventory/CTASection";

export default function Inventory() {
  return (
    <main className="grow bg-[#050505] min-h-screen">
      <HeroSection />
      <FeaturesSection/>
      <BentoFeatures/>
      <PricingSection/>
      <CTASection/>
      {/* <AnimatedBeamMultipleOutputDemo/> */}
    </main>
  );
}
