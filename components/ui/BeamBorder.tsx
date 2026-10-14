"use client";

import React from "react";
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
      {/* Rotating beam gradient border - pure CSS compositor animation */}
      <div
        className="absolute inset-[-60%] z-0 pointer-events-none animate-[beam-orbit_4s_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 20%, ${colorTo} 40%, transparent 60%, transparent 100%)`,
          }}
        />
      </div>

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
