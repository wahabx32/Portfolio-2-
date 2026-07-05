const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export type Tech = {
  name: string;
  icon: string;
  /** devicon logos that are black and need inverting on a dark theme */
  invert?: boolean;
};

export const techs: Record<string, Tech> = {
  html: { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  css: { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
  javascript: {
    name: "JavaScript",
    icon: `${DEVICON}/javascript/javascript-original.svg`,
  },
  react: { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  nextjs: {
    name: "Next.js",
    icon: `${DEVICON}/nextjs/nextjs-original.svg`,
    invert: true,
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: `${DEVICON}/bootstrap/bootstrap-original.svg`,
  },
  nodejs: { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  python: { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  mongodb: { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  sql: { name: "SQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
  github: {
    name: "GitHub",
    icon: `${DEVICON}/github/github-original.svg`,
    invert: true,
  },
};

export const marqueeTechs: Tech[] = [
  techs.html,
  techs.css,
  techs.javascript,
  techs.react,
  techs.nextjs,
  techs.tailwind,
  techs.bootstrap,
  techs.nodejs,
  techs.python,
  techs.mongodb,
  techs.sql,
  techs.github,
];

export const skillGroups: { title: string; skills: Tech[] }[] = [
  {
    title: "Frontend",
    skills: [
      techs.html,
      techs.css,
      techs.javascript,
      techs.react,
      techs.nextjs,
      techs.tailwind,
      techs.bootstrap,
    ],
  },
  { title: "Backend", skills: [techs.nodejs, techs.python] },
  { title: "Database", skills: [techs.mongodb, techs.sql] },
  { title: "Tools", skills: [techs.github] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  glow: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce App",
    description:
      "Full-stack shopping platform with product listings, cart system, user authentication, and seamless checkout experience.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/wahabx32",
    live: "https://ecommerce-app-np5r.vercel.app/",
    glow: "rgba(56, 189, 248, 0.35)",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Feature-rich analytics dashboard with data visualization, user management, and real-time metrics tracking.",
    tags: ["React", "Python", "SQL", "Tailwind"],
    github: "https://github.com/wahabx32",
    live: "https://saas-dashboard-mocha.vercel.app/",
    glow: "rgba(139, 92, 246, 0.35)",
  },
  {
    title: "Stone Paper Scissors Game",
    description:
      "Interactive browser game with smooth animations, AI opponent, score tracking, and satisfying micro-interactions.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/wahabx32",
    live: "https://game-bice-six-86.vercel.app/",
    glow: "rgba(52, 211, 153, 0.3)",
  },
];

export const socials = {
  email: "iamwahabbahi1@gmail.com",
  phone: "03077013185",
  whatsapp: "https://wa.me/923077013185",
  github: "https://github.com/wahabx32",
  linkedin: "https://linkedin.com/in/wahabdev",
};
