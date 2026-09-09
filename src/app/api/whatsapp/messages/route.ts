import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const convId = req.nextUrl.searchParams.get("conversationId");
  if (!convId) return NextResponse.json({ error: "Falta conversationId" }, { status: 400 });
  const msgs = await prisma.whatsAppMessage.findMany({ where: { conversationId: convId }, orderBy: { createdAt: "asc" } });
  return NextResponse.json(msgs);
}

export async function POST(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { conversationId, text, templateName } = await req.json();
  if (!conversationId || !text) return NextResponse.json({ error: "Faltan campos" }, { status: 400 });

  // Guardar OUTBOUND real + intentar envío a Meta si hay token
  const msg = await prisma.whatsAppMessage.create({ data: { conversationId, direction: "OUTBOUND", text, templateName, status: "sent" } });
  await prisma.whatsAppConversation.update({ where: { id: conversationId }, data: { lastMessageAt: new Date() } });

  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (token && phoneId) {
    const conv = await prisma.whatsAppConversation.findUnique({ where: { id: conversationId } });
    try {
      await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ messaging_product: "whatsapp", to: conv?.phone, type: "text", text: { body: text } }),
      });
      await prisma.syncLog.create({ data: { source: "WHATSAPP", action: "message.outbound", payload: JSON.stringify({ conversationId, text }), status: "SUCCESS" } });
    } catch (e:any) {
      await prisma.syncLog.create({ data: { source: "WHATSAPP", action: "message.outbound", payload: JSON.stringify({ conversationId, text }), status: "ERROR", message: e.message } });
    }
  } else {
    await prisma.syncLog.create({ data: { source: "WHATSAPP", action: "message.outbound", payload: JSON.stringify({ conversationId, text }), status: "SUCCESS", message: "Simulado - falta WHATSAPP_TOKEN (ver .env)" } });
  }

  return NextResponse.json(msg);
}
