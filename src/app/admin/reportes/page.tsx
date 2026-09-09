"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { formatCOP } from "@/lib/utils"

export default function Reportes(){
  const [data,setData]=useState<any>(null)
  const [logs,setLogs]=useState<any[]>([])
  useEffect(()=>{
    fetch("/api/dashboard").then(r=>r.json()).then(setData)
    fetch("/api/booking-sync/webhook").then(r=>r.json()).then(d=>setLogs(d.logs||[]))
  },[])
  const exportCSV=()=>{
    if(!data) return
    const csv="data:text/csv;charset=utf-8,Metrica,Valor\nOcupacion,"+data.occupationPct+"%\nIngresos,"+data.ingresosMes+"\nReservas,"+data.monthReservations
    const link=document.createElement("a"); link.href=encodeURI(csv); link.download="reporte_hotel_quintas.csv"; link.click()
  }
  if(!data) return <div className="p-8">Cargando reportes reales...</div>
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl font-bold">Reportes — Datos reales DB</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4"><div className="text-sm text-gray-500">Ocupación mes</div><div className="text-2xl font-bold">{data.occupationPct}%</div></Card>
        <Card className="p-4"><div className="text-sm text-gray-500">Ingresos mes</div><div className="text-2xl font-bold">{formatCOP(data.ingresosMes)}</div></Card>
        <Card className="p-4"><div className="text-sm text-gray-500">Reservas mes</div><div className="text-2xl font-bold">{data.monthReservations}</div></Card>
      </div>
      <Card className="p-4">
        <div className="font-semibold flex justify-between">Logs de sincronización Booking <button onClick={exportCSV} className="text-sm border px-3 py-1 rounded-full">Exportar CSV (funcional)</button></div>
        <div className="mt-3 text-sm font-mono bg-gray-50 p-3 rounded-xl space-y-1 max-h-64 overflow-y-auto">
          {logs.map((l:any)=> <div key={l.id}>[{new Date(l.createdAt).toLocaleString()}] {l.status} {l.action} — {l.message}</div>)}
          {logs.length===0 && <div>Sin logs aún. Las reservas Booking y WhatsApp generan logs aquí.</div>}
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={exportCSV} className="border px-3 py-1 rounded-full text-sm">Exportar Excel (CSV)</button>
          <button onClick={()=>window.print()} className="border px-3 py-1 rounded-full text-sm">Exportar PDF (Print)</button>
        </div>
      </Card>
    </div>
  )
}
