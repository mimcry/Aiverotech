"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Car, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const project = {
  title: "HiLux Limo",
  client: "Trupasko Services LLC",
  location: "New York City, USA",
  category: "Full-Stack Web Platform",
  url: "https://www.nychiluxlimo.com",  
  description:
    "A luxury transportation platform for NYC's premier limousine service — fully licensed by the Taxi and Limousine Commission of NYC. Customers book rides, drivers manage trips, and admins control everything from a single dashboard.",
  problem: "Fully manual booking and dispatch process with no real-time visibility for drivers or customers",
  solution:
    "End-to-end web platform covering customer bookings, driver dispatch with OTP verification, Stripe payments, and a full admin control panel",
  metrics: [
    { label: "User Roles", value: "3", icon: Users },
    { label: "Vehicle Classes", value: "4+", icon: Car },
    { label: "TLC Compliant", value: "100%", icon: Shield },
  ],
  gradient: "from-amber-600/20 to-yellow-800/20",
  accentColor: "text-amber-400",
  tags: ["Next.js", "Stripe", "OTP Auth", "PDF Gen", "Admin Panel", "Driver App"],
  highlights: [
    {
      role: "Customer Portal",
      description: "Book rides with stops, apply promo codes, pay via Stripe, and track drivers in real time.",
      color: "from-amber-500/10 to-orange-500/10",
      badge: "text-amber-400 bg-amber-400/10",
    },
    {
      role: "Driver App",
      description: "OTP-verified signup, trip assignments by email link, live status updates, and earnings tracking.",
      color: "from-sky-500/10 to-blue-500/10",
      badge: "text-sky-400 bg-sky-400/10",
    },
    {
      role: "Admin Dashboard",
      description: "Full reservation control, driver payouts, fleet & promo management, and expense tracking.",
      color: "from-violet-500/10 to-purple-500/10",
      badge: "text-violet-400 bg-violet-400/10",
    },
  ],
};

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Featured case study"
          subtitle="A real product we designed, built, and shipped — from zero to a live NYC luxury transport platform."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-2xl glass overflow-hidden hover:bg-white/4 transition-all duration-500"
        >
          {/* Hero Banner */}
          <div
            className={`relative bg-gradient-to-br ${project.gradient} px-8 pt-10 pb-0 overflow-hidden`}
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-muted">
                  {project.client} &middot; {project.location}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors shrink-0"
              >
                Visit site <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 space-y-8">
            {/* Description + Problem/Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/6 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full mt-0.5 shrink-0">
                    Problem
                  </span>
                  <p className="text-xs text-muted">{project.problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full mt-0.5 shrink-0">
                    Solution
                  </span>
                  <p className="text-xs text-muted">{project.solution}</p>
                </div>

                <div className="flex items-center gap-6 pt-3 border-t border-white/6">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-center gap-2">
                      <TrendingUp size={13} className={project.accentColor} />
                      <div>
                        <p className="text-sm font-semibold">{m.value}</p>
                        <p className="text-[10px] text-muted uppercase tracking-wider">
                          {m.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/6">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={h.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-xl bg-linear-to-br ${h.color} p-5 border border-white/5`}
                >
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${h.badge} mb-3 inline-block`}>
                    {h.role}
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    {h.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
