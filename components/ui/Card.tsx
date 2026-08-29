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
        "rounded-[28px] p-7 md:p-9 relative overflow-hidden transition-all duration-300 backdrop-blur-md",
        isDark 
          ? "text-white border border-purple-400/20 bg-slate-950/80 shadow-2xl" 
          : "text-slate-900 border border-purple-100/80 bg-white/90 shadow-xl shadow-purple-950/5",
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
          y: -5,
          boxShadow: "0 25px 45px -15px rgba(124, 58, 237, 0.12)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

