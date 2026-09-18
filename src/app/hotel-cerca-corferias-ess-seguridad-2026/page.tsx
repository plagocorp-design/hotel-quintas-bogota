import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca ESS+ Seguridad 2026 | Corferias",
  description: "Hotel a 7 min de ESS+ Seguridad 2026 en Corferias. Barrio seguro, desayuno temprano, WiFi fibra, guarda-equipaje para equipos de seguridad. Reserva directa.",
  keywords: ["hotel ess seguridad 2026","hotel feria seguridad corferias","alojamiento seguridad privada bogota","hotel cerca feria seguridad","hotel guardas seguridad corferias"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-ess-seguridad-2026" },
  openGraph: {
    title: "Hotel Cerca ESS+ Seguridad 2026 | Corferias",
    description: "Hotel a 7 min de ESS+ Seguridad 2026. Barrio seguro, desayuno temprano, guarda-equipaje para equipos.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-ess-seguridad-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function ESSSeguridad2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es ESS+ Seguridad 2026?", acceptedAnswer: { "@type": "Answer", text: "ESS+ Seguridad 2026, la Feria Internacional de Seguridad, se realiza del 26 al 28 de agosto de 2026 en Corferias, Bogotá." } },
      { "@type": "Question", name: "¿El hotel está en un barrio seguro para profesionales de seguridad?", acceptedAnswer: { "@type": "Answer", text: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. Calles residenciales iluminadas, familiares, cerca del Parque Simón Bolívar. Ideal para profesionales de la seguridad que valoran la tranquilidad." } },
      { "@type": "Question", name: "¿Puedo guardar equipos de seguridad en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro guarda-equipaje gratis te permite guardar equipos, maletas de demostración y material de seguridad de forma segura en recepción." } },
      { "@type": "Question", name: "¿El desayuno es temprano para ir a ESS+?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand abre a las 8am, puedes desayunar sin correr." } },
      { "@type": "Question", name: "¿Cómo llego del hotel a ESS+ Seguridad en Corferias?", acceptedAnswer: { "@type": "Answer", text: "Son 7 minutos caminando por la Calle 22 Bis hasta la Av. La Esperanza. También puedes tomar un taxi en $7.000 o el TransMilenio." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel ESS+ Seguridad 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-ess-seguridad-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ESS+ Seguridad 2026 - Feria Internacional de Seguridad",
    startDate: "2026-08-26",
    endDate: "2026-08-28",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria internacional de seguridad más importante de Colombia. Seguridad privada, vigilancia, protección y tecnología de seguridad.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">26–28 AGOSTO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de ESS+ Seguridad 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si trabajas en el sector de seguridad privada, vigilancia o protección y asistirás a <b>ESS+ Seguridad 2026</b>, que se realiza del <b>26 al 28 de agosto</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Ubicados en Teusaquillo, uno de los barrios más seguros de Bogotá. Guarda-equipaje para equipos de seguridad, desayuno temprano y WiFi fibra.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para ESS+ Seguridad</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a ESS+ Seguridad 2026 en Corferias, ¿tienen disponibilidad del 26 al 28 de agosto?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para profesionales de seguridad</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>Barrio seguro</b> de Teusaquillo</li>
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>Guarda-equipaje gratis</b> para equipos</li>
              <li>✓ Desayuno desde <b>6:00am</b></li>
              <li>✓ <b>WiFi fibra óptica</b></li>
              <li>✓ Recepción 24h · Cancelación 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">ESS+ Seguridad 2026: La feria de seguridad más importante de Colombia</h2>
          <p className="mt-3 text-gray-600">
            <b>ESS+ Seguridad 2026</b> es el evento líder en seguridad privada, vigilancia electrónica, protección de activos y tecnología de seguridad en Colombia. Del <b>26 al 28 de agosto de 2026</b>, Corferias será el escenario donde empresas de seguridad, fabricantes de equipos de vigilancia, consultores y profesionales del sector presentan las últimas soluciones en cámaras, control de acceso, alarmas y seguridad perimetral.
          </p>
          <p className="mt-3 text-gray-600">
            Si eres empresario de seguridad privada, distribuidor de equipos de vigilancia o consultor de protección, necesitas un hotel que esté cerca de Corferias y que también esté en un <b>barrio seguro</b>. Teusaquillo cumple con ambas cosas: calles residenciales iluminadas, familiares, a pasos del Parque Simón Bolívar. Después de recorrer pabellones de tecnología de seguridad, llegar a un entorno tranquilo y seguro es fundamental.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Empresas de seguridad: tu hotel en Bogotá</h3>
            <p className="text-sm text-gray-600 mt-2">Si vienes con equipo de demostración (cámaras, sensores, kontrol panel), nuestro guarda-equipaje gratis lo resguarda mientras no estás en el hotel. El WiFi fibra te permite revisar feeds de cámaras remotas y gestionar contratos de seguridad. Teusaquillo es un barrio donde tus clientes pueden visitarte sin problemas.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Seguridad que se nota en el barrio</h3>
            <p className="text-sm text-white/80 mt-2">Teusaquillo es un barrio residencial con vigilancia comunitaria, calles familiares y presencia policial. Los profesionales de seguridad valoran estar en un entorno que refleja los valores que promueven: tranquilidad, orden y protección.</p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación segura →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para ESS+ Seguridad 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es ESS+ Seguridad 2026?", a: "ESS+ Seguridad 2026 se realiza del 26 al 28 de agosto de 2026 en Corferias, Bogotá. Es la feria internacional de seguridad más importante del país." },
              { q: "¿El hotel está en un barrio seguro?", a: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. Calles residenciales iluminadas, familiares, cerca del Parque Simón Bolívar." },
              { q: "¿Puedo guardar equipos de seguridad en el hotel?", a: "Sí, nuestro guarda-equipaje gratis te permite guardar equipos, maletas de demostración y material de seguridad de forma segura." },
              { q: "¿El desayuno es temprano para ir a ESS+?", a: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Puedes desayunar antes de llegar a tu stand." },
              { q: "¿Cómo llego del hotel a ESS+ Seguridad?", a: "Son 7 minutos caminando por la Calle 22 Bis hasta la Av. La Esperanza. También puedes tomar un taxi en $7.000." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para ESS+ Seguridad 2026</h2>
          <p className="text-white/80 mt-2">Barrio seguro a 7 min de Corferias. Guarda-equipaje gratis para equipos de seguridad. Cancelación gratuita 24h.</p>
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