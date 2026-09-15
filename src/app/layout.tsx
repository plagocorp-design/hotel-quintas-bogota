import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: "Hotel Quintas de Bogotá | Teusaquillo - 8.8 Fabuloso",
  description: "Hotel Quintas de Bogotá, Cl. 22 Bis #44A-19 Teusaquillo. 8.8 Fabuloso, ubicación 9.5. WiFi gratis, desayuno de 6:00 a 9:00, recepción 24h. Cerca Embajada USA y Corferias. Pago en efectivo -10%.",
  keywords: ["hotel bogotá","teusaquillo","hotel quintas","embajada usa","corferias","hotel familiar bogotá","hotel cerca embajada americana","hotel cerca corferias"],
  metadataBase: new URL("https://hotelquintasdebogota.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-h-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFFFF]" suppressHydrationWarning>{children}
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
