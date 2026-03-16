"use client";

import { motion } from "framer-motion";
export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-6 bg-accent/50" />
          Services & Pricing
          <span className="h-px w-6 bg-accent/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Advisory-first,
          <br />
          <span className="glow-text-blue bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
            outcome-driven
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-text-secondary"
        >
          {"> "}Advisory for SaaS founders building and growing with AI.
        </motion.p>
      </div>
    </section>
  );
}
