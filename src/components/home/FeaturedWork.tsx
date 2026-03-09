"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function FeaturedWork() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="Work"
        title="Featured Projects"
        description="A selection of recent work across agency partnerships and studio ventures."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="flex h-full flex-col">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    project.type === "agency"
                      ? "text-accent"
                      : "text-accent-violet"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.type === "agency"
                        ? "bg-accent"
                        : "bg-accent-violet"
                    }`}
                  />
                  {project.type}
                </span>
                {project.result && (
                  <span className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-accent">
                    {project.result}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-surface-light/50 px-2 py-1 font-mono text-[10px] text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
