# Nethmi Malsha — Portfolio (Next.js)

Rebuilt from the original HTML version as a proper Next.js 14 (App Router) +
React + TypeScript + Tailwind project, keeping the same design: rotating
node-network hero, tabbed/segmented project folders, and the interactive
tile-grid backgrounds on every section.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx        fonts (Space Grotesk / Inter / IBM Plex Mono) + metadata
  page.tsx           assembles all sections
  globals.css        base styles + shared component classes (.card, .tag, .btn, etc.)
components/
  Nav.tsx
  Hero.tsx           rotating node-network canvas + hero copy
  About.tsx
  Stack.tsx          tech stack overview grid
  Projects.tsx        tabbed project folders (Data Analytics / Software Eng / IT Support)
  projectsData.ts     <-- edit YOUR project content here
  Certifications.tsx
  Contact.tsx
  Footer.tsx
  TileCanvas.tsx      reusable interactive tile-grid background used by every section
```

## What to edit first

1. **`components/projectsData.ts`** — replace the `[Update: ...]` placeholders
   in the Software Engineering array with your real project details, and add
   any additional projects to any category.
2. **`public/photo.jpg`** — add your real headshot here (referenced in
   `About.tsx`).
3. **`public/resume.pdf`** — add your resume so the "Download Resume" button
   works.
4. **Links** — in `Hero.tsx` and `Contact.tsx`, replace the LinkedIn/GitHub/
   email placeholder URLs with your real ones.
5. **`components/Certifications.tsx`** — add your second certification.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):

```bash
npx vercel
```

or push this repo to GitHub and import it on vercel.com — it auto-detects
Next.js and deploys on every push.
