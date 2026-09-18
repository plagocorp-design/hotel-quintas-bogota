import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Guarda Maletas Cerca Embajada Bogotá | Gratis",
  description: "¿Necesitas dejar tu maleta cerca de la Embajada? Guarda-equipaje gratis en nuestro hotel a 7 min. Celulares, maletas, documentos. Todo seguro. Reserva directa.",
  keywords: ["hotel guarda maletas embajada bogota","guarda equipaje cerca embajada","dejar maletas cerca embajada americana","hotel guarda celulares embajada","custodia equipaje embajada bogota"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-maletas-embajada-americana-bogota" },
  openGraph: {
    title: "Hotel Guarda Maletas Cerca Embajada Bogotá | Gratis",
    description: "Guarda-equipaje gratis a 7 min de la Embajada. Celulares, maletas, documentos seguros.",
    url: "https://www.hotelquintasdebogota.com/hotel-maletas-embajada-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function HotelGuardaMaletasPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Puedo dejar mi maleta en el hotel aunque no me hospede?", acceptedAnswer: { "@type": "Answer", text: "Sí, aceptamos guarda-equipaje para huéspedes y visitantes que tengan cita en la Embajada. Llama por WhatsApp al +573176760460 y coordinamos tu llegada." } },
      { "@type": "Question", name: "¿Cuánto tiempo puedo dejar mi equipaje guardado?", acceptedAnswer: { "@type": "Answer", text: "Puedes dejar tu equipaje desde la mañana temprano hasta las 6:00pm del mismo día. Si necesitas más tiempo, coordina con recepción." } },
      { "@type": "Question", name: "¿Es seguro dejar electrónicos y documentos en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, tenemos una bodega cerrada con llave donde guardamos todo. No manipulamos tu equipaje. Solo tú puedes recogerlo con tu identificación." } },
      { "@type": "Question", name: "¿Qué objetos puedo dejar guardados en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Celulares, maletas, mochilas, power banks, audífonos, laptops, documentos y cualquier objeto que no puedas llevar a la Embajada de Estados Unidos." } },
      { "@type": "Question", name: "¿Cuánto cuesta el servicio de guarda-equipaje?", acceptedAnswer: { "@type": "Answer", text: "Es completamente gratis para todos nuestros huéspedes. Si no te hospedas, también ofrecemos el servicio sin costo si tienes cita en la Embajada." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Guarda Maletas Embajada", item: "https://www.hotelquintasdebogota.com/hotel-maletas-embajada-americana-bogota" },
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

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">GUARDA-EQUIPAJE GRATIS A 7 MIN DE LA EMBAJADA</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel con Guarda Maletas Cerca de la Embajada en Bogotá</h1>
            <p className="mt-4 text-white/80">
              La <b>Embajada de Estados Unidos</b> no permite entrar con celulares, maletas, power banks ni audífonos.
              Necesitas un lugar seguro donde dejar todo eso. Nuestro hotel está a <b>7 minutos caminando</b> y ofrece <b>guarda-equipaje gratis</b> para que vayas ligero a tu cita.
              Maletas, celulares, documentos, todo protegido hasta que regreses.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar habitación</Button></Link>
              <a href={hotel.whatsappUrl("Hola, necesito dejar mi maleta el día de mi cita en la Embajada. ¿Tienen disponibilidad?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu equipaje está seguro con nosotros</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>Guarda-equipaje GRATIS</b> todo el día</li>
              <li>✓ <b>Celulares</b> guardados en bodega cerrada</li>
              <li>✓ <b>Maletas y mochilas</b> protegidas con llave</li>
              <li>✓ <b>Laptops y power banks</b> también se guardan</li>
              <li>✓ Solo tú puedes <b>recoger con tu ID</b></li>
              <li>✓ <b>7 min caminando</b> a la Embajada</li>
              <li>✓ Recepción 24h disponible</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">¿Por qué necesitas guardar tu equipaje antes de ir a la Embajada?</h2>
          <p className="mt-3 text-gray-600">
            La <b>Embajada de Estados Unidos en Bogotá</b> tiene restricciones estrictas de seguridad. No puedes entrar con celulares, audífonos, USB, power banks, alimentos ni armas.
            Si vienes de otra ciudad con tu maleta, no puedes llevarla contigo. Necesitas un lugar donde dejarla mientras haces tu cita.
          </p>
          <p className="mt-3 text-gray-600">
            En Hotel Quintas, estamos a <b>7 minutos caminando</b> de la entrada. Puedes dejar tu maleta, celular y todo lo que no puedas llevar.
            El servicio es <b>completamente gratis</b> y tu equipaje queda en una bodega cerrada con llave. Nadie lo toca excepto tú.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Qué puedes guardar en nuestro hotel</h3>
            <div className="mt-3 text-sm space-y-2">
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Celulares:</b> Todos los modelos. Los guardamos en una caja cerrada. Los recoges al regresar con tu identificación.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Maletas y mochilas:</b> De cualquier tamaño. Las入库 en bodega bajo llave. No las abrimos ni manipulamos.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Electrónicos:</b> Laptops, tablets, power banks, audífonos, cámaras. Todo guardado hasta que regreses.
              </div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">
                <b>Documentos extra:</b> Carpeta de documentos, sobres, sobres con cartas. Los guardamos contigo.
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Tu rutina con guarda-equipaje incluido</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>6:00am:</b> Llegas al hotel con tu maleta</li>
              <li><b>6:15am:</b> Dejas maleta, celular y equipaje en recepción</li>
              <li><b>6:20am:</b> Desayunas liviano (solo cartera y documentos)</li>
              <li><b>6:35am:</b> Sales caminando con tus documentos</li>
              <li><b>6:42am:</b> Llegas a la Embajada ligero</li>
              <li><b>Después:</b> Vuelves, recoges todo y sigues tu viaje</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver ubicación exacta →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Seguridad de tu equipaje: cómo protegemos lo que guardamos</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl">🔒</div>
              <div className="font-semibold mt-2">Bodega cerrada con llave</div>
              <div className="text-sm text-gray-500">Acceso solo personal autorizado</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">📱</div>
              <div className="font-semibold mt-2">Caja separada para celulares</div>
              <div className="text-sm text-gray-500">Cada celular en su espacio</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl">🛡️</div>
              <div className="font-semibold mt-2">Recepción 24 horas</div>
              <div className="text-sm text-gray-500">Siempre hay alguien encargado</div>
            </Card>
          </div>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen quienes dejaron su equipaje con nosotros</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Llegué con maleta grande desde el aeropuerto. La dejé en recepción y fui tranquilo a mi cita. Todo intacto al regresar.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Pedro · Cartagena</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Dejé mi celular y power bank. Me daron un tiquete para recoger. Todo muy organizado y seguro.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Laura · Bucaramanga</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Mi laptop, mochila y celular todo guardado. No tuve que preocuparme por nada durante mi cita.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Andrés · Medellín</div></Card>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre guarda-equipaje cerca de la Embajada</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Puedo dejar mi maleta en el hotel aunque no me hospede?", a: "Sí, aceptamos guarda-equipaje para huéspedes y visitantes que tengan cita en la Embajada. Llama por WhatsApp al +573176760460 y coordinamos tu llegada." },
              { q: "¿Cuánto tiempo puedo dejar mi equipaje guardado?", a: "Puedes dejar tu equipaje desde la mañana temprano hasta las 6:00pm del mismo día. Si necesitas más tiempo, coordina con recepción." },
              { q: "¿Es seguro dejar electrónicos y documentos en el hotel?", a: "Sí, tenemos una bodega cerrada con llave donde guardamos todo. No manipulamos tu equipaje. Solo tú puedes recogerlo con tu identificación." },
              { q: "¿Qué objetos puedo dejar guardados en el hotel?", a: "Celulares, maletas, mochilas, power banks, audífonos, laptops, documentos y cualquier objeto que no puedas llevar a la Embajada de Estados Unidos." },
              { q: "¿Cuánto cuesta el servicio de guarda-equipaje?", a: "Es completamente gratis para todos nuestros huéspedes. Si no te hospedas, también ofrecemos el servicio sin costo si tienes cita en la Embajada." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Guarda tu equipaje y ve ligero a la Embajada</h2>
          <p className="text-white/80 mt-2">Guarda-equipaje gratis a 7 min de la Embajada. Celulares, maletas, laptops todo seguro.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar habitación</Button></Link>
            <Link href="/servicios"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver servicios</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/blog/donde-dejar-maletas-embajada" className="underline">Guía de guarda-equipaje</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
