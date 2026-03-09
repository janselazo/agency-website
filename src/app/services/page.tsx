import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import PricingGrid from "@/components/services/PricingGrid";
import ServicePackages from "@/components/services/ServicePackages";
import FAQ from "@/components/services/FAQ";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Transparent pricing and flexible engagement models for AI development, MVPs, and enterprise software. From sprint-based work to long-term partnerships.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingGrid />
      <ServicePackages />
      <FAQ />
      <CTASection />
    </>
  );
}
