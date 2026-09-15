import Link from "next/link";

export default function WhatsAppPage() {
  const phone = "573176760460";
  const message = encodeURIComponent("Hola, quiero información sobre disponibilidad y precios.");
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>WhatsApp Hotel Quintas</title>
        <meta name="theme-color" content="#25D366" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Quintas WA" />
        <link rel="manifest" href="/manifest-whatsapp.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
          }
          .container {
            text-align: center;
            padding: 2rem;
            max-width: 400px;
            width: 100%;
          }
          .logo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #C9A86A;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2.5rem;
            font-weight: bold;
            color: #000;
            box-shadow: 0 0 30px rgba(201, 168, 106, 0.4);
          }
          h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #C9A86A;
          }
          p {
            color: #999;
            margin-bottom: 2rem;
            font-size: 0.95rem;
            line-height: 1.5;
          }
          .wa-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: #25D366;
            color: white;
            padding: 16px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          .wa-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
          }
          .wa-icon {
            width: 28px;
            height: 28px;
          }
          .install-tip {
            margin-top: 2rem;
            padding: 12px 16px;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
            font-size: 0.8rem;
            color: #666;
            line-height: 1.4;
          }
          .install-tip b { color: #999; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="logo">Q</div>
          <h1>Hotel Quintas de Bogotá</h1>
          <p>Chatea con nosotros por WhatsApp. Respuesta inmediata sobre disponibilidad, precios y reservas.</p>
          <a href={waUrl} target="_blank" rel="noopener" className="wa-btn">
            <svg className="wa-icon" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Abrir WhatsApp
          </a>
          <div className="install-tip">
            <b>Instalar como acceso directo:</b><br/>
            Toca los tres puntos ⋮ → <b>Agregar a pantalla principal</b>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html: `
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw-whatsapp.js').catch(() => {});
          }
        `}} />
      </body>
    </html>
  );
}
