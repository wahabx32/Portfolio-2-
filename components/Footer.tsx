import { Github, Heart, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socials } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: socials.github, label: "GitHub" },
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: socials.whatsapp, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <a
            href="#home"
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            Abdul<span className="text-gradient">.dev</span>
          </a>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="glass rounded-xl p-2.5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="flex items-center gap-1.5 text-center text-sm text-zinc-500">
            Designed &amp; Built with
            <Heart size={14} className="fill-rose-500 text-rose-500" />
            by Abdul Wahab &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
