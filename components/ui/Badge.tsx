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
    lilac: "bg-slate-100 text-[#0A2540] border border-slate-200",
    peach: "bg-[#EBF3FC] text-[#1E40AF] border border-blue-200/60",
    sky: "bg-[#EBF3FC] text-[#0A2540] border border-blue-200/60",
    mint: "bg-slate-100 text-[#0A2540] border border-slate-200",
    yellow: "bg-slate-50 text-[#0A2540] border border-slate-200",
    violet: "bg-[#0A2540] text-white",
    navy: "bg-[#0A2540] text-white",
    ink: "bg-[#050B14] text-white",
    white: "bg-white text-[#0A2540] border border-slate-200",
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
