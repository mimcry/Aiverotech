"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Workflow,
  Cloud,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    shortDesc: "Scalable web apps & SaaS platforms",
    description:
      "We build high-performance web applications and SaaS platforms using modern frameworks. From complex dashboards to customer-facing portals, our solutions are built for scale.",
    features: [
      "Next.js & React applications",
      "Progressive Web Apps",
      "Real-time dashboards",
      "E-commerce platforms",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    shortDesc: "Cross-platform mobile solutions",
    description:
      "Native-quality mobile applications built with React Native. Ship to iOS and Android simultaneously with a single codebase, without compromising on performance or UX.",
    features: [
      "React Native development",
      "Cross-platform deployment",
      "Offline-first architecture",
      "App Store optimization",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Brain,
    title: "AI & LLM Systems",
    shortDesc: "Intelligent automation & AI agents",
    description:
      "Custom AI solutions powered by large language models. We build intelligent chatbots, AI agents, content generation systems, and predictive analytics tailored to your business.",
    features: [
      "Custom LLM fine-tuning",
      "AI-powered chatbots",
      "Autonomous AI agents",
      "Predictive analytics",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Workflow,
    title: "Automation Pipelines",
    shortDesc: "Workflow automation & integration",
    description:
      "End-to-end workflow automation using n8n and custom pipelines. We connect your tools, eliminate manual processes, and build self-running systems that save hours every week.",
    features: [
      "n8n workflow design",
      "API integrations",
      "Data pipeline automation",
      "Custom trigger systems",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDesc: "Infrastructure & deployment",
    description:
      "Robust cloud infrastructure on AWS, GCP, or Azure. We handle everything from containerization to CI/CD pipelines, ensuring your applications are secure, scalable, and reliable.",
    features: [
      "AWS / GCP / Azure",
      "Docker & Kubernetes",
      "CI/CD automation",
      "Monitoring & observability",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="What We Build"
          title="Services that scale your business"
          subtitle="From concept to deployment, we deliver end-to-end solutions that drive growth and efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              } ${
                activeIndex === index
                  ? "glass-strong scale-[1.02]"
                  : "glass hover:bg-white/[0.04]"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                >
                  <service.icon size={22} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted mb-4">{service.shortDesc}</p>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-muted/80 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-1 text-sm text-primary-light group-hover:gap-2 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
