import type { MetadataRoute } from "next";
import { cities, variants } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hotelquintasdebogota.com";
  const now = new Date();

  // Páginas principales
  const mainPages = [
    "",
    "/habitaciones",
    "/ubicacion",
    "/hotel-cerca-embajada-americana-bogota",
    "/hotel-cerca-corferias-bogota",
    "/hotel-cerca-aeropuerto-el-dorado",
    "/comparativa/hotel-quintas-vs-hyatt-vs-hilton-corferias",
    "/sobre-nosotros",
    "/reservas",
    "/galeria",
    "/servicios",
    "/contacto",
    "/blog",
    "/blog/cita-visa-americana-que-llevar",
    "/blog/hotel-cerca-embajada-comparativa",
    "/blog/feria-libro-corferias-hotel",
    "/blog/aeropuerto-eldorado-teusaquillo",
    "/blog/parque-simon-bolivar-hotel-familiar",
    "/blog/teusaquillo-vs-chapinero",
    "/blog/donde-dejar-maletas-embajada",
    "/blog/como-llegar-aeropuerto-madrugada",
    "/blog/que-hacer-cerca-corferias",
    "/blog/gran-estacion-movistar-hotel",
    "/blog/jardin-botanico-hotel",
    "/blog/universidad-nacional-hotel",
    "/blog/hotel-barato-teusaquillo",
    "/blog/hotel-tranquilo-bogota",
    "/blog/alojamiento-cerca-corferias-embajada",
    "/blog/hotel-10-minutos-aeropuerto",
    "/blog/hotel-recomendado-embajada-corferias",
    "/blog/hotel-con-desayuno-corferias",
    "/blog/hotel-para-familias-bogota",
    "/blog/guia-teusaquillo-hotel",
  ];

  const mainSitemap: MetadataRoute.Sitemap = mainPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: (p === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: p === "" ? 1 : p.startsWith("/hotel-cerca") ? 0.9 : 0.7,
  }));

  // Páginas de ciudades
  const citySitemap: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Páginas de variantes por ciudad
  const variantSitemap: MetadataRoute.Sitemap = [];
  for (const c of cities) {
    for (const v of variants) {
      variantSitemap.push({
        url: `${base}/${c.slug}/${v.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }
  }

  return [...mainSitemap, ...citySitemap, ...variantSitemap];
}
