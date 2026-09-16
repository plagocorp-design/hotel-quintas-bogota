"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function Huespedes(){
  const [q,setQ]=useState("")
  const [guests,setGuests]=useState<any[]>([])
  const [err,setErr]=useState("")
  const load=async()=>{
    try{
      const r=await fetch(`/api/guests?q=${encodeURIComponent(q)}`)
      if(!r.ok) throw new Error()
      const d=await r.json()
      setGuests(Array.isArray(d) ? d : [])
    }catch{ setErr("Sesión expirada") }
  }
  useEffect(()=>{load()},[])
  return (
    <div className="space-y-4">
      {err && <div className="text-center py-8"><div className="text-red-600 font-semibold">{err}</div></div>}
      <h1 className="font-serif text-2xl font-bold">Huéspedes / CRM — Real DB</h1>
      <div className="flex gap-2">
        <input placeholder="Buscar nombre/tel/email" value={q} onChange={e=>setQ(e.target.value)} className="border rounded-xl px-3 py-2 flex-1"/>
        <button onClick={load} className="bg-[#000000] text-white px-4 rounded-xl">Buscar</button>
      </div>
      <Card className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-gray-500"><th className="text-left">Nombre</th><th>Tel</th><th>Email</th><th>Estancias</th><th>Última</th><th>Preferencias</th></tr></thead>
          <tbody>
            {guests.map((g:any)=> <tr key={g.id} className="border-t"><td className="py-2 font-medium">{g.name}</td><td>{g.phone||"-"}</td><td>{g.email||"-"}</td><td>{g.totalStays}</td><td>{g.reservations[0] ? new Date(g.reservations[0].checkIn).toLocaleDateString() : "-"}</td><td className="text-xs">{g.preferences||"-"}</td></tr>)}
          </tbody>
        </table>
        {guests.length===0 && !err && <div className="text-center py-6 text-gray-500">Sin huéspedes. Se crean automáticamente al reservar.</div>}
      </Card>
    </div>
  )
}
