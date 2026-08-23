import type { CSSProperties } from "react";

type OrnamentProps = {
  className?: string;
  style?: CSSProperties;
};

export function BotanicalBranch({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 49c21-1 37-11 50-32 13 21 29 31 50 32" />
      <path d="M60 17v34" />
      <path d="M21 44c-3-11 2-17 13-19 1 10-3 16-13 19ZM35 37c-1-11 5-16 16-16-1 10-6 15-16 16ZM99 44c3-11-2-17-13-19-1 10 3 16 13 19ZM85 37c1-11-5-16-16-16 1 10 6 15 16 16Z" />
      <path d="M52 14c0-7 3-11 8-13 5 2 8 6 8 13l-8 8-8-8Z" />
      <circle cx="60" cy="51" r="3" />
    </svg>
  );
}

export function PillarCap({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 55"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7h192v7H4zM14 14h172v8H14zM29 22h142v8H29z" />
      <path d="M39 30c15 0 20 12 20 20h82c0-8 5-20 20-20" />
      <path d="M28 50h144M74 30v20M126 30v20" />
      <circle cx="55" cy="34" r="4" />
      <circle cx="145" cy="34" r="4" />
    </svg>
  );
}

export function PillarBase({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 55"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M39 4h122v9H39zM29 13h142v8H29zM19 21h162v10H19zM8 31h184v9H8zM2 40h196v13H2z" />
      <path d="M14 46h172" />
    </svg>
  );
}

/* Greek meander (key) band, generated so every hook is geometrically exact.
   Even units rise from the lower rail, odd units drop from the upper rail,
   which produces the interlaced reading of a classical fret. */
const MEANDER_UNIT = 24;
const MEANDER_UNITS = 54;
export const MEANDER_WIDTH = MEANDER_UNIT * MEANDER_UNITS;

const meanderKeys = Array.from({ length: MEANDER_UNITS }, (_, index) => {
  const x = index * MEANDER_UNIT;
  return index % 2 === 0
    ? `M${x + 3} 22V8H${x + 21}V17H${x + 11}V12`
    : `M${x + 3} 2V16H${x + 21}V7H${x + 11}V12`;
}).join("");

