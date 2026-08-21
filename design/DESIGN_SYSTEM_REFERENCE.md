# Design System Reference — erenaygun.com

Audit date: 2026-08-21  
Scope: visual language, layout, typography, assets, interaction and responsive reconstruction  
Purpose: allow a new project with original content and assets to reproduce the same design grammar without consulting the source site again

## 1. Method and limits

The audit combined:

- full-page rendered DOM extraction;
- resolved CSS declarations for Hero, Chronicles, Foundations, Projects, Principle and Contact;
- full design-token inventory across 1,487 declarations, 677 rules and 757 selectors;
- font cascade and WOFF2 source inspection;
- image and inline-SVG inventory;
- static page crawl to confirm section order and content topology;
- runtime-state comparison where different snapshots captured different carousel/reveal states.

The direct interactive browser endpoint returned a temporary 502 during the audit. Therefore exact hover deltas, cursor interpolation, hidden JavaScript, source media queries and library detection could not be exercised live. They are not presented as facts. Every such value is marked `ESTIMATED` or assigned `LOW` confidence.

No source text, original SVG path, raster asset, HTML, CSS or JavaScript is included in this package.

## 2. System overview

The interface is a single-page classical editorial portfolio built from deliberate contrast:

```text
dark monumental hero
→ light chronological editorial section
→ dark architectural skills section
→ light project gallery
→ dark horizontal personal/library rail
→ light rotating manifesto
→ dark contact and footer
```

Its identity does not come from conventional cards or a colorful brand palette. It comes from four systems working together:

1. monumental Cinzel-family typography;
2. strict black/white alternation;
3. architectural and botanical vector ornaments;
4. slow, low-amplitude motion.

The underlying layout is relatively simple: bounded containers, generous 96px section padding, narrow copy widths and local 2/3-column grids. Decoration carries complexity.

## 3. Page anatomy

| Order | Section | Surface | Primary container | Layout | Key device |
|---:|---|---|---:|---|---|
| 1 | Hero / Inner Citadel | #101010 | 1152px | centered layered stack | bust, wireframe, canvas, oversized title |
| 2 | Chronicles | #FFFFFF | 896px | single editorial timeline | 120×60 branch and stretchable pilaster |
| 3 | Foundations | #101010 | 1536px | 3-column pillar grid + 3-column manifesto | architectural cards, meander, canvas |
| 4 | Selected Works | #FFFFFF | 1536px | 2-column staggered grid | 16:9 project frames and temple ornament |
| 5 | Library | #101010 | 1536px | horizontal snap rail | 280×400 editorial cards |
| 6 | Rotating Principle | #FFFFFF | 1536px | centered 240px composition | orbit indicator, timed progress, breathing title |
| 7 | Contact | #101010 | 672px form within 1536px | 2-column underline form | canvas, tracked labels, outline CTA |
| 8 | Footer | #101010 | wide centered | compact vertical meta stack | memento mark, social links, Roman-numeral year |

### Navigation

A conventional full navbar was not present in the extracted main content. The global asset inventory includes a 32×32 envelope shortcut and a 20×20 up arrow, with very high floating z-index tokens. Treat the navigation language as minimal floating affordances plus in-page links, not a persistent multi-item header. Exact position is `MEDIUM/LOW` confidence.

## 4. Derived design principles

### 01 — Typography carries the hierarchy

Large Cinzel Decorative headings replace heavy panels and colored bands. Scale, tracking and contrast do more work than weight.

### 02 — Decoration is structural

The branch opens a timeline, pilasters literally hold content, the temple identifies projects and the shelf identifies the Library. Ornaments are section architecture, not filler.

### 03 — Contrast creates chapters

The dark/light sequence establishes page rhythm. Individual cards stay restrained because the section surface already defines the chapter.

### 04 — Narrow reading, wide exhibiting

Chronicles caps at 896px, while Foundations and Projects expand to 1536px. Copy remains readable; visual systems get room to breathe.

### 05 — Spacing follows a visible scale

The recurring steps are 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 96 and 128px. Arbitrary micro-gaps would weaken the rhythm.

### 06 — Tracking encodes role

0.5em marks personal identity, 0.3–0.4em marks editorial subtitles, 0.1–0.2em marks metadata and tags. Letter spacing is semantic.

### 07 — Square geometry controls ornament

Project frames, tags, form fields and cards avoid fashionable rounding. Circles are reserved for ambient fields, tiny skill dots and orbital indicators.

