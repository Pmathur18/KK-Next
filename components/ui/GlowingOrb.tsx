"use client";

import React from "react";
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
  blur = 60,
}: GlowingOrbProps) {
  // Cap blur radius to prevent rasterization bottlenecks while maintaining visual glow
  const safeBlur = Math.min(blur, 45);

  return (
    <div
      className={cn("absolute rounded-full pointer-events-none animate-orb-pulse", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${safeBlur}px)`,
        opacity,
        animationDuration: `${duration}s`,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform, opacity",
      }}
    />
  );
}
