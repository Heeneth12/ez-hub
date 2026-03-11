"use client";
import HeroSection from "@/layouts/products/inventory/HeroSection";
import CTASection from "@/layouts/products/inventory/CTASection";
import FAQSection from "@/layouts/products/inventory/FAQSection";
import { useEffect } from "react";
import FeaturesSection from "@/layouts/products/inventory/FeaturesSection";

export default function Inventory() {
  useEffect(() => {
    fetch("https://ezauth-c4w0.onrender.com/actuator/health").catch(console.error);
    fetch("https://ez-inventory.onrender.com/actuator/health").catch(console.error);
  }, []);

  return (
    <article className="bg-white">
      <section id="hero" aria-label="Introduction">
        <HeroSection />
      </section>

      <section id="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          Platform Features
        </h2>
        <FeaturesSection />
        <FAQSection />
      </section>

      <section id="final-cta" aria-label="Final call to action">
        <CTASection />
      </section>
    </article>
  );
}