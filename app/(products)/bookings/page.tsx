"use client";
import BookingFAQSection from "@/layouts/products/booking/BookingFAQSection";
import BookingHeroSection from "@/layouts/products/booking/BookingHeroSection";
import BookingPricingSection from "@/layouts/products/booking/BookingPricingSection";
import BookingFeaturesSection from "@/layouts/products/booking/BookingFeaturesSection";

export default function Bookings() {
  return (
    <>
      <article>
        <section id="hero" aria-label="Introduction">
          <BookingHeroSection />
        </section>
        <section id="features" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Platform Features
          </h2>
          <BookingFeaturesSection />
        </section>
        <section id="final-cta" aria-label="Final call to action">
          <BookingPricingSection />
          <BookingFAQSection />
        </section>
      </article>
    </>
  );
}
