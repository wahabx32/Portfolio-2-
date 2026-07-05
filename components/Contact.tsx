"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: socials.phone,
    href: `tel:+92${socials.phone.slice(1)}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: socials.whatsapp,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/wahabx32",
    href: socials.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/wahabdev",
    href: socials.linkedin,
  },
];

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<FormValues>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none backdrop-blur-xl transition-colors focus:border-sky-400/50";

export default function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    // Simulated delivery — wire this to your email service (e.g. Formspree,
    // Resend, or an API route) when you're ready to go live.
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  const reset = () => {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Build Together"
          title="Get in Touch"
          subtitle="Available for freelance, full-time, and remote work. Tell me about your project — I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-sky-400/30"
                >
                  <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sky-300 transition-colors group-hover:text-violet-300">
                    <item.icon size={19} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </span>
                    <span className="block text-sm font-medium text-zinc-200">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="gradient-border relative h-full overflow-hidden rounded-2xl p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-full min-h-80 flex-col items-center justify-center text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 shadow-[0_0_40px_-8px_rgba(52,211,153,0.6)]">
                      <CheckCircle2 size={30} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-zinc-400">
                      Thanks for reaching out, {values.name.split(" ")[0]}.
                      I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="glass mt-8 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-sky-400/40"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="flex h-full flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={onChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                        {errors.name && (
                          <p className="mt-2 text-xs text-rose-400">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                        {errors.email && (
                          <p className="mt-2 text-xs text-rose-400">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={values.message}
                        onChange={onChange}
                        placeholder="Tell me about your project..."
                        className={`${inputClass} flex-1 resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-2 text-xs text-rose-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_-8px_rgba(56,189,248,0.6)] transition-all hover:shadow-[0_0_45px_-6px_rgba(139,92,246,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
