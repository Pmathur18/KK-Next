import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  colorTheme?: "lilac" | "peach" | "sky" | "mint" | "yellow" | "violet" | "ink" | "navy" | "white";
  className?: string;
}

export default function Badge({
  children,
  colorTheme = "navy",
  className,
}: BadgeProps) {
  const themes = {
    lilac: "bg-purple-100/80 text-purple-900 border border-purple-200",
    peach: "bg-violet-100/80 text-violet-900 border border-violet-200",
    sky: "bg-purple-100/80 text-purple-900 border border-purple-200",
    mint: "bg-indigo-100/80 text-indigo-900 border border-indigo-200",
    yellow: "bg-purple-50 text-purple-900 border border-purple-200",
    violet: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm",
    navy: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm",
    ink: "bg-indigo-950 text-white",
    white: "bg-white text-purple-900 border border-purple-200 shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider",
        themes[colorTheme] || themes.navy,
        className
      )}
    >
      {children}
    </span>
  );
}

