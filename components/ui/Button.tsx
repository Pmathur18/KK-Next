"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "pastel" | "link";
  colorTheme?: "ink" | "violet" | "peach" | "sky" | "mint" | "yellow" | "navy" | "white";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  colorTheme = "violet",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center shadow-sm";

  const sizeStyles = "px-6 py-3 text-sm md:text-base md:px-7 md:py-3.5";

  const themes = {
    ink: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    violet: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-md shadow-purple-500/20 focus:ring-[#7C3AED]",
    navy: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-md shadow-purple-500/20 focus:ring-[#7C3AED]",
    peach: "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] focus:ring-[#8B5CF6]",
    sky: "bg-purple-50 text-purple-700 hover:bg-purple-100 focus:ring-purple-400 border border-purple-200/60",
    mint: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-600",
    yellow: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus:ring-purple-500",
    white: "bg-white text-[#7C3AED] hover:bg-purple-50 shadow-md focus:ring-white",
  };

  const variants = {
    primary: themes[colorTheme] || themes.violet,
    secondary: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-purple-200 focus:ring-purple-500",
    outline: "bg-transparent text-[#7C3AED] border-2 border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white focus:ring-[#7C3AED]",
    pastel: themes[colorTheme] || themes.sky,
    link: "bg-transparent text-[#7C3AED] hover:text-[#6D28D9] hover:underline px-0 py-0 focus:ring-0 shadow-none font-semibold",
  };

  const selectedVariantClass = variant === "link" ? variants.link : cn(baseStyles, sizeStyles, variants[variant]);

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(selectedVariantClass, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

