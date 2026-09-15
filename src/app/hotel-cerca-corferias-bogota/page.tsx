import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca de Corferias Bogotá | A 15 Min a Pie | Quintas",
  description: "Expositor o visitante de Corferias? A 1.3km del recinto. Habitaciones familiares, WiFi y parque cercano. Reserva directa sin comisión. ¡Desayuno incluido!",
  keywords: ["hotel cerca corferias bogota","alojamiento cerca corferias","hotel barato cerca corferias","hotel cerca corferias y embajada"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-corferias-bogota" },
};

export default function CorferiasPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca Corferias", item: "https://hotelquintasdebogota.com/hotel-cerca-corferias-bogota" },
    ],
  };
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-[#F5F1E8] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-sm text-[#C9A86A] font-semibold tracking-widest">A 1.3 KM · 15 MIN A PIE · 5 MIN EN TAXI</div>
          <h1 className="font-serif text-4xl font-bold mt-2">Hotel Cerca de Corferias Bogotá: A 15 Min a Pie del Recinto Ferial</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">El hotel de los expositores que caminan a Corferias. En Teusaquillo, tranquilo y sin ruido de montacargas, pero a 1.3 km del arco de la Av. La Esperanza con Cra 40. 8.8 Fabuloso, 9.0 en limpieza.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservas?roomType=familiar"><Button variant="gold" size="lg">Tarifa Corferias con desayuno</Button></Link>
            <a href={hotel.whatsappUrl("Hola, vengo a evento en Corferias, ¿tarifa?")} target="_blank"><Button size="lg">WhatsApp</Button></a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 text-center"><div className="text-3xl">🚶</div><div className="font-semibold mt-2">15 min a pie</div><div className="text-sm text-gray-500">Por Calle 22 Bis y Av. Américas</div></Card>
          <Card className="p-6 text-center"><div className="text-3xl">🚕</div><div className="font-semibold mt-2">5 min en taxi</div><div className="text-sm text-gray-500">$7.000 al arco de Corferias</div></Card>
          <Card className="p-6 text-center"><div className="text-3xl">🤫</div><div className="font-semibold mt-2">Sin ruido</div><div className="text-sm text-gray-500">Calle residencial, no Av. Esperanza</div></Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">El hotel que te ahorra $30.000 diarios en taxis</h2>
          <p className="mt-3 text-gray-600">Si vienes a la Feria del Libro, AgroExpo, Feria del Hogar o Andina Pack, la jornada es de 10am a 7pm de pie. Volver a una habitación familiar amplia para 5 con dos camas dobles grandes, baño con agua caliente a buena presión y WiFi de fibra que sí aguanta videollamada, marca la diferencia. A diferencia de hoteles sobre la Av. Esperanza (65dB por montacargas), nosotros estamos en una calle arbolada de Teusaquillo pero a 1.3 km.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border rounded-xl overflow-hidden">
              <thead className="bg-[#000000] text-white"><tr><th className="p-3 text-left">Hotel</th><th className="p-3">Distancia</th><th className="p-3">Tiempo</th><th className="p-3">Ruido</th></tr></thead>
              <tbody>
                <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Hotel Quintas Teusaquillo</td><td className="p-3 text-center">1.3 km</td><td className="p-3 text-center">15 min a pie</td><td className="p-3 text-center">Tranquilo</td></tr>
                <tr><td className="p-3">Hoteles Av. Esperanza</td><td className="p-3 text-center">0.8 km</td><td className="p-3 text-center">10 min</td><td className="p-3 text-center">Ruidoso</td></tr>
                <tr><td className="p-3">Chapinero</td><td className="p-3 text-center">4.5 km</td><td className="p-3 text-center">35 min con tráfico</td><td className="p-3 text-center">Medio</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold">Para equipos de Corferias (3-6 personas)</h3>
            <p className="text-sm text-gray-600 mt-2">Habitaciones familiares interconectables para el mismo stand. Más barato que 3 dobles y con sala de estar para reuniones rápidas. Limpieza 9.0 y recepción que guarda muestras hasta tu vuelo.</p>
            <Link href="/habitaciones#familar" className="text-sm text-[#C9A86A] underline mt-3 block">Ver familiares con bañera →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold">Desayuno desde las 6am para expositores</h3>
            <p className="text-sm text-white/80 mt-2">Si tu stand abre a las 8am, desayunas antes sin correr. Y a 2.5km de Gran Estación para cenas de negocios.</p>
          </Card>
        </section>

        <section className="text-center border rounded-[24px] p-8 bg-white">
          <h2 className="font-serif text-2xl font-bold">¿Vienes a Corferias? Reserva directa sin comisión</h2>
          <p className="text-gray-600 mt-2">Desde $80.000. Mejor precio en nuestra web. ¿También necesitas Embajada? Estamos a 5 min de ambas.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/hotel-cerca-embajada-americana-bogota"><Button variant="outline" size="lg">Ver hotel Embajada →</Button></Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
