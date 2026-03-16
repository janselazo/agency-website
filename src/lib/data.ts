export interface Service {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Venture {
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "building" | "research";
  category: string;
  metrics?: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  type: "agency" | "studio";
  result?: string;
}

export type ProjectCategory =
  | "mobile-app"
  | "web-app"
  | "ai-agent"
  | "saas-platform"
  | "data-platform"
  | "automation";

export interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  type: "studio" | "agency";
  category: ProjectCategory;
  status?: "live" | "beta" | "building" | "research";
  result?: string;
  metrics?: string;
}

export interface MethodologyPillar {
  number: string;
  title: string;
  description: string;
  principles: string[];
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface ServicePackage {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  timeline: string;
}

export const services: Service[] = [
  {
    title: "AI Product Development",
    description:
      "End-to-end development of AI-powered products, from concept validation to production deployment.",
    details: [
      "LLM-powered applications and chatbots",
      "Computer vision and NLP solutions",
      "AI model fine-tuning and optimization",
      "Production-grade ML pipelines",
    ],
    icon: "brain",
  },
  {
    title: "Custom Software Engineering",
    description:
      "Tailored software solutions built with modern architectures, designed to scale from day one.",
    details: [
      "Full-stack web and mobile applications",
      "Microservices and API architecture",
      "Cloud-native infrastructure",
      "Real-time data systems",
    ],
    icon: "code",
  },
  {
    title: "MVP & Rapid Prototyping",
    description:
      "Validate your ideas fast. I go from concept to working product in weeks, not months.",
    details: [
      "Market validation and technical feasibility",
      "Interactive prototypes and user testing",
      "Lean architecture for fast iteration",
      "Investor-ready product demos",
    ],
    icon: "rocket",
  },
  {
    title: "AI Integration & Automation",
    description:
      "Embed intelligence into your existing systems to automate workflows and unlock new capabilities.",
    details: [
      "Workflow automation with AI agents",
      "Legacy system modernization",
      "API integrations and data pipelines",
      "Cost reduction through intelligent automation",
    ],
    icon: "zap",
  },
  {
    title: "Technical Consulting & Strategy",
    description:
      "Strategic advisory on architecture, AI adoption roadmaps, and engineering team scaling.",
    details: [
      "Technology stack evaluation",
      "AI readiness assessments",
      "Engineering team augmentation",
      "Technical due diligence for investors",
    ],
    icon: "compass",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Transform raw data into actionable intelligence with modern data platforms and AI-driven analytics.",
    details: [
      "Data warehouse and lake architecture",
      "ETL/ELT pipeline development",
      "Business intelligence dashboards",
      "Predictive analytics models",
    ],
    icon: "chart",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I immerse myself in your domain — understanding the problem space, user needs, and business goals. This phase sets the foundation for every decision ahead.",
  },
  {
    number: "02",
    title: "Design & Architect",
    description:
      "System architecture, data models, and UX flows designed for scalability. I think in terms of growth from the very first wireframe.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints with continuous delivery. You see working software every week, with built-in feedback loops to course-correct fast.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Production deployment with monitoring, performance optimization, and a handoff plan that ensures your team can own and grow the product.",
  },
];

export const ventures: Venture[] = [
  {
    name: "Cortex",
    tagline: "Your team's second brain.",
    description:
      "An AI-powered knowledge management platform that learns from your team's collective intelligence. Cortex indexes conversations, documents, and code to surface answers instantly — reducing onboarding time by 60% and eliminating knowledge silos.",
    status: "beta",
    category: "Productivity",
    metrics: "2,400+ beta users across 35 teams",
  },
  {
    name: "Synth",
    tagline: "Content at the speed of thought.",
    description:
      "Automated content generation pipeline for brands, powered by multimodal AI models. Synth produces blog posts, social media, video scripts, and visual assets — maintaining brand voice across channels while reducing content production cost by 70%.",
    status: "live",
    category: "AI / Content",
    metrics: "150+ brands, 1M+ pieces of content generated",
  },
  {
    name: "Nuro",
    tagline: "Workflows that think for themselves.",
    description:
      "Intelligent workflow automation that adapts to your business processes in real time. Nuro observes how your team works, identifies bottlenecks, and autonomously optimizes operations — no complex rule-building required.",
    status: "building",
    category: "Automation",
  },
  {
    name: "Axiom",
    tagline: "Ask your data anything.",
    description:
      "Next-generation data analytics platform with natural language querying and AI-driven insights. Axiom lets non-technical teams explore complex datasets through conversation, democratizing data access across the organization.",
    status: "research",
    category: "Data & Analytics",
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "TensorFlow", category: "AI" },
  { name: "Prisma", category: "ORM" },
  { name: "Redis", category: "Database" },
  { name: "Vercel", category: "Cloud" },
  { name: "GraphQL", category: "API" },
  { name: "Supabase", category: "Backend" },
];

export const portfolioProjects: PortfolioProject[] = [
  // Studio ventures (building)
  {
    title: "Cortex",
    description:
      "An AI-powered knowledge management platform that learns from your team's collective intelligence. Cortex indexes conversations, documents, and code to surface answers instantly — reducing onboarding time by 60% and eliminating knowledge silos.",
    tags: ["Productivity", "AI"],
    type: "studio",
    category: "web-app",
    status: "beta",
    metrics: "2,400+ beta users across 35 teams",
  },
  {
    title: "Synth",
    description:
      "Automated content generation pipeline for brands, powered by multimodal AI models. Synth produces blog posts, social media, video scripts, and visual assets — maintaining brand voice across channels while reducing content production cost by 70%.",
    tags: ["AI", "Content", "SaaS"],
    type: "studio",
    category: "saas-platform",
    status: "live",
    metrics: "150+ brands, 1M+ pieces of content generated",
  },
  {
    title: "Nuro",
    description:
      "Intelligent workflow automation that adapts to your business processes in real time. Nuro observes how your team works, identifies bottlenecks, and autonomously optimizes operations — no complex rule-building required.",
    tags: ["Automation", "AI"],
    type: "studio",
    category: "automation",
    status: "building",
  },
  {
    title: "Axiom",
    description:
      "Next-generation data analytics platform with natural language querying and AI-driven insights. Axiom lets non-technical teams explore complex datasets through conversation, democratizing data access across the organization.",
    tags: ["Data", "Analytics", "AI"],
    type: "studio",
    category: "data-platform",
    status: "research",
  },
  // Agency projects (advising)
  {
    title: "AI-Powered Legal Assistant",
    description:
      "Built a document analysis platform that reduced contract review time by 80% for a top-tier law firm. The system processes thousands of legal documents using fine-tuned LLMs and surfaces key clauses, risks, and obligations in seconds.",
    tags: ["NLP", "LLM", "React", "Python"],
    type: "agency",
    category: "ai-agent",
    result: "80% reduction in review time",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Real-time analytics platform with ML-driven forecasting for a Series B fintech startup. Enabled the team to anticipate market shifts 3 weeks ahead of traditional models.",
    tags: ["ML", "Data", "Next.js", "AWS"],
    type: "agency",
    category: "web-app",
    result: "3-week forecasting advantage",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AI-Powered Legal Assistant",
    description:
      "Built a document analysis platform that reduced contract review time by 80% for a top-tier law firm. The system processes thousands of legal documents using fine-tuned LLMs and surfaces key clauses, risks, and obligations in seconds.",
    tags: ["NLP", "LLM", "React", "Python"],
    type: "agency",
    result: "80% reduction in review time",
  },
  {
    title: "Synth — Content Engine",
    description:
      "My studio product automating multi-channel content creation for brands at scale. From blog posts to social media to video scripts — all maintaining consistent brand voice.",
    tags: ["AI", "Automation", "SaaS"],
    type: "studio",
    result: "150+ brands onboarded",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Real-time analytics platform with ML-driven forecasting for a Series B fintech startup. Enabled the team to anticipate market shifts 3 weeks ahead of traditional models.",
    tags: ["ML", "Data", "Next.js", "AWS"],
    type: "agency",
    result: "3-week forecasting advantage",
  },
];

export const methodologyPillars: MethodologyPillar[] = [
  {
    number: "01",
    title: "Growth-First Architecture",
    description:
      "Every system I design is built to evolve. I don't over-engineer for hypothetical scale, but I architect with clear extension points so growth never requires a rewrite.",
    principles: [
      "Modular, composable system design",
      "Database schemas that accommodate future features",
      "API contracts designed for backward compatibility",
      "Infrastructure-as-code from day one",
    ],
  },
  {
    number: "02",
    title: "Data-Driven Decisions",
    description:
      "I embed analytics, monitoring, and feedback loops from the first sprint. Every feature ships with the instrumentation needed to measure its impact and inform the next iteration.",
    principles: [
      "Event tracking and user analytics built in",
      "A/B testing infrastructure from launch",
      "Performance monitoring and alerting",
      "Feedback loops that feed the product roadmap",
    ],
  },
  {
    number: "03",
    title: "Lean Velocity",
    description:
      "Speed matters, but not at the cost of quality. I ship the smallest meaningful increment, validate it with real users, and compound improvements over time.",
    principles: [
      "2-week sprint cycles with weekly demos",
      "Continuous integration and deployment",
      "Feature flags for safe, incremental rollouts",
      "Automated testing at every layer",
    ],
  },
  {
    number: "04",
    title: "Team Empowerment",
    description:
      "I don't just build and leave. My engagements include knowledge transfer, documentation, and architecture decisions that your team can own and extend.",
    principles: [
      "Pair programming and code reviews",
      "Comprehensive technical documentation",
      "Architecture decision records (ADRs)",
      "Runbooks for operations and incident response",
    ],
  },
];

export const experienceStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "8+", label: "Years of experience" },
  { value: "30+", label: "Clients worldwide" },
  { value: "4", label: "Studio ventures" },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Advisory Call",
    description:
      "One-time session to validate your idea, review your architecture, or get unstuck on a specific technical or growth challenge.",
    price: "$500",
    priceNote: "one-time",
    features: [
      "90-minute deep-dive session",
      "Technical or GTM focus — your choice",
      "Written summary and action items",
      "Follow-up via email",
    ],
    highlighted: false,
    cta: "Book a Call",
  },
  {
    name: "Product Development Advisory",
    description:
      "Ongoing technical advisory for founders building AI products. Architecture, stack decisions, and engineering velocity.",
    price: "$3K",
    priceNote: "per month",
    features: [
      "Weekly 1:1 advisory sessions",
      "Architecture and code review",
      "Technical roadmap guidance",
      "Unlimited async support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Product Growth Advisory",
    description:
      "Ongoing growth and GTM advisory. Positioning, launch strategy, metrics, and scaling what works.",
    price: "$3K",
    priceNote: "per month",
    features: [
      "Weekly 1:1 advisory sessions",
      "GTM and positioning strategy",
      "Metrics and funnel optimization",
      "Unlimited async support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Full Partnership",
    description:
      "Combined product development and growth advisory. Best for founders who want end-to-end guidance.",
    price: "$5K",
    priceNote: "per month",
    features: [
      "Weekly 1:1 sessions (dev + growth)",
      "Technical and GTM strategy",
      "Architecture, code, and metrics review",
      "Priority support and flexible scope",
    ],
    highlighted: true,
    cta: "Start a Partnership",
  },
];

export const servicePackages: ServicePackage[] = [
  {
    title: "Product Development Advisory",
    description:
      "Ongoing 1-on-1 advisory on building AI-powered products. Architecture, stack decisions, code reviews, and technical direction.",
    icon: "brain",
    deliverables: [
      "Weekly 1:1 advisory sessions",
      "Architecture and code review",
      "Technical roadmap guidance",
      "Unlimited async support",
    ],
    timeline: "Ongoing, monthly",
  },
  {
    title: "Product Growth Advisory",
    description:
      "Ongoing 1-on-1 advisory on scaling AI products. Growth strategy, user acquisition, retention, and experiment design.",
    icon: "rocket",
    deliverables: [
      "Weekly 1:1 advisory sessions",
      "GTM and positioning strategy",
      "Metrics and funnel optimization",
      "Unlimited async support",
    ],
    timeline: "Ongoing, monthly",
  },
  {
    title: "Full Partnership",
    description:
      "Combined development and growth advisory. Fractional CTO/CGO-style engagement for end-to-end guidance.",
    icon: "zap",
    deliverables: [
      "Weekly 1:1 sessions (dev + growth)",
      "Technical and GTM strategy",
      "Architecture, code, and metrics review",
      "Priority support and flexible scope",
    ],
    timeline: "Ongoing, monthly",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-growth-mindset-matters-in-software",
    title: "Why Growth Mindset Matters More Than Your Tech Stack",
    excerpt:
      "The frameworks you choose matter less than how you architect for change. Here's how I embed growth thinking into every project from day one.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Methodology",
    content: `The tech industry obsesses over stack choices. React vs. Vue. PostgreSQL vs. MongoDB. AWS vs. GCP. But after 8+ years of building software that scales, I've learned that the most important decision isn't which tools you pick — it's whether your architecture can evolve when your assumptions change.

## The Growth Mindset in Engineering

Growth mindset in software isn't about positive thinking. It's a concrete set of engineering practices:

**1. Design for extension, not perfection.**
Every module I build has clear boundaries and interfaces. When requirements change (and they always do), I extend rather than rewrite. This means modular architectures, well-defined APIs, and database schemas with room to breathe.

**2. Instrument everything.**
You can't improve what you can't measure. From the very first sprint, I bake in analytics, error tracking, and performance monitoring. This isn't overhead — it's the foundation for every future optimization.

**3. Ship small, learn fast.**
The biggest risk in software isn't a bug in production — it's building the wrong thing. I ship the smallest meaningful increment, measure its impact, and let data drive the next iteration.

## What This Looks Like in Practice

When I built a legal AI platform for a top-tier law firm, I didn't try to automate everything at once. I started with contract clause extraction — one narrow, high-value use case. Within 3 weeks, lawyers were using it daily. Within 3 months, I'd expanded to risk analysis, obligation tracking, and multi-document comparison.

The architecture supported this expansion because I'd designed for it from the start. Not by over-engineering, but by making extension cheap and safe.

## The Takeaway

Your tech stack is a tool. Your growth mindset is a strategy. Invest in architecture that bends, teams that learn, and processes that compound improvements over time.

That's my approach.`,
  },
  {
    slug: "ai-agents-practical-guide",
    title: "AI Agents in Production: A Practical Guide for 2026",
    excerpt:
      "Beyond the hype — what actually works when deploying AI agents in real business workflows. Lessons from 20+ agent deployments.",
    date: "2026-02-18",
    readTime: "8 min read",
    category: "AI Engineering",
    content: `AI agents are the most overhyped and most underestimated technology of 2026. The gap between demo-ware and production-ready agents is enormous — and most teams learn this the hard way.

## What I've Learned from 20+ Deployments

After shipping AI agents across legal, fintech, healthcare, and e-commerce, here are the patterns that actually work:

**Start narrow, expand gradually.**
The most successful agents do one thing exceptionally well. A contract review agent. An expense categorization agent. A customer support triage agent. Resist the temptation to build a "general purpose" agent.

**Build guardrails before capabilities.**
Every agent needs output validation, human-in-the-loop checkpoints, and fallback paths. The first thing I build isn't the agent — it's the safety net.

**Optimize for latency, not just accuracy.**
A 98% accurate agent that responds in 2 seconds beats a 99.5% accurate agent that takes 30 seconds. Users will tolerate occasional errors far more than consistent slowness.

## The Architecture Pattern

My standard agent architecture looks like this:

1. **Intent classifier** — understands what the user is asking
2. **Tool router** — selects the right tool/API for the task
3. **Execution engine** — runs the action with proper error handling
4. **Output validator** — checks the result before returning to the user
5. **Feedback loop** — logs everything for continuous improvement

Each layer is independently testable, replaceable, and monitorable. When a new LLM drops, I swap the model — not the architecture.

## Common Pitfalls

- **Over-relying on prompting:** Prompt engineering hits a ceiling. At some point, you need better tools and retrieval, not longer prompts.
- **Ignoring cost:** A single complex agent call can cost $0.50+ in API fees. At scale, architecture decisions become cost decisions.
- **Skipping evaluation:** If you can't measure agent quality systematically, you can't improve it systematically.

The companies winning with AI agents in 2026 are the ones treating them as engineering problems, not magic.`,
  },
  {
    slug: "mvp-mistakes-founders-make",
    title: "5 MVP Mistakes That Kill Startups Before Launch",
    excerpt:
      "Most MVPs fail not because of bad ideas, but because of bad execution. Here are the traps I see founders fall into — and how to avoid them.",
    date: "2026-02-05",
    readTime: "5 min read",
    category: "Startups",
    content: `I've built 50+ MVPs. Some became funded startups. Some pivoted into something better. A few didn't make it. The difference almost never comes down to the idea — it comes down to execution.

## Mistake #1: Building Too Much

The "minimum" in MVP exists for a reason. I regularly see founders with 30-feature specs for their "MVP." The result? Six months of development, a bloated product, and no market validation.

**Fix:** Define the one core workflow that proves your thesis. Build that. Ship it. Learn.

## Mistake #2: Choosing Tech for Scale Day One

You don't need Kubernetes. You don't need microservices. You don't need a data lake. Not yet. Over-engineering your infrastructure burns cash and slows you down when speed is your only competitive advantage.

**Fix:** Start with a monolith. Use managed services. Optimize for developer velocity, not theoretical scale.

## Mistake #3: Skipping Design

"We'll make it pretty later" is a death sentence. Users form opinions in milliseconds. A functional but ugly MVP signals "amateur." You don't need a design system — you need intentional, clean design on your core screens.

**Fix:** Invest 1-2 weeks in UI/UX for your critical path. Use a component library. Make it feel professional.

## Mistake #4: No Analytics From Day One

If you launch without analytics, you're flying blind. Every click, every drop-off, every conversion — this data is the entire point of an MVP.

**Fix:** Set up event tracking before launch. Define your key metrics. Build a dashboard you check daily.

## Mistake #5: Building in Isolation

The founders who succeed talk to users before, during, and after building. The ones who disappear into a cave for 6 months usually emerge with a product nobody wants.

**Fix:** Share early. Get feedback weekly. Let user behavior — not your assumptions — guide the roadmap.

Building an MVP is an exercise in disciplined restraint. Build less, learn more, iterate faster. That's how startups win.`,
  },
  {
    slug: "building-studio-ventures",
    title: "Inside My Studio: How I Choose What to Build",
    excerpt:
      "A behind-the-scenes look at how I identify opportunities, validate ideas, and go from concept to product.",
    date: "2026-01-20",
    readTime: "7 min read",
    category: "Studio",
    content: `Running an agency and a venture studio simultaneously gives me an unfair advantage: I see problems across dozens of industries every year. The best studio ideas don't come from brainstorming sessions — they come from patterns I notice while building for clients.

## The Opportunity Filter

Not every good idea deserves to become a product. I filter opportunities through four lenses:

**1. Is there a 10x AI improvement possible?**
If AI can only deliver a marginal improvement, it's not worth building a product around. I look for workflows where AI can fundamentally change the economics — 10x faster, 10x cheaper, 10x more accessible.

**2. Is the market underserved?**
I avoid crowded markets. Instead, I look for industries where the existing tools are outdated, fragmented, or built for a different era.

**3. Can a small team win?**
Some markets require enterprise sales teams, regulatory approvals, and massive capital. I target opportunities where a great product can win through self-serve adoption and word of mouth.

**4. Do I have domain insight?**
My agency work gives me deep exposure to specific industries. When I've seen the same problem across 5 different clients, that's a signal.

## From Idea to Venture

Once an idea passes the filter, I follow a structured process:

**Week 1-2: Thesis validation.** Research, user interviews, competitive analysis. The goal is to confirm or kill the idea quickly.

**Week 3-6: Prototype.** A working prototype that tests the core value proposition with real users. Not a landing page — an actual product.

**Week 7-12: Beta.** Iterate based on real usage. Define metrics. Find product-market fit signals.

**Month 4+: Scale or sunset.** If the metrics are there, I invest. If not, I document the learnings and move on.

## The Portfolio Today

- **Synth** (Live) — born from seeing every marketing team struggle with content volume
- **Cortex** (Beta) — born from watching engineering teams lose knowledge when people leave
- **Nuro** (Building) — born from the repetitive workflow problems I saw across logistics clients
- **Axiom** (Research) — born from the gap between data teams and business teams in every organization

The studio isn't a side project — it's core to my work. Every venture I launch adds to my thesis that AI will reshape every industry, one workflow at a time.`,
  },
  {
    slug: "technical-debt-startup-guide",
    title: "Technical Debt Is Not the Enemy — Bad Debt Is",
    excerpt:
      "Stop treating all technical debt as a failure. Strategic debt is a tool. Here's how to tell the difference and manage it intentionally.",
    date: "2026-01-08",
    readTime: "5 min read",
    category: "Engineering",
    content: `"We need to pay down our technical debt" is the battle cry of every engineering team. But not all technical debt is created equal, and treating it as a monolithic problem leads to the wrong solutions.

## Good Debt vs. Bad Debt

**Strategic debt** is intentional. You chose a simpler implementation because speed-to-market mattered more than architectural purity. You documented the trade-off. You have a plan to address it. This is like a business loan — leverage that accelerates growth.

**Accidental debt** is unintentional. It accumulates from shortcuts nobody documented, patterns that diverged over time, and knowledge that left with former team members. This is like credit card debt — it compounds and suffocates.

## The Framework I Use

I categorize debt into four buckets:

**1. Architecture debt** — Structural decisions that limit future capabilities. High impact, high cost to fix. Address before it blocks a critical initiative.

**2. Code quality debt** — Messy code that slows development. Medium impact, medium cost. Address incrementally during feature work.

**3. Dependency debt** — Outdated libraries, EOL frameworks, security vulnerabilities. Variable impact, usually manageable. Schedule regular updates.

**4. Knowledge debt** — Undocumented systems, tribal knowledge, unclear ownership. Invisible until someone leaves. Address continuously.

## Managing Debt Intentionally

The goal isn't zero debt — it's intentional debt with a repayment plan:

- **Document every shortcut** at the time you take it. A TODO comment isn't documentation — an ADR is.
- **Budget 20% of each sprint** for debt repayment. Non-negotiable. If you skip it, the compound interest will eat your velocity.
- **Quantify the cost.** "This hack adds 2 hours to every deployment" is actionable. "We have tech debt" is not.

Technical debt is a tool, not a failure. The founders and teams who manage it intentionally build faster and more sustainably than those who either avoid it completely or let it accumulate unchecked.`,
  },
];

export const navLinks = [
  { label: "Agency", href: "/agency" },
  { label: "Studio", href: "/studio" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
