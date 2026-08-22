import type { CSSProperties } from "react";

type OrnamentProps = {
  className?: string;
  style?: CSSProperties;
};

export function HeroWireframe({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M200 7 378 112l-16 278-162 103L38 390 22 112 200 7Z" />
      <path d="m200 7 74 88 104 17-68 93 52 185-162-50L38 390l52-185-68-93 104-17 74-88Z" />
      <path d="M126 95h148l36 110-110 135L90 205l36-110ZM22 112l178 228 178-228M38 390l162-50 162 50M200 7v486" />
      <circle cx="200" cy="205" r="110" />
      <circle cx="200" cy="205" r="72" />
      <path d="M90 205h220M126 95l74 245 74-245M38 390l52-185 110 288 110-288 52 185" />
    </svg>
  );
}

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

/* Mortarboard over a stack of books, for the studies block. */
export function ScholarMark({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 74h100v14H10zM18 60h84v14H18zM26 46h68v14H26z" />
      <path d="M10 81h100M18 67h84M26 53h68" />
      <path d="M18 74v14M102 74v14M26 60v14M94 60v14M34 46v14M86 46v14" />
      <path d="M60 10 12 27l48 14 48-14L60 10ZM60 41v5" />
      <path className="scholar-tassel" d="M108 27v17" />
      <path className="scholar-tassel" d="M104 44h8l-4 9-4-9ZM106 53v6M108 53v7M110 53v6" />
    </svg>
  );
}

/* Geometric line-art bust: a classical portrait rebuilt from facets, no fills. */
export function GeometricBust({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 560"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="bust-hair">
        <path d="M200 34 268 56l38 58 12 78-6 76 10 74 12 60" />
        <path d="M200 34 132 56 94 114l-12 78 6 76-10 74-12 60" />
        <path d="m132 56 24 42-38 60 26 44-22 56 20 64-14 62M268 56l-24 42 38 60-26 44 22 56-20 64 14 62" />
        <path d="m94 114 62 34M306 114l-62 34M82 192l38 26M318 192l-38 26M88 268l40-18M312 268l-40-18M78 342l46 8M322 342l-46 8" />
      </g>

      <g className="bust-face">
        <path d="M200 62 254 82l30 52 6 62-12 52-30 46-48 26-48-26-30-46-12-52 6-62 30-52 54-20Z" />
        <path d="M200 62v258M146 134h108M124 196h152M136 258h128M158 310h84" />
        <path d="m146 134 54-72 54 72M124 196l76-134 76 134M136 258l64-196 64 196" />
        <path d="M146 134 124 196l12 62 22 52M254 134l22 62-12 62-22 52" />
      </g>

      <g className="bust-features">
        <path d="m150 186 30-8 26 12-26 10-30-14ZM250 186l-30-8-26 12 26 10 30-14Z" />
        <path d="m200 170-14 74 14 14 14-14-14-74Z" />
        <path d="m174 274 26-10 26 10-26 16-26-16Z" />
        <path d="M152 160h34M214 160h34" />
      </g>

      <g className="bust-body">
        <path d="M176 300v54M224 300v54" />
        <path d="M176 354c-30 6-56 24-80 44l-36 28M224 354c30 6 56 24 80 44l36 28" />
        <path d="m176 354 24 20 24-20M200 374v94" />
        <path d="M60 426v42M340 426v42M60 468h280" />
        <path d="m96 442 104 38 104-38M140 462l60 16 60-16" />
      </g>

      <g className="bust-plinth">
        <path d="M96 468h208v34H96zM80 502h240v30H80zM66 532h268v24H66z" />
      </g>
    </svg>
  );
}
