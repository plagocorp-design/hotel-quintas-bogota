import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
export async function POST(req: NextRequest) {
  const schema = z.object({ name: z.string().min(2), email: z.string().email(), phone: z.string().optional(), message: z.string().min(5) });
  const body = await req.json();
  const parsed = schema.parse(body);
  const msg = await prisma.contactMessage.create({ data: parsed });
  return NextResponse.json({ ok: true, id: msg.id });
}
export async function GET() {
  const msgs = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
  return NextResponse.json(msgs);
}
