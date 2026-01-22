"use client";
import HeroSection from "@/layouts/marketing/HeroSection";
import FeatureSections from "@/layouts/marketing/FeatureSections";
import FinalCTA from "@/layouts/marketing/FinalCTA";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://ezauth-c4w0.onrender.com/actuator/health");
    fetch("https://ez-inventory.onrender.com/actuator/health");
  }, []);
  return (
    <article>
      <section id="hero" aria-label="Introduction">
        <HeroSection />
      </section>

      <section id="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          Platform Features
        </h2>
        <FeatureSections />
      </section>

      <section id="final-cta" aria-label="Final call to action">
        <FinalCTA />
      </section>
    </article>
  );
}