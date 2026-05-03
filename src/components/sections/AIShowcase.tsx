"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, Zap, Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const chatMessages = [
  {
    role: "user" as const,
    content: "Analyze our Q4 sales data and identify trends",
  },
  {
    role: "ai" as const,
    content:
      "I've analyzed 12,847 transactions from Q4. Key findings: Revenue up 23% YoY, mobile conversions increased 45%, and the APAC region showed the strongest growth at 67%. I've generated a detailed report with actionable recommendations.",
  },
  {
    role: "user" as const,
    content: "Create automated follow-ups for high-value leads",
  },
  {
    role: "ai" as const,
    content:
      "Done! I've set up a 5-step nurture sequence for 234 high-value leads (>$10K potential). Emails are personalized based on industry and engagement history. Expected conversion lift: ~35%.",
  },
];

const features = [
  {
    icon: Bot,
    title: "Intelligent Chatbots",
    description:
      "Context-aware conversational AI that understands intent, handles complex queries, and integrates with your business systems.",
  },
  {
    icon: Sparkles,
    title: "Autonomous Agents",
    description:
      "Self-directed AI agents that complete multi-step tasks, make decisions, and learn from outcomes to improve over time.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "End-to-end process automation connecting your tools with intelligent routing, error handling, and real-time monitoring.",
  },
];

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages >= chatMessages.length) return;

    const timeout = setTimeout(() => {
      if (chatMessages[visibleMessages].role === "ai") {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => prev + 1);
        }, 1500);
      } else {
        setVisibleMessages((prev) => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [visibleMessages]);

  return (
    <div className="rounded-2xl glass-strong overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-muted flex items-center justify-center gap-1">
            <Cpu size={10} className="text-primary" />
            AiveroTech AI Assistant
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4 min-h-[320px]">
        <AnimatePresence>
          {chatMessages.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary/20 text-white rounded-br-md"
                    : "bg-white/[0.04] text-muted rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 px-4 py-2"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-muted ml-1">AI is thinking...</span>
          </motion.div>
        )}
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-sm text-white placeholder-muted/50 outline-none"
            readOnly
          />
          <button className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AIShowcase() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="AI & Automation"
          title="Intelligent systems that work for you"
          subtitle="From conversational AI to autonomous agents, we build intelligent systems that transform how your business operates."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex gap-4 p-6 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <feature.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChatDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
