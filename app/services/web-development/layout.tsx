import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify & Custom Next.js Web Development | KK Next Tech Solutions",
  description:
    "High-conversion Shopify stores and bespoke Next.js web applications engineered for speed, scalability, and revenue growth. Sub-second load times and headless architecture.",
  keywords: [
    "Shopify headless development",
    "Next.js web development agency",
    "Custom eCommerce development",
    "Bespoke web applications",
    "Tailwind CSS web development",
    "High performance web engineering",
    "KK Next Tech Solutions web development",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/services/web-development",
  },
  openGraph: {
    title: "Shopify & Custom Next.js Web Development | KK Next Tech Solutions",
    description:
      "High-conversion Shopify stores and bespoke Next.js web applications engineered for speed, scalability, and revenue growth.",
    url: "https://www.kknexttech.com/services/web-development",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/web_architecture_showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify and Custom Next.js Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify & Custom Next.js Web Development | KK Next Tech Solutions",
    description:
      "High-conversion Shopify stores and bespoke Next.js web applications engineered for speed, scalability, and revenue growth.",
    images: ["/images/web_architecture_showcase.jpg"],
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
