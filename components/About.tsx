"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { BookOpen, Hammer, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "Passion for Code" },
];

const journey = [
  {
    icon: BookOpen,
    title: "Learning",
    text: "Mastering the fundamentals — from semantic HTML to system design — and never stopping.",
  },
  {
    icon: Hammer,
    title: "Building",
    text: "Turning ideas into full-stack products with clean architecture and obsessive attention to detail.",
  },
  {
    icon: Rocket,
    title: "Shipping",
    text: "Deploying fast, iterating faster — real products in front of real users.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Code with Purpose"
          subtitle="I'm Abdul Wahab, a passionate Full Stack Developer who crafts scalable web applications from pixel-perfect frontends to powerful backends. I turn complex problems into elegant digital experiences."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="gradient-border rounded-2xl p-8 text-center transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.5)]">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm text-zinc-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-7 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-sky-500/40 via-violet-500/40 to-sky-500/40 md:block" />
          <div className="grid gap-10 md:grid-cols-3">
            {journey.map((step, i) => (
              <Reveal key={step.title} delay={0.15 + i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="glass relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-sky-300 shadow-[0_0_30px_-8px_rgba(56,189,248,0.6)]">
                    <step.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
