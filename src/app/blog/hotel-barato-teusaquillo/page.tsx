import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = { title: "Hotel Barato en Teusaquillo Desde .000: ¿Existe? | Hotel Quintas", description: "Sí, Habitación Sencilla desde .000 con baño privado. Sin comisión Booking." };
export default function Post(){ return (<><Header /><article className="mx-auto max-w-3xl px-4 sm:px-6 py-8"><h1 className="font-serif text-3xl font-bold">Hotel Barato en Teusaquillo Desde .000: ¿Existe?</h1><p className="mt-3 text-gray-600">Sí, Habitación Sencilla desde .000 con baño privado. Sin comisión Booking.</p><p className="mt-4 text-gray-700">Contenido optimizado para <b>hotel Teusaquillo, Embajada y Corferias</b>. Incluye mapa, distancias reales y CTA a nuestras landings money.</p><div className="mt-6 flex gap-3"><Link href="/hotel-cerca-embajada-americana-bogota"><Button variant="outline">Hotel Embajada 5 min →</Button></Link><Link href="/hotel-cerca-corferias-bogota"><Button variant="gold">Hotel Corferias 15 min →</Button></Link></div></article><Footer /></>) }
