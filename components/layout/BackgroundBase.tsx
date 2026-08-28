"use client";

import React from "react";

export default function BackgroundBase() {
  // Vibrant 3D pleated glass ribbon strips precisely matching the reference
  const strips = [
    {
      // Strip 1: Magenta / Pink glow start
      color: "from-[#F472B6]/40 via-[#F472B6]/30 to-transparent",
      accent: "rgba(244, 114, 182, 0.45)",
    },
    {
      // Strip 2: Soft Orchid / Fuchsia
      color: "from-[#E879F9]/50 via-[#E879F9]/35 to-transparent",
      accent: "rgba(232, 121, 249, 0.5)",
    },
    {
      // Strip 3: Light Purple / Lavender
      color: "from-[#D8B4FE]/55 via-[#D8B4FE]/40 to-transparent",
      accent: "rgba(216, 180, 254, 0.55)",
    },
    {
      // Strip 4: Medium Purple / Violet
      color: "from-[#C084FC]/60 via-[#C084FC]/42 to-transparent",
      accent: "rgba(192, 132, 252, 0.6)",
    },
    {
      // Strip 5: Royal Violet
      color: "from-[#A855F7]/55 via-[#A855F7]/38 to-transparent",
      accent: "rgba(168, 85, 247, 0.55)",
    },
    {
      // Strip 6: Periwinkle / Indigo
      color: "from-[#818CF8]/55 via-[#818CF8]/38 to-transparent",
      accent: "rgba(129, 140, 248, 0.55)",
    },
    {
      // Strip 7: Royal Sky Blue
      color: "from-[#60A5FA]/50 via-[#60A5FA]/35 to-transparent",
      accent: "rgba(96, 165, 250, 0.5)",
    },
    {
      // Strip 8: Bright Sky Blue
      color: "from-[#38BDF8]/45 via-[#38BDF8]/30 to-transparent",
      accent: "rgba(56, 189, 248, 0.45)",
    },
    {
      // Strip 9: Sky Aqua / Cyan
      color: "from-[#22D3EE]/40 via-[#22D3EE]/25 to-transparent",
      accent: "rgba(34, 211, 238, 0.4)",
    },
    {
      // Strip 10: Pale Ice Cyan Fade
      color: "from-[#A5F3FC]/35 via-[#A5F3FC]/20 to-transparent",
      accent: "rgba(165, 243, 252, 0.35)",
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-white">
      {/* 1. Subtle Grid Matrix Texture across the canvas */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 50%, transparent 95%)",
        }}
      />

      {/* 2. Soft Ambient Radial Glow Behind the Ribbons */}
      <div 
        className="absolute -top-24 right-[-5%] w-[80vw] max-w-[1100px] h-[850px] rounded-full opacity-80 blur-[90px]"
        style={{
          background: `radial-gradient(circle at 60% 40%, 
            rgba(232, 121, 249, 0.38) 0%, 
            rgba(192, 132, 252, 0.35) 25%, 
            rgba(129, 140, 248, 0.3) 50%, 
            rgba(56, 189, 248, 0.25) 75%, 
            transparent 95%)`,
        }}
      />

      {/* 3. Magenta / Fuchsia Bloom on the left of the ribbon */}
      <div 
        className="absolute top-4 right-[32%] w-[420px] h-[650px] rounded-full opacity-60 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(232, 121, 249, 0.25) 50%, transparent 80%)",
        }}
      />

      {/* 4. The 3D Vertical Pleated Glass Accordion Strips */}
      <div className="absolute top-0 right-0 w-[62vw] min-w-[550px] max-w-[1050px] h-[920px] flex items-stretch overflow-hidden">
        {strips.map((strip, idx) => (
          <div
            key={idx}
            className={`relative flex-1 h-full bg-gradient-to-b ${strip.color}`}
          >
            {/* 3D Fluted Surface Lighting & Shadow across the fold */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.06) 100%)",
              }}
            />

            {/* Left Edge Highlight Line (Accordion Crease) */}
            <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
            
            {/* Right Edge Shadow Divider */}
            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-black/[0.06]" />
          </div>
        ))}
      </div>

      {/* 5. Seamless Mask: Fades out to pure white at bottom and left */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(255,255,255,0.6) 75%, #FFFFFF 96%)",
        }}
      />
      <div 
        className="absolute top-0 left-0 bottom-0 w-[42%]"
        style={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 70%, rgba(255,255,255,0.85) 88%, transparent 100%)",
        }}
      />

      {/* 6. Subtle secondary ambient glow for scrolling down */}
      <div 
        className="absolute top-[850px] right-[12%] w-[550px] h-[550px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, rgba(96, 165, 250, 0.25) 50%, transparent 80%)",
        }}
      />
    </div>
  );
}