### 08 — Motion is ceremonial

Entrances take 700–1500ms, pillar hover takes 800ms and the principle breathes over 5s. Motion supports gravitas rather than speed.

### 09 — Reveal distance stays small

The captured states use roughly 20–30px translation. Opacity and timing provide the effect; elements do not fly across the viewport.

### 10 — Personal content becomes editorial content

Books, principles and career history are presented as curated artifacts, making the portfolio feel like a world rather than a résumé page.

### 11 — Ornament contrast is intentionally low

Most vector detail sits at 30–70% opacity. The ornament is visible after the typography, not before it.

### 12 — Interaction is progressive enhancement

The static layout remains complete. Canvas ambience, path drawing, tilt and custom cursor can disappear without removing content.

## 5. Color system

### Core semantic colors

| Semantic name | HEX | RGB / RGBA | Usage | Observed location |
|---|---|---|---|---|
| Hero/charcoal background | #101010 | rgb(16,16,16) | dominant dark surface | Hero, Foundations, Contact |
| Ink surface | #1A1A1A | rgb(26,26,26) | Library cards, dark detail | Library, ornament fills |
| Deep card | #0A0A0A | rgb(10,10,10) | gradient end, groove detail | Foundation cards/pillars |
| Card start | #151515 | rgb(21,21,21) | gradient start | Foundation cards |
| Card deep alternate | #0D0D0D | rgb(13,13,13) | secondary dark gradient | global CSS inventory |
| Paper background | #FFFFFF | rgb(255,255,255) | light sections | Chronicles, Projects, Principle |
| Off-white | #F2F2F2 | rgb(242,242,242) | dark-section text and lines | Hero, Foundations, Contact |
| Muted paper | #F5F5F5 | rgb(245,245,245) | secondary light surface token | global palette |
| Silver line | #E5E7EB | rgb(229,231,235) | borders, pillar detail | cards, ornaments |
| Soft light text | #D1D5DB | rgb(209,213,219) | dark body copy | Foundations manifesto |
| Muted light text | #9CA3AF | rgb(156,163,175) | skill labels, dark metadata | Foundation cards |
| Primary ink text | #101010 | rgb(16,16,16) | light-section heading | all light sections |
| Heading ink | #1A1A1A | rgb(26,26,26) | ornament, rotating principle | light ornament system |
| Secondary text | #4B5563 | rgb(75,85,99) | dates, companies, project copy | Chronicles/Projects |
| Body text | #374151 | rgb(55,65,81) | timeline copy and tags | Chronicles/Projects |
| Muted text | #6B7280 | rgb(107,114,128) | secondary descriptions | cards/principle |
| Bronze accent | #C5A059 | rgb(197,160,89) | sparse accent, floating icon, glow | global/Library ornaments |
| Focus blue | #3B82F6 | rgb(59,130,246) | focus/selection signal in global palette | global styles; not dominant branding |
| Error red | #EF4444 | rgb(239,68,68) | form/error state | global styles |
| Error salmon | #F87171 | rgb(248,113,113) | softened error text | global styles |

### Alpha system

| HEX/notation | RGBA | Typical use |
|---|---|---|
| #F2F2F20D | rgba(242,242,242,.05) | hero ambient circle |
| #F2F2F21A | rgba(242,242,242,.10) | dark section rules |
| #F2F2F24D | rgba(242,242,242,.30) | underline borders, button borders |
| #F2F2F266 | rgba(242,242,242,.40) | hero divider |
| #F2F2F280 | rgba(242,242,242,.50) | labels/spines |
| #F2F2F299 | rgba(242,242,242,.60) | hero links, skill dots |
| #FFFFFF0D | rgba(255,255,255,.05) | inner frames/card track |
| #FFFFFF26 | rgba(255,255,255,.15) | soft highlight shadow |
| #1010100D | rgba(16,16,16,.05) | tag background |
| #1010101A | rgba(16,16,16,.10) | tag border |
| #E5E7EB4D | rgba(229,231,235,.30) | project/foundation frame border |
| #00000080 | rgba(0,0,0,.50) | inset shadow |
| #000C | rgba(0,0,0,.80) | small offset shadow |
| #C5A05980 | rgba(197,160,89,.50) | bronze accent/glow |
| rgba(208,208,208,.03) | same | pointer-position ambient radial light |

