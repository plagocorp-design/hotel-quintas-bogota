import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

const GTM_ID = "GTM-PT6RLRD5";

export const metadata: Metadata = {
  title: "Hotel Quintas de Bogotá | Teusaquillo - 8.8 Fabuloso",
  description: "Hotel Quintas de Bogotá, Cl. 22 Bis #44A-19 Teusaquillo. 8.8 Fabuloso, ubicación 9.5. WiFi gratis, desayuno de 6:00 a 9:00, recepción 24h. Cerca Embajada USA y Corferias.",
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFFFF]" suppressHydrationWarning>
      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>
      {children}
      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          function getSid(){var s=sessionStorage.getItem('hq_sid');if(!s){s=(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36));sessionStorage.setItem('hq_sid',s)}return s}
          function track(ev,pg,lb,vl){try{var b={event:ev,page:pg,label:lb||null,value:vl||null,referrer:document.referrer||null,sessionId:getSid()};navigator.sendBeacon?navigator.sendBeacon('/api/analytics/track',new Blob([JSON.stringify(b)],{type:'application/json'})):fetch('/api/analytics/track',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)})}catch(e){}}
          track('page_view',location.pathname);
          document.addEventListener('click',function(e){
            var a=e.target.closest('a[href]');if(!a)return;
            var href=a.getAttribute('href')||'';
            if(href.indexOf('wa.me/')>-1||href.indexOf('whatsapp')>-1)track('whatsapp_open',location.pathname,href.substring(0,80));
            else if(href.indexOf('/reservas')>-1)track('cta_click',location.pathname,'reservar');
          });
        })();
      `}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Hotel",name:"Hotel Quintas de Bogotá",
        url:"https://hotelquintasdebogota.com",
        address:{ "@type":"PostalAddress", streetAddress:"Cl. 22 Bis #44A-19", addressLocality:"Bogotá", addressRegion:"Cundinamarca", addressCountry:"CO"},
        telephone:"+57 317 6760460", email:"hotelquintasdebogota@gmail.com",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5", worstRating: "1", reviewCount: "472", ratingCount: "472" }
      })}} />
      </body>
    </html>
  );
}
