"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, socials, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 14);
    rotateY.set((px - 0.5) * 14);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.8,
      }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="gradient-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-shadow duration-300"
        whileHover={{
          boxShadow: `0 0 60px -12px ${project.glow}`,
        }}
      >
        {/* mouse-follow glow highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), ${project.glow.replace("0.35", "0.12").replace("0.3", "0.1")}, transparent 65%)`,
          }}
        />

        <div style={{ transform: "translateZ(30px)" }} className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span className="font-display text-xs font-semibold tracking-[0.25em] text-zinc-600">
              0{index + 1}
            </span>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="glass rounded-lg p-2 text-zinc-400 transition-colors hover:border-sky-400/40 hover:text-white"
              >
                <Github size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="glass rounded-lg p-2 text-zinc-400 transition-colors hover:border-violet-400/40 hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <h3 className="mt-6 font-display text-xl font-bold text-white transition-colors group-hover:text-gradient">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
          >
            Live Demo
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I've Built"
          title="Featured Projects"
          subtitle="A selection of products I've designed, built, and shipped — end to end."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.12} className="h-full">
              <TiltCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:border-sky-400/40 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]"
          >
            <Github size={17} />
            View All Projects on GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
