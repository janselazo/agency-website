"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Advisory calls can be booked within a few days. For ongoing advisory, most engagements kick off within 1-2 weeks of signing.",
  },
  {
    q: "Do you only advise, or do you build too?",
    a: "I focus on advisory — strategy, architecture, and growth guidance. For hands-on development, I can connect you with trusted partners or recommend build approaches.",
  },
  {
    q: "Can I scale the commitment up or down?",
    a: "Absolutely. Monthly advisory tiers are flexible. Need more depth for a launch? I can add sessions. Post-launch? I can dial back. No long-term lock-in.",
  },
  {
    q: "What technologies do you work with?",
    a: "I'm technology-agnostic but opinionated. My core stack includes TypeScript, React/Next.js, Python, Node.js, PostgreSQL, and major cloud platforms (AWS, GCP, Vercel). For AI, I work with OpenAI, LangChain, TensorFlow, and custom ML pipelines.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — many of my clients are non-technical founders with a strong vision. I act as your technical and growth advisor, translating business goals into actionable strategy.",
  },
  {
    q: "What does an advisory call look like?",
    a: "A 90-minute deep-dive on your specific challenge — technical architecture, product roadmap, GTM strategy, or growth metrics. You get a written summary and action items. No pitch, no upsell.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        description="Answers to the questions I hear most often."
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
