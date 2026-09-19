import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hotelquintasdebogota.com";
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    // Núcleo
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/habitaciones`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/reservas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ubicacion`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/galeria`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Embajada / visa — las que venden
    { url: `${base}/hotel-cerca-embajada-americana-bogota`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hotel-para-cita-visa-americana-bogota`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/hotel-cerca-embajada-usa-bogota`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/hotel-visa-americana-bogota`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/cita-visa-americana-que-llevar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/donde-dejar-maletas-embajada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-cerca-embajada-comparativa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-recomendado-embajada-corferias`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Corferias — las que venden
    { url: `${base}/hotel-cerca-corferias-bogota`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/comparativa/hotel-quintas-vs-hyatt-vs-hilton-corferias`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/que-hacer-cerca-corferias`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/feria-libro-corferias-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-con-desayuno-corferias`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/alojamiento-cerca-corferias-embajada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Aeropuerto
    { url: `${base}/hotel-cerca-aeropuerto-el-dorado`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/como-llegar-aeropuerto-madrugada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/aeropuerto-eldorado-teusaquillo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-10-minutos-aeropuerto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Blog relevantes
    { url: `${base}/blog/hotel-barato-teusaquillo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-para-familias-bogota`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/hotel-tranquilo-bogota`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/guia-teusaquillo-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/parque-simon-bolivar-hotel-familiar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/teusaquillo-vs-chapinero`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/universidad-nacional-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/gran-estacion-movistar-hotel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  return urls;
}
