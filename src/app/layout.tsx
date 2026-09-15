import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Quintas de Bogotá | Teusaquillo - 8.8 Fabuloso",
  description: "Hotel Quintas de Bogotá, Cl. 22 Bis #44A-19 Teusaquillo. 8.8 Fabuloso, ubicación 9.5. WiFi gratis, desayuno a las 9:00, recepción 24h. Cerca Embajada USA y Corferias. Pago en efectivo -10%.",
  keywords: ["hotel bogotá","teusaquillo","hotel quintas","embajada usa","corferias","hotel familiar bogotá","hotel cerca embajada americana","hotel cerca corferias"],
  metadataBase: new URL("https://hotelquintasdebogota.com"),
  alternates: { canonical: "/" },
  verification: {
    google: "TU_CODIGO_AQUI",
  },
  openGraph: {
    title: "Hotel Quintas de Bogotá | Teusaquillo",
    description: "Hotel 8.8 Fabuloso en Teusaquillo. 7 min Embajada USA, 7 min Corferias. Desayuno, WiFi, recepción 24h.",
    url: "https://hotelquintasdebogota.com",
    siteName: "Hotel Quintas de Bogotá",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Quintas de Bogotá | Teusaquillo",
    description: "Hotel 8.8 Fabuloso en Teusaquillo. 7 min Embajada USA, 7 min Corferias.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FFFBF5]" suppressHydrationWarning>{children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Hotel",name:"Hotel Quintas de Bogotá",
        url:"https://hotelquintasdebogota.com",
        address:{ "@type":"PostalAddress", streetAddress:"Cl. 22 Bis #44A-19", addressLocality:"Bogotá", addressRegion:"Cundinamarca", addressCountry:"CO"},
        telephone:"+57 317 6760460", email:"hotelquintasdebogota@gmail.com",
        starRating:{ "@type":"Rating", ratingValue:"3"}, aggregateRating:{ "@type":"AggregateRating", ratingValue:"8.8", reviewCount:"470"}
      })}} />
      </body>
    </html>
  );
}
