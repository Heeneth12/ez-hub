"use client";
import HeroSection from "@/layouts/products/inventory/HeroSection";
import PricingSection from "@/layouts/products/inventory/PricingSection";
import BentoFeatures from "@/layouts/products/inventory/BentoFeatures";
import CTASection from "@/layouts/products/inventory/CTASection";
import FAQSection from "@/layouts/products/inventory/FAQSection";
import { useEffect } from "react";

export default function Inventory() {
  useEffect(() => {
    fetch("https://ezauth-c4w0.onrender.com/actuator/health");
    fetch("https://ez-inventory.onrender.com/actuator/health");
  }, []);
  return (
    <>
      <article>
        <section id="hero" aria-label="Introduction">
          <HeroSection />
        </section>
        <section id="features" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Platform Features
          </h2>
          <BentoFeatures />
          <PricingSection />
          <FAQSection />
        </section>
        <section id="final-cta" aria-label="Final call to action">
          <CTASection />
        </section>
      </article>
    </>
  );
}
