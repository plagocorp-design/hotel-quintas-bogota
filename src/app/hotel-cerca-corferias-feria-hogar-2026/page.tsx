import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Feria del Hogar 2026 | Corferias",
  description: "Hotel a 7 min de la Feria del Hogar 2026 en Corferias. 18 días de duración, habitaciones familiares, guarda-equipaje gratis para compras. Reserva directa con descuento largo plazo.",
  keywords: ["hotel feria del hogar 2026","hotel hogar corferias","alojamiento feria muebles bogota","hotel cerca feria hogar corferias","hotel compras feria hogar"],
  alternates: { canonical: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-feria-hogar-2026" },
  openGraph: {
    title: "Hotel Cerca Feria del Hogar 2026 | Corferias",
    description: "Hotel a 7 min de la Feria del Hogar 2026. 18 días, habitaciones familiares, descuento largo plazo.",
    url: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-feria-hogar-2026",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function FeriaHogar2026Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuándo es la Feria del Hogar 2026?", acceptedAnswer: { "@type": "Answer", text: "La Feria del Hogar 2026 se realiza del 3 al 20 de septiembre de 2026 en Corferias, Bogotá. Son 18 días de exhibiciones de muebles, electrodomésticos y artículos para el hogar." } },
      { "@type": "Question", name: "¿Ofrecen descuento por estancia larga durante la Feria del Hogar?", acceptedAnswer: { "@type": "Answer", text: "Sí, al ser la feria de 18 días, contamos con tarifas especiales para estancias prolongadas. Contáctanos por WhatsApp para conocer nuestros descuentos por semana o quincena." } },
      { "@type": "Question", name: "¿Tienen habitaciones familiares para ir a la feria?", acceptedAnswer: { "@type": "Answer", text: "Sí, tenemos habitaciones familiares con espacio para 5 personas, ideales para familias que van a comprar muebles y electrodomésticos a la Feria del Hogar." } },
      { "@type": "Question", name: "¿Puedo guardar muestras o compras en el hotel?", acceptedAnswer: { "@type": "Answer", text: "Sí, nuestro guarda-equipaje gratis te permite guardar compras, catálogos y muestras mientras sigues explorando la feria. Espacio amplio disponible." } },
      { "@type": "Question", name: "¿Cómo llego del hotel a la Feria del Hogar?", acceptedAnswer: { "@type": "Answer", text: "Son 7 minutos caminando por la Calle 22 Bis hasta Corferias. Si compras muebles grandes, puedes colectarlos en Corferias y llevarlos directamente." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.hotelquintasdebogota.com/" },
      { "@type": "ListItem", position: 2, name: "Hotel Feria del Hogar 2026", item: "https://www.hotelquintasdebogota.com/hotel-cerca-corferias-feria-hogar-2026" },
    ],
  };
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Feria del Hogar 2026",
    startDate: "2026-09-03",
    endDate: "2026-09-20",
    location: { "@type": "Place", name: "Corferias", address: "Bogotá, Colombia" },
    description: "La feria del hogar más importante de Colombia. 18 días de muebles, electrodomésticos y artículos para el hogar con los mejores descuentos.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />

      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">3–20 SEPTIEMBRE 2026 · 18 DÍAS · 7 MIN A PIE</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel Cerca de la Feria del Hogar 2026 en Corferias</h1>
            <p className="mt-4 text-white/80">
              Si vas a comprar muebles, electrodomésticos o artículos para el hogar en la <b>Feria del Hogar 2026</b>, que se realiza del <b>3 al 20 de septiembre</b> (18 días) en Corferias, nuestro hotel está a solo <b>7 minutos caminando</b>. Ideal para familias y compradores que necesitan ir y venir con sus adquisiciones. Habitaciones familiares, guarda-equipaje gratis y descuentos por estancia larga.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=familiar"><Button variant="gold" size="lg">Reservar para Feria del Hogar</Button></Link>
              <a href={hotel.whatsappUrl("Hola, iré a la Feria del Hogar 2026 en Corferias, ¿tienen descuento por estancia larga?")} target="_blank"><Button size="lg" className="bg-[#25D366]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold text-lg">Tu hotel para la Feria del Hogar (18 días)</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>✓ <b>7 min caminando</b> a Corferias</li>
              <li>✓ <b>Habitaciones familiares</b> para 5 personas</li>
              <li>✓ <b>Descuento estancia larga</b></li>
              <li>✓ <b>Guarda-equipaje gratis</b> para compras</li>
              <li>✓ Desayuno buffet de <b>6:00 a 9:00</b></li>
              <li>✓ Cancelación gratuita 24h</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">Feria del Hogar 2026: 18 días para amueblar tu casa</h2>
          <p className="mt-3 text-gray-600">
            La <b>Feria del Hogar 2026</b> es el evento más esperado para quienes buscan <b>descuentos en muebles, electrodomésticos, cocina, baños y todo para el hogar</b>. Con <b>18 días de duración</b> (del 3 al 20 de septiembre), es la oportunidad perfecta para recorrer tranquilamente, comparar precios y cerrar los mejores negocios. Si estás amueblando un apartamento, renovando tu hogar o comprando electrodomésticos, la Feria del Hogar es tu evento.
          </p>
          <p className="mt-3 text-gray-600">
            Nuestro hotel en <b>Teusaquillo</b> está a 7 minutos caminando de Corferias. Si vienes con tu familia, tenemos <b>habitaciones familiares</b> con espacio para 5 personas. Y como la feria dura 18 días, ofrecemos <b>descuentos por estancia larga</b>. Después de comprar muebles y electrodomésticos, puedes guardar tus compras en nuestro <b>guarda-equipaje gratis</b> mientras sigues explorando más pabellones.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Familias: tu hotel para comprar en la feria</h3>
            <p className="text-sm text-gray-600 mt-2">Ir a la Feria del Hogar en familia es una tradición. Nuestras habitaciones familiares con bañera tienen espacio para que los niños descansen mientras los adultos negocian. El desayuno buffet desde las 6:00 alimenta a toda la familia antes de ir a Corferias. Y a 7 minutos, puedes volver al hotel si olvidaste algo.</p>
            <Link href="/habitaciones#familiar" className="text-sm text-[#C9A86A] underline mt-3 block">Ver habitaciones familiares →</Link>
          </Card>
          <Card className="p-6 bg-[#000000] text-white">
            <h3 className="font-semibold text-lg">Compradores profesionales de muebles</h3>
            <p className="text-sm text-white/80 mt-2">Si eres distribuidor o retailer, la Feria del Hogar es clave para cerrar compras. Nuestro hotel te permite ir y venir entre pabellones sin cargar bolsas. El guarda-equipaje mantiene tus muestras seguras. WiFi fibra para gestionar pedidos con proveedores.</p>
            <Link href="/servicios" className="text-sm text-[#C9A86A] underline mt-3 block">Ver servicios →</Link>
          </Card>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Preguntas frecuentes sobre hospedaje para la Feria del Hogar 2026</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "¿Cuándo es la Feria del Hogar 2026?", a: "La Feria del Hogar 2026 se realiza del 3 al 20 de septiembre de 2026 en Corferias, Bogotá. Son 18 días de muebles, electrodomésticos y artículos para el hogar." },
              { q: "¿Ofrecen descuento por estancia larga?", a: "Sí, contamos con tarifas especiales para estancias prolongadas durante la Feria del Hogar. Contáctanos por WhatsApp para descuentos semanales o quincenales." },
              { q: "¿Tienen habitaciones familiares?", a: "Sí, tenemos habitaciones familiares con espacio para 5 personas, ideales para familias que van a comprar a la feria." },
              { q: "¿Puedo guardar mis compras en el hotel?", a: "Sí, nuestro guarda-equipaje gratis te permite guardar compras, catálogos y muestras de forma segura." },
              { q: "¿Cómo llego del hotel a la Feria del Hogar?", a: "Son 7 minutos caminando por la Calle 22 Bis hasta Corferias. Si compras muebles grandes, puedes colectarlos en el recinto." },
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <div className="font-semibold">{item.q}</div>
                <div className="text-sm text-gray-600 mt-2">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu hotel para la Feria del Hogar 2026</h2>
          <p className="text-white/80 mt-2">Hotel familiar a 7 min de Corferias. Descuento por estancia de 18 días. Guarda-equipaje gratis para compras.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/hotel-cerca-corferias-bogota"><Button variant="outline" size="lg" className="bg-white text-[#000000]">Ver todos los eventos Corferias →</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">
            También: <Link href="/ubicacion" className="underline">Ubicación</Link> · <Link href="/habitaciones" className="underline">Habitaciones</Link> · <Link href="/servicios" className="underline">Servicios</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}