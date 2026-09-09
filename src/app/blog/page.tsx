import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Blog Hotel Quintas | Guía Visa, Corferias y Teusaquillo" };

const posts = [
  { slug: "cita-visa-americana-que-llevar", title: "Cita Visa Americana Bogotá 2026: Qué Llevar y Qué No", desc: "Checklist oficial y dónde dormir a 5 min.", tag: "Visa" },
  { slug: "hotel-cerca-embajada-comparativa", title: "Hoteles Cerca Embajada USA: Comparativa Real 400m vs 4km", desc: "Ahorra taxi y estrés. Tabla de distancias reales.", tag: "Embajada" },
  { slug: "feria-libro-corferias-hotel", title: "Feria del Libro Corferias 2026: Hoteles a Pie vs Taxi", desc: "A 15 min a pie del recinto. Guía expositor.", tag: "Corferias" },
  { slug: "aeropuerto-eldorado-teusaquillo", title: "Dónde Dormir si tu Vuelo Sale a las 5am de El Dorado", desc: "A 15 min del aeropuerto en Teusaquillo tranquilo.", tag: "Aeropuerto" },
  { slug: "parque-simon-bolivar-hotel-familiar", title: "Hotel Familiar Cerca Parque Simón Bolívar y Corferias", desc: "Con niños, parque al frente y habitaciones para 5.", tag: "Familia" },
];

export default function BlogIndex() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Blog — Guía para tu viaje a Bogotá</h1>
        <p className="text-gray-600">20 artículos para visa, Corferias, familias y El Dorado. Cada uno enlaza a tu landing money.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="text-xs bg-[#C9A86A] text-white px-2 py-1 rounded-full w-fit">{p.tag}</div>
                <div className="font-semibold mt-3">{p.title}</div>
                <div className="text-sm text-gray-500 mt-1">{p.desc}</div>
                <div className="text-sm text-[#1A2B4A] mt-3 underline">Leer guía →</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
