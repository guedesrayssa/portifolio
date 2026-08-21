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

export function TimelinePilaster({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 1h40v7H4zM8 8h32v7H8zM12 15h24v12H12z" />
      <path d="M14 27h20v936H14z" />
      <path d="M18 30v930M22 30v930M26 30v930M30 30v930" />
      <path d="M12 963h24v12H12zM8 975h32v9H8zM4 984h40v15H4z" />
      <path d="M0 999h48" />
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

export function MeanderDivider({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 24"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path pathLength="1" d="M0 3h1200M0 21h1200" />
      <path
        pathLength="1"
        d="M0 7h22v10H8V11h28v6H22V7h28v10H36V11h28v6H50V7h28v10H64V11h28v6H78V7h28v10H92V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14V7h28v10h-14V11h28v6h-14"
      />
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

export function LibraryMark({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 52h90M11 46h78M17 40h66M22 40V20h56v20" />
      <path d="m19 20 31-14 31 14H19ZM31 23v14M43 23v14M57 23v14M69 23v14" />
      <circle cx="50" cy="15" r="3" />
    </svg>
  );
}
