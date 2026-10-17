import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Engineering Roles | KK Next Tech Solutions",
  description:
    "Join the high-performing engineering and growth team at KK Next Tech Solutions. Explore remote and hybrid job openings in frontend, backend, UI/UX, and performance marketing.",
  keywords: [
    "Tech agency careers India",
    "Frontend developer jobs React Next.js",
    "Performance marketing vacancies",
    "Remote software engineering jobs",
    "KK Next Tech Solutions careers",
  ],
  alternates: {
    canonical: "https://kknextech.com/career",
  },
  openGraph: {
    title: "Careers & Open Engineering Roles | KK Next Tech Solutions",
    description:
      "Join the high-performing engineering and growth team at KK Next Tech Solutions. Explore remote and hybrid job openings.",
    url: "https://kknextech.com/career",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/agency_story_tech_studio.jpg",
        width: 1200,
        height: 630,
        alt: "Work at KK Next Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Open Engineering Roles | KK Next Tech Solutions",
    description:
      "Join our engineering and performance marketing powerhouse. Explore active roles.",
    images: ["/images/agency_story_tech_studio.jpg"],
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
