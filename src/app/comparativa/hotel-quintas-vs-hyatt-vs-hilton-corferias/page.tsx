import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hotel Quintas vs Hyatt vs Hilton Corferias: Tabla Real 2026 | Quintas",
  description: "¿Pagar $450k para no dormir? Comparamos distancia real a pie, ruido, desayuno y precio. Quintas 9.5 gana. Mira la tabla y reserva donde duermes.",
  alternates: { canonical: "https://hotelquintasdebogota.com/comparativa/hotel-quintas-vs-hyatt-vs-hilton-corferias" },
};

export default function ComparativaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuál es el hotel más cerca de la Embajada USA a pie?", acceptedAnswer: { "@type": "Answer", text: "Hotel Quintas a 400m/5 min a pie. Hyatt Place está a 2.5km/30 min y Hilton Corferias a 2.8km/35 min. No son caminables y necesitas taxi con trancón." } },
      { "@type": "Question", name: "¿Vale la pena pagar $450k en Hilton Corferias?", acceptedAnswer: { "@type": "Answer", text: "Solo si quieres pagar 3x más por estar 1km más cerca pero con ruido de montacargas en la Av. Esperanza. Quintas está a 15 min a pie, tranquilo, con desayuno incluido y 8.8 Fabuloso por $80k-200k." } },
      { "@type": "Question", name: "¿Hyatt Place es ruidoso?", acceptedAnswer: { "@type": "Answer", text: "Sí, está sobre la Av. Esperanza frente a Corferias (65dB). Hotel Quintas está en calle residencial de Teusaquillo, silenciosa, a 1.3km pero duermes." } },
      { "@type": "Question", name: "¿Fairfield Embajada sirve para Corferias?", acceptedAnswer: { "@type": "Answer", text: "No, está a 1.8km/22 min a pie de Corferias, no es caminable con muestras. Quintas está a 1.3km/15 min y a 5 min de la Embajada a la vez." } },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">TABLA REAL 2026 · DISTANCIAS A PIE MEDIDAS CON GOOGLE MAPS</div>
          <h1 className="font-serif text-4xl font-bold mt-2">Hotel Quintas vs Hyatt Place vs Hilton Corferias: ¿Cuál te hace perder plata y sueño?</h1>
          <p className="mt-3 text-white/80 max-w-3xl">Comparamos precio, distancia real a pie a Embajada y Corferias, ruido, desayuno y puntuación. Cuando ves la tabla, reservar cadena es un error.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-2xl overflow-hidden">
            <thead className="bg-[#000000] text-white">
              <tr>
                <th className="p-3 text-left">Criterio</th>
                <th className="p-3 bg-[#C9A86A] text-[#000000]">Hotel Quintas ⭐ GANA</th>
                <th className="p-3">Hyatt Place Convention</th>
                <th className="p-3">Hilton Corferias</th>
                <th className="p-3">Fairfield Embajada</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Precio noche</td><td className="p-3 text-center text-green-700">$80k - $200k</td><td className="p-3 text-center">$420k - $580k</td><td className="p-3 text-center">$450k - $650k</td><td className="p-3 text-center">$350k - $450k</td></tr>
              <tr><td className="p-3">Dist. Embajada USA a pie</td><td className="p-3 text-center font-bold text-green-700">0.4 km / 5 min ✓</td><td className="p-3 text-center text-red-600">2.5 km / 30 min</td><td className="p-3 text-center text-red-600">2.8 km / 35 min</td><td className="p-3 text-center">0.6 km / 7 min</td></tr>
              <tr><td className="p-3">Dist. Corferias a pie</td><td className="p-3 text-center font-bold text-green-700">1.3 km / 15 min ✓</td><td className="p-3 text-center font-bold text-green-700">0.2 km / 2 min</td><td className="p-3 text-center font-bold text-green-700">0.3 km / 4 min</td><td className="p-3 text-center text-red-600">1.8 km / 22 min</td></tr>
              <tr><td className="p-3">Ruido</td><td className="p-3 text-center text-green-700">Calle residencial, silencioso</td><td className="p-3 text-center text-red-600">Av. Esperanza 65dB</td><td className="p-3 text-center text-red-600">Av. Esperanza 65dB</td><td className="p-3 text-center text-red-600">Av. 26 ruidosa</td></tr>
              <tr><td className="p-3">Booking</td><td className="p-3 text-center font-bold">8.8 (472) 9.5 ubi</td><td className="p-3 text-center">8.6</td><td className="p-3 text-center">8.7</td><td className="p-3 text-center">8.4</td></tr>
              <tr><td className="p-3">Desayuno</td><td className="p-3 text-center text-green-700">Incluido excepcional</td><td className="p-3 text-center">Cadena, cargo extra</td><td className="p-3 text-center">No incluido</td><td className="p-3 text-center">Cadena</td></tr>
              <tr><td className="p-3">Atención</td><td className="p-3 text-center text-green-700">Familiar 24h, te guarda celular</td><td className="p-3 text-center">Corporativo</td><td className="p-3 text-center">Corporativo</td><td className="p-3 text-center">Corporativo</td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 border-green-200 bg-green-50"><div className="font-semibold text-green-800">Si vienes por Visa: Quintas gana</div><p className="text-sm mt-2">5 min a pie vs 30 min de Hyatt/Hilton. Sales 6:30 para cita 7am. Ellos necesitan taxi 5:45 con trancón.</p></Card>
          <Card className="p-6 border-green-200 bg-green-50"><div className="font-semibold text-green-800">Si vienes a Corferias y quieres dormir: Quintas gana</div><p className="text-sm mt-2">15 min a pie pero duermes. Hyatt/Hilton no te dejan dormir por montacargas.</p></Card>
          <Card className="p-6 border-green-200 bg-green-50"><div className="font-semibold text-green-800">Si vienes en familia: Quintas gana</div><p className="text-sm mt-2">Familiar para 5 con bañera $200k vs Grand Hyatt $900k. Ahorro $700k por noche.</p></Card>
        </div>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Conclusión brutalmente honesta</h2>
          <p className="mt-3 text-gray-600">Pagar $450k en Hilton para estar 1 km más cerca de Corferias pero con ruido y a 35 min de la Embajada, es pagar 3x más para dormir peor y perder tu cita de visa. Hotel Quintas es la única opción lógica si quieres las dos cosas: a 5 min de la Embajada y 15 min de Corferias, tranquilo y por 1/3 del precio. Las cadenas venden marca. Nosotros vendemos descanso y ubicación real.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reserva donde duermes →</Button></Link>
            <Link href="/hotel-cerca-embajada-americana-bogota"><Button variant="outline" size="lg">Ver hotel Embajada 5 min</Button></Link>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas que Google ama</h2>
          <div className="mt-4 space-y-3">
            <Card className="p-4"><div className="font-semibold">¿Cuál es el hotel más cerca de la Embajada USA a pie?</div><p className="text-sm text-gray-600 mt-1">Hotel Quintas a 400m. Hyatt a 2.5km y Hilton a 2.8km no son caminables.</p></Card>
            <Card className="p-4"><div className="font-semibold">¿Hyatt Place es ruidoso?</div><p className="text-sm text-gray-600 mt-1">Sí, sobre Av. Esperanza 65dB. Quintas en calle residencial silenciosa.</p></Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
