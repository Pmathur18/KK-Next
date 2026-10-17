import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing & Social Media Management | KK Next Tech Solutions",
  description:
    "Data-driven social media management, organic community growth, and high-ROAS paid advertising on Meta, LinkedIn, and Google Ads designed to scale high-intent inbound leads.",
  keywords: [
    "Social media management agency",
    "Paid social advertising Meta LinkedIn",
    "Performance marketing services",
    "Full-funnel digital marketing",
    "ROAS optimization agency",
    "KK Next Tech Solutions marketing",
  ],
  alternates: {
    canonical: "https://kknextech.com/services/social-media-management",
  },
  openGraph: {
    title: "Performance Marketing & Social Media Management | KK Next Tech Solutions",
    description:
      "Data-driven social media management, organic community growth, and high-ROAS paid advertising on Meta, LinkedIn, and Google Ads designed to scale high-intent inbound leads.",
    url: "https://kknextech.com/services/social-media-management",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/social_marketing_showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Performance Marketing and Social Media Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing & Social Media Management | KK Next Tech Solutions",
    description:
      "Data-driven social media management and high-ROAS paid advertising designed to scale revenue.",
    images: ["/images/social_marketing_showcase.jpg"],
  },
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
