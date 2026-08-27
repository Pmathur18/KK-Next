import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  colorTheme?: "lilac" | "peach" | "sky" | "mint" | "yellow" | "violet" | "ink";
  className?: string;
}

export default function Badge({
  children,
  colorTheme = "lilac",
  className,
}: BadgeProps) {
  const themes = {
    lilac: "bg-pastel-lilac text-ink border border-purple-200/50",
    peach: "bg-pastel-peach text-ink border border-orange-200/50",
    sky: "bg-pastel-sky text-ink border border-blue-200/50",
    mint: "bg-pastel-mint text-ink border border-green-200/50",
    yellow: "bg-pastel-yellow text-ink border border-yellow-200/50",
    violet: "bg-accent-primary text-white",
    ink: "bg-ink text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider",
        themes[colorTheme],
        className
      )}
    >
      {children}
    </span>
  );
}
