<div align="center">

# Rayssa Guedes França

**Software Engineer · Computer Science @ Inteli**

Bilingual personal portfolio built as a single-page editorial experience with Next.js.

[Live site](https://rayssaguedes.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/rayssaguedess) ·
[GitHub](https://github.com/guedesrayssa)

</div>

## About

I am a Software Engineer and Computer Science student focused on software engineering
and artificial intelligence. The site contains my experience, education and selected
projects.

## Construction

- **Next.js 16, React 19 and TypeScript** provide the App Router, strict typing, image
  handling and generated metadata.
- **Tailwind CSS 4 and custom CSS** define the responsive editorial layout without a UI
  component library.
- **Framer Motion, Canvas and CSS keyframes** power reveals, particles, transitions and
  the custom leaf cursor.
- **Inline SVG components** generate the classical ornaments and section dividers.
- **Local fonts** avoid external font requests.
- **Data-driven content** separates projects, experience, skills and translations from
  the visual components.
- **Accessibility** includes semantic landmarks, keyboard navigation, a skip link and
  reduced-motion support.

The page is composed in `app/page.tsx`. Sections and interactions live in `components/`,
while bilingual content and portfolio records live in `data/`.

## Structure

```text
app/          routes, page composition, fonts, styles and metadata
components/   sections, providers, interactions and SVG ornaments
data/         portfolio content and translations
public/       portrait, hero artwork and project covers
types/        shared TypeScript models
```

## Root files

Configuration files such as `package.json`, `package-lock.json`, `tsconfig.json`,
`next.config.ts`, `eslint.config.mjs` and `postcss.config.mjs` must stay at the
repository root and be committed. They define dependencies, reproducible installs,
TypeScript, Next.js, lint and CSS processing.

Only generated or local files are ignored, including `node_modules/`, `.next/`,
`out/`, `*.tsbuildinfo`, `next-env.d.ts` and `.env.local`.

## Local development

Requires Node.js 24.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before publishing, validate the project with:

```bash
npm run lint
npm run build
```

## Environment and deployment

`NEXT_PUBLIC_SITE_URL` is optional and sets canonical and social URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Copy `.env.example` to `.env.local` when configuring it locally. On Vercel, select the
**Next.js** preset and keep the detected build, install and output settings.
