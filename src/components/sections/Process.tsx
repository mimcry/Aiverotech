"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into your business goals, user needs, and technical requirements to define a clear product roadmap.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Our designers create stunning, intuitive interfaces with pixel-perfect attention to detail and user experience.",
    number: "02",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Engineers bring designs to life with clean, tested, and well-documented code using modern tech stacks.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "We handle infrastructure, CI/CD, monitoring, and launch — ensuring a smooth, zero-downtime deployment.",
    number: "04",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Post-launch optimization, performance monitoring, and iterative improvements to help your product grow.",
    number: "05",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="From idea to impact"
          subtitle="A proven 5-step process that ensures every project is delivered on time, on budget, and beyond expectations."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative text-center"
              >
                <div className="relative mx-auto mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300"
                  >
                    <step.icon size={24} className="text-primary-light" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold text-primary/40 bg-background px-1.5 py-0.5 rounded-md border border-primary/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
