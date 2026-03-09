"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-lg border border-accent/20 bg-surface/60 p-12 text-center backdrop-blur-sm lg:p-20"
      >
        <div className="absolute inset-0 scifi-grid" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent-violet/10 blur-[80px]" />
        </div>

        <div className="relative z-10">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-6 bg-accent/50" />
            Initiate Contact
            <span className="h-px w-6 bg-accent/50" />
          </span>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Ready to build something
            <br />
            <span className="glow-text-blue text-accent">extraordinary?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-secondary">
            Whether you need a development partner or want to explore a
            collaboration, we&apos;d love to hear from you.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              [ Get in Touch ]
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