export function MeanderDivider({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${MEANDER_WIDTH} 24`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path className="meander-rail" d={`M0 2h${MEANDER_WIDTH}M0 22h${MEANDER_WIDTH}`} />
      <path className="meander-key" d={meanderKeys} />
    </svg>
  );
}

export function OrbitEmblem({ className, style }: OrnamentProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="30" cy="30" r="19" />
      <circle cx="30" cy="30" r="3" />
      <circle cx="30" cy="11" r="2.4" />
      <circle cx="46.5" cy="39.5" r="2.4" />
      <circle cx="13.5" cy="39.5" r="2.4" />
      <path d="M30 4v5M52 42l-4-2M8 42l4-2" />
    </svg>
  );
}

/* Foundations emblem: stepped plinth, shaft and plumb line — the integrity of the base. */
export function FoundationEmblem({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 8h24M15 12h30M21 12v26M39 12v26" />
      <path d="M25 16v18M35 16v18M30 16v18" />
      <path d="M15 38h30M11 42h38M7 47h46M3 52h54" />
      <path d="M30 3v5" />
      <circle cx="30" cy="12" r="2.4" />
      <path d="M30 45v6" />
      <path d="m27 51 3 5 3-5H27Z" />
    </svg>
  );
}

/* Memento mori mark for the footer. */
export function MementoSkull({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M30 7c-11 0-19 8-19 19 0 6 2 10 6 13v5c0 3 2 5 5 5h16c3 0 5-2 5-5v-5c4-3 6-7 6-13 0-11-8-19-19-19Z" />
      <ellipse cx="21" cy="27" rx="5.5" ry="6" />
      <ellipse cx="39" cy="27" rx="5.5" ry="6" />
      <path d="m30 33-3.5 7h7L30 33Z" />
      <path d="M19 44h22M24 44v5M30 44v5M36 44v5" />
    </svg>
  );
}

/* Library shelf that identifies the Selected Works gallery. */
export function LibraryShelf({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="shelf-frame" d="M3 3h94v54H3z" />
      <path className="shelf-frame" d="M3 30h94M3 12h94M3 51h94" />
      <g className="shelf-books">
        <path d="M10 15h5v14h-5zM17 15h3v14h-3zM22 17h6v12h-6z" />
        <path className="shelf-accent" d="M30 14h4v15h-4z" />
        <path d="M36 18h5v11h-5zM43 15h3v14h-3z" />
        <path d="m49 29 3-13 3 1-2 12z" />
        <path d="M58 16h6v13h-6zM66 18h3v11h-3z" />
        <path className="shelf-accent" d="M71 15h4v14h-4z" />
        <path d="M77 17h6v12h-6zM85 15h4v14h-4z" />
        <path d="M10 34h4v16h-4zM16 36h6v14h-6z" />
        <path className="shelf-accent" d="M24 33h3v17h-3z" />
        <path d="M29 36h5v14h-5zM36 34h3v16h-3zM41 37h6v13h-6z" />
        <path d="m53 50-3-14 3-1 3 14z" />
        <path d="M58 35h5v15h-5zM65 37h4v13h-4z" />
        <path className="shelf-accent" d="M71 34h5v16h-5z" />
        <path d="M78 36h3v14h-3zM83 34h6v16h-6z" />
      </g>
      <path className="shelf-frame" d="M0 57h100M6 60h88" />
    </svg>
  );
}

/* Folded letter closed with a wax seal, for the contact invitation. */
export function SealedLetter({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 130"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="letter-sheet" d="M22 6h96v112H22z" />
      <path className="letter-fold" d="M22 46h96M22 84h96" />
      <path className="letter-lines" d="M36 20h68M36 28h68M36 36h46M36 60h68M36 68h40M36 100h52M36 108h34" />
      <g className="letter-seal">
        <circle cx="70" cy="84" r="13" />
        <circle cx="70" cy="84" r="8.5" />
        <path d="M70 76v16M62 84h16M64.4 78.4l11.2 11.2M75.6 78.4 64.4 89.6" />
      </g>
    </svg>
  );
}

/* 18x36 leaf used by the pointer and by its falling petals. */
export function CursorLeaf({ className, style }: OrnamentProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 18 36"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="leaf-body"
        d="M9 0C3.4 8.2.4 15 .4 21.6.4 28.6 4 33.6 9 36c5-2.4 8.6-7.4 8.6-14.4C17.6 15 14.6 8.2 9 0Z"
      />
      <path className="leaf-vein" d="M9 3.5V33" />
      <path
        className="leaf-vein-side"
        d="M9 12 3.6 9M9 12l5.4-3M9 19.5 3.4 16.6M9 19.5l5.6-2.9M9 26.5 4.2 24M9 26.5 13.8 24"
      />
    </svg>
  );
}

/* Open book with a ribbon marker, for the studies block. The two leaves are drawn as
   closed curves that meet at the spine, so the fold reads from the geometry rather than
   from a seam line; the block below each leaf gives the pages their thickness. */
export function ScholarMark({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M60 30C50 22 34 18 16 19v38c18-1 34 3 44 11Z" />
      <path d="M60 30c10-8 26-12 44-11v38c-18-1-34 3-44 11Z" />
      <path d="M16 57v4c18-1 34 3 44 11M104 57v4c-18-1-34 3-44 11" />
      <g className="scholar-lines">
        <path d="M26 34c9-3 18-2 26 2M26 42c9-3 18-2 26 2M26 50c9-3 18-2 26 2" />
        <path d="M94 34c-9-3-18-2-26 2M94 42c-9-3-18-2-26 2M94 50c-9-3-18-2-26 2" />
      </g>
      <g className="scholar-tassel">
        <path d="M60 72v10" />
        <path d="M55 82h10l-5 6-5-6Z" />
      </g>
    </svg>
  );
}

/* An almond leaf pointing along `angle`, used to build laurel sprigs. */
function leafPath(x: number, y: number, angle: number, length: number, width: number) {
  const round = (n: number) => Math.round(n * 10) / 10;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const px = -dy;
  const py = dx;
  const tip = [x + dx * length, y + dy * length];
  const c1 = [x + dx * length * 0.4 + px * width, y + dy * length * 0.4 + py * width];
  const c2 = [x + dx * length * 0.4 - px * width, y + dy * length * 0.4 - py * width];
  return (
    `M${round(x)} ${round(y)}` +
    `Q${round(c1[0])} ${round(c1[1])} ${round(tip[0])} ${round(tip[1])}` +
    `Q${round(c2[0])} ${round(c2[1])} ${round(x)} ${round(y)}Z`
  );
}

const LAUREL_SPRIGS = [-1, 1].flatMap((side) =>
  Array.from({ length: 5 }, (_, index) => {
    const step = index / 4;
    const x = 90 + side * (16 + step * 62);
    const y = 24 - step * 9;
    const lean = side === -1 ? Math.PI : 0;
    return [
      leafPath(x, y, lean + side * -0.62, 17 - step * 3, 5.2 - step * 0.7),
      leafPath(x, y + 3, lean + side * 0.5, 15 - step * 3, 4.6 - step * 0.6),
    ];
  }).flat(),
);

const LAUREL_STEMS = [
  "M84 24C64 27 40 24 14 15",
  "M96 24c20 3 44 0 70-9",
];

/* Laurel flourish that closes a section heading. */
export function LaurelFlourish({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 44"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="laurel-stem">
        {LAUREL_STEMS.map((d) => (
          <path d={d} key={d} />
        ))}
      </g>
      <g className="laurel-leaves">
        {LAUREL_SPRIGS.map((d, index) => (
          <path d={d} key={d} style={{ animationDelay: `${index * 45}ms` }} />
        ))}
      </g>
      <g className="laurel-boss">
        <circle cx="90" cy="24" r="5" />
        <path d="M90 15v18M81 24h18" />
      </g>
    </svg>
  );
}

/* Egg-and-dart band, the second divider motif. */
const EGG_UNIT = 30;
const EGG_UNITS = 40;
export const EGG_WIDTH = EGG_UNIT * EGG_UNITS;

const eggAndDart = Array.from({ length: EGG_UNITS }, (_, index) => {
  const x = index * EGG_UNIT;
  const oval = (cx: number, rx: number, ry: number) =>
    `M${cx - rx} 13C${cx - rx} ${13 - ry * 0.75} ${cx - rx * 0.55} ${13 - ry} ${cx} ${13 - ry}` +
    `C${cx + rx * 0.55} ${13 - ry} ${cx + rx} ${13 - ry * 0.75} ${cx + rx} 13` +
    `C${cx + rx} ${13 + ry * 0.75} ${cx + rx * 0.55} ${13 + ry} ${cx} ${13 + ry}` +
    `C${cx - rx * 0.55} ${13 + ry} ${cx - rx} ${13 + ry * 0.75} ${cx - rx} 13Z`;
  return `${oval(x + 11, 8, 9)}${oval(x + 11, 5, 5.6)}M${x + 25} 3l3 9-3 10-3-10z`;
}).join("");

export function EggAndDartDivider({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${EGG_WIDTH} 26`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path className="meander-rail" d={`M0 1h${EGG_WIDTH}M0 25h${EGG_WIDTH}`} />
      <path className="meander-key" d={eggAndDart} />
    </svg>
  );
}

/* Corinthian capital: acanthus and volutes above the contact invitation. */
export function CorinthianCapital({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 170 86"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 4h162v11H4zM14 15h142" />
      <path d="M28 15c0 20 9 34 24 41M142 15c0 20-9 34-24 41" />
      <path d="M26 20C16 24 13 34 21 40C28 45 36 41 37 34C38 28 33 25 28 27" />
      <path d="M144 20c10 4 13 14 5 20-7 5-15 1-16-6-1-6 4-9 9-7" />
      <path d="M62 15c-3 22 3 40 23 54 20-14 26-32 23-54" />
      <path d="M46 22c-3 18 2 34 16 45M124 22c3 18-2 34-16 45" />
      <path d="M85 32v38M74 43c5 7 8 15 8 25M96 43c-5 7-8 15-8 25" />
      <path d="M40 70h90M30 70h110M36 78h98" />
      <circle cx="85" cy="24" r="4" />
    </svg>
  );
}
