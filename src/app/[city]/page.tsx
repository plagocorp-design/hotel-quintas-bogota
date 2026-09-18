import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";
import { cities, variants } from "@/data/cities";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Hotel en ${city.name} | Hotel Quintas de Bogotá`,
    description: `Los mejores hoteles en ${city.name}, ${city.department}. Reserva directa sin comisión. WiFi, desayuno y recepción 24h.`,
    alternates: { canonical: `https://www.hotelquintasdebogota.com/${slug}` },
    openGraph: {
      title: `Hotel en ${city.name} | Hotel Quintas`,
      description: `Hoteles recomendados en ${city.name}, ${city.department}.`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return <div className="p-8 text-center">Ciudad no encontrada</div>;

  const cityVariants = variants.map((v) => ({
    ...v,
    href: `/${slug}/${v.slug}`,
    title: v.title.replace("{city}", city.name),
    desc: v.desc.replace("{city}", city.name).replace("{department}", city.department),
  }));

  return (
    <>
      <Header />
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">
            HOTELES EN {city.name.toUpperCase()} · {city.department.toUpperCase()}
          </div>
          <h1 className="font-serif text-4xl font-bold mt-2">
            Hotel en {city.name}: Los Mejores Hoteles
          </h1>
          <p className="mt-3 text-white/80 max-w-3xl">
            {city.description} {city.airport && `Aeropuerto ${city.airport} (${city.airportCode}).`}{" "}
            {city.population && `${city.population} habitantes.`} Reserva directa sin comisión.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservas">
              <Button variant="gold" size="lg">Reservar en Bogotá</Button>
            </Link>
            <a href={hotel.whatsappUrl(`Hola, busco hotel en ${city.name}`)} target="_blank">
              <Button size="lg" className="bg-[#25D366]">WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-2xl font-bold">Guía de Hoteles en {city.name}</h2>
          <p className="mt-3 text-gray-600">
            Hotel Quintas de Bogotá es tu mejor opción de hospedaje en {city.name}, {city.department}.
            Ofrecemos habitaciones limpias, WiFi gratis, desayuno de 6:00 a 9:00 y recepción 24h.
            {city.landmarks && ` Cerca de ${city.landmarks.join(", ")}.`}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Tipos de Alojamiento en {city.name}</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="text-3xl">🏨</div>
              <div className="font-semibold mt-2">Habitación Sencilla</div>
              <div className="text-sm text-gray-500">Desde $80.000/noche. Para viajeros solos.</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl">🛏️</div>
              <div className="font-semibold mt-2">Habitación Doble</div>
              <div className="text-sm text-gray-500">Desde $110.000/noche. Para parejas.</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <div className="font-semibold mt-2">Habitación Familiar</div>
              <div className="text-sm text-gray-500">Desde $180.000/noche. Para 4-5 personas.</div>
            </Card>
          </div>
        </section>

        {city.landmarks && city.landmarks.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold">Lugares Cercanos en {city.name}</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {city.landmarks.map((lm) => (
                <Card key={lm} className="p-4">
                  <div className="font-semibold">📍 {lm}</div>
                  <div className="text-sm text-gray-500">Cerca de hotel en {city.name}</div>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="font-serif text-2xl font-bold">Variantes de Búsqueda en {city.name}</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {cityVariants.map((v) => (
              <Link key={v.slug} href={v.href}>
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="font-semibold text-[#C9A86A]">{v.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{v.desc}</div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">Reserva tu Hotel en {city.name}</h2>
          <p className="text-white/80 mt-2">Desde $80.000 por noche. Cancelación gratuita 24h.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/reservas">
              <Button variant="gold" size="lg">Reservar ahora</Button>
            </Link>
            <Link href="/habitaciones">
              <Button variant="outline" size="lg" className="bg-white text-[#000000]">
                Ver habitaciones
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
