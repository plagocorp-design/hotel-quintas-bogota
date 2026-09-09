import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calcPrice } from "@/lib/availability";

export async function GET(req: NextRequest) {
  const checkInStr = req.nextUrl.searchParams.get("checkIn");
  const checkOutStr = req.nextUrl.searchParams.get("checkOut");
  const adults = Number(req.nextUrl.searchParams.get("adults") || 2);
  if (!checkInStr || !checkOutStr) return NextResponse.json({ error: "Faltan fechas" }, { status: 400 });
  const checkIn = new Date(checkInStr);
  const checkOut = new Date(checkOutStr);
  if (checkOut <= checkIn) return NextResponse.json({ error: "Fechas inválidas" }, { status: 400 });

  const types = await prisma.roomType.findMany();
  const result = [];
  for (const t of types) {
    if (t.capacity < adults) continue;
    const rooms = await prisma.room.findMany({ where: { typeId: t.id, status: { notIn: ["MANTENIMIENTO","BLOQUEADA"] } } });
    let availableCount = 0;
    for (const r of rooms) {
      const overlap = await prisma.reservation.findFirst({
        where: { roomId: r.id, status: { in: ["PENDIENTE","CONFIRMADA","CHECKIN"] }, checkIn: { lt: checkOut }, checkOut: { gt: checkIn } },
      });
      const blocked = await prisma.blockedDate.findFirst({ where: { roomId: r.id, start: { lt: checkOut }, end: { gt: checkIn } } });
      if (!overlap && !blocked) availableCount++;
    }
    const pricing = await calcPrice(t.id, checkIn, checkOut);
    result.push({
      roomType: { ...t, amenities: JSON.parse(t.amenities), images: JSON.parse(t.images) },
      available: availableCount,
      totalRooms: rooms.length,
      isAvailable: availableCount > 0,
      pricing,
    });
  }
  return NextResponse.json(result);
}
