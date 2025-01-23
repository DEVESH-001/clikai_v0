"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { imageUrls } from "@/utils/imageUrls";
//import { GeistSans } from "geist/font/sans";

const navItemClass = "tracking-wider text-sm uppercase font-medium";

// Updated Products structure
const products = [
  {
    title: "Financial Modeling Suite",
    description: "The ultimate tools for financial performance and analysis",
    items: [
      {
        title: "AutoUW",
        description: "Streamlined underwriting automation",
        href: "/products/autouw",
      },
      {
        title: "InvestAssist",
        description: "Manage investments and syndications with ease",
        href: "/products/investassist",
      },
      {
        title: "SmartExtract",
        description: "API solution for OS/RR Digitisation at Scale",
        href: "/products/smartextract",
      },
    ],
  },
  {
    title: "Precision Data Suite",
    description: "Cutting-edge tools for CRE document analysis",
    items: [
      {
        title: "Clarity360 OM",
        description: "Efficient Offering Memorandum extraction",
        href: "/products/clarity360-om",
      },
      {
        title: "Clarity360 Appraisals",
        description: "Fast and accurate appraisal data analysis",
        href: "/products/clarity360-appraisals",
      },
      {
        title: "Clarity360 Insurance",
        description: "Simplified insurance document digitization",
        href: "/products/clarity360-insurance",
      },
    ],
  },
];

// Updated Services structure
const services = [
  {
    title: "Loan Servicing & Administration",
    items: [
      "Financial Services & Analysis (FSA)",
      "Loan Administration",
      "Disbursement & PCNA Support",
      "Legacy Data Migration Services",
    ],
  },
  {
    title: "Deal Underwriting & Financial Modeling",
    items: [
      "Cash Flow Modeling",
      "Rent Roll Analysis",
      "Underwriting & Due Diligence Support",
      "Custom Financial Model Development",
    ],
  },
  {
    title: "Lease & Data Administration",
    items: [
      "Lease Abstraction & Audit",
      "Appraisal & OM Data Digitization",
      "Legacy Data Migration",
    ],
  },
  {
    title: "Consulting & Technology Solutions",
    items: [
      "Salesforce Customisation & Integration",
      "Custom Reporting & Dashboards",
      "CRE Technology Consulting",
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={imageUrls.logo || "/placeholder.svg"}
              alt="Clik.ai Logo"
              width={120}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu className="hidden lg:flex flex-1 justify-center">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem value="products">
                  <NavigationMenuTrigger className={navItemClass}>
                    PRODUCTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4 md:p-6 bg-white">
                      <div className="grid grid-cols-2 gap-4 bg-white">
                        {products.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center p-2 rounded-md hover:bg-blue-50 transition-colors"
                                  >
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="services">
                  <NavigationMenuTrigger className={navItemClass}>
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-4 md:p-6 bg-white">
                      <div className="grid grid-cols-2 gap-6">
                        {services.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {category.title}
                            </h3>
                            <ul className="space-y-1">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-blue-600 hover:underline">
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/why-clik-ai" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${navItemClass}`}
                    >
                      WHY CLIK.AI
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className={`${navigationMenuTriggerStyle()} ${navItemClass}`}
            >
              SIGN IN
            </Link>
            <Link href="/get-started">
              <Button
                className={`bg-blue-600 text-white hover:bg-blue-700 ${navItemClass} rounded-[8px]`}
              >
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="#"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass} `}
              >
                PRODUCTS
              </Link>
              <Link
                href="#"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
              >
                SERVICES
              </Link>
              <Link
                href="/why-clik-ai"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
              >
                WHY CLIK.AI
              </Link>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <Link
                  href="/login"
                  className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  SIGN IN
                </Link>
                <Link
                  href="/get-started"
                  className={`block px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-2 ${navItemClass}`}
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
