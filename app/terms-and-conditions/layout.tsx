import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | KK Next Tech Solutions",
  description:
    "Review the Terms & Conditions governing website usage, project engagement terms, intellectual property ownership, and service guidelines for KK Next Tech Solutions.",
  alternates: {
    canonical: "https://kknextech.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | KK Next Tech Solutions",
    description:
      "Review the Terms & Conditions governing website usage and service engagements with KK Next Tech Solutions.",
    url: "https://kknextech.com/terms-and-conditions",
    siteName: "KK Next Tech Solutions",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
