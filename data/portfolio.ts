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
  painPoints: string[];
  solution: string;
  deliverables: string[];
  results: string[];
  imageUrl: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export const projects: Project[] = [
  {
    slug: "d2c-fashion-shopify-headless-rebuild",
    title: "Scaling a D2C Fashion Brand from Sluggish to Sold-Out (Shopify Headless Rebuild)",
    client: "Premium D2C Fashion & Apparel Brand",
    category: "Websites",
    description: "Rebuilding a premium D2C apparel storefront on headless Shopify architecture to eliminate mobile friction and drive revenue.",
    longDescription: "Aurora Boutique wanted to replace their slow, standard template storefront with a fast, customizable digital shopping experience. We built a customized Shopify storefront that links Next.js on the frontend with the Shopify Storefront API on the backend, accelerating load times and scaling brand presence.",
    resultMetric: "315% Revenue Growth",
    tags: ["Shopify Headless", "CRO", "Speed Optimization", "Email Automation"],
    color: "bg-[#EBF3FC]",
    painPoints: [
      "High paid-traffic volume but a conversion rate stuck below industry average.",
      "Average page load time of 4.5 seconds causing mass cart abandonment on mobile.",
      "Generic, template-based storefront that failed to reflect the brand's premium positioning.",
      "No automated recovery flow for abandoned checkouts, leaving revenue on the table."
    ],
    solution: "Rebuilt the storefront on a headless Shopify architecture for near-instant page rendering. Redesigned the checkout journey to remove friction, implemented custom theme development aligned with brand identity, and deployed automated email/SMS sequences.",
    deliverables: [
      "Custom Shopify headless theme (React front-end + Shopify backend)",
      "Optimized one-page checkout flow with express payment options",
      "Automated abandoned cart, win-back, and loyalty email sequences",
      "Core Web Vitals and mobile speed optimization pass"
    ],
    results: [
      "315% increase in online revenue within 6 months",
      "4.5s → 1.2s improvement in average site load speed",
      "40% drop in cart abandonment rate"
    ],
    imageUrl: "/images/ecommerce_showcase.jpg",
    metaTitle: "D2C Fashion Brand Shopify Headless Rebuild | 315% Revenue Growth Case Study",
    metaDescription: "See how KK Next Tech Solution rebuilt a D2C fashion brand's Shopify store, cut load time to 1.2s, and drove a 315% revenue increase in 6 months.",
    keywords: ["Shopify headless development", "D2C ecommerce growth", "Shopify speed optimization", "cart abandonment reduction", "ecommerce CRO case study"]
  },
  {
    slug: "global-logistics-custom-crm-automation",
    title: "Replacing Excel Chaos with a Real-Time Custom CRM for Global Logistics",
    client: "Global Logistics & Supply Chain Company",
    category: "CRM/ERP",
    description: "Building a custom React/Node.js shipment tracking dashboard and centralized CRM to automate operations and client notifications.",
    longDescription: "Managing over 500 daily shipments across scattered spreadsheets caused frequent data loss, version conflicts, and a flood of manual status calls. We built a custom web dashboard as the single source of truth, integrated with a centralized CRM.",
    resultMetric: "120+ Hours Saved Weekly",
    tags: ["Custom Web Dashboard", "CRM Integration", "Workflow Automation"],
    color: "bg-[#050B14]",
    painPoints: [
      "500+ daily shipments tracked manually across scattered spreadsheets.",
      "Frequent data loss and version-conflict errors between teams.",
      "No automated client notifications, leading to a flood of manual status-update calls.",
      "Zero real-time visibility into shipment status for management or customers."
    ],
    solution: "Built a custom web dashboard as the single source of truth for shipment data. Integrated a centralized CRM to unify sales, operations, and customer communication with role-based access control.",
    deliverables: [
      "Custom React/Node.js shipment tracking dashboard",
      "CRM integration with automated notification triggers",
      "Real-time reporting and analytics module",
      "Staff training and 24/7 technical support handover"
    ],
    results: [
      "120+ man-hours saved per week through automation",
      "Zero data loss incidents since go-live",
      "60% increase in Client Satisfaction Score (CSAT)"
    ],
    imageUrl: "/images/crm_erp_dashboard.jpg",
    metaTitle: "Custom CRM for Logistics Companies | Real-Time Shipment Tracking Case Study",
    metaDescription: "KK Next Tech Solution built a custom CRM and dashboard for a global logistics firm, saving 120+ hours weekly and eliminating data loss.",
    keywords: ["custom CRM development", "logistics software solutions", "workflow automation for logistics", "custom business dashboard", "CRM implementation case study"]
  },
  {
    slug: "b2b-saas-lead-generation-seo",
    title: "Turning a Silent SaaS Product into a B2B Lead-Generation Machine",
    client: "B2B SaaS Startup (Project Management Tools)",
    category: "Social Media",
    description: "Fusing technical SEO audits, LinkedIn Lead Gen campaigns, and Google Search Ads to generate high-ticket B2B leads at scale.",
    longDescription: "A promising SaaS startup possessed a strong product but lacked search visibility and structured lead acquisition pipelines. We executed a full technical SEO overhaul paired with targeted LinkedIn and Google Ads campaigns.",
    resultMetric: "1,200+ Qualified Leads",
    tags: ["SEO", "LinkedIn Lead Gen", "Google Search Ads", "Technical SEO"],
    color: "bg-[#F1F5F9]",
    painPoints: [
      "Strong product with almost zero organic or paid visibility.",
      "No structured pipeline for high-ticket B2B leads.",
      "Website suffered from technical SEO issues suppressing search rankings.",
      "Marketing spend was scattered with no clear ROI tracking."
    ],
    solution: "Ran a full technical SEO audit fixing crawlability and speed. Launched targeted LinkedIn and Google Search Ads campaigns built around high-intent keywords with direct CRM handoff.",
    deliverables: [
      "Technical SEO audit and on-page optimization rollout",
      "LinkedIn Lead Gen and Google Search Ads campaign build",
      "Keyword-mapped content and landing page strategy",
      "Monthly performance and ROAS reporting dashboard"
    ],
    results: [
      "1,200+ qualified B2B leads generated in Q1",
      "55% reduction in Cost Per Acquisition (CPA)",
      "Page 1 rankings achieved for 15+ competitive keywords"
    ],
    imageUrl: "/images/social_marketing_showcase.jpg",
    metaTitle: "B2B SaaS Lead Generation Case Study | 1,200+ Qualified Leads in Q1",
    metaDescription: "How KK Next Tech Solution combined SEO, LinkedIn Lead Gen, and Google Ads to generate 1,200+ B2B leads and cut CPA by 55% for a SaaS startup.",
    keywords: ["B2B lead generation", "SaaS SEO agency", "LinkedIn lead gen campaigns", "B2B performance marketing", "reduce cost per acquisition"]
  },
  {
    slug: "ai-demand-forecasting-wholesale-erp",
    title: "AI-Powered Demand Forecasting for a Multi-Brand Wholesale Distributor",
    client: "Wholesale Distributor (FMCG & Consumer Goods)",
    category: "CRM/ERP",
    description: "Centralizing purchasing, inventory, and sales data with AI-driven predictive reorder engines to eliminate dead stock.",
    longDescription: "Constant overstocking of slow-moving items tied up capital while top-sellers suffered stockouts due to manual reordering. We deployed an ERP system paired with an AI demand forecasting engine.",
    resultMetric: "34% Less Dead Stock",
    tags: ["ERP Consultation", "AI Demand Forecasting", "Workflow Automation"],
    color: "bg-[#F8FAFC]",
    painPoints: [
      "Constant overstocking of slow-moving SKUs tying up working capital.",
      "Frequent stockouts on best-sellers due to manual, gut-feel reordering.",
      "No unified system connecting purchasing, warehousing, and sales data.",
      "Finance team spending days each month reconciling stock and sales reports."
    ],
    solution: "Implemented a central ERP system connecting sales, inventory, and purchasing. Deployed an AI demand forecasting model trained on historical sales velocity to automate purchase order creation.",
    deliverables: [
      "ERP selection, setup, and zero-downtime data migration",
      "Custom AI demand forecasting and auto-reorder engine",
      "Automated purchase order workflow with supplier integration",
      "Executive analytics dashboard for margin and turnover tracking"
    ],
    results: [
      "34% reduction in dead stock within the first quarter",
      "98% in-stock rate maintained on top-selling SKUs",
      "150+ hours saved monthly on manual reconciliation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    metaTitle: "AI Demand Forecasting for Wholesale Distributors | ERP Automation Case Study",
    metaDescription: "KK Next Tech Solution deployed AI demand forecasting and ERP automation for a wholesale distributor, cutting dead stock by 34% and boosting stock accuracy.",
    keywords: ["AI demand forecasting", "ERP implementation for distributors", "inventory automation software", "wholesale supply chain automation", "ERP consultation services"]
  },
  {
    slug: "omnichannel-inventory-retail-franchise",
    title: "Omnichannel Inventory Sync for a Growing Retail Franchise",
    client: "Multi-Location Retail Chain & Franchise",
    category: "CRM/ERP",
    description: "Connecting Shopify, marketplace listings, and physical POS stores into one real-time stock ledger via InventO.",
    longDescription: "Un-synced inventory across online and physical retail led to overselling penalties and manual daily stock counts. We deployed InventO as the single stock brain across all sales channels.",
    resultMetric: "Zero Overselling Incidents",
    tags: ["InventO Implementation", "Omnichannel Automation", "Shopify Integration"],
    color: "bg-[#EBF3FC]",
    painPoints: [
      "Selling across Shopify, a marketplace, and physical stores with no synced stock data.",
      "Overselling incidents triggering marketplace penalties and refund costs.",
      "Store managers manually counting and updating stock across every channel daily.",
      "No visibility into which locations were about to run out of fast-moving items."
    ],
    solution: "Rolled out InventO as the central inventory brain connecting Shopify, marketplace listings, and in-store POS to a single real-time stock ledger with smart reorder triggers.",
    deliverables: [
      "InventO omnichannel inventory sync setup",
      "POS and Shopify/marketplace integration",
      "Automated smart-reorder trigger configuration",
      "Multi-location analytics and low-stock alerting"
    ],
    results: [
      "Zero overselling incidents since implementation",
      "27% reduction in emergency restocking costs",
      "10+ hrs/week saved per location on manual stock counts"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Omnichannel Inventory Automation for Retail Chains | InventO Case Study",
    metaDescription: "See how InventO by KK Next Tech Solution synced stock across Shopify, marketplaces, and stores for a retail franchise, eliminating overselling.",
    keywords: ["omnichannel inventory management", "retail inventory automation", "InventO software", "Shopify inventory sync", "franchise stock management system"]
  },
  {
    slug: "real-estate-crm-lead-automation",
    title: "From Missed Follow-Ups to a Fully Automated Sales Pipeline for a Real Estate Agency",
    client: "Real Estate Brokerage & Agency Network",
    category: "CRM/ERP",
    description: "Building automated instant-response flows, property deal pipelines, and CRM tracking for real estate agents.",
    longDescription: "High inbound lead volume was wasted due to slow agent response times and siloed records. We built an automated CRM pipeline with instant SMS/email nurture sequences and task reminders.",
    resultMetric: "70% Faster Response Time",
    tags: ["CRM Implementation", "Lead Automation", "Custom Workflow Setup"],
    color: "bg-[#F8FAFC]",
    painPoints: [
      "High volume of inbound leads with agents manually chasing follow-ups.",
      "Leads going cold within hours due to slow, inconsistent response times.",
      "No central record of client property preferences or communication history.",
      "Sales managers had zero visibility into deal-stage progress across agents."
    ],
    solution: "Implemented a CRM tailored to real estate workflows with automated instant-response nurture flows, custom deal-pipeline stages, and manager forecasting dashboards.",
    deliverables: [
      "CRM system selection, setup, and agent onboarding",
      "Automated lead-response and nurture email/SMS flows",
      "Custom deal-pipeline stages with task automation",
      "Manager-level reporting and forecasting dashboard"
    ],
    results: [
      "70% faster average lead response time",
      "45% increase in lead-to-viewing conversion rate",
      "100% of leads now captured with full communication history"
    ],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Real Estate CRM Automation Case Study | Faster Lead Response, More Closings",
    metaDescription: "KK Next Tech Solution implemented CRM and lead automation for a real estate agency, cutting response time by 70% and boosting conversions by 45%.",
    keywords: ["real estate CRM implementation", "lead automation for real estate", "CRM for property agencies", "sales pipeline automation", "real estate lead nurturing"]
  },
  {
    slug: "d2c-skincare-shopify-marketing-automation",
    title: "Building a Cult-Favorite D2C Skincare Brand with Shopify and Marketing Automation",
    client: "D2C Skincare & Beauty Brand",
    category: "Websites",
    description: "Designing a high-converting Shopify store featuring subscribe-and-save replenishment flows and retention marketing.",
    longDescription: "Launching a new skincare brand required a conversion-focused storefront and a strong repeat-purchase retention loop. We designed a custom Shopify store integrated with subscription features and lifecycle marketing.",
    resultMetric: "48% Repeat Revenue",
    tags: ["Shopify Store Build", "Email/SMS Automation", "Performance Marketing"],
    color: "bg-[#EBF3FC]",
    painPoints: [
      "Launching with no existing storefront, brand system, or repeat-purchase strategy.",
      "One-time buyers weren't converting into repeat, loyal customers.",
      "No subscription or replenishment model despite consumable products.",
      "Ad spend on Meta and Google wasn't tied to a clear customer retention loop."
    ],
    solution: "Designed and built a custom Shopify storefront with subscribe-and-save workflows, full lifecycle email/SMS automation, and retention-focused performance marketing campaigns.",
    deliverables: [
      "Custom Shopify theme with subscription functionality",
      "Full lifecycle email/SMS marketing automation",
      "Meta and Google performance marketing campaign setup",
      "Loyalty and referral program integration"
    ],
    results: [
      "48% of revenue now from repeat/subscription customers",
      "3.1x return on ad spend (ROAS) within 4 months",
      "22% average order value increase via bundling"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    metaTitle: "D2C Skincare Brand Shopify Launch Case Study | Subscription & Marketing Automation",
    metaDescription: "KK Next Tech Solution launched a D2C skincare brand on Shopify with subscription flows and marketing automation, driving 3.1x ROAS.",
    keywords: ["D2C Shopify store launch", "ecommerce subscription model", "Shopify marketing automation", "D2C brand growth agency", "email SMS automation ecommerce"]
  },
  {
    slug: "b2b-manufacturing-wordpress-erp",
    title: "Modernizing a B2B Manufacturing Firm with a High-Speed WordPress Site and ERP",
    client: "B2B Industrial Manufacturing Firm",
    category: "Websites",
    description: "Creating an SEO-friendly technical product catalog on WordPress connected directly to an ERP sales pipeline.",
    longDescription: "An outdated web presence and manual email-based quote handling created severe delays in industrial buyer acquisition. We built a fast WordPress catalog site integrated with automated RFQ routing.",
    resultMetric: "3x Inbound RFQs",
    tags: ["WordPress Development", "ERP Consultation", "Workflow Automation"],
    color: "bg-[#F8FAFC]",
    painPoints: [
      "Outdated website that failed to communicate technical capabilities to buyers.",
      "Sales, production, and inventory teams operating on disconnected legacy systems.",
      "RFQ (request for quote) handling done entirely via email, causing long delays.",
      "No SEO presence for high-intent industrial and B2B procurement searches."
    ],
    solution: "Built a fast, SEO-optimized WordPress website featuring an industrial product catalog, connected RFQ intake directly to ERP sales pipelines, and optimized technical SEO.",
    deliverables: [
      "Custom WordPress website with product/catalog architecture",
      "ERP selection, configuration, and system integration",
      "Automated RFQ-to-CRM workflow",
      "Technical SEO and content optimization for B2B search"
    ],
    results: [
      "3x increase in inbound RFQ volume within 5 months",
      "65% faster quote turnaround time",
      "40% reduction in production planning errors"
    ],
    imageUrl: "/images/web_architecture_showcase.jpg",
    metaTitle: "B2B Manufacturing WordPress & ERP Case Study | Faster RFQs, More Leads",
    metaDescription: "See how KK Next Tech Solution combined a fast WordPress site with ERP automation for a B2B manufacturer, tripling inbound RFQ volume.",
    keywords: ["B2B manufacturing website design", "ERP for manufacturing", "WordPress development for industrial companies", "RFQ automation", "B2B website SEO"]
  },
  {
    slug: "ai-recommendation-engine-edtech-platform",
    title: "Building an AI-Powered Recommendation Engine for an EdTech Learning Platform",
    client: "EdTech Startup (Online Course Marketplace)",
    category: "Mobile Apps",
    description: "Engineering a custom React/Node.js learning application with behavioral AI recommendation engines to boost course completion.",
    longDescription: "Learners struggled to discover relevant material in a large course catalog, leading to low completion rates. We built an API-first custom web platform equipped with an AI recommendation model.",
    resultMetric: "58% Higher Completion",
    tags: ["Custom Web App", "AI Recommendation Engine", "API Integrations"],
    color: "bg-[#EBF3FC]",
    painPoints: [
      "High course catalog size but poor course-completion and repeat-enrollment rates.",
      "Learners struggled to find relevant courses, increasing drop-off after sign-up.",
      "Manual, static course suggestions were unrelated to individual learning behavior.",
      "No unified data layer connecting user activity, progress, and purchase history."
    ],
    solution: "Developed a custom web application with an AI recommendation engine based on learner behavior, integrating video, payment, and certification APIs into a unified user flow.",
    deliverables: [
      "Custom React/Node.js learning platform",
      "AI recommendation engine (content-based + behavioral model)",
      "Third-party API integrations (payments, video, certification)",
      "Analytics layer for engagement and completion tracking"
    ],
    results: [
      "58% increase in course-completion rate",
      "2.4x increase in repeat course enrollments",
      "33% uplift in average revenue per learner"
    ],
    imageUrl: "/images/mobile_app_showcase.jpg",
    metaTitle: "AI Recommendation Engine for EdTech Platforms | Custom Development Case Study",
    metaDescription: "KK Next Tech Solution built a custom EdTech platform with an AI recommendation engine, boosting course completion by 58%.",
    keywords: ["AI recommendation engine development", "custom EdTech platform development", "AI in education technology", "custom web app development", "learning platform personalization"]
  },
  {
    slug: "ai-booking-assistant-healthcare-network",
    title: "Cutting No-Shows and Wait Times with an AI Booking Assistant for a Healthcare Network",
    client: "Multi-Clinic Healthcare & Wellness Network",
    category: "Mobile Apps",
    description: "Building an automated clinic booking web application and AI scheduling chatbot integrated with central patient CRMs.",
    longDescription: "Front-desk teams were overwhelmed by phone scheduling while patient no-shows harmed clinic revenue. We built a custom multi-location online booking platform and automated AI scheduling chatbot.",
    resultMetric: "52% Reduction in No-Shows",
    tags: ["Custom Booking Platform", "AI Chatbot Automation", "CRM Integration"],
    color: "bg-[#F8FAFC]",
    painPoints: [
      "Patients booking via phone calls only, overwhelming front-desk staff.",
      "High no-show rate with no automated reminder or rescheduling system.",
      "Appointment data siloed per clinic location with no central patient record.",
      "Staff spending hours daily on repetitive scheduling questions."
    ],
    solution: "Built a custom multi-clinic online booking platform connected to an AI scheduling chatbot, with centralized CRM records and automated SMS/email reminder workflows.",
    deliverables: [
      "Custom multi-location booking web application",
      "AI-powered chatbot for scheduling and patient FAQs",
      "CRM integration with unified patient records",
      "Automated SMS/email reminder workflows"
    ],
    results: [
      "52% reduction in patient no-show rate",
      "80% of routine scheduling queries now handled by AI",
      "35% reduction in front-desk administrative workload"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    metaTitle: "AI Chatbot Booking Automation for Healthcare Clinics | Case Study",
    metaDescription: "KK Next Tech Solution built an AI chatbot and custom booking platform for a healthcare network, cutting no-shows by 52%.",
    keywords: ["AI chatbot for healthcare", "custom clinic booking system", "healthcare CRM automation", "reduce patient no-shows software", "AI automation for clinics"]
  }
];
