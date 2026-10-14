"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export default function Tilt3DCard({
  children,
  className,
  intensity = 10,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Check if device supports true hover (avoids running on phones/tablets)
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!canHover) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotX = -y * intensity;
        const rotY = x * intensity;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`;

        if (glare && glareRef.current) {
          const gx = ((e.clientX - rect.left) / rect.width) * 100;
          const gy = ((e.clientY - rect.top) / rect.height) * 100;
          glareRef.current.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.18) 0%, transparent 65%)`;
          glareRef.current.style.opacity = "1";
        }
      });
    },
    [canHover, intensity, glare]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [glare]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.15s ease-out",
        willChange: canHover ? "transform" : "auto",
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      {children}
      {glare && canHover && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 opacity-0 transition-opacity duration-300"
          style={{ willChange: "opacity, background" }}
        />
      )}
    </div>
  );
}
