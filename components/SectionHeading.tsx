import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-zinc-400">{subtitle}</p>}
    </Reveal>
  );
}
