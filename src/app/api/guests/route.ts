import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const guests = await prisma.guest.findMany({
    where: q ? { OR: [{ name: { contains: q } }, { phone: { contains: q } }, { email: { contains: q } }] } : {},
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { reservations: { orderBy: { checkIn: "desc" }, take: 3 } },
  });
  return NextResponse.json(guests);
}
