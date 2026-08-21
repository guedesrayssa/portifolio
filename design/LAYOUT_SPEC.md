# Layout Specification

Snapshot date: 2026-08-21. Exact desktop measurements are derived from resolved CSS. Source media-query boundaries were not exposed, so responsive changes marked `ESTIMATED` are a reconstruction contract, not claims about hidden source code.

## Global layout primitives

| Primitive | Value | Use | Confidence |
|---|---:|---|---|
| Global wide container | 1536px / 96rem | Foundations, Projects, Library, Contact | HIGH |
| Hero container | 1152px / 72rem | Centered hero stack | HIGH |
| Experience container | 896px / 56rem | Chronicles timeline | HIGH |
| Form/content container | 672px / 42rem | Contact form; bounded subtitles | HIGH |
| Principle copy | 512px / 32rem | Rotating principle description | HIGH |
| Horizontal page padding | 24px / 1.5rem | All major sections | HIGH |
| Default section padding | 96px top and bottom | Chronicles, Foundations, Projects, Principle, Library | HIGH |
| Hero height | `min-height: 100dvh` | Full first viewport | HIGH |
| Foundation card max width | 400px | Each structural column card | HIGH |
| Library card | 280 × 400px | Horizontal book/card rail | HIGH |
| Project media ratio | 16:9 | Featured project media | HIGH |

The page is not a universal 12-column grid. It uses centered bounded containers with local flex/grid compositions. A 12-column overlay can assist implementation, but the source behavior is better represented by the section-specific rules below.

## Page sequence

1. Hero — dark, viewport height.
2. Chronicles — light, narrow editorial timeline.
3. Foundations — dark, wide three-column monumental composition plus three-column manifesto.
4. Selected Works — light, wide two-column staggered project grid.
5. Library — dark, horizontally scrolling card rail.
6. Rotating Principle — light, centered 240px composition.
7. Contact — dark, centered form.
8. Footer — dark continuation with social/meta copy.

## Section specifications

### Hero

```text
section: position relative; display flex
height: min-height 100dvh
padding-top: 80px
overflow: hidden
alignment: centered on both axes
container: 1152px max; 24px inline padding
layers: canvas z0 → ambient circle z0 → bust z10 → geometry z20 → display z30 → meta z40
```

The central illustration is 450px wide with `max-width:100%`. A 400×500 viewBox geometric wireframe is superimposed. The title is absolutely overlaid on the bust. A decorative 800px circle is positioned at `left:50%; top:50%`; the captured transform state was `scale(.9945)`. Final centering depends on the runtime transform and is `MEDIUM` confidence.

Meta block sits 48px below the central artwork. Name and role are stacked; divider is 96×1px; social row is 24px below with a 24px gap. “Descend” is positioned 16px from the bottom with a 16×1px vertical line.

### Chronicles

```text
section: white; 96px block padding; 24px inline padding
container: 896px centered
heading ornament: centered 120×60 SVG
heading: margin-bottom 56px
timeline wrapper: margin-left 32px; position relative
pillar: absolute; left -25px; top 0; bottom 0; nominal container width 48px
item: padding-left 64px; margin-bottom 80px
```

Experience header is a flex row with `align-items:baseline` and `justify-content:space-between`. Role sits left; dates sit right. Company label follows with 32px bottom margin. Body and tags remain in the content column. Visual 12-column equivalence:

```text
Desktop equivalent
cols 1–2   ornament/pillar zone
cols 3–9   role, company, body, tags
cols 10–12 date, aligned to header baseline
```

The actual implementation is flex plus absolute positioning, not a confirmed 12-column CSS Grid.

### Foundations

```text
section: #101010; relative; overflow hidden; 96px block / 24px inline
background: full-section canvas at z0
container: 1536px
section intro: centered; margin-bottom 96px
intro rule: 128×1px; margin-top 48px
primary grid: 3 equal columns; gap 32px
card: max-width 400px; centered within column
card body: 10.5% horizontal inset; padding 40px
secondary manifesto grid: 3 equal columns; gap 64px; margin-top 128px;
  border-top 1px; padding-top 96px
```

Each primary card is visually assembled as a pillar: SVG capital, rectangular content shaft, SVG base. The content shaft has 5px side borders and no top/bottom border contribution from that same edge treatment. This is why the section reads as architecture rather than a generic technology grid.

### Selected Works

```text
section: white; 96px block padding
container: 1536px; 24px inline padding
header: flex; align end; justify between; margin-bottom 48px
grid: 2 equal columns; gap 48px
project 2: margin-top 96px to create editorial stagger
media: 16:9; margin-bottom 24px
copy block: margin-top 16px
CTA row: margin-top 64px; centered
```

