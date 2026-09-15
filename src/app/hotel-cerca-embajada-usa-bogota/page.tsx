import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Embajada USA Bogotá | 7 Min a Pie",
  description: "Hotel a 7 minutos caminando de la Embajada USA en Bogotá. Desayuno 6:00-9:00, WiFi rápido, guarda-equipaje gratis. Teusaquillo, barrio seguro.",
  keywords: ["hotel cerca embajada usa bogota","hotel embajada usa bogota","hotel cerca embassy usa bogota","alojamiento embajada usa","hospedaje cerca embassy bogota"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-embajada-usa-bogota" },
  openGraph: {
    title: "Hotel Cerca Embajada USA Bogotá | 7 Min a Pie",
    description: "Hotel a 7 min de la Embajada USA. WiFi, desayuno y guarda-equipaje gratis.",
    url: "https://hotelquintasdebogota.com/hotel-cerca-embajada-usa-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function CercaEmbajadaUSAPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Qué tan lejos está el hotel de la Embajada USA?", acceptedAnswer: { "@type": "Answer", text: "Estamos a 7 minutos caminando de la entrada principal de la Embajada USA en la Carrera 45 con Calle 26. Son 600 metros por calles residenciales de Teusaquillo." } },
      { "@type": "Question", name: "¿Es seguro caminar de noche desde la Embajada al hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. La ruta está iluminada y es transitada. Aun así, si prefieres, la recepción está abierta 24h y te orientamos." } },
      { "@type": "Question", name: "¿El desayuno empieza temprano para ir a la Embajada?", acceptedAnswer: { "@type": "Answer", text: "El desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Incluye café, jugo, pan, huevos y fruta. Si tu cita es a las 7am, desayunas a las 6:15 y sales a las 6:30." } },
      { "@type": "Question", name: "¿Tienen WiFi para trabajar antes o después de mi cita?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con WiFi de fibra óptica de alta velocidad en todas las habitaciones y áreas comunes. Ideal si necesitas revisar documentos o hacer videollamadas." } },
      { "@type": "Question", name: "¿Puedo llegar tarde si mi vuelo se retrasa?", acceptedAnswer: { "@type": "Answer", text: "La recepción funciona 24 horas. Puedes hacer check-in a cualquier hora. Si llegas después de medianoche, avísanos por WhatsApp y te esperamos." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca Embajada USA", item: "https://hotelquintasdebogota.com/hotel-cerca-embajada-usa-bogota" },
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">UBICACIÓN ESTRATÉGICA EN TEUSAQUILLO</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de la Embajada USA en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Si necesitas estar cerca de la <b>Embajada USA</b>, nuestro hotel en <b>Teusaquillo</b> está a solo 7 minutos caminando.
              Barrio residencial tranquilo, calles arboladas y seguras para caminar en cualquier momento del día.
              WiFi de fibra, desayuno desde las 6:00am y recepción 24h. Calificación 8.8 con más de 470 reseñas.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
              <a href={hotel.whatsappUrl("Hola, necesito hotel cerca de la Embajada USA, ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">¿Qué incluye tu estancia?</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min a pie</b> de la Embajada USA</li>
              <li>✓ Desayuno buffet <b>6:00-9:00</b></li>
              <li>✓ <b>WiFi fibra óptica</b> en toda la habitación</li>
              <li>✓ <b>Guarda-equipaje gratis</b></li>
              <li>✓ Recepción 24 horas</li>
              <li>✓ Agua caliente y baño privado</li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1 */}
        <section>
          <h2 className="font-serif text-3xl font-bold">El hotel más cercano a la Embajada USA en Bogotá</h2>
          <p className="mt-3 text-gray-600">
            La <b>Embajada USA</b> en Bogotá está ubicada en la Carrera 45 con Calle 26, en la zona de Chapinero bajo.
            Nuestro hotel está en <b>Cl. 22 Bis #44A-19, Teusaquillo</b>, a exactamente 7 minutos caminando por calles residenciales seguras.
            No estamos sobre la Av. El Dorado con ruido de tráfico, sino en una zona tranquila de barrio donde puedes caminar tranquilo con tus documentos.
          </p>
          <p className="mt-3 text-gray-600">
            La distancia se mide por la Calle 22 Bis hasta la Carrera 45. Son menos de 700 metros. No necesitas taxi, no necesitas apps de transporte.
            Sales del hotel, doblas a la derecha y caminas.recto hasta la entrada principal de la Embajada.
          </p>
        </section>

        {/* Sección 2: Seguridad */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Teusaquillo: el barrio seguro para tu visita</h3>
            <p className="text-sm text-gray-600 mt-2">
              Teusaquillo es un barrio residencial de estrato 3 y 4, familiar y con很好的 iluminación. Las calles están llenas de casas, apartamentos y parques.
              A diferencia de otras zonas, no hay vida nocturna ruidosa ni problemas de seguridad conocidos.
              Familias de toda Colombia nos eligen porque pueden caminar tranquilos con sus hijos y documentos.
            </p>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación en mapa →</Link>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">WiFi que funciona de verdad</h3>
            <p className="text-sm text-gray-600 mt-2">
              Si necesitas revisar correos de la Embajada, preparar documentos o hacer una videollamada antes de tu cita,
              nuestro WiFi de fibra óptica no te va a fallar. Funciona en todas las habitaciones y en las áreas comunes.
              Muchos huéspedes lo usan para conectarse desde la habitación sin necesidad de buscar cafetería.
            </p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver todos los servicios →</Link>
          </Card>
        </section>

        {/* Sección 3: Distancia real */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Comparación de distancias a la Embajada USA</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border rounded-xl overflow-hidden">
              <thead className="bg-[#000000] text-white"><tr><th className="p-3 text-left">Ubicación</th><th className="p-3">Distancia</th><th className="p-3">Tiempo</th><th className="p-3">Modo</th></tr></thead>
              <tbody>
                <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Hotel Quintas Teusaquillo</td><td className="p-3 text-center">600 m</td><td className="p-3 text-center">7 min</td><td className="p-3 text-center">Caminando</td></tr>
                <tr><td className="p-3">Hoteles Chapinero Centro</td><td className="p-3 text-center">2.5 km</td><td className="p-3 text-center">10-15 min</td><td className="p-3 text-center">Taxi/App</td></tr>
                <tr><td className="p-3">Hoteles La Candelaria</td><td className="p-3 text-center">5 km</td><td className="p-3 text-center">20-30 min</td><td className="p-3 text-center">Taxi + tráfico</td></tr>
                <tr><td className="p-3">Hoteles Aeropuerto</td><td className="p-3 text-center">12 km</td><td className="p-3 text-center">35-50 min</td><td className="p-3 text-center">Taxi + tráfico</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Experiencias de huéspedes en la Embajada USA</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;El WiFi me salvó. Revisé mis documentos desde la habitación y todo funcionó perfecto.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Carlos · Barranquilla</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Caminé de regreso a las 9pm después de recoger mis cosas y me sentí totally segura. Barrio muy tranquilo.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Diana · Pereira</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;El desayuno a las 6am me permitió llegar a mi cita sin prisas. Todo fresquito y rico.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Roberto · Cúcuta</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje cerca de la Embajada USA</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Qué tan lejos está el hotel de la Embajada USA?", a: "Estamos a 7 minutos caminando de la entrada principal de la Embajada USA en la Carrera 45 con Calle 26. Son 600 metros por calles residenciales de Teusaquillo." },
              { q: "¿Es seguro caminar de noche desde la Embajada al hotel?", a: "Sí, Teusaquillo es uno de los barrios más seguros de Bogotá. La ruta está iluminada y es transitada. Aun así, si prefieres, la recepción está abierta 24h y te orientamos." },
              { q: "¿El desayuno empieza temprano para ir a la Embajada?", a: "El desayuno buffet se sirve de 6:00 a 9:00 de la mañana. Incluye café, jugo, pan, huevos y fruta. Si tu cita es a las 7am, desayunas a las 6:15 y sales a las 6:30." },
              { q: "¿Tienen WiFi para trabajar antes o después de mi cita?", a: "Sí, contamos con WiFi de fibra óptica de alta velocidad en todas las habitaciones y áreas comunes. Ideal si necesitas revisar documentos o hacer videollamadas." },
              { q: "¿Puedo llegar tarde si mi vuelo se retrasa?", a: "La recepción funciona 24 horas. Puedes hacer check-in a cualquier hora. Si llegas después de medianoche, avísanos por WhatsApp y te esperamos." },
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
          <h2 className="font-serif text-3xl font-bold">Reserva tu noche cerca de la Embajada USA</h2>
          <p className="text-white/80 mt-2">Habitación Doble desde $110.000. 7 min caminando. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
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
