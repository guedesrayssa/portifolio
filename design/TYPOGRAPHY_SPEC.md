# Typography Specification

Technical snapshot: 2026-08-21. `HIGH` values came from rendered CSS or the font cascade. Values marked `ESTIMATED` are responsive recommendations because the source media-query rules were not exposed by the available snapshot.

## Font families

| Role | Family | Source | Loaded weights | Style | Fallback | Confidence |
|---|---|---|---|---|---|---|
| Display | Cinzel Decorative | Google Fonts CSS; WOFF2 from `fonts.gstatic.com` | 400, 700, 900 | normal; no italic file detected | serif | HIGH |
| Editorial/meta | Cinzel | Google Fonts CSS; WOFF2 from `fonts.gstatic.com` | 400, 700 | normal; no italic file detected | serif | HIGH |
| Body/UI | Inter | Google Fonts CSS; WOFF2 from `fonts.gstatic.com` | 200, 300, 400, 600 | normal; no italic file detected | sans-serif | HIGH |

Observed stylesheet request:

```text
family=Cinzel Decorative:400,700,900
family=Cinzel:400,700
family=Inter:200,300,400,600
display=swap
```

The files are static weight-specific WOFF2 resources, not a single confirmed variable-font file.

## Type roles

| Style | Family | Desktop | Tablet | Mobile | Weight | Line height | Tracking | Case | Color | Confidence |
|---|---|---:|---:|---:|---:|---:|---:|---|---|---|
| Hero monumental display | Cinzel Decorative | 112px | 80–96px `ESTIMATED` | `clamp(48px,15vw,72px)` `ESTIMATED` | 400 | 1 | -0.05em | uppercase content | #FFFFFF | desktop HIGH |
| Hero name | Cinzel | 36px | 32px `ESTIMATED` | 24–28px `ESTIMATED` | 400 | 40px | 0.50em | uppercase | #FFFFFF | desktop HIGH |
| Hero role | Cinzel | 20px | 18px `ESTIMATED` | 14–16px `ESTIMATED` | 400 | 28px | 0.50em | uppercase | #F2F2F2 | desktop HIGH |
| Section title | Cinzel Decorative | 36px | 32–36px `ESTIMATED` | 28–32px `ESTIMATED` | 400 | 40px | section-specific: -0.05em or 0.10em | mixed/uppercase | contextual | desktop HIGH |
| Contact title | Cinzel Decorative | 48px | 40px `ESTIMATED` | 36px `ESTIMATED` | 400 | 1 | normal | sentence case | #F2F2F2 | desktop HIGH |
| Rotating principle | Cinzel Decorative | 72px | 56–64px `ESTIMATED` | 40–48px `ESTIMATED` | 400 | 1 | normal | uppercase | #1A1A1A | desktop HIGH |
| Experience role | Cinzel | 24px | 22–24px `ESTIMATED` | 20px `ESTIMATED` | 400 | 32px | normal | title case | #101010 | desktop HIGH |
| Foundation card title | Cinzel Decorative | 24px | 22–24px `ESTIMATED` | 22px `ESTIMATED` | 400 | 32px | normal | title case | #FFFFFF | desktop HIGH |
| Project title | Cinzel Decorative | 20px | 20px | 18–20px `ESTIMATED` | 400 | 28px | normal | title case | #101010 | desktop HIGH |
| Company/date meta | Cinzel | 12–14px | 12–14px | 11–12px `ESTIMATED` | 400 | 16–20px | 0.10em | uppercase | #4B5563 | desktop HIGH |
| Section eyebrow/quote | Cinzel | 14px | 13–14px | 11–12px `ESTIMATED` | 400 | 20px | 0.30–0.40em | uppercase | contextual | desktop HIGH |
| Body copy | Inter | 14px | 14px | 14px | 300/400 | 1.625 | normal | sentence case | #374151 / #D1D5DB | HIGH |
| Manifesto body | Inter | 16px inherited | 15–16px `ESTIMATED` | 14px `ESTIMATED` | 300 | 1.5 | normal | sentence case | #D1D5DB | MEDIUM |
| Project body | Inter | 14px | 14px | 14px | 400 | 1.625 | normal | sentence case | #4B5563 | HIGH |
| Social/link label | Inter or Cinzel by context | 12–14px | same | 11–12px `ESTIMATED` | 400 | 16–20px | 0.10–0.20em | uppercase | contextual | HIGH |
| Foundation skill label | Cinzel | 11px | 11px | 10–11px `ESTIMATED` | 400 | normal | 0.20em | uppercase | #9CA3AF | HIGH |
| Project tag | Inter | 10px | 10px | 9–10px | 400 | normal | 0.15em | uppercase | #374151 | HIGH |
| Experience tag | Inter | 9px | 9px | 9px | 400 | normal | 0.20em | uppercase | #374151 | HIGH |
| Hero descend / captions | Cinzel | 10px | 10px | 10px | 400 | normal | 0.10em | uppercase | inherited | HIGH |
| Footer/meta microcopy | Inter/Cinzel | 10–12px `ESTIMATED` | same | 10px `ESTIMATED` | 300/400 | 1.5 `ESTIMATED` | 0.10–0.20em `ESTIMATED` | mixed | muted paper | LOW |

