"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Stats {
  period: string
  totalEvents: number
  uniqueVisitors: number
  pageViews: number
  whatsappClicks: number
  reservationStarts: number
  topPages: { page: string; views: number }[]
  reservationFunnel: { step: string; count: number }[]
  dailyViews: Record<string, number>
  topReferrers: { referrer: string; count: number }[]
}

function MiniChart({ data, color = "#C9A86A" }: { data: Record<string, number>; color?: string }) {
  const vals = Object.values(data);
  const max = Math.max(...vals, 1);
  const days = Object.entries(data).slice(-14); // last 14 days
  const barW = Math.floor(100 / days.length);

  return (
    <div className="flex items-end gap-px h-24">
      {days.map(([date, count], i) => (
        <div key={date} className="flex-1 flex flex-col items-center gap-1" title={`${date}: ${count}`}>
          <div
            className="w-full rounded-t"
            style={{ height: `${Math.max(4, (count / max) * 100)}%`, backgroundColor: color, opacity: 0.7 + (count / max) * 0.3 }}
          />
        </div>
      ))}
    </div>
  );
}

function StatCard({ icon, label, value, sub }: { icon: string; label: string; value: string | number; sub?: string }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{typeof value === "number" ? value.toLocaleString() : value}</div>
          <div className="text-sm text-gray-500">{label}</div>
          {sub && <div className="text-xs text-gray-400">{sub}</div>}
        </div>
      </div>
    </Card>
  );
}

export default function AnalyticsPage() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [days, setDays] = useState(30)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState(false)

  const load = async () => {
    setLoading(true)
    const r = await fetch(`/api/analytics/stats?days=${days}`)
    if (r.status === 401) { setAuthError(true); setLoading(false); return }
    if (r.ok) setStats(await r.json())
    setLoading(false)
  }

  useEffect(() => { load() }, [days])

  if (authError) return (
    <div className="p-8 text-center">
      <div className="text-4xl mb-4">🔒</div>
      <div className="text-lg font-semibold mb-2">Sesión expirada</div>
      <p className="text-gray-500 mb-4">Necesitas iniciar sesión para ver las estadísticas.</p>
      <a href="/admin/login" className="inline-block bg-[#C9A86A] text-white px-6 py-3 rounded-xl font-semibold">Iniciar sesión</a>
    </div>
  )
  if (loading && !stats) return <div className="p-8 text-center text-gray-500">Cargando estadísticas...</div>
  if (!stats) return <div className="p-8 text-center text-red-500">Error cargando datos</div>

  const convRate = stats.pageViews > 0 ? ((stats.whatsappClicks / stats.pageViews) * 100).toFixed(1) : "0";
  const reservRate = stats.whatsappClicks > 0 ? ((stats.reservationStarts / stats.whatsappClicks) * 100).toFixed(1) : "0";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-2xl font-bold">Estadísticas del Sitio</h1>
          <p className="text-sm text-gray-500">Últimos {days} días</p>
        </div>
        <div className="flex gap-2">
          {[7, 15, 30, 90].map(d => (
            <Button key={d} size="sm" variant={days === d ? "gold" : "outline"} onClick={() => setDays(d)}>
              {d}d
            </Button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon="👁️" label="Visitas a páginas" value={stats.pageViews} />
        <StatCard icon="👥" label="Visitantes únicos" value={stats.uniqueVisitors} />
        <StatCard icon="💬" label="Clics en WhatsApp" value={stats.whatsappClicks} sub={`Conversión: ${convRate}%`} />
        <StatCard icon="📋" label="Iniciaron reserva" value={stats.reservationStarts} sub={`De WhatsApp: ${reservRate}%`} />
      </div>

      {/* Chart */}
      <Card className="p-6">
        <div className="font-semibold mb-4">Visitas diarias (últimos 14 días)</div>
        <MiniChart data={stats.dailyViews} />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          {Object.keys(stats.dailyViews).slice(-14).map((d, i, arr) => (
            <span key={d}>{i === 0 || i === arr.length - 1 ? d.slice(5) : ""}</span>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card className="p-6">
          <div className="font-semibold mb-4">Páginas más visitadas</div>
          <div className="space-y-2">
            {stats.topPages.slice(0, 10).map((p, i) => (
              <div key={p.page} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-5">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-mono truncate">{p.page}</div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div className="bg-[#C9A86A] h-1.5 rounded-full" style={{ width: `${(p.views / (stats.topPages[0]?.views || 1)) * 100}%` }} />
                  </div>
                </div>
                <span className="text-sm font-semibold">{p.views}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Reservation Funnel */}
        <Card className="p-6">
          <div className="font-semibold mb-4">Embudo de reservas</div>
          <div className="space-y-3">
            {[
              { step: "Visitaron el sitio", count: stats.pageViews, color: "#e5e7eb" },
              { step: "Clics en WhatsApp", count: stats.whatsappClicks, color: "#25D366" },
              { step: "Iniciaron reserva", count: stats.reservationStarts, color: "#C9A86A" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.step}</span>
                  <span className="font-semibold">{item.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="h-3 rounded-full transition-all" style={{
                    width: `${stats.pageViews > 0 ? (item.count / stats.pageViews) * 100 : 0}%`,
                    backgroundColor: item.color
                  }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Referrers */}
        <Card className="p-6">
          <div className="font-semibold mb-4">Fuentes de tráfico</div>
          <div className="space-y-2">
            {stats.topReferrers.length === 0 && <div className="text-sm text-gray-400">Sin datos de referentes aún</div>}
            {stats.topReferrers.map((r, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="truncate">{r.referrer}</span>
                <span className="font-semibold">{r.count}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <div className="font-semibold mb-4">Acciones rápidas</div>
          <div className="space-y-2">
            <a href="/admin/reservas" className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-semibold">📋 Ver reservas</a>
            <a href="/admin/huespedes" className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-semibold">👥 Ver huéspedes</a>
            <a href="/admin" className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-semibold">🏠 Volver al panel</a>
          </div>
        </Card>
      </div>
    </div>
  )
}
