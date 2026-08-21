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
          background: "#0d1218",
          border: "2px solid #9da8b5",
          color: "#edf1f5",
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
