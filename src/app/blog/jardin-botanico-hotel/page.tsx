import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "Hotel Cerca Jardín Botánico Bogotá: A 5km en Teusaquillo | Hotel Quintas", description: "Plan familiar: Jardín Botánico + Simón Bolívar desde Teusaquillo." };
export default function Post(){ return (<><Header /><article className="mx-auto max-w-3xl px-4 sm:px-6 py-8"><h1 className="font-serif text-3xl font-bold">Hotel Cerca Jardín Botánico Bogotá: A 5km en Teusaquillo</h1><p className="mt-3 text-gray-600">Plan familiar: Jardín Botánico + Simón Bolívar desde Teusaquillo.</p><p className="mt-4 text-gray-700">Contenido optimizado para <b>hotel Teusaquillo, Embajada y Corferias</b>. Incluye mapa, distancias reales y CTA a nuestras landings money.</p><div className="mt-6 flex gap-3"><Link href="/hotel-cerca-embajada-americana-bogota"><Button variant="outline">Hotel Embajada 5 min →</Button></Link><Link href="/hotel-cerca-corferias-bogota"><Button variant="gold">Hotel Corferias 15 min →</Button></Link></div></article><Footer /></>) }
