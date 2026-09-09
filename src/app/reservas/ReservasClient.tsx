"use client"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCOP, hotel } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function ReservasClient(){
  const sp = useSearchParams()
  const [types,setTypes]=useState<any[]>([])
  const [form,setForm]=useState({
    name:"",email:"",phone:"",
    checkIn: sp.get("checkIn")||"",
    checkOut: sp.get("checkOut")||"",
    adults: sp.get("adults")||"2",
    children:"0",
    roomTypeSlug: sp.get("roomType")||"doble",
    comments:""
  })
  const [pricing,setPricing]=useState<any>(null)
  const [done,setDone]=useState<any>(null)
  const [error,setError]=useState("")

  useEffect(()=>{
    fetch("/api/room-types").then(r=>r.json()).then(setTypes)
  },[])

  useEffect(()=>{
    if(form.checkIn && form.checkOut && form.roomTypeSlug){
      const t=types.find(x=>x.slug===form.roomTypeSlug)
      if(!t) return
      fetch(`/api/availability?checkIn=${form.checkIn}&checkOut=${form.checkOut}&adults=${form.adults}`)
        .then(r=>r.json()).then(data=>{
          const found=data.find((d:any)=>d.roomType.slug===form.roomTypeSlug)
          if(found) setPricing(found.pricing)
        })
    }
  },[form.checkIn, form.checkOut, form.roomTypeSlug, form.adults, types])

  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    setError("")
    const res=await fetch("/api/bookings",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({
      name:form.name,email:form.email,phone:form.phone,
      checkIn:form.checkIn,checkOut:form.checkOut,
      adults: Number(form.adults), children: Number(form.children),
      roomTypeSlug: form.roomTypeSlug, source:"WEB", notes: form.comments
    })})
    const data=await res.json()
    if(!res.ok){ setError(data.error || "Error"); return }
    setDone(data)
  }

  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-serif text-3xl font-bold">Motor de reservas real</h1>
          <p className="text-gray-600">Disponibilidad en tiempo real · Reserva crea ocupación inmediata</p>
          {done ? (
            <Card className="p-6 mt-6 bg-green-50 border-green-200">
              <div className="font-bold text-green-800">¡Reserva creada! {done.reservation.code}</div>
              <p className="text-sm mt-2">Habitación asignada: {done.room.number} · Total {formatCOP(done.pricing.total)} ({done.pricing.nights} noche(s))</p>
              <p className="text-sm">Estado: PENDIENTE — te confirmaremos por WhatsApp.</p>
              <a href={hotel.whatsappUrl(`Hola, acabo de reservar ${done.reservation.code} del ${form.checkIn} al ${form.checkOut}`)} target="_blank"><Button variant="gold" className="mt-3">Confirmar por WhatsApp</Button></a>
              <Button variant="outline" className="mt-2 ml-2" onClick={()=>setDone(null)}>Nueva reserva</Button>
            </Card>
          ):(
            <form onSubmit={submit} className="mt-6 grid gap-3 bg-white p-6 rounded-2xl border">
              <div className="grid md:grid-cols-2 gap-3">
                <label className="text-sm">Nombre<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
                <label className="text-sm">Email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="opcional"/></label>
              </div>
              <label className="text-sm">Teléfono / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+57 3xx..." className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm">Llegada<input type="date" required value={form.checkIn} onChange={e=>setForm({...form,checkIn:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
                <label className="text-sm">Salida<input type="date" required value={form.checkOut} onChange={e=>setForm({...form,checkOut:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <label className="text-sm">Adultos<select value={form.adults} onChange={e=>setForm({...form,adults:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2">{[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}</select></label>
                <label className="text-sm">Niños<select value={form.children} onChange={e=>setForm({...form,children:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2">{[0,1,2].map(n=><option key={n} value={n}>{n}</option>)}</select></label>
                <label className="text-sm">Habitación<select value={form.roomTypeSlug} onChange={e=>setForm({...form,roomTypeSlug:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2">{types.map(r=><option key={r.slug} value={r.slug}>{r.name}</option>)}</select></label>
              </div>
              <label className="text-sm">Comentarios<textarea value={form.comments} onChange={e=>setForm({...form,comments:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2" rows={2}/></label>
              {pricing && <div className="bg-[#F5F1E8] p-3 rounded-xl text-sm">Total: <b>{formatCOP(pricing.total)}</b> · {pricing.nights} noche(s) · {formatCOP(pricing.unit)}/noche {pricing.multiplier>1 && `×${pricing.multiplier} temporada`}</div>}
              {error && <div className="bg-red-50 text-red-700 p-2 rounded-xl text-sm">{error}</div>}
              <Button type="submit" variant="gold" size="lg" className="w-full">Confirmar reserva real</Button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="font-semibold">Flujo punta a punta</div>
            <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
              <li>Verifica disponibilidad transaccional (evita overbooking)</li>
              <li>Asigna habitación real y crea reserva en DB</li>
              <li>Actualiza calendario y dashboard al instante</li>
              <li>WhatsApp confirmación opcional</li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer/>
    </>
  )
}
