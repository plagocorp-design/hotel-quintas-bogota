import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const types = await prisma.roomType.findMany({ orderBy: { basePrice: "asc" } });
  const mapped = types.map(t => ({ ...t, amenities: JSON.parse(t.amenities), images: JSON.parse(t.images) }));
  return NextResponse.json(mapped);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  const body = await req.json();
  const { name, slug, description, capacity, basePrice, amenities, images } = body;
  if (!name || !slug || !capacity || !basePrice) return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  const created = await prisma.roomType.create({
    data: { name, slug, description: description || "", capacity: Number(capacity), basePrice: Number(basePrice), amenities: JSON.stringify(amenities || []), images: JSON.stringify(images || []) }
  });
  return NextResponse.json(created);
}
