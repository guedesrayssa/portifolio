import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a0a09",
          border: "2px solid #ad8b58",
          color: "#f1eee5",
          display: "flex",
          fontFamily: "serif",
          fontSize: 23,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        R.G.
      </div>
    ),
    size,
  );
}
