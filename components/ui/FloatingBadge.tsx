"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function FloatingBadge({
  icon,
  title,
  subtitle,
  className,
  delay = 0,
  duration = 4,
  yOffset = 8,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -yOffset, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{ scale: 1.06, y: -yOffset - 4 }}
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-purple-200/80 shadow-lg shadow-purple-900/10 cursor-pointer select-none transition-shadow hover:shadow-xl hover:border-purple-300",
        className
      )}
    >
      {icon && (
        <div className="w-8 h-8 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-700 shrink-0">
          {icon}
        </div>
      )}
      <div className="flex flex-col text-left">
        {subtitle && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            {subtitle}
          </span>
        )}
        <span className="text-xs md:text-sm font-extrabold text-slate-900 font-display">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
