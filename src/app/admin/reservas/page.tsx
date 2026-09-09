"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatCOP } from "@/lib/utils"

const statuses=["TODAS","PENDIENTE","CONFIRMADA","CHECKIN","CHECKOUT","CANCELADA"]
export default function AdminReservas(){
  const [filter,setFilter]=useState("TODAS")
  const [reservas,setReservas]=useState<any[]>([])
  const [types,setTypes]=useState<any[]>([])
  const [showForm,setShowForm]=useState(false)
  const [form,setForm]=useState({name:"",phone:"",email:"",roomTypeSlug:"doble",checkIn:"",checkOut:"",adults:2, source:"MANUAL", notes:""})
  const [search,setSearch]=useState("")

  const load=async()=>{
    const q = filter==="TODAS" ? "" : `?status=${filter}`
    const [r,t]=await Promise.all([fetch(`/api/bookings${q}`).then(x=>x.json()), fetch("/api/room-types").then(x=>x.json())])
    setReservas(r); setTypes(t)
  }
  useEffect(()=>{load()},[filter])
  useEffect(()=>{ if(types[0] && !form.roomTypeSlug) setForm(f=>({...f, roomTypeSlug: types[0].slug})) },[types])

  const create=async()=>{
    const res=await fetch("/api/bookings",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({
      name:form.name, phone:form.phone, email:form.email, checkIn:form.checkIn, checkOut:form.checkOut, adults:Number(form.adults), roomTypeSlug: form.roomTypeSlug, source:form.source, notes: form.notes
    })})
    const data=await res.json()
    if(!res.ok) return alert(data.error)
    alert(`Reserva creada ${data.reservation.code} habitación ${data.room.number}`)
    setShowForm(false); load()
  }

  const action=async(id:string, act:string)=>{
    const res=await fetch(`/api/reservations/${id}`,{method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({action: act})})
    const data=await res.json()
    if(!res.ok) return alert(data.error)
    load()
  }

  const filtered = search ? reservas.filter(r=> r.code.includes(search) || r.guest.name.toLowerCase().includes(search.toLowerCase())) : reservas

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <h1 className="font-serif text-2xl font-bold">Reservas — Real DB + transacciones</h1>
        <Button variant="gold" onClick={()=>setShowForm(!showForm)}>{showForm?"Cerrar":" + Crear reserva manual"}</Button>
      </div>

      {showForm && (
        <Card className="p-4 grid md:grid-cols-3 gap-3">
          <input placeholder="Huésped" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input placeholder="Tel/WhatsApp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input placeholder="Email opcional" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <select value={form.roomTypeSlug} onChange={e=>setForm({...form,roomTypeSlug:e.target.value})} className="border rounded-xl px-3 py-2">
            {types.map(t=> <option key={t.slug} value={t.slug}>{t.name}</option>)}
          </select>
          <select value={form.source} onChange={e=>setForm({...form,source:e.target.value})} className="border rounded-xl px-3 py-2">
            <option value="MANUAL">Manual</option><option value="WALKIN">Walk-in</option><option value="WHATSAPP">WhatsApp</option><option value="WEB">Web</option><option value="BOOKING">Booking</option>
          </select>
          <input type="number" value={form.adults} onChange={e=>setForm({...form,adults:parseInt(e.target.value)})} className="border rounded-xl px-3 py-2" placeholder="Adultos"/>
          <input type="date" value={form.checkIn} onChange={e=>setForm({...form,checkIn:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input type="date" value={form.checkOut} onChange={e=>setForm({...form,checkOut:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input placeholder="Notas" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="border rounded-xl px-3 py-2 md:col-span-3"/>
          <Button onClick={create} className="md:col-span-3">Crear reserva (verifica disponibilidad real)</Button>
        </Card>
      )}

      <div className="flex gap-2 flex-wrap items-center">
        {statuses.map(s=> <button key={s} onClick={()=>setFilter(s)} className={`px-3 py-1 rounded-full text-xs ${filter===s?"bg-[#1A2B4A] text-white":"bg-white border"}`}>{s}</button>)}
        <input placeholder="Buscar código/huésped" value={search} onChange={e=>setSearch(e.target.value)} className="ml-auto border rounded-full px-3 py-1 text-sm"/>
      </div>

      <Card className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-gray-500"><th className="text-left py-2">Código</th><th>Huésped</th><th>Hab</th><th>Fechas</th><th>Precio</th><th>Origen</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {filtered.map((r:any)=>(
              <tr key={r.id} className="border-t">
                <td className="font-mono text-xs py-2">{r.code}</td>
                <td>{r.guest.name}<div className="text-xs text-gray-500">{r.guest.phone}</div></td>
                <td>{r.room?.number || "-"}</td>
                <td className="text-xs">{new Date(r.checkIn).toLocaleDateString()} → {new Date(r.checkOut).toLocaleDateString()}</td>
                <td>{formatCOP(r.totalPrice)}<div className="text-xs">{r.paymentStatus}</div></td>
                <td><Badge className={r.source==="BOOKING"?"bg-blue-100 text-blue-700":r.source==="WHATSAPP"?"bg-green-100 text-green-700":"bg-gray-100"}>{r.source}</Badge></td>
                <td><Badge className="bg-[#F5F1E8]">{r.status}</Badge></td>
                <td className="flex gap-1 flex-wrap py-1">
                  {["PENDIENTE","CONFIRMADA"].includes(r.status) && <button onClick={()=>action(r.id,"checkin")} className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Check-in → OCUPADA</button>}
                  {r.status==="CHECKIN" && <button onClick={()=>action(r.id,"checkout")} className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Check-out → LIMPIEZA</button>}
                  {r.status!=="CANCELADA" && r.status!=="CHECKOUT" && <button onClick={()=>{ if(confirm("¿Cancelar?")) action(r.id,"cancel")}} className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">Cancelar</button>}
                  {r.status!=="CANCELADA" && <button onClick={()=>action(r.id,"markPaid")} className="text-xs bg-[#1A2B4A] text-white px-2 py-1 rounded-full">Pagar</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length===0 && <div className="text-center py-8 text-gray-500">Sin reservas con ese filtro. Crea la primera.</div>}
      </Card>
    </div>
  )
}
