"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
  duration?: number;
  blur?: number;
}

export default function GlowingOrb({
  className,
  color = "#7C3AED",
  size = 400,
  opacity = 0.25,
  duration = 8,
  blur = 80,
}: GlowingOrbProps) {
  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [opacity, opacity * 1.3, opacity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
