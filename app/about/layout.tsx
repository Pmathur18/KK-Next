import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KK Next Tech Solution | Tech & Growth Agency in Delhi",
  description:
    "We fuse software engineering with data-driven marketing. Meet the KK Next Tech team — 100+ projects delivered, 98% client retention. Zero fluff, all ROI.",
  keywords: [
    "About KK Next Tech Solution",
    "Tech Agency Delhi",
    "Digital Growth Agency",
    "Software Engineering India",
  ],
  openGraph: {
    title: "About KK Next Tech Solution | Tech & Growth Agency in Delhi",
    description:
      "We fuse software engineering with data-driven marketing. 100+ projects delivered, 98% client retention. Zero fluff, all ROI.",
    url: "https://kknextech.com/about",
    siteName: "KK NEX TECH SOLUTION",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KK Next Tech Solution | Tech & Growth Agency",
    description:
      "100+ projects. 98% client retention. Zero fluff. All ROI.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
