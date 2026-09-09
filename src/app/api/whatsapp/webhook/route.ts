import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET verificación Meta (hub.verify_token)
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");
  const VERIFY = process.env.WHATSAPP_VERIFY_TOKEN || "quintas_verify_2026";
  if (token === VERIFY && challenge) return new NextResponse(challenge, { status: 200 });
  return NextResponse.json({ error: "verify failed" }, { status: 403 });
}

// POST mensaje entrante + guardar conversación real + log
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("WhatsApp inbound", JSON.stringify(body).slice(0,1200));
  try {
    const entry = body.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const msg = value?.messages?.[0];
    const contact = value?.contacts?.[0];
    if (msg && contact) {
      const phone = msg.from;
      const text = msg.text?.body || msg.button?.text || JSON.stringify(msg);
      let conv = await prisma.whatsAppConversation.findFirst({ where: { phone } });
      if (!conv) {
        conv = await prisma.whatsAppConversation.create({
          data: { phone, contactName: contact.profile?.name || phone, lastMessageAt: new Date(), unreadCount: 1 },
        });
      } else {
        await prisma.whatsAppConversation.update({ where: { id: conv.id }, data: { lastMessageAt: new Date(), unreadCount: { increment: 1 } } });
      }
      await prisma.whatsAppMessage.create({
        data: { conversationId: conv.id, direction: "INBOUND", text, status: "received" },
      });
      await prisma.syncLog.create({ data: { source: "WHATSAPP", action: "message.inbound", payload: JSON.stringify(body), status: "SUCCESS" } });
    }
  } catch (e:any) {
    await prisma.syncLog.create({ data: { source: "WHATSAPP", action: "message.inbound", payload: JSON.stringify(body), status: "ERROR", message: e.message } });
  }
  return NextResponse.json({ ok: true });
}
