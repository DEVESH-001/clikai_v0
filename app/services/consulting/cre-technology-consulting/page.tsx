'use client'
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GeistSans } from "geist/font/sans";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Zap,
  FileText,
  ArrowUpRight,
  Cog,
  CheckSquare,
  Lightbulb,
  TrendingUp,
  BarChart,
  Target,
  Building2,
  Settings,
} from "lucide-react";


import { Suspense } from "react";


const benefits = [
  {
    icon: Clock,
    title: "Round-the-Clock Operations",
    bullets: [
      "• Follow-the-sun model for 24/7 productivity.",
      "• Seamless workflows across time zones.",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    bullets: [
      "• Reduce operational expenses.",
      "• Scalable resource models for flexibility.",
    ],
  },
  {
    icon: Globe,
    title: "Access to Global Talent",
    bullets: [
      "• Make immediate fulfillment based on demand.",
      "• Specialized expertise at competitive rates.",
    ],
  },
  {
    icon: Zap,
    title: "Accelerated Delivery",
    bullets: [
      "• Speed up project delivery with dedicated offshore teams.",
      "• Follow-the-sun Delivery model.",
    ],
  },
];

const setupSteps = [
  {
    icon: FileText,
    title: "Service Definition",
    details: [
      "Define the scope of offshored functions.",
      "Assess commercial viability.",
    ],
  },
  {
    icon: ArrowUpRight,
    title: "Service Transition",
    details: [
      "Ensure smooth migration of processes.",
      "Establish operational frameworks and SLAs.",
    ],
  },
  {
    icon: Cog,
    title: "Service Delivery",
    details: [
      "Align teams across onshore and offshore locations.",
      "Implement secure IT infrastructure.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Service Improvement",
    details: [
      "Introduce automation and best practices.",
      "Optimize existing processes for better outcomes.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Value Addition",
    details: [
      "Innovate with new ideas and proactive proposals.",
      "Optimize IT infrastructure and business applications.",
    ],
  },
];

interface SetupStepProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  details: string[];
  isLast: boolean;
  isLeft: boolean;
}

const SetupStep = ({ icon: Icon, title, details, isLast, isLeft }: SetupStepProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex ${
        isLeft ? "flex-row-reverse" : ""
      } items-center w-full mb-12 relative`}
    >
      <div className={`w-[60%] ${isLeft ? "pl-6" : "pr-6"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 bg-white rounded-lg shadow-lg ${
            isLeft ? "text-right mr-[-12px]" : "text-left ml-[-12px]"
          } relative`}
        >
          <div
            className={`absolute top-1/2 ${
              isLeft ? "right-full" : "left-full"
            } w-12 h-0.5 bg-blue-200`}
            style={{ transform: "translateY(-50%)" }}
          />
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
          <ul className="space-y-2 text-base">
            {details.map((detail, index) => (
              <li
                key={index}
                className={`flex items-start ${isLeft ? "justify-end" : ""}`}
              >
                {!isLeft && (
                  <CheckSquare className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                  {detail}
                </span>
                {isLeft && (
                  <CheckSquare className="w-5 h-5 text-blue-500 ml-3 flex-shrink-0 mt-0.5" />
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center z-10 relative ${
              isHovered ? "scale-110" : ""
            } transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          {!isLast && (
            <div className="absolute top-full left-1/2 w-0.5 h-32 bg-blue-200 transform -translate-x-1/2" />
          )}
        </div>
      </div>
      <div className="w-5/12" />
    </div>
  );
};

interface ResultCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  details: (string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined)[];
}

const ResultCard = ({ icon: Icon, title, details }: ResultCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {details.map((detail: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
          <li key={index} className="flex items-start">
            <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function CRETechnologyConsultingPage() {
  return (
    <div
      className={`min-h-screen w-full ${GeistSans.className} relative overflow-hidden`}
    >
      {/* Curvy background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="rgba(59, 130, 246, 0.05)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fill="rgba(99, 102, 241, 0.1)"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-full relative z-10">
          <div className="flex flex-col items-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Don&apos;t Get Left Behind - Build Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Offshore Captive
                </span>{" "}
                Now
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
                Gain the competitive edge with 24/7 operations, reduced costs,
                and global talent access
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 group transition-all duration-300 rounded-[8px]"
                >
                  Talk to Us Now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full mx-auto px-4 py-6"
            >
              <div className="relative w-full h-[800px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/managed-services-ecosystem-9dLjT4mCgNpOl4DTMhp7OD0xVCvm2S.png"
                  alt="Managed Services Ecosystem"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fill="rgba(129, 140, 248, 0.1)"
              d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,96C672,75,768,117,864,154.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,96C672,75,768,117,864,154.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Offshore Captive Centers?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Suspense fallback={<div>Loading benefit cards...</div>}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-blue-100 mr-4">
                          <benefit.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {benefit.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-600">•</span>
                            <span>{bullet.replace("• ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Offshore Captive Center Setup Model Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fill="rgba(99, 102, 241, 0.1)"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Set Up Your Offshore Captive Center
            </h2>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            {setupSteps.map((step, index) => (
              <wSetupStep
                key={index}
                {...step}
                isLast={index === setupSteps.length - 1}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Results Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results You Can Measure and Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Captive Centers are built to deliver measurable outcomes, from
              cost savings to operational excellence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResultCard
                icon={BarChart}
                title="Service Measurement"
                details={[
                  "Detailed KPI and SLA reporting.",
                  "Risk and project reporting for transparency.",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ResultCard
                icon={Target}
                title="Transformation Goals"
                details={[
                  "Implement optimization strategies.",
                  "Achieve scalability and long-term growth.",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Clik.ai?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Deep CRE Expertise",
                description:
                  "Our specialized knowledge ensures tailored support for your unique commercial real estate needs.",
              },
              {
                icon: Settings,
                title: "Flexible Resource Models",
                description:
                  "Adaptable solutions that scale with your business requirements and growth objectives.",
              },
              {
                icon: ArrowUpRight,
                title: "End-to-End Support",
                description:
                  "Comprehensive assistance from transition to scalable growth, ensuring smooth operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Transform Your CRE Business Together
            </h2>
            <p className="text-blue-200 mb-8">
              Ready to explore how our CRE technology solutions can transform
              your business?
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-300 rounded-[8px]"
                >
                  Talk to Us Now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
