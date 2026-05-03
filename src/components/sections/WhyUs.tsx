"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Layers, DollarSign } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const differentiators = [
  {
    icon: Brain,
    title: "AI-First Approach",
    description:
      "We integrate AI into every layer of our solutions — from development workflows to end-user features. This means smarter products built faster.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Agile sprints, rapid prototyping, and continuous delivery. We move fast without sacrificing quality, getting your product to market ahead of schedule.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Every system we build is designed to grow. Microservices, event-driven patterns, and cloud-native infrastructure ensure you're ready for any scale.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: DollarSign,
    title: "Cost-Efficient for Global Clients",
    description:
      "Based in Nepal, serving globally. Get world-class engineering at competitive rates without compromising on quality or communication.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 30, suffix: "+", label: "Global Clients" },
  { end: 3, suffix: "x", label: "Faster Delivery" },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Why AiveroTech"
          title="What sets us apart"
          subtitle="We're not just another dev shop. We're your strategic technology partner focused on measurable outcomes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl glass p-8 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}
              >
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
