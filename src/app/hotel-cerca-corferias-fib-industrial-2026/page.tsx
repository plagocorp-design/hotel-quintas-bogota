import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca FIB 2026 Feria Industrial | Corferias",
  description: "Hotel a 7 min de FIB 2026, Feria Internacional Industrial en Corferias. 500+ expositores, WiFi fibra para B2B, desayuno temprano. Reserva directa.",
  keywords: ["hotel fib 2026","hotel feria industrial corferias","alojamiento industria bogota","hotel cerca feria industrial","hotel fabricantes corferias"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-corferias-fib-industrial-2026" },
  openGraph: {
    title: "Hotel Cerca FIB 2026 Feria Industrial | Corferias",
    description: "Hotel a 7 min de FIB 2026. 500+ expositores, WiFi fibra para B2B, desayuno temprano.",
    url: "https://hotelquintasdebogota.com/hotel-cerca-corferias-fib-industrial-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function FIBIndustrial2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es FIB 2026 en Corferias?", acceptedAnswer: { "@type": "Answer", text: "FIB 2026, la Feria Internacional Industrial, se realiza del 28 de septiembre al 2 de octubre de 2026 en Corferias, Bogotá. Son 5 días de la industria con más de 500 expositores." } },
      { "@type": "Question", name: "¿A qué distancia está el hotel de FIB?", acceptedAnswer: { "@type": "Answer", text: "Estamos a solo 7 minutos caminando del recinto de Corferias donde se realiza FIB 2026. Dirección: Cl. 22 Bis #44A-19, Teusaquillo." } },
      { "@type": "Question", name: "¿El hotel tiene business center para reuniones B2B?", acceptedAnswer: { "@type": "Answer", text: "Contamos con WiFi de fibra óptica de alta velocidad en todas las habitaciones para videoconferencias y reuniones B2B. También puedes usar el área común del hotel." } },
      { "@type": "Question", name: "¿Puedo imprimir catálogos o cotizaciones en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, tenemos impresora en recepción. Puedes imprimir catálogos, cotizaciones y cualquier documento necesario para FIB 2026." } },
      { "@type": "Question", name: "¿El desayuno es temprano para ir a FIB?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Si tu stand abre a las 8am, puedes desayunar sin correr." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca FIB 2026", item: "https://hotelquintasdebogota.com/hotel-cerca-corferias-fib-industrial-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "FIB 2026 - Feria Internacional Industrial",
    startDate: "2026-09-28",
    endDate: "2026-10-02",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria industrial más importante de Colombia. 500+ expositores de maquinaria, tecnología industrial y manufacturing.",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">28 SEP – 2 OCT 2026 · CORFERIAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de FIB 2026, Feria Internacional Industrial</h1>
            <p className="mt-4 text-white/80">
              Si eres industrial, fabricante o distribuidor y asistirás a <b>FIB 2026</b>, la Feria Internacional Industrial que se realiza del <b>28 de septiembre al 2 de octubre</b> en Corferias con más de 500 expositores, nuestro hotel está a solo <b>7 minutos caminando</b>. WiFi fibra óptica para negocios B2B, impresora para cotizaciones, desayuno temprano y guarda-equipaje.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para FIB 2026</Button></Link>
              <a href={hotel.whatsappUrl("Hola, asistiré a FIB 2026 (Feria Industrial) en Corferias, ¿tienen disponibilidad del 28 de sept al 2 de oct?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para FIB 2026 (500+ expositores)</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>WiFi fibra óptica</b> para B2B</li>
              <li>✓ <b>Impresora</b> para cotizaciones</li>
              <li>✓ Desayuno desde <b>6:00am</b></li>
              <li>✓ <b>Guarda-equipaje gratis</b></li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">FIB 2026: La feria industrial con 500+ expositores</h2>
          <p className="mt-3 text-gray-600">
            <b>FIB 2026</b> es la feria industrial más importante de Colombia y una de las más relevantes de Latinoamérica. Del <b>28 de septiembre al 2 de octubre de 2026</b>, Corferias reunirá a más de <b>500 expositores</b> de maquinaria industrial, tecnología de manufacturing, automatización, componentes, materiales y servicios industriales. Si eres fabricante, ingeniero industrial o distribuidor, FIB es donde se cierran los grandes negocios del sector.
          </p>
          <p className="mt-3 text-gray-600">
            Con <b>5 días de duración</b>, necesitas un hotel que esté cerca de Corferias pero que también te ofrezca las herramientas para trabajar por la noche. Nuestro WiFi de <b>fibra óptica</b> te permite enviar cotizaciones, hacer videoconferencias con plantas de producción y revisar especificaciones técnicas. La <b>impresora en recepción</b> te permite imprimir catálogos y cotizaciones para tus reuniones del día siguiente.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Industriales: tu base de negocios en Bogotá</h3>
            <p className="text-sm text-gray-600 mt-2">FIB 2026 atrae compradores de toda Colombia y Latinoamérica. Si vienes de Medellín, Cali o del exterior, necesitas un hotel que esté a pasos de Corferias y que tenga business center virtual (WiFi fibra + impresora). Nuestro hotel cumple ambas funciones.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios del hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">5 días de feria: tu rutina ideal</h3>
            <p className="text-sm text-white/80 mt-2">Con 500+ expositores, cada día en FIB es diferente. Desayuna a las 6:00, camina 7 min a Corferias, recorre pabellones de maquinaria y tecnología, regresa al hotel para responder cotizaciones por WiFi fibra. Repite por 5 días.</p>
            <Link href="/habitaciones" className="text-sm text-[#C9A86A] underline mt-3 block">Ver habitaciones →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para FIB 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es FIB 2026 en Corferias?", a: "FIB 2026 se realiza del 28 de septiembre al 2 de octubre de 2026 en Corferias, Bogotá. Son 5 días de la feria industrial más importante con más de 500 expositores." },
              { q: "¿A qué distancia está el hotel de FIB?", a: "Estamos a solo 7 minutos caminando del recinto de Corferias. En Cl. 22 Bis #44A-19, Teusaquillo." },
              { q: "¿Tienen business center para reuniones B2B?", a: "Contamos con WiFi fibra óptica de alta velocidad en todas las habitaciones para videoconferencias y reuniones B2B." },
              { q: "¿Puedo imprimir cotizaciones en el hotel?", a: "Sí, tenemos impresora en recepción. Puedes imprimir catálogos, cotizaciones y cualquier documento para FIB." },
              { q: "¿El desayuno es temprano para ir a FIB?", a: "Sí, nuestro desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Puedes desayunar antes de llegar a tu stand." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para FIB 2026</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de Corferias. WiFi fibra + impresora para negocios B2B. Cancelación gratuita 24h.</p>
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