Visual 12-column equivalence:

```text
Project A: columns 1–6
Project B: columns 7–12, shifted down 96px
gutter: 48px
```

### Library rail

```text
section: #101010; 96px block padding; 24px inline padding
container: 1536px
header row: left title group, right 48×48 navigation buttons
rail: horizontal flex; 48px gap; 24px inline padding; 48px bottom padding
overflow-x: scroll; scrollbar hidden
scroll-snap-type: x mandatory
card: 280×400px; shrink:0; scroll-snap-align:start; 32px padding
```

### Rotating principle

```text
section: white; 96px block padding; centered text
container: 1536px; 24px inline padding
active composition: 240px tall; flex column; justify space-between
description: max-width 512px
progress bar: 128×4px; margin-top 32px
```

The page crawl and rendered snapshots captured different active principles. This confirms a timed rotator rather than static content.

### Contact

```text
section: #101010; padding-top 96px; overflow hidden
canvas: absolute full-section z0
container: 1536px; z10; 24px inline padding
intro: centered; margin-bottom 64px
form: max-width 672px
form grid: 2 equal columns; gap 48px
input block: position relative
control: full width; 16px vertical padding; 1px bottom border
button row: centered
```

Name and email occupy the two-column row. Subject and message are presented as subsequent underline controls; their exact column-span rules were not exposed and should be implemented as `grid-column:1/-1` on desktop unless the final visual QA shows otherwise (`MEDIUM`).

### Footer

The content order is confirmed: emblem/title, GitHub and LinkedIn, build line with Roman-numeral year, copyright. Exact box measurements were not recovered. Continue the contact section’s #101010 surface, use the 1536px container and 24px inline padding, and reserve 64–96px block padding (`ESTIMATED`).

## Responsive contract

No media-query boundaries were returned by the rendered CSS extractor. The following breakpoints use the likely Tailwind/Nuxt convention and are deliberately marked `ESTIMATED`.

| Viewport | Layout behavior |
|---:|---|
| 375px | One column throughout; 20px inline padding; custom cursor disabled; hero bust about 280px; monumental display 48–56px; timeline date moves below role; pillar narrows/softens; Foundations one column; projects one column with no 96px stagger; contact one column; Library remains horizontal. `ESTIMATED` |
| 430px | Same as 375px with hero bust about 300–320px and 20–24px padding. `ESTIMATED` |
| 768px | Likely `md` transition: 24px padding; projects 2 columns; Foundations may become 3 columns if cards fit or use 2+1; contact 2 columns; custom pointer can activate only for fine pointers. `ESTIMATED` |
| 1024px | Full desktop topology: Foundations 3 columns, projects 2 columns, experience header dates on the right. `ESTIMATED` boundary; topology HIGH from desktop CSS |
| 1280px | Same topology; hero container caps at 1152px; experience remains 896px; wide containers continue expanding. HIGH |
| 1440px | Same topology; wide sections use available width minus 48px. HIGH |
| 1920px | Wide container caps at 1536px, leaving about 192px side margins; hero remains capped at 1152px. HIGH |

Recommended explicit breakpoints for a reconstruction:

```css
/* Normalized implementation contract, not recovered source values */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

## Responsive transformations

- Hero display should use `clamp()` below 768px; desktop uses the confirmed fixed 112px size.
- The hero artwork must keep `max-width:100%` and reduce from 450px without horizontal clipping.
- Chronicles header changes from row to column at the mobile breakpoint; date gets an 8px top margin.
- Timeline item padding can reduce from 64px to 40–48px; pillar can reduce from 48px to about 32px (`ESTIMATED`).
- Foundation cards collapse to one column below 768px. Preserve SVG capitals/bases, but reduce body padding from 40px to 28–32px.
- The manifesto grid collapses from 3 to 1 column; maintain 48–64px vertical gaps.
- Projects collapse to one column and remove the second item’s 96px offset.
- Library remains a horizontal rail at all sizes because its interaction is intentional.
- Contact collapses to one column and preserves full-width underlined fields.
- Decorative cursor and hover-only parallax must be disabled for `pointer:coarse`.

## Rhythm summary

The dominant vertical unit is 96px. Important internal transitions use 48px or 64px. Repeated content items use 80px. Monumental separations use 128px. Avoid inventing arbitrary 18px/22px/27px gaps: the page’s consistency comes from the 4/8/12/16/24/32/40/48/56/64/80/96/128 scale.
