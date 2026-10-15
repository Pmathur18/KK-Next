import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundBase from "@/components/layout/BackgroundBase";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "KK Next Tech Solution | Custom Web Development & Digital Growth Agency",
    template: "%s | KK Next Tech Solution",
  },
  description:
    "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
  keywords: [
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://kknextech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-ink antialiased relative">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-24Y8Z31Q9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-24Y8Z31Q9X');
          `}
        </Script>
        <BackgroundBase />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
