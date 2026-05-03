"use client";

import { motion } from "framer-motion";

const companies = [
  "TechVenture",
  "CloudScale",
  "DataBridge",
  "NexaFlow",
  "InnoSpark",
  "QuantumLabs",
  "CyberNova",
  "PrimeStack",
];

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted mb-10 tracking-wide uppercase"
        >
          Trusted by startups and growing businesses
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="flex items-center gap-3 text-muted/50 hover:text-muted transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-xs font-bold text-primary/60">
                    {company[0]}
                  </span>
                </div>
                <span className="text-sm font-medium tracking-wide">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
