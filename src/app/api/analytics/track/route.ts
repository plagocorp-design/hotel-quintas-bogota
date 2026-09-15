import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event, page, label, value, referrer, sessionId } = body;

    if (!event || !page) {
      return NextResponse.json({ error: "event and page required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "";
    const userAgent = req.headers.get("user-agent") || "";

    await prisma.analyticsEvent.create({
      data: {
        event,
        page,
        label: label || null,
        value: value || null,
        referrer: referrer || null,
        userAgent: userAgent.substring(0, 500),
        ip: ip.substring(0, 45),
        sessionId: sessionId || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: true }); // silent fail, never block user
  }
}
