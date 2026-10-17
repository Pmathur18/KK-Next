import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch & Request a Tech Audit | KK Next Tech Solutions",
  description:
    "Ready to scale your digital presence? Book a strategic technical consultation or growth audit with our engineering leads. Fast 4-hour response time.",
  keywords: [
    "Contact tech agency",
    "Hire web developers Delhi",
    "Request growth audit",
    "E-commerce consulting consultation",
    "KK Next Tech Solutions contact",
  ],
  alternates: {
    canonical: "https://kknextech.com/contact",
  },
  openGraph: {
    title: "Get in Touch & Request a Tech Audit | KK Next Tech Solutions",
    description:
      "Ready to scale your digital presence? Book a strategic technical consultation or growth audit with our engineering leads. Fast 4-hour response time.",
    url: "https://kknextech.com/contact",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/tech_team_workspace.jpg",
        width: 1200,
        height: 630,
        alt: "Contact KK Next Tech Solutions Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch & Request a Tech Audit | KK Next Tech Solutions",
    description:
      "Schedule your technical discovery call and get a free tech audit within 48 hours.",
    images: ["/images/tech_team_workspace.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
