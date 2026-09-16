"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Configuracion(){
  const [settings,setSettings]=useState<any>(null)
  const [users,setUsers]=useState<any[]>([])
  const [err,setErr]=useState("")
  const router=useRouter()
  useEffect(()=>{
    fetch("/api/hotel-settings").then(r=>{if(!r.ok)throw r;return r.json()}).then(setSettings).catch(()=>{setErr("Sesión expirada");setTimeout(()=>router.push("/admin/login"),1500)})
  },[router])
  const save=async()=>{
    const res=await fetch("/api/hotel-settings",{method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(settings)})
    if(res.ok) alert("Configuración guardada en DB")
  }
  if(err) return <div className="p-8 text-center"><div className="text-red-600 text-lg font-semibold">{err}</div><div className="text-sm text-gray-500 mt-2">Redirigiendo al login...</div></div>
  if(!settings) return <div className="p-8">Cargando configuración...</div>
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl font-bold">Configuración — Persistente en DB</h1>
      <Card className="p-4 grid gap-3">
        <label className="text-sm">Nombre<input value={settings.name} onChange={e=>setSettings({...settings, name:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
        <label className="text-sm">Dirección<input value={settings.address} onChange={e=>setSettings({...settings, address:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Teléfono<input value={settings.phone} onChange={e=>setSettings({...settings, phone:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
          <label className="text-sm">Email<input value={settings.email} onChange={e=>setSettings({...settings, email:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Check-in<input value={settings.checkInTime} onChange={e=>setSettings({...settings, checkInTime:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
          <label className="text-sm">Check-out<input value={settings.checkOutTime} onChange={e=>setSettings({...settings, checkOutTime:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2"/></label>
        </div>
        <label className="text-sm">Política cancelación<textarea value={settings.cancellationPolicy} onChange={e=>setSettings({...settings, cancellationPolicy:e.target.value})} className="mt-1 w-full border rounded-xl px-3 py-2" rows={2}/></label>
        <Button onClick={save} className="w-fit">Guardar cambios (DB)</Button>
      </Card>
      <Card className="p-4">
        <div className="font-semibold">Integraciones</div>
        <div className="mt-3 grid gap-2 text-sm">
          <label>Booking API Key<input value={settings.bookingApiKey||""} onChange={e=>setSettings({...settings, bookingApiKey:e.target.value})} placeholder="Pegar aquí cuando tengas credenciales reales" className="w-full border rounded-xl px-3 py-2 mt-1"/></label>
          <label>WhatsApp Token<input value={settings.whatsappToken||""} onChange={e=>setSettings({...settings, whatsappToken:e.target.value})} placeholder="EAA..." className="w-full border rounded-xl px-3 py-2 mt-1"/></label>
          <label>WhatsApp Phone ID<input value={settings.whatsappPhoneId||""} onChange={e=>setSettings({...settings, whatsappPhoneId:e.target.value})} placeholder="123..." className="w-full border rounded-xl px-3 py-2 mt-1"/></label>
          <div className="text-xs text-gray-500">Cuando guardes, también se recomienda poner estos valores en .env (WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, BOOKING_API_KEY) y reiniciar.</div>
          <Button onClick={save}>Guardar integraciones</Button>
        </div>
      </Card>
      <Card className="p-4">
        <div className="font-semibold">Usuarios y roles</div>
        <div className="text-sm mt-2">Gestión completa vía DB, roles validados en cada endpoint y middleware.</div>
      </Card>
    </div>
  )
}
