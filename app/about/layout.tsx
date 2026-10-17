import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KK Next Tech Solutions | Tech & Growth Agency in Delhi",
  description:
    "We fuse software engineering with data-driven marketing. Meet the KK Next Tech team — 100+ projects delivered, 98% client retention. Zero fluff, all ROI.",
  keywords: [
    "About KK Next Tech Solutions",
    "Tech Agency Delhi",
    "Digital Growth Agency",
    "Software Engineering India",
  ],
  alternates: {
    canonical: "https://kknextech.com/about",
  },
  openGraph: {
    title: "About KK Next Tech Solutions | Tech & Growth Agency in Delhi",
    description:
      "We fuse software engineering with data-driven marketing. Meet the KK Next Tech team — 100+ projects delivered, 98% client retention. Zero fluff, all ROI.",
    url: "https://kknextech.com/about",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/agency_story_tech_studio.jpg",
        width: 1200,
        height: 630,
        alt: "About KK Next Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About KK Next Tech Solutions | Tech & Growth Agency",
    description:
      "100+ projects. 98% client retention. Zero fluff. All ROI.",
    images: ["/images/agency_story_tech_studio.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
