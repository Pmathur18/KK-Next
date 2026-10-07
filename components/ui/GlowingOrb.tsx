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
  color = "#0759D5",
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
        // Cap large blur radii: oversized animated filters are expensive to repaint while scrolling.
        filter: `blur(${Math.min(blur, 64)}px)`,
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
