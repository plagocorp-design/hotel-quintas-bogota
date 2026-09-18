import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca FIMA 2026 Corferias | Medio Ambiente",
  description: "Hotel a 7 min de FIMA 2026, Feria Internacional del Medio Ambiente en Corferias. Desayuno temprano, WiFi fibra, cerca del Parque Simón Bolívar. Reserva directa.",
  keywords: ["hotel cerca fima 2026","hotel fima corferias","alojamiento medio ambiente corferias","hotel feria medio ambiente bogota","hotel sostenible bogota"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-fima-2026" },
  openGraph: {
    title: "Hotel Cerca FIMA 2026 Corferias | Medio Ambiente",
    description: "Hotel eco-friendly a 7 min de FIMA 2026. Cerca del Parque Simón Bolívar, desayuno temprano.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-fima-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function Fima2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es FIMA 2026 en Corferias?", acceptedAnswer: { "@type": "Answer", text: "FIMA 2026, la Feria Internacional del Medio Ambiente, se realiza del 9 al 11 de julio de 2026 en Corferias, Bogotá. Es el evento líder en soluciones ambientales para Latinoamérica." } },
      { "@type": "Question", name: "¿Es el hotel eco-friendly para profesionales de sostenibilidad?", acceptedAnswer: { "@type": "Answer", text: "Nosotros estamos comprometidos con prácticas sostenibles. Ubicados en Teusaquillo, un barrio con árboles y Parque Simón Bolívar cerca. Fomentamos el transporte a pie (7 min a Corferias) reduciendo emisiones." } },
      { "@type": "Question", name: "¿Cómo llego del hotel a FIMA en Corferias?", acceptedAnswer: { "@type": "Answer", text: "Son 7 minutos caminando por la Calle 22 Bis hasta la Av. La Esperanza. También puedes tomar un taxi en $7.000 o el TransMilenio hasta la estación Corferias." } },
      { "@type": "Question", name: "¿Tienen植物aciones o áreas verdes en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Nuestro hotel está en una calle arbolada de Teusaquillo, a menos de 5 minutos del Parque Simón Bolívar, el pulmón verde de Bogotá. Ideal para profesionales del medio ambiente que buscan conectar con la naturaleza." } },
      { "@type": "Question", name: "¿Ofrecen descuentos para expositores de FIMA?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con tarifas especiales para expositores y visitantes de ferias en Corferias. Contáctanos por WhatsApp mencionando FIMA 2026 para conocer nuestras tarifas preferenciales." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca FIMA 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-fima-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "FIMA 2026 - Feria Internacional del Medio Ambiente",
    startDate: "2026-07-09",
    endDate: "2026-07-11",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria internacional del medio ambiente más importante de Latinoamérica. Soluciones ambientales, energías renovables y gestión de residuos.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">9–11 JULIO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de FIMA 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si trabajas en el sector ambiental y asistirás a <b>FIMA 2026</b>, la feria internacional del medio ambiente que se realiza del <b>9 al 11 de julio</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Ubicados en una calle arbolada de Teusaquillo, a pasos del Parque Simón Bolívar. Un entorno que conecta con la filosofía de sostenibilidad de FIMA.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para FIMA 2026</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a FIMA 2026 en Corferias, ¿tienen disponibilidad del 9 al 11 de julio?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel sostenible para FIMA 2026</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias (sin emisiones)</li>
              <li>✓ Cerca del <b>Parque Simón Bolívar</b></li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ <b>WiFi fibra óptica</b> para trabajo remoto</li>
              <li>✓ <b>Guarda-equipaje gratis</b></li>
              <li>✓ Recepción 24h · Cancelación 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">FIMA 2026: El evento ambiental más importante de Latinoamérica</h2>
          <p className="mt-3 text-gray-600">
            <b>FIMA 2026</b> reúne a profesionales del medio ambiente, energías renovables, gestión de residuos, agua potable y sostenibilidad urbana. Del <b>9 al 11 de julio de 2026</b>, Corferias será el escenario donde gobiernos, empresas y ONG presentan soluciones para los retos ambientales de la región. Si eres profesional del sector ambiental, ingeniero ambiental o representante de una empresa sostenible, FIMA es tu evento.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestro hotel está en <b>Teusaquillo</b>, un barrio residencial con árboles, a menos de 5 minutos del Parque Simón Bolívar. Después de recorrer pabellones de energías renovables, tecnología de agua y soluciones de movilidad sostenible, poder descansar en un entorno tranquilo y verde es una ventaja. Y caminar los 7 minutos a Corferias significa <b>cero emisiones de transporte</b>, algo que los profesionales del medio ambiente valoran.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Profesionales ambientales: tu hotel ideal</h3>
            <p className="text-sm text-gray-600 mt-2">Si vienes de Medellín, Cali o el exterior para FIMA, necesitas un hotel que esté cerca de Corferias pero que también esté en un barrio agradable. Teusaquillo es perfecto: árboles, Parque Simón Bolívar a 5 min, restaurantes y TransMilenio cercano. Después de conferencias sobre cambio climático, regresar a un ambiente verde restaura energías.</p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación en mapa →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">¿Por qué caminar a FIMA?</h3>
            <p className="text-sm text-white/80 mt-2">7 minutos a pie = 0 emisiones de CO₂. Los profesionales del medio ambiente que asisten a FIMA valoran esta alternativa sostenible. La ruta pasa por calles residenciales arboladas de Teusaquillo, un barrio con identidad y vida comunitaria.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para FIMA 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es FIMA 2026 en Corferias?", a: "FIMA 2026 se realiza del 9 al 11 de julio de 2026 en Corferias, Bogotá. Es la feria internacional del medio ambiente más importante de Latinoamérica." },
              { q: "¿Es el hotel eco-friendly?", a: "Nos encontramos en una calle arbolada de Teusaquillo, fomentamos el transporte a pie (7 min a Corferias) y estamos a pasos del Parque Simón Bolívar. Un entorno ideal para profesionales del sector ambiental." },
              { q: "¿Cómo llego del hotel a FIMA?", a: "Son 7 minutos caminando por la Calle 22 Bis hasta la Av. La Esperanza. También puedes tomar un taxi en $7.000 o el TransMilenio hasta la estación Corferias." },
              { q: "¿Tienen áreas verdes cerca del hotel?", a: "Sí, el Parque Simón Bolívar está a menos de 5 minutos a pie. Es el pulmón verde de Bogotá, perfecto para un paseo después de FIMA." },
              { q: "¿Ofrecen descuentos para expositores de FIMA?", a: "Contáctanos por WhatsApp mencionando FIMA 2026 para conocer nuestras tarifas especiales para profesionales del medio ambiente." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para FIMA 2026</h2>
          <p className="text-white/80 mt-2">Hotel sostenible a 7 min de Corferias. Camina a FIMA sin emitir CO₂. Cancelación gratuita 24h.</p>
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