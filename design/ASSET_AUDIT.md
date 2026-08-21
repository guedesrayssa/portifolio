# Asset Audit

Snapshot date: 2026-08-21. This file documents asset types and geometry only. Do not copy, download or reuse the source files or SVG paths.

## Inventory summary

| Category | Count/finding | Confidence |
|---|---:|---|
| Raster/image URLs exposed | 5 | HIGH |
| Content images | 3 | HIGH |
| Favicon | 1 | HIGH |
| Responsive duplicate of hero image | 1 | HIGH |
| Inline SVGs | 32 | HIGH |
| Lottie files | 0 detected | HIGH for rendered snapshot |
| External SVG files | 0 detected | HIGH for rendered snapshot |
| Canvas layers | At least 3: hero, Foundations, Contact | HIGH |
| Paper/noise raster | None detected | HIGH |

## Raster assets

| Technical path pattern | Type | Role | Render treatment | Recreate rather than reuse |
|---|---|---|---|---|
| `/bust.png`, optimized at 640 and 1024 widths | PNG via image optimizer | Hero statue/bust | width 450px; max-width 100%; object-fit contain; 700ms transition | Create a new transparent-background central portrait/sculptural asset with similar massing but original subject and silhouette |
| `/images/devtool.png`, optimized at 1536 | PNG | Project media | 16:9 frame; object-fit cover; full width/height | Use original screenshots from the new project |
| `/images/focuzy.png`, optimized at 1536 | PNG | Project media | Same 16:9 treatment | Use original screenshots from the new project |
| `/favicon.png` | PNG | Browser favicon/logo | not part of page composition | Create a new monogram/favicon |

No other raster ornaments, paper textures or cursor images were exposed.

## Hero asset system

### Central sculptural image

- Source type: transparent PNG.
- Render width: 450px desktop; natural dimensions were not exposed.
- Fit: `object-fit:contain`.
- Entrance: scale .8→1, opacity 0→1.
- Parallax: captured around -7.8px on Y; low-amplitude runtime transform.
- Function: gives the hero a single monumental mass that anchors oversized typography.

Recreate with an original transparent PNG or WebP at 1200–1600px on the long side. Keep generous transparent margins and test against both pure charcoal and the wireframe overlay.

### Geometric wireframe

- Type: inline SVG.
- viewBox: 400×500.
- Geometry: hexagonal/shield outline plus three long internal axes.
- Outer stroke: #F2F2F2, .5px.
- Inner strokes: #F2F2F2, .2px.
- Container opacity: .3.
- Captured dash length: about 1121.11.
- Function: separates the title from the bust without adding a card or panel.

Create a new geometric symbol with comparable density and aspect ratio. Do not replicate the exact path.

### Ambient canvas and circle

- Full-section canvas at z0, opacity .15.
- Captured canvas render: 780×695 in the extractor.
- Separate 800×800 circle, 9999px radius, paper at 5% alpha.
- Function: prevents flat charcoal while remaining barely visible.

Use procedural particles/lines or a low-frequency noise shader created from scratch. Keep average opacity below .15.

## Botanical ornaments

### Symmetrical branch above Chronicles

- Type: inline SVG.
- viewBox: 120×60.
- Overall render size: 120×60.
- Structure: mirrored left/right stems meeting at center.
- Stem stroke: #1A1A1A, 1.5px, round caps.
- Leaves: filled #1A1A1A, approximately 80% opacity.
- Center closing stroke: 2px.
- Parent opacity: around .6.
- Function: announces a light editorial section and balances the heading.

It is a custom symmetrical vector, not a font icon. Recreate a new botanical motif with the same 2:1 bounding box, stroke density and symmetry.

### Cursor leaf

- Type: inline SVG, DOM-compatible.
- viewBox/render source: 18×36.
- Silhouette: filled `currentColor`.
- Main vein: #1A1A1A, .8px, round cap.
- Side veins: #1A1A1A, .4px, round cap, .5 opacity.
- Function: custom pointer or pointer trail.

This leaf is part of the same natural/classical vocabulary as the Chronicle branch, but it is not the same drawing system: the branch uses solid leaves, while the cursor leaf exposes vein detail.

## Chronicle pilaster

### Construction

- Type: one inline SVG stretched vertically; not a PNG.
- viewBox: 0 0 48 1000.
- SVG width attribute: 64px; outer CSS container width: 48px.
- Height: 100% of the experience list.
- Position: absolute, top 0, bottom 0, left -25px.
- Parent opacity: .5.
- `preserveAspectRatio:none`, allowing the shaft to stretch to the timeline height.

### Parts

```text
y 0–20: stepped capital
y 20–960: 30-unit shaft, centered from x9 to x39
y 960–1000: stepped base/plinth
```

### Fill and detail

- Horizontal linear gradient across the full width:
  - 0% #1A1A1A
  - 30% #2D2D2D
  - 50% #404040
  - 70% #2D2D2D
  - 100% #1A1A1A
- Five shaft grooves:
  - x13, x24, x35: .8px #0A0A0A
  - x19, x29: .4px #0A0A0A
- Capital/base assembled from rectangles and one shallow curved path.
- No texture image, transparency map or raster compression.

### Equivalent recreation

