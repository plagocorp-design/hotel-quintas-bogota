import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel para Entrevista Visa Americana Bogotá | Tips 2026",
  description: "Hotel preparado para tu entrevista de visa americana. 7 min caminando de la Embajada. Tips de vestimenta, documentos, llegada 30 min antes. Reserva directa.",
  keywords: ["hotel entrevista visa americana bogota","tips entrevista visa americana","hotel para entrevista embajada usa","como preparar entrevista visa","hotel antes de entrevista visa bogota"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-para-entrevista-visa-americana-bogota" },
  openGraph: {
    title: "Hotel para Entrevista Visa Americana Bogotá | Tips 2026",
    description: "Tips y hospedaje para tu entrevista de visa americana. 7 min de la Embajada.",
    url: "https://hotelquintasdebogota.com/hotel-para-entrevista-visa-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelEntrevistaVisaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Qué tips debo seguir el día de mi entrevista de visa?", acceptedAnswer: { "@type": "Answer", text: "Llega 30 minutos antes de tu hora, viste ropa formal o business casual, lleva todos los documentos organizados en orden, habla con confianza y responde directamente. No lleves celular a la Embajada." } },
      { "@type": "Question", name: "¿Qué ropa debo usar para la entrevista de visa americana?", acceptedAnswer: { "@type": "Answer", text: "Usa ropa formal o business casual: camisa de vestir, pantalón de vestir o falda, zapatos cerrados. Evita jeans, tenis o ropa deportiva. Quieres dar una primera impresión profesional." } },
      { "@type": "Question", name: "¿Qué documentos debo llevar a mi entrevista de visa?", acceptedAnswer: { "@type": "Answer", text: "Pasaporte vigente, confirmación del DS-160 impresa, foto 5x5 con fondo blanco, carta de invitación si aplica, comprobante de pago de la MRV fee y documentos de respaldo (trabajo, estudios, propiedad). Nosotros te imprimimos lo que necesites." } },
      { "@type": "Question", name: "¿Por qué es importante llegar 30 minutos antes a la entrevista?", acceptedAnswer: { "@type": "Answer", text: "La Embajada de Estados Unidos exige llegar 30 minutos antes por seguridad y verificación de documentos. Si llegas tarde, pueden cancelar tu cita. Con nuestro hotel a 7 min caminando, llegas sin prisa y con tiempo suficiente." } },
      { "@type": "Question", name: "¿Puedo preparar mis documentos en el hotel antes de la entrevista?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestras habitaciones son silenciosas y cómodas para revisar tus documentos la noche anterior. También tenemos impresora en recepción por si necesitas imprimir algo de último momento." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Entrevista Visa Americana", item: "https://hotelquintasdebogota.com/hotel-para-entrevista-visa-americana-bogota" },
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">PREPARA TU ENTREVISTA CON CALMA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel para Entrevista de Visa Americana en Bogotá</h1>
            <p className="mt-4 text-white/80">
              La <b>entrevista de visa americana</b> es el momento clave. Todo depende de llegar a tiempo, con los documentos correctos y con la mente tranquila.
              Nuestro hotel está a <b>7 minutos caminando</b> de la Embajada, y cada servicio está pensado para que llegues a tu entrevista con la mejor actitud.
              Desayuno desde 6:00am, guarda-equipaje gratis y tips personalizados en recepción.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi entrevista</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo entrevista de visa americana el... ¿me pueden dar tips?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tips para tu entrevista de visa</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>Llega 30 min antes</b> de tu hora exacta</li>
              <li>✓ <b>Viste formal:</b> camisa, pantalón de vestir, zapatos cerrados</li>
              <li>✓ Lleva <b>documentos organizados</b> en orden</li>
              <li>✓ <b>No lleves celular</b> a la Embajada (te lo guardamos)</li>
              <li>✓ Habla con <b>confianza y brevedad</b></li>
              <li>✓ <b>7 min caminando</b> desde el hotel</li>
              <li>✓ Desayuno <b>6:00-9:00</b> antes de salir</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Los 5 tips que nadie te da sobre la entrevista de visa</h2>
          <p className="mt-3 text-gray-600">
            Cientos de colombianos pasan por la <b>Embajada de Estados Unidos</b> cada semana. Algunos aprueban, otros no.
            La diferencia muchas veces no es el dinero que tienes, sino <b>cómo llegas</b> a la entrevista.
            Un hotel a 7 minutos caminando elimina el estrés del tráfico, te da tiempo de desayunar y llegar con calma.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Tu checklist el día de la entrevista</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>La noche anterior:</b> Revisa tu DS-160, prepara documentos, duerme bien</li>
              <li><b>Mañana:</b> Desayuna a las 6:00am con energía</li>
              <li><b>6:30am:</b> Deja celular y equipaje en recepción (gratis)</li>
              <li><b>6:35am:</b> Sal caminando por Teusaquillo</li>
              <li><b>6:42am:</b> Llegas a la Embajada con 18 min de anticipación</li>
              <li><b>7:00am:</b> Entras tranquilo a tu entrevista</li>
              <li><b>Después:</b> Vuelve al hotel a descansar (check-out 12:30)</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver mapa de la ruta →</Link>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">¿Qué ropa llevar a tu entrevista?</h3>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Hombres:</b> Camisa de vestir (blanca o de color claro), pantalón oscuro, zapatos cerrados, corbata opcional.</div>
              <div><b>Mujeres:</b> Blusa o camisa de vestir, falda o pantalón formal, zapatos cerrados, maquillaje discreto.</div>
              <div><b>Evita:</b> Jeans, tenis, ropa deportiva, aretes grandes, tatuajes visibles, piercings.</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>Tip extra:</b> En nuestro hotel tienes armario con perchas para planchar tu ropa antes de la entrevista.
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Documentos que necesitas para tu entrevista (2026)</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">Obligatorios</div>
              <div className="text-sm text-gray-500 mt-1">Pasaporte vigente, DS-160 impreso, foto 5x5 fondo blanco, confirmación de cita, MRV fee pagada</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">Recomendados</div>
              <div className="text-sm text-gray-500 mt-1">Comprobante de trabajo, estado bancario, carta de invitación, propiedad o contrato de arrendamiento</div>
            </Card>
            <Card className="p-4 text-center border-t-4 border-[#C9A86A]">
              <div className="font-semibold mt-2">NO llevar</div>
              <div className="text-sm text-gray-500 mt-1">Celular, USB, audífonos, alimentos, armas, navajas, power banks</div>
            </Card>
          </div>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Historias de entrevistas desde nuestro hotel</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Me dieron tips en recepción sobre qué llevar. Llegué preparada y aprobada. El hotel hizo la diferencia.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Valentina · Bogotá</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Tenía entrevista a las 7:30am. Desayuné a las 6:15, caminé 7 minutos y llegué relajado. Todo salió bien.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Santiago · Pereira</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Me imprimieron el DS-160 a las 6am porque mi laptop no funcionó. Resolvieron mi problema en minutos.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Camila · Manizales</div></Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hotel para entrevista de visa</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Qué tips debo seguir el día de mi entrevista de visa?", a: "Llega 30 minutos antes de tu hora, viste ropa formal o business casual, lleva todos los documentos organizados en orden, habla con confianza y responde directamente. No lleves celular a la Embajada." },
              { q: "¿Qué ropa debo usar para la entrevista de visa americana?", a: "Usa ropa formal o business casual: camisa de vestir, pantalón de vestir o falda, zapatos cerrados. Evita jeans, tenis o ropa deportiva. Quieres dar una primera impresión profesional." },
              { q: "¿Qué documentos debo llevar a mi entrevista de visa?", a: "Pasaporte vigente, confirmación del DS-160 impresa, foto 5x5 con fondo blanco, carta de invitación si aplica, comprobante de pago de la MRV fee y documentos de respaldo (trabajo, estudios, propiedad). Nosotros te imprimimos lo que necesites." },
              { q: "¿Por qué es importante llegar 30 minutos antes a la entrevista?", a: "La Embajada de Estados Unidos exige llegar 30 minutos antes por seguridad y verificación de documentos. Si llegas tarde, pueden cancelar tu cita. Con nuestro hotel a 7 min caminando, llegas sin prisa y con tiempo suficiente." },
              { q: "¿Puedo preparar mis documentos en el hotel antes de la entrevista?", a: "Sí, nuestras habitaciones son silenciosas y cómodas para revisar tus documentos la noche anterior. También tenemos impresora en recepción por si necesitas imprimir algo de último momento." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Prepara tu entrevista desde la mejor ubicación</h2>
          <p className="text-white/80 mt-2">Hotel a 7 min de la Embajada. Tips de entrevista, desayuno temprano y guarda-equipaje incluido.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar para mi entrevista</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/servicios" className="underline">Servicios</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/blog/cita-visa-americana-que-llevar" className="underline">Guía completa de visa 2026</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
