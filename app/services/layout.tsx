import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & Growth Marketing Services | KK Next Tech Solutions",
  description:
    "Explore KK Next Tech Solutions' core services: custom web app development, headless Shopify solutions, cross-platform mobile apps, ERP automation, and high-ROAS performance marketing.",
  keywords: [
    "Custom software development agency",
    "Headless Shopify development partner",
    "Cross-platform mobile app development",
    "Enterprise CRM ERP consulting",
    "Performance marketing agency",
    "B2B growth engineering",
    "KK Next Tech Solutions services",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/services",
  },
  openGraph: {
    title: "Custom Software & Growth Marketing Services | KK Next Tech Solutions",
    description:
      "Engineering high-performance web applications, enterprise software, and scaling them with data-driven performance marketing.",
    url: "https://www.kknexttech.com/services",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions Services - Engineering and Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Growth Marketing Services | KK Next Tech Solutions",
    description:
      "Explore KK Next Tech Solutions' core services: custom web app development, headless Shopify solutions, ERP automation, and high-ROAS performance marketing.",
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
