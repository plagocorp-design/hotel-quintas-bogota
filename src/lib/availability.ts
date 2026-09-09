import { prisma } from "./prisma";

export async function isRoomAvailable(roomId: string, checkIn: Date, checkOut: Date, excludeReservationId?: string) {
  const overlapping = await prisma.reservation.findFirst({
    where: {
      roomId,
      status: { in: ["PENDIENTE", "CONFIRMADA", "CHECKIN"] },
      id: excludeReservationId ? { not: excludeReservationId } : undefined,
      checkIn: { lt: checkOut },
      checkOut: { gt: checkIn },
    },
  });
  if (overlapping) return false;
  const blocked = await prisma.blockedDate.findFirst({
    where: { roomId, start: { lt: checkOut }, end: { gt: checkIn } },
  });
  return !blocked;
}

export async function findAvailableRoom(roomTypeId: string, checkIn: Date, checkOut: Date) {
  const rooms = await prisma.room.findMany({
    where: { typeId: roomTypeId, status: { notIn: ["MANTENIMIENTO", "BLOQUEADA"] } },
  });
  for (const r of rooms) {
    if (await isRoomAvailable(r.id, checkIn, checkOut)) return r;
  }
  return null;
}

export function calcNights(checkIn: Date, checkOut: Date) {
  const ms = checkOut.getTime() - checkIn.getTime();
  return Math.max(1, Math.ceil(ms / 86400000));
}

export async function calcPrice(roomTypeId: string, checkIn: Date, checkOut: Date) {
  const rt = await prisma.roomType.findUnique({ where: { id: roomTypeId } });
  if (!rt) throw new Error("ROOMTYPE_NOT_FOUND");
  const nights = calcNights(checkIn, checkOut);
  // temporada
  const seasons = await prisma.rateSeason.findMany({
    where: { start: { lte: checkOut }, end: { gte: checkIn } },
  });
  let multiplier = 1;
  for (const s of seasons) {
    if (!s.roomTypeId || s.roomTypeId === roomTypeId) multiplier = Math.max(multiplier, s.multiplier);
  }
  return { nights, unit: Math.round(rt.basePrice * multiplier), total: Math.round(rt.basePrice * multiplier * nights), basePrice: rt.basePrice, multiplier };
}
