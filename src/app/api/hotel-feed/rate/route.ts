import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const roomTypes = await prisma.roomType.findMany({
    orderBy: { basePrice: "asc" },
  });

  const today = new Date().toISOString().split("T")[0];

  const mapping: Record<string, { id: string; desc: string; min: number }> = {
    sencilla: { id: "SEN", desc: "Habitación sencilla con baño privado, WiFi y desayuno incluido", min: 1 },
    doble: { id: "DOB", desc: "Habitación doble con baño privado, WiFi y desayuno incluido", min: 1 },
    triple: { id: "TRI", desc: "Habitación triple con baño privado, WiFi y desayuno incluido", min: 2 },
    cuadruple: { id: "CUA", desc: "Habitación cuádruple con baño privado, WiFi y desayuno incluido", min: 3 },
  };

  const rows = roomTypes.map(rt => {
    const m = mapping[rt.slug] || { id: rt.slug.toUpperCase().slice(0, 3), desc: rt.description, min: 1 };
    return `HQBOG001,${m.id},${rt.name},"${m.desc}",${rt.capacity},${today},COP,${rt.basePrice},"Cancelación gratuita hasta 24 horas antes",${rt.capacity},${m.min}`;
  });

  const header = "hotel_id,room_id,room_name,room_description,room_capacity,rate_date,currency,price_per_night,cancellation_policy,max_occupancy,min_occupancy";
  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
