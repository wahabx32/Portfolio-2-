"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Send, Sparkles } from "lucide-react";
import TechMarquee from "./TechMarquee";

function AnimatedName({ text, gradient }: { text: string; gradient?: boolean }) {
  return (
    <span
      className={`inline-block whitespace-nowrap ${gradient ? "text-gradient" : "text-white"}`}
      style={{ perspective: 600 }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 70, rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.45 + i * 0.05,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="glass flex items-center gap-2 rounded-full px-5 py-2 text-sm text-sky-300"
          >
            <Sparkles size={15} />
            Full Stack Developer
          </motion.span>

          <h1 className="mt-8 font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <AnimatedName text="ABDUL" />{" "}
            <AnimatedName text="WAHAB" gradient />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            I&apos;m Abdul Wahab, a passionate Full Stack Developer who crafts
            scalable web applications from pixel-perfect frontends to powerful
            backends. I turn complex problems into elegant digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_-8px_rgba(56,189,248,0.7)] transition-all hover:shadow-[0_0_45px_-6px_rgba(139,92,246,0.8)]"
            >
              <FolderGit2 size={17} className="transition-transform group-hover:-rotate-6" />
              View Projects
            </a>
            <a
              href="/Abdul-Wahab-CV.pdf"
              download
              className="glass group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-sky-400/40"
            >
              <Download size={17} className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-violet-500/40 px-7 py-3.5 text-sm font-semibold text-violet-300 transition-all hover:bg-violet-500/10"
            >
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="mt-16"
      >
        <TechMarquee />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition-colors hover:text-sky-400 md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