### Color usage rules

- Use #101010, not #000, for full dark chapters.
- Use #F2F2F2 for most text on dark; reserve #FFF for hero display and card titles.
- Use #FFF for confirmed light surfaces. Do not invent beige paper unless intentionally extending the system.
- Bronze is sparse. It should never become the background of large panels.
- Borders remain low contrast: 10% ink on light or 30% paper/silver on dark.
- Error and focus colors are functional exceptions, not part of the decorative palette.

## 6. Typography summary

Confirmed families:

```css
--font-display: "Cinzel Decorative", serif; /* 400,700,900 */
--font-editorial: "Cinzel", serif;          /* 400,700 */
--font-body: "Inter", sans-serif;           /* 200,300,400,600 */
```

Confirmed headline ladder:

```text
112px hero display
72px rotating principle
48px contact display
36px section title / hero name
24px role / foundation card
20px project title / hero role
14–16px body
12–14px metadata
9–11px tags and skill labels
```

The complete matrix is in `TYPOGRAPHY_SPEC.md`.

## 7. Spacing system

Observed values:

```text
4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 96, 128px
```

Key mappings:

- global inline padding: 24px;
- section block padding: 96px;
- section intro separation: 48–96px;
- Chronicle item separation: 80px;
- Foundation manifesto separation: 128px;
- project grid gutter: 48px;
- Foundation grid gutter: 32px;
- tag gap: 8px;
- tag padding: 12px horizontal / 4px vertical;
- CTA padding: 32px horizontal / 16px vertical;
- contact button padding: 48px horizontal / 16px vertical.

## 8. Grid and layout logic

The source uses local flex/grid rather than a universal column system.

| Section | Actual pattern | Visual equivalence |
|---|---|---|
| Hero | centered flex stack with absolute layers | 12-column centered span 8–10 |
| Chronicles | narrow container, absolute pillar, flex header | pillar cols 1–2; content 3–9; date 10–12 |
| Foundations | `repeat(3,1fr)`, 32px gap | three four-column spans |
| Manifesto | `repeat(3,1fr)`, 64px gap | three four-column text spans |
| Projects | `repeat(2,1fr)`, 48px gap | two six-column spans |
| Library | horizontal flex, 48px gap | rail, not page grid |
| Contact | `repeat(2,1fr)`, 48px gap in 672px form | two equal field columns |

Detailed measurements and the breakpoint reconstruction are in `LAYOUT_SPEC.md`.

## 9. Hero specification

### Layer stack

```text
z0  full-section canvas, opacity .15
z0  800×800 low-alpha circle
z10 central transparent portrait, 450px
z20 400×500 wireframe, opacity .3
z30 112px two-line display
z40 name, role, divider and social links
bottom 16px descend label and vertical line
```

### Measurements

- `min-height:100dvh`;
- top padding: 80px;
- container: 1152px plus 24px inline padding;
- portrait: 450px wide, contain;
- meta top margin: 48px;
- name bottom margin: 8px;
- role bottom margin: 8px;
- divider: 96×1px;
- social row top margin: 24px; gap 24px;
- descend: bottom 16px; label bottom margin 8px; line 1×16px.

### Motion

- portrait scale .8→1 and opacity 0→1;
- 1.5s, .2s delay, cubic-bezier(.33,1,.68,1), forwards;
- low-amplitude parallax captured around 8px;
- individual display character wrappers indicate staggered reveal (`MEDIUM`).

## 10. Chronicles specification

- light surface, 96px block and 24px inline padding;
- 896px container;
- 120×60 botanical ornament, approximately .6 opacity;
- 36/40px Cinzel Decorative heading, .1em tracking, 56px bottom margin;
- timeline wrapper 32px left margin;
- pilaster absolute at -25px, about 48px wide, 50% opacity;
- item 64px left padding and 80px bottom margin;
- role 24/32px Cinzel;
- period 14/20px Cinzel, uppercase, .1em;
- company 12/16px Cinzel, uppercase, .1em, 32px bottom margin;
- body 14px Inter 300, line-height 1.625;
- bullets 6×6 CSS diamonds, 16px content gap;
- tags 9px uppercase .2em, square, 1px ink-10 border, ink-05 fill.

The pilaster is an inline SVG, not a raster image. Its complete reconstruction parameters are in `ASSET_AUDIT.md`.

## 11. Foundations specification

