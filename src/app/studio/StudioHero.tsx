"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
export default function StudioHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-violet/5 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-violet"
        >
          <span className="h-px w-6 bg-accent-violet/50" />
          Studio
          <span className="h-px w-6 bg-accent-violet/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          I don&apos;t just build for others.
          <br />
          <span className="glow-text-green bg-gradient-to-r from-accent-violet to-accent bg-clip-text text-transparent">
            I build what&apos;s next.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-text-secondary"
        >
          {"> "}I identify breakthrough opportunities at the intersection of AI and
          underserved markets, then build focused products with small, world-class
          teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#ventures" variant="secondary" size="lg">
            [ Explore Ventures ]
          </Button>
          <Button href="/contact" variant="primary" size="lg">
            [ Partner With Us ]
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
