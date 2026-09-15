import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel para Cita Visa USA Bogotá | Reserva Directa",
  description: "Reserva tu hotel para cita de visa USA. 7 min caminando de la Embajada. Pago flexible, cancelación 24h, sin comisión. Reserva directa por WhatsApp.",
  keywords: ["hotel cita visa usa bogota","hotel para cita visa usa","reservar hotel visa usa bogota","hotel cita embassy usa bogota","alojamiento cita visa usa bogota"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cita-visa-usa-bogota" },
  openGraph: {
    title: "Hotel para Cita Visa USA Bogotá | Reserva Directa",
    description: "Reserva directa sin comisión. 7 min de la Embajada. Cancelación 24h gratis.",
    url: "https://hotelquintasdebogota.com/hotel-cita-visa-usa-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelCitaVisaUSA() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cómo reservo mi hotel para la cita de visa USA?", acceptedAnswer: { "@type": "Answer", text: "Puedes reservar directamente por nuestro sitio web en /reservas, por WhatsApp al +573176760460 o por teléfono. No cobramos comisión por reserva directa." } },
      { "@type": "Question", name: "¿Cuál es la política de cancelación?", acceptedAnswer: { "@type": "Answer", text: "Cancelación gratuita hasta 24 horas antes del check-in. Solo avísanos por WhatsApp y procesamos el reembolso sin preguntas. Sin penalidades." } },
      { "@type": "Question", name: "¿Qué formas de pago aceptan?", acceptedAnswer: { "@type": "Answer", text: "Aceptamos efectivo, tarjeta de crédito, débito y transferencia bancaria. En efectivo tienes 10% de descuento adicional." } },
      { "@type": "Question", name: "¿Hay disponibilidad la noche antes de mi cita?", acceptedAnswer: { "@type": "Answer", text: "Tenemos disponibilidad la mayoría de noches. Te recomendamos reservar con 1-2 semanas de anticipación para asegurar tu habitación. Por WhatsApp confirmamos disponibilidad en tiempo real." } },
      { "@type": "Question", name: "¿Puedo modificar mi reserva si cambia la fecha de mi cita?", acceptedAnswer: { "@type": "Answer", text: "Sí, puedes cambiar la fecha de tu reserva sin costo adicional siempre que avises con 24 horas de anticipación. Llámanos por WhatsApp y lo resolvemos." } },
      { "@type": "Question", name: "¿Qué incluye mi reserva?", acceptedAnswer: { "@type": "Answer", text: "Habitación privada con baño, desayuno de 6:00-9:00, guarda-equipaje gratis, WiFi, recepción 24h y cancelación gratuita 24h. Todo sin cargos ocultos." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Cita Visa USA", item: "https://hotelquintasdebogota.com/hotel-cita-visa-usa-bogota" },
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">RESERVA DIRECTA SIN COMISIÓN</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel para Cita de Visa USA en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Ya tienes tu <b>cita de visa USA</b> agendada. Reserva tu hotel sin intermediarios, sin comisiones y con cancelación gratuita.
              Estamos a <b>7 minutos caminando</b> de la Embajada de Estados Unidos. Pago flexible, disponibilidad confirmada y todo lo que necesitas para tu noche antes de la cita.
              <b>8.8 de calificación</b> con más de 470 reseñas verificadas.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita de visa USA el... ¿Tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu reserva directa incluye</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>Sin comisión</b> por reserva online</li>
              <li>✓ <b>Cancelación gratuita</b> 24h antes</li>
              <li>✓ <b>Pago flexible:</b> efectivo, tarjeta, transferencia</li>
              <li>✓ <b>-10% en efectivo</b> al pagar en recepción</li>
              <li>✓ <b>Disponibilidad</b> confirmada en minutos</li>
              <li>✓ <b>7 min de la Embajada</b> a pie</li>
              <li>✓ <b>Check-in 14:00</b> · Check-out 12:30</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Reserva directa: más rápido, más barato, sin sorpresas</h2>
          <p className="mt-3 text-gray-600">
            Cuando reservas por <b>agencias online</b>, pagas comisiones que pueden sumar $20.000-$40.000 extra por noche.
            En nuestra reserva directa, <b>no cobramos comisión</b>. Pagas lo que ves y si pagas en efectivo, tienes <b>10% de descuento</b>.
            Además, puedes cancelar gratis hasta 24 horas antes sin preguntas.
          </p>
          <p className="mt-3 text-gray-600">
            El proceso es simple: eliges tu fecha, seleccionas el tipo de habitación y confirmas por WhatsApp o teléfono.
            En 5 minutos tienes tu reserva lista. Sin formularios complicados, sin esperar confirmación de plataformas externas.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Cómo reservar tu hotel (3 pasos)</h3>
            <div className="mt-3 text-sm space-y-3">
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Paso 1:</b> Elige tu fecha y tipo de habitación en /reservas. O envía un mensaje por WhatsApp con tu fecha.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Paso 2:</b> Confirma tu reserva. Te enviamos los datos de pago por WhatsApp o puedes pagar en efectivo al llegar.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Paso 3:</b> Llega el día de tu cita. Check-in 14:00, desayuno 6:00-9:00 y todo listo.
              </div>
            </div>
            <Link href="/reservas" className="text-sm text-[#C9A86A] underline mt-3 block">Ir a reservas ahora →</Link>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Política de cancelación y cambios</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Cancelación gratuita:</b> Hasta 24 horas antes del check-in. Sin penalidades, sin preguntas.</div>
              <div><b>Cambio de fecha:</b> Puedes cambiar la fecha sin costo si avises con 24h de anticipación.</div>
              <div><b>No-show:</b> Si no te presentas sin avisar, se cobra la primera noche.</div>
              <div><b>Reembolso:</b> Si cancelas con tiempo, el reembolso se procesa en 1-3 días hábiles.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>Tip:</b> Si tu cita de visa cambia de fecha, avísanos por WhatsApp y ajustamos tu reserva sin problemas.
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Formas de pago y disponibilidad</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">Efectivo</div>
              <div className="text-sm text-gray-500 mt-1">10% de descuento. Pago al llegar o por adelantado.</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">Tarjeta</div>
              <div className="text-sm text-gray-500 mt-1">Crédito y débito. Sin recargo adicional.</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">Transferencia</div>
              <div className="text-sm text-gray-500 mt-1">Bancolombia, Davivienda, Nequi. Confirmación inmediata.</div>
            </Card>
          </div>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen quienes reservaron directamente</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Reservé por WhatsApp y todo fue rápido. Sin comisiones, sin sorpresas. Pagué en efectivo con descuento.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Miguel · Neiva</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Mi cita cambió de fecha y me dejaron cambiar la reserva sin costo. Muy flexibles y profesionales.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Ana · Popayán</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Cancelé 12 horas antes porque no pude ir. Me devolvieron el dinero sin preguntas. Excelente servicio.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Diego · Santa Marta</div></Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre reserva de hotel para visa USA</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cómo reservo mi hotel para la cita de visa USA?", a: "Puedes reservar directamente por nuestro sitio web en /reservas, por WhatsApp al +573176760460 o por teléfono. No cobramos comisión por reserva directa." },
              { q: "¿Cuál es la política de cancelación?", a: "Cancelación gratuita hasta 24 horas antes del check-in. Solo avísanos por WhatsApp y procesamos el reembolso sin preguntas. Sin penalidades." },
              { q: "¿Qué formas de pago aceptan?", a: "Aceptamos efectivo, tarjeta de crédito, débito y transferencia bancaria. En efectivo tienes 10% de descuento adicional." },
              { q: "¿Hay disponibilidad la noche antes de mi cita?", a: "Tenemos disponibilidad la mayoría de noches. Te recomendamos reservar con 1-2 semanas de anticipación para asegurar tu habitación. Por WhatsApp confirmamos disponibilidad en tiempo real." },
              { q: "¿Puedo modificar mi reserva si cambia la fecha de mi cita?", a: "Sí, puedes cambiar la fecha de tu reserva sin costo adicional siempre que avises con 24 horas de anticipación. Llámanos por WhatsApp y lo resolvemos." },
              { q: "¿Qué incluye mi reserva?", a: "Habitación privada con baño, desayuno de 6:00-9:00, guarda-equipaje gratis, WiFi, recepción 24h y cancelación gratuita 24h. Todo sin cargos ocultos." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva sin comisión para tu cita de visa USA</h2>
          <p className="text-white/80 mt-2">Cancelación 24h gratis. Pago en efectivo con -10%. A 7 min de la Embajada.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <a href={hotel.whatsappUrl("Hola, quiero reservar para mi cita de visa USA el...")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/servicios" className="underline">Servicios</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
