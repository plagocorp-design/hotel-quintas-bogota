import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotel Cerca Embajada Americana Bogotá - A 7 Min a Pie | Quintas",
  description: "¿Cita para visa USA? Duerme a 7 min a pie de la Embajada. Hotel Quintas 9.5 en ubicación, desayuno de 6:00 a 9:00 y tranquilidad. 470+ reseñas 8.8. ¡Reserva directa!",
  keywords: ["hotel cerca embajada americana bogota","hotel para visa americana bogota","donde dormir cita embajada usa","hotel cerca embajada usa bogota"],
  alternates: { canonical: "https://hotelquintasdebogota.com/hotel-cerca-embajada-americana-bogota" },
  openGraph: {
    title: "Hotel a 7 Min de la Embajada Americana - Hotel Quintas",
    description: "A 7 min a pie de la Embajada USA. desayuno de 6:00 a 9:00, guarda-equipaje y tranquilidad total. 8.8 Fabuloso.",
    type: "website",
  },
};

export default function EmbajadaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿A qué distancia está de la Embajada Americana?", acceptedAnswer: { "@type": "Answer", text: "A 7 minutos a pie de la entrada de la Embajada en la Carrera 45 con Calle 26. Puedes ir caminando sin taxi." } },
      { "@type": "Question", name: "¿Dan desayuno antes de mi cita de las 7am?", acceptedAnswer: { "@type": "Answer", text: "El desayuno se sirve a las 9:00. Guardamos tu celular y equipaje gratis, ya que no te dejan entrar con ellos." } },
      { "@type": "Question", name: "¿A qué hora debo llegar a mi cita?", acceptedAnswer: { "@type": "Answer", text: "30 minutos antes. Al estar a 7 min, puedes salir con tiempo sin estrés de tráfico." } },
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

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">A 7 MIN A PIE · 9.5 EN UBICACIÓN · 8.8 FABULOSO</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mt-2">Hotel para Cita de Visa Americana en Bogotá: A 7 Min a Pie de la Embajada</h1>
            <p className="mt-4 text-white/80">En Cl. 22 Bis #44A-19, Teusaquillo. Duerme tranquilo, desayuna a las 9:00 y llega caminando a tu entrevista. Más de 470 huéspedes nos eligen por eso.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Verifica tu fecha de cita</Button></Link>
              <a href={hotel.whatsappUrl("Hola, tengo cita en la Embajada el... ¿tienen disponibilidad a 7 min?")} target="_blank"><Button variant="outline" size="lg" className="bg-white text-[#000000]">WhatsApp 317 6760460</Button></a>
            </div>
          </div>
          <Card className="p-6 bg-white text-[#000000]">
            <div className="font-semibold">¿Por qué a 7 min te da tranquilidad?</div>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Sales con tiempo para tu cita de 7am, sin trancones de la Calle 26</li>
              <li>Vuelves a descansar después de la entrevista</li>
              <li>Guarda-equipaje gratis hasta tu vuelo</li>
              <li>Recepción 24h te despierta y te imprime el DS-160</li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-3xl font-bold">¿Por qué dormir a 7 min te da ventaja para tu entrevista?</h2>
          <p className="mt-3 text-gray-600">Una noche mal dormida o llegar tarde puede costar la visa. Nuestro hotel está en una calle residencial tranquila de Teusaquillo, con habitaciones con aislamiento acústico, camas grandes y agua caliente con buena presión. No es un hotel de zona aeropuerto con aviones cada 10 minutos. Es el barrio más seguro para caminar a las 5am con tu carpeta de documentos. Por eso familias de Cali, Medellín, Bucaramanga y la Costa nos eligen cada semana.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold text-lg">Qué llevar y qué NO llevar a la Embajada USA (2026)</h2>
            <div className="mt-3 text-sm space-y-2">
              <div><b>Lleva:</b> Pasaporte vigente, DS-160 impreso, foto 5x5 fondo blanco, cita impresa.</div>
              <div><b>NO lleves:</b> Celular, USB, alimentos, armas, líquidos. <b>Nosotros te los guardamos gratis</b> en recepción.</div>
              <div className="bg-[#F5F1E8] p-3 rounded-xl">Llega 30 min antes. Al estar a 7 min, sales con tiempo para tu cita.</div>
            </div>
          </Card>
          <Card className="p-6 bg-[#F5F1E8] border-[#C9A86A]/30">
            <h3 className="font-semibold">Checklist que te enviamos al reservar</h3>
            <ul className="mt-3 text-sm space-y-1 list-disc pl-5">
              <li>desayuno de 6:00 a 9:00</li>
              <li>Guarda-equipaje hasta las 6pm sin costo</li>
              <li>Check-in desde las 14:00</li>
              <li>Impresión de DS-160 en recepción</li>
            </ul>
            <Link href="/ubicacion" className="text-sm text-[#C9A86A] underline mt-3 block">Ver mapa y cómo llegar desde el aeropuerto →</Link>
          </Card>
        </section>

        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-2xl font-bold">Testimonios de huéspedes con visa aprobada</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-[#FFFFFF]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">“Nos hizo sentir como en casa. Pude ir a pie a la Embajada sin estrés.”</p><div className="text-xs text-gray-500 mt-2">Salcedo · Colombia</div></Card>
            <Card className="p-4 bg-[#FFFFFF]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">“La cercanía a la Embajada me hospedé porque teníamos cita para la visa, parque al frente, recomendable.”</p><div className="text-xs text-gray-500 mt-2">Lilibeth · Colombia</div></Card>
            <Card className="p-4 bg-[#FFFFFF]"><div className="text-[#C9A86A]">★★★★★</div><p className="text-sm mt-2">“Desayuno delicioso, muy amable todo el personal. Excelente ubicación.”</p><div className="text-xs text-gray-500 mt-2">Estefanía · Colombia</div></Card>
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu noche de visa con cancelación gratuita 48h</h2>
          <p className="text-white/80 mt-2">Habitación Doble desde $110.000 con baño privado. Disponibilidad en tiempo real.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas?roomType=doble"><Button variant="gold" size="lg">Reservar ahora</Button></Link>
            <Link href="/habitaciones"><Button variant="outline" size="lg" className="bg-white">Ver habitaciones</Button></Link>
          </div>
          <div className="mt-4 text-xs text-white/60">También te puede interesar: <Link href="/hotel-cerca-corferias-bogota" className="underline">Hotel cerca Corferias</Link> · <Link href="/ubicacion" className="underline">Ubicación estratégica</Link></div>
        </section>
      </div>
      <Footer />
    </>
  );
}
