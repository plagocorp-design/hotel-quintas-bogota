import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
export const metadata: Metadata = { title: "Dónde Dormir si tu Vuelo Sale a las 5am de El Dorado", description: "¿Escala en El Dorado? Hotel en Teusaquillo a 15 min del aeropuerto, check-in 24h y desayuno temprano. Más tranquilo que Fontibón." };
export default function Post(){
  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">¿Vuelo a las 5am en El Dorado? Duerme a 15 Min en Teusaquillo</h1>
        <p className="mt-3 text-gray-600">No duermas en Fontibón ruidoso. En Teusaquillo duermes y llegas en 15 min por la Calle 26 sin trancones. Recepción 24h y traslado fácil.</p>
        <p className="mt-4">Desde El Dorado sales por la 26 directo a la Cra 40 y Cl. 22 Bis. 8km. Uber $18.000. <Link href="/hotel-cerca-aeropuerto-el-dorado" className="text-[#C9A86A] underline">Ver hotel cerca aeropuerto →</Link></p>
      </article>
      <Footer />
    </>
  )
}
