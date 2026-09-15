import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hotel Cerca Aeropuerto El Dorado | 15 Min Teusaquillo | Quintas",
  description: "¿Escala en El Dorado? Hotel en Teusaquillo a 15-20 min del aeropuerto, check-in 24h y desayuno temprano. Más tranquilo que Fontibón. ¡Reserva directa!",
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-aeropuerto-el-dorado" },
};

export default function AeropuertoPage() {
  return (
    <>
      <Header />
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">8 KM · 15-20 MIN · CALLE 26 DIRECTO</div>
          <h1 className="font-serif text-4xl font-bold mt-2">Hotel Cerca del Aeropuerto El Dorado: 15 Min en Teusaquillo Tranquilo</h1>
          <p className="mt-3 text-white/80 max-w-3xl">No duermas en Fontibón con ruido de aviones. Duerme en Teusaquillo, a 15 min del Dorado por la Calle 26, y llega a tu vuelo descansado. Recepción 24h para vuelos de madrugada.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reservar para escala</Button></Link>
            <Link href="/ubicacion"><Button variant="outline" size="lg" className="bg-white">Ver cómo llegar</Button></Link>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-8">
        <section className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 text-center"><div className="text-3xl">✈️</div><div className="font-semibold mt-2">15-20 min</div><div className="text-sm text-gray-500">Por Calle 26 sin trancones</div></Card>
          <Card className="p-6 text-center"><div className="text-3xl">🕐</div><div className="font-semibold mt-2">Check-in 24h</div><div className="text-sm text-gray-500">Para vuelos 5am</div></Card>
          <Card className="p-6 text-center"><div className="text-3xl">🤫</div><div className="font-semibold mt-2">Sin ruido</div><div className="text-sm text-gray-500">Teusaquillo residencial</div></Card>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold">Del Dorado a Teusaquillo en 15 minutos</h2>
          <p className="mt-3 text-gray-600">Sales del Dorado por la Av. El Dorado (Calle 26) al oriente, tomas la Cra 40 y Calle 22 Bis. 8 km. Uber $18.000, taxi $20.000. Mucho más cerca que Chapinero (35 min) y más tranquilo que hoteles de Fontibón frente a la pista.</p>
          <div className="mt-4 p-4 bg-[#F5F1E8] rounded-xl text-sm">Tip escala larga: deja maletas gratis en el hotel y visita el Parque Simón Bolívar (10 min) o Gran Estación (5 min) mientras esperas tu conexión.</div>
        </section>
      </div>
      <Footer />
    </>
  );
}
