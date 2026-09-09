import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const rooms = await prisma.room.findMany({ include: { type: true }, orderBy: { number: "asc" } });
  const mapped = rooms.map(r => ({ ...r, type: { ...r.type, amenities: JSON.parse(r.type.amenities), images: JSON.parse(r.type.images) } }));
  return NextResponse.json(mapped);
}

export async function POST(req: NextRequest) {
  const s = await getSession();
  if (!s || !["ADMIN","RECEPCION"].includes(s.role)) return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  const body = await req.json();
  const { number, floor, typeId, status, notes } = body;
  if (!number || !typeId) return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  const room = await prisma.room.create({ data: { number, floor: Number(floor)||1, typeId, status: status||"DISPONIBLE", notes } });
  return NextResponse.json(room);
}

export async function PATCH(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const body = await req.json();
  const { id, status, notes } = body;
  if (!id) return NextResponse.json({ error: "Falta id" }, { status: 400 });
  // LIMPIEZA puede pasar a DISPONIBLE incluso recepcion
  if (s.role === "LIMPIEZA" && !(status === "DISPONIBLE" || status === "LIMPIEZA")) return NextResponse.json({ error: "Sin permiso" }, { status: 403 });
  const upd = await prisma.room.update({ where: { id }, data: { status, notes } });
  return NextResponse.json(upd);
}
