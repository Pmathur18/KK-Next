import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Realized ROI | KK Next Tech Solutions",
  description:
    "Explore our proven track record: 315% e-commerce revenue growth, custom logistics CRMs saving 120+ weekly hours, and full-funnel B2B lead generation engines.",
  keywords: [
    "Tech agency portfolio",
    "Web development case studies",
    "Shopify headless case study",
    "CRM implementation results",
    "Digital growth proof",
    "KK Next Tech Solutions portfolio",
  ],
  alternates: {
    canonical: "https://kknextech.com/portfolio",
  },
  openGraph: {
    title: "Client Case Studies & Realized ROI | KK Next Tech Solutions",
    description:
      "Explore our proven track record: 315% e-commerce revenue growth, custom logistics CRMs saving 120+ weekly hours, and full-funnel B2B lead generation engines.",
    url: "https://kknextech.com/portfolio",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/ecommerce_showcase.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions Case Studies & Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Realized ROI | KK Next Tech Solutions",
    description:
      "Explore verified case studies and technical outcomes delivered by KK Next Tech Solutions.",
    images: ["/images/ecommerce_showcase.jpg"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
