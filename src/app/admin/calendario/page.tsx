"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Calendario(){
  const [rooms,setRooms]=useState<any[]>([])
  const [reservations,setReservations]=useState<any[]>([])
  const [blocks,setBlocks]=useState<any[]>([])
  const [offset,setOffset]=useState(0)
  const days = Array.from({length:14},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()+offset+i); return d})

  const load=async()=>{
    const [r,res,b]=await Promise.all([fetch("/api/rooms").then(x=>x.json()), fetch("/api/bookings").then(x=>x.json()), fetch("/api/blocked-dates").then(x=>x.json())])
    setRooms(r); setReservations(res.filter((x:any)=> ["PENDIENTE","CONFIRMADA","CHECKIN"].includes(x.status))); setBlocks(b)
  }
  useEffect(()=>{load()},[])

  const isOccupied=(roomId:string, day:Date)=>{
    const d=new Date(day); d.setHours(12,0,0,0)
    // check reservation
    const found=(resA:any) => {
      const ci=new Date(resA.checkIn); const co=new Date(resA.checkOut)
      return d>=ci && d<co
    }
    const res=reservations.find((r:any)=> r.roomId===roomId && found(r))
    if(res) return {type:"reserva", label: res.code.slice(-4), color:"bg-red-500 text-white", tip: `${res.code} ${res.guest.name}`}
    const blk=blocks.find((b:any)=> b.roomId===roomId && d>=new Date(b.start) && d<new Date(b.end))
    if(blk) return {type:"bloqueo", label:"BLOQ", color:"bg-orange-500 text-white", tip: blk.reason}
    // check room status
    const room=rooms.find(r=>r.id===roomId)
    if(room?.status==="MANTENIMIENTO") return {type:"mant", label:"MANT", color:"bg-gray-400 text-white"}
    if(room?.status==="LIMPIEZA") return {type:"limpieza", label:"LIMP", color:"bg-yellow-400"}
    return {type:"free", label:"✓", color:"bg-green-100"}
  }

  const blockDate=async(roomId:string, day:Date)=>{
    if(!confirm(`¿Bloquear ${rooms.find(r=>r.id===roomId)?.number} el ${day.toLocaleDateString()}?`)) return
    const start=new Date(day); start.setHours(14,0,0,0)
    const end=new Date(day); end.setDate(end.getDate()+1); end.setHours(12,0,0,0)
    await fetch("/api/blocked-dates",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({roomId, start:start.toISOString(), end:end.toISOString(), reason:"Bloqueo manual"})})
    load()
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold">Calendario — Channel Manager real</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={()=>setOffset(o=>o-7)}>← 7 días</Button>
          <Button variant="outline" size="sm" onClick={()=>setOffset(0)}>Hoy</Button>
          <Button variant="outline" size="sm" onClick={()=>setOffset(o=>o+7)}>7 días →</Button>
        </div>
      </div>
      <Card className="p-4 overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="grid" style={{gridTemplateColumns:`140px repeat(${days.length},1fr)`}}>
            <div className="font-semibold p-2 border-b">Habitación</div>
            {days.map(d=> <div key={d.toISOString()} className="text-xs p-2 border-b text-center">{d.toLocaleDateString("es-CO",{day:"2-digit",month:"short"})}</div>)}
            {rooms.map((r:any)=> (
              <div key={r.id} className="contents">
                <div className="p-2 border-b text-sm font-medium">#{r.number} {r.type.name.slice(0,10)}</div>
                {days.map(d=>{
                  const info=isOccupied(r.id,d)
                  return <button key={r.id+d.toISOString()} title={info.tip || ""} onClick={()=>blockDate(r.id,d)} className={`m-1 h-8 rounded-lg grid place-items-center text-xs ${info.color}`}>{info.label}</button>
                })}
              </div>
            ))}
          </div>
        </div>
      </Card>
      <div className="text-sm text-gray-600">✓ disponible (verde) · rojo reserva · naranja bloqueo manual (click para bloquear) · gris mantenimiento · amarillo limpieza. Bloqueos se reflejan inmediatamente en motor público.</div>
    </div>
  )
}
