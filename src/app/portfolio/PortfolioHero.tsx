"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function PortfolioHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-accent-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-6 bg-accent/50" />
          Portfolio
          <span className="h-px w-6 bg-accent/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Projects I&apos;m
          <br />
          <span className="glow-text-blue bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            Building & Advising
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-text-secondary"
        >
          {"> "}Studio ventures I&apos;m building. Agency work advising B2B & B2C
          SaaS startups on AI development and growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#projects" variant="primary" size="lg">
            [ View Projects ]
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            [ Work With Me ]
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
