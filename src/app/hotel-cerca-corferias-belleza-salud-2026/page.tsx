import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Feria Belleza y Salud 2026 | Corferias",
  description: "Hotel a 7 min de la Feria Belleza y Salud 2026 en Corferias. Desayuno buffet, WiFi, guarda-equipaje gratis. Reserva directa sin comisión.",
  keywords: ["hotel feria belleza salud 2026","hotel belleza corferias","alojamiento cosmetica bogota","hotel feria estetica corferias","hotel cerca feria belleza bogota"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-corferias-belleza-salud-2026" },
  openGraph: {
    title: "Hotel Cerca Feria Belleza y Salud 2026 | Corferias",
    description: "Hotel a 7 min de la Feria Belleza y Salud 2026. Desayuno buffet, WiFi, cerca de spas y centros de estética.",
    url: "https://hotelquintasdebogota.com/hotel-cerca-corferias-belleza-salud-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function BellezaSalud2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es la Feria Belleza y Salud 2026?", acceptedAnswer: { "@type": "Answer", text: "La Feria Belleza y Salud 2026 se realiza del 13 al 17 de agosto de 2026 en Corferias, Bogotá. Es el evento líder en productos de belleza, cosméticos y salud." } },
      { "@type": "Question", name: "¿A qué distancia está el hotel de la feria?", acceptedAnswer: { "@type": "Answer", text: "Estamos a solo 7 minutos caminando del recinto de Corferias donde se realiza la Feria Belleza y Salud. En Cl. 22 Bis #44A-19, Teusaquillo." } },
      { "@type": "Question", name: "¿Hay spas o centros de estética cerca del hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, en Teusaquillo y alrededores hay varios spas y centros de estética. Además, durante la feria puedes acceder a las promociones especiales de los expositores." } },
      { "@type": "Question", name: "¿El hotel tiene habitaciones para parejas que visitan la feria?", acceptedAnswer: { "@type": "Answer", text: "Sí, ofrecemos habitaciones dobles perfectas para parejas que visitan la Feria Belleza y Salud. Habitaciones limpias, cómodas y en un barrio tranquilo." } },
      { "@type": "Question", name: "¿Puedo guardar productos cosméticos comprados en la feria?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro guarda-equipaje gratis te permite guardar bolsas, productos y muestras de cosméticos de forma segura mientras exploras más pabellones." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Feria Belleza y Salud 2026", item: "https://hotelquintasdebogota.com/hotel-cerca-corferias-belleza-salud-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Feria Belleza y Salud 2026",
    startDate: "2026-08-13",
    endDate: "2026-08-17",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria de belleza, cosméticos y salud más importante de Colombia. Productos, tendencias y oportunidades de negocio.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">13–17 AGOSTO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de la Feria Belleza y Salud 2026</h1>
            <p className="mt-4 text-white/80">
              Si trabajas en la industria de la belleza, cosméticos o estética y asistirás a la <b>Feria Belleza y Salud 2026</b>, que se realiza del <b>13 al 17 de agosto</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Ideal para profesionales de美容, distribuidores de productos y compradores del sector beauty. Desayuno buffet, WiFi y guarda-equipaje para tus compras.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para Belleza y Salud</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a la Feria Belleza y Salud 2026 en Corferias, ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para la Feria Belleza y Salud</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ <b>Guarda-equipaje gratis</b> para compras</li>
              <li>✓ <b>WiFi fibra óptica</b></li>
              <li>✓ Barrio tranquilo y seguro</li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Feria Belleza y Salud 2026: El evento beauty de Colombia</h2>
          <p className="mt-3 text-gray-600">
            La <b>Feria Belleza y Salud 2026</b> es el evento más importante para la industria de cosméticos, productos de belleza, estética profesional y bienestar en Colombia. Del <b>13 al 17 de agosto de 2026</b>, Corferias se convierte en el punto de encuentro donde fabricantes, distribuidores,美容 professionals y compradores presentan las últimas tendencias en cuidado de la piel, maquillaje, perfumería, equipamiento de spas y productos capilares.
          </p>
          <p className="mt-3 text-gray-600">
            Si eres distribuidor de cosméticos, dueño de un spa o esteticista profesional, la feria es una oportunidad única para descubrir nuevos productos, negociar precios y cerrar compras. Nuestro hotel en <b>Teusaquillo</b> está a 7 minutos caminando, lo que te permite ir y venir entre pabellones sin cargar bolsas. El <b>guarda-equipaje gratis</b> te permite dejar tus compras seguras mientras sigues explorando.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Compradores profesionales de belleza</h3>
            <p className="text-sm text-gray-600 mt-2">Si vienes a comprar para tu tienda, spa o cadena de cosméticos, sabes que los mejores negocios se cierran al final del día. Después de recorrer pabellones de skincare, maquillaje y perfumería, volver a una habitación limpia en Teusaquillo te da energía para las negociaciones del día siguiente.</p>
            <Link href="/habitaciones" className="text-sm text-[#C9A86A] underline mt-3 block">Ver habitaciones →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Expositores de la industria beauty</h3>
            <p className="text-sm text-white/80 mt-2">Montar un stand de cosméticos requiere creatividad y energía. Nuestro desayuno desde las 6:00 te da el impulso. El WiFi de fibra óptica te permite publicar en redes sociales en tiempo real. Y la ubicación en Teusaquillo te conecta con restaurantes para cenas de negocios con distribuidores.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para la Feria Belleza y Salud 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es la Feria Belleza y Salud 2026?", a: "La Feria Belleza y Salud 2026 se realiza del 13 al 17 de agosto de 2026 en Corferias, Bogotá. Son 5 días de la industria de la belleza y cosméticos." },
              { q: "¿A qué distancia está el hotel de la feria?", a: "Estamos a solo 7 minutos caminando del recinto de Corferias. En Cl. 22 Bis #44A-19, Teusaquillo." },
              { q: "¿Hay spas o centros de estética cerca del hotel?", a: "Sí, en Teusaquillo y alrededores hay varios spas y centros de estética. Además, durante la feria puedes acceder a promociones especiales de los expositores." },
              { q: "¿Puedo guardar productos cosméticos comprados?", a: "Sí, nuestro guarda-equipaje gratis te permite guardar bolsas, productos y muestras de cosméticos de forma segura." },
              { q: "¿El hotel tiene habitaciones para parejas?", a: "Sí, ofrecemos habitaciones dobles perfectas para parejas que visitan la feria. Habitaciones limpias y en un barrio tranquilo." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para la Feria Belleza y Salud 2026</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de Corferias. Guarda-equipaje gratis para tus compras de cosméticos. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/hotel-cerca-corferias-bogota"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver todos los eventos Corferias →</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/servicios" className="underline">Servicios</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}