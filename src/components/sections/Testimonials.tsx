"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinFlow",
    content:
      "AiveroTech transformed our entire data infrastructure. Their AI-first approach cut our processing costs by 40% and their team delivered ahead of schedule. The quality of engineering is on par with top Silicon Valley firms.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, MediConnect",
    content:
      "Working with AiveroTech was a game-changer. They built our telemedicine platform from scratch and scaled it to serve 10,000+ patients. Their technical expertise and communication are exceptional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering, AutoScale",
    content:
      "We needed a team that could integrate AI into our CRM without disrupting existing workflows. AiveroTech delivered an elegant solution that increased our conversion rates by 65%. Highly recommended.",
    rating: 5,
  },
  {
    name: "James Okoye",
    role: "CEO, CloudBridge",
    content:
      "The cloud migration AiveroTech handled for us was flawless. Zero downtime, 60% cost reduction, and they set up monitoring that catches issues before they become problems. True professionals.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What our clients say"
          subtitle="Don't take our word for it — hear from the teams we've helped succeed."
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl glass-strong p-8 sm:p-12 text-center"
            >
              <Quote size={40} className="mx-auto mb-6 text-primary/30" />

              <p className="text-lg sm:text-xl leading-relaxed text-white/90 mb-8">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <span key={i} className="text-amber-400 text-sm">
                      &#9733;
                    </span>
                  )
                )}
              </div>

              <div>
                <p className="font-semibold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