- dark surface #101010, 96px block/24px inline padding;
- full-section canvas;
- 1536px container;
- centered intro with 96px bottom margin;
- heading 36/40px, tracking -.05em;
- subtitle 14/20px Cinzel, uppercase, .4em, max 672px, 70% opacity;
- 128×1px rule 48px below subtitle;
- three equal columns, 32px gap;
- each card max 400px;
- pillar shaft inset 10.5% from cap edges and padded 40px;
- 1px silver border plus 5px side edges;
- 135° #151515→#0A0A0A gradient;
- inset/offset shadow;
- title 24/32px Cinzel Decorative;
- skill labels 11px Cinzel, uppercase .2em;
- skill dots 6×6 circles;
- row transitions 500ms with 50ms increments;
- progress track 4px; fill 1s;
- three-column manifesto after 128px, 1px top rule, 96px top padding, 64px gap.

This structure is the main reason the section does not look like a generic technology grid.

## 12. Selected Works specification

- white surface, 96px block padding;
- 1536px container and 24px inline padding;
- header 48px bottom margin;
- 2 equal columns, 48px gap;
- second project offset down 96px;
- media 16:9, square corners, 1px silver 30% border, inset black frame shadow;
- 24px media bottom margin;
- title 20/28px Cinzel Decorative;
- body 14px, 1.625, #4B5563;
- tags 10px, .15em, 12×4px padding;
- links 12px uppercase .1em;
- final CTA centered 64px below, 2px dark border, 32×16px padding, four 8px corner marks.

## 13. Library specification

- dark surface, 96px section padding;
- 1536px container;
- title group on left, arrow controls on right;
- 48×48 transparent controls, 1px paper-30 border;
- horizontal rail, 48px gap, native overflow, scrollbar hidden;
- mandatory x scroll snap;
- card 280×400px, 32px padding, square corners;
- dark #1A1A1A surface, 1px silver 30% border, 4px left spine, inset/offset shadow;
- 24px Cinzel Decorative card title;
- 10px uppercase author/meta labels.

## 14. Rotating principle specification

The page crawl captured one principle while the renderer captured another, proving timed rotation.

- white surface, 96px section padding;
- 240px fixed-height active composition;
- 14px ordinal, .5em tracking, 60% opacity;
- 72px Cinzel Decorative title, line-height 1;
- 10px uppercase description, .1em, max 512px;
- 128×4px progress track, 32px top margin;
- heading breathe: 5s ease-in-out infinite, opacity .4↔.8, scale 1↔1.02;
- progress: 4s linear from 0 to 100%;
- orbit SVG: 60×60, three satellites, 700ms rotation group.

## 15. Contact and footer specification

### Contact

- dark surface, 96px top padding;
- full-section canvas;
- 48px/1 contact title in Cinzel Decorative;
- 14/20px subtitle, .3em, 70% opacity;
- intro 64px bottom margin;
- form 672px max;
- two columns, 48px gap;
- transparent controls, 1px paper-30 bottom border, 16px vertical padding;
- label absolute at top 16px, 12px Cinzel, .1em, paper-50;
- control transition 150ms standard;
- submit: 14px Cinzel, .2em, 1px paper border, 48×16px padding, 300ms.

### Footer

Confirmed content topology: memento mark/title, GitHub, LinkedIn, short build statement with Roman-numeral year and copyright. Exact spacing and type values were not recovered; use the dark surface, wide container and the existing 10–14px meta styles (`ESTIMATED`).

## 16. Decorative system

The audit found 32 inline SVGs and no external SVG or Lottie files. Principal families:

- hero wireframe;
- botanical branch;
- Chronicle pilaster;
- Foundation pillar capitals/bases;
- Greek meander divider;
- temple/fronton project ornament;
- Library shelf ornament;
- principle orbit;
- quill, skull/memento, envelope and up arrow;
- functional 14–32px icons;
- 18×36 cursor leaf.

Stroke hierarchy:

```text
.4–.5px  fine internal detail
.8px     grooves and main leaf vein
1–1.5px  structural ornament
2px      emphatic closing strokes and functional icons
5px      pillar shaft edges
```

## 17. Cursor conclusion

The asset inventory contradicts the common visual description “feather cursor.” The likely cursor asset is a 18×36 inline leaf with visible veins. A separate 60×60 quill exists as a decorative icon.

