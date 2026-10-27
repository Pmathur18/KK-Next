import AuroraBackgroundDemo from "@/components/aurora-background-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora Background Demo | Aceternity UI",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuroraDemoPage() {
  return <AuroraBackgroundDemo />;
}
