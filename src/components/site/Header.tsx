"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { hotel } from "@/lib/utils"
const nav=[
  {href:"/",label:"Inicio"},
  {href:"/habitaciones",label:"Habitaciones"},
  {href:"/galeria",label:"Galería"},
  {href:"/ubicacion",label:"Ubicación"},
  {href:"/servicios",label:"Servicios"},
  {href:"/contacto",label:"Contacto"},
]
export default function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#F0E6D2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-hotel.jpg"
            alt="Hotel Quintas de Bogotá"
            width={160}
            height={64}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n=> <Link key={n.href} href={n.href} className="text-sm text-[#000000]/80 hover:text-[#000000]">{n.label}</Link>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={hotel.whatsappUrl("Hola, quisiera reservar")} target="_blank" className="text-sm font-medium text-[#25D366]">WhatsApp</a>
          <Link href="/reservas"><Button variant="gold">Reservar ahora</Button></Link>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          {nav.map(n=> <Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block py-2">{n.label}</Link>)}
          <Link href="/reservas" onClick={()=>setOpen(false)}><Button variant="gold" className="w-full">Reservar ahora</Button></Link>
          <a href={hotel.whatsappUrl()} target="_blank" className="block text-center text-sm text-[#25D366] py-2">Hablar por WhatsApp</a>
        </div>
      )}
    </header>
  )
}
