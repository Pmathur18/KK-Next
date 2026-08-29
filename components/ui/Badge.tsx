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
    lilac: "bg-purple-100 text-purple-700 border border-purple-200/60",
    peach: "bg-purple-100 text-purple-700 border border-purple-200/60",
    sky: "bg-purple-50 text-purple-700 border border-purple-200/60",
    mint: "bg-cyan-50 text-cyan-700 border border-cyan-200/60",
    yellow: "bg-amber-50 text-amber-700 border border-amber-200/60",
    violet: "bg-[#7C3AED] text-white shadow-sm shadow-purple-500/20",
    navy: "bg-purple-100 text-purple-700 border border-purple-200/60",
    ink: "bg-slate-900 text-white",
    white: "bg-white text-purple-700 border border-purple-100 shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider",
        themes[colorTheme] || themes.navy,
        className
      )}
    >
      {children}
    </span>
  );
}