High z-index tokens and inline geometry suggest a fixed DOM cursor, not `cursor:url()`. Exact smoothing, rotation, native-cursor suppression and link behavior were not observable; they remain `LOW`. `MOTION_SPEC.md` contains safe reconstruction pseudocode with all estimated values labeled.

## 18. Texture conclusion

No paper image, texture SVG, Lottie, CSS `background-image` texture or repeating asset was detected on light sections. Chronicles, Projects and Principle resolved to #FFF. The paper-like impression comes from typography, off-white adjacent values, thin ink ornaments and subtle ambient rendering. If an equivalent grain is added later, it must be newly generated and should remain at 2–3% opacity.

Dark sections do use procedural/gradient ambience: canvases, low-alpha radial light, dark diagonal gradients, bronze micro-stripes and fade gradients.

## 19. Interaction summary

| Element | Base | Interaction | Timing |
|---|---|---|---:|
| Hero links | paper 60% | full paper/white | 150ms |
| Foundation card | neutral 3D transform | subtle tilt/scale and filtered overlay | 800ms / 700ms |
| Skill rows | muted | brighten in 50ms stagger steps | 500ms |
| Project image | square 16:9 frame | slight scale/contrast | 700ms `MEDIUM` |
| Project CTA | outline and four corner marks | fill/invert and corner motion | 500/300ms `MEDIUM` |
| Library arrows | transparent 1px border | opacity/border response | 150ms |
| Principle | static active copy | 4s timed rotation, 5s breathe | confirmed |
| Form field | muted underline/label | border and floating-label response | 150ms base; delta `MEDIUM` |
| Submit | outline | paper fill/inversion | 300ms `ESTIMATED` |
| Custom cursor | leaf overlay | smoothed movement/rotation | `LOW` exact values |

## 20. Responsive behavior

Exact source breakpoints were not exposed. The normalized reconstruction uses 640/768/1024/1280/1536px boundaries. Critical behavior:

- 375/430: one-column timeline headers, Foundations, Projects and form; smaller hero; cursor disabled;
- 768: transitional layout; two-column projects/contact; Foundations 2 or 3 depending verified fit;
- 1024+: complete desktop topology;
- 1536+: wide container capped;
- 1920: about 192px margins around a 1536px container.

Every estimated breakpoint rule is labeled in `LAYOUT_SPEC.md` and `DESIGN_TOKENS.css`.

## 21. Accessibility considerations

- Keep semantic heading order independent from visual scale.
- Character-wrapped hero display needs one accessible full-string label.
- Decorative SVGs and canvases must be hidden from assistive technology.
- 9–11px tags are acceptable only when nonessential; functional labels should be larger.
- Add `:focus-visible` behavior equivalent to hover.
- Do not depend on the custom cursor, parallax or reveal state to expose content.
- Disable cursor trails, tilt, breathing, autoplay and smooth rail movement under reduced motion.
- Provide a pause/manual mode for the rotating principle.
- Do not remove native cursor on touch, coarse pointer, form input or mount failure.
- Maintain #9CA3AF/#101010 or stronger contrast for normal text; alpha whites below 50% should be decorative or enlarged.

## 22. Component architecture

Recommended primitives:

```text
SiteShell
BoundedContainer
EditorialSection
AmbientCanvas
SectionHeading
DecorativeOrnament
MeanderDivider
MonumentHero
HeroDisplay
HeroMeta
ChronicleTimeline
ChroniclePillar
ChronicleItem
DiamondBullet
TechTag
FoundationGrid
PillarCard
PillarCapital
PillarBase
SkillRow
PrincipleColumns
ProjectGrid
ProjectFeature
ProjectMediaFrame
CornerFrameCTA
HorizontalEditorialRail
EditorialBookCard
RotatingPrinciple
EditorialContactForm
FloatingLabelField
ContactShortcut
ScrollToTop
CustomLeafCursor
FooterMeta
```

Properties, variants, state ownership and responsive rules are documented in `COMPONENT_INVENTORY.md`.

## 23. Confidence table

