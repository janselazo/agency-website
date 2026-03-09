import Hero from "@/components/home/Hero";
import SplitIntro from "@/components/home/SplitIntro";
import FeaturedWork from "@/components/home/FeaturedWork";
import TechStrip from "@/components/home/TechStrip";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SplitIntro />
      <FeaturedWork />
      <TechStrip />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
