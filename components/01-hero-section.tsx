"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { HeroGraphs } from "./hero-graphs"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 overflow-hidden pt-24 pb-8">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 via-purple-200/20 to-indigo-200/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="lg:w-3/5 mb-8 lg:mb-0 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left mb-6 leading-tight text-gray-900"
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
              className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-8 text-gray-700 max-w-2xl mx-auto lg:mx-0"
            >
              Delivering smarter tools and expert support to transform the way CRE works
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
                Start Your Analysis
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-2/5 w-full mt-8 lg:mt-0">
            <HeroGraphs />
          </div>
        </div>
      </div>
    </section>
  )
}

