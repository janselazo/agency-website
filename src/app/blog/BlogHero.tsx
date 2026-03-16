"use client";

import { motion } from "framer-motion";
export default function BlogHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-6 bg-accent/50" />
          Blog
          <span className="h-px w-6 bg-accent/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl"
        >
          Insights &
          <span className="glow-text-blue text-accent"> Thinking</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl font-mono text-sm text-text-secondary"
        >
          {"> "}Ideas on AI engineering, startup building, and scalable software.
        </motion.p>
      </div>
    </section>
  );
}
