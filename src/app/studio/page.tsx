import type { Metadata } from "next";
import StudioHero from "./StudioHero";
import VenturesGrid from "@/components/studio/VenturesGrid";
import Philosophy from "@/components/studio/Philosophy";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Janse Lazo Studio — I identify high-potential opportunities and build AI-powered products from the ground up.",
};

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <VenturesGrid />
      <Philosophy />
      <CTASection />
    </>
  );
}
