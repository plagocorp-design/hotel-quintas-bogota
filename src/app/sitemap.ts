import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hotelquintasdebogota.com";
  const now = new Date();
  const pages = [
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
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "daily" : "weekly",
    priority: p === "" ? 1 : p.startsWith("/hotel-cerca") ? 0.9 : 0.7,
  }));
}
