"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const SOLDTOOLS_LOGIN = "https://app.soldtools.com/login";

export default function SoldToolsSection() {
  return (
    <section
      id="soldtools"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <Card className="border-border/80 bg-surface p-8 shadow-soft sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
            Studio product
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            SoldTools
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            A toolkit built for car sales professionals—turn more leads into
            appointments, showroom visits, and referrals with workflows tuned
            for the floor, not generic CRM demos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href={SOLDTOOLS_LOGIN}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open SoldTools
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              showLiveDot
            >
              Custom AI for your team
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
