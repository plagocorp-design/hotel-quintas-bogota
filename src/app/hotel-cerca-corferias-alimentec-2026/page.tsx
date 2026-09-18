import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca ALIMENTEC 2026 Corferias | Reserva Directa",
  description: "Hotel a 7 min caminando de ALIMENTEC 2026 en Corferias. Desayuno 6:00-9:00, WiFi fibra óptica, guarda-equipaje gratis. Reserva directa sin comisión.",
  keywords: ["hotel cerca alimentec 2026","hotel alimentec corferias","alojamiento alimentec bogota","hotel feria alimentacion corferias","hotel cerca feria alimentos bogota"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-alimentec-2026" },
  openGraph: {
    title: "Hotel Cerca ALIMENTEC 2026 Corferias | Reserva Directa",
    description: "Hotel a 7 min de ALIMENTEC 2026. Desayuno 6am, WiFi fibra, guarda-equipaje gratis.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-alimentec-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function Alimentec2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es ALIMENTEC 2026 en Corferias?", acceptedAnswer: { "@type": "Answer", text: "ALIMENTEC 2026 se realiza del 9 al 12 de junio de 2026 en Corferias, Bogotá. Es la feria internacional de la alimentación más importante del país." } },
      { "@type": "Question", name: "¿A qué distancia está el hotel de ALIMENTEC?", acceptedAnswer: { "@type": "Answer", text: "Estamos a solo 7 minutos caminando del recinto de Corferias donde se realiza ALIMENTEC. Dirección: Cl. 22 Bis #44A-19, Teusaquillo." } },
      { "@type": "Question", name: "¿El desayuno es temprano para ir a ALIMENTEC?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand abre a las 8am, puedes desayunar antes de llegar a Corferias." } },
      { "@type": "Question", name: "¿Hay WiFi para trabajar entre pabellones?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con WiFi de fibra óptica de alta velocidad, ideal para revisar emails, enviar cotizaciones y gestionar pedidos de ALIMENTEC desde tu habitación." } },
      { "@type": "Question", name: "¿Tienen parqueadero para expositores de ALIMENTEC?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con parqueadero limitado. Te recomendamos reservar con anticipación durante ALIMENTEC ya que es época de alta demanda." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca ALIMENTEC 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-alimentec-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ALIMENTEC 2026 - Feria Internacional de la Alimentación",
    startDate: "2026-06-09",
    endDate: "2026-06-12",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria internacional de la alimentación más importante de Colombia. Evento profesional para la industria alimentaria.",
  };
  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Quintas de Bogotá",
    url: "https://www.hotelquintasdebogota.com",
    address: { "@type": "PostalAddress", streetAddress: "Cl. 22 Bis #44A-19", addressLocality: "Bogotá", addressRegion: "Cundinamarca", addressCountry: "CO" },
    telephone: "+57 317 6760460",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5", worstRating: "1", reviewCount: "472", ratingCount: "472" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">9–12 JUNIO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de ALIMENTEC 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si participas en <b>ALIMENTEC 2026</b>, la feria internacional de la alimentación que se realiza del <b>9 al 12 de junio</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. En Cl. 22 Bis #44A-19, Teusaquillo. Desayuno de 6:00 a 9:00, WiFi fibra óptica para gestionar pedidos y guarda-equipaje gratis para tus muestras.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para ALIMENTEC</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a ALIMENTEC 2026 en Corferias, ¿tienen disponibilidad del 9 al 12 de junio?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">¿Qué incluye tu reserva para ALIMENTEC?</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ <b>WiFi fibra óptica</b> para trabajar</li>
              <li>✓ <b>Guarda-equipaje gratis</b> (muestras, maletas)</li>
              <li>✓ Recepción 24h</li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">ALIMENTEC 2026: La feria de la industria alimentaria en Bogotá</h2>
          <p className="mt-3 text-gray-600">
            <b>ALIMENTEC 2026</b> es el evento más importante para la industria de alimentos y bebidas en Colombia. Del <b>9 al 12 de junio de 2026</b>, Corferias se convierte en el epicentro donde fabricantes, distribuidores, importadores y exportadores presentan los últimos productos, tecnología y tendencias del sector alimentario. Si eres <b>expositor o visitante profesional</b>, necesitas un hotel que esté cerca del recinto pero que también te ofrezca las comodidades para descansar después de una jornada intensa.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestro hotel en Teusaquillo está a <b>7 minutos caminando</b> de la entrada principal de Corferias. No necesitas taxi, no pierdes tiempo en tráfico. Y a diferencia de los hoteles sobre la Av. Esperanza (ruidosos por el tráfico de montacargas), estamos en una <b>calle residencial tranquila y arbolada</b>. Después de recorrer pabellones de lácteos, carnes, bebidas y empaques, llegar a una habitación silenciosa es clave para descansar.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Para expositores de ALIMENTEC</h3>
            <p className="text-sm text-gray-600 mt-2">Si montaste stand en ALIMENTEC, sabes que el día comienza antes de las 8am y termina después de las 7pm. Nuestro desayuno desde las 6:00 te permite comer tranquilo. El WiFi de fibra óptica te permite responder cotizaciones de compradores internacionales por la noche. Y el guarda-equipaje gratis guarda tus muestras y catálogos.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Para visitantes de ALIMENTEC</h3>
            <p className="text-sm text-white/80 mt-2">Recorrer ALIMENTEC es agotador: 4 días de pabellones, degustaciones y reuniones de negocios. Regresar a una habitación limpia con agua caliente y buena presión marca la diferencia. A 2.5km de Gran Estación para cenas de negocios con clientes.</p>
            <Link href="/habitaciones" className="text-sm text-[#C9A86A] underline mt-3 block">Ver habitaciones →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Tu rutina durante ALIMENTEC 2026</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">🍳</div>
              <div className="font-semibold mt-2">6:00 - Desayuno</div>
              <div className="text-sm text-gray-500">Buffet completo antes de ALIMENTEC</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🚶</div>
              <div className="font-semibold mt-2">7:00 - Caminas a Corferias</div>
              <div className="text-sm text-gray-500">7 minutos por calles seguras</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🏨</div>
              <div className="font-semibold mt-2">19:30 - Regresas al hotel</div>
              <div className="text-sm text-gray-500">Descanso y WiFi para responder emails</div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para ALIMENTEC 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es ALIMENTEC 2026 en Corferias?", a: "ALIMENTEC 2026 se realiza del 9 al 12 de junio de 2026 en Corferias, Bogotá. Es la feria internacional de la alimentación más importante del país, con más de 400 expositores." },
              { q: "¿A qué distancia está el hotel de ALIMENTEC?", a: "Estamos a solo 7 minutos caminando del recinto de Corferias. Dirección: Cl. 22 Bis #44A-19, Teusaquillo. No necesitas taxi." },
              { q: "¿El desayuno es temprano para ir a ALIMENTEC?", a: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand abre a las 8am, puedes desayunar sin correr." },
              { q: "¿Hay WiFi para trabajar entre pabellones?", a: "Sí, contamos con WiFi de fibra óptica de alta velocidad, ideal para revisar emails, enviar cotizaciones y gestionar pedidos desde tu habitación." },
              { q: "¿Tienen parqueadero durante ALIMENTEC?", a: "Sí, contamos con parqueadero limitado. Te recomendamos reservar con anticipación ya que es época de alta demanda durante la feria." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para ALIMENTEC 2026</h2>
          <p className="text-white/80 mt-2">Desde $90.000 por noche. A 7 min caminando de Corferias. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/hotel-cerca-corferias-bogota"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver todos los eventos Corferias →</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/servicios" className="underline">Servicios</Link> · <Link href="/habitaciones" className="underline">Habitaciones</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}