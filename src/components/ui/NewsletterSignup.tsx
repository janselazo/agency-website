"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface NewsletterSignupProps {
  compact?: boolean;
}

export default function NewsletterSignup({ compact }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    // TODO: Wire to newsletter provider (Buttondown, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  if (compact) {
    return (
      <div className="rounded border border-border bg-surface/40 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">
          Newsletter
        </p>
        {status === "success" ? (
          <p className="font-mono text-xs text-accent">
            Thanks for subscribing.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="> email"
              required
              disabled={status === "loading"}
              className="flex-1 rounded border border-border bg-background px-3 py-2 font-mono text-xs text-text-primary placeholder-text-secondary/30 outline-none transition-all focus:border-accent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded border border-accent bg-accent/10 px-3 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/20 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border bg-surface/60 p-8 text-center backdrop-blur-sm"
      >
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Newsletter
        </span>
        <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
          Get weekly insights on AI Growth & Development
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Join SaaS founders getting actionable strategies on AI Software
          Development and AI Software Growth. No fluff.
        </p>
        {status === "success" ? (
          <p className="mt-6 font-mono text-sm text-accent">
            Thanks for subscribing. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="> your@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 rounded border border-border bg-background px-4 py-3 font-mono text-sm text-text-primary placeholder-text-secondary/30 outline-none transition-all focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] disabled:opacity-50"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "loading"}
            >
              {status === "loading" ? "[ ... ]" : "[ Subscribe ]"}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
