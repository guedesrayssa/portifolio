# Implementation Guide

This guide explains how to reproduce the documented language in a different portfolio while replacing all content, imagery and vector drawings with original material.

## 1. Implementation order

1. Install the font families and `DESIGN_TOKENS.css`.
2. Build the dark/paper surfaces and bounded containers.
3. Establish semantic HTML and the full page flow before animation.
4. Implement hero, Chronicles, Foundations and Projects in static form.
5. Create original replacement ornaments and structural SVGs.
6. Add Library/personal rail, rotating principle, contact and footer.
7. Add hover and reveal motion.
8. Add custom cursor last.
9. Validate all target viewports, keyboard access and reduced motion.

## 2. Technical foundation

The observed site is consistent with Nuxt/Vue and Tailwind-style utilities, but the design system is framework-agnostic. React/Next, Vue/Nuxt or semantic HTML/CSS can all reproduce it.

Recommended structure:

```text
src/
  components/
    foundation/
    ornaments/
    hero/
    chronicles/
    projects/
    contact/
  styles/
    DESIGN_TOKENS.css
    globals.css
    motion.css
  assets/
    original-portrait.webp
    original-ornaments/
    project-screenshots/
```

Use CSS custom properties as the source of truth. Do not scatter arbitrary hex values or spacing literals through components.

## 3. Static foundations first

Set the base body to Inter, #101010 background and #F2F2F2 foreground. Each section must explicitly choose its surface; do not rely on inherited background transitions.

```css
html { background: var(--color-bg-charcoal); }
body { margin: 0; font-family: var(--font-body); }
.surface-dark { background: var(--color-bg-charcoal); color: var(--color-text-on-dark); }
.surface-paper { background: var(--color-bg-paper); color: var(--color-text-primary); }
.section { padding-block: var(--space-section-md); }
.container-wide { width: min(100% - 3rem, var(--container-wide)); margin-inline: auto; }
```

Build the page with animation disabled. A user who blocks JavaScript must still see all content.

## 4. Typography

- Use Cinzel Decorative for display and identity-bearing headings only.
- Use Cinzel for roles, dates, companies, labels and editorial metadata.
- Use Inter for paragraphs, project descriptions and form values.
- Preserve tracking tokens. They matter as much as font choice.
- Reduce tracking before reducing font size on mobile; huge tracking can cause overflow.

## 5. Layout

Implement local grids instead of a global card system:

- Hero: centered layered composition.
- Chronicles: narrow flow with absolute pilaster.
- Foundations: three architectural columns.
- Projects: two-column stagger.
- Library: horizontal snap rail.
- Principle: centered fixed-height rotator.
- Contact: two-column underline form.

Use the exact container caps from `LAYOUT_SPEC.md`. The contrast between narrow Chronicles and wide Foundations/Projects is essential.

## 6. Original ornament system

Create a new vector family with consistent rules:

- primary structural stroke: 1.5px;
- fine detail stroke: .4–.8px;
- dark ornament color: #1A1A1A;
- light ornament color: #E5E7EB;
- typical opacity: .5–.7;
- no rounded cards; use lines, capitals, bases and dividers.

Required new assets:

1. central hero portrait/sculpture;
2. original 400×500 wireframe symbol;
3. original symmetrical 120×60 botanical branch;
4. original 48×1000 stretchable timeline pillar;
5. original 200×55 pillar capital and base;
6. original 120×50 project/temple ornament;
7. original 100×60 Library ornament;
8. original 1200×24 meander-like divider;
9. original 18×36 leaf cursor;
10. original quill/memento/contact marks.

Do not trace the source SVG paths. Match density, aspect ratio, stroke hierarchy and visual function.

## 7. Hero implementation

1. Create `min-height:100dvh`, `overflow:hidden`, 80px top padding.
2. Mount the ambient canvas at z0 and cap its opacity at .15.
3. Place an original 450px portrait at z10.
4. Place the original replacement wireframe at z20 with .3 opacity.
5. Overlay the two-line 112px display at z30.
6. Place name/role/social block 48px below.
7. Place descend indicator 16px from the bottom.
8. Add the confirmed 1.5s scale entrance.
9. Add pointer/scroll parallax only after static alignment is perfect.

Check title clipping at 375px and 430px. Use an `aria-label` on the whole display instead of making a screen reader pronounce letter spans.

## 8. Chronicles implementation

Use a real list of experiences. The pillar is decorative and must be `aria-hidden`. Keep item content in the normal flow; never absolutely position copy against a fixed-height timeline.

```css
.chronicle-list { position: relative; margin-left: 2rem; }
.chronicle-pillar { position: absolute; inset-block: 0; left: -25px; width: 3rem; opacity: .5; }
.chronicle-item { position: relative; padding-left: 4rem; margin-bottom: 5rem; }
```

On mobile, stack role/date and reduce the content inset. Ensure the pillar stretches to actual content height.

## 9. Foundations implementation

The central mistake to avoid is turning this into ordinary dark cards. Each category must read as a column/pillar:

```text
SVG capital
5px-edged dark shaft
icon + title + editorial subtitle
staggered skill rows
4px progress line
SVG base
```

