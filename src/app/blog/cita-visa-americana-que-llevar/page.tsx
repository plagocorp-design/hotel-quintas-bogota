import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Cita Visa Americana Bogotá 2026: Qué Llevar y Qué No | Hotel Quintas",
  description: "Guía 2026: documentos, objetos prohibidos y dónde dormir a 5 min de la Embajada USA en Bogotá. Desayuno 5am y guarda-equipaje. ¡Reserva directa!",
};
export default function Post() {
  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="text-sm text-[#C9A86A]">Visa Americana · Actualizado 2026</div>
        <h1 className="font-serif text-3xl font-bold mt-2">Cita Visa Americana Bogotá 2026: Qué Llevar y Qué No (y Dónde Dormir a 5 Min)</h1>
        <p className="text-gray-600 mt-3">Checklist real de la Embajada USA en Bogotá + hotel a 400 metros para no llegar tarde.</p>
        <div className="mt-6 space-y-6 text-gray-700">
          <h2 className="font-serif text-2xl font-bold">Documentos obligatorios</h2>
          <ul className="list-disc pl-6 space-y-1"><li>Pasaporte vigente</li><li>Confirmación DS-160 impresa</li><li>Foto 5x5 fondo blanco</li><li>Cita impresa</li></ul>
          <h2 className="font-serif text-2xl font-bold">Objetos prohibidos (te los guardamos gratis)</h2>
          <p>Celular, USB, power bank, alimentos, líquidos, armas. No te dejan entrar. En Hotel Quintas te los guardamos en recepción sin costo.</p>
          <h2 className="font-serif text-2xl font-bold">¿Dónde dormir para cita a las 7am?</h2>
          <p>A 5 min a pie de la Embajada en Cl. 22 Bis #44A-19, Teusaquillo. Sales 6:30 caminando. Desayuno desde las 5am y guarda-equipaje. <Link href="/hotel-cerca-embajada-americana-bogota" className="text-[#C9A86A] underline">Ver hotel a 5 min de la Embajada →</Link></p>
        </div>
        <div className="mt-8 p-6 bg-[#F5F1E8] rounded-2xl text-center">
          <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reserva tu noche de visa</Button></Link>
        </div>
      </article>
      <Footer />
    </>
  );
}
