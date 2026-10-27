import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross-Platform Mobile App Development (iOS & Android) | KK Next Tech Solutions",
  description:
    "High-performance mobile applications engineered with React Native and Flutter. 60fps native performance, offline-first sync, and guaranteed App Store & Google Play compliance.",
  keywords: [
    "Mobile app development services",
    "React Native development agency",
    "Flutter app developers",
    "Cross platform mobile applications",
    "iOS and Android development",
    "Mobile UI UX engineering",
    "KK Next Tech Solutions mobile apps",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com/services/mobile-apps",
  },
  openGraph: {
    title: "Cross-Platform Mobile App Development (iOS & Android) | KK Next Tech Solutions",
    description:
      "High-performance mobile applications engineered with React Native and Flutter for iOS & Android.",
    url: "https://www.kknexttech.com/services/mobile-apps",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/mobile_app_showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Cross-Platform Mobile App Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Platform Mobile App Development (iOS & Android) | KK Next Tech Solutions",
    description:
      "High-performance mobile applications engineered with React Native and Flutter.",
    images: ["/images/mobile_app_showcase.jpg"],
  },
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
