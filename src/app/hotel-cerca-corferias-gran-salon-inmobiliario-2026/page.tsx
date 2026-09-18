import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Gran Salón Inmobiliario 2026 | Cerca Corferias",
  description: "Hotel a 7 min del Gran Salón Inmobiliario 2026 en Corferias. WiFi fibra para gestiones inmobiliarias, desayuno, cerca de Gran Estación. Reserva directa.",
  keywords: ["hotel gran salon inmobiliario 2026","hotel inmobiliario corferias","alojamiento feria inmobiliaria bogota","hotel inversores inmobiliarios","hotel cerca corferias inmobiliario"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-inmobiliario-2026" },
  openGraph: {
    title: "Hotel Gran Salón Inmobiliario 2026 | Cerca Corferias",
    description: "Hotel a 7 min del Gran Salón Inmobiliario 2026. WiFi fibra para gestiones, cerca de Gran Estación.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-inmobiliario-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function GranSalonInmobiliario2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es el Gran Salón Inmobiliario 2026?", acceptedAnswer: { "@type": "Answer", text: "El Gran Salón Inmobiliario 2026 se realiza del 20 al 23 de agosto de 2026 en Corferias, Bogotá. Es el evento inmobiliario más importante de Colombia." } },
      { "@type": "Question", name: "¿El hotel está bien ubicado para reuniones de negocios inmobiliarios?", acceptedAnswer: { "@type": "Answer", text: "Sí, estamos a 7 minutos de Corferias y a 2.5km de Gran Estación, el centro comercial con restaurantes para cenas de negocios y espacio coworking." } },
      { "@type": "Question", name: "¿Tienen sala de reuniones o business center?", acceptedAnswer: { "@type": "Answer", text: "Contamos con WiFi de fibra óptica en todas las habitaciones para videoconferencias y gestiones inmobiliarias. También puedes usar el área común del hotel." } },
      { "@type": "Question", name: "¿Es seguro ir caminando al hotel de noche después de la feria?", acceptedAnswer: { "@type": "Answer", text: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. Calles residenciales iluminadas,-family-friendly, a minutos del Parque Simón Bolívar." } },
      { "@type": "Question", name: "¿Puedo coordinar visitas a propiedades desde el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro WiFi de fibra óptica te permite hacer videoconferencias con clientes y coordinar visitas a propiedades. La ubicación en Teusaquillo te da acceso rápido a distintas zonas de Bogotá." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Gran Salón Inmobiliario 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-inmobiliario-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Gran Salón Inmobiliario 2026",
    startDate: "2026-08-20",
    endDate: "2026-08-23",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "El evento inmobiliario más importante de Colombia. Proyectos, inversores, constructores y oportunidades de inversión.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">20–23 AGOSTO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca del Gran Salón Inmobiliario 2026</h1>
            <p className="mt-4 text-white/80">
              Si eres inversor inmobiliario, desarrollador o profesional del sector constructivo y asistirás al <b>Gran Salón Inmobiliario 2026</b>, que se realiza del <b>20 al 23 de agosto</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. WiFi fibra óptica para gestiones inmobiliarias, a 2.5km de Gran Estación para cenas de negocios.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para Gran Salón Inmobiliario</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré al Gran Salón Inmobiliario 2026 en Corferias, ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para inversores inmobiliarios</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>WiFi fibra óptica</b> para videoconferencias</li>
              <li>✓ A <b>2.5km de Gran Estación</b></li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ Barrio seguro y residencial</li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Gran Salón Inmobiliario 2026: El evento de inversión en Colombia</h2>
          <p className="mt-3 text-gray-600">
            El <b>Gran Salón Inmobiliario 2026</b> es el evento más importante del sector inmobiliario en Colombia. Del <b>20 al 23 de agosto de 2026</b>, Corferias reunirá a desarrolladores, constructores, inversionistas, arquitectos y profesionales del sector que buscan las mejores oportunidades de inversión. Si estás buscando proyectos de vivienda, oficinas o locales comerciales, este es tu evento.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestro hotel en <b>Teusaquillo</b> está estratégicamente ubicado: a 7 minutos caminando de Corferias para asistir al salón, y a solo 2.5km de <b>Gran Estación</b>, el centro comercial con restaurantes premium ideales para cenas de negocios con desarrolladores e inversionistas. El WiFi de fibra óptica te permite hacer videoconferencias con clientes, revisar planos y gestionar contratos desde tu habitación.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Inversionistas: tu base de operaciones</h3>
            <p className="text-sm text-gray-600 mt-2">Si vienes de Medellín, Cali o Barranquilla a buscar oportunidades de inversión, necesitas un hotel que esté cerca de Corferias y que también te conecte con zonas estratégicas de Bogotá. Teusaquillo está a 15 min de Chapinero, 20 min del Norte y 25 min de Usaquén. Ideal para visitar proyectos después de la feria.</p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación estratégica →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Cenas de negocios en Gran Estación</h3>
            <p className="text-sm text-white/80 mt-2">A 2.5km del hotel, Gran Estación ofrece restaurantes premium para cenas de negocios con desarrolladores e inversionistas. Después de recorrer el Gran Salón Inmobiliario, cierra tratos en un ambiente exclusivo.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para el Gran Salón Inmobiliario 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es el Gran Salón Inmobiliario 2026?", a: "El Gran Salón Inmobiliario 2026 se realiza del 20 al 23 de agosto de 2026 en Corferias, Bogotá. Es el evento inmobiliario más importante de Colombia." },
              { q: "¿El hotel está bien ubicado para negocios inmobiliarios?", a: "Sí, estamos a 7 min de Corferias y a 2.5km de Gran Estación, con restaurantes para cenas de negocios. WiFi fibra óptica para videoconferencias." },
              { q: "¿Tienen sala de reuniones o business center?", a: "Contamos con WiFi de fibra óptica en todas las habitaciones para videoconferencias y gestiones inmobiliarias. También puedes usar el área común." },
              { q: "¿Es seguro ir caminando al hotel de noche?", a: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. Calles residenciales iluminadas, family-friendly, cerca del Parque Simón Bolívar." },
              { q: "¿Puedo coordinar visitas a propiedades desde el hotel?", a: "Sí, el WiFi fibra óptica te permite hacer videoconferencias con clientes y coordinar visitas a propiedades en distintas zonas de Bogotá." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para el Gran Salón Inmobiliario 2026</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de Corferias. WiFi fibra para gestiones inmobiliarias. Cancelación gratuita 24h.</p>
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