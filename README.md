<div align="center">

# Rayssa Guedes França

**Software Engineer · Computer Science @ Inteli**

Personal portfolio — a single-page classical editorial site
built with Next.js, hand-drawn SVG ornaments and no UI framework.

[Live site](https://rayssaguedes.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/rayssaguedess) ·
[GitHub](https://github.com/guedesrayssa)

</div>

---

## About me

I am a Computer Science student at **Inteli** (full scholarship, 2025–2028), after
starting my journey in Science and Technology at **UFABC** (2023–2024). My focus is
**software engineering and artificial intelligence**.

Inteli teaches through **Project-Based Learning**: 16 projects across the degree, each
built with a real company. So far I have delivered for **Mars, Chilli Beans, Copel,
Suzano, Banco PAN and Rede Globo** — applying software development, data, AI,
optimisation, cloud and product in practice.

Outside the classroom I am **Vice President of Inteli Júnior**, a 60+ member technology
junior enterprise, and take part in **EchoSec** (cybersecurity society) and the
**Inteli Consulting Society**.

Professionally I have worked on AI agent ecosystems at **Banco Safra**, supply-chain
automation at **Compra Agora (Unilever)**, and data and process improvement at Inteli.

## Selected work

| Project | Client | Stack |
|---|---|---|
| Telemetry and monitoring platform | Grupo Globo (Globoplay) | Python · React · Docker · AWS |
| Credit limit optimisation model | Banco Pan | Python · React · PostgreSQL · OR-Tools |
| Wildfire response optimisation | Suzano | Java · Spring Boot · Next.js · PostgreSQL |
| Predictive model for store expansion | Chilli Beans | Python · scikit-learn |

## The site itself

A single page, three chapters deep, alternating dark and light surfaces:
hero → about → chronicles → foundations → selected works → maxims → contact → memento.

Everything decorative is drawn in code. There are no icon packs, no illustration
libraries and no images beyond the portrait and the project covers:

- **Triangulated portrait** — the hero bust is a Delaunay mesh generated from a facial
  landmark point cloud, so the facets fold along the brow, eyes, nose and lips.
- **Leaf pointer** — a custom cursor that tracks the pointer with no smoothing lag and
  sheds petals as it travels. Disabled for coarse pointers and reduced motion.
- **Greek meander dividers** — the fret between sections is generated unit by unit and
  traced on scroll with `stroke-dashoffset`.
- **Ambient particle fields** — a canvas of drifting motes on every dark section.
- **Hand-drawn ornaments** — memento skull, library shelf, sealed letter, mortarboard,
  foundation emblem and architectural pillars, all inline SVG.

Bilingual (English by default, Portuguese via the header toggle), keyboard navigable,
and every animation respects `prefers-reduced-motion`.

## Tech

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 tokens + hand-written CSS |
| Motion | Framer Motion, canvas, CSS keyframes |
| Type | Cinzel Decorative, Cinzel, Inter (self-hosted) |
| Deploy | Vercel |

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Configuration

Copy `.env.example` to `.env.local` and set the public URL used for canonical links and
social cards. On Vercel this is inferred from the deployment, so the variable is optional.

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Structure

```
app/         layout, page, global styles, generated icon and OG image
components/  section components, ornaments, cursor, providers
data/        content — experience, education, projects, skills, maxims, translations
public/      portrait and project covers
types/       shared content types
```

Content lives entirely in `data/`. Editing a project or an experience never means
touching a component.

---

<div align="center">

*Memento Mori*

</div>
