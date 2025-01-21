"use client"

import { useState } from "react"
import { HeroSection } from "@/components/01-hero-section";
//import { LogoCarousel } from "@/components/02-logo-carousel"
import { QuizSection } from "@/components/03-quiz-section"
import { ProductCards } from "@/components/04-product-cards"
import { PricingSection } from "@/components/05-pricing-section"
import { ServicesSection } from "@/components/06-services-section"
import { TestimonialsSection } from "@/components/07-testimonials"
import { FAQSection } from "@/components/08-faq-section"


export default function Home() {
  const [highlightedProduct, setHighlightedProduct] = useState("AutoUW")

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-indigo-100/30"></div>
      <div className="relative z-10">
        <HeroSection />
        {/* <LogoCarousel /> */}
        <QuizSection onProductRecommended={setHighlightedProduct} />
        <ProductCards highlightedProduct={highlightedProduct} />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </div>
  )
}

