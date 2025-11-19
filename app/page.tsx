'use client';
import Footer from "@/layouts/components/Footer";
import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import { Users, Code } from "lucide-react";
import Header from "@/layouts/components/Header";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="grow">
        <article>
          <section id="hero">
            <HeroSection />
          </section>

          <section id="features" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2>
            <FeatureSections/>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}


