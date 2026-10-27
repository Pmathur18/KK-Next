import React from "react";

export default function BackgroundBase() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-white"
      style={{
        transform: "translate3d(0, 0, 0)",
        contain: "paint layout size",
        backfaceVisibility: "hidden",
      }}
    >
      {/* 1. Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* 2. Primary Top Hero Soft Purple Blur Mesh */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full opacity-60 blur-[36px]"
        style={{
          background: `radial-gradient(ellipse at center,
            rgba(168, 85, 247, 0.32) 0%,
            rgba(124, 58, 237, 0.2) 35%,
            rgba(56, 189, 248, 0.14) 65%,
            rgba(236, 72, 153, 0.08) 85%,
            transparent 100%)`,
        }}
      />

      {/* 3. Left Purple Orb */}
      <div
        className="absolute top-10 -left-24 w-[480px] h-[480px] rounded-full opacity-40 blur-[32px]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.32) 0%, rgba(216, 180, 254, 0.15) 50%, transparent 80%)",
        }}
      />

      {/* 4. Right Cyan / Sky Blue Orb */}
      <div
        className="absolute top-20 -right-24 w-[500px] h-[500px] rounded-full opacity-35 blur-[32px]"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 80%)",
        }}
      />

      {/* 5. Seamless Mask: Fades out smoothly into crisp white for lower sections */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(255,255,255,0.7) 65%, #FFFFFF 95%)",
        }}
      />
    </div>
  );
}

