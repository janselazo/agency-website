"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { experienceStats } from "@/lib/data";

const clients = [
  "TechFlow",
  "Meridian AI",
  "NovaLabs",
  "Arclight",
  "Vantage",
  "Helix Corp",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-violet/5 blur-[120px]" />
      </div>


      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-px w-8 bg-accent/50" />
            AI Growth &amp; Development
            <span className="inline-block h-px w-8 bg-accent/50" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
        >
          I build and scale
          <br />
          <span className="glow-text-blue bg-gradient-to-r from-accent via-blue-400 to-accent-violet bg-clip-text text-transparent">
            software companies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-lg font-mono text-sm leading-relaxed text-text-secondary"
        >
          {"> "}AI Software Development and AI Software Growth for B2B &amp; B2C
          SaaS startups. Building ventures. Advising clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/agency" variant="primary" size="lg">
            [ Agency ]
          </Button>
          <Button href="/studio" variant="secondary" size="lg">
            [ Studio ]
          </Button>
        </motion.div>

        {/* Stats — holographic panels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {experienceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="rounded border border-border bg-surface/60 px-4 py-4 text-center backdrop-blur-sm"
            >
              <div className="font-mono text-2xl font-bold text-accent glow-text-blue sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary/50">
            Companies I&apos;ve worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="font-mono text-xs text-text-secondary/30 transition-colors hover:text-accent/60"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent/50">
            Scroll
          </span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
