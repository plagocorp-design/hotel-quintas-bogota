import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
export const metadata: Metadata = { title: "Hotel Familiar Cerca Parque Simón Bolívar y Corferias", description: "Hotel familiar para 5 con bañera, parque al frente y a 10 min del Simón Bolívar. Tranquilo y seguro en Teusaquillo. ¡Reserva directa!" };
export default function Post(){
  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Hotel Familiar Cerca Parque Simón Bolívar y Corferias: Para 5 Personas</h1>
        <p className="mt-3 text-gray-600">Con niños, necesitas parque y habitación grande. Nuestra Familiar con bañera para 5, interconectable y a 10 min del Simón Bolívar.</p>
        <p className="mt-4">Teusaquillo es el barrio más seguro para familias: calles arboladas, parque al frente, Jardín Botánico a 5km y Corferias a 15 min a pie. <Link href="/habitaciones" className="text-[#C9A86A] underline">Ver familiares →</Link></p>
      </article>
      <Footer />
    </>
  )
}
