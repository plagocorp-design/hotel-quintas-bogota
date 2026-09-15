import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const settings = await prisma.hotelSettings.findFirst();
  const prices = {
    sencilla: settings?.priceSencilla ?? 80000,
    doble: settings?.priceDoble ?? 90000,
    triple: settings?.priceTriple ?? 140000,
    cuadruple: settings?.priceCuadruple ?? 160000,
  };

  const today = new Date().toISOString().split("T")[0];

  const rooms = [
    { id: "SEN", name: "Sencilla", desc: "Habitación sencilla con baño privado, WiFi y desayuno incluido", cap: 1, price: prices.sencilla, min: 1 },
    { id: "DOB", name: "Doble", desc: "Habitación doble con baño privado, WiFi y desayuno incluido", cap: 2, price: prices.doble, min: 1 },
    { id: "TRI", name: "Triple", desc: "Habitación triple con baño privado, WiFi y desayuno incluido", cap: 3, price: prices.triple, min: 2 },
    { id: "CUA", name: "Cuádruple", desc: "Habitación cuádruple con baño privado, WiFi y desayuno incluido", cap: 4, price: prices.cuadruple, min: 3 },
  ];

  const header = "hotel_id,room_id,room_name,room_description,room_capacity,rate_date,currency,price_per_night,cancellation_policy,max_occupancy,min_occupancy";

  const rows = rooms.map(r =>
    `HQBOG001,${r.id},${r.name},"${r.desc}",${r.cap},${today},COP,${r.price},"Cancelación gratuita hasta 24 horas antes",${r.cap},${r.min}`
  );

  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
