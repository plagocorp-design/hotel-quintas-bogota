"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCOP } from "@/lib/utils"

export default function Tarifas(){
  const [types,setTypes]=useState<any[]>([])
  const [seasons,setSeasons]=useState<any[]>([])
  const [newSeason,setNewSeason]=useState({name:"", start:"", end:"", multiplier:"1.3", roomTypeId:""})
  const load=async()=>{
    const r=await fetch("/api/tarifas").then(x=>x.json())
    setTypes(r.types); setSeasons(r.seasons)
  }
  useEffect(()=>{load()},[])
  const updatePrice=async(id:string, price:number)=>{
    await fetch("/api/tarifas",{method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({typeId:id, basePrice:price})})
    load()
  }
  const createSeason=async()=>{
    await fetch("/api/tarifas",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({...newSeason, multiplier: Number(newSeason.multiplier)})})
    setNewSeason({name:"", start:"", end:"", multiplier:"1.3", roomTypeId:""}); load()
  }
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl font-bold">Precios y Tarifas — Dinámico real</h1>
      <Card className="p-4">
        <div className="font-semibold">Precios base (afectan motor público inmediatamente)</div>
        <div className="mt-3 grid md:grid-cols-2 gap-3">
          {types.map((t:any)=>(
            <label key={t.id} className="flex justify-between items-center border rounded-xl px-3 py-2 gap-2">
              <span className="text-sm">{t.name} <span className="text-xs text-gray-500">{formatCOP(t.basePrice)}</span></span>
              <div className="flex gap-1">
                <input type="number" defaultValue={t.basePrice} id={`price-${t.id}`} className="w-24 border rounded px-2 py-1 text-right"/>
                <Button size="sm" onClick={()=>{ const v=(document.getElementById(`price-${t.id}`) as HTMLInputElement).value; updatePrice(t.id, parseInt(v))}}>Guardar</Button>
              </div>
            </label>
          ))}
        </div>
      </Card>
      <Card className="p-4">
        <div className="font-semibold">Temporadas (multiplicador)</div>
        <div className="mt-3 space-y-2 text-sm">
          {seasons.map((s:any)=> <div key={s.id} className="flex justify-between border rounded-xl px-3 py-2"><span>{s.name} {new Date(s.start).toLocaleDateString()}→{new Date(s.end).toLocaleDateString()}</span><span>x{s.multiplier}</span></div>)}
          {seasons.length===0 && <div className="text-gray-500">Sin temporadas</div>}
        </div>
        <div className="mt-4 grid md:grid-cols-5 gap-2">
          <input placeholder="Nombre" value={newSeason.name} onChange={e=>setNewSeason({...newSeason,name:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input type="date" value={newSeason.start} onChange={e=>setNewSeason({...newSeason,start:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input type="date" value={newSeason.end} onChange={e=>setNewSeason({...newSeason,end:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <input type="number" step="0.1" value={newSeason.multiplier} onChange={e=>setNewSeason({...newSeason,multiplier:e.target.value})} className="border rounded-xl px-3 py-2"/>
          <Button onClick={createSeason}>Crear temporada</Button>
        </div>
      </Card>
    </div>
  )
}
