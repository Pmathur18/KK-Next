export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  metric: string;
  quote: string;
  rating: number;
  caseStudySlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Rohan Malhotra",
    company: "Aurora Fashion Apparel",
    role: "Head of Digital Commerce",
    metric: "+315% Revenue Growth",
    quote: "KK Next Tech Solutions transformed our outdated storefront into a lightning-fast headless Shopify app. Load times dropped under 1.2s, and mobile checkout conversion surged by 3x within 6 months.",
    rating: 5,
    caseStudySlug: "d2c-fashion-shopify-headless-rebuild",
  },
  {
    id: "t2",
    clientName: "Vikram Rathore",
    company: "Apex Global Supply Chain",
    role: "Chief Operating Officer",
    metric: "40% Ops Overhead Cut",
    quote: "They replaced our disconnected spreadsheets with a real-time tracking dashboard and custom ERP sync. Our dispatch errors are practically zero, and warehouse turnarounds are faster than ever.",
    rating: 5,
    caseStudySlug: "global-logistics-custom-crm-automation",
  },
  {
    id: "t3",
    clientName: "Ananya Singhania",
    company: "ScaleCraft B2B Cloud",
    role: "VP of Growth & Marketing",
    metric: "340% ROAS & -42% CPL",
    quote: "Dev agencies don't understand marketing, and ad agencies don't understand code. KK Next Tech Solutions is the only partner we found that excels at both technical SEO architecture and high-ROAS paid acquisition.",
    rating: 5,
    caseStudySlug: "b2b-saas-lead-generation-seo",
  },
  {
    id: "t4",
    clientName: "Siddharth Jain",
    company: "LuxeSkin D2C Organic",
    role: "Founder & CEO",
    metric: "+180% Retention",
    quote: "Their full-funnel Klaviyo and Meta automation sequence generated immediate positive cash flow. They communicate with complete transparency, and their execution velocity is incredible.",
    rating: 5,
    caseStudySlug: "d2c-skincare-shopify-marketing-automation",
  },
];
