import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End-to-End Digital Services & Tech Solutions | KK Next Tech Solutions",
  description:
    "Explore our full suite of digital services: custom web applications, e-commerce storefronts, cross-platform mobile apps, enterprise CRM/ERP consultations, and ROI-driven digital marketing.",
  keywords: [
    "Web development services",
    "Shopify e-commerce development",
    "CRM ERP consulting",
    "Mobile app development React Native",
    "Performance marketing services",
    "B2B growth agency",
    "KK Next Tech Solutions services",
  ],
  alternates: {
    canonical: "https://kknextech.com/services",
  },
  openGraph: {
    title: "End-to-End Digital Services & Tech Solutions | KK Next Tech Solutions",
    description:
      "Explore our full suite of digital services: custom web applications, e-commerce storefronts, cross-platform mobile apps, enterprise CRM/ERP consultations, and ROI-driven digital marketing.",
    url: "https://kknextech.com/services",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End-to-End Digital Services & Tech Solutions | KK Next Tech Solutions",
    description:
      "Explore our full suite of digital services: custom web applications, e-commerce storefronts, cross-platform mobile apps, enterprise CRM/ERP consultations, and ROI-driven digital marketing.",
    images: ["/images/hero_dashboard.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