| Element | Value | Confidence | Method |
|---|---|---|---|
| Display font | Cinzel Decorative | HIGH | loaded font cascade and rendered CSS |
| Editorial font | Cinzel | HIGH | loaded font cascade and rendered CSS |
| Body font | Inter | HIGH | loaded font cascade and rendered CSS |
| Font weights | CD 400/700/900; Cinzel 400/700; Inter 200/300/400/600 | HIGH | Google Fonts request and WOFF2 entries |
| Hero height | min-height 100dvh | HIGH | resolved CSS |
| Hero portrait width | 450px | HIGH | resolved CSS |
| Hero display | 112px / line-height 1 / tracking -.05em | HIGH | resolved CSS |
| Hero name | 36px / .5em | HIGH | resolved CSS |
| Hero role | 20px / .5em | HIGH | resolved CSS |
| Hero bust entrance | 1.5s, .2s delay, scale .8→1 | HIGH | keyframe and animation declaration |
| Hero parallax amplitude | about 8–12px | MEDIUM | captured runtime transform plus normalization |
| Character stagger | 30–50ms | LOW | individual span structure; initial timing not captured |
| Section block gap | 96px | HIGH | repeated resolved padding |
| Global inline padding | 24px | HIGH | repeated resolved padding |
| Wide container | 1536px | HIGH | resolved CSS |
| Experience container | 896px | HIGH | resolved CSS |
| Hero container | 1152px | HIGH | resolved CSS |
| Chronicle item gap | 80px | HIGH | resolved CSS |
| Chronicle pillar | inline SVG, 48×1000 viewBox, gradient shaft | HIGH | SVG inspection |
| Chronicle pillar rendered width | 48px container / 64px SVG attribute | HIGH | CSS plus SVG attributes |
| Botanical branch | 120×60, 1.5px stroke | HIGH | SVG inspection |
| Foundation grid | 3 equal columns, 32px gap | HIGH | resolved CSS |
| Foundation card max | 400px | HIGH | resolved CSS |
| Foundation 3D hover delta | ±3–5°, scale ~1.015 | LOW | base transition confirmed; target state not captured |
| Project grid | 2 equal columns, 48px gap | HIGH | resolved CSS |
| Second project offset | 96px | HIGH | resolved CSS |
| Project media | 16:9, cover | HIGH | resolved CSS |
| Project image hover scale | 1.02–1.05 | LOW | transition present; hover state not captured |
| Library card | 280×400px | HIGH | rendered code/CSS |
| Library scroll | x mandatory snap, hidden scrollbar | HIGH | resolved inline styles |
| Principle interval | 4s | HIGH | progress keyframe declaration |
| Principle breathe | 5s, opacity .4–.8, scale 1–1.02 | HIGH | keyframe declaration |
| Contact form width | 672px | HIGH | resolved CSS |
| Contact grid | 2 equal columns, 48px gap | HIGH | resolved CSS |
| Contact reveal | 30px start with stagger | MEDIUM | multiple captured mid-animation states |
| Paper texture asset | none detected | HIGH | image/SVG/Lottie inventory |
| Light surface | #FFFFFF | HIGH | section-specific resolved CSS |
| Dark surface | #101010 | HIGH | section-specific resolved CSS |
| Cursor asset | 18×36 inline leaf SVG | HIGH | SVG inventory |
| Cursor implemented as DOM overlay | likely | MEDIUM | inline SVG plus high z-index tokens |
| Cursor smoothing | ~.14 lerp | LOW | reconstruction estimate only |
| Cursor hotspot | near 9×0–4px | LOW | geometry-based estimate |
| Cursor disabled on coarse pointer | required; source unconfirmed | LOW | accessibility/responsive inference |
| Vertical smooth-scroll library | none confirmed | MEDIUM | no scroll-behavior, no identified dependency |
| Lottie | none detected | HIGH | rendered Lottie inventory |
| Framework | Nuxt/Vue | HIGH | scoped `data-v-*` attributes and structure |
| Utility styling | Tailwind-style | HIGH | utility patterns and token output |
| Exact source breakpoints | not recovered | LOW | media queries absent from available snapshot |
| Normalized breakpoints | 640/768/1024/1280/1536 | LOW as source fact; HIGH as implementation contract | standard Tailwind-compatible normalization |
| Footer measurements | 64–96px block padding | LOW | topology confirmed, resolved footer CSS unavailable |

## 24. Completion test

A developer who follows the eight files in this package can reconstruct the system’s principal visual language: color, hierarchy, typography, tracking, section sequence, container proportions, spacing, pillar architecture, project stagger, rail behavior, timed principle, form treatment and motion character. Remaining uncertainty is isolated to hidden runtime behavior—exact breakpoints, hover deltas, cursor physics and footer measurements—and is visibly labeled rather than disguised as fact.
