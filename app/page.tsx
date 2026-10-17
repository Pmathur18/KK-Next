import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
  description:
    "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
  keywords: [
    "Custom Web Development & Performance Marketing Agency",
    "Shopify e-commerce solutions",
    "enterprise CRM consultation",
    "scalable web application architecture",
    "data-driven digital growth",
    "enterprise web development",
    "full-funnel digital marketing",
    "scalable CRM integration",
    "custom WordPress solutions",
    "KK Next Tech Solutions",
  ],
  alternates: {
    canonical: "https://kknextech.com",
  },
  openGraph: {
    title: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
    url: "https://kknextech.com",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions - Architecture & Growth Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations.",
    images: ["/images/hero_dashboard.jpg"],
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you work with startups and small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We partner with businesses of all sizes, from early-stage startups and small businesses to established enterprises. For startups and growing businesses, we build lean MVPs and agile digital marketing strategies. For established companies, we deliver secure software modernizations, API integrations, and scalable infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a website project usually take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Development timelines vary based on project requirements and system integrations. Typically, custom full-stack web builds take 4 to 12 weeks from initial architectural mapping to production deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How can CRM or ERP solutions help my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRM and ERP solutions eliminate operational friction, automate repetitive manual workflows, organize client and inventory records, and unlock actionable business intelligence through custom integrations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after a website launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every delivery includes dedicated post-launch support and training. We also provide retainer models covering 24/7 infrastructure monitoring, security updates, continuous SEO optimization, and feature enhancements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with KK Next Tech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can schedule a free Tech & Growth consultation directly on our website. We analyze your goals and digital presence, outline recommended technical architectures, and deliver a detailed project roadmap within 48 hours."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HomeClient />
    </>
  );
}
