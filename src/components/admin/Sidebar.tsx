"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const items=[
  {href:"/admin",label:"Dashboard",icon:"📊"},
  {href:"/admin/reservas",label:"Reservas",icon:"📅"},
  {href:"/admin/calendario",label:"Calendario",icon:"🗓️"},
  {href:"/admin/habitaciones",label:"Habitaciones",icon:"🛏️"},
  {href:"/admin/whatsapp",label:"WhatsApp",icon:"💬"},
  {href:"/admin/huespedes",label:"Huéspedes",icon:"👥"},
  {href:"/admin/tarifas",label:"Tarifas",icon:"💰"},
  {href:"/admin/analytics",label:"Estadísticas",icon:"📊"},
  {href:"/admin/reportes",label:"Reportes",icon:"📈"},
  {href:"/admin/configuracion",label:"Configuración",icon:"⚙️"},
]

export default function Sidebar(){
  const path=usePathname()
  const router=useRouter()
  const [collapsed,setCollapsed]=useState(false)
  const [mobileOpen,setMobileOpen]=useState(false)

  const logout=async()=>{
    await fetch("/api/auth/logout",{method:"POST"})
    router.push("/admin/login")
  }

  const NavContent = ({ isCollapsed }: { isCollapsed: boolean }) => (
    <>
      <div className={cn("p-4 border-b border-white/10 flex items-center gap-3", isCollapsed && "justify-center p-3")}>
        {!isCollapsed ? (
          <div className="flex-1 flex items-center gap-2">
            <Image src="/logo-hotel.jpg" alt="Hotel Quintas" width={120} height={48} className="h-8 w-auto object-contain" />
            <div className="text-xs text-white/60 leading-none">PMS · Admin</div>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-lg bg-[#000000] border border-[#C9A86A]/30 grid place-items-center font-serif font-bold text-[#C9A86A]">H</div>
        )}
        <button
          onClick={()=>setCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expandir menú" : "Plegar menú"}
          className="hidden md:grid place-items-center h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0"
          title={isCollapsed ? "Expandir" : "Plegar"}
        >
          {isCollapsed ? "»" : "«"}
        </button>
        {/* mobile close */}
        <button onClick={()=>setMobileOpen(false)} className="md:hidden h-8 w-8 rounded-lg bg-white/10 grid place-items-center">✕</button>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
        {items.map(i=>{
          const active=path===i.href
          return (
            <Link
              key={i.href}
              href={i.href}
              onClick={()=>setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                active ? "bg-white text-[#000000] shadow-sm" : "text-white/80 hover:bg-white/10 hover:text-white",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? i.label : undefined}
            >
              <span className="text-base shrink-0">{i.icon}</span>
              {!isCollapsed && <span className="truncate">{i.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className={cn("p-3 border-t border-white/10", isCollapsed && "p-2")}>
        {!isCollapsed ? (
          <>
            <button onClick={logout} className="w-full bg-white/10 hover:bg-white/20 rounded-xl py-2 text-sm transition-colors">Cerrar sesión</button>
            <div className="text-xs text-white/60 mt-2 text-center">v1.0 · Sync real</div>
          </>
        ) : (
          <button onClick={logout} className="w-full h-9 grid place-items-center bg-white/10 hover:bg-white/20 rounded-xl text-sm" title="Cerrar sesión">⎋</button>
        )}
      </div>
    </>
  )

  return (
    <>
      {/* Mobile top bar trigger */}
      <button
        onClick={()=>setMobileOpen(true)}
        className="md:hidden fixed top-3 left-3 z-40 h-9 w-9 rounded-xl bg-[#000000] text-white grid place-items-center shadow-lg"
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="flex-1 bg-black/40" onClick={()=>setMobileOpen(false)} />
          <aside className="w-64 shrink-0 bg-[#000000] text-white h-screen flex flex-col overflow-hidden">
            <NavContent isCollapsed={false} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar - deslizador separado */}
      <aside
        className={cn(
          "hidden md:flex flex-col shrink-0 bg-[#000000] text-white h-screen overflow-hidden transition-all duration-300 border-r border-white/5",
          collapsed ? "w-[64px]" : "w-64"
        )}
      >
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <NavContent isCollapsed={collapsed} />
        </div>
      </aside>
    </>
  )
}
