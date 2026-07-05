"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <Scene3D />
      {/* vignette + accent glows layered over the canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.55)_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
    </div>
  );
}
