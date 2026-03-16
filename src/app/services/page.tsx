import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import PricingGrid from "@/components/services/PricingGrid";
import ServicePackages from "@/components/services/ServicePackages";
import FAQ from "@/components/services/FAQ";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Advisory-first pricing: one-time calls, product development advisory, growth advisory, and full partnerships for B2B & B2C SaaS startups.",
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
