import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const [types, seasons] = await Promise.all([prisma.roomType.findMany(), prisma.rateSeason.findMany({ orderBy: { start: "asc" } })]);
  return NextResponse.json({ types: types.map(t=> ({...t, amenities: JSON.parse(t.amenities), images: JSON.parse(t.images)})), seasons });
}

export async function PUT(req: NextRequest) {
  const s = await getSession();
  if (!s || s.role !== "ADMIN") return NextResponse.json({ error: "Solo admin" }, { status: 403 });
  const { typeId, basePrice } = await req.json();
  if (!typeId || basePrice===undefined) return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  const upd = await prisma.roomType.update({ where: { id: typeId }, data: { basePrice: Number(basePrice) } });
  return NextResponse.json(upd);
}

export async function POST(req: NextRequest) {
  const s = await getSession();
  if (!s || s.role !== "ADMIN") return NextResponse.json({ error: "Solo admin" }, { status: 403 });
  const { name, start, end, multiplier, roomTypeId } = await req.json();
  const season = await prisma.rateSeason.create({ data: { name, start: new Date(start), end: new Date(end), multiplier: Number(multiplier), roomTypeId: roomTypeId||null } });
  return NextResponse.json(season);
}