Apply perspective to the card parent and transition the shaft transform over 800ms. Disable tilt for touch/reduced-motion. The three manifesto columns below the pillars are necessary: they convert a skill list into a point of view.

## 10. Projects implementation

Use actual project screenshots and original copy. Preserve:

- two columns;
- 48px gutter;
- second item offset by 96px;
- 16:9 media;
- square edges;
- 1px silver frame;
- tags and inline links;
- outlined “more work” CTA with corner marks.

On mobile, remove the offset completely. Do not preserve stagger by adding blank space.

## 11. Library/personal rail

The source uses books, but the pattern can hold any personal editorial material while preserving the design grammar. Keep 280×400 cards, 48px gaps and native scroll snap. Provide arrow buttons and keyboard-accessible links.

## 12. Rotating principle

Use three concise principles to match the orbit’s three points. Interval: 4s. Heading breathes over 5s. Add pause behavior and stop autoplay under reduced motion. Fix the container height around 240px to prevent layout shift between messages.

## 13. Contact and footer

Use real labels, not placeholders alone. Maintain the underline aesthetic but add visible keyboard focus. Keep the form within 672px and the contact section on the same dark surface as the footer.

Do not wire a production form endpoint until spam protection, success/error states and privacy copy are defined.

## 14. Motion pass

Add motion in this order:

1. hero bust entrance;
2. character reveal;
3. section reveals;
4. meander draw-on;
5. pillar hover;
6. project hover;
7. principle rotator;
8. cursor.

Use IntersectionObserver before adding a third-party motion dependency. No GSAP/Lenis/Lottie dependency was confirmed as necessary.

## 15. Cursor pass

The observed cursor asset is a leaf, not the separate quill ornament. Implement it as a fixed `pointer-events:none` DOM element above other content. Enable only for fine pointers. Use velocity-based rotation and a restrained lerp. Keep the native cursor on inputs and if the custom element fails to mount.

## 16. Responsive QA matrix

Test at exactly:

```text
375×812
430×932
768×1024
1024×768
1280×800
1440×900
1920×1080
```

At every size validate:

- no hero display clipping;
- name/role tracking does not overflow;
- dates do not collide with roles;
- pillar reaches the final timeline item;
- cards never fall below a usable copy width;
- second project offset is absent in one-column mode;
- Library rail shows a partial next card on mobile;
- contact fields and buttons have 44px minimum hit areas;
- footer and floating controls respect safe areas.

## 17. Accessibility and performance

- Maintain semantic heading order.
- All decorative SVGs should be `aria-hidden` and `focusable=false`.
- Use `prefers-reduced-motion` and `pointer:coarse`.
- Never rely on hover or the custom cursor for essential information.
- Serve the original replacement portrait as WebP/AVIF with a PNG fallback only when alpha fidelity requires it.
- Cap canvas DPR at 2 and pause canvas work when sections are off-screen.
- Lazy-load project screenshots; eagerly load only the hero image.
- Preserve text contrast and increase tiny functional labels where necessary.

## 18. Final visual-polish checklist

- Dark surfaces are #101010, not generic pure black.
- Secondary white is #F2F2F2, not always #FFF.
- Headings use the correct serif family and restrained weight.
- Tracking tokens match their role.
- Vertical gaps come from the documented scale.
- Light/dark transitions define page chapters.
- Ornaments anchor section structure and are not sprinkled randomly.
- Pillars use real SVG capitals/bases, not CSS rectangles alone.
- Project frames stay square.
- Motion remains slow, low-amplitude and interruptible.
- Reduced-motion mode leaves no hidden content.

## 19. Copy-paste handoff prompt for an implementation agent

```text
Implement a responsive portfolio using the design-system documentation in this folder as the sole visual source of truth.

Read, in order:
1. DESIGN_TOKENS.css
2. TYPOGRAPHY_SPEC.md
3. LAYOUT_SPEC.md
4. ASSET_AUDIT.md
5. COMPONENT_INVENTORY.md
6. MOTION_SPEC.md
7. DESIGN_SYSTEM_REFERENCE.md

Goal: reproduce the documented classical editorial language, proportions, hierarchy, spacing, light/dark sequencing, structural ornaments and interaction character. Use entirely new content, original images and newly drawn vectors. Do not download, trace or reuse assets, text, HTML, CSS or JavaScript from erenaygun.com.

Implementation constraints:
- Treat exact observed tokens as authoritative.
- Mark any deviation in a short implementation note.
- Build semantic static content first; add motion after layout QA.
- Support 375, 430, 768, 1024, 1280, 1440 and 1920px viewports.
- Support keyboard navigation, prefers-reduced-motion and pointer:coarse.
- Keep the custom cursor optional and fail-safe.
- Use original replacement SVGs matching documented aspect ratios, stroke hierarchy and visual purpose, not source paths.
- Do not invent generic rounded cards, glassmorphism or gradients outside the token set.

Before completion, compare every section against LAYOUT_SPEC.md and every text role against TYPOGRAPHY_SPEC.md. Report which values are exact, normalized or estimated.
```
