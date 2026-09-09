import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "KK Next Tech Solution | Custom Web Development & Digital Growth Agency",
  description:
    "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
  keywords: [
    "Custom Web Development & Performance Marketing Agency",
    "Shopify e-commerce solutions",
    "enterprise CRM consultation",
    "scalable web application architecture",
    "data-driven digital growth",
    "enterprise web development",
    "full-funnel digital marketing",
    "scalable CRM integration",
    "custom WordPress solutions",
    "KK Next Tech Solution",
  ],
  openGraph: {
    title: "KK Next Tech Solution | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
    url: "https://kknextech.com",
    siteName: "KK Next Tech Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Next Tech Solution | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations.",
  },
};

export default function Home() {
  return <HomeClient />;
}
