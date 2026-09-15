import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
export const metadata: Metadata = { title: "Hoteles Cerca Embajada USA Bogotá: Comparativa 400m vs 4km", description: "¿Vale la pena hotel a 400m vs 4km de la Embajada? Tabla real de distancia, tiempo y taxi. Hotel Quintas a 5 min a pie gana." };
export default function Post(){
  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Hoteles Cerca Embajada USA Bogotá: Comparativa Real (400m vs 4km)</h1>
        <p className="mt-3 text-gray-600">No todos los "cerca" son iguales. Medimos a pie con Google Maps.</p>
        <table className="mt-6 w-full text-sm border rounded-xl overflow-hidden">
          <thead className="bg-[#000000] text-white"><tr><th className="p-3 text-left">Hotel</th><th className="p-3">Distancia</th><th className="p-3">Taxi 7am</th><th className="p-3">Riesgo</th></tr></thead>
          <tbody>
            <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Hotel Quintas Teusaquillo</td><td className="p-3 text-center">400m</td><td className="p-3 text-center">$0</td><td className="p-3 text-center">Bajo</td></tr>
            <tr><td className="p-3">Chapinero</td><td className="p-3 text-center">4.2km</td><td className="p-3 text-center">$18.000 + trancón</td><td className="p-3 text-center">Alto</td></tr>
            <tr><td className="p-3">Centro</td><td className="p-3 text-center">6km</td><td className="p-3 text-center">$22.000</td><td className="p-3 text-center">Alto</td></tr>
          </tbody>
        </table>
        <p className="mt-4">Conclusión: a 400m caminas y llegas 6:35 para cita 7am. A 4km sales 5:45. <Link href="/hotel-cerca-embajada-americana-bogota" className="text-[#C9A86A] underline">Reserva a 5 min →</Link></p>
      </article>
      <Footer />
    </>
  )
}
