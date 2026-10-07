"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function BackgroundBase() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-white">
      {/* 1. Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(7, 89, 213, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(7, 89, 213, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* 2. Primary Top Hero Soft Purple Blur Mesh */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] rounded-full opacity-70 blur-[80px]"
        style={{
          background: `radial-gradient(ellipse at center,
            rgba(8, 116, 227, 0.35) 0%,
            rgba(7, 89, 213, 0.25) 30%,
            rgba(8, 167, 245, 0.2) 60%,
            rgba(10, 131, 238, 0.15) 80%,
            transparent 100%)`,
        }}
      />

      {/* 3. Left Purple Orb */}
      <div
        className="absolute top-10 -left-24 w-[600px] h-[600px] rounded-full opacity-50 blur-[64px]"
        style={{
          background: "radial-gradient(circle, rgba(10, 131, 238, 0.35) 0%, rgba(105, 204, 250, 0.2) 50%, transparent 80%)",
        }}
      />

      {/* 4. Right Cyan / Sky Blue Orb */}
      <div
        className="absolute top-20 -right-24 w-[650px] h-[650px] rounded-full opacity-45 blur-[72px]"
        style={{
          background: "radial-gradient(circle, rgba(8, 167, 245, 0.32) 0%, rgba(7, 89, 213, 0.18) 50%, transparent 80%)",
        }}
      />

      {/* 5. Seamless Mask: Fades out smoothly into crisp white for lower sections */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(255,255,255,0.7) 65%, #FFFFFF 95%)",
        }}
      />

      {/* 6. Subtle secondary purple glow for mid page content */}
      <div
        className="absolute top-[1200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[88px]"
        style={{
          background: "radial-gradient(circle, rgba(8, 116, 227, 0.25) 0%, rgba(8, 167, 245, 0.2) 50%, transparent 80%)",
        }}
      />
    </div>
  );
}

