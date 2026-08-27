"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  colorBg?: "bg-white" | "bg-pastel-sky" | "bg-pastel-peach" | "bg-pastel-mint" | "bg-pastel-lilac" | "bg-pastel-yellow" | "bg-dark-panel";
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
  const isDark = colorBg === "bg-dark-panel";

  const cardContent = (
    <div
      onClick={onClick}
      className={cn(
        "rounded-[24px] p-8 md:p-10 border border-zinc-150/40 relative overflow-hidden transition-all duration-300",
        colorBg,
        isDark ? "text-white border-zinc-800" : "text-ink border-zinc-200/50",
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
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
