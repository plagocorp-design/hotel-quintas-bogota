import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { findAvailableRoom, calcPrice } from "@/lib/availability";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(7),
  checkIn: z.string(),
  checkOut: z.string(),
  adults: z.coerce.number().min(1).max(6),
  children: z.coerce.number().min(0).max(4).default(0),
  roomTypeId: z.string().optional(),
  roomTypeSlug: z.string().optional(),
  source: z.string().optional().default("WEB"),
  notes: z.string().optional(),
});

// Punta a punta: crea Guest (upsert), verifica disponibilidad real, asigna Room, crea Reservation en transacción, bloquea calendario.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    const checkIn = new Date(parsed.checkIn);
    const checkOut = new Date(parsed.checkOut);
    if (checkOut <= checkIn) return NextResponse.json({ error: "Check-out debe ser posterior a check-in" }, { status: 400 });

    // Resolver roomType
    let roomTypeId = parsed.roomTypeId;
    if (!roomTypeId && parsed.roomTypeSlug) {
      const rt = await prisma.roomType.findUnique({ where: { slug: parsed.roomTypeSlug } });
      if (!rt) return NextResponse.json({ error: "Tipo de habitación no existe" }, { status: 400 });
      roomTypeId = rt.id;
    }
    if (!roomTypeId) return NextResponse.json({ error: "Falta tipo de habitación" }, { status: 400 });

    const pricing = await calcPrice(roomTypeId, checkIn, checkOut);

    // Transacción para evitar overbooking
    const result = await prisma.$transaction(async (tx) => {
      const availableRoom = await (async () => {
        const rooms = await tx.room.findMany({ where: { typeId: roomTypeId!, status: { notIn: ["MANTENIMIENTO","BLOQUEADA"] } } });
        for (const r of rooms) {
          const overlap = await tx.reservation.findFirst({
            where: { roomId: r.id, status: { in: ["PENDIENTE","CONFIRMADA","CHECKIN"] }, checkIn: { lt: checkOut }, checkOut: { gt: checkIn } },
          });
          const blocked = await tx.blockedDate.findFirst({ where: { roomId: r.id, start: { lt: checkOut }, end: { gt: checkIn } } });
          if (!overlap && !blocked) return r;
        }
        return null;
      })();

      if (!availableRoom) throw new Error("NO_DISPONIBLE");

      // Guest upsert por phone
      let guest = await tx.guest.findFirst({ where: { phone: parsed.phone } });
      if (!guest) {
        guest = await tx.guest.create({ data: { name: parsed.name, email: parsed.email || null, phone: parsed.phone } });
      } else {
        guest = await tx.guest.update({ where: { id: guest.id }, data: { name: parsed.name, totalStays: { increment: 0 } } });
      }

      const code = `HQB-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
      const session = await getSession().catch(() => null);
      const reservation = await tx.reservation.create({
        data: {
          code,
          guestId: guest.id,
          roomId: availableRoom.id,
          roomTypeId: roomTypeId!,
          checkIn,
          checkOut,
          adults: parsed.adults,
          children: parsed.children,
          status: parsed.source === "BOOKING" ? "CONFIRMADA" : "PENDIENTE",
          source: parsed.source || "WEB",
          totalPrice: pricing.total,
          paymentStatus: "PENDIENTE",
          notes: parsed.notes,
          createdById: session?.id || null,
        },
      });

      await tx.syncLog.create({
        data: { source: parsed.source || "WEB", action: "reservation.created", payload: JSON.stringify({ code, roomTypeId, checkIn, checkOut }), status: "SUCCESS", message: `Reserva ${code} creada` },
      });

      return { reservation, room: availableRoom, pricing, guest };
    });

    return NextResponse.json({ ok: true, reservation: result.reservation, room: result.room, pricing: result.pricing });
  } catch (e: any) {
    if (e.message === "NO_DISPONIBLE") return NextResponse.json({ error: "No hay disponibilidad para esas fechas en ese tipo de habitación" }, { status: 409 });
    if (e.name === "ZodError") return NextResponse.json({ error: "Datos inválidos", issues: e.issues }, { status: 400 });
    console.error(e);
    return NextResponse.json({ error: e.message || "Error interno" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status");
  const source = req.nextUrl.searchParams.get("source");
  const search = req.nextUrl.searchParams.get("search");
  const where: any = {};
  if (status && status !== "TODAS") where.status = status;
  if (source) where.source = source;
  if (search) where.OR = [{ code: { contains: search } }, { guest: { name: { contains: search } } }];
  const reservations = await prisma.reservation.findMany({
    where,
    include: { guest: true, room: true, roomType: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  const mapped = reservations.map(r => ({
    ...r,
    roomType: { ...r.roomType, amenities: JSON.parse(r.roomType.amenities), images: JSON.parse(r.roomType.images) },
  }));
  return NextResponse.json(mapped);
}