## Tracking system

The interface relies on letter spacing more heavily than font-weight changes.

| Token | Value | Confirmed uses |
|---|---:|---|
| `tracking-display-tight` | -0.05em | Hero display; Foundations title |
| `tracking-heading` | 0.10em | Chronicles heading, links, dates, company labels, descend |
| `tracking-project-tag` | 0.15em | Project technology tags |
| `tracking-label` | 0.20em | Experience tags, skill labels, submit button |
| `tracking-subtitle` | 0.30em | Contact subtitle; manifesto column headings |
| `tracking-eyebrow` | 0.40em | Foundations quotation/subtitle |
| `tracking-hero-meta` | 0.50em | Hero name and role; rotating ordinal |

Do not apply 0.40–0.50em to long sentences. It works only on short labels and requires extra right padding or optical compensation because CSS tracking adds space after the last glyph.

## Hierarchy rules

1. Cinzel Decorative carries identity and monumental hierarchy; it should not be used for paragraphs.
2. Cinzel connects display typography to metadata without making dates and labels look like generic UI.
3. Inter handles all sustained reading, technical descriptions and form behavior.
4. Weight remains restrained. Large scale, tracking, case and contrast create hierarchy.
5. Headings usually sit directly on the section background; card headers are reserved for the column/pillar motif.
6. Dark sections use #F2F2F2 rather than pure white for secondary display text; pure white is reserved for maximum emphasis.

## Implementation

```css
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;700&family=Inter:wght@200;300;400;600&display=swap");

.type-display {
  font-family: "Cinzel Decorative", serif;
  font-size: var(--text-display-xl);
  line-height: 1;
  letter-spacing: -0.05em;
}

.type-section-title {
  font-family: "Cinzel Decorative", serif;
  font-size: var(--text-heading-xl);
  line-height: 2.5rem;
}

.type-meta {
  font-family: "Cinzel", serif;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.type-body {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.625;
}
```

## Accessibility notes

- Tracking above 0.30em can become tiring. Keep it to short strings and never use it for body content.
- Several labels are 9–11px. Preserve the visual scale only for nonessential tags; functional controls should reach at least 12–14px and a 44px hit target.
- Do not encode heading level through size alone. Keep one `h1`, then logical `h2`/`h3` order even when the visual style differs.
- Ensure muted dark-section text meets WCAG contrast. `#9CA3AF` on `#101010` is acceptable for normal text; alpha whites below 50% should be treated as decorative or enlarged.
- Fonts use `display=swap`; set fallback metrics or `font-size-adjust` to limit layout shift.
