import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Expense Management Solutions | KK Next Tech Solutions",
  description:
    "Automate corporate expense tracking, multi-tier approvals, policy compliance, and ERP ledger sync with custom expense management workflows.",
  keywords: [
    "Expense management software",
    "Corporate expense tracking automation",
    "Multi-tier approval workflows",
    "ERP ledger integration",
    "Business finance software",
    "KK Next Tech Solutions expenses",
  ],
  alternates: {
    canonical: "https://kknextech.com/services/expense-management",
  },
  openGraph: {
    title: "Automated Expense Management Solutions | KK Next Tech Solutions",
    description:
      "Automate corporate expense tracking, multi-tier approvals, policy compliance, and ERP ledger sync with custom expense management workflows.",
    url: "https://kknextech.com/services/expense-management",
    siteName: "KK Next Tech Solutions",
    type: "website",
    images: [
      {
        url: "/images/crm_erp_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Expense Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Expense Management Solutions | KK Next Tech Solutions",
    description:
      "Automate corporate expense tracking, multi-tier approvals, and ERP ledger sync.",
    images: ["/images/crm_erp_dashboard.jpg"],
  },
};

export default function ExpenseManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
