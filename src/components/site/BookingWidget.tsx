"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { formatCOP } from "@/lib/utils"
import Link from "next/link"

export default function BookingWidget(){
  const [checkIn,setCheckIn]=useState("")
  const [checkOut,setCheckOut]=useState("")
  const [adults,setAdults]=useState(2)
  const [children,setChildren]=useState(0)
  const [results,setResults]=useState<any[]|null>(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

  const search=async(e:React.FormEvent)=>{
    e.preventDefault()
    if(!checkIn||!checkOut) return
    setError("")
    setResults(null)
    if(checkOut<=checkIn){ setError("La fecha de salida debe ser posterior a la de llegada"); return }
    setLoading(true)
    try{
      const res=await fetch(`/api/availability?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`)
      const data=await res.json()
      if(!res.ok){ setError(data.error || "Error al buscar"); setResults(null) }
      else{ setResults(Array.isArray(data) ? data : []) }
    }catch{ setError("Error de conexión"); setResults(null) }
    setLoading(false)
  }

  const minCheckout = checkIn ? new Date(new Date(checkIn).getTime()+86400000).toISOString().split("T")[0] : ""

  return (
    <div className="bg-white rounded-[24px] shadow-xl border border-[#F0E6D2] p-6">
      <div className="font-serif text-xl font-bold text-[#000000]">Consulta disponibilidad real</div>
      <p className="text-sm text-gray-500">Datos en tiempo real desde la base de datos</p>
      <form onSubmit={search} className="mt-4 grid gap-3">
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm">Llegada<input type="date" value={checkIn} onChange={e=>{setCheckIn(e.target.value);if(checkOut&&e.target.value>=checkOut)setCheckOut("")}} required min={new Date().toISOString().split("T")[0]} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
          <label className="text-sm">Salida<input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} required min={minCheckout} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm">Adultos<select value={adults} onChange={e=>setAdults(parseInt(e.target.value))} className="mt-1 w-full border rounded-xl px-3 py-2">{[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}</select></label>
          <label className="text-sm">Niños<select value={children} onChange={e=>setChildren(parseInt(e.target.value))} className="mt-1 w-full border rounded-xl px-3 py-2">{[0,1,2,3].map(n=><option key={n} value={n}>{n}</option>)}</select></label>
        </div>
        <Button type="submit" variant="gold" className="w-full">{loading?"Buscando...":"Ver disponibilidad"}</Button>
      </form>
      {error && <div className="mt-3 text-sm text-red-600 bg-red-50 p-2 rounded-xl">{error}</div>}
      {results && (
        <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
          {results.map((r:any)=>(
            <div key={r.roomType.slug} className={`p-3 rounded-xl border flex justify-between items-center ${r.isAvailable?"bg-green-50 border-green-200":"bg-red-50 border-red-200"}`}>
              <div><div className="font-semibold text-sm">{r.roomType.name}</div><div className="text-xs">{r.available}/{r.totalRooms} libres · {formatCOP(r.pricing.total)} total ({r.pricing.nights} noches)</div></div>
              <span className={`text-xs px-2 py-1 rounded-full ${r.isAvailable?"bg-green-600 text-white":"bg-red-600 text-white"}`}>{r.isAvailable?"Disponible":"Ocupado"}</span>
            </div>
          ))}
          <Link href={`/reservas?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`} className="block text-center text-sm bg-[#000000] text-white py-2 rounded-full">Ir a reservar →</Link>
        </div>
      )}
      <div className="mt-4 text-xs text-muted-foreground">Igualamos precio Booking · Confirmación por WhatsApp</div>
    </div>
  )
}
