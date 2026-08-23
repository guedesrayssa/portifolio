import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0d1218",
          color: "#edf1f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg width="96" height="96" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 7c-11 0-19 8-19 19 0 6 2 10 6 13v5c0 3 2 5 5 5h16c3 0 5-2 5-5v-5c4-3 6-7 6-13 0-11-8-19-19-19Z"
            stroke="#edf1f5"
            strokeWidth="1.6"
          />
          <ellipse cx="21" cy="27" rx="5.5" ry="6" stroke="#edf1f5" strokeWidth="1.6" />
          <ellipse cx="39" cy="27" rx="5.5" ry="6" stroke="#edf1f5" strokeWidth="1.6" />
          <path d="m30 33-3.5 7h7L30 33Z" stroke="#edf1f5" strokeWidth="1.4" />
          <path d="M19 44h22M24 44v5M30 44v5M36 44v5" stroke="#edf1f5" strokeWidth="1.4" />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 74,
            letterSpacing: "-2px",
            marginTop: 46,
            textAlign: "center",
          }}
        >
          {site.name.toUpperCase()}
        </div>

        <div style={{ background: "#c4cdd7", height: 1, marginTop: 40, width: 140 }} />

        <div
          style={{
            color: "#9da8b5",
            display: "flex",
            fontSize: 26,
            letterSpacing: "14px",
            marginTop: 38,
          }}
        >
          {site.role.toUpperCase()}
        </div>
      </div>
    ),
    size,
  );
}
