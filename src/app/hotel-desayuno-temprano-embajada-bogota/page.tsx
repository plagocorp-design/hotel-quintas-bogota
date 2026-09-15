import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel con Desayuno Temprano Cerca Embajada Bogotá",
  description: "Desayuno desde 6:00am a 7 min de la Embajada de Estados Unidos. Café, huevos, pan, fruta. Desayuna antes de tu cita de visa. Reserva directa.",
  keywords: ["hotel desayuno temprano embajada bogota","hotel desayuno 6am embajada","desayuno antes de cita visa","hotel con desayuno cerca embajada americana","donde desayunar antes de cita embajada"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-desayuno-temprano-embajada-bogota" },
  openGraph: {
    title: "Hotel con Desayuno Temprano Cerca Embajada Bogotá",
    description: "Desayuno 6:00-9:00am. 7 min de la Embajada. Café, huevos, pan, fruta incluido.",
    url: "https://hotelquintasdebogota.com/hotel-desayuno-temprano-embajada-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelDesayunoTempranoPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿A qué hora empieza el desayuno en el hotel?", acceptedAnswer: { "@type": "Answer", text: "El desayuno se sirve de 6:00 a 9:00 de la mañana todos los días. Si tu cita en la Embajada es a las 7am, puedes desayunar a las 6:15 y salir caminando." } },
      { "@type": "Question", name: "¿Puedo comer antes de las 7am si tengo cita temprana?", acceptedAnswer: { "@type": "Answer", text: "Sí, el desayuno empieza a las 6:00am. Puedes comer a cualquier hora entre las 6:00 y las 9:00. Muchos huéspedes desayunan a las 6:15 para llegar temprano a la Embajada." } },
      { "@type": "Question", name: "¿Qué incluye el desayuno?", acceptedAnswer: { "@type": "Answer", text: "Café o té, jugo natural, huevos al gusto (revueltos, fritos o en tortilla), pan integral, fruta fresca, arepa y mermelada. Todo incluido sin costo adicional." } },
      { "@type": "Question", name: "¿Hay café disponible si llego antes de las 6am?", acceptedAnswer: { "@type": "Answer", text: "Si llegas antes de las 6:00am, en recepción hay café caliente disponible las 24 horas. También tienes agua y té a disposición." } },
      { "@type": "Question", name: "¿Puedo llevar algo del desayuno para comer después de la cita?", acceptedAnswer: { "@type": "Answer", text: "Sí, puedes llevar un café o jugo para camino. Si necesitas algo más, coordina con el personal del desayuno y te preparan algo para llevar." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Desayuno Temprano Embajada", item: "https://hotelquintasdebogota.com/hotel-desayuno-temprano-embajada-bogota" },
    ],
  };
  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Quintas de Bogotá",
    url: "https://hotelquintasdebogota.com",
    address: { "@type": "PostalAddress", streetAddress: "Cl. 22 Bis #44A-19", addressLocality: "Bogotá", addressRegion: "Cundinamarca", addressCountry: "CO" },
    telephone: "+57 317 6760460",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "8.8", reviewCount: "470" },
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">DESAYUNO DESDE LAS 6:00AM ANTES DE TU CITA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel con Desayuno Temprano Cerca de la Embajada</h1>
            <p className="mt-4 text-white/80">
              Si tu <b>cita en la Embajada de Estados Unidos</b> es temprana, necesitas un desayuno que esté listo cuando tú lo estés.
              En nuestro hotel, el desayuno empieza a las <b>6:00am</b>. Café caliente, huevos frescos, jugo natural y pan recién hecho.
              A solo <b>7 minutos caminando</b> de la Embajada, desayunas tranquilo y sales con energía para tu entrevista.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar con desayuno incluido</Button></Link>
              <a href={hotel.whatsappUrl("Hola, necesito un hotel con desayuno temprano para mi cita en la Embajada el...")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Desayuno para cita temprana</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ Desayuno <b>6:00am - 9:00am</b> todos los días</li>
              <li>✓ <b>Café o té</b> caliente desde las 6:00am</li>
              <li>✓ <b>Huevos al gusto:</b> revueltos, fritos o tortilla</li>
              <li>✓ <b>Jugo natural</b> de naranja o lulo</li>
              <li>✓ <b>Pan integral</b> con mermelada</li>
              <li>✓ <b>Fruta fresca</b> de temporada</li>
              <li>✓ <b>Arepa</b> y todo incluido sin costo extra</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">¿Por qué el desayuno temprano importa para tu cita de visa?</h2>
          <p className="mt-3 text-gray-600">
            Tu <b>entrevista de visa americana</b> puede ser a las 7:00am o incluso antes. Necesitas llegar con energía, con el estómago lleno y con la mente enfocada.
            Un hotel sin desayuno temprano te obliga a buscar restaurante en la calle a las 6am, cuando la mayoría está cerrado.
            En Hotel Quintas, el desayuno está listo a las <b>6:00am</b>. Sin buscar, sin estrés, sin salir del hotel con hambre.
          </p>
          <p className="mt-3 text-gray-600">
            El desayuno es fundamental para rendir en una entrevista. Estudios muestran que el rendimiento cognitivo mejora significativamente cuando se desayuna antes de una evaluación.
            No vayas a la Embajada con el estómago vacío. Desayuna bien, llega tranquilo y responde con claridad.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Tu rutina de desayuno el día de la cita</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>6:00am:</b> Bajas al comedor, el desayuno ya está listo</li>
              <li><b>6:00-6:20am:</b> Comes café, huevos, pan y fruta</li>
              <li><b>6:25am:</b> Dejas celular y equipaje en recepción</li>
              <li><b>6:30am:</b> Sales caminando por Teusaquillo</li>
              <li><b>6:40am:</b> Llegas a la Embajada con 20 min antes</li>
              <li><b>7:00am:</b> Entras a tu entrevista con energía</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ruta al hotel →</Link>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">¿Qué incluye el desayuno completo?</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Bebidas:</b> Café colombiano, té, jugo de naranja natural, jugo de lulo, agua.</div>
              <div><b>Proteína:</b> Huevos revueltos, fritos, en tortilla o en pericos. Tocineta disponible.</div>
              <div><b>Carbohidratos:</b> Pan integral, arepa, tostada, cereal.</div>
              <div><b>Fruta:</b> Plátano, papaya, melocotón o fruta de temporada.</div>
              <div><b>Extras:</b> Mermelada, queso, mantequilla, café adicional si lo necesitas.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>Sin costo extra:</b> Todo el desayuno está incluido en tu reserva. No hay cargos adicionales.
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Café disponible 24 horas para los que madrugan</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">☕</div>
              <div className="font-semibold mt-2">Café 24 horas</div>
              <div className="text-sm text-gray-500">En recepción siempre hay café caliente</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🍳</div>
              <div className="font-semibold mt-2">Desayuno 6:00-9:00</div>
              <div className="text-sm text-gray-500">Comedor abierto a esa hora</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🥐</div>
              <div className="font-semibold mt-2">Almuerzo también disponible</div>
              <div className="text-sm text-gray-500">Si regresas después de la cita</div>
            </Card>
          </div>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen quienes desayunaron antes de su cita</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Tenía cita a las 7am. Desayuné a las 6:15, café con pan y huevos. Llegué con energía y tranquilidad.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Natalia · Bogotá</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Lo mejor es que el desayuno ya está listo a las 6am. No tuve que esperar ni buscar dónde comer.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Fernando · Ibagué</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;El café estaba caliente a las 6:05am. Desayuné rápido y caminé a la Embajada. Todo perfecto.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Isabella · Armenia</div></Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre desayuno temprano para cita de visa</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿A qué hora empieza el desayuno en el hotel?", a: "El desayuno se sirve de 6:00 a 9:00 de la mañana todos los días. Si tu cita en la Embajada es a las 7am, puedes desayunar a las 6:15 y salir caminando." },
              { q: "¿Puedo comer antes de las 7am si tengo cita temprana?", a: "Sí, el desayuno empieza a las 6:00am. Puedes comer a cualquier hora entre las 6:00 y las 9:00. Muchos huéspedes desayunan a las 6:15 para llegar temprano a la Embajada." },
              { q: "¿Qué incluye el desayuno?", a: "Café o té, jugo natural, huevos al gusto (revueltos, fritos o en tortilla), pan integral, fruta fresca, arepa y mermelada. Todo incluido sin costo adicional." },
              { q: "¿Hay café disponible si llego antes de las 6am?", a: "Si llegas antes de las 6:00am, en recepción hay café caliente disponible las 24 horas. También tienes agua y té a disposición." },
              { q: "¿Puedo llevar algo del desayuno para comer después de la cita?", a: "Sí, puedes llevar un café o jugo para camino. Si necesitas algo más, coordina con el personal del desayuno y te preparan algo para llevar." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Desayuna bien antes de tu entrevista</h2>
          <p className="text-white/80 mt-2">Desayuno desde 6:00am incluido. 7 min de la Embajada. Café, huevos, pan y fruta.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar con desayuno</Button></Link>
            <Link href="/servicios"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver servicios del hotel</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
