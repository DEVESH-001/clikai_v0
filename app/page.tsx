"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/sections/01-hero-section";
import { LogoCarousel } from "@/components/sections/02-logo-carousel";
import { QuizSection } from "@/components/sections/03-quiz-section";
import { ProductCards } from "@/components/sections/04-product-cards";
import { PricingSection } from "@/components/sections/05-pricing-section";
import { ServicesSection } from "@/components/sections/06-services-section";
import { TestimonialsSection } from "@/components/sections/07-testimonials";
import { FAQSection } from "@/components/sections/08-faq-section";

//import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [highlightedProduct, setHighlightedProduct] = useState("AutoUW");

  useEffect(() => {

    if (window.location.hash === '#pricing') {

      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30"></div>
      <div className="relative z-10">
        <div className="flex flex-col">
          <HeroSection />
          <LogoCarousel />
        </div>

        <QuizSection onProductRecommended={setHighlightedProduct} />
        <ProductCards highlightedProduct={highlightedProduct} />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </div>
  );
}
