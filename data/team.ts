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
}

export const milestones: Milestone[] = [
  {
    year: "2020",
    title: "The Frustration That Started It All",
    description:
      "Frustrated by dev agencies that couldn't market and marketing agencies that couldn't build, our founders launched KK NEX TECH SOLUTION — the hybrid powerhouse the industry was missing."
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
    color: "bg-pastel-peach",
    icon: "shield"
  },
  {
    title: "Speed Over Everything",
    tagline: "In the digital world, the slow die first.",
    description:
      "We obsess over fast website load speeds, agile two-week development sprints, and same-day turnarounds on urgent fixes. Velocity is a competitive advantage.",
    color: "bg-pastel-sky",
    icon: "zap"
  },
  {
    title: "Data > Opinions",
    tagline: "We don't guess. We measure.",
    description:
      "We track analytics, user behavior heatmaps, session recordings, and A/B test everything. Every optimization decision is backed by numbers, not hunches.",
    color: "bg-pastel-mint",
    icon: "bar-chart"
  },
  {
    title: "Extreme Ownership",
    tagline: "Your business is our business.",
    description:
      "We treat your business as our own. If a campaign isn't converting or a feature ships with bugs, we take full responsibility and fix it — no finger-pointing, no excuses.",
    color: "bg-pastel-lilac",
    icon: "award"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Kartik Krishnan",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/kknextech"
  },
  {
    name: "Sanjay Kumar",
    role: "Lead Solutions Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/sanjay-arch"
  },
  {
    name: "Priyanka Sharma",
    role: "Head of Digital Growth",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/priyanka-growth"
  },
  {
    name: "Vikram Malhotra",
    role: "Lead Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/vikram-mobile"
  }
];
