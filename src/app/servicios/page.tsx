import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import { Card } from "@/components/ui/card"
import { services } from "@/lib/mockData"
export default function Servicios(){
  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Servicios</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map(s=> <Card key={s.title} className="p-6"><div className="text-3xl">{s.icon}</div><div className="font-semibold mt-2">{s.title}</div><div className="text-sm text-gray-500">{s.desc}</div></Card>)}
        </div>
        <div className="mt-8 bg-[#F5F1E8] p-6 rounded-2xl">
          <div className="font-semibold">Normas de la casa</div>
          <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
            <li>Check-in desde 14:00</li>
            <li>Check-out a las 12:30</li>
            <li>No se admiten mascotas · No fumar</li>
            <li>Cancelación gratuita 24h</li>
            <li>Desayuno servido a las 9:00</li>
            <li>Parqueadero desde $10.000 (consultar según vehículo)</li>
            <li>Métodos de pago: Efectivo (-10%), transferencia Nequi/Daviplata, Visa, Master</li>
            <li>Guarda-equipaje y plancha sin costo</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}
