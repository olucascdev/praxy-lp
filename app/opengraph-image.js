import { ImageResponse } from "next/og";

export const alt = "Praxy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#050505", color: "#fafafa", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <div style={{ width: 64, height: 64, borderRadius: 18, background: "#ffff3c", display: "flex", alignItems: "center", justifyContent: "center", color: "#050505", fontSize: 42, fontWeight: 700 }}>P</div>
        <div style={{ display: "flex", fontSize: 124, fontWeight: 500, letterSpacing: -6 }}>praxy</div>
      </div>
    </div>,
    { ...size },
  );
}
