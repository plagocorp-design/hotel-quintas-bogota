import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { findAvailableRoom } from "@/lib/availability";

// PATCH /api/reservations/:id -> actualizar estado, fechas, habitación, pago
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const body = await req.json();
  const { action, ...data } = body;

  const reservation = await prisma.reservation.findUnique({ where: { id } });
  if (!reservation) return NextResponse.json({ error: "Reserva no encontrada" }, { status: 404 });

  try {
    if (action === "checkin") {
      if (!["PENDIENTE","CONFIRMADA"].includes(reservation.status)) return NextResponse.json({ error: "Solo se puede hacer check-in desde Pendiente/Confirmada" }, { status: 400 });
      const upd = await prisma.$transaction(async (tx) => {
        const r = await tx.reservation.update({ where: { id }, data: { status: "CHECKIN" } });
        if (r.roomId) await tx.room.update({ where: { id: r.roomId }, data: { status: "OCUPADA" } });
        await tx.guest.update({ where: { id: r.guestId }, data: { totalStays: { increment: 1 } } });
        await tx.syncLog.create({ data: { source: "MANUAL", action: "checkin", payload: JSON.stringify({ id }), status: "SUCCESS" } });
        return r;
      });
      return NextResponse.json(upd);
    }

    if (action === "checkout") {
      if (reservation.status !== "CHECKIN") return NextResponse.json({ error: "Solo desde CHECKIN" }, { status: 400 });
      const upd = await prisma.$transaction(async (tx) => {
        const r = await tx.reservation.update({ where: { id }, data: { status: "CHECKOUT" } });
        if (r.roomId) await tx.room.update({ where: { id: r.roomId }, data: { status: "LIMPIEZA" } });
        return r;
      });
      return NextResponse.json(upd);
    }

    if (action === "cancel") {
      const upd = await prisma.$transaction(async (tx) => {
        const r = await tx.reservation.update({ where: { id }, data: { status: "CANCELADA", internalNotes: data.reason || reservation.internalNotes } });
        // liberar habitación (si estaba ocupada por esta reserva, no forzamos a DISPONIBLE si LIMPIEZA pendiente)
        // Al cancelar, la habitación queda DISPONIBLE salvo que esté en MANTENIMIENTO
        if (r.roomId) {
          const room = await tx.room.findUnique({ where: { id: r.roomId } });
          if (room && room.status !== "MANTENIMIENTO") await tx.room.update({ where: { id: room.id }, data: { status: "DISPONIBLE" } });
        }
        await tx.syncLog.create({ data: { source: "MANUAL", action: "reservation.cancelled", payload: JSON.stringify({ id }), status: "SUCCESS" } });
        // Si es BOOKING y hay credenciales, intentar notificar a Booking.com (estructura lista)
        return r;
      });
      return NextResponse.json(upd);
    }

    if (action === "updateDates") {
      const checkIn = new Date(data.checkIn);
      const checkOut = new Date(data.checkOut);
      if (!reservation.roomId) return NextResponse.json({ error: "Sin habitación asignada" }, { status: 400 });
      // verificar disponibilidad nueva excluyendo esta reserva
      const overlap = await prisma.reservation.findFirst({
        where: { roomId: reservation.roomId, id: { not: id }, status: { in: ["PENDIENTE","CONFIRMADA","CHECKIN"] }, checkIn: { lt: checkOut }, checkOut: { gt: checkIn } },
      });
      if (overlap) return NextResponse.json({ error: "No hay disponibilidad en nuevas fechas para esa habitación" }, { status: 409 });
      const upd = await prisma.reservation.update({ where: { id }, data: { checkIn, checkOut } });
      return NextResponse.json(upd);
    }

    if (action === "markPaid") {
      const upd = await prisma.reservation.update({ where: { id }, data: { paymentStatus: "PAGADO", paidAmount: reservation.totalPrice } });
      await prisma.payment.create({ data: { reservationId: id, amount: reservation.totalPrice, method: data.method || "EFECTIVO", status: "PAGADO" } });
      return NextResponse.json(upd);
    }

    // edición general (cambiar habitación, notas)
    if (data.roomId && data.roomId !== reservation.roomId) {
      const checkIn = data.checkIn ? new Date(data.checkIn) : reservation.checkIn;
      const checkOut = data.checkOut ? new Date(data.checkOut) : reservation.checkOut;
      const overlap = await prisma.reservation.findFirst({
        where: { roomId: data.roomId, status: { in: ["PENDIENTE","CONFIRMADA","CHECKIN"] }, checkIn: { lt: checkOut }, checkOut: { gt: checkIn } },
      });
      if (overlap) return NextResponse.json({ error: "Habitación no disponible en esas fechas" }, { status: 409 });
    }

    const upd = await prisma.reservation.update({ where: { id }, data: { ...data, roomId: data.roomId, internalNotes: data.internalNotes, notes: data.notes } });
    return NextResponse.json(upd);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = await getSession();
  if (!s || s.role !== "ADMIN") return NextResponse.json({ error: "Solo admin" }, { status: 403 });
  await prisma.reservation.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
