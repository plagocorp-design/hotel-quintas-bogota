import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  let s = await prisma.hotelSettings.findFirst();
  if (!s) s = await prisma.hotelSettings.create({ data: { id: "hotel_1" } });
  return NextResponse.json(s);
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Solo admin" }, { status: 403 });
  const body = await req.json();
  const s = await prisma.hotelSettings.upsert({
    where: { id: "hotel_1" },
    update: body,
    create: { id: "hotel_1", ...body },
  });
  return NextResponse.json(s);
}
