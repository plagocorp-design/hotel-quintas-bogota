import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import BookingWidget from "@/components/site/BookingWidget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { hotel, formatCOP } from "@/lib/utils"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function Home(){
  const typesRaw = await prisma.roomType.findMany({ orderBy: { basePrice: "asc" } });
  const roomTypes = typesRaw.map(t=> ({...t, amenities: JSON.parse(t.amenities) as string[], images: JSON.parse(t.images) as string[] }));
  const cheapest = roomTypes[0]?.basePrice || 80000;
  const testimonials = [
    { name:"Estefanía", text:"El desayuno delicioso, muy amable todo el personal. Excelente ubicación", country:"Colombia" },
    { name:"Salcedo", text:"Nos gustó la amabilidad del personal. Nos hizo sentir como en casa.", country:"Colombia" },
    { name:"Zolange", text:"La alcoba 302 amplia e iluminada. Camas y almohadas cómodas. Baño con agua caliente. Desayuno completo.", country:"Colombia" },
  ];
  const services = [
    { icon:"📶", title:"WiFi gratis", desc:"Fibra en todo el hotel" },
    { icon:"🛎️", title:"Recepción 24h", desc:"Equipo siempre atento" },
    { icon:"🍳", title:"desayuno de 6:00 a 9:00", desc:"Casero y delicioso" },
    { icon:"🧹", title:"Limpieza diaria", desc:"Habitaciones impecables" },
    { icon:"👨‍👩‍👧‍👦", title:"Habitaciones familiares", desc:"Hasta 5 personas, interconectadas" },
    { icon:"🛡️", title:"Seguridad 24h", desc:"Cámaras y personal" },
    { icon:"🛋️", title:"Zonas de esparcimiento", desc:"Sala, patio al aire libre" },
    { icon:"🚿", title:"Agua caliente", desc:"Ducha con buena presión" },
    
  ];
  return (
    <>
      <Header/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/booking-photos/01-609103266.jpg" alt="Hotel Quintas de Bogotá - Fachada Teusaquillo" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/40 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <Badge className="bg-[#C9A86A] text-white mb-4">★ 8.8 Fabuloso · 470+ reseñas · Ubicación 9.5</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Tu casa en Bogotá,<br/>a minutos de todo</h1>
            <p className="mt-4 text-white/90 text-lg">En Teusaquillo, a 15 min del Aeropuerto El Dorado, 7 min de Corferias y 7 min de la Embajada USA. desayuno de 6:00 a 9:00, tranquilidad para descansar y servicio atento.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/reservas"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
              <a href={hotel.whatsappUrl()} target="_blank"><Button variant="outline" size="lg" className="bg-white">WhatsApp 317 6760460</Button></a>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <span>✓ WiFi gratis</span><span>✓ Recepción 24h</span><span>✓ Desayuno 6:00-9:00</span><span>✓ Cancelación 24h</span>
            </div>
          </div>
          <BookingWidget/>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-6 relative z-10">
        <Card className="p-4 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-2"><span className="text-xl">📍</span><b>9.5 Ubicación</b><span className="text-sm text-gray-500">Teusaquillo, cerca Embajada USA</span></div>
          <div className="flex items-center gap-2"><span className="text-xl">🧹</span><b>9.0 Limpieza</b><span className="text-sm text-gray-500">Habitaciones impecables</span></div>
          <div className="flex items-center gap-2"><span className="text-xl">🤝</span><b>9.4 Personal</b><span className="text-sm text-gray-500">Personal atento y servicial</span></div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#000000]">Habitaciones para todos</h2>
            <p className="text-gray-600">Desde {formatCOP(cheapest)} · Familiares hasta 5 personas · Bañera opcional</p>
          </div>
          <Link href="/habitaciones" className="text-sm text-[#C9A86A] font-semibold">Ver todas →</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {roomTypes.slice(0,3).map(r=>(
            <Card key={r.slug} className="overflow-hidden">
              <img src={r.images[0]} alt={r.name} className="h-48 w-full object-cover"/>
              <CardContent>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-500">{r.description.slice(0,60)} · hasta {r.capacity} personas</div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-[#000000]">Desde {formatCOP(r.basePrice)}</span>
                  <Link href={`/habitaciones#${r.slug}`}><Button size="sm">Ver detalle</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F1E8] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-center">Ubicación estratégica</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              {t:"Aeropuerto El Dorado", d:"8 km · 15 min en carro", icon:"✈️"},
              {t:"Corferias", d:"7 min a pie", icon:"🏢"},
              {t:"Embajada USA", d:"7 min a pie", icon:"🇺🇸"},
              {t:"Parque Simón Bolívar", d:"5 km · pulmón de la ciudad", icon:"🌳"},
            ].map(c=>(
              <Card key={c.t} className="text-center p-6">
                <div className="text-3xl">{c.icon}</div>
                <div className="font-semibold mt-2">{c.t}</div>
                <div className="text-sm text-gray-500">{c.d}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="font-serif text-2xl font-bold">Servicios que enamoran</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {services.map(s=> (
            <Card key={s.title} className="p-4 flex gap-3 items-start">
              <span className="text-2xl">{s.icon}</span>
              <div><div className="font-semibold text-sm">{s.title}</div><div className="text-sm text-gray-500">{s.desc}</div></div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen nuestros huéspedes</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {testimonials.map(t=>(
              <Card key={t.name} className="bg-white text-[#000000] p-6">
                <div className="text-[#C9A86A]">★★★★★</div>
                <p className="mt-2 text-sm">“{t.text}”</p>
                <div className="mt-3 text-sm font-semibold">{t.name} · {t.country}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 text-center">
        <h2 className="font-serif text-3xl font-bold">¿Listo para reservar?</h2>
        <p className="text-gray-600 mt-2">Igualamos precio Booking · Confirmación inmediata por WhatsApp</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/reservas"><Button variant="gold" size="lg">Reservar en la web</Button></Link>
          <a href={hotel.whatsappUrl("Quiero reservar del ...")} target="_blank"><Button size="lg">Hablar por WhatsApp</Button></a>
        </div>
      </section>

      <Footer/>
    </>
  )
}
