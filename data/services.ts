export interface Service {
  id: string;
  title: string;
  slug: string;
  badge: string;
  description: string;
  longDescription: string;
  features: string[];
  color: string; // Tailwind bg class
  hoverColor: string;
  accentColor: string; // Hex color for icons/states
  techStack: string[];
  capabilities: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites (Shopify & Custom)",
    slug: "websites",
    badge: "Web Development",
    description: "High-conversion Shopify stores and bespoke Next.js web applications tailored to scale your brand.",
    longDescription: "We design and develop modern, blazing-fast web platforms that transform your digital presence. Whether you need a highly optimized Shopify store or a complex custom web application, we use the latest technology stacks to ensure scalability, robust security, and seamless user experiences.",
    color: "bg-pastel-sky",
    hoverColor: "hover:bg-pastel-sky/80",
    accentColor: "#6C4CF1",
    techStack: ["Next.js", "React", "Shopify", "Tailwind CSS", "TypeScript", "Node.js", "GraphQL"],
    features: [
      "Custom Shopify Theme Development",
      "Headless Shopify Commerce APIs",
      "Next.js App Router Engineering",
      "SEO Audit & Conversion Rate Optimization",
      "Responsive Layouts & Mobile First Design",
      "Third-party ERP & API Integrations"
    ],
    capabilities: [
      {
        title: "Bespoke Custom Web",
        description: "Bespoke web applications designed using React and Next.js, optimizing page speed and layout aesthetics."
      },
      {
        title: "Shopify Custom Solutions",
        description: "Scale your e-commerce operations with automated inventory systems, personalized checkouts, and custom app wrappers."
      }
    ]
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps (iOS & Android)",
    slug: "mobile-apps",
    badge: "App Engineering",
    description: "Stunning cross-platform mobile apps built with React Native and Flutter for flawless native performance.",
    longDescription: "Reach your users on any device with feature-rich iOS and Android mobile applications. Our engineering team builds high-performance, cross-platform apps using React Native and Flutter, ensuring a shared codebase with native speed, beautiful animation transitions, and intuitive design interfaces.",
    color: "bg-pastel-peach",
    hoverColor: "hover:bg-pastel-peach/80",
    accentColor: "#FF8A5C",
    techStack: ["React Native", "Flutter", "TypeScript", "iOS/Swift", "Android/Kotlin", "Firebase", "App Store APIs"],
    features: [
      "iOS & Android App Store Submissions",
      "Cross-Platform Core Frameworks",
      "Offline-First Database Synchronization",
      "Push Notifications & User Retargeting",
      "Seamless Payment Processing SDKs",
      "Real-time Device Capabilities (GPS, Camera)"
    ],
    capabilities: [
      {
        title: "UI/UX App Prototyping",
        description: "Interactive visual mocks and animations engineered to validate and test flows on actual mobile devices."
      },
      {
        title: "App Store Strategy",
        description: "Complete handling of App Store and Google Play submissions, compliance guidelines, and analytics setups."
      }
    ]
  },
  {
    id: "social-media",
    title: "Social Media Management",
    slug: "social-media-management",
    badge: "Digital Growth",
    description: "Data-driven creative campaigns, content creation, paid advertising, and real-time community scaling.",
    longDescription: "Accelerate your social growth and multiply digital engagement. We craft bespoke content calendars, manage targeted paid search/social advertising accounts, run community conversations, and compile analytical reports to ensure positive return on your marketing spend.",
    color: "bg-pastel-mint",
    hoverColor: "hover:bg-pastel-mint/80",
    accentColor: "#141414",
    techStack: ["Meta Ads Manager", "Google Analytics", "Figma", "Tiktok Ads", "LinkedIn Campaign Manager", "Canva Pro"],
    features: [
      "Interactive Content Creation & Design",
      "Paid Ad Campaign Operations",
      "A/B Creative and Copy Testing",
      "Community Scaling & PR Handling",
      "Influencer Outreach & Contracts",
      "Monthly Conversion Analytics & Dashboards"
    ],
    capabilities: [
      {
        title: "Creative Art Direction",
        description: "Custom digital graphics, video micro-reels, and copy designed to elevate brand authority and organic reach."
      },
      {
        title: "Performance Ads Optimization",
        description: "Strategic campaign building, pixel setups, retargeting funnels, and real-time bidding management."
      }
    ]
  },
  {
    id: "crm-erp",
    title: "CRM & ERP Solutions",
    slug: "crm-erp",
    badge: "Enterprise Automation",
    description: "Custom pipelines and automated integrations (Zoho, Salesforce, Odoo) to streamline operations.",
    longDescription: "Optimize company efficiency with customized enterprise resource planning (ERP) and customer relationship management (CRM) setups. We design and integrate custom workflows connecting Sales, Inventory, Finance, and Human Resources in unified dashboards.",
    color: "bg-pastel-yellow",
    hoverColor: "hover:bg-pastel-yellow/80",
    accentColor: "#6C4CF1",
    techStack: ["Salesforce", "Zoho CRM", "Odoo", "Python", "Node.js", "PostgreSQL", "AWS Integrations", "Zapier Developer"],
    features: [
      "Bespoke Dashboard & Reports Engineering",
      "Workflow Automation scripts & Webhooks",
      "CRM Migration & Data Cleanups",
      "Sales Pipeline & Lead Funnel Customization",
      "Inventory Management Systems",
      "Legacy Systems Custom API Connectors"
    ],
    capabilities: [
      {
        title: "Process Orchestration",
        description: "Replace repetitive administration with custom scripts, automatic trigger-emails, and synchronized updates."
      },
      {
        title: "Unified Analytics Controls",
        description: "Aggregate key metrics from separate apps into executive dashboards for actionable performance indicators."
      }
    ]
  }
];
