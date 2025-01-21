"use client";

import * as React from "react";


import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check } from "lucide-react";
import { Slider } from "../components/ui/slider";

export function PricingSection() {
  const [dealsPerMonth, setDealsPerMonth] = React.useState(10);
  const [isYearly, setIsYearly] = React.useState(false);

  const getHighlightedPlan = (deals: number) => {
    if (deals <= 4) return "self-service";
    if (deals <= 20) return "small-business";
    return "enterprise";
  };

  const highlightedPlan = getHighlightedPlan(dealsPerMonth);

  const calculateYearlyPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 10).toFixed(0);
  };

  const calculateSavings = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 10;
    const regularYearlyPrice = monthlyPrice * 12;
    const savingsPercentage = (
      ((regularYearlyPrice - yearlyPrice) / regularYearlyPrice) *
      100
    ).toFixed(0);
    return savingsPercentage;
  };

  // Function to handle billing period toggle
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative">
      {/* Background with grid pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Choose the right plan for your business
          </h2>
          <p className="text-base text-gray-300">
            Scale your underwriting operations with our flexible plans
          </p>
        </div>

        {/* Billing Toggle
        <div className="flex items-center justify-center gap-3 mb-6 ">
          <span
            className={`text-lg ${
              !isYearly ? "text-white font-bold" : "text-gray-200 "
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={toggleBilling}
            className={`relative inline-flex h-6 w-12 items-center rounded-full 
      ${
        isYearly ? "bg-black" : "bg-slate-600"
      } transition-colors duration-300 `}
          />
          <span
            className={`h-5 w-5 transform rounded-full bg-white transition-transform duration-300 
        ${isYearly ? "translate-x-6" : "translate-x-1"}`}
          />

          <span
            className={`text-lg ${
              isYearly ? "text-white font-bold" : "text-gray-200"
            }`}
          >
            Yearly{" "}
            <span className="text-green-400 text-base font-bold">
              (Save {calculateSavings(99)}%)
            </span>
          </span>
        </div> */}
        {/* Billing Toggle */}

        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className={`text-lg ${
              !isYearly ? "text-white font-bold" : "text-gray-200"
            }`}
          >
            Monthly
          </span>

          <div className="relative  border-gray-300 p-0.5">
            <button
              onClick={toggleBilling}
              className={`relative inline-flex h-6 w-12 items-center rounded-full ${
                isYearly ? "bg-black" : "bg-slate-600"
              } transition-colors duration-300`}
            >
              <span
                className={`h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <span
            className={`text-lg ${
              isYearly ? "text-white font-bold" : "text-gray-200"
            }`}
          >
            Yearly{" "}
            <span className="text-green-400 text-base font-bold">
              (Save {calculateSavings(99)}%)
            </span>
          </span>
        </div>

        {/* Deals Slider */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-center mb-3 text-lg text-white">
            I need{" "}
            <span className="font-bold text-blue-300">{dealsPerMonth}</span>{" "}
            deals per month
          </p>

          <Slider
            value={[dealsPerMonth]}
            onValueChange={(value) => setDealsPerMonth(value[0])}
            max={40}
            step={1}
            className="py-2 w-full h-1 rounded-full relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{
              background: `linear-gradient(to right, black ${(
                (dealsPerMonth / 40) *
                100
              ).toFixed(0)}%, white 0%)`,
            }}
          />

          <div className="flex justify-between text-sm text-blue-200 px-1 mt-2">
            {[0, 10, 20, 30, 40].map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>

        {/* <div className="max-w-2xl mx-auto mb-10">
          <p className="text-center mb-3 text-lg text-white">
            I need{" "}
            <span className="font-bold text-blue-300">{dealsPerMonth}</span>{" "}
            deals per month
          </p>

          <Slider
            value={[dealsPerMonth]}
            onValueChange={(value) => setDealsPerMonth(value[0])}
            max={40}
            step={1}
            className="py-2 w-full h-1 bg-black/90 rounded-full relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <div className="flex justify-between text-sm text-blue-200 px-1 mt-2">
            {[0, 10, 20, 30, 40].map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div> */}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Self Service Plan */}
          <Card
            className={`relative overflow-hidden flex flex-col w-full ${
              highlightedPlan === "self-service"
                ? "border-blue-300 border-2 bg-blue-200"
                : "border-gray-300 bg-blue-50"
            }`}
          >
            <div className="p-5 h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1 text-slate-600">
                  Self-Service Plan
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Ideal for 1-4 deals per month
                </p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-slate-600">
                    ${isYearly ? calculateYearlyPrice(49) : "49"}
                    <span className="text-sm font-normal text-slate-600">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 font-semibold">
                      Save {calculateSavings(49)}%
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <Button
                  className="w-full border-2 border-blue-600 bg-black hover:bg-slate-300 hover:text-black"
                  size="lg"
                  variant={
                    highlightedPlan === "self-service" ? "default" : "outline"
                  }
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <p className="font-medium mb-3 text-sm text-slate-900">
                Plan includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Self-Managed - DIY</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Online Video Tutorials</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Multifamily only</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t p-5">
              <p className="font-medium mb-2 text-sm h-5 text-slate-600">
                Best Suited For:
              </p>
              <Card className="bg-[#002b57] p-3 h-[160px] overflow-y-auto">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Teams with analysts seeking automated parsing tools</li>
                  <li>• Users eager to master DIY extraction</li>
                  <li>
                    • Clients testing our extraction capabilities before scaling
                  </li>
                  <li>• Budget-conscious users starting with automation</li>
                </ul>
              </Card>
            </div>
          </Card>

          {/* Small Business Plan */}
          <Card
            className={`relative overflow-hidden flex flex-col w-full ${
              highlightedPlan === "small-business"
                ? "border-blue-300 border-2 bg-blue-200"
                : "border-gray-300 bg-blue-50"
            }`}
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-xs font-medium">
              Most Popular
            </div>
            <div className="p-5 h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1 text-slate-600">
                  Small Business Plan
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-3">
                  Clik Analysts Do It for You
                </p>
                <div className="mb-4">
                  <div className="flex flex-col items-start">
                    <span className="text-2xl font-bold text-slate-600">
                      ${isYearly ? calculateYearlyPrice(99) : "99"}
                      <span className="text-sm font-normal">
                        /{isYearly ? "year" : "month"} (Platform Fee)
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      + $30 per deal
                    </span>
                    {isYearly && (
                      <p className="text-sm text-green-600 font-semibold">
                        Save {calculateSavings(99)}%
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Button
                  className="w-full border-2 border-blue-600 bg-black hover:bg-slate-300 hover:text-black"
                  size="lg"
                  variant={
                    highlightedPlan === "small-business" ? "default" : "outline"
                  }
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <p className="font-medium mb-3 text-sm text-gray-900">
                Plan includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Ideal for 5–20 deals per month
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Financial models completed by Clik Analysts
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    All Asset Classes Included
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t p-5">
              <p className="font-medium mb-2 text-sm h-5 text-slate-600">
                Best Suited For:
              </p>
              <Card className="bg-[#002b57] p-3 h-[160px] overflow-y-auto">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Customers seeking hands-free financial modeling</li>
                  <li>• Teams looking to scale underwriting without hiring</li>
                  <li>
                    • Clients requiring analyst expertise for deal accuracy
                  </li>
                  <li>
                    • Users balancing automation with professional support
                  </li>
                </ul>
              </Card>
            </div>
          </Card>

          {/* Enterprise Plan */}
          <Card
            className={`relative overflow-hidden flex flex-col w-full ${
              highlightedPlan === "enterprise"
                ? "border-blue-300 border-2 bg-blue-200"
                : "border-gray-300 bg-blue-50"
            }`}
          >
            <div className="p-5 h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1 text-slate-600">
                  Enterprise Plan
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Complete Automation & Expert Support
                </p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-slate-600">
                    Custom Pricing
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Button
                  className="w-full border-2 border-blue-600 bg-black hover:bg-slate-300 hover:text-black"
                  size="lg"
                  variant={
                    highlightedPlan === "enterprise" ? "default" : "outline"
                  }
                >
                  Talk to Us
                </Button>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <p className="font-medium mb-3 text-sm text-slate-900">
                Plan includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Unlimited self-created deals
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    20 complementary Clik Analyst deals per month
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    $30 per additional Clik Analyst underwriting
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Access to self-service data extraction tools
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Custom model integration with unlimited updates
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Excel Add-in to sync updates
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    Comprehensive platform training
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">
                    All Asset Classes Included
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t p-5">
              <p className="font-medium mb-2 text-sm h-5 text-slate-600">
                Best Suited For:
              </p>
              <Card className="bg-[#002b57] p-3 h-[160px] overflow-y-auto">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• High-volume underwriting teams</li>
                  <li>• Companies needing scalable, customizable solutions</li>
                  <li>• Power users combining automation and expert support</li>
                </ul>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
