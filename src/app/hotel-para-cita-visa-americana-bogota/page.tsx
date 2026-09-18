import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel para Cita Visa Americana Bogotá | Reserva tu Noche",
  description: "Ya tienes tu cita en la Embajada? Hotel a 7 min caminando. Guarda-equipaje gratis, desayuno 6:00-9:00, impresión DS-160. Reserva sin comisión.",
  keywords: ["hotel para cita visa americana bogota","hotel para cita embajada americana","hotel cita visa usa bogota","hotel para mi cita de visa","hospedaje para cita visa"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-para-cita-visa-americana-bogota" },
  openGraph: {
    title: "Hotel para Cita Visa Americana Bogotá | Reserva tu Noche",
    description: "Hotel a 7 min de la Embajada Americana. Guarda-equipaje gratis, desayuno 6:00-9:00.",
    url: "https://www.hotelquintasdebogota.com/hotel-para-cita-visa-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function ParaCitaVisaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Qué documentos debo llevar a mi cita de visa americana?", acceptedAnswer: { "@type": "Answer", text: "Pasaporte vigente, confirmación del DS-160 impresa, foto 5x5 con fondo blanco, carta de invitación si aplica y comprobante de pago de la MRV fee. Te guardamos todo lo que no puedas llevar en la Embajada." } },
      { "@type": "Question", name: "¿A qué hora debo llegar a la Embajada si mi cita es a las 8am?", acceptedAnswer: { "@type": "Answer", text: "Debes llegar 30 minutos antes de tu hora exacta. Si tu cita es a las 8:00am, llega a las 7:30am. Al estar a 7 min caminando del hotel, sales a las 7:15am sin estrés." } },
      { "@type": "Question", name: "¿Puedo imprimir mi DS-160 en el hotel antes de ir a la Embajada?", acceptedAnswer: { "@type": "Answer", text: "Sí, contamos con impresora en recepción. Imprimimos tu DS-160, la confirmación de cita y cualquier otro documento que necesites. Llega con tiempo extra por si acaso." } },
      { "@type": "Question", name: "¿Dónde dejo mi celular y equipaje el día de la cita?", acceptedAnswer: { "@type": "Answer", text: "En recepción guardamos tu celular, maleta, power bank y cualquier objeto prohibido dentro de la Embajada. El servicio es completamente gratis y lo recoges al regresar." } },
      { "@type": "Question", name: "¿Puedo cancelar mi reserva si no me aprueban la visa?", acceptedAnswer: { "@type": "Answer", text: "Sí, ofrecemos cancelación gratuita hasta 24 horas antes del check-in. Si tu resultado cambia, solo avísanos por WhatsApp y procesamos el reembolso sin preguntas." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel para Cita Visa Americana", item: "https://www.hotelquintasdebogota.com/hotel-para-cita-visa-americana-bogota" },
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">CITA AGENDADA? TU HOTEL ESTÁ A 7 MIN</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel para tu Cita de Visa Americana en Bogotá</h1>
            <p className="mt-4 text-white/80">
              Ya tienes la fecha confirmada en la <b>Embajada Americana</b>. Lo que necesitas ahora es un hotel que te saque el estrés del día.
              Estamos a <b>7 minutos caminando</b>, desayuno desde las 6:00am, te guardamos el celular gratis y te imprimimos el DS-160 si lo necesitas.
              Más de 470 viajeros con cita de visa nos eligen cada mes.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi cita</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita en la Embajada el... ¿tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu kit para el día de la cita</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a la entrada de la Embajada</li>
              <li>✓ Desayuno de <b>6:00 a 9:00</b> antes de salir</li>
              <li>✓ <b>Guarda-celular gratis</b> en recepción</li>
              <li>✓ <b>Impresión DS-160</b> en el acto</li>
              <li>✓ Recepción 24h si necesitas despertador</li>
              <li>✓ Cancelación gratuita 24h antes</li>
             
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1 */}
        <section>
          <h2 className="font-serif text-3xl font-bold">Tu cita ya está agendada. Ahora elegí bien tu hotel.</h2>
          <p className="mt-3 text-gray-600">
            Tener la cita en la <b>Embajada Americana</b> es solo la mitad del camino. La otra mitad es elegir un hotel donde todo esté resuelto antes de que suene tu alarma.
            En nuestro hotel en <b>Teusaquillo</b>, la rutina del día de la visa es simple: desayunas a las 6:00, caminas 7 minutos y llegas con 30 minutos de anticipación sin haber tocado un taxi.
            No necesitas preocuparte por tráfico de la Av. El Dorado ni por dónde dejar tu celular. Todo está pensado para que solo pienses en tu entrevista.
          </p>
        </section>

        {/* Sección 2: Rutina del día */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Tu rutina ideal el día de la cita</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>5:45</b> — Te despiertas tranquilo, sin alarma de taxi</li>
              <li><b>6:00</b> — Desayuno completo en el hotel</li>
              <li><b>6:30</b> — Dejas celular y maleta en recepción (gratis)</li>
              <li><b>6:35</b> — Sales caminando por calles residenciales</li>
              <li><b>6:42</b> — Llegas a la Embajada, 18 min de anticipación</li>
              <li><b>7:00</b> — Entras a tu cita relajado</li>
              <li><b>Después</b> — Vuelves al hotel a descansar o recoger equipaje</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ruta en mapa →</Link>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Documentos que necesitas el día de la cita</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Obligatorios:</b> Pasaporte vigente, DS-160 impreso, foto 5x5 fondo blanco, confirmación de cita.</div>
              <div><b>Recomendados:</b> Comprobante de vínculo con Colombia (trabajo, estudio, propiedad), estado de cuenta bancario reciente.</div>
              <div><b>NO lleves a la Embajada:</b> Celular, USB, audífonos, alimentos, armas o navajas.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>Nosotros te los guardamos.</b> Deja todo lo prohibido en recepción y recógelo al salir. Gratis.
              </div>
            </div>
          </Card>
        </section>

        {/* Sección 3: Por qué 7 min importa */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Por qué 7 minutos marcan la diferencia</h2>
          <p className="mt-3 text-gray-600">
            La EmbajadaAmericana exige llegar 30 minutos antes. Si estás en un hotel lejos, necesitas despertarte a las 5am, buscar taxi y lidiar con el tráfico de la Av. El Dorado.
            Con nuestro hotel a <b>7 minutos caminando</b>, sales cuando quieras. No hay tráfico a pie, no hay taxi que esperar y no hay estrés. Esa calma se nota en tu entrevista.
            Los huéspedes que se quedan con nosotros reportan llegar más tranquilos que los que vienen desde Chapinero o el Aeropuerto.
          </p>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="font-semibold text-lg">0 min de tráfico</div>
              <div className="text-sm text-gray-500">Caminas, no conduces</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="font-semibold text-lg">$0 de taxi</div>
              <div className="text-sm text-gray-500">Ahorras $8.000-$15.000</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="font-semibold text-lg">30 min de calma</div>
              <div className="text-sm text-gray-500">Llegas antes sin prisa</div>
            </Card>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen quienes ya pasaron por su cita</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Tenía cita a las 7am. Desayuné a las 6:15, dejé el celular y llegué caminando sin estrés. Aprobada.&rdquo;</p><div className="text-xs text-gray-500 mt-2">María · Cali</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Me imprimieron el DS-160 porque mi laptop se dañó. Todo resuelto en 5 minutos. Muy agradecido.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Andrés · Bucaramanga</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Lo mejor es poder caminar. No tuve que preocuparme por nada el día de mi cita.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Laura · Medellín</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas de quienes ya tienen cita agendada</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Qué documentos debo llevar a mi cita de visa americana?", a: "Pasaporte vigente, confirmación del DS-160 impresa, foto 5x5 con fondo blanco, carta de invitación si aplica y comprobante de pago de la MRV fee. Te guardamos todo lo que no puedas llevar en la Embajada." },
              { q: "¿A qué hora debo llegar a la Embajada si mi cita es a las 8am?", a: "Debes llegar 30 minutos antes de tu hora exacta. Si tu cita es a las 8:00am, llega a las 7:30am. Al estar a 7 min caminando del hotel, sales a las 7:15am sin estrés." },
              { q: "¿Puedo imprimir mi DS-160 en el hotel antes de ir a la Embajada?", a: "Sí, contamos con impresora en recepción. Imprimimos tu DS-160, la confirmación de cita y cualquier otro documento que necesites. Llega con tiempo extra por si acaso." },
              { q: "¿Dónde dejo mi celular y equipaje el día de la cita?", a: "En recepción guardamos tu celular, maleta, power bank y cualquier objeto prohibido dentro de la Embajada. El servicio es completamente gratis y lo recoges al regresar." },
              { q: "¿Puedo cancelar mi reserva si no me aprueban la visa?", a: "Sí, ofrecemos cancelación gratuita hasta 24 horas antes del check-in. Si tu resultado cambia, solo avísanos por WhatsApp y procesamos el reembolso sin preguntas." },
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
          <h2 className="font-serif text-3xl font-bold">¿Ya tienes tu cita? Reserva tu noche ahora</h2>
          <p className="text-white/80 mt-2">Habitación Doble desde $110.000. Cancelación gratuita 24h. A 7 min de la Embajada.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/servicios" className="underline">Servicios del hotel</Link> · <Link href="/ubicacion" className="underline">Cómo llegar</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía completa de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
