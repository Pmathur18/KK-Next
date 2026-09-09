"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Auto-rotate
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  // Generate latitude/longitude lines
  const lines: THREE.Vector3[][] = [];
  const radius = 1.5;

  // Latitude lines
  for (let lat = -80; lat <= 80; lat += 20) {
    const points: THREE.Vector3[] = [];
    const phi = (lat * Math.PI) / 180;
    for (let lng = 0; lng <= 360; lng += 4) {
      const theta = (lng * Math.PI) / 180;
      points.push(
        new THREE.Vector3(
          radius * Math.cos(phi) * Math.cos(theta),
          radius * Math.sin(phi),
          radius * Math.cos(phi) * Math.sin(theta)
        )
      );
    }
    lines.push(points);
  }

  // Longitude lines
  for (let lng = 0; lng < 360; lng += 20) {
    const points: THREE.Vector3[] = [];
    const theta = (lng * Math.PI) / 180;
    for (let lat = -90; lat <= 90; lat += 4) {
      const phi = (lat * Math.PI) / 180;
      points.push(
        new THREE.Vector3(
          radius * Math.cos(phi) * Math.cos(theta),
          radius * Math.sin(phi),
          radius * Math.cos(phi) * Math.sin(theta)
        )
      );
    }
    lines.push(points);
  }

  // Glowing dots on intersections
  const dots: [number, number, number][] = [];
  for (let lat = -60; lat <= 60; lat += 20) {
    for (let lng = 0; lng < 360; lng += 20) {
      const phi = (lat * Math.PI) / 180;
      const theta = (lng * Math.PI) / 180;
      dots.push([
        radius * Math.cos(phi) * Math.cos(theta),
        radius * Math.sin(phi),
        radius * Math.cos(phi) * Math.sin(theta),
      ]);
    }
  }

  return (
    <group ref={groupRef}>
      {/* Grid lines */}
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#7C3AED"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Intersection dots */}
      {dots.map(([x, y, z], i) => (
        <Sphere key={i} args={[0.02, 6, 6]} position={[x, y, z]}>
          <meshBasicMaterial color="#9333EA" transparent opacity={0.7} />
        </Sphere>
      ))}

      {/* Core glow sphere */}
      <Sphere ref={meshRef} args={[1.48, 32, 32]}>
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.04}
          wireframe={false}
        />
      </Sphere>
    </group>
  );
}

interface GlobeOrbProps {
  className?: string;
  size?: number;
}

export default function GlobeOrb({ className, size = 480 }: GlobeOrbProps) {
  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#7C3AED" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
        <WireframeGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
