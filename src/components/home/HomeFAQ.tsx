"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is Zenpho?",
    a: "Zenpho is an AI development agency and startup venture studio. We help clients build intelligent software through our agency arm, and we create our own AI-powered products through our studio.",
  },
  {
    q: "What's the difference between the Agency and the Studio?",
    a: "The Agency works with external clients — startups, scale-ups, and enterprises — to design, build, and ship custom software. The Studio is where we build our own products and ventures from scratch, tackling problems we've identified across industries.",
  },
  {
    q: "What types of projects do you take on?",
    a: "We specialize in AI-powered products, custom software platforms, MVPs, system modernization, and data engineering. If it involves building software with intelligence baked in, we're the right team.",
  },
  {
    q: "How do you approach new projects?",
    a: "Every engagement starts with a Discovery phase where we understand your goals, users, and technical landscape. From there we design, build in agile sprints, and deploy — with growth mindset embedded from the very first decision.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Absolutely. Many of our best partnerships started at the idea stage. We offer sprint-based engagements and MVP packages designed specifically for founders who need to move fast and validate quickly.",
  },
  {
    q: "Can I see your pricing?",
    a: "Yes — we believe in transparent pricing. Visit our Services & Pricing page for detailed engagement models starting from $15K per sprint, monthly partnerships, and custom enterprise plans.",
  },
  {
    q: "Where is Zenpho based?",
    a: "We're a remote-first team working across time zones. Our clients span from Silicon Valley to Europe to Latin America. We adapt our working hours to ensure seamless collaboration regardless of geography.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Zenpho."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-surface"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-medium text-text-primary">
                {faq.q}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-text-secondary transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
