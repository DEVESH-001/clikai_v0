"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HeroGraphs } from "@/components/hero-graphs";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-24 pb-0 mt-16 bg-gradient-to-b from-white via-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-indigo-200/20"></div>
      <div className="container mx-auto px-4 relative z-10 lg:space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-4 leading-tight text-blue-900"
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
              className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 text-blue-800 max-w-2xl mx-auto lg:mx-0"
            >
              Delivering smarter tools and expert support to transform the way
              CRE works
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base md:text-lg font-semibold px-6 py-3 rounded-[8px]"
              >
                Get Demo
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-2/5 w-full mt-8 lg:mt-0 mb-0">
            <HeroGraphs />
          </div>
        </div>
      </div>
    </section>
  );
}
