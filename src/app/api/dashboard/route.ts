import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  const today = new Date(); today.setHours(0,0,0,0);
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1);
  const startMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const [totalRooms, occupiedRooms, todayCheckIns, todayCheckOuts, pendingReservations, monthReservations, bySource, recent] = await Promise.all([
    prisma.room.count(),
    prisma.room.count({ where: { status: "OCUPADA" } }),
    prisma.reservation.count({ where: { checkIn: { gte: today, lt: tomorrow }, status: { not: "CANCELADA" } } }),
    prisma.reservation.count({ where: { checkOut: { gte: today, lt: tomorrow }, status: "CHECKIN" } }),
    prisma.reservation.findMany({ where: { status: { in: ["PENDIENTE","CONFIRMADA"] }, checkIn: { gte: today } }, take: 5, orderBy: { checkIn: "asc" }, include: { guest: true, room: true, roomType: true } }),
    prisma.reservation.findMany({ where: { createdAt: { gte: startMonth }, status: { not: "CANCELADA" } } }),
    prisma.reservation.groupBy({ by: ["source"], _count: { source: true } }),
    prisma.reservation.findMany({ take: 5, orderBy: { createdAt: "desc" }, include: { guest: true, room: true } }),
  ]);

  const occupationPct = totalRooms ? Math.round((occupiedRooms/totalRooms)*100) : 0;
  const ingresosMes = monthReservations.reduce((s,r)=> s + r.totalPrice, 0);

  // disponibilidad por habitación hoy
  const rooms = await prisma.room.findMany({ include: { type: true } });

  return NextResponse.json({
    totalRooms, occupiedRooms, occupationPct,
    todayCheckIns, todayCheckOuts,
    ingresosMes, monthReservations: monthReservations.length,
    bySource,
    pendingReservations,
    recent,
    rooms: rooms.map(r=> ({ ...r, type: { ...r.type, amenities: JSON.parse(r.type.amenities) } })),
  });
}
