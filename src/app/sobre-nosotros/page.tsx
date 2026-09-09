import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Hotel Quintas de Bogotá - Familia en Teusaquillo 10 Años",
  description: "Familia bogotana, 10 años en Teusaquillo, Licencia 49716. 470+ reseñas 8.8 Fabuloso. Conócenos antes de reservar.",
};

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl font-bold">No somos una cadena. Somos una familia en Teusaquillo desde hace 10 años.</h1>
        <p className="mt-4 text-gray-600">Licencia Turística 49716. NIT registrado. Hotel Quintas de Bogotá nació como casa familiar en Quinta Paredes y hoy es el hotel mejor valorado en ubicación (9.5/10) con 470+ reseñas 8.8 Fabuloso. No tenemos 300 habitaciones. Tenemos 11, y las conocemos todas.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="p-6"><div className="font-semibold">E-E-A-T: Experiencia real</div><p className="text-sm text-gray-600 mt-2">Vivimos en Teusaquillo. Sabemos a qué hora salir a la Embajada a pie, qué taxi tomar a El Dorado a las 4am y qué feria hay en Corferias esta semana. Eso no lo tiene una cadena.</p></Card>
          <Card className="p-6"><div className="font-semibold">Atención humana 24h</div><p className="text-sm text-gray-600 mt-2">Recepción 24h con equipo local. Te guardamos el celular para la Embajada, te imprimimos el DS-160 y te despertamos a las 5am. Eso es familia, no protocolo Marriott.</p></Card>
        </div>
        <div className="mt-6 p-6 bg-[#F5F1E8] rounded-2xl text-sm">
          <div className="font-semibold">Datos verificables (E-E-A-T para Google)</div>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Dirección: Cl. 22 Bis #44A-19, Teusaquillo, Bogotá - Ver en <a href="https://www.google.com/maps/search/?api=1&query=Cl.+22+Bis+%2344A-19+Teusaquillo+Bogota" className="underline" target="_blank">Google Maps</a></li>
            <li>Tel: +57 317 6760460 - Email: hotelquintasdebogota@gmail.com</li>
            <li>Google Business: 4.4/154 reseñas - Booking: 8.8/472 reseñas</li>
            <li>Licencia 49716 - 10 años operando</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
