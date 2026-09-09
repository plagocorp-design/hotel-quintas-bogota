import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Quintas de Bogotá | Teusaquillo - 8.8 Fabuloso",
  description: "Hotel Quintas de Bogotá, Cl. 22 Bis #44A-19 Teusaquillo. 8.8 Fabuloso, ubicación 9.5. WiFi gratis, desayuno excepcional, recepción 24h. Cerca Embajada USA y Corferias.",
  keywords: ["hotel bogotá","teusaquillo","hotel quintas","embajada usa","corferias","hotel familiar bogotá"],
  openGraph: {
    title: "Hotel Quintas de Bogotá",
    description: "Comodidad familiar a minutos del aeropuerto. WiFi, desayuno y atención 24/7.",
    locale: "es_CO",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FFFBF5]" suppressHydrationWarning>{children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Hotel",name:"Hotel Quintas de Bogotá",
        address:{ "@type":"PostalAddress", streetAddress:"Cl. 22 Bis #44A-19", addressLocality:"Bogotá", addressRegion:"Cundinamarca", addressCountry:"CO"},
        telephone:"+57 317 6760460", email:"hotelquintasdebogota@gmail.com",
        starRating:{ "@type":"Rating", ratingValue:"3"}, aggregateRating:{ "@type":"AggregateRating", ratingValue:"8.8", reviewCount:"472"}
      })}} />
      </body>
    </html>
  );
}
