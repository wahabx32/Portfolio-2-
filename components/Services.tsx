"use client";

import {
  Database,
  Layers,
  MonitorSmartphone,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    text: "End-to-end web applications — from database schema to deployed product — built for scale.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    text: "Pixel-perfect, blazing-fast interfaces with React, Next.js, and modern CSS.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    text: "Robust, secure REST APIs with Node.js and Python — authentication, payments, and more.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Clean, efficient data models in MongoDB and SQL that stay fast as your product grows.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    text: "Translating designs into living interfaces with smooth animations and micro-interactions.",
  },
  {
    icon: Smartphone,
    title: "Responsive Websites",
    text: "Mobile-first builds that look and feel premium on every screen size and device.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services"
          subtitle="Everything you need to take an idea from a sketch to a shipped product."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08} className="h-full">
              <div className="gradient-border group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_-12px_rgba(56,189,248,0.45)]">
                <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-sky-300 transition-colors duration-300 group-hover:text-violet-300">
                  <service.icon size={21} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
