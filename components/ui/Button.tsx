"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "pastel" | "link";
  colorTheme?: "ink" | "violet" | "peach" | "sky" | "mint" | "yellow";
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
    "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center";

  const sizeStyles = "px-6 py-3 text-sm md:text-base md:px-8 md:py-3.5";

  const themes = {
    ink: "bg-ink text-white hover:bg-ink/90 focus:ring-ink",
    violet: "bg-accent-primary text-white hover:bg-accent-primary/95 focus:ring-accent-primary",
    peach: "bg-accent-secondary text-white hover:bg-accent-secondary/95 focus:ring-accent-secondary",
    sky: "bg-pastel-sky text-ink hover:bg-pastel-sky/80 focus:ring-pastel-sky",
    mint: "bg-pastel-mint text-ink hover:bg-pastel-mint/80 focus:ring-pastel-mint",
    yellow: "bg-pastel-yellow text-ink hover:bg-pastel-yellow/80 focus:ring-pastel-yellow",
  };

  const variants = {
    primary: themes[colorTheme],
    secondary: "bg-white text-ink border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-400",
    outline: "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white focus:ring-ink",
    pastel: themes[colorTheme],
    link: "bg-transparent text-accent-primary hover:underline px-0 py-0 focus:ring-0",
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
