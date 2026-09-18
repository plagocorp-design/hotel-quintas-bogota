import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Expoartesanías 2026 | Corferias",
  description: "Hotel a 7 min de Expoartesanías 2026 en Corferias. 14 días, guarda-equipaje para artesanías, WiFi, cerca del Parque Simón Bolívar. Reserva directa.",
  keywords: ["hotel expoartesanias 2026","hotel artesanias corferias","alojamiento artesanos bogota","hotel cerca expoartesanias","hotel artesanias colombianas corferias"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-expoartesanias-2026" },
  openGraph: {
    title: "Hotel Cerca Expoartesanías 2026 | Corferias",
    description: "Hotel a 7 min de Expoartesanías 2026. 14 días, guarda-equipaje seguro para artesanías, cerca del Parque Simón Bolívar.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-expoartesanias-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function Expoartesanias2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es Expoartesanías 2026?", acceptedAnswer: { "@type": "Answer", text: "Expoartesanías 2026 se realiza del 7 al 20 de diciembre de 2026 en Corferias, Bogotá. Son 14 días de artesanías colombianas, cultura y tradición." } },
      { "@type": "Question", name: "¿El hotel es seguro para guardar artesanías valiosas?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro guarda-equipaje gratis tiene control de acceso y vigilancia. Las artesanías, joyería y piezas valiosas quedan seguras en recepción." } },
      { "@type": "Question", name: "¿Ofrecen descuento por estancia larga en diciembre?", acceptedAnswer: { "@type": "Answer", text: "Sí, al ser Expoartesanías de 14 días, contamos con tarifas especiales para estancias prolongadas. Contáctanos por WhatsApp para conocer descuentos semanales." } },
      { "@type": "Question", name: "¿Es seguro ir al hotel de noche en diciembre?", acceptedAnswer: { "@type": "Answer", text: "Sí, Teusaquillo es un barrio seguro durante todo el año, incluyendo diciembre. Calles residenciales iluminadas, familiares, cerca del Parque Simón Bolívar." } },
      { "@type": "Question", name: "¿Puedo hacer compras navideñas cerca del hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, Teusaquillo tiene tiendas locales, y a 2.5km está Gran Estación con tiendas de regalos y decoración navideña. Además, en Expoartesanías encontrarás artesanías únicas para regalos." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Expoartesanías 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-expoartesanias-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Expoartesanías 2026",
    startDate: "2026-12-07",
    endDate: "2026-12-20",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria de artesanías colombianas más importante. 14 días de arte, cultura, tradición y los mejores regalos navideños hechos a mano.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">7–20 DICIEMBRE 2026 · 14 DÍAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de Expoartesanías 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si eres artesano, comprador de artesanías o turista cultural y asistirás a <b>Expoartesanías 2026</b>, que se realiza del <b>7 al 20 de diciembre</b> (14 días) en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Guarda-equipaje seguro para artesanías valiosas, WiFi fibra y cerca del Parque Simón Bolívar. En plena temporada navideña, es el lugar perfecto para encontrar regalos únicos.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para Expoartesanías</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a Expoartesanías 2026 en Corferias, ¿tienen disponibilidad del 7 al 20 de diciembre?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para artesanías y Navidad</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>Guarda-equipaje seguro</b> para artesanías</li>
              <li>✓ <b>Estancia larga</b> con descuento</li>
              <li>✓ Cerca del <b>Parque Simón Bolívar</b></li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Expoartesanías 2026: Arte, cultura y Navidad en Corferias</h2>
          <p className="mt-3 text-gray-600">
            <b>Expoartesanías 2026</b> es la feria de artesanías colombianas más importante del país. Con <b>14 días de duración</b> (del 7 al 20 de diciembre), se convierte en el escenario perfecto para descubrir el talento artesanal de todas las regiones de Colombia: cerámicas, tejidos, joyería, tallado en madera, sombreros vueltiao, hamacas, barro cocido y mucho más. Si buscas <b>regalos navideños únicos</b> o eres artesano que vende sus creaciones, Expoartesanías es tu evento.
          </p>
          <p className="mt-3 text-gray-600">
            Celebrada en <b>plena temporada navideña</b>, Expoartesanías atrae a turistas nacionales e internacionales, coleccionistas, distribuidores y familias que buscan regalos especiales. Nuestro hotel en <b>Teusaquillo</b> está a 7 minutos caminando de Corferias, y a pasos del <b>Parque Simón Bolívar</b> para disfrutar del ambiente festivo de Bogotá en diciembre. El <b>guarda-equipaje seguro</b> protege tus artesanías valiosas mientras exploras más pabellones.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Artesanos: tu hotel en temporada navideña</h3>
            <p className="text-sm text-gray-600 mt-2">Si eres artesano que vende en Expoartesanías, necesitas un hotel que esté cerca y que tenga guarda-equipaje seguro para tu mercadería valiosa. Nuestro hotel en Teusaquillo te ofrece eso y más: un barrio tranquilo para descansar después de vender durante 14 días. WiFi fibra para gestionar pedidos por WhatsApp.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Turistas culturales en Bogotá</h3>
            <p className="text-sm text-white/80 mt-2">Expoartesanías cae en diciembre, el mes más mágico de Bogotá. Después de recorrer los pabellones de artesanías, camina 5 minutos al Parque Simón Bolívar para ver la alumbrada navideña. Un plan perfecto para turistas culturales.</p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para Expoartesanías 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es Expoartesanías 2026?", a: "Expoartesanías 2026 se realiza del 7 al 20 de diciembre de 2026 en Corferias, Bogotá. Son 14 días de artesanías colombianas en temporada navideña." },
              { q: "¿El hotel es seguro para guardar artesanías valiosas?", a: "Sí, nuestro guarda-equipaje gratis tiene control de acceso y vigilancia. Las artesanías, joyería y piezas valiosas quedan seguras en recepción." },
              { q: "¿Ofrecen descuento por estancia larga en diciembre?", a: "Sí, contamos con tarifas especiales para estancias prolongadas. Contáctanos por WhatsApp para descuentos semanales durante Expoartesanías." },
              { q: "¿Es seguro ir al hotel de noche en diciembre?", a: "Sí, Teusaquillo es un barrio seguro todo el año. Calles residenciales iluminadas, familiares, cerca del Parque Simón Bolívar." },
              { q: "¿Puedo hacer compras navideñas cerca del hotel?", a: "Sí, a 2.5km está Gran Estación con tiendas de regalos y decoración navideña. Además, en Expoartesanías encontrarás artesanías únicas para regalos." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para Expoartesanías 2026</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de Corferias. Guarda-equipaje seguro para artesanías. Descuento estancia larga en diciembre.</p>
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