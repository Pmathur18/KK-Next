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
    "inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center";

  const sizeStyles = "px-6 py-3 text-sm md:text-base md:px-8 md:py-3.5";

  const themes = {
    ink: "bg-[#050B14] text-white hover:bg-black focus:ring-black",
    violet: "bg-[#0A2540] text-white hover:bg-[#050B14] focus:ring-[#0A2540]",
    navy: "bg-[#0A2540] text-white hover:bg-[#050B14] focus:ring-[#0A2540]",
    peach: "bg-[#1E40AF] text-white hover:bg-[#1D4ED8] focus:ring-[#1E40AF]",
    sky: "bg-[#EBF3FC] text-[#0A2540] hover:bg-[#DBEAFE] focus:ring-[#1E40AF]",
    mint: "bg-[#0F172A] text-white hover:bg-black focus:ring-[#0F172A]",
    yellow: "bg-[#F8FAFC] text-[#0A2540] border border-slate-200 hover:bg-[#F1F5F9] focus:ring-[#0A2540]",
    white: "bg-white text-[#0A2540] hover:bg-slate-100 focus:ring-white",
  };

  const variants = {
    primary: themes[colorTheme] || themes.violet,
    secondary: "bg-white text-[#0A2540] border border-slate-200 hover:bg-slate-50 focus:ring-[#0A2540]",
    outline: "bg-transparent text-[#050B14] border-2 border-[#0A2540] hover:bg-[#0A2540] hover:text-white focus:ring-[#0A2540]",
    pastel: themes[colorTheme] || themes.sky,
    link: "bg-transparent text-[#0A2540] hover:text-[#1E40AF] hover:underline px-0 py-0 focus:ring-0",
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