Build a new SVG with a 48×1000 coordinate system, a long stretchable shaft, symmetrical horizontal gradient and alternating groove weights. Keep capital and base within about 2% and 4% of total viewBox height respectively so stretching does not distort the architectural endpoints.

## Foundation pillar/card system

The Foundations cards use a different, wider pillar system assembled from multiple elements.

### Capital and base

- Type: inline SVG.
- viewBox: 200×55.
- `preserveAspectRatio:none`.
- Several stepped rectangles and shallow curved entablature path.
- Two gradient families are declared:
  - dark: #2A2A2A → #5A5A5A → #2A2A2A;
  - silver: #8A8A8A → #B8B8B8 → #8A8A8A.
- Repeated vertical grooves: .8px at roughly 18.5-unit intervals.
- Fine horizontal details: .5px at 30–50% opacity.

### Shaft/card body

- Inset: 10.5% from each side relative to the cap width.
- Border: 1px #E5E7EB at 30%; left/right edges overridden to 5px #8A8A8A.
- Background: linear-gradient(135deg,#151515,#0A0A0A).
- Padding: 40px.
- Shadow: inset 0 0 15px black 50%, 2px 2px 5px black 80%.
- Function: transforms a technology list into a monumental architectural object.

Create new capitals/bases with equivalent proportions but a distinct path language.

## Other inline ornaments

| Ornament | Geometry and style | Likely placement/function | Confidence |
|---|---|---|---|
| Greek meander divider | 1200×24 viewBox; 1.5px square-cap path; horizontal grey gradient .3→.8→.3; dasharray 6000 | Transition/divider on dark sections; draw-on animation | HIGH |
| Project temple/fronton | 120×50; dark strokes and rectilinear columns | Above Selected Works heading | HIGH |
| Library shelf/bookcase | about 100×60; grey shelves/columns with bronze accents | Above Library heading | HIGH |
| Small flourish | about 100×50; mirrored curls, arcs and fine .5–1px strokes | Section transition or card heading | HIGH geometry; MEDIUM placement |
| Principle orbit | 60×60; two concentric circles; outer dashed 2/1; three 3px satellites; 700ms rotating group | Principle/manifesto index | HIGH |
| Quill/feather | 60×60 viewBox; bronze/currentColor; 1.5px round strokes | Decorative contact/writing symbol, not confirmed cursor | HIGH geometry; MEDIUM placement |
| Skull/memento icon | 60×60; #F2F2F2 .5px outline; 700ms group scale | Footer/manifesto decoration | HIGH geometry; MEDIUM placement |
| Envelope | 32×32 rendered on 24×24 viewBox; 1.5px stroke; currentColor/bronze; 300ms color transition | Contact shortcut / navigation affordance | HIGH geometry; MEDIUM placement |
| Up arrow | 20×20; 2px currentColor | Scroll-to-top control | HIGH geometry; MEDIUM placement |
| Functional project icons | 14×14; 1.5–2px strokes or GitHub fill | Live demo, source code | HIGH |
| Foundation category icons | 32×32; white 1.5px stroke; 500ms scale | Card category identity | HIGH |
| Experience bullets | CSS diamonds 6×6, rotated 45° | Bullet marker | HIGH |

## Texture and background audit

### Light “paper” sections

No paper/noise image, SVG filter or repeating texture asset was found. Chronicles, Projects and Principle resolved to `background-color:#FFFFFF`. The global palette also includes #F2F2F2 and #F5F5F5, but the section-specific extraction returned white.

Therefore:

- raster paper texture: not detected;
- SVG grain filter: not detected;
- background-repeat texture: not detected;
- pseudo-element texture: not confirmed;
- likely cause of perceived paper: off-white adjacent surfaces, typography, thin ink lines, antialiasing and subtle runtime canvas/ambient overlays.

If a subtle paper effect is desired in a new implementation, generate a new 128×128 monochrome noise tile or an SVG `feTurbulence` overlay at 2–3% opacity with `mix-blend-mode:multiply`. That would be an equivalent technique, not a recovered source behavior.

### Dark sections

Confirmed techniques include:

- full-section canvas layers;
- radial ambient light at 3–15% opacity;
- dark diagonal card gradients;
- repeating bronze-line gradient at extremely low alpha;
- directional dark fade gradients;
- no detected photographic background.

## Image treatment

| Category | Ratio | Fit | Radius | Border/shadow | Hover |
|---|---|---|---|---|---|
| Hero object | intrinsic, bounded to 450px | contain | none | none; geometric overlay | 700ms transition; low-amplitude parallax |
| Project screenshot | 16:9 | cover | none | 1px silver 30%; inset black frame shadow | likely scale/contrast over 700ms |
| Library card | no image | n/a | none | dark inset/offset shadow | 500ms structural hover |

## Iconography rules

- Functional icons: 14–32px, 1.5–2px strokes, minimal geometry, `currentColor`, located next to text or controls.
- Decorative illustrations: 60–1200px viewBoxes, .4–1.5px strokes, controlled opacity, section-structural placement.
- The system avoids filled icon libraries except GitHub and small leaf/bullet shapes.
- No external icon-font or named icon library was confirmed. Treat the vectors as custom inline SVGs.
