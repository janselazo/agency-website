"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function SplitIntro() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="scifi-card relative overflow-hidden rounded-lg border border-accent/20 bg-surface/60 p-8 backdrop-blur-sm lg:p-12"
        >
          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Agency
            </span>
            <h3 className="text-2xl font-bold text-text-primary lg:text-3xl">
              Your vision,
              <br />
              our engineering.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              We partner with startups and enterprises to design, build, and ship
              AI-powered software. From MVPs to production-scale platforms, we
              bring technical depth and velocity.
            </p>
            <div className="mt-8">
              <Button href="/agency" variant="ghost" size="sm">
                Learn more &rarr;
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={fadeUp}
          className="scifi-card relative overflow-hidden rounded-lg border border-accent-violet/20 bg-surface/60 p-8 backdrop-blur-sm lg:p-12"
        >
          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet animate-pulse-glow" />
              Studio
            </span>
            <h3 className="text-2xl font-bold text-text-primary lg:text-3xl">
              Our ideas,
              <br />
              built & launched.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              We identify high-potential opportunities and build our own products
              from the ground up. Each venture is designed, developed, and operated
              in-house.
            </p>
            <div className="mt-8">
              <Button href="/studio" variant="ghost" size="sm">
                Explore ventures &rarr;
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
