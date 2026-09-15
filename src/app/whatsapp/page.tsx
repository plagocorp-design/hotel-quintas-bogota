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
        <title>Hotel Quintas - WhatsApp</title>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Quintas" />
        <link rel="manifest" href="/manifest-whatsapp.json" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .wrap { text-align: center; padding: 2rem; max-width: 360px; }
          .logo {
            width: 100px; height: 100px; border-radius: 50%;
            background: #C9A86A; display: flex; align-items: center; justify-content: center;
            margin: 0 auto 1.5rem; font-size: 2.2rem; font-weight: bold; color: #000;
            box-shadow: 0 0 40px rgba(201,168,106,0.3);
          }
          h1 { font-size: 1.3rem; color: #C9A86A; margin-bottom: 0.5rem; }
          p { color: #888; font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.5; }
          .btn {
            display: inline-flex; align-items: center; gap: 10px;
            background: #25D366; color: white; padding: 14px 28px;
            border-radius: 50px; text-decoration: none; font-size: 1rem; font-weight: 600;
            box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          }
          .btn:active { transform: scale(0.97); }
          .tip {
            margin-top: 2rem; padding: 10px 14px; background: rgba(255,255,255,0.05);
            border-radius: 10px; font-size: 0.75rem; color: #555; line-height: 1.4;
          }
          .tip b { color: #888; }
        `}</style>
      </head>
      <body>
        <div className="wrap">
          <div className="logo">Q</div>
          <h1>Hotel Quintas de Bogotá</h1>
          <p>Chatea con nosotros por WhatsApp. Respuesta inmediata sobre disponibilidad, precios y reservas.</p>
          <a href={waUrl} target="_blank" rel="noopener" className="btn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Abrir WhatsApp
          </a>
          <div className="tip">
            <b>Instalar en tu celular:</b><br/>
            Menú ⋮ → <b>Agregar a pantalla principal</b>
          </div>
        </div>
      </body>
    </html>
  );
}
