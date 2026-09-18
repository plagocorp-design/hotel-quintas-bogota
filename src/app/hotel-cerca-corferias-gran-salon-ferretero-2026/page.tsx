import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Gran Salón Ferretero 2026 | Cerca Corferias",
  description: "Hotel a 7 min del Gran Salón Ferretero 2026 en Corferias. Guarda-equipaje amplio para herramientas, desayuno temprano, check-in 14:00. Reserva directa.",
  keywords: ["hotel gran salon ferretero 2026","hotel ferreteria corferias","alojamiento ferreteria bogota","hotel herramientas corferias","hotel distribuidores ferreteria"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-ferretero-2026" },
  openGraph: {
    title: "Hotel Gran Salón Ferretero 2026 | Cerca Corferias",
    description: "Hotel a 7 min del Gran Salón Ferretero 2026. Guarda-equipaje amplio para herramientas, desayuno temprano.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-ferretero-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function GranSalonFerretero2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es el Gran Salón Ferretero 2026?", acceptedAnswer: { "@type": "Answer", text: "El Gran Salón Ferretero 2026 se realiza del 28 al 30 de octubre de 2026 en Corferias, Bogotá. Es la feria del sector ferretero e industrial más importante de Colombia." } },
      { "@type": "Question", name: "¿Puedo guardar herramientas y equipaje pesado en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro guarda-equipaje gratis es amplio y puede acomodar herramientas, maletas de demostración y material pesado de ferretería. Consulta en recepción." } },
      { "@type": "Question", name: "¿Puedo hacer check-in temprano si llego de la feria?", acceptedAnswer: { "@type": "Answer", text: "El check-in está disponible a partir de las 14:00. Si llegas antes, puedes dejar tu equipaje en guarda-equipaje y recoger la habitación a partir de las 14:00." } },
      { "@type": "Question", name: "¿El desayuno es temprano para ir al Gran Salón Ferretero?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand abre a las 8am, puedes desayunar sin correr." } },
      { "@type": "Question", name: "¿Cómo llego del hotel al Gran Salón Ferretero?", acceptedAnswer: { "@type": "Answer", text: "Son 7 minutos caminando por la Calle 22 Bis hasta Corferias. También puedes tomar un taxi en $7.000 o el TransMilenio hasta la estación Corferias." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Gran Salón Ferretero 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-gran-salon-ferretero-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Gran Salón Ferretero 2026",
    startDate: "2026-10-28",
    endDate: "2026-10-30",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria del sector ferretero e industrial más importante de Colombia. Herramientas, ferretería, materiales de construcción y tecnología industrial.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">28–30 OCTUBRE 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca del Gran Salón Ferretero 2026</h1>
            <p className="mt-4 text-white/80">
              Si eres distribuidor de ferretería, fabricante de herramientas o profesional del sector industrial y asistirás al <b>Gran Salón Ferretero 2026</b>, que se realiza del <b>28 al 30 de octubre</b> en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Guarda-equipaje amplio para herramientas y demostraciones, desayuno temprano y check-in desde las 14:00.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para Gran Salón Ferretero</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré al Gran Salón Ferretero 2026 en Corferias, ¿tienen disponibilidad del 28 al 30 de octubre?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para el sector ferretero</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>Guarda-equipaje amplio</b> para herramientas</li>
              <li>✓ Desayuno desde <b>6:00am</b></li>
              <li>✓ Check-in <b>14:00</b> · Check-out <b>12:30</b></li>
              <li>✓ <b>WiFi fibra óptica</b></li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Gran Salón Ferretero 2026: La feria del sector ferretero</h2>
          <p className="mt-3 text-gray-600">
            El <b>Gran Salón Ferretero 2026</b> es el evento más importante para la industria de ferretería, herramientas, materiales de construcción y tecnología industrial en Colombia. Del <b>28 al 30 de octubre de 2026</b>, Corferias reunirá a distribuidores mayoristas, fabricantes nacionales e internacionales, compradores del sector construcción y profesionales que buscan las mejores marcas y precios en herramientas manuales, eléctricas, de seguridad y equipamiento industrial.
          </p>
          <p className="mt-3 text-gray-600">
            Si eres distribuidor ferretero o comprador del sector, sabes que las mejores negociaciones se cierran en la feria. Nuestro hotel en <b>Teusaquillo</b> está a 7 minutos caminando, lo que te permite ir y venir entre negocios sin perder tiempo. El <b>guarda-equipaje amplio</b> te permite guardar herramientas de demostración, muestras y material pesado mientras negocias con proveedores. Y el check-in a las 14:00 te da flexibilidad para llegar después de un día completo en la feria.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Distribuidores ferreteros: tu hotel en Bogotá</h3>
            <p className="text-sm text-gray-600 mt-2">Si vienes de Barranquilla, Bucaramanga o Medellín a surtir tu ferretería, necesitas un hotel que esté cerca de Corferias y que tenga espacio para guardar tu mercadería. Nuestro guarda-equipaje amplio (incluye espacios grandes para herramientas) es perfecto para distribuidores que compran en volumen.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Check-in flexible para ferreteros</h3>
            <p className="text-sm text-white/80 mt-2">Llegas a Bogotá en la mañana, dejas tu equipaje en guarda-equipaje, vas a Corferias a negociar, y a las 14:00 recoges tu habitación. El check-out a las 12:30 te da tiempo de ir a la feria el último día antes de partir.</p>
            <Link href="/habitaciones" className="text-sm text-[#C9A86A] underline mt-3 block">Ver habitaciones →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para el Gran Salón Ferretero 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es el Gran Salón Ferretero 2026?", a: "El Gran Salón Ferretero 2026 se realiza del 28 al 30 de octubre de 2026 en Corferias, Bogotá. Son 3 días de la feria ferretera e industrial más importante." },
              { q: "¿Puedo guardar herramientas y equipaje pesado?", a: "Sí, nuestro guarda-equipaje gratis es amplio y puede acomodar herramientas, maletas de demostración y material pesado de ferretería." },
              { q: "¿Puedo hacer check-in temprano?", a: "El check-in está disponible a partir de las 14:00. Si llegas antes, puedes dejar tu equipaje en guarda-equipaje y recoger la habitación después." },
              { q: "¿El desayuno es temprano para ir al Gran Salón Ferretero?", a: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Puedes desayunar antes de llegar a tu stand." },
              { q: "¿Cómo llego del hotel al Gran Salón Ferretero?", a: "Son 7 minutos caminando por la Calle 22 Bis hasta Corferias. También puedes tomar un taxi en $7.000." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para el Gran Salón Ferretero 2026</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de Corferias. Guarda-equipaje amplio para herramientas. Cancelación gratuita 24h.</p>
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