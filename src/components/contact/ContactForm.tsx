"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [projectType, setProjectType] = useState("agency");

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto max-w-xl space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-secondary"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-border bg-surface/60 px-4 py-3 font-mono text-sm text-text-primary placeholder-text-secondary/30 outline-none backdrop-blur-sm transition-all focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          placeholder="> your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-secondary"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-border bg-surface/60 px-4 py-3 font-mono text-sm text-text-primary placeholder-text-secondary/30 outline-none backdrop-blur-sm transition-all focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          placeholder="> you@company.com"
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-secondary">
          Project type
        </label>
        <div className="flex gap-3">
          {["agency", "studio", "other"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`rounded border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                projectType === type
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_10px_rgba(0,212,255,0.15)]"
                  : "border-border bg-surface/60 text-text-secondary hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded border border-border bg-surface/60 px-4 py-3 font-mono text-sm text-text-primary placeholder-text-secondary/30 outline-none backdrop-blur-sm transition-all focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          placeholder="> tell us about your project..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        [ Send Message ]
      </Button>
    </motion.form>
  );
}
