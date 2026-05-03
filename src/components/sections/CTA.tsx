"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, CheckCircle, Loader2, AlertCircle, X, Mail } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

function SuccessDialog({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-2xl glass-strong p-8 text-center overflow-hidden"
        >
          {/* Glow blobs */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X size={14} className="text-muted" />
          </button>

          {/* Icon */}
          <div className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-linear-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-accent/20 animate-ping" style={{ animationDuration: "2s" }} />
            <Mail size={32} className="text-primary-light relative z-10" />
          </div>

          <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
          <p className="text-muted text-sm leading-relaxed mb-1">
            Thanks for reaching out. We&apos;ve got your message and
          </p>
          <p className="text-primary-light font-semibold text-base mb-6">
            we&apos;ll get in touch with you shortly.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-muted bg-white/4 rounded-full px-4 py-2 w-fit mx-auto mb-8">
            <CheckCircle size={13} className="text-emerald-400" />
            Typically respond within 24 hours
          </div>

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setShowDialog(true);
      setTimeout(() => setStatus("idle"), 500);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      {showDialog && <SuccessDialog onClose={() => setShowDialog(false)} />}

      <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-primary/5" />
        <div className="absolute top-0 left-1/3 w-150 h-150 bg-primary/6 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/3 w-100 h-100 bg-accent/6 rounded-full blur-[200px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary-light border border-primary/20">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                Let&apos;s build something
                <br />
                <span className="text-gradient">powerful together</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
                Ready to transform your business with technology? Tell us about
                your project and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  "Free project consultation",
                  "Detailed technical proposal",
                  "Transparent pricing — no hidden fees",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle size={12} className="text-primary-light" />
                    </div>
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass-strong p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-white/4 border border-white/6 px-4 py-3 text-sm text-white placeholder-muted/40 outline-none focus:border-primary/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-white/4 border border-white/6 px-4 py-3 text-sm text-white placeholder-muted/40 outline-none focus:border-primary/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-white/4 border border-white/6 px-4 py-3 text-sm text-white placeholder-muted/40 outline-none focus:border-primary/40 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">
                    <AlertCircle size={15} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
