"use client";

import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function PricingGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="Pricing"
        title="Engagement Models"
        description="Advisory options from a single call to full product + growth partnership."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`scifi-card relative flex flex-col rounded-lg border p-8 backdrop-blur-sm ${
              tier.highlighted
                ? "border-accent/40 bg-surface/80 glow-blue"
                : "border-border bg-surface/60"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border border-accent/50 bg-accent/10 px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                Recommended
              </span>
            )}

            <div className="mb-6">
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {tier.description}
              </p>
            </div>

            <div className="mb-8">
              <span className="font-mono text-4xl font-bold text-accent glow-text-blue">
                {tier.price}
              </span>
              <span className="ml-2 font-mono text-xs text-text-secondary">
                {tier.priceNote}
              </span>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href="/contact"
              variant={tier.highlighted ? "primary" : "secondary"}
              size="lg"
              className="w-full"
            >
              [ {tier.cta} ]
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
