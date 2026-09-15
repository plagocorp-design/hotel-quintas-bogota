import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hotel } from "@/lib/utils";
import { cities, variants } from "@/data/cities";

type Props = { params: Promise<{ city: string; variant: string }> };

export async function generateStaticParams() {
  const params: { city: string; variant: string }[] = [];
  for (const c of cities) {
    for (const v of variants) {
      params.push({ city: c.slug, variant: v.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, variant: varSlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const variant = variants.find((v) => v.slug === varSlug);
  if (!city || !variant) return {};
  const title = variant.title.replace("{city}", city.name);
  const desc = variant.desc.replace("{city}", city.name).replace("{department}", city.department);
  return {
    title: `${title} | Hotel Quintas de Bogotá`,
    description: desc,
    alternates: { canonical: `https://hotelquintasdebogota.com/${citySlug}/${varSlug}` },
    openGraph: { title, description: desc },
  };
}

export default async function VariantPage({ params }: Props) {
  const { city: citySlug, variant: varSlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const variant = variants.find((v) => v.slug === varSlug);
  if (!city || !variant) return <div className="p-8 text-center">Página no encontrada</div>;

  const title = variant.title.replace("{city}", city.name);
  const desc = variant.desc.replace("{city}", city.name).replace("{department}", city.department);

  const relatedVariants = variants
    .filter((v) => v.slug !== varSlug)
    .slice(0, 6)
    .map((v) => ({
      ...v,
      href: `/${citySlug}/${v.slug}`,
      title: v.title.replace("{city}", city.name),
    }));

  return (
    <>
      <Header />
      <section className="bg-[#000000] text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-[#C9A86A] text-sm font-semibold tracking-widest">
            {title.toUpperCase()}
          </div>
          <h1 className="font-serif text-4xl font-bold mt-2">{title}</h1>
          <p className="mt-3 text-white/80 max-w-3xl">{desc}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservas">
              <Button variant="gold" size="lg">Reservar ahora</Button>
            </Link>
            <a href={hotel.whatsappUrl(`Hola, busco ${title.toLowerCase()} en ${city.name}`)} target="_blank">
              <Button size="lg" className="bg-[#25D366]">WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 space-y-10">
        <section>
          <h2 className="font-serif text-2xl font-bold">{title} en {city.name}</h2>
          <p className="mt-3 text-gray-600">
            Hotel Quintas de Bogotá ofrece la mejor experiencia de hospedaje en {city.name}, {city.department}.
            Habitaciones limpias, WiFi gratis, desayuno a las 9:00 y recepción 24h.
            {city.airport && ` Aeropuerto ${city.airport} (${city.airportCode}).`}
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">¿Por qué Hotel Quintas en {city.name}?</h3>
            <ul className="mt-3 text-sm space-y-2 list-disc pl-5">
              <li>Habitaciones limpias y cómodas</li>
              <li>WiFi gratis en todo el hotel</li>
              <li>Desayuno casero a las 9:00</li>
              <li>Recepción 24h</li>
              <li>Cancelación gratuita 24h</li>
              <li>Pago en efectivo con -10%</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-lg">Tipos de Habitación</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div><b>Sencilla:</b> Desde $80.000/noche</div>
              <div><b>Doble:</b> Desde $110.000/noche</div>
              <div><b>Triple:</b> Desde $140.000/noche</div>
              <div><b>Familiar:</b> Desde $180.000/noche</div>
            </div>
          </Card>
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
          <h2 className="font-serif text-2xl font-bold">Otras Búsquedas en {city.name}</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {relatedVariants.map((v) => (
              <Link key={v.slug} href={v.href}>
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="font-semibold text-[#C9A86A]">{v.title}</div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center bg-[#000000] text-white rounded-[24px] p-8">
          <h2 className="font-serif text-3xl font-bold">{title}</h2>
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
