"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export default function AnimatedGradientText({
  children,
  className,
  from = "#0750BE",
  via = "#0759D5",
  to = "#08A7F5",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn("relative inline-block", className)}
      style={{
        background: `linear-gradient(90deg, ${from}, ${via}, ${to}, ${from})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "gradient-shimmer 3s linear infinite",
      }}
    >
      {children}
    </span>
  );
}
