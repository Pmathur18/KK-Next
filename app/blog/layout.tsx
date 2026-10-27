import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights, Engineering Guides & Growth Strategies | KK Next Tech Solutions",
  description:
    "Read expert articles on custom web development, Headless Shopify optimization, ERP automation, and high-ROAS performance marketing by KK Next Tech Solutions.",
  keywords: [
    "Custom web development insights",
    "Headless Shopify optimization guide",
    "ERP CRM integration trends",
    "Performance marketing ROAS strategy",
    "B2B tech insights India",
    "KK Next Tech Solutions blog",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/blog",
  },
  openGraph: {
    title: "Tech Insights, Engineering Guides & Growth Strategies | KK Next Tech Solutions",
    description:
      "Read expert articles on custom web development, Headless Shopify optimization, ERP automation, and high-ROAS performance marketing by KK Next Tech Solutions.",
    url: "https://www.kknexttech.com/blog",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions Insights and Engineering Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Insights, Engineering Guides & Growth Strategies | KK Next Tech Solutions",
    description:
      "Read expert articles on custom web development, Headless Shopify optimization, ERP automation, and high-ROAS performance marketing.",
    images: ["/images/hero_dashboard.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
