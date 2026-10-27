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
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
    template: "%s | KK Next Tech Solutions",
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
    "KK Next Tech Solutions",
  ],
  alternates: {
    canonical: "https://www.kknexttech.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kknexttech.com",
    siteName: "KK Next Tech Solutions",
    title: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations. Schedule your free tech audit today!",
    images: [
      {
        url: "/images/hero_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "KK Next Tech Solutions - Custom Web Development & Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Next Tech Solutions | Custom Web Development & Digital Growth Agency",
    description:
      "Scale your brand with high-performance web development, high-converting Shopify stores, ROI-focused performance marketing, and enterprise CRM/ERP consultations.",
    images: ["/images/hero_dashboard.jpg"],
  },
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
  manifest: "/manifest.json",
  metadataBase: new URL("https://www.kknexttech.com"),
  verification: {
    google: [
      "MwAhtfrqoY7T-gr01WyjaglpcR6fp1hlwRHx8HEEKd0",
      "google25616471298278e8",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.onesignal.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.onesignal.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-ink antialiased relative">
        {/* Google Analytics - deferred via lazyOnload */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-24Y8Z31Q9X"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-24Y8Z31Q9X');
          `}
        </Script>

        {/* OneSignal Web Push SDK - deferred via lazyOnload */}
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="lazyOnload"
        />
        <Script id="onesignal-init" strategy="lazyOnload">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "f9ffb707-6b81-4b77-ba2a-e06d10d21767",
                allowLocalhostAsSecureOrigin: true,
              });
            });
          `}
        </Script>

        {/* Global JSON-LD Schema: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.kknexttech.com/#organization",
                  "name": "KK Next Tech Solutions",
                  "legalName": "KK Next Tech Solutions",
                  "url": "https://www.kknexttech.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.kknexttech.com/#logo",
                    "url": "https://www.kknexttech.com/logo.png",
                    "caption": "KK Next Tech Solutions Logo"
                  },
                  "image": "https://www.kknexttech.com/logo.png",
                  "description": "Premium full-service web development, digital marketing, and business automation agency.",
                  "email": "contact@kknexttech.com",
                  "telephone": "+91 9001360054",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Delhi NCR",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/kk-next-tech",
                    "https://www.instagram.com/kknexttechsolution"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.kknexttech.com/#website",
                  "url": "https://www.kknexttech.com",
                  "name": "KK Next Tech Solutions",
                  "description": "Custom Web Development, Digital Marketing & Business Automation",
                  "publisher": {
                    "@id": "https://www.kknexttech.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.kknexttech.com/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />

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
