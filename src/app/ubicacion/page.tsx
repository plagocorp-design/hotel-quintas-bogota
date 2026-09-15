import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { hotel } from "@/lib/utils"
export default function Ubicacion(){
  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Ubicación / Cómo llegar</h1>
        <p className="text-gray-600">{hotel.address} · Teusaquillo</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border h-[400px]">
            <iframe title="mapa" src="https://www.google.com/maps?q=Cl.+22+Bis+%2344A-19+Teusaquillo+Bogota&z=15&output=embed" width="100%" height="100%" loading="lazy"/>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border">
              <div className="font-semibold">Desde Aeropuerto El Dorado (8 km)</div>
              <div className="text-sm text-gray-600">Taxi 15-20 min · TransMilenio + taxi · Uber disponible</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border">
              <div className="font-semibold">Desde Corferias</div>
              <div className="text-sm text-gray-600">7 min a pie · 3 min en carro</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border">
              <div className="font-semibold">Desde Embajada USA</div>
              <div className="text-sm text-gray-600">7 min a pie, ideal para citas de visa</div>
            </div>
            <a href={hotel.mapsUrl} target="_blank" className="inline-block bg-[#1A2B4A] text-white px-6 py-3 rounded-full">Abrir en Google Maps</a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
