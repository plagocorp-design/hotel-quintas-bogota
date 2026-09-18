import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca MEDITECH 2026 Corferias | Salud",
  description: "Hotel a 7 min de MEDITECH 2026, Feria de Servicios y Equipos Médicos en Corferias. Desayuno 6am para expositores, WiFi fibra, guarda-equipaje. Reserva directa.",
  keywords: ["hotel cerca meditech 2026","hotel meditech corferias","alojamiento feria medica bogota","hotel equipo medico corferias","hotel cerca hospital bogota"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-meditech-2026" },
  openGraph: {
    title: "Hotel Cerca MEDITECH 2026 Corferias | Salud",
    description: "Hotel a 7 min de MEDITECH 2026. Desayuno 6am para expositores médicos, WiFi fibra.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-meditech-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function Meditech2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es MEDITECH 2026 en Corferias?", acceptedAnswer: { "@type": "Answer", text: "MEDITECH 2026, la Feria de Servicios y Equipos Médicos, se realiza del 28 al 31 de julio de 2026 en Corferias, Bogotá." } },
      { "@type": "Question", name: "¿A qué distancia está el hospital más cercano del hotel?", acceptedAnswer: { "@type": "Answer", text: "El Hospital Universitario San Jorge está a 10 minutos en taxi. El Hospital de la Misericordia está a 15 minutos. Ambos accesibles desde Teusaquillo." } },
      { "@type": "Question", name: "¿Puedo desayunar temprano si exhibo en MEDITECH?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand en MEDITECH abre a las 8am, puedes desayunar sin correr." } },
      { "@type": "Question", name: "¿El hotel tiene ascensor para equipo médico pesado?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con ascensor para facilitar el transporte de equipos médicos, maletas de demostración y material de exhibición." } },
      { "@type": "Question", name: "¿Puedo coordinar entrega de equipos al stand?", acceptedAnswer: { "@type": "Answer", text: "Sí, puedes recibir envíos en nuestra dirección (Cl. 22 Bis #44A-19) y coordinar la entrega a tu stand en Corferias. Guarda-equipaje disponible." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca MEDITECH 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-meditech-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "MEDITECH 2026 - Feria de Servicios y Equipos Médicos",
    startDate: "2026-07-28",
    endDate: "2026-07-31",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria de servicios y equipos médicos más importante de Colombia. Tecnología médica, equipos hospitalarios y soluciones de salud.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">28–31 JULIO 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de MEDITECH 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si eres profesional de la salud y exhibirás o visitarás <b>MEDITECH 2026</b>, la feria de servicios y equipos médicos que se realiza del <b>28 al 31 de julio</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Desayuno desde las 6:00am para expositores con turnos tempranos, WiFi fibra óptica para gestión hospitalaria y ascensor para equipos médicos pesados.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para MEDITECH</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a MEDITECH 2026 en Corferias, ¿tienen disponibilidad del 28 al 31 de julio?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para MEDITECH 2026</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ Desayuno desde <b>6:00am</b> para expositores</li>
              <li>✓ <b>Ascensor</b> para equipo médico pesado</li>
              <li>✓ <b>WiFi fibra óptica</b> para datos médicos</li>
              <li>✓ <b>Guarda-equipaje gratis</b></li>
              <li>✓ Recepción 24h · Cancelación 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">MEDITECH 2026: La feria médica más importante de Colombia</h2>
          <p className="mt-3 text-gray-600">
            <b>MEDITECH 2026</b> reúne a profesionales de la salud, distribuidores de equipos médicos, laboratorios farmacéuticos y proveedores de tecnología hospitalaria. Del <b>28 al 31 de julio de 2026</b>, Corferias será el epicentro donde se presentan las últimas innovaciones en equipos médicos, dispositivos quirúrgicos, mobiliario hospitalario y soluciones digitales de salud. Si eres médico, ingeniero biomédico o distribuidor, MEDITECH es tu evento.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestro hotel en Teusaquillo está a <b>7 minutos caminando</b> de Corferias. Contamos con ascensor para facilitar el transporte de equipos médicos pesados de demostración. El WiFi de fibra óptica garantiza conexión estable para acceder a bases de datos médicas, historias clínicas y sistemas de gestión hospitalaria. Y si necesitas enviar material a tu stand, puedes recibir envíos en nuestra dirección.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Expositores médicos: tu rutina en MEDITECH</h3>
            <p className="text-sm text-gray-600 mt-2">Montar un stand de equipo médico requiere madrugar. Nuestro desayuno desde las 6:00am te permite alimentarte antes de llegar a Corferias. Después de 4 días de demostrar equipos, atender consultas y cerrar ventas, volver a una habitación silenciosa en Teusaquillo es clave para el descanso.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Cerca de hospitales de referencia</h3>
            <p className="text-sm text-white/80 mt-2">Si necesitas visitar hospitales antes o después de MEDITECH, el Hospital Universitario San Jorge está a 10 min en taxi y el Hospital de la Misericordia a 15 min. Ideal para profesionales que combinan la feria con visitas médicas.</p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Servicios para profesionales de salud en MEDITECH</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">🏥</div>
              <div className="font-semibold mt-2">Ascensor</div>
              <div className="text-sm text-gray-500">Para equipo médico pesado</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🍳</div>
              <div className="font-semibold mt-2">Desayuno 6:00-9:00</div>
              <div className="text-sm text-gray-500">Temprano para expositores</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">📶</div>
              <div className="font-semibold mt-2">WiFi Fibra</div>
              <div className="text-sm text-gray-500">Estable para datos médicos</div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para MEDITECH 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es MEDITECH 2026 en Corferias?", a: "MEDITECH 2026 se realiza del 28 al 31 de julio de 2026 en Corferias, Bogotá. Es la feria de servicios y equipos médicos más importante de Colombia." },
              { q: "¿A qué distancia está el hospital más cercano?", a: "El Hospital Universitario San Jorge está a 10 minutos en taxi. El Hospital de la Misericordia a 15 minutos. Ambos accesibles desde Teusaquillo." },
              { q: "¿Puedo desayunar temprano si exhibo en MEDITECH?", a: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Puedes comer antes de llegar a tu stand." },
              { q: "¿El hotel tiene ascensor para equipo pesado?", a: "Sí, contamos con ascensor para facilitar el transporte de equipos médicos de demostración y material de exhibición." },
              { q: "¿Puedo recibir envíos de equipos en el hotel?", a: "Sí, puedes recibir envíos en nuestra dirección (Cl. 22 Bis #44A-19) y coordinar la entrega a tu stand. Guarda-equipaje disponible." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para MEDITECH 2026</h2>
          <p className="text-white/80 mt-2">Hotel con ascensor a 7 min de Corferias. Desayuno 6am para expositores médicos. Cancelación gratuita 24h.</p>
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