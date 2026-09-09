import Link from "next/link"
import { hotel } from "@/lib/utils"
export default function Footer(){
  return (
    <footer className="bg-[#1A2B4A] text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-serif text-xl font-bold">Hotel Quintas de Bogotá</div>
          <p className="text-sm text-white/70 mt-3">{hotel.address}<br/>Tel: {hotel.phone} · {hotel.email}</p>
          <div className="mt-4 flex gap-2">
            <a href={hotel.whatsappUrl()} target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm">WhatsApp</a>
            <a href={hotel.mapsUrl} target="_blank" className="border border-white/30 px-4 py-2 rounded-full text-sm">Ver mapa</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Explorar</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/habitaciones">Habitaciones</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/ubicacion">Ubicación</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Reservas</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/reservas">Motor de reservas</Link></li>
            <li>Check-in 14:00 · Check-out flexible</li>
            <li>Cancelación gratuita 48h</li>
            <li>Puntuación 8.8 Fabuloso (472 reseñas)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Licencia 49716</li>
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>© 2026 Hotel Quintas de Bogotá</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
