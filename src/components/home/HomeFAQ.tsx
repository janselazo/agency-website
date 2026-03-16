"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Who is Janse Lazo?",
    a: "I'm a builder and advisor focused on AI Growth and Development. I help B2B and B2C SaaS startups through my agency work — advising and building for clients — and I create my own AI-powered products through my studio.",
  },
  {
    q: "What's the difference between the Agency and the Studio?",
    a: "The Agency is where I advise and build for external clients — startups and scale-ups. The Studio is where I build my own products and ventures from scratch, tackling problems I've identified across industries.",
  },
  {
    q: "What types of projects do you take on?",
    a: "I specialize in AI-powered products, custom software platforms, MVPs, system modernization, and data engineering for B2B and B2C SaaS startups. If it involves AI Software Development or AI Software Growth, I can help.",
  },
  {
    q: "How do you approach new projects?",
    a: "Every engagement starts with a Discovery phase where I understand your goals, users, and technical landscape. From there I design, build in agile sprints, and deploy — with growth mindset embedded from the very first decision.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Absolutely. Many of my best partnerships started at the idea stage. I offer sprint-based engagements and MVP packages designed specifically for founders who need to move fast and validate quickly.",
  },
  {
    q: "Can I see your pricing?",
    a: "Yes — I believe in transparent pricing. Visit the Services & Pricing page for detailed engagement models starting from $15K per sprint, monthly partnerships, and custom enterprise plans.",
  },
  {
    q: "Where are you based?",
    a: "I work remotely across time zones. My clients span from Silicon Valley to Europe to Latin America. I adapt my working hours to ensure seamless collaboration regardless of geography.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Janse Lazo."
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
