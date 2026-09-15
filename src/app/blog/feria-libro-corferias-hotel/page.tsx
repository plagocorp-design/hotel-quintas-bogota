import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "Feria del Libro Corferias 2026: Hotel a 15 Min a Pie", description: "¿Vienes a la Feria del Libro 2026? Hotel a 1.3km de Corferias, 15 min a pie. Habitaciones familiares y WiFi. Reserva directa." };
export default function Post(){
  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Feria del Libro Corferias 2026: Dónde Dormir a 15 Min a Pie</h1>
        <p className="mt-3 text-gray-600">Guía para expositores: por qué Teusaquillo es mejor que la Av. Esperanza ruidosa.</p>
        <h2 className="font-serif text-2xl font-bold mt-6">A 1.3 km del arco de Corferias</h2>
        <p>15 min a pie por la Calle 22. Vuelves a almorzar o a dejar muestras. Habitaciones para 5 con bañera por $200.000. <Link href="/hotel-cerca-corferias-bogota" className="text-[#C9A86A] underline">Ver hotel Corferias →</Link></p>
        <div className="mt-6 p-6 bg-[#000000] text-white rounded-2xl text-center">
          <Link href="/reservas?roomType=familiar"><Button variant="gold">Tarifa Feria del Libro</Button></Link>
        </div>
      </article>
      <Footer />
    </>
  )
}
