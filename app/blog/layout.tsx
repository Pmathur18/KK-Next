import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Growth Insights Blog | KK Next Tech Solutions",
  description:
    "Expert insights on modern web development, headless e-commerce, AI business automation, CRM architecture, and data-backed performance marketing strategies.",
  keywords: [
    "Web development insights",
    "Shopify e-commerce blog",
    "CRM automation articles",
    "Performance marketing strategies",
    "Tech agency blog India",
    "KK Next Tech Solutions blog",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/blog",
  },
  openGraph: {
    title: "Engineering & Growth Insights Blog | KK Next Tech Solutions",
    description:
      "Expert insights on modern web development, headless e-commerce, AI business automation, CRM architecture, and data-backed performance marketing strategies.",
    url: "https://www.kknexttech.com/blog",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Growth Insights Blog | KK Next Tech Solutions",
    description:
      "Expert insights on web development, headless e-commerce, CRM systems, and performance marketing.",
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
