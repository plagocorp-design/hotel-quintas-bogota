"use client"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { hotel } from "@/lib/utils"
import { useState } from "react"
export default function Contacto(){
  const [sent,setSent]=useState(false)
  const [form,setForm]=useState({name:"",email:"",phone:"",message:""})
  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    const res=await fetch("/api/contact",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form)})
    if(res.ok) setSent(true)
  }
  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-serif text-3xl font-bold">Contacto</h1>
          <Card className="p-6 mt-4 space-y-2">
            <div>📍 {hotel.address}</div>
            <div>📞 {hotel.phone} · <a href={`tel:${hotel.phone}`} className="text-[#C9A86A]">Llamar</a></div>
            <div>✉️ {hotel.email}</div>
            <div className="flex gap-2 mt-3">
              <a href={hotel.whatsappUrl()} target="_blank"><Button variant="gold">WhatsApp</Button></a>
              <a href={hotel.mapsUrl} target="_blank"><Button variant="outline">Ver mapa</Button></a>
            </div>
          </Card>
          <form onSubmit={submit} className="bg-white p-6 rounded-2xl border mt-4 grid gap-3">
            <input placeholder="Nombre" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="border rounded-xl px-3 py-2"/>
            <input placeholder="Email" type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="border rounded-xl px-3 py-2"/>
            <input placeholder="Teléfono" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="border rounded-xl px-3 py-2"/>
            <textarea placeholder="Mensaje" required rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="border rounded-xl px-3 py-2"/>
            <Button type="submit">Enviar mensaje (guarda en DB)</Button>
            {sent && <div className="text-sm text-green-700 bg-green-50 p-2 rounded">Mensaje guardado en base de datos. Te responderemos pronto.</div>}
          </form>
        </div>
        <div className="rounded-2xl overflow-hidden border h-[500px]">
          <iframe title="map" src="https://www.google.com/maps?q=Cl.+22+Bis+%2344A-19+Teusaquillo+Bogota&z=15&output=embed" width="100%" height="100%"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
