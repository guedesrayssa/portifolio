# Motion and Interaction Specification

Snapshot date: 2026-08-21. CSS-resolved animation values are `HIGH`. Pointer behavior and hidden runtime logic could not be exercised because the live browser endpoint returned a temporary 502; those entries are explicitly marked `ESTIMATED`.

## Motion principles

1. Motion is slow and ceremonial, not bouncy UI decoration.
2. Reveal distance is small—usually 20–30px—while opacity does most of the work.
3. Monumental assets scale in rather than slide across the page.
4. Ornament paths draw themselves to establish section boundaries.
5. Hover motion uses 500–800ms, substantially slower than the 150ms color response.
6. Timed manifesto motion is ambient and cyclical; it never asks for urgent attention.

## Motion tokens

| Token | Value | Use | Confidence |
|---|---:|---|---|
| instant | 50ms | Skill-row stagger increment / pointer trail timing | HIGH for stagger; LOW for cursor |
| fast | 150ms | Link color, input border/label | HIGH |
| base | 300ms | Buttons, CTA corner marks | HIGH |
| medium | 500ms | Card content, headings, general hover | HIGH |
| slow | 700ms | Images, filtered card overlays | HIGH |
| structural | 800ms | 3D pillar transform | HIGH |
| hero entrance | 1500ms | Bust scale entrance | HIGH |
| principle interval | 4000ms | Progress bar / slide timing | HIGH |
| breathe | 5000ms | Principle heading | HIGH |
| standard easing | cubic-bezier(.4,0,.2,1) | Most transitions | HIGH |
| enter easing | cubic-bezier(.33,1,.68,1) | Hero entrance | HIGH |
| editorial easing | cubic-bezier(.23,1,.32,1) | Pillar 3D movement | HIGH |
| spring easing | cubic-bezier(.34,1.56,.64,1) | Occasional flourish | MEDIUM |

## Page load and hero

### Bust entrance

```text
Trigger: initial mount
Initial: opacity 0; scale .8
Final: opacity 1; scale 1
Duration: 1.5s
Delay: .2s
Easing: cubic-bezier(.33,1,.68,1)
Fill: forwards
```

This is directly confirmed by the resolved `bust-entrance` keyframe.

### Hero geometry

The wireframe SVG paths expose a total dash length around 1121.11 and resolve to `stroke-dashoffset:0` in the captured final state. A draw-on entrance from full dash offset to zero is `MEDIUM` confidence; the initial state was not captured. Reconstruct with 1.2–1.5s ease-out and synchronize it with the bust.

### Hero parallax

The captured bust wrapper was translated about -7.8px vertically and the ambient circle was at scale about .995. This indicates low-amplitude runtime motion, probably scroll- or pointer-linked. Use a maximum 8–12px translation and 0.98–1.03 scale range (`ESTIMATED`). Do not move the title independently enough to break its lockup with the bust.

### Hero text

Each display letter is wrapped independently and resolves at `opacity:1; translateY(0)`. That DOM structure is consistent with staggered character reveal. The exact initial delay sequence was not exposed. Reconstruct with:

```text
Initial: opacity 0; translateY(20–30px)
Final: opacity 1; translateY(0)
Duration: 700–900ms
Stagger: 30–50ms per character
Easing: enter/editorial
```

Status: `ESTIMATED` behavior, `HIGH` individual-letter structure.

## Scroll reveal system

