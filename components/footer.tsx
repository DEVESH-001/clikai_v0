/**
 * Footer Component
 *
 * This component renders the main footer for the Clik.ai website.
 * It includes various sections such as company information, newsletter signup,
 * product and service links, and legal information.
 *
 * Features:
 * - Responsive layout
 * - Newsletter signup form
 * - Grouped links for easy navigation
 */

"use client"


import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Main Footer component
export function Footer() {
  return (
    <footer className="bg-[#001F3F] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Company information and newsletter signup */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Side */}
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Clik.ai
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4">
              325 Front St W. Suite 400. Toronto, Ontario M5V 2Y1, CA
            </p>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-3 sm:mb-4">
              Subscribe to our Blogs
            </h3>
            <form className="flex ">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2 text-xs sm:text-sm bg-white text-gray-800 rounded-[8px]"
              />
              <Button
                type="submit"
                className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-[8px]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300">
              Products
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  AutoUW
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  InvestAssist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  SmartExtract
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Clarity360 OM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Clarity360 Appraisals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Clarity360 Insurance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Loan Servicing & Administration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Deal Underwriting & Financial Modeling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Lease & Data Administration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Consulting & Technology Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300">
              Company
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-blue-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="https://clik-ai.gitbook.io/"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mb-6 sm:mb-8" />

        {/* Copyright and legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mb-2 sm:mb-0">
            <Link href="/privacy-policy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-300">
              Terms & Conditions
            </Link>
          </div>
          <div>© 2025 Clik.ai. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

