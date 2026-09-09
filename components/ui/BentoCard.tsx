"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  glowColor?: string;
  delay?: number;
}

export default function BentoCard({
  children,
  className,
  glowColor = "rgba(124, 58, 237, 0.08)",
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-purple-100/80 bg-white/95 backdrop-blur-xl",
        "shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10",
        "hover:border-purple-300/60 transition-shadow duration-300",
        className
      )}
      style={{
        background: `linear-gradient(135deg, white 0%, white 80%, ${glowColor} 100%)`,
      }}
    >
      {/* Corner glow accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
