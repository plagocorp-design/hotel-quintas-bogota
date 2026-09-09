export function cn(...inputs: (string|undefined|false|null|Record<string,boolean>)[]) {
  return inputs.flatMap(v=>{
    if(!v) return []
    if(typeof v==="string") return [v]
    if(typeof v==="object") return Object.entries(v).filter(([,b])=>b).map(([k])=>k)
    return []
  }).join(" ")
}
export const formatCOP = (n:number)=> new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);
export const hotel = {
  name: "Hotel Quintas de Bogotá",
  address: "Cl. 22 Bis #44A-19, Teusaquillo, Bogotá, Colombia",
  phone: "+57 317 6760460",
  phoneDisplay: "317 6760460",
  email: "hotelquintasdebogota@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cl.+22+Bis+%2344A-19+Teusaquillo+Bogota",
  whatsappUrl: (msg="Hola, quisiera información")=> `https://wa.me/573176760460?text=${encodeURIComponent(msg)}`,
};
