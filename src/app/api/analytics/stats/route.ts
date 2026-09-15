import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

const EMPTY = {
  period: "30 days",
  totalEvents: 0,
  uniqueVisitors: 0,
  pageViews: 0,
  whatsappClicks: 0,
  reservationStarts: 0,
  topPages: [] as { page: string; views: number }[],
  reservationFunnel: [] as { step: string; count: number }[],
  dailyViews: {} as Record<string, number>,
  topReferrers: [] as { referrer: string; count: number }[],
};

export async function GET(req: NextRequest) {
  try {
    const s = await getSession();
    if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const days = parseInt(searchParams.get("days") || "30");
    const since = new Date();
    since.setDate(since.getDate() - days);

    const where = { createdAt: { gte: since } };

    const [totalEvents, uniqueSessions, pageViews, topPages, whatsappClicks, reservationStarts, reservationFunnels, topReferrers] = await Promise.all([
      prisma.analyticsEvent.count({ where }),
      prisma.analyticsEvent.groupBy({ by: ["sessionId"], where: { ...where, sessionId: { not: null } } }).then(r => r.length).catch(() => 0),
      prisma.analyticsEvent.count({ where: { ...where, event: "page_view" } }),
      prisma.analyticsEvent.groupBy({ by: ["page"], where: { ...where, event: "page_view" }, _count: { page: true }, orderBy: { _count: { page: "desc" } }, take: 20 }).catch(() => []),
      prisma.analyticsEvent.count({ where: { ...where, event: "whatsapp_open" } }),
      prisma.analyticsEvent.count({ where: { ...where, event: "reservation_start" } }),
      prisma.analyticsEvent.groupBy({ by: ["label"], where: { ...where, event: "reservation_step" }, _count: { label: true } }).catch(() => []),
      prisma.analyticsEvent.groupBy({ by: ["referrer"], where: { ...where, referrer: { not: null }, event: "page_view" }, _count: { referrer: true }, orderBy: { _count: { referrer: "desc" } }, take: 10 }).catch(() => []),
    ]);

    const dailyRows = await prisma.analyticsEvent.groupBy({
      by: ["createdAt"],
      where: { ...where, event: "page_view" },
      _count: { createdAt: true },
      orderBy: { createdAt: "asc" },
    }).catch(() => []);

    const dailyViews: Record<string, number> = {};
    for (const r of dailyRows) {
      const day = r.createdAt.toISOString().split("T")[0];
      dailyViews[day] = (dailyViews[day] || 0) + r._count.createdAt;
    }

    return NextResponse.json({
      period: `${days} days`,
      totalEvents,
      uniqueVisitors: uniqueSessions,
      pageViews,
      whatsappClicks,
      reservationStarts,
      topPages: topPages.map((p: any) => ({ page: p.page, views: p._count.page })),
      reservationFunnel: reservationFunnels.map((f: any) => ({ step: f.label, count: f._count.label })),
      dailyViews,
      topReferrers: topReferrers.filter((r: any) => r.referrer).map((r: any) => ({ referrer: r.referrer, count: r._count.referrer })),
    });
  } catch (e) {
    return NextResponse.json(EMPTY);
  }
}
