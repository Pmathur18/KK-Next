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
    "inline-flex items-center justify-center font-bold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center";

  const sizeStyles = "px-6 py-3 text-sm md:text-base md:px-7 md:py-3.5";

  const themes = {
    ink: "bg-gradient-to-r from-purple-700 to-indigo-900 text-white shadow-md hover:shadow-lg shadow-purple-900/20",
    violet: "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-700 hover:to-indigo-700",
    navy: "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-700 hover:to-indigo-700",
    peach: "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md hover:shadow-lg",
    sky: "bg-purple-100 text-purple-900 hover:bg-purple-200 border border-purple-200",
    mint: "bg-indigo-950 text-white hover:bg-indigo-900",
    yellow: "bg-white text-purple-900 border border-purple-200 hover:bg-purple-50",
    white: "bg-white text-purple-900 hover:bg-purple-50 shadow-md",
  };

  const variants = {
    primary: themes[colorTheme] || themes.violet,
    secondary: "bg-white/90 text-purple-950 border border-purple-100/80 shadow-md hover:bg-white hover:border-purple-200",
    outline: "bg-transparent text-purple-900 border-2 border-purple-600 hover:bg-purple-600 hover:text-white",
    pastel: themes[colorTheme] || themes.sky,
    link: "bg-transparent text-purple-700 hover:text-purple-900 hover:underline px-0 py-0 focus:ring-0",
  };

  const selectedVariantClass = variant === "link" ? variants.link : cn(baseStyles, sizeStyles, variants[variant]);

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(selectedVariantClass, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

