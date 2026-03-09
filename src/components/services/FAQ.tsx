"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How quickly can you start a new project?",
    a: "Most engagements kick off within 1-2 weeks of signing. For urgent projects, we can begin discovery within days.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes, 100%. Everything we build is yours. Full source code, documentation, and infrastructure configuration — transferred at the end of every engagement.",
  },
  {
    q: "Can we scale the team up or down?",
    a: "Absolutely. Our Partnership tier is designed to flex monthly. Need more firepower for a launch? We scale up. Post-launch stabilization? We scale down. No long-term lock-in.",
  },
  {
    q: "What technologies do you work with?",
    a: "We're technology-agnostic but opinionated. Our core stack includes TypeScript, React/Next.js, Python, Node.js, PostgreSQL, and major cloud platforms (AWS, GCP, Vercel). For AI, we work with OpenAI, LangChain, TensorFlow, and custom ML pipelines.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — many of our clients are non-technical founders with a strong vision. We act as your technical co-founder, translating business goals into architecture and handling all the engineering.",
  },
  {
    q: "What does your discovery process look like?",
    a: "Discovery typically takes 1-2 weeks and includes stakeholder interviews, technical landscape assessment, competitive analysis, and a detailed proposal with architecture recommendations, timeline, and investment breakdown.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        description="Answers to the questions we hear most often."
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
              className="flex w-full items-center justify-between px-6 py-5 text-left"
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
