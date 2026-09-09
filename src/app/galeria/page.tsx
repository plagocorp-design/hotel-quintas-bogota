import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
const imgs=[
  "/booking-photos/01-609103266.jpg",
  "/booking-photos/02-609103978.jpg",
  "/booking-photos/03-636594083.jpg",
  "/booking-photos/04-609124083.jpg",
  "/booking-photos/05-636355138.jpg",
  "/booking-photos/06-636355060.jpg",
  "/booking-photos/07-609104203.jpg",
  "/booking-photos/08-609124190.jpg",
  "/booking-photos/09-636598306.jpg",
  "/booking-photos/10-636593776.jpg",
  "/booking-photos/11-636355221.jpg",
  "/booking-photos/12-636355115.jpg",
  "/booking-photos/13-636355086.jpg",
  "/booking-photos/14-609104557.jpg",
  "/booking-photos/15-609104396.jpg",
  "/booking-photos/16-609104278.jpg",
  "/booking-photos/17-609104057.jpg",
  "/booking-photos/18-609103876.jpg",
  "/booking-photos/19-609103826.jpg",
  "/booking-photos/20-609102019.jpg",
  "/booking-photos/21-609101906.jpg",
  "/booking-photos/22-609101832.jpg",
  "/booking-photos/23-609101796.jpg",
  "/booking-photos/24-609101700.jpg",
  "/booking-photos/25-609101623.jpg",
]
export default function Galeria(){
  return (
    <>
      <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="font-serif text-3xl font-bold">Galería</h1>
        <p className="text-gray-600">25 fotos reales de Booking — habitaciones, baños, desayuno y zonas comunes.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {imgs.map((src,i)=> <img key={i} src={src} alt={`Hotel Quintas foto ${i+1}`} className="h-64 w-full object-cover rounded-2xl" loading="lazy"/>)}
        </div>
        <p className="text-xs text-gray-400 mt-4">Fotos originales de Booking.com - Hotel Quintas de Bogotá. Uso con autorización.</p>
      </div>
      <Footer/>
    </>
  )
}
