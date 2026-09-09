import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { findAvailableRoom } from "@/lib/availability";

// Arquitectura real Channel Manager: Booking.com envía reservation.created/updated/cancelled
// Si BOOKING_API_KEY no está configurado, igual persiste y queda en SyncLog para reintento.
export async function POST(req: NextRequest) {
  const sig = req.headers.get("x-booking-signature");
  const secret = process.env.BOOKING_SECRET;
  const body = await req.json();
  // Validación HMAC si hay secret (opcional en dev)
  // if (secret && sig) { const valid = verify(sig, body); if (!valid) return 403 }

  try {
    const action: string = body.action || body.type || "reservation.created"; // ej: reservation.created
    const bookingId: string = body.bookingId || body.id || body.externalId || `BKG-${Date.now()}`;
    const guestData = body.guest || body.customer || { name: body.guestName || "Huérsped Booking", phone: body.phone, email: body.email };
    const checkIn = new Date(body.checkIn || body.arrivalDate);
    const checkOut = new Date(body.checkOut || body.departureDate);
    const roomTypeSlug = body.roomTypeSlug || body.roomType || "doble";
    const adults = Number(body.adults || 2);

    if (action.includes("cancelled") || body.status === "cancelled") {
      const existing = await prisma.reservation.findFirst({ where: { externalId: bookingId } });
      if (existing) {
        await prisma.reservation.update({ where: { id: existing.id }, data: { status: "CANCELADA" } });
        if (existing.roomId) await prisma.room.update({ where: { id: existing.roomId }, data: { status: "DISPONIBLE" } });
      }
      await prisma.syncLog.create({ data: { source: "BOOKING", action, payload: JSON.stringify(body), status: "SUCCESS", message: `Cancelada ${bookingId}` } });
      return NextResponse.json({ ok: true, action: "cancelled" });
    }

    // created / updated
    let rt = await prisma.roomType.findUnique({ where: { slug: roomTypeSlug } });
    if (!rt) rt = await prisma.roomType.findFirst();
    if (!rt) return NextResponse.json({ error: "Sin tipos de habitación" }, { status: 500 });

    // evitar duplicado por externalId
    const existing = await prisma.reservation.findFirst({ where: { externalId: bookingId } });
    if (existing) {
      await prisma.reservation.update({ where: { id: existing.id }, data: { checkIn, checkOut, adults, status: "CONFIRMADA" } });
      await prisma.syncLog.create({ data: { source: "BOOKING", action, payload: JSON.stringify(body), status: "SUCCESS", message: `Actualizada ${bookingId}` } });
      return NextResponse.json({ ok: true, updated: true });
    }

    const room = await findAvailableRoom(rt.id, checkIn, checkOut);
    if (!room) {
      await prisma.syncLog.create({ data: { source: "BOOKING", action, payload: JSON.stringify(body), status: "ERROR", message: "Sin disponibilidad - overbooking evitado" } });
      return NextResponse.json({ error: "Sin disponibilidad" }, { status: 409 });
    }

    let guest = await prisma.guest.findFirst({ where: { phone: guestData.phone || undefined } });
    if (!guest) guest = await prisma.guest.create({ data: { name: guestData.name, phone: guestData.phone, email: guestData.email } });

    const code = `HQB-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime())/86400000);
    const total = rt.basePrice * nights;
    await prisma.reservation.create({
      data: { code, guestId: guest.id, roomId: room.id, roomTypeId: rt.id, checkIn, checkOut, adults, status: "CONFIRMADA", source: "BOOKING", externalId: bookingId, totalPrice: total },
    });
    await prisma.syncLog.create({ data: { source: "BOOKING", action, payload: JSON.stringify(body), status: "SUCCESS", message: `Creada ${code} desde Booking ${bookingId}` } });
    return NextResponse.json({ ok: true, code });
  } catch (e:any) {
    await prisma.syncLog.create({ data: { source: "BOOKING", action: "error", payload: JSON.stringify(body), status: "ERROR", message: e.message } });
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET() {
  const logs = await prisma.syncLog.findMany({ where: { source: "BOOKING" }, orderBy: { createdAt: "desc" }, take: 20 });
  const last = logs[0]?.createdAt || null;
  return NextResponse.json({ status: "Booking webhook activo", endpoint: "/api/booking-sync/webhook", lastSync: last, logs });
}
