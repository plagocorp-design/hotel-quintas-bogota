"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WhatsAppPanel(){
  const [convs,setConvs]=useState<any[]>([])
  const [active,setActive]=useState<any>(null)
  const [messages,setMessages]=useState<any[]>([])
  const [input,setInput]=useState("")
  const [phone,setPhone]=useState("")

  const loadConvs=async()=>{
    const r=await fetch("/api/whatsapp/conversations")
    if(r.ok){ const d=await r.json(); setConvs(d); if(d[0] && !active) setActive(d[0]) }
  }
  const loadMsgs=async(id:string)=>{
    const r=await fetch(`/api/whatsapp/messages?conversationId=${id}`)
    if(r.ok) setMessages(await r.json())
  }
  useEffect(()=>{loadConvs()},[])
  useEffect(()=>{ if(active) loadMsgs(active.id)},[active])

  const send=async()=>{
    if(!input.trim() || !active) return
    await fetch("/api/whatsapp/messages",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({conversationId:active.id, text:input})})
    setInput(""); loadMsgs(active.id)
  }
  const createConv=async()=>{
    if(!phone) return
    const r=await fetch("/api/whatsapp/conversations",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({phone, contactName:phone})})
    const d=await r.json(); setPhone(""); loadConvs(); setActive(d)
  }

  return (
    <div className="grid md:grid-cols-3 gap-4 h-[calc(100vh-140px)]">
      <Card className="p-0 overflow-hidden flex flex-col">
        <div className="p-4 border-b font-semibold flex justify-between">Conversaciones <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Meta Cloud API</span></div>
        <div className="p-2 flex gap-2">
          <input placeholder="+57 3xx..." value={phone} onChange={e=>setPhone(e.target.value)} className="flex-1 border rounded-full px-3 py-1 text-sm"/>
          <Button size="sm" onClick={createConv}>Nueva</Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {convs.map(c=> (
            <button key={c.id} onClick={()=>setActive(c)} className={`w-full text-left p-4 border-b hover:bg-gray-50 ${active?.id===c.id?"bg-[#F5F1E8]":""}`}>
              <div className="flex justify-between"><span className="font-semibold text-sm">{c.contactName||c.phone}</span><span className="text-xs text-gray-500">{new Date(c.lastMessageAt).toLocaleDateString()}</span></div>
              <div className="text-xs text-gray-500">{c.phone}</div>
              {c.unreadCount>0 && <span className="bg-[#25D366] text-white text-xs px-2 py-0.5 rounded-full mt-1 inline-block">{c.unreadCount} nuevos</span>}
            </button>
          ))}
          {convs.length===0 && <div className="p-4 text-sm text-gray-500">Sin conversaciones. Los mensajes entrantes por webhook aparecerán aquí, o crea una手动.</div>}
        </div>
        <div className="p-3 border-t text-xs text-gray-500">Webhook: /api/whatsapp/webhook · Verify: {process.env.NEXT_PUBLIC_WHATSAPP_VERIFY || "quintas_verify_2026"}</div>
      </Card>

      <Card className="md:col-span-2 flex flex-col p-0 overflow-hidden">
        {!active ? <div className="p-8 text-center text-gray-500">Selecciona una conversación</div> : (
          <>
            <div className="p-4 border-b flex justify-between items-center">
              <div><div className="font-semibold">{active.contactName||active.phone}</div><div className="text-xs text-gray-500">{active.phone}</div></div>
              <a href={`/admin/reservas?phone=${active.phone}`}><Button variant="gold" size="sm">Crear reserva desde chat</Button></a>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F5F1E8]">
              {messages.map((m:any)=> (
                <div key={m.id} className={`max-w-[70%] p-3 rounded-2xl text-sm ${m.direction==="INBOUND"?"bg-white":"bg-[#DCF8C6] ml-auto"}`}>{m.text}</div>
              ))}
              {messages.length===0 && <div className="text-sm text-gray-500">Sin mensajes. Escribe el primero.</div>}
            </div>
            <div className="p-3 border-t bg-white">
              <div className="flex gap-2 mb-2">
                <button className="text-xs border px-2 py-1 rounded-full" onClick={()=>setInput("Hola, tu reserva está confirmada. ¡Te esperamos en Cl. 22 Bis #44A-19!")}>Plantilla: Confirmación</button>
                <button className="text-xs border px-2 py-1 rounded-full" onClick={()=>setInput("Recordatorio: tu check-in es mañana a las 14:00")}>Recordatorio 24h</button>
              </div>
              <div className="flex gap-2">
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Escribe un mensaje..." className="flex-1 border rounded-full px-4 py-2" onKeyDown={e=>e.key==="Enter"&&send()}/>
                <Button onClick={send}>Enviar (guarda real)</Button>
              </div>
              <div className="text-xs text-gray-500 mt-2">Si WHATSAPP_TOKEN y PHONE_NUMBER_ID están en .env, se envía a Meta Graph API. Si no, queda guardado y en SyncLog.</div>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
