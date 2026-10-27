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
    id: "web-development",
    title: "Web Development (Shopify & Custom)",
    slug: "web-development",
    badge: "Web Development",
    description: "High-conversion Shopify stores and bespoke Next.js web applications tailored to scale your brand.",
    longDescription: "We design and develop modern, blazing-fast web platforms that transform your digital presence. Whether you need a highly optimized Shopify store or a complex custom web application, we use the latest technology stacks to ensure scalability, robust security, and seamless user experiences.",
    color: "bg-[#EBF3FC]",
    hoverColor: "hover:bg-[#DBEAFE]",
    accentColor: "#0A2540",
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
    color: "bg-[#F8FAFC]",
    hoverColor: "hover:bg-[#F1F5F9]",
    accentColor: "#1E40AF",
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
    id: "socials",
    title: "Social Media & Performance Ads",
    slug: "socials",
    badge: "Digital Growth",
    description: "Data-driven creative campaigns, content creation, paid advertising, and real-time community scaling.",
    longDescription: "Accelerate your social growth and multiply digital engagement. We craft bespoke content calendars, manage targeted paid search/social advertising accounts, run community conversations, and compile analytical reports to ensure positive return on your marketing spend.",
    color: "bg-[#F1F5F9]",
    hoverColor: "hover:bg-[#E2E8F0]",
    accentColor: "#050B14",
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
    description: "Custom pipelines and automated integrations (HubSpot, Salesforce, Odoo) to streamline operations.",
    longDescription: "Optimize company efficiency with customized enterprise resource planning (ERP) and customer relationship management (CRM) setups. We design and integrate custom workflows connecting Sales, Inventory, Finance, and Human Resources in unified dashboards.",
    color: "bg-[#050B14]",
    hoverColor: "hover:bg-black",
    accentColor: "#0A2540",
    techStack: ["Salesforce", "HubSpot CRM", "Odoo", "Python", "Node.js", "PostgreSQL", "AWS Integrations", "Zapier Developer"],
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
  },
  {
    id: "expense-management",
    title: "Expense Management",
    slug: "expense-management",
    badge: "Spend Automation",
    description: "Automate receipt OCR capture, approval hierarchies, departmental budgets, and GST reconciliation synced with Tally Prime and banking.",
    longDescription: "KK Next Expense helps your team submit, approve, and reconcile expenses in one unified cloud system. Enjoy AI receipt autoscan, multi-tier Slack/WhatsApp approvals, automated mileage GPS tracking, corporate card reconciliation, and 1-click ledger posting to Tally Prime and QuickBooks.",
    color: "bg-[#F3E8FF]",
    hoverColor: "hover:bg-[#E9D5FF]",
    accentColor: "#7C3AED",
    techStack: ["Next.js", "AI OCR", "Tally Prime API", "RazorpayX", "QuickBooks", "WhatsApp Bot", "PostgreSQL"],
    features: [
      "AI Autoscan Receipt OCR (99.2% accuracy)",
      "Multi-Tier Approval Workflows with WhatsApp & Slack Bot",
      "Department & Project Real-Time Budgets",
      "Corporate Card Direct Feeds & Auto-Reconciliation",
      "GPS Mileage & Regional Per Diem Tables",
      "1-Click Direct Bank Reimbursements & Tally Sync"
    ],
    capabilities: [
      {
        title: "Zero-Touch Receipt Processing",
        description: "Camera autoscan extracts merchant, date, amount, taxes, and GSTIN automatically in under 3 seconds."
      },
      {
        title: "Accounting & Bank Synchronization",
        description: "1-Click direct disbursement via RazorpayX and instant ledger posting to Tally Prime and QuickBooks."
      }
    ]
  }
];
