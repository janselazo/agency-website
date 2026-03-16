import type { Metadata } from "next";
import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects I'm building for my studio and advising for the agency. AI Software Development and AI Software Growth for B2B & B2C SaaS startups.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}
