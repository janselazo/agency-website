import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Janse Lazo — Zenpho, custom AI software and AI agents, Miami–Fort Lauderdale. Background, highlights, and how I work with teams.",
};

const highlights = [
  "10x10K Cuba — Mikma",
  "Startup Weekend Havana — Sírvete",
  "TapTok — coverage in Miami Herald, Refresh Miami, El Nuevo Herald, New York Wire",
] as const;

const credentials = [
  "HubSpot certifications",
  "Google Ads certifications",
  "Semrush certifications",
] as const;

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <SectionHeading
          align="left"
          label="Story"
          title="From strong foundations to product-led growth"
          description="My path is shaped by engineering education at CUJAE and a move toward building software businesses in the U.S.—with a focus on products that scale and teams that can run them after launch."
        />
        <Card className="border-border/80 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-base leading-relaxed text-text-secondary">
            I care about the full stack of building: not only code and models,
            but how software reaches users, earns trust, and compounds through
            distribution and clear positioning. That lens shows up in how I
            scope AI features, ship web and mobile apps, and partner with
            founders and operators who need outcomes—not experiments stuck in
            slides.
          </p>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <SectionHeading
          align="left"
          label="Today"
          title="Zenpho & client work"
          description="Through Zenpho and direct engagements, I focus on custom AI software and AI agents for organizations that need production guardrails, integrations, and interfaces their teams will actually use."
        />
        <Card className="border-border/80 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-base leading-relaxed text-text-secondary">
            Whether it is LLM-powered apps, automation, or mobile and web
            surfaces tied to your data, the goal is the same: ship something
            measurable, maintainable, and aligned with how your business
            already works.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="md">
              Work together
            </Button>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <SectionHeading
          align="left"
          label="Highlights"
          title="Selected milestones"
          description="A few public touchpoints from entrepreneurship, community, and media—titles as listed on my public profile."
        />
        <ul className="space-y-4">
          {highlights.map((item) => (
            <li key={item}>
              <Card className="border-border/80 bg-surface px-6 py-4 text-sm font-medium text-text-primary">
                {item}
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28 lg:px-8">
        <SectionHeading
          align="left"
          label="Credentials"
          title="Trust & craft"
          description="Marketing and growth-platform certifications I maintain alongside hands-on engineering—useful when AI products need to connect to campaigns, funnels, and analytics."
        />
        <div className="flex flex-wrap gap-3">
          {credentials.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary"
            >
              {c}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
