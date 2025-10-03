
"use client";

import CTA from "@/components/ui/landing/CTA";
import Footer from "@/components/ui/landing/Footer";
import Header from "@/components/ui/landing/Header";
import Hero from "@/components/ui/landing/Hero";
import HowItWorks from "@/components/ui/landing/HowItWorks";
import PricingSection from "@/components/ui/landing/PricingSection";
import WhatToAsk from "@/components/ui/landing/WhatToAsk";



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />

    </div>
    
  );
}
