import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get("days") || "30");
  const since = new Date();
  since.setDate(since.getDate() - days);

  const [
    totalEvents,
    uniqueSessions,
    pageViews,
    topPages,
    whatsappClicks,
    reservationStarts,
    reservationFunnels,
    eventsByDay,
    topReferrers,
    deviceBreakdown,
  ] = await Promise.all([
    prisma.analyticsEvent.count({ where: { createdAt: { gte: since } } }),
    prisma.analyticsEvent.groupBy({ by: ["sessionId"], where: { createdAt: { gte: since }, sessionId: { not: null } } }).then(r => r.length),
    prisma.analyticsEvent.count({ where: { createdAt: { gte: since }, event: "page_view" } }),
    prisma.analyticsEvent.groupBy({ by: ["page"], where: { createdAt: { gte: since }, event: "page_view" }, _count: { page: true }, orderBy: { _count: { page: "desc" } }, take: 20 }),
    prisma.analyticsEvent.count({ where: { createdAt: { gte: since }, event: "whatsapp_open" } }),
    prisma.analyticsEvent.count({ where: { createdAt: { gte: since }, event: "reservation_start" } }),
    prisma.analyticsEvent.groupBy({ by: ["label"], where: { createdAt: { gte: since }, event: "reservation_step" }, _count: { label: true } }),
    prisma.analyticsEvent.groupBy({ by: ["createdAt"], where: { createdAt: { gte: since }, event: "page_view" }, _count: { createdAt: true }, orderBy: { createdAt: "asc" } }).then(rows =>
      rows.reduce((acc: Record<string, number>, r: any) => {
        const day = r.createdAt.toISOString().split("T")[0];
        acc[day] = (acc[day] || 0) + r._count.createdAt;
        return acc;
      }, {} as Record<string, number>)
    ),
    prisma.analyticsEvent.groupBy({ by: ["referrer"], where: { createdAt: { gte: since }, referrer: { not: null }, event: "page_view" }, _count: { referrer: true }, orderBy: { _count: { referrer: "desc" } }, take: 10 }),
    prisma.analyticsEvent.groupBy({ by: ["userAgent"], where: { createdAt: { gte: since }, event: "page_view" }, _count: { userAgent: true }, take: 1 }).then(() => {
      return { note: "Device breakdown computed from userAgent" };
    }),
  ]);

  return NextResponse.json({
    period: `${days} days`,
    totalEvents,
    uniqueVisitors: uniqueSessions,
    pageViews,
    whatsappClicks,
    reservationStarts,
    topPages: topPages.map((p: any) => ({ page: p.page, views: p._count.page })),
    reservationFunnel: reservationFunnels.map((f: any) => ({ step: f.label, count: f._count.label })),
    dailyViews: eventsByDay,
    topReferrers: topReferrers.filter((r: any) => r.referrer).map((r: any) => ({ referrer: r.referrer, count: r._count.referrer })),
  });
}
