"use client";

import { marqueeTechs } from "@/lib/data";

export default function TechMarquee() {
  const items = [...marqueeTechs, ...marqueeTechs];

  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-12 py-6 hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.icon}
              alt={tech.name}
              width={28}
              height={28}
              loading="lazy"
              className={tech.invert ? "invert" : undefined}
            />
            <span className="whitespace-nowrap text-sm font-medium text-zinc-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
