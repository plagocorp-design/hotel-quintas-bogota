import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const convs = await prisma.whatsAppConversation.findMany({
    orderBy: { lastMessageAt: "desc" },
    include: { messages: { orderBy: { createdAt: "asc" }, take: 1 } },
    take: 50,
  });
  return NextResponse.json(convs);
}

export async function POST(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { phone, contactName } = await req.json();
  if (!phone) return NextResponse.json({ error: "Falta teléfono" }, { status: 400 });
  let conv = await prisma.whatsAppConversation.findFirst({ where: { phone } });
  if (conv) return NextResponse.json(conv);
  conv = await prisma.whatsAppConversation.create({ data: { phone, contactName } });
  return NextResponse.json(conv);
}
