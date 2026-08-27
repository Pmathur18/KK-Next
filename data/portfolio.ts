export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "Websites" | "Mobile Apps" | "Social Media" | "CRM/ERP";
  description: string;
  longDescription: string;
  resultMetric: string;
  tags: string[];
  color: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "aurora-boutique",
    title: "Aurora E-commerce Engine",
    client: "Aurora Fashion House",
    category: "Websites",
    description: "Re-platforming a global apparel brand to a headless Shopify storefront with ultra-fast Next.js routing.",
    longDescription: "Aurora Boutique wanted to replace their slow, standard template storefront with a fast, customizable digital shopping experience. We built a customized Shopify storefront that links Next.js on the frontend with the Shopify Storefront API on the backend, accelerating load times and scaling brand presence.",
    resultMetric: "Increased conversions by 3.1x",
    tags: ["Shopify Headless", "Next.js", "Tailwind CSS"],
    color: "bg-pastel-sky",
    challenge: "High checkout abandonment rates and slow page transitions (averaging 4.8 seconds on mobile views) leading to decreased sales volume.",
    solution: "We designed a headless architecture decoupling frontend and backend. Dynamic page templates are fully pre-rendered at edge locations, reducing layout shift and delivering instant load performance (0.6s LCP).",
    results: [
      "Page load speeds optimized by 85%",
      "Mobile conversion rates elevated by 210%",
      "Average Order Value (AOV) increased by 22% via smart checkout upsells"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "fitquest-app",
    title: "FitQuest Mobile App",
    client: "FitQuest Global Inc.",
    category: "Mobile Apps",
    description: "Gamified workout tracker supporting real-time hardware sync, offline analytics, and active community feeds.",
    longDescription: "FitQuest commissioned a cross-platform mobile tracker to encourage active user habits. Our team developed the mobile app using React Native, implementing an offline-first storage model synced with AWS databases, push notifications, and device Bluetooth links.",
    resultMetric: "4.9★ App Store Rating",
    tags: ["React Native", "TypeScript", "NodeJS"],
    color: "bg-pastel-peach",
    challenge: "Building a complex synchronization routine that remains active when offline during hikes or remote runs without losing data.",
    solution: "Implemented an offline-first sync mechanism utilizing SQLite on-device, pushing changes to Postgres queues when a stable network handshake is detected.",
    results: [
      "120,000 active monthly app users inside the first quarter",
      "Sync error rates kept below 0.05%",
      "High rating validation on Apple App Store & Google Play reviews"
    ],
    imageUrl: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "nexus-social-scale",
    title: "Nexus Branding Campaign",
    client: "Nexus Wealth Advisors",
    category: "Social Media",
    description: "A complete visual rebrand and targeted paid marketing strategy that built authority on LinkedIn and X.",
    longDescription: "Nexus Wealth needed to establish brand authority and capture high-net-worth clients online. We managed creative design assets, engineered campaign targeting scripts, ran platform A/B tests, and managed community messaging pipelines.",
    resultMetric: "+180% Qualified Lead Flow",
    tags: ["Meta Ads", "LinkedIn Scale", "Growth Design"],
    color: "bg-pastel-mint",
    challenge: "High cost-per-acquisition (CPA) on traditional PPC and search ads with low visual engagement across corporate channels.",
    solution: "Designed custom illustration sequences, wrote thought-leadership content, and targeted specific firmographics using specialized Meta and LinkedIn campaign tactics.",
    results: [
      "Organic LinkedIn impressions scaled by 650k in 90 days",
      "Cost-per-Lead reduced by 42%",
      "Qualified sales bookings increased from 5 to 35 per month"
    ],
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "apex-erp-pipeline",
    title: "Apex Automation Dashboard",
    client: "Apex Manufacturing Group",
    category: "CRM/ERP",
    description: "Bespoke database automation and Odoo integration connecting inventory trackers directly to sales teams.",
    longDescription: "Apex manufacturing had disconnected accounting, warehouse tracking, and sales logs. We synchronized their records into a central dashboard using custom Odoo applications and integrated python sync runners.",
    resultMetric: "Saved 18 Hours / Week",
    tags: ["Odoo", "Python", "Dashboard Integration"],
    color: "bg-pastel-yellow",
    challenge: "Fragmented inventory documentation resulting in manufacturing bottlenecks and inaccurate sales projections.",
    solution: "Configured an automated Odoo database pipeline. Integrated barcode scanners, inventory logs, and accounting processes into one central, real-time control screen.",
    results: [
      "Manufacturing order bottlenecks reduced by 94%",
      "Manual data entering errors completely eliminated",
      "Saved administrative teams an average of 18 work hours each week"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];
