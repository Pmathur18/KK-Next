import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise CRM & ERP Consultation & Integration | KK Next Tech Solutions",
  description:
    "Eliminate operational bottlenecks and sync workflows with custom CRM and ERP integrations. Salesforce, HubSpot, and bespoke ERP architecture tailored to your business.",
  keywords: [
    "Enterprise CRM integration",
    "ERP consulting services",
    "Salesforce implementation",
    "HubSpot automation",
    "Custom ERP solutions",
    "Workflow automation",
    "KK Next Tech Solutions CRM",
  ],
  alternates: {
    canonical: "https://kknextech.com/services/crm-erp",
  },
  openGraph: {
    title: "Enterprise CRM & ERP Consultation & Integration | KK Next Tech Solutions",
    description:
      "Eliminate operational bottlenecks and sync workflows with custom CRM and ERP integrations. Salesforce, HubSpot, and bespoke ERP architecture tailored to your business.",
    url: "https://kknextech.com/services/crm-erp",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/crm_erp_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise CRM and ERP Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise CRM & ERP Consultation & Integration | KK Next Tech Solutions",
    description:
      "Eliminate operational bottlenecks and sync workflows with custom CRM and ERP integrations.",
    images: ["/images/crm_erp_dashboard.jpg"],
  },
};

export default function CrmErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
