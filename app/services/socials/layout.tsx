import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing & Social Media Growth | KK Next Tech Solutions",
  description:
    "Data-driven social media management, organic community growth, and high-ROAS paid advertising on Meta, LinkedIn, and Google Ads designed to scale high-intent inbound leads.",
  keywords: [
    "Social media management agency",
    "Paid social advertising Meta LinkedIn",
    "Performance marketing services",
    "Full-funnel digital marketing",
    "ROAS optimization agency",
    "KK Next Tech Solutions socials",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/services/socials",
  },
  openGraph: {
    title: "Performance Marketing & Social Media Growth | KK Next Tech Solutions",
    description:
      "Data-driven social media management, organic community growth, and high-ROAS paid advertising on Meta, LinkedIn, and Google Ads designed to scale high-intent inbound leads.",
    url: "https://www.kknexttech.com/services/socials",
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
    title: "Performance Marketing & Social Media Growth | KK Next Tech Solutions",
    description:
      "Data-driven social media management and high-ROAS paid advertising designed to scale revenue.",
    images: ["/images/social_marketing_showcase.jpg"],
  },
};

export default function SocialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
