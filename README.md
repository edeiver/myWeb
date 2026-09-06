# Edeiver Barranco — Portfolio

Personal portfolio site: bilingual (EN/ES), light/dark theme, minimalist Apple-inspired design. Built with Next.js.

## Sections

- **Hero** — intro, location, CTAs
- **Featured projects** — Pásame, Wallet, Kuiper (Hércules), each with a photo/browser mockup and a "view full detail" modal: image gallery with keyboard/thumbnail navigation, features list, and tech stack
- **About** — bio and key stats
- **Experience** — career timeline
- **Skills** — mobile, web, integrations, delivery, product, security, education, certifications, languages
- **Contact** — downloadable CV and social links

All copy is sourced from the author's real CV — nothing on the page claims experience, dates, or skills beyond what's documented there.

## Stack

- **Next.js** (App Router, Turbopack)
- **next-intl** — i18n with `/en` and `/es` locale-prefixed routes
- **next-themes** — light/dark mode
- **framer-motion** — scroll reveals and the project detail modal
- **Tailwind CSS 4**
- **lucide-react** — icons

## Structure

```
messages/            en.json / es.json — all site copy
public/projects/     project screenshots (one folder per project)
public/cv/           downloadable CV (PDF)
src/i18n/            next-intl routing, navigation, request config
src/proxy.ts         locale-detection middleware (Next "proxy" convention)
src/app/[locale]/    layout + page
src/components/      section components (hero, about, projects, project-card, experience, skills, contact...)
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /en or /es)
npm run build
npm run lint
```

## Editing content

- All copy lives in `messages/en.json` and `messages/es.json` — edit both when adding text.
- Projects are defined in `src/components/projects.tsx`; screenshots go in `public/projects/<project>/`.
- `ProjectCard` supports two media styles (`variant`: `"phone"` for app screenshots, `"browser"` for web app screenshots) and two layouts (`layout`: `"split"` or `"stacked"`).

## Deploy

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new), or deploy directly from the CLI:

```bash
npx vercel
```

No environment variables are required.
