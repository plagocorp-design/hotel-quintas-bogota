import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Embajada Americana Bogotá | 7 Min a Pie",
  description: "Hotel a 7 min caminando de la Embajada Americana en Bogotá. Desayuno 6:00-9:00, guarda-equipaje gratis, cancelación 24h. Reserva directa.",
  keywords: ["hotel cerca embajada americana bogota","hotel para visa americana bogota","donde dormir cita embajada usa","hotel cerca embajada usa bogota","alojamiento cerca embajada americana"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-embajada-americana-bogota" },
  openGraph: {
    title: "Hotel Cerca Embajada Americana Bogotá | 7 Min a Pie",
    description: "Hotel a 7 min caminando de la Embajada Americana. Desayuno 6:00-9:00, guarda-equipaje gratis.",
    url: "https://hotelquintasdebogota.com/hotel-cerca-embajada-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function EmbajadaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿A qué distancia está la Embajada Americana del hotel?", acceptedAnswer: { "@type": "Answer", text: "Estamos a 7 minutos caminando de la entrada de la Embajada Americana en la Carrera 45 con Calle 26. No necesitas taxi." } },
      { "@type": "Question", name: "¿Puedo llegar caminando a mi cita en la Embajada?", acceptedAnswer: { "@type": "Answer", text: "Sí, perfectamente. Son 7 minutos a pie por calles residenciales seguras. Sales con tiempo y llegas tranquilo." } },
      { "@type": "Question", name: "¿Dan desayuno temprano para cita de visa?", acceptedAnswer: { "@type": "Answer", text: "El desayuno se sirve de 6:00 a 9:00 de la mañana. Si tu cita es a las 7am, puedes desayunar antes de salir." } },
      { "@type": "Question", name: "¿Guardan mi celular y equipaje el día de la cita?", acceptedAnswer: { "@type": "Answer", text: "Sí, guardamos tu celular, maleta y cualquier objeto que no puedas llevar a la Embajada. Es gratis." } },
      { "@type": "Question", name: "¿A qué hora debo llegar a mi cita de visa?", acceptedAnswer: { "@type": "Answer", text: "30 minutos antes de tu hora. Al estar a 7 min caminando, puedes salir sin estrés de tráfico." } },
      { "@type": "Question", name: "¿Puedo imprimir mi DS-160 en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, tenemos impresora en recepción. Imprimimos tu DS-160 y cualquier documento que necesites." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cerca Embajada Americana", item: "https://hotelquintasdebogota.com/hotel-cerca-embajada-americana-bogota" },
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

      {/* HERO - Keyword principal en H1 */}
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">A 7 MIN CAMINANDO DE LA EMBAJADA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de la Embajada Americana en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Si tienes cita en la <b>Embajada Americana</b>, nuestro hotel está a solo <b>7 minutos caminando</b>.
              En Cl. 22 Bis #44A-19, Teusaquillo. Desayuno de 6:00 a 9:00, guarda-equipaje gratis y recepción 24h.
              Más de 470 huéspedes con visa aprobada nos eligen por la cercanía.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi cita</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita en la Embajada el... ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">¿Qué incluye tu reserva para visa?</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a la Embajada Americana</li>
              <li>✓ Desayuno de <b>6:00 a 9:00</b></li>
              <li>✓ <b>Guarda-equipaje gratis</b> (celular, maleta)</li>
              <li>✓ <b>Impresión DS-160</b> en recepción</li>
              <li>✓ Recepción 24h (te despertamos)</li>
              <li>✓ Cancelación gratuita 24h</li>
             
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1: Por qué este hotel */}
        <section>
          <h2 className="font-serif text-3xl font-bold">¿Por qué un hotel cerca de la Embajada Americana?</h2>
          <p className="mt-3 text-gray-600">
            Tener tu <b>cita en la Embajada Americana</b> genera estrés. Llegar tarde, perder la cita por tráfico o no tener dónde dejar tus pertenencias puede costarte la visa. Por eso elegir un <b>hotel cerca de la Embajada</b> es la mejor decisión. Nuestro hotel está a <b>7 minutos caminando</b> de la entrada principal en la Carrera 45 con Calle 26. No necesitas taxi, no necesitas madrugar más de lo necesario. Sales, caminas y llegas.
          </p>
          <p className="mt-3 text-gray-600">
            No somos un hotel de zona aeropuerto con ruido de aviones. Estamos en una <b>calle residencial tranquila de Teusaquillo</b>, el barrio más seguro para caminar con tu carpeta de documentos. Familias de Cali, Medellín, Bucaramanga y la Costa nos eligen cada semana por eso.
          </p>
        </section>

        {/* Sección 2: Qué llevar */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold text-lg">Qué llevar y qué NO llevar a la Embajada USA (2026)</h2>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Lleva:</b> Pasaporte vigente, DS-160 impreso, foto 5x5 fondo blanco, cita impresa.</div>
              <div><b>NO lleves:</b> Celular, USB, alimentos, armas, líquidos.</div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Nosotros te los guardamos gratis</b> en recepción. Llega 30 min antes de tu cita. Con estar a 7 min, sales con tiempo.
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Tu rutina el día de la cita</h3>
            <ul className="mt-3 text-sm space-y-1 list-disc pl-5">
              <li>6:00 - Desayuno en el hotel</li>
              <li>6:30 - Sales caminando (7 min)</li>
              <li>6:40 - Llegas a la Embajada</li>
              <li>7:00 - Tu cita (30 min antes)</li>
              <li>Después - Vuelves a descansar</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver mapa y cómo llegar →</Link>
          </Card>
        </section>

        {/* Sección 3: Servicios específicos para visa */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Servicios pensados para tu cita de visa</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">🚶</div>
              <div className="font-semibold mt-2">7 min a pie</div>
              <div className="text-sm text-gray-500">Caminando por calles seguras</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🍳</div>
              <div className="font-semibold mt-2">Desayuno 6:00-9:00</div>
              <div className="text-sm text-gray-500">Desayuna antes de tu cita</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🎒</div>
              <div className="font-semibold mt-2">Guarda-equipaje</div>
              <div className="text-sm text-gray-500">Gratis, hasta las 6pm</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🖨️</div>
              <div className="font-semibold mt-2">Impresión DS-160</div>
              <div className="text-sm text-gray-500">En recepción</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🛎️</div>
              <div className="font-semibold mt-2">Recepción 24h</div>
              <div className="text-sm text-gray-500">Te despertamos si necesitas</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🚿</div>
              <div className="font-semibold mt-2">Agua caliente</div>
              <div className="text-sm text-gray-500">Baño privado en todas</div>
            </Card>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen huéspedes con cita de visa</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Nos hizo sentir como en casa. Pude ir a pie a la Embajada sin estrés.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Salcedo · Colombia</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;La cercanía a la Embajada fue clave. Caminé 7 min y llegué sin problemas. Recomendable.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Lilibeth · Colombia</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Desayuno delicioso, personal muy amable. La ubicación es perfecta para la Embajada.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Estefanía · Colombia</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje cerca de la Embajada Americana</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿A qué distancia está la Embajada Americana del hotel?", a: "Estamos a 7 minutos caminando de la entrada principal de la Embajada en la Carrera 45 con Calle 26. No necesitas taxi." },
              { q: "¿Puedo llegar caminando a mi cita de visa?", a: "Sí, perfectamente. Son 7 minutos a pie por calles residenciales seguras de Teusaquillo." },
              { q: "¿Dan desayuno temprano para cita de visa?", a: "El desayuno se sirve de 6:00 a 9:00 de la mañana. Si tu cita es a las 7am, puedes desayunar antes de salir." },
              { q: "¿Guardan mi celular y equipaje el día de la cita?", a: "Sí, guardamos tu celular, maleta y cualquier objeto que no puedas llevar a la Embajada. Es gratis." },
              { q: "¿A qué hora debo llegar a mi cita de visa?", a: "30 minutos antes de tu hora. Al estar a 7 min caminando, puedes salir sin estrés de tráfico." },
              { q: "¿Puedo imprimir mi DS-160 en el hotel?", a: "Sí, tenemos impresora en recepción. Imprimimos tu DS-160 y cualquier documento que necesites." },
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
          <h2 className="font-serif text-3xl font-bold">Reserva tu noche de visa con cancelación gratuita 24h</h2>
          <p className="text-white/80 mt-2">Habitación Doble desde $110.000. A 7 min caminando de la Embajada. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También te puede interesar: <Link href="/hotel-cerca-corferias-bogota" className="underline">Hotel cerca Corferias</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
