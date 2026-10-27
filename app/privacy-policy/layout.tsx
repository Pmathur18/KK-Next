import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KK Next Tech Solutions",
  description:
    "Review the official Privacy Policy of KK Next Tech Solutions regarding data privacy, user logs, security encryption, and cookie management.",
  alternates: {
    canonical: "https://www.kknexttech.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | KK Next Tech Solutions",
    description:
      "Review the official Privacy Policy of KK Next Tech Solutions regarding data privacy and user security.",
    url: "https://www.kknexttech.com/privacy-policy",
    siteName: "KK Next Tech Solutions",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
