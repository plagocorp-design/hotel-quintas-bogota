import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hotel Quintas de Bogotá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#C9A86A",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          QUINTAS DE BOGOTÁ
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#FFFFFF",
            marginTop: 16,
            letterSpacing: 8,
          }}
        >
          HOTEL
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#C9A86A",
            marginTop: 24,
          }}
        >
          ★ 8.8 Fabuloso · Teusaquillo · 7 min Embajada USA
        </div>
      </div>
    ),
    { ...size }
  );
}
