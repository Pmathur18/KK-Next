export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  tagline: string;
  description: string;
  color: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedin: string;
  bio: string;
  specialty: string;
}

export const milestones: Milestone[] = [
  {
    year: "2020",
    title: "The Frustration That Started It All",
    description:
      "Frustrated by dev agencies that couldn't market and marketing agencies that couldn't build, our founders launched KK Next Tech Solutions — the hybrid powerhouse the industry was missing."
  },
  {
    year: "2021",
    title: "First 10 Brands. Zero Compromises.",
    description:
      "Onboarded our first 10 clients across e-commerce and SaaS. Each one got the full stack treatment — clean code, aggressive growth strategy, and zero fluff in reporting."
  },
  {
    year: "2022",
    title: "Mobile, CRM & Scaling Operations",
    description:
      "Expanded into Flutter mobile apps, Odoo CRM integrations, and moved into a dedicated workspace in Delhi. Team grew to 15+ engineers and strategists."
  },
  {
    year: "2023",
    title: "50+ E-Commerce Stores Scaled",
    description:
      "Hit the milestone of scaling 50+ e-commerce stores — driving real revenue through a mix of headless Shopify builds, Meta performance ads, and SEO architecture."
  },
  {
    year: "2024",
    title: "100+ Projects. 98% Retention.",
    description:
      "Crossed 100 projects delivered across web, mobile, and CRM. A 98% client retention rate proved our formula works — deliver ROI, not just deliverables."
  },
  {
    year: "2026",
    title: "Enterprise & AI-Powered Growth",
    description:
      "Launched next-gen AI-assisted analytics dashboards, enterprise ERP implementations, and data-driven performance marketing funnels for Fortune 500-adjacent brands."
  }
];

export const values: Value[] = [
  {
    title: "Zero Fluff Policy",
    tagline: "Business outcomes, not buzzwords.",
    description:
      "We don't hide behind confusing tech jargon. Every report, every conversation, every strategy is framed in terms your CFO cares about — leads, revenue, and ROI.",
    color: "bg-[#EBF3FC]",
    icon: "shield"
  },
  {
    title: "Speed Over Everything",
    tagline: "In the digital world, the slow die first.",
    description:
      "We obsess over fast website load speeds, agile two-week development sprints, and same-day turnarounds on urgent fixes. Velocity is a competitive advantage.",
    color: "bg-[#F8FAFC]",
    icon: "zap"
  },
  {
    title: "Data > Opinions",
    tagline: "We don't guess. We measure.",
    description:
      "We track analytics, user behavior heatmaps, session recordings, and A/B test everything. Every optimization decision is backed by numbers, not hunches.",
    color: "bg-[#F1F5F9]",
    icon: "bar-chart"
  },
  {
    title: "Extreme Ownership",
    tagline: "Your business is our business.",
    description:
      "We treat your business as our own. If a campaign isn't converting or a feature ships with bugs, we take full responsibility and fix it — no finger-pointing, no excuses.",
    color: "bg-[#050B14]",
    icon: "award"
  }
];

export const technicalStandards = [
  {
    title: "100% In-House Architecture",
    description: "We don't outsource critical code to anonymous freelancers; everything is architected and built in-house by our full-time engineers."
  },
  {
    title: "Multi-Tier Peer Code Review",
    description: "Every pull request undergoes linting, regression testing, and two mandatory senior engineer reviews before staging deployment."
  },
  {
    title: "Zero Vendor Lock-In",
    description: "You own 100% of your Git repository, cloud infrastructure, and databases. We write modular, well-documented code that any team can inherit."
  },
  {
    title: "Strict Commercial SLAs",
    description: "We enforce guaranteed 99.9% uptime SLAs, sub-100ms API response benchmarks, and rapid emergency rollback protocols."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Kartik Krishnan",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/kknexttech",
    bio: "Full-stack engineer and digital growth architect. Founded KK Next Tech Solutions to unite deep software engineering rigor with ruthless performance marketing.",
    specialty: "Full-Stack Architecture & Growth Strategy"
  },
  {
    name: "Sanjay Kumar",
    role: "Lead Solutions Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/sanjay-arch",
    bio: "Specializes in high-throughput Next.js systems, headless Shopify engines, distributed databases, and enterprise CRM/ERP data synchronization.",
    specialty: "Cloud Architecture, Microservices & Databases"
  },
  {
    name: "Priyanka Sharma",
    role: "Head of Digital Growth",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/priyanka-growth",
    bio: "Performance marketing leader overseeing full-funnel acquisition, conversion rate optimization (CRO), and ROAS-focused paid media strategies.",
    specialty: "Performance Marketing, Meta/Google ROAS & CRO"
  },
  {
    name: "Vikram Malhotra",
    role: "Lead Mobile & Systems Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/vikram-mobile",
    bio: "React Native and Flutter specialist crafting fluid, zero-latency mobile apps with custom offline-first caching and real-time backend syncs.",
    specialty: "Cross-Platform Mobile Apps & GraphQL Integrations"
  }
];
