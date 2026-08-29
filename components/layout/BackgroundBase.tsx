"use client";

import React from "react";

export default function BackgroundBase() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#FAF8FF]">
      {/* 1. Subtle Dot Matrix Texture across the canvas */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(124, 58, 237, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      {/* 2. Top Center Purple Aura Mesh Glow (Reference Image Hero Backdrop) */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[750px] rounded-full opacity-70 blur-[130px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, 
            rgba(168, 85, 247, 0.45) 0%, 
            rgba(192, 132, 252, 0.35) 30%, 
            rgba(129, 140, 248, 0.25) 60%, 
            rgba(96, 165, 250, 0.15) 80%, 
            transparent 100%)`,
        }}
      />

      {/* 3. Left Side Magenta/Violet Accent Glow */}
      <div 
        className="absolute top-48 -left-24 w-[500px] h-[600px] rounded-full opacity-50 blur-[120px] mesh-blob-purple-1"
      />

      {/* 4. Right Side Sky Blue/Cyan Aura Glow */}
      <div 
        className="absolute top-20 -right-24 w-[550px] h-[650px] rounded-full opacity-40 blur-[130px] mesh-blob-purple-2"
      />

      {/* 5. Mid Page Section Glow (Features & Testimonials Backdrop) */}
      <div 
        className="absolute top-[1100px] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] h-[700px] rounded-full opacity-55 blur-[140px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(192, 132, 252, 0.35) 0%, 
            rgba(147, 197, 253, 0.2) 50%, 
            transparent 85%)`,
        }}
      />

      {/* 6. Lower Page Glow (CTA Banner Backdrop) */}
      <div 
        className="absolute top-[2400px] right-[10%] w-[600px] h-[600px] rounded-full opacity-45 blur-[140px]"
        style={{
          background: `radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(96, 165, 250, 0.2) 60%, transparent 80%)`,
        }}
      />
    </div>
  );
}

