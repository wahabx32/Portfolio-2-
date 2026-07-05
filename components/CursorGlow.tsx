"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const target = { x: -400, y: -400 };
    const pos = { x: -400, y: -400 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.1;
      pos.y += (target.y - pos.y) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-72 w-72 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-sky-400/80 shadow-[0_0_12px_2px_rgba(56,189,248,0.6)]"
      />
    </div>
  );
}
