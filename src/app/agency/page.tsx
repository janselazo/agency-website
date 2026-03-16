import type { Metadata } from "next";
import AgencyHero from "./AgencyHero";
import ServicesGrid from "@/components/agency/ServicesGrid";
import Process from "@/components/agency/Process";
import CaseStudies from "@/components/agency/CaseStudies";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Janse Lazo — AI-powered software development and growth for B2B & B2C SaaS startups. From MVPs to production-scale platforms.",
};

export default function AgencyPage() {
  return (
    <>
      <AgencyHero />
      <ServicesGrid />
      <CaseStudies />
      <Process />
      <SocialProof />
      <CTASection />
    </>
  );
}

function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <p className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-text-secondary">
        Trusted by forward-thinking teams
      </p>
      <div className="grid grid-cols-2 gap-8 opacity-40 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex h-12 items-center justify-center rounded-lg border border-border bg-surface"
          >
            <span className="text-xs text-text-secondary">Client {i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
