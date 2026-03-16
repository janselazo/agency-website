import type { Metadata } from "next";
import MethodologyHero from "./MethodologyHero";
import GrowthManifesto from "@/components/methodology/GrowthManifesto";
import Pillars from "@/components/methodology/Pillars";
import Experience from "@/components/methodology/Experience";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "My growth-first methodology — built from 8+ years of delivering software solutions. Growth mindset embedded from the very first line of code.",
};

export default function MethodologyPage() {
  return (
    <>
      <MethodologyHero />
      <GrowthManifesto />
      <Pillars />
      <Experience />
      <CTASection />
    </>
  );
}
