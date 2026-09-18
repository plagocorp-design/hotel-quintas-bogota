import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Visa Americana Bogotá | 7 Min de la Embajada",
  description: "El mejor hotel para tu visa americana en Bogotá. 7 min caminando de la Embajada. Desayuno 6:00-9:00, guarda-equipaje gratis, impresión DS-160. Reserva directa.",
  keywords: ["hotel visa americana bogota","hotel para visa americana","mejor hotel cita visa americana","hotel embajada americana bogota","hotel visa usa bogota"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-visa-americana-bogota" },
  openGraph: {
    title: "Hotel Visa Americana Bogotá | 7 Min de la Embajada",
    description: "El mejor hotel para visa americana. 7 min de la Embajada, desayuno incluido.",
    url: "https://www.hotelquintasdebogota.com/hotel-visa-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelVisaAmericanaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuál es el mejor hotel para la visa americana en Bogotá?", acceptedAnswer: { "@type": "Answer", text: "Hotel Quintas de Bogotá está a 7 minutos caminando de la Embajada. Desayuno desde 6:00am, guarda-equipaje gratis, impresión DS-160 y recepción 24h. 8.8 de calificación con más de 470 reseñas." } },
      { "@type": "Question", name: "¿Por qué importa estar a 7 minutos de la Embajada?", acceptedAnswer: { "@type": "Answer", text: "La Embajada exige llegar 30 minutos antes. Si estás lejos, necesitas taxi y lidiar con tráfico. A 7 min caminas, llegas sin estrés y llegas con tiempo. Esa calma se nota en la entrevista." } },
      { "@type": "Question", name: "¿Puedo desayunar antes de ir a mi cita de visa?", acceptedAnswer: { "@type": "Answer", text: "Sí, el desayuno empieza a las 6:00am. Si tu cita es a las 7:00, desayunas a las 6:15, dejas el celular en recepción y sales caminando. Llegas a las 6:42, 18 minutos antes." } },
      { "@type": "Question", name: "¿Qué hacer la noche anterior a mi cita de visa?", acceptedAnswer: { "@type": "Answer", text: "Duerme bien. Nuestras habitaciones son silenciosas y las camas son cómodas. Prepara tus documentos, revisa tu DS-160 y tranquilo. Al día siguiente todo será más fácil." } },
      { "@type": "Question", name: "¿Puedo quedarme más tiempo después de la cita?", acceptedAnswer: { "@type": "Answer", text: "Sí, el check-out es a las 12:30pm. Si tu cita fue por la mañana, puedes volver al hotel a descansar, almorzar o simplemente relajarte antes de continuar tu viaje." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Visa Americana Bogotá", item: "https://www.hotelquintasdebogota.com/hotel-visa-americana-bogota" },
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">EL HOTEL QUE ELIGEN LOS QUE SACAN VISA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Visa Americana en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Cuando buscas <b>&quot;hotel visa americana Bogotá&quot;</b>, lo que necesitas es un hotel que entienda tu proceso.
              No solo una cama: desayuno temprano, guarda-equipaje para tus documentos, impresión del DS-160 y una ubicación a <b>7 minutos caminando</b> de la Embajada.
              Más de 470 viajeros con visa aprobada nos eligen cada mes.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi visa</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita de visa americana, ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Todo lo que necesitas para tu visa</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min a pie</b> de la Embajada Americana</li>
              <li>✓ Desayuno <b>6:00-9:00</b> antes de tu cita</li>
              <li>✓ <b>Guarda-celular gratis</b> en recepción</li>
              <li>✓ <b>Impresión DS-160</b> en el acto</li>
              <li>✓ Recepción 24h (te despertamos)</li>
              <li>✓ Cancelación gratuita 24h</li>
              <li>✓ Check-out 12:30 (descansa después)</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1 */}
        <section>
          <h2 className="font-serif text-3xl font-bold">El hotel que entiende tu proceso de visa</h2>
          <p className="mt-3 text-gray-600">
            Sacar una <b>visa americana</b> no es solo ir a una entrevista. Es preparar documentos, imprimir el DS-160, organizar la foto 5x5,
            calcular cuándo salir de casa y saber dónde dejar todo lo que no puedes llevar a la Embajada.
            En Hotel Quintas, cada servicio está pensado para ese proceso. No somos un hotel genérico: somos <b>el hotel de la visa americana</b>.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestros huéspedes vienen de Cali, Medellín, Bucaramanga, Barranquilla, Pasto y toda Colombia.
            Vienen con estrés y se van con la visa en el bolsillo (o al menos con la satisfacción de haberlo intentado bien).
            La diferencia está en los detalles: llegar caminando, desayunar tranquilo y tener todo resuelto.
          </p>
        </section>

        {/* Sección 2: Por qué 7 min importa */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">7 minutos cambian tu día</h3>
            <div className="mt-3 text-sm space-y-3">
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Sin hotel cerca:</b> Despiertas 5:30am → Taxi 20 min → Tráfico Av. Dorado → Llegas estresado → Citas en la Embajada.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Con Hotel Quintas:</b> Despiertas 6:00am → Desayuno 6:15 → Caminas 7 min → Llegas 6:42 → Relajado para tu cita.
              </div>
              <div className="border-l-4 border-[#C9A86A] pl-3">
                <b>La diferencia:</b> 30 minutos de tranquilidad que se reflejan en tu actitud durante la entrevista.
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Servicios específicos para visa</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Impresión DS-160:</b> Si se te dañó la laptop o no tienes impresora, imprimimos en recepción.</div>
              <div><b>Guarda-celular:</b> No puedes llevar celular a la Embajada. Te lo guardamos gratis.</div>
              <div><b>Guarda-equipaje:</b> Maleta, mochila, power bank. Todo guardado hasta que regreses.</div>
              <div><b>Desayuno 6am:</b> Antes de cualquier cita. Café, jugo, huevos, pan, fruta.</div>
              <div><b>Check-out 12:30:</b> Si tu cita fue a las 7am, tienes tiempo de sobra para descansar.</div>
              <div><b>Recepción 24h:</b> Si necesitas despertador o tienes alguna duda a cualquier hora.</div>
            </div>
          </Card>
        </section>

        {/* Sección 3: Proceso del día */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Tu proceso completo de visa americana con nosotros</h2>
          <div className="mt-4 grid md:grid-cols-4 gap-4">
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="text-2xl font-bold text-[#C9A86A]">1</div>
              <div className="font-semibold mt-1">Reserva online</div>
              <div className="text-xs text-gray-500 mt-1">Elige fecha y tipo de habitación. Pago flexible.</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="text-2xl font-bold text-[#C9A86A]">2</div>
              <div className="font-semibold mt-1">Llega y descansa</div>
              <div className="text-xs text-gray-500 mt-1">Check-in, descarga tu DS-160, revisa documentos.</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="text-2xl font-bold text-[#C9A86A]">3</div>
              <div className="font-semibold mt-1">Día de la cita</div>
              <div className="text-xs text-gray-500 mt-1">Desayuno 6am → Caminas 7 min → Llegas relajado.</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="text-2xl font-bold text-[#C9A86A]">4</div>
              <div className="font-semibold mt-1">Regresa a descansar</div>
              <div className="text-xs text-gray-500 mt-1">Check-out 12:30. Recoge tu equipaje guardado.</div>
            </Card>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Historias de visa aprobada</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Aprobada en la primera. Llegué caminando, tranquilo, con tiempo. El hotel hizo todo más fácil.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Catalina · Medellín</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Me imprimieron el DS-160 a las 6am. No tenía impresora. Todo resuelto.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Julián · Cali</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Vine de Bucaramanga solo por la cercanía a la Embajada. Valió la pena. 8.8 bien ganado.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Santiago · Bucaramanga</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hotel para visa americana</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuál es el mejor hotel para la visa americana en Bogotá?", a: "Hotel Quintas de Bogotá está a 7 minutos caminando de la Embajada. Desayuno desde 6:00am, guarda-equipaje gratis, impresión DS-160 y recepción 24h. 8.8 de calificación con más de 470 reseñas." },
              { q: "¿Por qué importa estar a 7 minutos de la Embajada?", a: "La Embajada exige llegar 30 minutos antes. Si estás lejos, necesitas taxi y lidiar con tráfico. A 7 min caminas, llegas sin estrés y llegas con tiempo. Esa calma se nota en la entrevista." },
              { q: "¿Puedo desayunar antes de ir a mi cita de visa?", a: "Sí, el desayuno empieza a las 6:00am. Si tu cita es a las 7:00, desayunas a las 6:15, dejas el celular en recepción y sales caminando. Llegas a las 6:42, 18 minutos antes." },
              { q: "¿Qué hacer la noche anterior a mi cita de visa?", a: "Duerme bien. Nuestras habitaciones son silenciosas y las camas son cómodas. Prepara tus documentos, revisa tu DS-160 y tranquilo. Al día siguiente todo será más fácil." },
              { q: "¿Puedo quedarme más tiempo después de la cita?", a: "Sí, el check-out es a las 12:30pm. Si tu cita fue por la mañana, puedes volver al hotel a descansar, almorzar o simplemente relajarte antes de continuar tu viaje." },
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
          <h2 className="font-serif text-3xl font-bold">Tu visa americana empieza aquí</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de la Embajada. Desayuno, guarda-equipaje y todo lo que necesitas incluido.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi visa</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/servicios" className="underline">Servicios</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
