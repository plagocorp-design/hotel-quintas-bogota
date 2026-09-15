import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Alojamiento Cerca Embajada Americana Bogotá | Desde $80.000",
  description: "Alojamiento económico a 7 min de la Embajada Americana. Desde $80.000 con desayuno. Pago en efectivo con descuento. WiFi, guarda-equipaje, recepción 24h.",
  keywords: ["alojamiento cerca embajada americana bogota","alojamiento economico embajada americana","hotel barato embajada americana bogota","hospedaje economico cerca embajada","alojamiento desde 80000 embajada"],
  alternates: { canonical: "https://hotelquintasdebogota.com/alojamiento-cerca-embajada-americana-bogota" },
  openGraph: {
    title: "Alojamiento Cerca Embajada Americana Bogotá | Desde $80.000",
    description: "Alojamiento desde $80.000 a 7 min de la Embajada Americana. Desayuno incluido, WiFi gratis.",
    url: "https://hotelquintasdebogota.com/alojamiento-cerca-embajada-americana-bogota",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function AlojamientoEmbajadaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuánto cuesta una noche cerca de la Embajada Americana?", acceptedAnswer: { "@type": "Answer", text: "Nuestras habitaciones dobles empiezan desde $80.000 por noche. Incluye desayuno, WiFi y guarda-equipaje. Con pago en efectivo recibes 10% adicional de descuento." } },
      { "@type": "Question", name: "¿Qué métodos de pago aceptan?", acceptedAnswer: { "@type": "Answer", text: "Aceptamos efectivo, tarjeta débito, tarjeta crédito (Visa, Mastercard, Amex), Nequi, Daviplata y transferencia bancaria. El descuento del 10% es solo para pago en efectivo." } },
      { "@type": "Question", name: "¿Hay descuento por pago en efectivo?", acceptedAnswer: { "@type": "Answer", text: "Sí, si pagas en efectivo recibes un 10% de descuento sobre la tarifa publicada. Una habitación doble que cuesta $110.000 te sale en $99.000. Es nuestra mejor tarifa." } },
      { "@type": "Question", name: "¿Qué tipos de habitación tienen?", acceptedAnswer: { "@type": "Answer", text: "Tenemos habitaciones dobles (2 personas), matrimoniales (1 cama king) y familiares (hasta 4 personas). Todas con baño privado, agua caliente y WiFi. Las familiares tienen dos camas dobles." } },
      { "@type": "Question", name: "¿El precio incluye desayuno?", acceptedAnswer: { "@type": "Answer", text: "Sí, todas nuestras tarifas incluyen desayuno buffet de 6:00 a 9:00am con café, jugo, pan, huevos y fruta. No hay cargo adicional por el desayuno." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Alojamiento Cerca Embajada Americana", item: "https://hotelquintasdebogota.com/alojamiento-cerca-embajada-americana-bogota" },
    ],
  };
  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Quintas de Bogotá",
    url: "https://hotelquintasdebogota.com",
    priceRange: "$80000 - $150000",
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
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">DESDE $80.000 CON DESAYUNO</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Alojamiento Cerca de la Embajada Americana en Bogotá</h1>
            <p className="mt-4 text-white/80">
              No necesitas gastar de más para dormir cerca de la <b>Embajada Americana</b>.
              Nuestro alojamiento en <b>Teusaquillo</b> empieza desde <b>$80.000 por noche</b> con desayuno incluido.
              A 7 minutos caminando, WiFi gratis, guarda-equipaje y recepción 24h. Pago en efectivo y te damos 10% más de descuento.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Ver tarifas desde $80.000</Button></Link>
              <a href={hotel.whatsappUrl("Hola, ¿cuál es la tarifa más económica para estar cerca de la Embajada?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tarifas para tu presupuesto</div>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2"><span className="font-semibold">Doble estándar</span><span className="text-[#C9A86A] font-bold">Desde $80.000</span></div>
              <div className="flex justify-between border-b pb-2"><span className="font-semibold">Doble superior</span><span className="text-[#C9A86A] font-bold">Desde $110.000</span></div>
              <div className="flex justify-between border-b pb-2"><span className="font-semibold">Matrimonial</span><span className="text-[#C9A86A] font-bold">Desde $120.000</span></div>
              <div className="flex justify-between"><span className="font-semibold">Familiar (4 pers.)</span><span className="text-[#C9A86A] font-bold">Desde $150.000</span></div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl mt-2"><b>Pago en efectivo: -10%</b> sobre cualquier tarifa</div>
            </div>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        {/* Sección 1 */}
        <section>
          <h2 className="font-serif text-3xl font-bold">Alojamiento económico sin sacrificar calidad</h2>
          <p className="mt-3 text-gray-600">
            Buscar <b>alojamiento cerca de la Embajada Americana</b> no debería significar pagar de más.
            Muchos hoteles en la zona cobran tarifas infladas por la cercanía. En Hotel Quintas creemos que la calidad y el buen precio pueden ir juntos.
            Nuestras habitaciones dobles empiezan en <b>$80.000</b>, incluyen desayuno completo y están a solo 7 minutos caminando de la Embajada.
          </p>
          <p className="mt-3 text-gray-600">
            No somos un hotel lujoso con amenities caros. Somos un hotel funcional, limpio y bien ubicado.
            Habitaciones con baño privado, agua caliente, WiFi de fibra y personal que te atiende bien.
            Si buscas ahorrar sin pasar incomodidad, este es tu lugar.
          </p>
        </section>

        {/* Sección 2: Métodos de pago */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Métodos de pago disponibles</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li><b>Efectivo:</b> 10% de descuento automático</li>
              <li><b>Tarjeta débito:</b> Visa, Mastercard</li>
              <li><b>Tarjeta crédito:</b> Visa, Mastercard, Amex</li>
              <li><b>Nequi:</b> Pago instantáneo</li>
              <li><b>Daviplata:</b> Pago instantáneo</li>
              <li><b>Transferencia:</b> Bancolombia, Davivienda, Banco Bogotá</li>
            </ul>
            <div className="mt-3 bg-[#F5F1E8] p-3 rounded-xl text-sm">
              <b>Tip:</b> Si pagas en efectivo, una doble de $110.000 te cuesta $99.000. Es nuestra mejor oferta.
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Qué incluye cada tarifa</h3>
            <div className="mt-3 text-sm space-y-2">
              <div>✓ Desayuno buffet completo (6:00-9:00)</div>
              <div>✓ WiFi de fibra óptica</div>
              <div>✓ Guarda-equipaje gratis</div>
              <div>✓ Recepción 24 horas</div>
              <div>✓ Baño privado con agua caliente</div>
              <div>✓ Toallas y ropa de cama limpia</div>
              <div>✓ Cancelación gratuita 24h</div>
              <div className="bg-white p-3 rounded-xl border border-[#C9A86A]/30">
                <b>No hay cargos ocultos.</b> Lo que ves en la web es lo que pagas.
              </div>
            </div>
          </Card>
        </section>

        {/* Sección 3: Comparación de precios */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Comparación de precios: Embajada Americana</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border rounded-xl overflow-hidden">
              <thead className="bg-[#000000] text-white"><tr><th className="p-3 text-left">Tipo de alojamiento</th><th className="p-3">Tarifa noche</th><th className="p-3">Desayuno</th><th className="p-3">Distancia</th></tr></thead>
              <tbody>
                <tr className="bg-[#F5F1E8] font-semibold"><td className="p-3">Hotel Quintas (doble)</td><td className="p-3 text-center">$80.000-$110.000</td><td className="p-3 text-center">Incluido</td><td className="p-3 text-center">7 min a pie</td></tr>
                <tr><td className="p-3">Hoteles Chapinero</td><td className="p-3 text-center">$120.000-$180.000</td><td className="p-3 text-center">$15.000 extra</td><td className="p-3 text-center">Taxi 10-15 min</td></tr>
                <tr><td className="p-3">Hoteles La Candelaria</td><td className="p-3 text-center">$90.000-$140.000</td><td className="p-3 text-center">Incluido</td><td className="p-3 text-center">Taxi 20-30 min</td></tr>
                <tr><td className="p-3">Airbnb Teusaquillo</td><td className="p-3 text-center">$70.000-$100.000</td><td className="p-3 text-center">No incluido</td><td className="p-3 text-center">5-10 min a pie</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección 4: Testimonios */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Lo que dicen nuestros huéspedes</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Por $80.000 con desayuno y a 7 min de la Embajada, no se puede pedir más. Limpio y cómodo.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Pedro · Ibagué</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Pagué en efectivo y me hicieron el descuento. Excelente trato y la habitación estaba impecable.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Sandra · Neiva</div></Card>
            <Card className="p-4 bg-[#FFFBF5]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">&ldquo;Venía con poco presupuesto y encontré este lugar. WiFi funciona perfecto para trabajar.&rdquo;</p><div className="text-xs text-gray-500 mt-2">Miguel · Pasto</div></Card>
          </div>
        </section>

        {/* Sección 5: FAQ */}
        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre tarifas y pagos</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuánto cuesta una noche cerca de la Embajada Americana?", a: "Nuestras habitaciones dobles empiezan desde $80.000 por noche. Incluye desayuno, WiFi y guarda-equipaje. Con pago en efectivo recibes 10% adicional de descuento." },
              { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos efectivo, tarjeta débito, tarjeta crédito (Visa, Mastercard, Amex), Nequi, Daviplata y transferencia bancaria. El descuento del 10% es solo para pago en efectivo." },
              { q: "¿Hay descuento por pago en efectivo?", a: "Sí, si pagas en efectivo recibes un 10% de descuento sobre la tarifa publicada. Una habitación doble que cuesta $110.000 te sale en $99.000. Es nuestra mejor tarifa." },
              { q: "¿Qué tipos de habitación tienen?", a: "Tenemos habitaciones dobles (2 personas), matrimoniales (1 cama king) y familiares (hasta 4 personas). Todas con baño privado, agua caliente y WiFi. Las familiares tienen dos camas dobles." },
              { q: "¿El precio incluye desayuno?", a: "Sí, todas nuestras tarifas incluyen desayuno buffet de 6:00 a 9:00am con café, jugo, pan, huevos y fruta. No hay cargo adicional por el desayuno." },
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
          <h2 className="font-serif text-3xl font-bold">Alojamiento desde $80.000 a 7 min de la Embajada</h2>
          <p className="text-white/80 mt-2">Desayuno incluido. WiFi gratis. Pago en efectivo con 10% descuento.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar desde $80.000</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver tipos de habitación</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/servicios" className="underline">Servicios incluidos</Link> · <Link href="/ubicacion" className="underline">Cómo llegar</Link> · <Link href="/hotel-para-cita-visa-americana-bogota" className="underline">Hotel para cita de visa</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
