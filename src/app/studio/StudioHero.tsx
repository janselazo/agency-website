"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function StudioHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-accent-violet/10 blur-[90px]" />
        <div className="absolute bottom-1/3 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-block text-xs font-semibold uppercase tracking-widest text-accent-violet"
        >
          Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          SoldTools—software for
          <br />
          <span className="bg-gradient-to-r from-accent-violet to-accent-warm bg-clip-text text-transparent">
            high-performing sales floors
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          One focused studio product: a toolkit for automotive sales teams to
          capture demand, book more appointments, and grow referrals—backed by
          the same AI and product discipline I bring to client builds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button
            href="https://app.soldtools.com/login"
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open SoldTools
          </Button>
          <Button href="#soldtools" variant="secondary" size="lg">
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
