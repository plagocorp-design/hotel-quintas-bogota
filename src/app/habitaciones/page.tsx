import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCOP } from "@/lib/utils"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export const dynamic = "force-dynamic"

const PLACEHOLDERS: Record<string, string> = {
  sencilla: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
  doble: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
  triple: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
  cuadruple: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
}

export default async function Habitaciones({searchParams}:{searchParams: Promise<{personas?:string}>}){
  const sp = await searchParams
  const personas = parseInt(sp.personas || "0")
  const typesRaw = await prisma.roomType.findMany({ orderBy:{basePrice:"asc"}})
  const roomTypes = typesRaw.map(t=> ({...t, amenities: JSON.parse(t.amenities) as string[], images: JSON.parse(t.images) as string[]}))
  const filtered = personas ? roomTypes.filter(r=>r.capacity>=personas) : roomTypes
  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Habitaciones</h1>
        <p className="text-gray-600">Contenido 100% dinámico desde base de datos. {filtered.length} tipos disponibles.</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <span className="text-sm py-2">Filtrar por personas:</span>
          {[0,1,2,3,5].map(n=> <Link key={n} href={n===0?"/habitaciones":`/habitaciones?personas=${n}`} className={`px-3 py-1 rounded-full text-sm border ${personas===n?"bg-[#000000] text-white":"bg-white"}`}>{n===0?"Todas":`${n} pers`}</Link>)}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {filtered.map(r=>{
            const imgSrc = r.images?.[0] || PLACEHOLDERS[r.slug] || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop"
            return (
              <Card key={r.slug} id={r.slug} className="overflow-hidden">
                <img src={imgSrc} alt={r.name} className="h-56 w-full object-cover" loading="lazy"/>
                <CardContent>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="font-serif text-xl font-bold">{r.name}</div>
                      <div className="text-sm text-gray-500">Max {r.capacity} personas</div>
                      <p className="text-sm mt-2">{r.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">{r.amenities.map((a:string)=> <span key={a} className="text-xs bg-[#F5F1E8] px-2 py-1 rounded-full">{a}</span>)}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-lg">Desde {formatCOP(r.basePrice)}</div>
                      <div className="text-xs text-gray-500">por noche</div>
                      <Link href={`/reservas?roomType=${r.slug}`}><Button variant="gold" size="sm" className="mt-2">Reservar</Button></Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}