Several contact elements were captured mid-animation at opacity values .88, .67, .45, .16 and translations of about 5, 10, 16 and 25px, while later elements remained at opacity 0 / translateY(30px. This supports a staggered reveal with a 30px starting offset.

Recommended reconstruction:

```text
Trigger: IntersectionObserver, threshold .12–.20
Initial: opacity 0; translateY(30px)
Final: opacity 1; translateY(0)
Duration: 800ms
Stagger: 100–150ms
Easing: cubic-bezier(.23,1,.32,1)
Once: true
```

Chronicle items resolve from `translateX` states, so use a restrained horizontal reveal:

```text
Initial: opacity 0; translateX(24px)
Final: opacity 1; translateX(0)
Duration: 700–900ms
Stagger: 100ms per item
```

The exact trigger settings are `ESTIMATED`; the final-state transforms are `HIGH`.

## Foundation cards

### Structural hover

Confirmed base:

```text
transform: rotateY(0) rotateX(0) scale(1)
transition: transform .8s cubic-bezier(.23,1,.32,1)
```

The card contains a hidden full-surface layer with:

```text
filter: contrast(150%) brightness(20%) sepia(50%) hue-rotate(-10deg)
opacity: 0
transition: opacity .7s standard
```

Likely hover/fine-pointer response (`MEDIUM`):

- small perspective tilt following pointer position;
- maximum rotation about ±3° to ±5°;
- scale 1.01–1.02;
- filtered decorative layer fades from 0 toward .25–.4;
- card emblem opacity increases from .7;
- skill labels and 6px dots brighten;
- 4px progress line animates from width 0 to 100% over 1s.

Skill rows use confirmed 50ms stagger steps from 0ms through 400ms. Content transitions use 500ms standard easing.

### Pillar hover pseudocode

```js
onPointerMove(card, pointer) {
  if (!finePointer || reducedMotion) return;
  const nx = normalize(pointer.x, card.left, card.width, -1, 1);
  const ny = normalize(pointer.y, card.top, card.height, -1, 1);
  card.rotateY = nx * 4;       // ESTIMATED amplitude
  card.rotateX = -ny * 3;      // ESTIMATED amplitude
  card.scale = 1.015;          // ESTIMATED
}

onPointerLeave(card) {
  animateTo({ rotateX: 0, rotateY: 0, scale: 1 }, 800, editorialEase);
}
```

## Project interactions

| Element | Initial | Hover/focus | Duration | Easing | Confidence |
|---|---|---|---:|---|---|
| Project media frame | scale 1, 1px silver border | frame/child image likely scales 1.02–1.05; border/contrast increases | 700ms | standard | base HIGH; delta MEDIUM |
| Project inline link | #101010, uppercase | likely opacity/color shift and icon translation 2–4px | 150–300ms | standard | LOW |
| Main project CTA | transparent, 2px dark border, four 8px corner marks | likely dark fill/light text; corner marks expand or retract | 500ms; corners 300ms | standard | base HIGH; delta MEDIUM |
| GitHub/LinkedIn hero links | paper at 60% | paper/white at full opacity | 150ms | standard | HIGH |

All interactive elements need equivalent `:focus-visible` states; do not make the custom cursor the only feedback.

## Library rail

- Vertical page scroll is native.
- Library rail uses native horizontal overflow with `scroll-snap-type:x mandatory`.
- Each 280px card uses `scroll-snap-align:start`.
- Scrollbar is hidden with `scrollbar-width:none` in the captured implementation.
- Arrow controls are 48×48px, transparent, 1px paper border at 30%, 150ms transition.
- Card transition is 500ms standard. A small lift, border brightening or shadow increase is likely but not directly captured (`MEDIUM`).

Use native `element.scrollBy({left:328,behavior:'smooth'})` or equivalent. Respect reduced motion by switching to `behavior:'auto'`.

## Rotating principle

Two independent keyframes are confirmed.

```css
@keyframes principle-breathe {
  0%, 100% { opacity: .4; transform: scale(1); }
  50% { opacity: .8; transform: scale(1.02); }
}

@keyframes principle-progress {
  from { width: 0; }
  to { width: 100%; }
}
```

Settings:

```text
Heading: 5s ease-in-out infinite
Progress: 4s linear forwards
Slide/ordinal opacity transition: .5s
```

The orbital SVG has a group with `transition-transform:700ms ease-out; transform-origin:center`. On slide change, rotate it by 120° for three principles (`MEDIUM`, inferred from three satellite points).

## Contact interactions

Controls use underline-only borders. Confirmed base:

```text
control: transparent background; 1px bottom border rgba(242,242,242,.30)
label: absolute left 0 top 16px; 12px Cinzel; tracking .1em; paper at 50%
transition: 150ms standard
```

Recommended focus/fill behavior (`MEDIUM`): label moves to `top:-6px`, scales to 10px and becomes #F2F2F2; border reaches full paper or bronze. Preserve a visible outline or use a 2px bottom border to satisfy keyboard focus requirements.

Submit button base is 1px paper border, 48px horizontal and 16px vertical padding, 300ms standard transition. Use paper fill with #101010 text on hover/focus (`ESTIMATED` but consistent with the system).

## Ornament path animation

Greek meander SVG:

```text
viewBox: 0 0 1200 24
stroke-width: 1.5
stroke-linecap: square
stroke-dasharray: 6000
captured offsets: +6000 and -6000 variants
gradient opacity: .3 → .8 → .3
```

Animate dash offset from ±6000 to 0 when the divider enters the viewport. Use 1.4–2.5s ease-in-out; the exact rule was not exposed (`MEDIUM`).

## Custom cursor: leaf, not the quill ornament

### Confirmed asset geometry

The pointer-related inline SVG is a 18×36px leaf:

```text
viewBox: 0 0 18 36
filled silhouette: currentColor
central vein: #1A1A1A, stroke .8, round cap
side veins: #1A1A1A, stroke .4, opacity .5, round cap
```

A separate 60×60px quill/feather SVG with 1.5px round strokes exists in the decorative icon system. It should not be conflated with the 18×36 leaf. High global z-index tokens (99999 and 100000) and an inline SVG strongly indicate a DOM cursor/trail rather than `cursor:url()` (`MEDIUM`).

### Behavior confidence

| Question | Finding | Confidence |
|---|---|---|
| Native cursor hidden? | Likely on fine pointers, but no `cursor:none` rule was recovered | LOW |
| `cursor:url()`? | Unlikely; inline leaf SVG and high overlay z-index point to DOM | MEDIUM |
| Element size | 18×36px source viewBox | HIGH |
| Hotspot | Near leaf tip or stem, offset about 9×0 or 9×4px | LOW |
| Smoothing | Likely `requestAnimationFrame` lerp | LOW |
| Rotation | Likely aligns partially to velocity vector | LOW |
| Links/buttons | Likely scale/bronze/color response | LOW |
| Mobile | Should disappear for `pointer:coarse` | implementation requirement; source LOW |

### Reconstruction pseudocode

```js
if (matchMedia('(pointer:fine)').matches && !reducedMotion) {
  hideNativeCursor();                    // only after custom cursor is mounted
  let target = { x: 0, y: 0 };
  let current = { x: 0, y: 0 };
  let angle = 0;

  onPointerMove(event => {
    target = { x: event.clientX, y: event.clientY };
  });

  frame(() => {
    const previous = { ...current };
    current.x += (target.x - current.x) * 0.14; // ESTIMATED lerp
    current.y += (target.y - current.y) * 0.14; // ESTIMATED lerp
    const velocity = { x: current.x - previous.x, y: current.y - previous.y };
    const desired = atan2(velocity.y, velocity.x) + leafAxisCorrection;
    angle = lerpAngle(angle, desired, 0.10);     // ESTIMATED
    renderLeaf(current.x - 9, current.y - 4, angle);
  });

  onInteractiveEnter(() => setCursorState({ scale: 1.15, color: bronze }));
  onInteractiveLeave(() => setCursorState({ scale: 1, color: contextual }));
} else {
  showNativeCursor();
  unmountCustomCursor();
}
```

Do not suppress the native cursor until the DOM cursor has mounted. Never use a delayed trail for form inputs because it reduces precision.

## Scroll system and libraries

- No Lottie files were detected.
- No `scroll-behavior` rule was found in the extracted CSS.
- Vertical snap was not detected.
- Native vertical scroll plus IntersectionObserver-style reveals is the best-supported model (`MEDIUM`).
- Nuxt/Vue is strongly indicated by scoped `data-v-*` attributes.
- Tailwind-style utility output is strongly indicated by classes and computed values.
- GSAP, Lenis, locomotive-scroll, Anime.js, Motion One and Framer Motion were not confirmed. Do not add them unless needed.

## Reduced-motion behavior

The source reduced-motion implementation was not confirmed. A faithful accessible reconstruction must:

- disable custom cursor smoothing and trails;
- turn hero reveal into a simple 150ms opacity change;
- disable pointer parallax and 3D tilt;
- stop the breathing animation;
- expose manual controls for the rotating principle and pause automatic rotation;
- turn horizontal rail scrolling from smooth to instant;
- keep all content visible without requiring animation completion.
