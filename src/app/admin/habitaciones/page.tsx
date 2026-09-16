"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const statusColor:Record<string,string>={DISPONIBLE:"bg-green-100 text-green-800",OCUPADA:"bg-red-100 text-red-800",LIMPIEZA:"bg-yellow-100 text-yellow-800",MANTENIMIENTO:"bg-gray-200",BLOQUEADA:"bg-orange-100 text-orange-800"}

export default function AdminHabitaciones(){
  const [rooms,setRooms]=useState<any[]>([])
  const [types,setTypes]=useState<any[]>([])
  const [form,setForm]=useState({number:"", floor:1, typeId:"", status:"DISPONIBLE"})
  const [editing,setEditing]=useState(false)
  const [err,setErr]=useState("")

  const load=async()=>{
    try{
      const [r,t]=await Promise.all([fetch("/api/rooms"), fetch("/api/room-types")])
      if(!r.ok||!t.ok) throw new Error()
      const [rd,td]=await Promise.all([r.json(), t.json()])
      setRooms(rd); setTypes(td); if(td[0] && !form.typeId) setForm(f=>({...f, typeId:td[0].id}))
    }catch{ setErr("Sesión expirada") }
  }
  useEffect(()=>{load()},[])

  const create=async()=>{
    if(!form.number || !form.typeId) return alert("Falta número o tipo")
    const res=await fetch("/api/rooms",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form)})
    if(!res.ok){ const d=await res.json(); return alert(d.error)}
    setForm({number:"", floor:1, typeId: types[0]?.id || "", status:"DISPONIBLE"}); load()
  }

  const changeStatus=async(id:string, status:string)=>{
    await fetch("/api/rooms",{method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,status})})
    load()
  }

  return (
    <div className="space-y-4">
      {err && <div className="text-center py-8"><div className="text-red-600 font-semibold">{err}</div></div>}
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold">Gestión de Habitaciones — Real DB</h1>
        <Button variant="gold" onClick={()=>setEditing(!editing)}>{editing?"Cerrar":" + Nueva habitación"}</Button>
      </div>
      {editing && (
        <Card className="p-4 grid md:grid-cols-4 gap-3">
          <input placeholder="Número (ej 105)" value={form.number} onChange={e=>setForm({...form, number:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input type="number" value={form.floor} onChange={e=>setForm({...form, floor:parseInt(e.target.value)})} className="border rounded-xl px-3 py-2" placeholder="Piso"/>
          <select value={form.typeId} onChange={e=>setForm({...form, typeId:e.target.value})} className="border rounded-xl px-3 py-2">
            {types.map(t=> <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          <Button onClick={create}>Crear habitación</Button>
        </Card>
      )}
      <Card className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-gray-500"><th className="text-left">No</th><th>Tipo</th><th>Piso</th><th>Estado</th><th>Acción</th><th>Historial</th></tr></thead>
          <tbody>
            {rooms.map((r:any)=>(
              <tr key={r.number} className="border-t">
                <td className="py-3 font-bold">#{r.number}</td>
                <td>{r.type.name}</td><td>{r.floor}</td>
                <td><Badge className={statusColor[r.status]}>{r.status}</Badge></td>
                <td>
                  <select value={r.status} onChange={e=>changeStatus(r.id, e.target.value)} className="text-xs border rounded-full px-2 py-1">
                    <option>DISPONIBLE</option><option>OCUPADA</option><option>LIMPIEZA</option><option>MANTENIMIENTO</option><option>BLOQUEADA</option>
                  </select>
                </td>
                <td className="text-xs text-gray-500">{r.reservations?.length || 0} reservas</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="bg-white p-4 rounded-2xl border text-sm">
        <div className="font-semibold">Leyenda + flujo real</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Verde disponible</span>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Rojo ocupada (check-in)</span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Amarillo limpieza (checkout)</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Gris mantenimiento</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">Cambiar estado persiste en DB y afecta disponibilidad pública inmediatamente.</div>
      </div>
    </div>
  )
}
