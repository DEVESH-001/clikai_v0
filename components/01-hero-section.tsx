"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HeroGraphs } from "./hero-graphs";
import { LogoCarousel } from "./02-logo-carousel"; // Import LogoCarousel
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen w-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 overflow-hidden flex flex-col justify-between">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 via-purple-200/20 to-indigo-200/20"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-1 items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Text Section */}
          <div className="lg:w-3/5 w-full mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-900"
            >
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                All-in-One
              </span>{" "}
              Platform for CRE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 text-gray-700 max-w-3xl"
            >
              Delivering smarter tools and expert support to transform the way
              CRE works
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg font-semibold px-8 py-4 rounded-lg"
              >
                Start Your Analysis
              </Button>
            </motion.div>
          </div>

          {/* Graph Section */}
          <div className="lg:w-2/5 w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-h-[300px] lg:max-h-[400px] max-w-[90%] lg:max-w-[80%] w-full"
            >
              <HeroGraphs />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative z-10">
        <LogoCarousel />
      </div>
    </section>
  );
}
