import type { Metadata } from "next";
import StudioHero from "./StudioHero";
import SoldToolsSection from "@/components/studio/SoldToolsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Studio — SoldTools",
  description:
    "SoldTools: a toolkit for car sales professionals—leads, appointments, and referrals. Sign in or talk to us about custom AI software.",
};

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <SoldToolsSection />
      <CTASection />
    </>
  );
}
