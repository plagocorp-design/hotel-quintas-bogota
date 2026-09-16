"use client"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { buildBookingUrl } from "@/lib/whatsapp"

interface RoomType {
  slug: string
  name: string
  basePrice: number
  description: string
  capacity: number
}

function formatCOP(v: number) { return "$" + v.toLocaleString("es-CO") }

function todayStr() {
  const d = new Date(); d.setDate(d.getDate() + 1)
  return d.toISOString().split("T")[0]
}

function formatDateShort(ds: string) {
  if (!ds) return ""
  const d = new Date(ds + "T12:00:00")
  return d.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" })
}

export default function ReservasClient() {
  const [step, setStep] = useState(0)
  const [rooms, setRooms] = useState<RoomType[]>([])
  const [data, setData] = useState({
    checkIn: "", checkOut: "",
    adults: 2, children: 0,
    roomType: "doble",
    name: "", phone: "", notes: ""
  })

  useEffect(() => {
    fetch("/api/tarifas")
      .then(r => r.json())
      .then(d => setRooms(d.types || []))
      .catch(() => {})
  }, [])

  const nights = data.checkIn && data.checkOut
    ? Math.round((new Date(data.checkOut + "T12:00:00").getTime() - new Date(data.checkIn + "T12:00:00").getTime()) / 86400000)
    : 0
  const room = rooms.find(r => r.slug === data.roomType) || rooms.find(r => r.slug === "doble") || { name: "Doble", basePrice: 90000, slug: "doble" }
  const total = nights * room.basePrice

  const sendWhatsApp = () => {
    const url = buildBookingUrl(data)
    window.open(url, "_blank")
  }

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => Math.max(0, s - 1))

  const today = todayStr()

  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F5F1E8] px-4 py-10">
        <Card className="w-full max-w-lg p-6 sm:p-8">

          {/* STEP 0: Llegada */}
          {step === 0 && (
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <h2 className="font-serif text-2xl font-bold">¿Cuándo llegas?</h2>
              <p className="text-gray-500 mt-1">Selecciona tu fecha de llegada</p>
              <input
                type="date" min={today} value={data.checkIn}
                onChange={e => setData({ ...data, checkIn: e.target.value })}
                className="mt-6 w-full border-2 border-[#C9A86A] rounded-xl px-4 py-3 text-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
              />
              <Button variant="gold" size="lg" className="w-full mt-6" disabled={!data.checkIn} onClick={next}>
                Siguiente
              </Button>
            </div>
          )}

          {/* STEP 1: Salida */}
          {step === 1 && (
            <div className="text-center">
              <button onClick={back} className="text-sm text-gray-400 mb-4">← Volver</button>
              <div className="text-4xl mb-3">🛏️</div>
              <h2 className="font-serif text-2xl font-bold">¿Cuándo sales?</h2>
              <p className="text-gray-500 mt-1">Llegada: <b>{formatDateShort(data.checkIn)}</b></p>
              <input
                type="date" min={data.checkIn || today} value={data.checkOut}
                onChange={e => setData({ ...data, checkOut: e.target.value })}
                className="mt-6 w-full border-2 border-[#C9A86A] rounded-xl px-4 py-3 text-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
              />
              <Button variant="gold" size="lg" className="w-full mt-6" disabled={!data.checkOut} onClick={next}>
                Siguiente
              </Button>
            </div>
          )}

          {/* STEP 2: Personas */}
          {step === 2 && (
            <div className="text-center">
              <button onClick={back} className="text-sm text-gray-400 mb-4">← Volver</button>
              <div className="text-4xl mb-3">👥</div>
              <h2 className="font-serif text-2xl font-bold">¿Cuántos son?</h2>
              <p className="text-gray-500 mt-1">{formatDateShort(data.checkIn)} → {formatDateShort(data.checkOut)} · {nights} noche{nights !== 1 ? "s" : ""}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                  <span className="font-semibold">Adultos</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setData({ ...data, adults: Math.max(1, data.adults - 1) })} className="w-8 h-8 rounded-full bg-gray-200 font-bold">−</button>
                    <span className="font-bold text-lg w-6 text-center">{data.adults}</span>
                    <button onClick={() => setData({ ...data, adults: Math.min(5, data.adults + 1) })} className="w-8 h-8 rounded-full bg-gray-200 font-bold">+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                  <span className="font-semibold">Niños</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setData({ ...data, children: Math.max(0, data.children - 1) })} className="w-8 h-8 rounded-full bg-gray-200 font-bold">−</button>
                    <span className="font-bold text-lg w-6 text-center">{data.children}</span>
                    <button onClick={() => setData({ ...data, children: Math.min(3, data.children + 1) })} className="w-8 h-8 rounded-full bg-gray-200 font-bold">+</button>
                  </div>
                </div>
              </div>
              <Button variant="gold" size="lg" className="w-full mt-6" onClick={next}>
                Siguiente
              </Button>
            </div>
          )}

          {/* STEP 3: Tipo de habitación */}
          {step === 3 && (
            <div>
              <button onClick={back} className="text-sm text-gray-400 mb-4">← Volver</button>
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏨</div>
                <h2 className="font-serif text-2xl font-bold">¿Qué habitación?</h2>
              </div>
              <div className="space-y-3">
                {rooms.map(r => (
                  <button key={r.slug} onClick={() => setData({ ...data, roomType: r.slug })}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${data.roomType === r.slug ? "border-[#C9A86A] bg-[#F5F1E8]" : "border-gray-200 hover:border-gray-300"}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-sm text-gray-500">{r.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#C9A86A]">{formatCOP(r.basePrice)}</div>
                        <div className="text-xs text-gray-400">/noche</div>
                      </div>
                    </div>
                  </button>
                ))}
                {rooms.length === 0 && <div className="text-center text-gray-500 py-4">Cargando habitaciones...</div>}
              </div>
              <Button variant="gold" size="lg" className="w-full mt-6" onClick={next} disabled={rooms.length === 0}>
                Siguiente
              </Button>
            </div>
          )}

          {/* STEP 4: Datos + confirmar */}
          {step === 4 && (
            <div>
              <button onClick={back} className="text-sm text-gray-400 mb-4">← Volver</button>
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">✅</div>
                <h2 className="font-serif text-2xl font-bold">¿Listo para reservar?</h2>
              </div>

              <div className="bg-[#F5F1E8] rounded-xl p-4 mb-4 text-sm space-y-1">
                <div>📅 {formatDateShort(data.checkIn)} → {formatDateShort(data.checkOut)} ({nights} noche{nights !== 1 ? "s" : ""})</div>
                <div>👥 {data.adults} adulto(s){data.children > 0 ? ` + ${data.children} niño(s)` : ""}</div>
                <div>🛏️ Habitación {room.name}</div>
                <div className="font-bold text-lg mt-2">💰 {formatCOP(total)}</div>
              </div>

              <div className="space-y-3">
                <input placeholder="Tu nombre (opcional)" value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3" />
                <input placeholder="Tu WhatsApp (opcional, para confirmación)" value={data.phone}
                  onChange={e => setData({ ...data, phone: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3" />
                <textarea placeholder="Algún pedido especial..." value={data.notes}
                  onChange={e => setData({ ...data, notes: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3" rows={2} />
              </div>

              <Button variant="gold" size="lg" className="w-full mt-6" onClick={sendWhatsApp}>
                <span className="flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 1.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Reservar por WhatsApp
                </span>
              </Button>
              <p className="text-xs text-gray-400 text-center mt-3">Se abre WhatsApp con tu solicitud · Confirmación inmediata</p>
            </div>
          )}

        </Card>
      </div>
      <Footer />
    </>
  )
}
