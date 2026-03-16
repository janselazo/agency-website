"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { portfolioProjects, type ProjectCategory } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const typeFilters = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio" },
  { id: "agency", label: "Agency" },
] as const;

const categoryFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "web-app", label: "Web App" },
  { id: "ai-agent", label: "AI Agent" },
  { id: "saas-platform", label: "SaaS Platform" },
  { id: "data-platform", label: "Data Platform" },
  { id: "automation", label: "Automation" },
];

export default function PortfolioGrid() {
  const [typeFilter, setTypeFilter] = useState<"all" | "studio" | "agency">(
    "all"
  );
  const [categoryFilter, setCategoryFilter] = useState<
    ProjectCategory | "all"
  >("all");

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchesType =
        typeFilter === "all" || p.type === typeFilter;
      const matchesCategory =
        categoryFilter === "all" || p.category === categoryFilter;
      return matchesType && matchesCategory;
    });
  }, [typeFilter, categoryFilter]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
      <SectionHeading
        label="Work"
        title="Projects"
        description="Building for my studio. Advising for the agency."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {typeFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setTypeFilter(filter.id)}
            className={`rounded border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
              typeFilter === filter.id
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-secondary hover:border-accent/50 hover:text-accent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categoryFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setCategoryFilter(filter.id)}
            className={`rounded border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all ${
              categoryFilter === filter.id
                ? "border-accent-violet/50 bg-accent-violet/10 text-accent-violet"
                : "border-border text-text-secondary hover:border-accent-violet/30 hover:text-accent-violet"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={`${project.title}-${project.type}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card className="flex h-full flex-col">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
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
                  <span className="rounded border border-border bg-surface/50 px-2 py-0.5 font-mono text-[10px] text-text-secondary">
                    {categoryFilters.find((f) => f.id === project.category)
                      ?.label ?? project.category}
                  </span>
                </div>
                {project.status && (
                  <Badge status={project.status} />
                )}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              {(project.result || project.metrics) && (
                <div className="mt-3">
                  <span className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-accent">
                    {project.result ?? project.metrics}
                  </span>
                </div>
              )}
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
