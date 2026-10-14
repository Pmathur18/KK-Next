"use client";

import React, { useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SpotlightSectionProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
}

export default function SpotlightSection({
  children,
  className,
  spotlightColor = "rgba(124, 58, 237, 0.12)",
  size = 500,
}: SpotlightSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect || !spotlightRef.current) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRef.current.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
        spotlightRef.current.style.opacity = "1";
      });
    },
    [spotlightColor, size]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300 opacity-0"
        style={{ willChange: "background, opacity" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
