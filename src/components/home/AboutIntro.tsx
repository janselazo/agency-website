"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pb-16 pt-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
          For nine years I&apos;ve shipped custom software for startups and
          growing teams — SaaS platforms, ecommerce stores, dashboards, and
          mobile apps. I&apos;m adding{" "}
          <span className="font-medium text-text-primary">
            AI to that toolkit
          </span>{" "}
          because it&apos;s starting to solve real problems, not because it
          looks good on a landing page.
        </p>
      </motion.div>
    </section>
  );
}
