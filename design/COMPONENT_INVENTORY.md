# Component Inventory

This maps the observed design language into reusable components without reproducing source content, SVG paths or proprietary images.

## Foundation components

### `SiteShell`

- Function: establishes fonts, foreground/background, layer scale, focus styles and reduced-motion behavior.
- Props: `children`, `theme`, `cursorEnabled`.
- Variants: `dark`, `paper`.
- States: normal, reduced-motion, coarse-pointer.
- Responsive: owns global 24px desktop / 20px mobile inline padding token.

### `BoundedContainer`

- Function: centered width constraint.
- Props: `size: copy | form | experience | hero | wide`, `as`, `className`.
- Variants: 32rem, 42rem, 56rem, 72rem, 96rem.
- Responsive: full width minus inline padding; never introduces its own vertical spacing.

### `EditorialSection`

- Function: provides surface, section rhythm and optional ambient layer.
- Props: `tone: dark | paper`, `size: sm | md | lg`, `ornament`, `id`, `children`.
- Variants: canvas dark, flat paper, centered principle.
- States: pre-reveal, revealed.
- Responsive: 96px desktop block padding; normalized 64px mobile.

### `AmbientCanvas`

- Function: very-low-opacity procedural background.
- Props: `variant: hero | foundations | contact`, `intensity`, `interactive`.
- States: static, pointer-reactive, reduced-motion.
- Responsive: resize with `ResizeObserver`; cap device-pixel ratio to protect performance.

### `PaperSurface`

- Function: light white/off-white section surface.
- Props: `texture: none | generated-subtle`.
- Note: no source raster texture was detected. Default must be flat #FFF.

## Navigation and global affordances

### `ContactShortcut`

- Function: 32px envelope shortcut.
- Props: `href`, `label`.
- States: muted bronze, full bronze hover/focus.
- Responsive: maintain 44×44 hit box; static/native pointer on mobile.

### `ScrollToTop`

- Function: floating 20px arrow control.
- Props: `showAfter`, `target`.
- States: hidden, visible, hover, focus.
- Responsive: safe-area-aware positioning.

### `CustomLeafCursor`

- Function: DOM-rendered leaf cursor/trail for fine pointers.
- Props: `size`, `colorBySection`, `lerp`, `rotationSmoothing`, `interactiveScale`.
- States: idle, moving, over-link, over-control, hidden.
- Responsive: never mount for `pointer:coarse`; disable under reduced motion.
- Accessibility: native cursor remains until custom cursor is ready.

## Section title system

### `SectionHeading`

- Function: creates a section identity without a card.
- Props: `title`, `subtitle`, `ornament`, `alignment`, `tracking`.
- Variants: `chronicle`, `foundation`, `projects`, `library`, `contact`.
- States: pre-reveal, revealed.
- Responsive: display size and tracking compress on small screens.

### `DecorativeOrnament`

- Function: routes a semantic ornament to the appropriate original replacement asset.
- Props: `kind`, `tone`, `size`, `animated`, `ariaHidden`.
- Variants: branch, temple, shelf, meander, quill, memento, orbit, wireframe.
- Accessibility: decorative by default; omit from accessibility tree.

### `MeanderDivider`

- Function: 1200×24 section transition with draw-on path.
- Props: `direction`, `duration`, `tone`.
- States: hidden path, drawing, complete.
- Responsive: stretch width with `preserveAspectRatio:none`; do not change height below 16px.

## Hero

### `MonumentHero`

- Function: full-viewport composition of canvas, central image, wireframe, title and meta.
- Props: `displayLines`, `name`, `role`, `portrait`, `socials`, `descendTarget`, `symbol`.
- Variants: one-line or two-line display; original replacement portrait.
- States: loading, entering, settled, scrolled.
- Responsive: artwork 450px desktop and 280–320px mobile; display uses `clamp()` mobile.

### `HeroDisplay`

- Function: wraps display characters for staggered reveal.
- Props: `lines`, `stagger`, `ariaLabel`.
- States: hidden, revealing, visible.
- Accessibility: duplicate full phrase in `aria-label`; character spans are `aria-hidden`.

### `HeroMeta`

- Function: name, role, divider and social links.
- Props: `name`, `role`, `links`.
- Variants: centered only.
- Responsive: tracking may reduce from .5em to .25–.35em.

## Chronicles

### `ChronicleTimeline`

- Function: positions the stretchable pilaster and timeline items.
- Props: `items`, `pillarAsset`, `startOrnament`.
- Responsive: reduces pillar width and item inset; remains a single vertical flow.

### `ChroniclePillar`

- Function: renders an original SVG equivalent of the 48×1000 stretchable pillar.
- Props: `tone`, `opacity`.
- States: static; optional path reveal.
- Responsive: 48px desktop, 32–40px mobile.

### `ChronicleItem`

- Function: one experience/turning point.
- Props: `role`, `company`, `period`, `bullets`, `tags`, `quote`, `variant`.
- Variants: standard job, milestone quote.
- States: hidden/revealed.
- Responsive: header row becomes column; date follows role.

### `DiamondBullet`

