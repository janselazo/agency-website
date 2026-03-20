"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CaseStudiesHero() {
  return (
    <section className="hero-sky relative flex min-h-[75vh] items-center justify-center overflow-hidden pt-28">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-block rounded-full bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-widest text-accent shadow-soft ring-1 ring-accent/25"
        >
          Case studies
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="heading-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          AI software in
          <br />
          <span className="text-accent">real deployments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          A sample of client engagements and shipped products—web, mobile, data,
          and agent-driven workflows—with outcomes we measured together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button href="#projects" variant="primary" size="lg">
            Browse case studies
          </Button>
          <Button href="/contact" variant="dark" size="lg" showLiveDot>
            Start a project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
