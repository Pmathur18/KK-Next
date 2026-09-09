"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamBorderProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  borderRadius?: string;
}

export default function BeamBorder({
  children,
  className,
  duration = 4,
  colorFrom = "#7C3AED",
  colorTo = "#38bdf8",
  borderWidth = 1.5,
  borderRadius = "1.5rem",
}: BeamBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ borderRadius }}
    >
      {/* Rotating beam gradient border */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ borderRadius }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 20%, ${colorTo} 40%, transparent 60%, transparent 100%)`,
            borderRadius,
          }}
        />
      </motion.div>

      {/* Inner content — sits on top of beam with solid bg mask */}
      <div
        className="relative z-10"
        style={{
          margin: borderWidth,
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