- Function: 6×6 CSS marker rotated 45°.
- Props: `tone`.
- Accessibility: decorative.

### `TechTag`

- Function: square low-contrast metadata chip.
- Props: `children`, `density: experience | project`.
- Variants: 9px/.2em or 10px/.15em.
- States: static; no source hover was confirmed.
- Responsive: wraps naturally; never horizontally scrolls.

## Foundations

### `FoundationGrid`

- Function: three architectural skill cards.
- Props: `groups`.
- Responsive: 3 columns desktop, 1 column mobile; optional 2 columns tablet.

### `PillarCard`

- Function: category content assembled as capital + shaft + base.
- Props: `title`, `subtitle`, `icon`, `skills`, `backgroundArtwork`, `progress`.
- Variants: frontend, tools, backend or any semantic group.
- States: idle, pointer-tilt, hover, focus-within.
- Responsive: card max 400px; reduced padding on mobile.

### `PillarCapital` / `PillarBase`

- Function: original replacement 200×55 SVGs.
- Props: `tone`, `fluting`, `detailLevel`.
- Responsive: stretch horizontally with preserved 55px proportional height.

### `SkillRow`

- Function: 6px dot plus 11px tracked label.
- Props: `label`, `index`, `active`.
- States: muted, brightened.
- Motion: 50ms stagger increments.

### `PrincipleColumns`

- Function: three plain-text manifesto columns below the cards.
- Props: `items`.
- Styling: 1px top rule, 96px top padding, 64px gap.
- Responsive: single column, 48–64px gap.

## Projects

### `ProjectGrid`

- Function: two-column editorial project layout.
- Props: `projects`, `staggerOffset`.
- Responsive: one column below tablet; remove second-item offset.

### `ProjectFeature`

- Function: media, title, description, tags and links.
- Props: `title`, `description`, `image`, `tags`, `links`, `offset`.
- States: idle, media hover, link focus.
- Responsive: 16:9 retained at all widths.

### `ProjectMediaFrame`

- Function: square-corner 16:9 image frame with silver border and inset shadow.
- Props: `src`, `alt`, `href`, `overlay`.
- States: base, hover/focus.
- Accessibility: meaningful alt; link gets descriptive accessible name.

### `CornerFrameCTA`

- Function: outlined CTA with four independent 8×8 corner marks.
- Props: `href`, `iconStart`, `iconEnd`, `children`.
- States: base, hover, focus, active.
- Responsive: preserve at least 44px height; allow full-width on narrow phones.

## Library and principle

### `HorizontalEditorialRail`

- Function: reusable snap rail with previous/next controls.
- Props: `items`, `step`, `label`.
- States: start, middle, end; controls disabled when unavailable.
- Responsive: remains horizontal; card width may use `min(280px,78vw)`.

### `EditorialBookCard`

- Function: 280×400 dark card with left spine.
- Props: `title`, `author`, `description`, `accent`.
- States: idle, hover/focus.
- Note: replace book content with new owner’s chosen personal content.

### `RotatingPrinciple`

- Function: timed manifesto/values carousel.
- Props: `items`, `interval=4000`, `autoplay`, `pauseOnHover`.
- Subcomponents: `OrbitIndicator`, `PrincipleCopy`, `ProgressLine`.
- States: entering, active, exiting, paused.
- Accessibility: pause control; no autoplay under reduced motion; announce changes politely only when user-triggered.

## Contact and footer

### `EditorialContactForm`

- Function: two-column underline form.
- Props: field schema, submit handler, status.
- States: idle, focused, filled, invalid, submitting, success, error.
- Responsive: single column mobile.

### `FloatingLabelField`

- Function: input/textarea with tracked Cinzel label.
- Props: `type`, `name`, `label`, `required`, `multiline`.
- States: idle, focus, filled, invalid, disabled.
- Accessibility: real label association; error text connected via `aria-describedby`.

### `FooterMeta`

- Function: emblem/title, social row, build statement and copyright.
- Props: `mark`, `socials`, `statement`, `year`.
- Variants: dark only.
- Responsive: centered stack.

## Recommended component hierarchy

```text
SiteShell
├── ContactShortcut
├── CustomLeafCursor
├── MonumentHero
├── EditorialSection[paper]
│   └── ChronicleTimeline
├── EditorialSection[dark]
│   ├── SectionHeading
│   ├── FoundationGrid
│   └── PrincipleColumns
├── EditorialSection[paper]
│   └── ProjectGrid
├── EditorialSection[dark]
│   └── HorizontalEditorialRail
├── EditorialSection[paper]
│   └── RotatingPrinciple
├── EditorialSection[dark]
│   └── EditorialContactForm
└── FooterMeta
```

## State ownership

- `SiteShell`: pointer capability, reduced motion, current surface tone.
- `MonumentHero`: entry completion and parallax progress.
- `PillarCard`: local pointer coordinates and hover/focus state.
- `HorizontalEditorialRail`: scroll position and control availability.
- `RotatingPrinciple`: active index, interval, paused state.
- `EditorialContactForm`: field and submission state.

Avoid a single global animation controller. Local ownership keeps the system reproducible and prevents ornamental motion from blocking content.
