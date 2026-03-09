"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStrip() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="Stack"
        title="Technologies We Work With"
        description="Modern tools and frameworks powering our agency projects and studio ventures."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="rounded border border-border bg-surface/60 px-4 py-2.5 font-mono text-xs text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          >
            {tech.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
