"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  colorBg?: "bg-white" | "bg-pastel-sky" | "bg-pastel-peach" | "bg-pastel-mint" | "bg-pastel-lilac" | "bg-pastel-yellow" | "bg-dark-panel" | "bg-navy-base" | "bg-navy-card" | "bg-ice-blue";
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  colorBg = "bg-white",
  hoverEffect = true,
  onClick,
}: CardProps) {
  const isDark = colorBg === "bg-dark-panel" || colorBg === "bg-navy-base" || colorBg === "bg-navy-card";

  const cardContent = (
    <div
      onClick={onClick}
      className={cn(
        "rounded-[24px] p-8 md:p-10 relative overflow-hidden transition-all duration-300 backdrop-blur-xl",
        isDark 
          ? "text-white border border-white/15 bg-slate-950/60 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15)]" 
          : "text-ink border border-white/60 bg-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.6)]",
        onClick ? "cursor-pointer" : "",
        className
      )}
    >
      {children}
    </div>
  );

  if (hoverEffect) {
    return (
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 20px 40px -15px rgba(10, 37, 64, 0.12)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
