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
      <CTASection />
    </>
  );
}
