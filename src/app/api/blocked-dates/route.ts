import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const roomId = req.nextUrl.searchParams.get("roomId");
  const where = roomId ? { roomId } : {};
  const blocks = await prisma.blockedDate.findMany({ where, orderBy: { start: "asc" } });
  return NextResponse.json(blocks);
}

export async function POST(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { roomId, start, end, reason } = await req.json();
  if (!roomId || !start || !end) return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  const block = await prisma.blockedDate.create({ data: { roomId, start: new Date(start), end: new Date(end), reason } });
  await prisma.syncLog.create({ data: { source: "MANUAL", action: "blockedDate.created", payload: JSON.stringify(block), status: "SUCCESS" } });
  return NextResponse.json(block);
}

export async function DELETE(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Falta id" }, { status: 400 });
  await prisma.blockedDate.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
