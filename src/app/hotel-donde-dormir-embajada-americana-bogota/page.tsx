import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dónde Dormir Cerca de la Embajada Americana Bogotá",
  description: "Dónde dormir tranquilo cerca de la Embajada Americana. Habitaciones con cama cómoda, agua caliente, silencio. Teusaquillo, barrio seguro. Reserva directa.",
  keywords: ["donde dormir cerca embajada americana bogota","donde dormir embajada americana","hotel para dormir cerca embajada","habitacion cerca embajada americana","dormir bien antes de cita visa"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-donde-dormir-embajada-americana-bogota" },
  openGraph: {
    title: "Dónde Dormir Cerca de la Embajada Americana Bogotá",
    description: "Habitaciones cómodas a 7 min de la Embajada Americana. Agua caliente, WiFi, silencio.",
    url: "https://hotelquintasdebogota.com/hotel-donde-dormir-embajada-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function DondeDormirPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Las habitaciones tienen buena cama para dormir bien?", acceptedAnswer: { "@type": "Answer", text: "Sí, todas nuestras habitaciones tienen colchones de alta calidad con sábanas limpias. Las dobles tienen cama doble (1.40m) y las matrimoniales cama king (1.80m). Dormirás tranquilo." } },
      { "@type": "Question", name: "¿Hay agua caliente en las habitaciones?", acceptedAnswer: { "@type": "Answer", text: "Sí, todas las habitaciones tienen baño privado con agua caliente a buena presión. Funciona todo el día, no solo en la mañana." } },
      { "@type": "Question", name: "¿Es ruidoso el hotel por la noche?", acceptedAnswer: { "@type": "Answer", text: "No. Estamos en una calle residencial de Teusaquillo, lejos de bares y discotecas. El barrio es silencioso y las habitaciones tienen buena aislación. Descansarás sin problemas." } },
      { "@type": "Question", name: "¿Es seguro el barrio para dormir tranquilo?", acceptedAnswer: { "@type": "Answer", text: "Teusaquillo es un barrio familiar, residencial y seguro. Las calles están iluminadas, hay vigilancia y es un sector de estrato 3-4. Nuestros huéspedes caminan sin problemas a cualquier hora." } },
      { "@type": "Question", name: "¿Qué hay cerca del hotel para la noche?", acceptedAnswer: { "@type": "Answer", text: "A una cuadra tienes tiendas de barrio, farmacia y restaurantes. A 5 min en Gran Estación hay centros comerciales con restaurantes y cine. El barrio es tranquilo para pasear." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Dónde Dormir Cerca Embajada Americana", item: "https://hotelquintasdebogota.com/hotel-donde-dormir-embajada-americana-bogota" },
    ],
  };
  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Quintas de Bogotá",
    url: "https://hotelquintasdebogota.com",
    address: { "@type": "PostalAddress", streetAddress: "Cl. 22 Bis #44A-19", addressLocality: "Bogotá", addressRegion: "Cundinamarca", addressCountry: "CO" },
    telephone: "+57 317 6760460",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5", worstRating: "1", reviewCount: "472", ratingCount: "472" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">DESCANSO REAL EN TEUSAQUILLO</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Dónde Dormir Cerca de la Embajada Americana</h1>
            <p className="mt-4 text-white/80">
              Si tu prioridad es <b>dormir bien</b> antes de tu cita en la <b>Embajada Americana</b>, elegí un hotel que lo garantice.
              Colchones cómodos, habitaciones silenciosas, agua caliente y barrio seguro. A 7 minutos caminando de la Embajada.
              No es solo un lugar para quedarse, es un lugar para descansar de verdad.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar mi descanso</Button></Link>
              <a href={hotel.whatsappUrl("Hola, busco un lugar tranquilo para dormir antes de mi cita en la Embajada")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu descanso incluye</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>Cama cómoda</b> con sábanas limpias</li>
              <li>✓ <b>Agua caliente</b> en baño privado</li>
              <li>✓ <b>Silencio total</b> por la noche</li>
              <li>✓ <b>Barrio seguro</b> para caminar</li>
              <li>✓ <b>WiFi</b> para conectarte</li>
              <li>✓ <b>Desayuno</b> desde las 6:00am</li>
              <li>✓ <b>7 min</b> de la Embajada</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1 */}
        <section>
          <h2 className="font-serif text-3xl font-bold">No es solo un hotel. Es donde descansas de verdad.</h2>
          <p className="mt-3 text-gray-600">
            Muchos viajeros que vienen a la <b>Embajada Americana</b> pasan la noche anterior en hoteles ruidosos, con colchones malos o en barrios inseguros.
            Eso afecta tu descanso y, peor aún, tu desempeño en la entrevista. En Hotel Quintas, las <b>habitaciones están diseñadas para dormir bien</b>.
            Colchones de buena calidad, sábanas limpias, almohadas firmes y una temperatura fresca gracias a la altitud de Bogotá.
          </p>
          <p className="mt-3 text-gray-600">
            Estamos en una <b>calle residencial de Teusaquillo</b>, sin tráfico pesado ni ruido nocturno. Las ventanas tienen buen sellado y el barrio se apaga temprano.
            Si vienes de ciudad ruidosa, notarás la diferencia. Despertarás descansado y listo para tu cita.
          </p>
        </section>

        {/* Sección 2: Comodidades */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Lo que hace que descanses bien</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>Colchón de alta densidad:</b> No es tipo hotel barato. Es firme pero cómodo.</li>
              <li><b>Sábanas blancas limpias:</b> Se cambian con cada huésped. Siempre frescas.</li>
              <li><b>Almohadas firmes:</b> Dos por cama. Elijes la que te guste.</li>
              <li><b>Baño privado:</b> Agua caliente 24h, buena presión, jabón incluido.</li>
              <li><b>Silencio nocturno:</b> Calle residencial sin bares ni tráfico.</li>
              <li><b>Temperatura fresca:</b> 12-18°C por la noche. Perfecta para dormir.</li>
            </ul>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Tu barrio: Teusaquillo</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Tipo:</b> Residencial familiar, estrato 3-4.</div>
              <div><b>Seguridad:</b> Calles iluminadas, vigilancia local, barrio tranquilo.</div>
              <div><b>Cercanía:</b> Tiendas de barrio a 1 cuadra, farmacia a 2 cuadras.</div>
              <div><b>Transporte:</b> Transmilenio a 5 min, taxis siempre disponibles.</div>
              <div><b>Comida:</b> Restaurantes típicos y criollos a precios de barrio.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>Ideal para caminar.</b> Parques, calles arboladas y ambiente familiar.
              </div>
            </div>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver mapa del barrio →</Link>
          </Card>
        </section>

        {/* Sección 3: Comparación */}
        <section>
          <h2 className="font-serif text-2xl font-bold">¿Dónde dormir vs. otros barrios?</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border rounded-xl overflow-hidden">
              <thead className="bg-[#000000] text-white"><tr><th className="p-3 text-left">Barrio</th><th className="p-3">Ruido</th><th className="p-3">Seguridad</th><th className="p-3">Calma nocturna</th></tr></thead>
              <tbody>
                <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Teusaquillo (Hotel Quintas)</td><td className="p-3 text-center">Bajo</td><td className="p-3 text-center">Alta</td><td className="p-3 text-center">Sí</td></tr>
                <tr><td className="p-3">La Candelaria</td><td className="p-3 text-center">Alto</td><td className="p-3 text-center">Media</td><td className="p-3 text-center">No</td></tr>
                <tr><td className="p-3">Chapinero</td><td className="p-3 text-center">Medio-Alto</td><td className="p-3 text-center">Media</td><td className="p-3 text-center">No</td></tr>
                <tr><td className="p-3">Zona G / Zona T</td><td className="p-3 text-center">Muy alto</td><td className="p-3 text-center">Media</td><td className="p-3 text-center">No</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen quienes durmieron aquí</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Dormí como en casa. La cama era súper cómoda y no se escuchaba nada de ruido.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Paola · Armenia</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;El agua caliente funcionaba perfecto y el barrio es muy tranquilo. Me sentí segura toda la noche.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Valentina · Manizales</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Venía cansado del viaje y descansé increíble. Al día siguiente llegué a la Embajada relajado.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Fernando · Santa Marta</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas sobre comodidad y descanso</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Las habitaciones tienen buena cama para dormir bien?", a: "Sí, todas nuestras habitaciones tienen colchones de alta calidad con sábanas limpias. Las dobles tienen cama doble (1.40m) y las matrimoniales cama king (1.80m). Dormirás tranquilo." },
              { q: "¿Hay agua caliente en las habitaciones?", a: "Sí, todas las habitaciones tienen baño privado con agua caliente a buena presión. Funciona todo el día, no solo en la mañana." },
              { q: "¿Es ruidoso el hotel por la noche?", a: "No. Estamos en una calle residencial de Teusaquillo, lejos de bares y discotecas. El barrio es silencioso y las habitaciones tienen buena aislación. Descansarás sin problemas." },
              { q: "¿Es seguro el barrio para dormir tranquilo?", a: "Teusaquillo es un barrio familiar, residencial y seguro. Las calles están iluminadas, hay vigilancia y es un sector de estrato 3-4. Nuestros huéspedes caminan sin problemas a cualquier hora." },
              { q: "¿Qué hay cerca del hotel para la noche?", a: "A una cuadra tienes tiendas de barrio, farmacia y restaurantes. A 5 min en Gran Estación hay centros comerciales con restaurantes y cine. El barrio es tranquilo para pasear." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Dormir bien antes de tu cita: reserva aquí</h2>
          <p className="text-white/80 mt-2">Habitaciones silenciosas con cama cómoda. 7 min de la Embajada. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar mi descanso</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/servicios" className="underline">Servicios</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/hotel-para-cita-visa-americana-bogota" className="underline">Hotel para cita de visa</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
