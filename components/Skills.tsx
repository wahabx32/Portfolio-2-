"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Arsenal"
          title="Skills & Technologies"
          subtitle="The tools I reach for to build fast, scalable, and beautiful products."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1}>
              <div className="gradient-border group h-full rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[0_0_45px_-12px_rgba(139,92,246,0.45)]">
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.title}
                  <span className="ml-3 align-middle text-xs font-normal text-zinc-500">
                    {group.skills.length}{" "}
                    {group.skills.length === 1 ? "technology" : "technologies"}
                  </span>
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={22}
                        height={22}
                        loading="lazy"
                        className={skill.invert ? "invert" : undefined}
                      />
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
