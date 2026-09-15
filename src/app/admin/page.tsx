"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { formatCOP } from "@/lib/utils"

export default function AdminDashboard(){
  const [data,setData]=useState<any>(null)
  useEffect(()=>{ fetch("/api/dashboard").then(r=>r.json()).then(setData)},[])
  if(!data) return <div className="p-8">Cargando dashboard real desde DB...</div>
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold">Dashboard — Tiempo real</h1>
        <div className="text-sm text-gray-500">Ocupación {data.occupationPct}% · {new Date().toLocaleDateString("es-CO")}</div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4"><div className="text-sm text-gray-500">Ocupación hoy</div><div className="text-2xl font-bold">{data.occupationPct}%</div><div className="text-xs text-gray-500">{data.occupiedRooms}/{data.totalRooms} hab ocupadas</div></Card>
        <Card className="p-4"><div className="text-sm text-gray-500">Check-ins hoy</div><div className="text-2xl font-bold">{data.todayCheckIns}</div><div className="text-xs text-gray-500">llegadas programadas</div></Card>
        <Card className="p-4"><div className="text-sm text-gray-500">Check-outs hoy</div><div className="text-2xl font-bold">{data.todayCheckOuts}</div><div className="text-xs text-gray-500">salidas programadas</div></Card>
        <Card className="p-4"><div className="text-sm text-gray-500">Ingresos mes</div><div className="text-2xl font-bold">{formatCOP(data.ingresosMes)}</div><div className="text-xs text-gray-500">{data.monthReservations} reservas</div></Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-4 md:col-span-2">
          <div className="font-semibold flex justify-between">Reservas próximas <Link href="/admin/reservas" className="text-sm text-[#C9A86A]">Ver todas</Link></div>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-gray-500"><th className="text-left py-2">Código</th><th>Huésped</th><th>Hab</th><th>Fechas</th><th>Origen</th><th>Estado</th></tr></thead>
              <tbody>
                {data.pendingReservations.map((r:any)=> (
                  <tr key={r.id} className="border-t">
                    <td className="py-2 font-mono text-xs">{r.code}</td>
                    <td>{r.guest.name}</td><td>{r.room?.number || r.roomType.name}</td><td className="text-xs">{new Date(r.checkIn).toLocaleDateString()} → {new Date(r.checkOut).toLocaleDateString()}</td>
                    <td><Badge className={r.source==="BOOKING"?"bg-blue-100 text-blue-800":r.source==="WHATSAPP"?"bg-green-100 text-green-800":"bg-gray-100"}>{r.source}</Badge></td>
                    <td><Badge className="bg-[#F5F1E8]">{r.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.pendingReservations.length===0 && <div className="text-sm text-gray-500 py-4 text-center">Sin reservas próximas</div>}
          </div>
        </Card>
        <Card className="p-4">
          <div className="font-semibold">Estado habitaciones (real)</div>
          <div className="mt-3 space-y-2 max-h-80 overflow-y-auto">
            {data.rooms.map((r:any)=> (
              <div key={r.number} className="flex justify-between items-center border-b py-2 text-sm">
                <span>#{r.number} · {r.type.name}</span>
                <Badge className={r.status==="DISPONIBLE"?"bg-green-100 text-green-800":r.status==="OCUPADA"?"bg-red-100 text-red-800":r.status==="LIMPIEZA"?"bg-yellow-100 text-yellow-800":"bg-gray-200"}>{r.status}</Badge>
              </div>
            ))}
          </div>
          <Link href="/admin/habitaciones" className="text-sm text-[#C9A86A] mt-3 block">Gestionar habitaciones →</Link>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <div className="font-semibold">Reservas por canal (mes real)</div>
          <div className="mt-4 space-y-2 text-sm">
            {data.bySource.map((b:any)=> <div key={b.source} className="flex justify-between"><span>{b.source}</span><span>{b._count.source} reservas</span></div>)}
            {data.bySource.length===0 && <div className="text-gray-500">Sin datos aún</div>}
          </div>
        </Card>
        <Card className="p-4">
          <div className="font-semibold">Acciones rápidas</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/admin/reservas" className="bg-[#000000] text-white text-center py-2 rounded-xl text-sm">Nueva reserva</Link>
            <Link href="/admin/calendario" className="bg-[#C9A86A] text-white text-center py-2 rounded-xl text-sm">Ver calendario</Link>
            <Link href="/admin/whatsapp" className="bg-[#25D366] text-white text-center py-2 rounded-xl text-sm">WhatsApp</Link>
            <a href="/api/booking-sync/webhook" target="_blank" className="border text-center py-2 rounded-xl text-sm">Logs Booking</a>
          </div>
        </Card>
      </div>
    </div>
  )
}
