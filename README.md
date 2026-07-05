# Abdul Wahab — Developer Portfolio

Premium dark-themed developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router entry: layout (fonts + SEO metadata), page, global styles
- `components/` — one component per section (Hero, About, Skills, Projects, Services, Contact, Footer) plus Scene3D (R3F background), Navbar, CursorGlow, Reveal
- `lib/data.ts` — all content: skills, projects, socials
- `public/Abdul-Wahab-CV.pdf` — downloadable CV

## Notes

- The contact form validates client-side and simulates delivery. Wire it to Formspree/Resend or an API route in `components/Contact.tsx` when ready.
- The 3D scene lazy-loads (never blocks first paint) and automatically reduces particle count on mobile.
