"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Terraform", category: "IaC" },
  { name: "GraphQL", category: "API" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "n8n", category: "Automation" },
  { name: "React Native", category: "Mobile" },
  { name: "Prisma", category: "ORM" },
  { name: "GitHub Actions", category: "CI/CD" },
];

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    Frontend: "from-blue-500/20 to-blue-600/10 border-blue-500/20",
    Language: "from-blue-400/20 to-blue-500/10 border-blue-400/20",
    Styling: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20",
    Backend: "from-green-500/20 to-green-600/10 border-green-500/20",
    Database: "from-amber-500/20 to-amber-600/10 border-amber-500/20",
    Cache: "from-red-500/20 to-red-600/10 border-red-500/20",
    DevOps: "from-purple-500/20 to-purple-600/10 border-purple-500/20",
    Cloud: "from-orange-500/20 to-orange-600/10 border-orange-500/20",
    IaC: "from-violet-500/20 to-violet-600/10 border-violet-500/20",
    API: "from-pink-500/20 to-pink-600/10 border-pink-500/20",
    AI: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20",
    Automation: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/20",
    Mobile: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/20",
    ORM: "from-teal-500/20 to-teal-600/10 border-teal-500/20",
    "CI/CD": "from-slate-500/20 to-slate-600/10 border-slate-500/20",
  };
  return colors[category] || "from-gray-500/20 to-gray-600/10 border-gray-500/20";
};

export default function TechStack() {
  return (
    <section id="technology" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Technology"
          title="Built with modern tools"
          subtitle="We use industry-leading technologies to deliver robust, scalable, and maintainable solutions."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`relative group rounded-xl border bg-gradient-to-br px-5 py-3 ${getCategoryColor(tech.category)} transition-all duration-300 cursor-default`}
            >
              <div className="text-center">
                <p className="text-sm font-medium text-white">{tech.name}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider mt-0.5">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
