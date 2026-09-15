import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Embajada Estados Unidos Bogotá | 7 Min Caminando",
  description: "Alojamiento a 7 minutos caminando de la Embajada de Estados Unidos en Bogotá. Guarda-equipaje gratis, desayuno 6:00-9:00, recepción 24h. Reserva directa sin comisión.",
  keywords: ["hotel cerca embajada estados unidos bogota","hotel embajada estados unidos","hospedaje cerca embajada usa bogota","alojamiento embajada estados unidos","hotel donde dormir embajada estados unidos"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-embajada-estados-unidos-bogota" },
  openGraph: {
    title: "Hotel Cerca Embajada Estados Unidos Bogotá | 7 Min Caminando",
    description: "Hotel a 7 min de la Embajada de Estados Unidos. Guarda-equipaje gratis, desayuno 6-9am.",
    url: "https://hotelquintasdebogota.com/hotel-cerca-embajada-estados-unidos-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelCercaEmbajadaEstadosUnidosPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuál es la dirección exacta del hotel?", acceptedAnswer: { "@type": "Answer", text: "Cl. 22 Bis #44A-19, Teusaquillo, Bogotá. Estamos a 7 minutos caminando de la entrada principal de la Embajada de Estados Unidos en la Carrera 45 con Calle 26." } },
      { "@type": "Question", name: "¿Cómo llego desde el Aeropuerto El Dorado al hotel?", acceptedAnswer: { "@type": "Answer", text: "Tomas un taxi o servicio de transporte desde el aeropuerto hasta Cl. 22 Bis #44A-19. El trayecto toma entre 20-30 minutos dependiendo del tráfico. También puedes pedir un servicio privado por WhatsApp." } },
      { "@type": "Question", name: "¿Cómo llego del hotel a la Embajada de Estados Unidos?", acceptedAnswer: { "@type": "Answer", text: "Son 7 minutos caminando. Sales del hotel, caminas por la calle residencial segura de Teusaquillo y llegas a la Carrera 45 con Calle 26. No necesitas taxi ni transporte público." } },
      { "@type": "Question", name: "¿Es mejor ir en taxi o caminar a la Embajada de Estados Unidos?", acceptedAnswer: { "@type": "Answer", text: "Recomendamos caminar. Son solo 7 minutos por calles residenciales seguras. El taxi no te ahorra tiempo porque el tráfico en la zona puede ser pesado, y caminando llegas exacto y sin estrés." } },
      { "@type": "Question", name: "¿Puedo guardar maletas en el hotel si llego antes del check-in?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro servicio de guarda-equipaje está disponible todo el día. Puedes dejar tu maleta desde la mañana y recogerla después de tu cita. Es gratis y seguro." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca Embajada Estados Unidos", item: "https://hotelquintasdebogota.com/hotel-cerca-embajada-estados-unidos-bogota" },
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

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">UBICACIÓN IDEAL PARA CITA EN LA EMBAJADA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de la Embajada de Estados Unidos en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Si tu destino es la <b>Embajada de Estados Unidos</b>, necesitas un alojamiento que elimine el estrés del trayecto.
              Estamos en <b>Cl. 22 Bis #44A-19, Teusaquillo</b>, a solo <b>7 minutos caminando</b> de la entrada principal.
              Desayuno desde las 6:00am, guarda-equipaje gratis y recepción las 24 horas del día.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi cita</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita en la Embajada de Estados Unidos el... ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hospedaje ideal para la Embajada</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a la Embajada de Estados Unidos</li>
              <li>✓ Dirección exacta: <b>Cl. 22 Bis #44A-19</b></li>
              <li>✓ Desayuno de <b>6:00 a 9:00</b> antes de salir</li>
              <li>✓ <b>Guarda-equipaje gratis</b> durante el día</li>
              <li>✓ Recepción 24h para cualquier emergencia</li>
              <li>✓ Cancelación gratuita 24h</li>
              <li>✓ Check-in 14:00 · Check-out 12:30</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Cómo llegar desde el Aeropuerto El Dorado</h2>
          <p className="mt-3 text-gray-600">
            Si llegas por avión al <b>Aeropuerto El Dorado</b>, el trayecto hasta nuestro hotel toma entre 20 y 30 minutos en taxi o transporte privado.
            La dirección que debes dar al conductor es <b>Cl. 22 Bis #44A-19, Teusaquillo, Bogotá</b>.
            Si llegas temprano y tu check-in aún no está listo, no te preocupes: puedes dejar tu equipaje en recepción mientras tomas un café cerca del hotel.
          </p>
          <p className="mt-3 text-gray-600">
            Te recomendamos solicitar el servicio de transporte por adelantado a través de nuestro WhatsApp.
            Así llegas tranquilo sin preocuparte por buscar taxis a las 4am o negociar tarifas.
            Si prefieres caminar al aeropuerto para tu vuelo de regreso, también tenemos consejos para eso.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Mapa y ruta: Hotel a la Embajada de Estados Unidos</h3>
            <div className="mt-3 text-sm space-y-3">
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Ruta a pie:</b> Sal del hotel → Camina por la Calle 22 Bis hacia la Carrera 45 → Gira a la izquierda → Entras a la Carrera 45 → Llegas a la entrada de la Embajada. Total: 7 minutos.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Ruta en taxi:</b> Dale al conductor la dirección Cl. 22 Bis #44A-19 y dile que te lleve a la Carrera 45 con Calle 26. El viaje toma 3-5 minutos, pero caminar es igual de rápido.
              </div>
              <div className="border-l-4 border-[#C9A86A] pl-3">
                <b>Dato útil:</b> La Embajada de Estados Unidos en Bogotá está en la Carrera 45 #48-50. La entrada principal es por la Calle 26.
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Taxi vs. caminar: ¿cuál es mejor?</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Caminando:</b> 7 minutos, $0 de costo, sin tráfico, sin estrés. Llegas exacto a la hora que calculaste.</div>
              <div><b>Taxi:</b> 3-5 minutos sin tráfico, pero debes esperar el taxi y pagar $5.000-$10.000. Con tráfico puede tomar más.</div>
              <div><b>Nuestra recomendación:</b> Camina. Es seguro, rápido y llegas con la tranquilidad de saber que no vas a llegar tarde por un semáforo o una retención.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>La mejor opción:</b> Si tu cita es temprana (7am), sal a las 6:50 y camina. Si es después del mediodía, el taxi puede ser cómodo para volver.
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Por qué Teusaquillo es el mejor barrio para tu cita de visa</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">🏡</div>
              <div className="font-semibold mt-2">Zona residencial tranquila</div>
              <div className="text-sm text-gray-500">Calles seguras para caminar de noche</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🍳</div>
              <div className="font-semibold mt-2">Restaurantes cerca del hotel</div>
              <div className="text-sm text-gray-500">Almuerzos desde $12.000 en la zona</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🌳</div>
              <div className="font-semibold mt-2">Cerca del Jardín Botánico</div>
              <div className="text-sm text-gray-500">Puedes relajarte después de tu cita</div>
            </Card>
          </div>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen huéspedes que llegaron de otras ciudades</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Vine de Medellín con cita a las 8am. El hotel está increíblemente cerca. Caminé y llegué sin prisa.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Carolina · Medellín</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;La dirección exacta me ayudó a encontrar el hotel sin problemas. Llegué desde el aeropuerto en 25 minutos.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Ricardo · Barranquilla</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Dejé mi maleta en recepción antes del check-in y me fui tranquilo a mi cita. Todo muy bien organizado.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Diana · Cali</div></Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre alojamiento cerca de la Embajada de Estados Unidos</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuál es la dirección exacta del hotel?", a: "Cl. 22 Bis #44A-19, Teusaquillo, Bogotá. Estamos a 7 minutos caminando de la entrada principal de la Embajada de Estados Unidos en la Carrera 45 con Calle 26." },
              { q: "¿Cómo llego desde el Aeropuerto El Dorado al hotel?", a: "Tomas un taxi o servicio de transporte desde el aeropuerto hasta Cl. 22 Bis #44A-19. El trayecto toma entre 20-30 minutos dependiendo del tráfico. También puedes pedir un servicio privado por WhatsApp." },
              { q: "¿Cómo llego del hotel a la Embajada de Estados Unidos?", a: "Son 7 minutos caminando. Sales del hotel, caminas por la calle residencial segura de Teusaquillo y llegas a la Carrera 45 con Calle 26. No necesitas taxi ni transporte público." },
              { q: "¿Es mejor ir en taxi o caminar a la Embajada de Estados Unidos?", a: "Recomendamos caminar. Son solo 7 minutos por calles residenciales seguras. El taxi no te ahorra tiempo porque el tráfico en la zona puede ser pesado, y caminando llegas exacto y sin estrés." },
              { q: "¿Puedo guardar maletas en el hotel si llego antes del check-in?", a: "Sí, nuestro servicio de guarda-equipaje está disponible todo el día. Puedes dejar tu maleta desde la mañana y recogerla después de tu cita. Es gratis y seguro." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Tu hotel para la Embajada de Estados Unidos</h2>
          <p className="text-white/80 mt-2">7 minutos caminando. Dirección Cl. 22 Bis #44A-19. Reserva directa con cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/ubicacion"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver ubicación exacta</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/servicios" className="underline">Servicios</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
