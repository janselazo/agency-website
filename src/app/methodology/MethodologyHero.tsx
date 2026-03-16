"use client";

import { motion } from "framer-motion";
import { experienceStats } from "@/lib/data";

export default function MethodologyHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-accent-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-6 bg-accent/50" />
          Methodology
          <span className="h-px w-6 bg-accent/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Growth mindset,
          <br />
          <span className="glow-text-blue bg-gradient-to-r from-accent via-blue-400 to-accent-violet bg-clip-text text-transparent">
            embedded from day one
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-text-secondary"
        >
          {"> "}With over 8 years building software solutions across industries,
          I&apos;ve developed a methodology that treats growth not as an afterthought,
          but as a core architectural principle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {experienceStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded border border-border bg-surface/50 px-3 py-3 text-center backdrop-blur-sm"
            >
              <div className="font-mono text-xl font-bold text-accent glow-text-blue sm:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
